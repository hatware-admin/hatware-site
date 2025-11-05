# Hatware Consulting — Website

A Next.js (App Router) + Tailwind CSS site containing the Hatware homepage and inline SVG logo.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo at https://vercel.com/new and deploy with defaults.
3. In your Vercel project, go to **Settings → Domains → Add** and add `hatwareconsulting.com`.
4. In **GoDaddy DNS**, set:
   - A record: `@` → `76.76.21.21` (TTL 600)
   - CNAME: `www` → `cname.vercel-dns.com` (TTL 600)
5. Back in Vercel, click **Verify** and set your preferred primary domain.
6. SSL cert is automatic.

> Keep Zoho Mail MX/TXT records unchanged to preserve email.

## Project structure

```
app/
  layout.tsx
  page.tsx
styles/
  globals.css
next.config.js
postcss.config.js
tailwind.config.js
tsconfig.json
package.json
```

## License
MIT
