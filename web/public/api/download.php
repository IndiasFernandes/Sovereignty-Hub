<?php
declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

require_admin();

$file = basename((string) ($_GET['file'] ?? ''));
if ($file === '' || strpos($file, '..') !== false) {
    json_response(['error' => 'Invalid file'], 400);
}

$path = __DIR__ . '/uploads/' . $file;
if (!is_readable($path)) {
    json_response(['error' => 'Not found'], 404);
}

$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $path) ?: 'application/octet-stream';
finfo_close($finfo);

header('Content-Type: ' . $mime);
header('Content-Disposition: attachment; filename="' . $file . '"');
readfile($path);
exit;
