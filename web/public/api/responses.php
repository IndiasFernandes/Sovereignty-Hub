<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    require_admin();
    $id = trim((string) ($_GET['id'] ?? ''));
    if ($id !== '') {
        $stmt = pdo()->prepare('SELECT * FROM consultation_responses WHERE id = ? LIMIT 1');
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        if (!$row) {
            json_response(['error' => 'Not found'], 404);
        }
        json_response(row_to_api($row));
    }

    $stmt = pdo()->query('SELECT * FROM consultation_responses ORDER BY created_at DESC');
    $rows = array_map('row_to_api', $stmt->fetchAll() ?: []);
    json_response($rows);
}

if ($method === 'PATCH') {
    require_admin();
    $body = read_json_body();
    $id = trim((string) ($body['id'] ?? ''));
    if ($id === '') {
        json_response(['error' => 'Missing id'], 400);
    }
    if (!array_key_exists('admin_notes', $body)) {
        json_response(['error' => 'Missing admin_notes'], 400);
    }
    $notes = (string) $body['admin_notes'];
    $stmt = pdo()->prepare('UPDATE consultation_responses SET admin_notes = ? WHERE id = ?');
    $stmt->execute([$notes, $id]);
    json_response(['ok' => true]);
}

json_response(['error' => 'Method not allowed'], 405);
