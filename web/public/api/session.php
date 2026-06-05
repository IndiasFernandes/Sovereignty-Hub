<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    json_response(['error' => 'Method not allowed'], 405);
}

if (empty($_SESSION['admin_id'])) {
    json_response(['authenticated' => false]);
}

json_response([
    'authenticated' => true,
    'username' => (string) ($_SESSION['admin_username'] ?? 'admin'),
]);
