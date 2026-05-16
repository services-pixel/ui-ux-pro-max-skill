# Pest Control Landing Page (ShieldPest)

## Project Overview
- **Name**: ShieldPest — Professional Pest Control Services Landing Page
- **Goal**: A conversion-optimized single-page site that drives qualified leads into the embedded GorillaDesk contact form.
- **Stack**: Hono (Cloudflare Pages) · Tailwind CSS (CDN) · Font Awesome · Google Fonts (Plus Jakarta Sans + Inter)

## URLs
- **GitHub**: https://github.com/services-pixel/ui-ux-pro-max-skill
- **Sandbox preview**: https://3000-i7866we87fl5j98k5v65j-0e616f0a.sandbox.novita.ai
- **Production (Cloudflare Pages)**: ⏳ Not deployed yet — pending Cloudflare API key setup in the Deploy tab

## Functional Entry Points
| Method | Path | Description |
|--------|------|-------------|
| `GET`  | `/`  | Renders the full landing page (nav, hero, trust bar, services, why-us, process, reviews, FAQ, contact, footer) |

The only third-party integration is the **GorillaDesk** embed (`account_id: 0d73a25092e5c1c9769a9f3255caa65a`), loaded client-side from `https://portal-embed-v3.gorilladesk.com/js/contact/contact.js` and rendered into `<div id="gorilladesk-contact-form">` on `window.load`.

## Page Sections (in order)
1. **Sticky navigation** — logo, anchor links (Services / Why Us / Process / Reviews / FAQ), phone number, primary CTA
2. **Hero** — gradient background, headline + subhead, dual CTA (form + phone), trust strip (rating, licensed, eco-friendly), and a hero side-card listing key promises
3. **Trust stat bar** — 4 quick stats (years, treatments, rating, response time)
4. **Services grid** — 8 pest-type cards (termites, roaches, rodents, wasps, ants, mosquitoes, bed bugs, spiders & more)
5. **Why Us** — 4 benefit cards (licensed, safe, guarantee, same-day) + CTA
6. **Process** — numbered 4-step flow (contact → inspect → treat → protect)
7. **Testimonials** — 3 5-star reviews on a dark navy backdrop with overall rating
8. **FAQ** — 5 expandable accordion items (safety, speed, cost, guarantee, in-home requirements)
9. **Contact** — contact info cards (phone, email, area, hours) + the GorillaDesk form
10. **Footer** — quick links, contact info, copyright
11. **Floating call button** — mobile-only, fixed bottom-right

## UX / Interaction Details
- Smooth scroll between anchors (`scroll-behavior: smooth` + 80px scroll-padding to clear sticky header)
- `IntersectionObserver`-powered scroll reveal on every major block (`.reveal` → `.in`)
- Sticky header gains a soft shadow once the page is scrolled past 8px
- Soft pulse animation on primary CTAs (hero + floating mobile button)
- Hover states: service cards lift their border + icon color flips to filled green
- FAQ uses native `<details>`/`<summary>` with a rotating chevron — no JS needed for accordion logic

## Design System
| Token | Value | Use |
|-------|-------|-----|
| `brand.green` | `#2D6A4F` | Primary brand color |
| `brand.green-dark` | `#1F4F3A` | Hover for green CTAs |
| `brand.green-light` | `#52B788` | Accents on dark backgrounds |
| `brand.navy` | `#1B2A4A` | Text, hero gradient, footer |
| `brand.navy-dark` | `#0F1A30` | Deep footer |
| `brand.orange` | `#F4A261` | Primary CTA color |
| `brand.orange-dark` | `#E08A3C` | CTA hover |
| `brand.cream` | `#FAF7F2` | Section dividers (warm beige) |

- **Display font**: Plus Jakarta Sans (extrabold for headings)
- **Body font**: Inter
- **Icons**: Font Awesome 6.4

## Data Architecture
- **Data Models**: None server-side. Lead form submissions are owned and stored by **GorillaDesk** (the embedded form posts directly to their service).
- **Storage Services**: None on Cloudflare. All form data lives in the GorillaDesk account.
- **Data Flow**: Visitor → clicks CTA → smooth-scrolls to `#contact` → fills GorillaDesk form → submission goes directly to GorillaDesk → business is notified inside the GorillaDesk dashboard.

## Completed Features
- [x] Full marketing landing page with 10 distinct sections
- [x] Sticky navigation with anchor links and dual CTAs
- [x] Tailwind-based design system with custom brand palette
- [x] 8-pest services grid with icons and hover states
- [x] Trust stats, testimonials, and 4-step process visualization
- [x] Native HTML accordion FAQ (5 items, smooth height animation)
- [x] Scroll-reveal animations with staggered delays + smooth scroll
- [x] Mobile-friendly with floating tap-to-call button
- [x] GorillaDesk widget integration (inline CTA opens popup form via postMessage)
- [x] SEO meta description, OG tags, theme-color, favicon
- [x] Pushed to GitHub `main`

### Visual Polish Pass (inspired by the referenced design libraries)
- [x] **Hero** — animated gradient mesh background + 3 floating blob shapes (Haikei-style) + SVG wave divider into the next section (Getwaves)
- [x] **Trust stats** — count-up animation on scroll into view, with `easeOutCubic` interpolation (Animista)
- [x] **Service cards** — Hover.css "Float Shadow" lift + icon rotate-scale on hover, plus a soft ground shadow that fades in
- [x] **Why-Us cards** — soft neumorphism (Neumorphism.io) with inset shadow on hover
- [x] **Process steps** — animated gradient connector line that draws across the row on scroll (Codrops-style)
- [x] **Testimonials** — true glassmorphism cards (`backdrop-blur` + saturated transparency) over an animated mesh backdrop (Glassmorphism.com)
- [x] **FAQ** — smooth `max-height` transition on open/close, chevron with cubic-bezier overshoot (Whirl)
- [x] **CTAs** — CSSFX-style elastic hover scaling, active-state press, and a diagonal sheen-sweep on hover
- [x] **Form CTA card** — animated conic-gradient ring orbiting the card edge for premium feel
- [x] **Form button retry spinner** — pure-CSS ring loader using `conic-gradient` mask (css-loaders.com pattern)
- [x] **Accessibility** — `prefers-reduced-motion` media query disables all animations for users who request it

## Not Yet Implemented
- [ ] Real business details filled in (phone number, email, service-area city, real company name — currently uses "ShieldPest" as a placeholder brand)
- [ ] Cloudflare Pages production deployment (needs Cloudflare API key configured in the Deploy tab)
- [ ] Service-area map (e.g. Google Maps embed or a styled list of zip codes/cities)
- [ ] Pricing or plan tiers (one-time / quarterly / annual)
- [ ] Real customer photos / logos / certification badges
- [ ] Privacy Policy and Terms pages (footer links currently `#`)
- [ ] Analytics (Cloudflare Web Analytics, GA4, or Plausible)
- [ ] Production-grade Tailwind build (currently uses the CDN script — fine for a landing page but emits a console warning)
- [ ] Localization / Spanish version

## Recommended Next Steps
1. **Fill in the placeholders** in `src/index.tsx`: replace every `(XXX) XXX-XXXX`, `+1XXXXXXXXXX`, `info@yourcompany.com`, `[Your City]`, and the `ShieldPest` brand name with the real business details.
2. **Deploy to Cloudflare Pages** — configure the Cloudflare API key in the Deploy tab, then run `npx wrangler pages deploy dist --project-name <your-name>` for a permanent `*.pages.dev` URL.
3. **Verify the GorillaDesk form actually renders** on the live URL by scrolling to the contact section. If it stays empty, log into the GorillaDesk portal and confirm the contact form is enabled for account `0d73a25092e5c1c9769a9f3255caa65a`.
4. **Swap testimonial avatars/names** for real customer initials once you have permission, and link the dark testimonial section to a "see all reviews on Google" CTA.
5. **Add analytics + conversion tracking** so you can measure CTA clicks vs. form submissions.
6. **Move Tailwind to a build step** (or switch to UnoCSS / static CSS) to remove the CDN warning and shave the page weight.
7. **Add Privacy Policy & Terms pages** at `/privacy` and `/terms` and link them from the footer.

## Local Development
```bash
# Build
npm run build

# Run in sandbox (port 3000, via PM2)
pm2 start ecosystem.config.cjs

# Tail logs (non-blocking)
pm2 logs webapp --nostream

# Restart after src changes
npm run build && pm2 restart webapp

# Stop
pm2 delete webapp
```

## Deployment
- **Platform**: Cloudflare Pages (configured via `wrangler.jsonc`)
- **Build output**: `dist/_worker.js` (~64 kB)
- **Status**: ❌ Not deployed to Cloudflare yet (sandbox preview only)
- **Last Updated**: 2026-05-16
