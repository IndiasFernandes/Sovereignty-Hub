<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Method not allowed'], 405);
}

$uploadDir = __DIR__ . '/uploads';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$payloadRaw = $_POST['payload'] ?? null;
if (!is_string($payloadRaw) || $payloadRaw === '') {
    json_response(['error' => 'Missing payload'], 400);
}

$payload = json_decode($payloadRaw, true);
if (!is_array($payload)) {
    json_response(['error' => 'Invalid payload JSON'], 400);
}

$id = preg_replace('/[^a-f0-9-]/', '', (string) ($payload['id'] ?? ''));
if (strlen($id) !== 36) {
    $id = sprintf(
        '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        random_int(0, 0xffff),
        random_int(0, 0xffff),
        random_int(0, 0xffff),
        random_int(0, 0x0fff) | 0x4000,
        random_int(0, 0x3fff) | 0x8000,
        random_int(0, 0xffff),
        random_int(0, 0xffff),
        random_int(0, 0xffff),
    );
}

$formVersion = (string) ($payload['form_version'] ?? 'discovery-v1');
if (!in_array($formVersion, ['discovery-v1', 'quick-v1'], true)) {
    json_response(['error' => 'Invalid form_version'], 400);
}

$uploads = [];
$fileFields = ['qa8_upload', 'qb8_upload', 'qc10_upload'];
$maxBytes = (int) ($CONFIG['max_upload_bytes'] ?? 10485760);

foreach ($fileFields as $field) {
    if (!isset($_FILES[$field]) || !is_array($_FILES[$field])) {
        continue;
    }
    $file = $_FILES[$field];
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_NO_FILE) {
        continue;
    }
    if (($file['error'] ?? UPLOAD_ERR_OK) !== UPLOAD_ERR_OK) {
        json_response(['error' => "Upload failed for {$field}"], 400);
    }
    if (($file['size'] ?? 0) > $maxBytes) {
        json_response(['error' => 'File too large'], 400);
    }
    $ext = pathinfo((string) $file['name'], PATHINFO_EXTENSION) ?: 'bin';
    $ext = preg_replace('/[^a-zA-Z0-9]/', '', $ext) ?: 'bin';
    $destName = $field . '.' . $ext;
    $destPath = $uploadDir . '/' . $id . '_' . $destName;
    if (!move_uploaded_file((string) $file['tmp_name'], $destPath)) {
        json_response(['error' => "Could not save {$field}"], 500);
    }
    $uploads[$field] = 'uploads/' . $id . '_' . $destName;
}

$answers = $payload['answers'] ?? [];
if (!is_array($answers)) {
    json_response(['error' => 'Invalid answers'], 400);
}

$autoTags = $payload['auto_tags'] ?? [];
if (!is_array($autoTags)) {
    $autoTags = [];
}

$contact = $payload['contact'] ?? null;
if ($contact !== null && !is_array($contact)) {
    json_response(['error' => 'Invalid contact'], 400);
}

$row = [
    'id' => $id,
    'form_version' => $formVersion,
    'respondent_type' => (string) ($payload['respondent_type'] ?? 'D'),
    'country' => isset($payload['country']) ? (string) $payload['country'] : null,
    'role' => isset($payload['role']) ? (string) $payload['role'] : null,
    'language' => isset($payload['language']) ? (string) $payload['language'] : null,
    'answers' => json_encode($answers, JSON_UNESCAPED_UNICODE),
    'urgency_score' => (int) ($payload['urgency_score'] ?? 0),
    'partner_readiness_score' => isset($payload['partner_readiness_score'])
        ? (int) $payload['partner_readiness_score']
        : null,
    'auto_tags' => json_encode(array_values($autoTags), JSON_UNESCAPED_UNICODE),
    'contact' => $contact ? json_encode($contact, JSON_UNESCAPED_UNICODE) : null,
    'uploads' => count($uploads) ? json_encode($uploads, JSON_UNESCAPED_UNICODE) : null,
];

try {
    $stmt = pdo()->prepare(
        'INSERT INTO consultation_responses
        (id, form_version, respondent_type, country, role, language, answers,
         urgency_score, partner_readiness_score, auto_tags, contact, uploads)
        VALUES
        (:id, :form_version, :respondent_type, :country, :role, :language, :answers,
         :urgency_score, :partner_readiness_score, :auto_tags, :contact, :uploads)',
    );
    $stmt->execute($row);
} catch (PDOException $e) {
    json_response(['error' => 'Database error', 'detail' => $e->getMessage()], 500);
}

$apiRow = row_to_api(array_merge($row, [
    'answers' => $answers,
    'auto_tags' => $autoTags,
    'contact' => $contact,
    'uploads' => count($uploads) ? $uploads : null,
    'created_at' => gmdate('c'),
    'admin_notes' => null,
]));

notify_team($CONFIG, $apiRow);

json_response(['id' => $id, 'stored' => true]);
