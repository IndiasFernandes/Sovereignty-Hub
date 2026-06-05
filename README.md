# Sovereignty Hub

EECA Hub site and consultation platform for [sovereigntyhub.innovations4health.org](https://sovereigntyhub.innovations4health.org/).

## Repository layout

| Path | Description |
|------|-------------|
| `index.html`, `consultation.html`, … | Static marketing site (legacy) |
| `web/` | React + Vite app, PHP API, and deployment docs |
| `docs/` | Investment proposal and pillar documentation |
| `assets/` | Shared images and diagrams |

## Development

```bash
cd web
npm install
npm run dev
```

Production build and FTP deployment: see [web/DEPLOY.md](web/DEPLOY.md).
