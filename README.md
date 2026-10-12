# DDK Roofing — Landing

Landing informativa de DDK Roofing LLC (React + Vite + TypeScript + Tailwind + Framer Motion + Lenis), servida por un Express pequeño que también recibe el formulario de cotización.

## Desarrollo

```bash
npm install
npm run build && npm start   # http://localhost:3000
npm run dev                  # Vite con recarga (el /api se proxea a :3000)
```

## Railway

- Build: `npm run build` · Start: `npm start` (ya configurado en `railway.json`)
- Healthcheck: `/api/health`

### Variables de entorno (opcionales, para el formulario)

| Variable | Ejemplo |
| --- | --- |
| `RESEND_API_KEY` | `re_...` |
| `CONTACT_TO` | `info@ddkroofing.com` |
| `CONTACT_FROM` | `DDK Roofing Website <noreply@ddkroofing.com>` (dominio verificado en Resend) |

Sin `RESEND_API_KEY` el sitio funciona igual; el formulario muestra "llámanos al (352) 534-4343".
