# Acme - Next.js Boilerplate

A production-ready Next.js 16 boilerplate with Tailwind CSS 4, shadcn/ui, and comprehensive SEO built in.

## Tech Stack

| Layer       | Technology                                    |
| ----------- | --------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org/) (App Router)|
| Language    | TypeScript 5.7                                |
| Styling     | Tailwind CSS 4 + shadcn/ui                    |
| Icons       | Lucide React                                  |
| Analytics   | Vercel Analytics                              |
| Package Mgr | pnpm                                          |

## Project Structure

```
app/
  layout.tsx          # Root layout (shared Header, Footer, metadata)
  page.tsx            # Home page (Hero + Organization JSON-LD)
  about/page.tsx      # About page (AboutPage JSON-LD)
  pricing/page.tsx    # Pricing page (FAQPage JSON-LD)
  sitemap.ts          # Dynamic XML sitemap (/sitemap.xml)
  robots.ts           # Dynamic robots.txt (/robots.txt)
  globals.css         # Tailwind 4 theme tokens
components/
  header.tsx          # Sticky nav with mobile menu
  hero.tsx            # Home hero section
  footer.tsx          # Multi-column footer
  about-hero.tsx      # About hero section
  about-values.tsx    # Company values grid
  about-team.tsx      # Team members grid
  pricing-hero.tsx    # Pricing hero section
  pricing-cards.tsx   # 3-tier pricing grid
  pricing-faq.tsx     # FAQ accordion
  ui/                 # shadcn/ui primitives
```

## Getting Started

### Prerequisites

- Node.js 18.18+ (20+ recommended)
- pnpm 9+

### Installation

```bash
# Clone the repo
git clone <your-repo-url> acme
cd acme

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Hot Module Replacement is enabled by default via Turbopack.

---

## Deployment Options

This boilerplate supports two rendering strategies. Choose one based on your needs.

### Option A: Server-Side Rendering (SSR) - Recommended

SSR renders pages on the server per request. This is the **default behavior** of Next.js App Router and requires **no config changes**. All pages in this project are already Server Components.

**When to use SSR:**

- Pages depend on request-time data (cookies, headers, database queries)
- Content updates frequently and must always be fresh
- You need middleware, authentication, or personalization

**Deploy to Vercel (zero config):**

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

Or connect your GitHub repository at [vercel.com/new](https://vercel.com/new) for automatic deployments on every push.

**Deploy to a self-hosted Node.js server:**

```bash
# Build the production bundle
pnpm build

# Start the Node.js server (default port 3000)
pnpm start

# Or specify a custom port
PORT=8080 pnpm start
```

Place this behind a reverse proxy (Nginx, Caddy) for TLS termination:

```nginx
# /etc/nginx/sites-available/acme
server {
    listen 443 ssl http2;
    server_name acme.com;

    ssl_certificate     /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Deploy with Docker:**

```dockerfile
# Dockerfile
FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# --- Dependencies ---
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# --- Build ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# --- Runner ---
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

> For Docker, enable standalone output in `next.config.mjs`:
>
> ```js
> const nextConfig = {
>   output: 'standalone',
> }
> ```

```bash
docker build -t acme .
docker run -p 3000:3000 acme
```

---

### Option B: Static Site Generation (SSG)

SSG pre-renders every page to static HTML at build time. The result is a folder of `.html`, `.css`, and `.js` files that can be served from any static host (CDN, S3, GitHub Pages, etc.) with no server required.

**When to use SSG:**

- All content is known at build time (no per-request data)
- You want the fastest possible page loads (pages served directly from CDN)
- You don't need middleware, server-only cookies, or per-request logic
- Ideal for marketing sites, documentation, and landing pages

**Step 1: Enable static export**

Update `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Required for static export
  },
}

export default nextConfig
```

**Step 2: Build**

```bash
pnpm build
```

This generates a static `out/` directory containing your entire site.

**Step 3: Preview locally**

```bash
npx serve out
```

**Step 4: Deploy to any static host**

| Host            | Command / Steps                                             |
| --------------- | ----------------------------------------------------------- |
| Vercel          | Auto-detects static export, just push to GitHub             |
| Netlify         | Set build command: `pnpm build`, publish directory: `out`   |
| AWS S3 + CF     | Upload `out/` to an S3 bucket with CloudFront in front      |
| GitHub Pages    | Push `out/` contents to the `gh-pages` branch               |
| Cloudflare Pages| Set build command: `pnpm build`, output directory: `out`    |
| Firebase Hosting| `firebase deploy` after setting public dir to `out`         |

**Important SSG limitations:**

- No server-side features: middleware, API routes (`app/api/`), server actions, `headers()`, `cookies()`
- The `sitemap.ts` and `robots.ts` files will be pre-rendered at build time (this is fine for static content)
- If you add dynamic routes later, you must provide `generateStaticParams()` for each one
- Image Optimization (`next/image`) requires `unoptimized: true` since there is no server

---

## SEO Features

This boilerplate includes comprehensive SEO following [Next.js SEO best practices](https://strapi.io/blog/nextjs-seo):

### Metadata API

- **Root layout:** `metadataBase`, Open Graph defaults, Twitter Card (`summary_large_image`), `robots` directives with googleBot-specific rules, `keywords`, `authors`, `creator`, `publisher`
- **Per-page overrides:** Each route exports unique `title`, `description`, `openGraph`, `twitter`, and `alternates.canonical` metadata
- **Title template:** `%s | Acme` ensures consistent page titles across the site

### Structured Data (JSON-LD)

| Page    | Schema Type    | Rich Result                          |
| ------- | -------------- | ------------------------------------ |
| Home    | `Organization` | Knowledge panel, brand sitelinks     |
| About   | `AboutPage`    | Enhanced about snippet               |
| Pricing | `FAQPage`      | FAQ rich snippets in search results  |

### Discovery

- **`/sitemap.xml`** - Auto-generated XML sitemap with `changeFrequency` and `priority` per route
- **`/robots.txt`** - Allows all crawlers, blocks `/api/` and `/_next/`, references the sitemap

### Semantic HTML

- Proper heading hierarchy (`h1` > `h2` > `h3`) on every page
- `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` semantic elements
- ARIA labels on navigation and interactive elements
- `sr-only` text for screen readers on icon-only buttons

---

## Configuration

### Updating the Site URL

The site URL (`https://acme.com`) is used in metadata, JSON-LD, sitemap, and robots. To change it, update these files:

| File                  | Constant / Value          |
| --------------------- | ------------------------- |
| `app/layout.tsx`      | `SITE_URL`                |
| `app/page.tsx`        | `jsonLd.url`              |
| `app/about/page.tsx`  | `metadata.alternates` + `jsonLd.url` |
| `app/pricing/page.tsx`| `metadata.alternates` + `jsonLd.url` |
| `app/sitemap.ts`      | `SITE_URL`                |
| `app/robots.ts`       | `sitemap` URL             |

> Tip: Extract `SITE_URL` into an `env` variable (`NEXT_PUBLIC_SITE_URL`) for a single source of truth.

### Adding New Pages

1. Create `app/<route>/page.tsx`
2. Export a `metadata` object with `title`, `description`, `openGraph`, `twitter`, and `alternates.canonical`
3. Add JSON-LD structured data if applicable
4. Add the route to `app/sitemap.ts`
5. Add navigation links in `components/header.tsx` and `components/footer.tsx`

### Environment Variables

| Variable                | Required | Description              |
| ----------------------- | -------- | ------------------------ |
| `NEXT_PUBLIC_SITE_URL`  | No       | Production URL override  |

No environment variables are required to run the project out of the box.

---

## Scripts

| Command      | Description                          |
| ------------ | ------------------------------------ |
| `pnpm dev`   | Start dev server (Turbopack)         |
| `pnpm build` | Create production build              |
| `pnpm start` | Start production Node.js server      |
| `pnpm lint`  | Run ESLint                           |

## License

MIT
