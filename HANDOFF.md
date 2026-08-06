# EECA Lung Health Sovereignty Hub — Session Handoff

> Read this first when resuming on another machine. Then verify against `git log`
> and the live site — this doc reflects state as of **2026-08-06** and may lag.

## Project identity
- **What:** EECA Lung Health "Sovereignty Hub" — marketing site + consultation platform.
- **Live domain:** `https://eecalunghealth.com` (this is the current production domain).
- **Old domain (legacy):** `sovereigntyhub.innovations4health.org` — being retired.
- **Repo:** this directory. Branches: `main` = stable/deployed, `dev` = working.
- **Live app lives in `web/`** (React + Vite + TypeScript). Root-level `index.html`
  etc. are the FROZEN legacy static site — do not develop there.

## Backend truth (IMPORTANT)
- **Active backend = PHP + MySQL.** Frontend calls PHP endpoints via
  `web/src/lib/api.ts` → `submit.php`, `login.php`, `responses.php`, etc.
  Deploy/setup documented in `web/DEPLOY.md`.
- **Supabase is DEAD.** `web/supabase/` (migration `001_consultation_responses.sql`
  + edge function `notify-submission`) was SUPERSEDED by the MySQL backend and is
  NOT wired to anything. Candidate for deletion/cleanup — confirm before removing.

## Deploy mechanism
- **Manual FTP** of `web/dist/` per `web/DEPLOY.md` is the historical path.
- `.github/workflows/deploy.yml` — CI build + rsync-over-SSH targeting
  `eecalunghealth.com`. It's `workflow_dispatch`-only (push auto-deploy is
  commented out) and depends on `DEPLOY_SSH_KEY/HOST/USER/PORT/DEPLOY_PATH`
  GitHub secrets. Verify those secrets exist before relying on CI.
- Never overwrite server files `api/config.php` or `api/uploads/` on deploy.

## Where we left off (open tasks)
1. **Merge + deploy 2 pending features so they go live** (authorized by owner):
   - `4a9ec0e` feat(footer): Innerflect as a foundational partner (logo + wordmark)
   - `248134a` content(team): Gayané → "Civil Society & Strategic Partnerships Lead" (EN+RU)
   - These are on `dev`, NOT on `main`, so not yet live. Merge `dev → main`, then
     deploy (CI `workflow_dispatch` or manual FTP).
2. **Verify the live site is working online** (was in progress; interrupted when the
   Bash safety classifier was briefly unavailable). Check: home, /solution, /team,
   /contact, /consultation, /admin/login, /api/session.php all return 200.
3. **Review the admin to-do list** — after deploy, go through outstanding tasks from
   the admin panel / consultation responses.
4. **Rebranded platform images (not done):** `platform-image-prompts.md` (repo root)
   has 6 ChatGPT/DALL·E prompts, but `web/public/assets/images/platform/*.png` are
   still the old June-5 placeholders. Regenerate → swap in → rebuild WebP → deploy.

## Reconnecting on the new machine
- Log into Claude Code with the Anthropic account **hello@innerflect.tech** so the
  claude.ai connectors (Supabase, Drive, GitHub, Figma, Gmail…) reattach.
- Copy these secrets securely (NOT via git):
  - `~/.innerflect/credentials.env`
  - any `web/.env` / `.env.local`
  - `~/.claude.json` (optional — local MCP config/auth)
  - `web/api/config.php` is server-only; not needed locally.
- `cd web && npm install && npm run dev` to run locally.
- Verify MCPs with `/mcp`.

## Notes
- No vault SSOT exists for this project (unlike Essência). Git history + this file
  are the record.
