# CULTFORM B2B — Industrial 3D-Farm Investment Platform

A modern, high-performance landing and interactive yield calculation web application for **CULTFORM**, focused on trust management of industrial 3D-printing equipment and B2B manufacturing of custom radio-electronic apparatus (РЭА) enclosures, IoT devices, and automation hardware for design bureaus (КБ) and R&D centers.

---

## 📌 Project Overview

**CULTFORM** operates an industrial 3D-printing farm offering a turnkey trust-management investment model:
- **Unit Entry Point:** $1,000 per module ($697 equipment + $303 raw materials/feedstock).
- **Yield Profile:** 4%–8% monthly passive yield (average ~6% monthly / ~72% annual return).
- **Security & Buyback:** Fixed trust-management contract with scheduled monthly payouts and guaranteed material/equipment refund options (100% material + 50–100% equipment buyback upon contract completion).
- **B2B Market Demand:** Production of DIN-rail enclosures (SLS PA12), industrial L3 network switches/routers (FDM Carbon & SLA with threaded M3/M4 brass inserts), and custom prototyping batches for Russian R&D hardware vendors.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) with static HTML export (`output: 'export'`) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`, `tw-animate-css`) |
| **Component System** | [Radix UI](https://www.radix-ui.com/) primitives + [shadcn/ui](https://ui.shadcn.com/) design system |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | `Plus Jakarta Sans` via `next/font/google` |
| **Analytics** | `@vercel/analytics` |
| **CI/CD & Hosting** | GitHub Actions (`.github/workflows/deploy.yml`) deploying to GitHub Pages |

---

## 📂 Project Architecture & Directory Structure

```text
cultform-b2b/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated static build & deployment workflow
├── app/
│   ├── favicon.ico             # Brand favicon
│   ├── globals.css             # Tailwind v4 theme definitions, neon palette tokens, slider styles
│   ├── layout.tsx              # Root HTML layout, font setup, SEO metadata & Vercel Analytics
│   └── page.tsx                # Main single-page application containing all sections & calculator
├── components/
│   ├── theme-provider.tsx      # Theme provider wrapper (next-themes)
│   └── ui/                     # Comprehensive Radix/shadcn UI component library (50+ components)
├── hooks/
│   ├── use-mobile.ts           # Mobile viewport detection hook
│   └── use-toast.ts            # Toast notification management hook
├── lib/
│   └── utils.ts                # Tailwind class merger (clsx + tailwind-merge)
├── public/                     # Static media assets (3D-farm photos, macro prints, router batches)
│   ├── CNAME                   # Custom domain configuration for GitHub Pages
│   ├── printed_router_batch.jpg
│   ├── printer_farm_lab.jpg
│   └── router_detail_macro.jpg
├── components.json             # shadcn/ui configuration
├── next.config.mjs             # Next.js export & basePath config
├── package.json                # Project dependencies and script commands
├── postcss.config.mjs          # PostCSS configuration for Tailwind v4
└── tsconfig.json               # TypeScript compiler options & path aliases (`@/*`)
```

---

## 💻 Core Application Sections (`app/page.tsx`)

1. **Top Navigation (`#hero`)**: Fixed translucent blur navigation bar with quick smooth-scroll jumps and CTA.
2. **Hero Section (`#hero`)**: Primary value proposition, key metric badges ($1,000 entry, 4–8% yield, 24/7 farm, B2B R&D focus), and hardware visual.
3. **Investment Model (`#model`)**: 5-step workflow (Equipment Purchase → Official Contract → CULTFORM Management → Monthly Payouts → Refund/Scale) and guarantee highlights.
4. **B2B Production Justification (`#production`)**: Market problem vs. CULTFORM AI & 3D prototyping approach; high-margin product category breakdowns (DIN-rail modules, network routers, designer series); farm spec highlights (up to 500 mm/s speed, 0.05–0.16 mm layer precision, 24/7 uptime).
5. **Interactive Yield Calculator (`#calculator`)**:
   - Direct module counter & investment dollar input (multiples of $1,000).
   - Contract duration slider (1 to 5 years).
   - Compound auto-reinvestment toggle (simulates re-purchasing $1,000 modules each time accumulated earnings reach unit cost threshold).
   - Computed returns: Monthly payout, annual income, total return including equipment refund.
6. **Reliability & Guarantees (`#reliability`)**: Intellectual property compliance (Open Source CC BY / commercial licensing), safe logistics packaging, raw material supply security (PLA+/PA12), steady B2B demand, weekly maintenance/spare parts reserve, and backup power generator redundancy.
7. **2026 B2B Directions (`#cases`)**: Real-world application cases for automation devices, IoT controllers, and industrial L3 switch chassis.
8. **Footer**: Legal entity info, navigation anchors, and copyright.

---

## ⚡ Getting Started & Local Development

### Prerequisites
- **Node.js**: `20.x` or later
- **npm** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/cultform3d/cultform-b2b.git
cd cultform-b2b

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building & Static Export

```bash
npm run build
```
This produces a static export in the `./out` directory configured with `output: 'export'` in [`next.config.mjs`](file:///home/aiuser/kostia/present/cultform-b2b/next.config.mjs).

---

## 🎨 Design System & Styling Conventions

- **Aesthetic:** Dark industrial cyberpunk/modern fintech UI with high-contrast glowing accents.
- **Color Tokens Defined in [`globals.css`](file:///home/aiuser/kostia/present/cultform-b2b/app/globals.css):**
  - `--color-background`: `#09090b`
  - `--color-surface`: `#18181b`
  - `--color-border`: `#27272a`
  - `--color-muted`: `#a1a1aa`
  - `--color-accent`: `#f66023` (Neon Orange)
  - `--color-neon-purple`: `#736df5`
  - `--color-neon-green`: `#0fbb42`
  - `--color-neon-yellow`: `#ffc200`
  - `--color-neon-blue`: `#3b82f6`
- **Asset Paths:** All public assets loaded via `<img>` tags use `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/<filename>` to ensure portability across custom domains and GitHub Pages subpaths.

---

## 🤖 Guidelines for Future AI Agents

When editing or extending this codebase:

1. **Static Export Preservation**: The project builds to static files (`out/`). Avoid introducing dynamic Next.js Server Components, cookies/headers middleware, or dynamic API routes without updating `next.config.mjs` and deployment targets accordingly.
2. **Path Aliasing**: Use `@/components/...`, `@/lib/...`, and `@/hooks/...` configured via [`tsconfig.json`](file:///home/aiuser/kostia/present/cultform-b2b/tsconfig.json).
3. **Calculator Mathematical Logic**:
   - Base module unit: `$1000` (step: `$1000`).
   - Average monthly rate: `0.06` (6%).
   - Material refund: `$303` / unit; Equipment buyback: `$697` / unit.
   - Any modifications to financial logic should remain synchronized between single payout and reinvestment simulation branches in [`app/page.tsx`](file:///home/aiuser/kostia/present/cultform-b2b/app/page.tsx).
4. **B2B Industrial Terminology**: Maintain accurate engineering terminology (РЭА, КБ, ОГК, DIN-рейка 35 мм, SLS PA12, FDM Carbon, SLA, латунные втулки M3/M4, PCB).
