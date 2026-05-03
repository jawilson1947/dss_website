# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint validation
```

No test suite is configured.

## Architecture

This is a **Next.js App Router** site for Digital Support Systems (DSS), a technology services company. It uses React 19, TypeScript, and Tailwind CSS exclusively for styling.

### Routing

All pages live under `app/` using file-based routing:
- `app/page.tsx` — home page
- `app/about/`, `app/contact/`, `app/case-studies/` — top-level pages
- `app/services/` — nested service pages (access-control, it-infrastructure, technology-plan), some with further sub-pages (e.g., `/services/access-control/isonas`)

Most pages are server components. `app/contact/page.tsx` is a client component (`"use client"`) due to form state.

### Components

Shared components live in `components/`:
- `header.tsx` / `footer.tsx` — site-wide layout (rendered in `app/layout.tsx`)
- `service-cards.tsx` — reusable card grid, accepts a typed `Card[]` prop array
- `cta-band.tsx` — call-to-action section used across service pages

### API Routes

- `app/api/contact/route.ts` — POST handler for the contact form; sends email via SendGrid with honeypot spam protection and HTML escaping
- `app/api/estimator/route.ts` — estimator form handler

### Styling

Tailwind CSS only — no CSS modules or external UI libraries. Site uses a dark theme: `slate-950` background, `amber-500` accent color. Responsive breakpoint is `md:` (768px).

### SVGs

SVGs can be imported as React components via SVGR (configured in `next.config.ts` webpack config).

### Environment Variables

Required in `.env.local`:
- `SENDGRID_API_KEY` — email sending
- `CONTACT_TO_EMAIL` — recipient (defaults to `info@digitalsupportsystems.com`)
- `CONTACT_FROM_EMAIL` — sender address

### Path Alias

`@/*` maps to the project root (configured in `tsconfig.json`).
