<?php
/**
 * Copy to config.php on the server (same folder). Never commit config.php.
 * cPanel → MySQL Databases: create DB + user, assign ALL PRIVILEGES.
 */
return [
    'db_host' => 'localhost',
    'db_name' => 'innova27_sovereignty',
    'db_user' => 'innova27_sovereignty_user',
    'db_pass' => 'YOUR_DB_PASSWORD',

    // Session cookie name (optional)
    'session_name' => 'eeca_admin',

    // Email on each submission (optional — uses PHP mail())
    'notify_email' => 'info@innovations4health.org',

    // Allowed upload MIME types
    'max_upload_bytes' => 10 * 1024 * 1024,
];
