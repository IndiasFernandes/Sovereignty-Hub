-- Run in cPanel → phpMyAdmin (select your database first)

CREATE TABLE IF NOT EXISTS consultation_responses (
  id CHAR(36) NOT NULL PRIMARY KEY,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  form_version VARCHAR(32) NOT NULL,
  respondent_type VARCHAR(8) NOT NULL,
  country VARCHAR(64) DEFAULT NULL,
  role VARCHAR(255) DEFAULT NULL,
  language VARCHAR(32) DEFAULT NULL,
  answers JSON NOT NULL,
  urgency_score INT NOT NULL DEFAULT 0,
  partner_readiness_score INT DEFAULT NULL,
  auto_tags JSON DEFAULT NULL,
  contact JSON DEFAULT NULL,
  uploads JSON DEFAULT NULL,
  admin_notes TEXT DEFAULT NULL,
  INDEX idx_created_at (created_at DESC),
  INDEX idx_country (country),
  INDEX idx_respondent_type (respondent_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS admin_users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(64) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default admin (change password immediately after first login):
-- Username: admin  Password: ChangeMeNow!
INSERT INTO admin_users (username, password_hash)
SELECT 'admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
WHERE NOT EXISTS (SELECT 1 FROM admin_users WHERE username = 'admin');
