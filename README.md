# Pest Control Landing Page

## Project Overview
- **Name**: Professional Pest Control Services Landing Page
- **Goal**: A clean, conversion-focused single-page site that drives visitors to request a free pest inspection via an embedded GorillaDesk contact form.
- **Features**:
  - Gradient hero section with a single, strong call-to-action
  - Contact info card (phone, email, service area) ready to be filled in with real business details
  - Embedded **GorillaDesk** contact form (account `0d73a25092e5c1c9769a9f3255caa65a`) for lead capture
  - Smooth-scroll anchor from CTA to the contact form
  - Mobile-responsive (uses `clamp()` typography and a single-column layout)
  - SEO meta description and inline SVG favicon

## URLs
- **GitHub**: https://github.com/services-pixel/ui-ux-pro-max-skill
- **Sandbox preview**: https://3000-i7866we87fl5j98k5v65j-0e616f0a.sandbox.novita.ai
- **Production (Cloudflare Pages)**: ⏳ Not deployed yet — pending Cloudflare API key setup in the Deploy tab

## Functional Entry Points
| Method | Path | Description |
|--------|------|-------------|
| `GET`  | `/`  | Renders the full landing page (hero + contact section + GorillaDesk form) |

No backend API routes — the only third-party integration is the GorillaDesk embed script, which loads client-side from `https://portal-embed-v3.gorilladesk.com/js/contact/contact.js` and renders into `<div id="gorilladesk-contact-form">` on `window.load`.

## Data Architecture
- **Data Models**: None server-side. Lead form submissions are owned and stored by **GorillaDesk** (the embedded form posts directly to their service).
- **Storage Services**: None on Cloudflare. All form data lives in the GorillaDesk account.
- **Data Flow**: Visitor → clicks CTA → scrolls to `#contact` → fills GorillaDesk form → submission goes directly to GorillaDesk → business is notified inside the GorillaDesk dashboard.

## Tech Stack
- **Framework**: Hono (running on Cloudflare Pages / Workers runtime)
- **Build**: Vite (`@hono/vite-cloudflare-pages`)
- **Language**: TypeScript (TSX)
- **Styling**: Inline CSS (no framework) — palette `#2D6A4F` green, `#1B2A4A` navy, `#F4A261` orange
- **Process manager (dev)**: PM2 + `wrangler pages dev`

## Completed Features
- [x] Hero section with gradient, heading, subhead, and CTA button
- [x] Contact info card with phone / email / service area placeholders
- [x] GorillaDesk form embed wired with the provided `account_id`
- [x] Mobile-responsive layout
- [x] SEO meta description and favicon
- [x] Smooth-scroll behavior from CTA to form
- [x] Pushed to GitHub `main`

## Not Yet Implemented
- [ ] Real business details filled in (phone number, email, service-area city, company name in `<title>`)
- [ ] Cloudflare Pages production deployment (needs Cloudflare API key configured in the Deploy tab)
- [ ] Trust signals — testimonials, reviews, license / certification badges, "X years in business"
- [ ] Service breakdown section (termites, roaches, rodents, etc. as individual cards)
- [ ] Pricing or "Free Inspection" guarantee block
- [ ] Service-area map / list of cities served
- [ ] Analytics (e.g. Google Analytics, GA4, or Cloudflare Web Analytics)
- [ ] OG / Twitter social-share preview meta tags

## Recommended Next Steps
1. **Fill in the placeholders** in `src/index.tsx`: phone (`(XXX) XXX-XXXX` and `tel:+1XXXXXXXXXX`), email, `[Your City]`, and the page `<title>`.
2. **Configure Cloudflare API key** in the Deploy tab, then deploy to `pages.dev` with `npx wrangler pages deploy dist --project-name <name>`.
3. **Add trust content** — a "Why choose us" row with 3–4 icons (licensed, insured, family-owned, X reviews) usually doubles conversion on pest-control pages.
4. **Add a services grid** below the hero with one card per pest type, each with an icon and one-sentence description.
5. **Add Google Analytics or Cloudflare Web Analytics** to measure CTA clicks and form submissions.
6. **Add OG meta tags** so the page previews nicely when shared on Facebook / iMessage / WhatsApp.
7. **Lock down the GorillaDesk embed** — verify the form actually renders by opening the live URL and scrolling to the contact section; if it stays empty, the GorillaDesk portal may need the contact form enabled in account settings.

## Local Development
```bash
# Build
npm run build

# Run in sandbox (port 3000, via PM2)
pm2 start ecosystem.config.cjs

# Tail logs (non-blocking)
pm2 logs webapp --nostream

# Stop
pm2 delete webapp
```

## Deployment
- **Platform**: Cloudflare Pages (configured via `wrangler.jsonc`)
- **Status**: ❌ Not deployed to Cloudflare yet (sandbox preview only)
- **Last Updated**: 2026-05-16
