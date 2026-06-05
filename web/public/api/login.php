<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['error' => 'Method not allowed'], 405);
}

$body = read_json_body();
$username = trim((string) ($body['username'] ?? ''));
$password = (string) ($body['password'] ?? '');

if ($username === '' || $password === '') {
    json_response(['error' => 'Username and password required'], 400);
}

$stmt = pdo()->prepare('SELECT id, username, password_hash FROM admin_users WHERE username = ? LIMIT 1');
$stmt->execute([$username]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, (string) $user['password_hash'])) {
    json_response(['error' => 'Invalid credentials'], 401);
}

$_SESSION['admin_id'] = (int) $user['id'];
$_SESSION['admin_username'] = (string) $user['username'];

json_response(['ok' => true, 'username' => $user['username']]);
