Landing page: Plataforma de analítica que permite visualizar y analizar datos para tomar mejores decisiones y hacer crecer el negocio para empresas y equipos que necesitan monitorear métricas, clientes y rendimiento desde un solo lugar.


## Desarrollo

Next.js (App Router, TypeScript). Requiere `.env.local` (no versionado) con `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` y `SUPABASE_SECRET_KEY`.

```bash
npm install
npm run dev   # http://localhost:3000
```

- `/` — landing. Los formularios envían a `/api/waitlist` y `/api/feedback`, que guardan en Supabase con la llave secreta (solo en servidor).
- `/admin` — panel privado (login con Supabase Auth, export CSV).
