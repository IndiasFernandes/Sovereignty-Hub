# Deploying EECA Hub (Sovereignty Hub subdomain)

**FTP:** `web@sovereigntyhub.innovations4health.org` → document root `/`

**Live URL:** https://sovereigntyhub.innovations4health.org/

The main site (`innovations4health.org`) is separate — do not deploy this build there.

---

## 1. Build locally

```bash
cd web
npm install
npm run build
```

Upload everything in `web/dist/` to the FTP root (including `api/`).

---

## 2. MySQL database (cPanel)

1. **cPanel → MySQL Databases**
   - Create database, e.g. `innova27_sovereignty`
   - Create user + strong password
   - Add user to database with **ALL PRIVILEGES**

2. **phpMyAdmin → Import** `api/schema.sql`

3. Default admin login (change immediately in phpMyAdmin):
   - Username: `admin`
   - Password: `password`
   - Update `password_hash` in `admin_users` using:
     ```sql
     UPDATE admin_users SET password_hash = 'YOUR_BCRYPT_HASH' WHERE username = 'admin';
     ```
     Generate hash on server: `php -r "echo password_hash('YourNewPassword', PASSWORD_DEFAULT);"`

---

## 3. API config on server

On the server only (never commit):

```bash
cp api/config.example.php api/config.php
```

Edit `api/config.php` with your MySQL host, database, user, password, and optional `notify_email`.

Ensure `api/uploads/` is writable by the web server (755 or 775).

---

## 4. Verify

| Check | URL |
|-------|-----|
| Site | https://sovereigntyhub.innovations4health.org/ |
| Consultation (header button) | /consultation |
| Admin login | /admin/login |
| API session | /api/session.php → `{"authenticated":false}` |
| Submit test | Complete form → row in `consultation_responses` table |

---

## Architecture

```
Browser (React SPA)
  → POST /api/submit.php        → MySQL (consultation_responses)
  → POST /api/login.php         → PHP session
  → GET  /api/responses.php     → Admin list (session required)
```

Files upload to `api/uploads/` (not web-accessible; download via `/api/download.php` when logged in).

Email notifications use PHP `mail()` when `notify_email` is set in config.

---

## Re-deploy after code changes

```bash
npm run build
# Upload dist/* via FTP (overwrite index.html, assets/, api/*.php)
# Do NOT overwrite api/config.php or api/uploads/ on the server
```
