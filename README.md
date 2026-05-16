# Castle Exterminators — Pest Control Landing Page

## Project Overview
- **Name**: Castle Exterminators — Trusted Pest Control in Durham, NC
- **Goal**: A conversion-optimized single-page site that drives qualified leads in Durham, NC and surrounding communities into the embedded GorillaDesk contact form.
- **Stack**: Hono (Cloudflare Pages) · Tailwind CSS (CDN) · Font Awesome · Google Fonts (Plus Jakarta Sans + Inter)

## URLs
- **GitHub**: https://github.com/services-pixel/ui-ux-pro-max-skill
- **Sandbox preview**: https://3000-i7866we87fl5j98k5v65j-0e616f0a.sandbox.novita.ai
- **Production (Cloudflare Pages)**: ⏳ Not deployed yet — pending Cloudflare API key setup in the Deploy tab
- **Reference site (original)**: https://castleexterminators.gorilladesksites.com/

## Business Details (live in the site)
| Item | Value |
|------|-------|
| Business name | Castle Exterminators |
| Location | Durham, NC & surrounding NC communities |
| Phone | (919) 606-6866 |
| Email | info@castleexterminators.co |
| Years in business | 8+ |
| Homes protected | 1,000+ |
| Rating | 5.0★ on Google & Yelp |
| Family-owned since | 2017 |

## Functional Entry Points
| Method | Path | Description |
|--------|------|-------------|
| `GET`  | `/`  | Renders the full landing page (nav, hero, trust bar, services, why-us, process, reviews, FAQ, contact, footer) |
| `GET`  | `/services/termites` | Termite control & inspection detail page |
| `GET`  | `/services/roaches` | Roach extermination detail page |
| `GET`  | `/services/rodents` | Rodent removal & exclusion detail page |
| `GET`  | `/services/ants` | Ant control detail page |
| `GET`  | `/services/mosquitoes` | Mosquito reduction detail page |
| `GET`  | `/services/general-pest-control` | General quarterly pest control detail page |
| `GET`  | `/services/crawl-space-encapsulation` | Full crawl space encapsulation detail page |
| `GET`  | `/static/castle-logo.png` | Real Castle Exterminators logo (PNG) |

Each service detail page includes: SEO-optimized title & meta, hero image with breadcrumbs, signs/symptoms checklist, 3-step approach, FAQ accordion, a sticky CTA sidebar with phone + free-inspection button, and cross-links to other services.

The only third-party integration is the **GorillaDesk** embed (`account_id: 0d73a25092e5c1c9769a9f3255caa65a`), loaded client-side from `https://portal-embed-v3.gorilladesk.com/js/contact/contact.js`. The widget renders as a floating chat-bubble; an inline CTA button (`#open-gd-form`) triggers it via `postMessage({type: 'send-open-contact'})` to `#gorilladesk-portal-widget-contact`.

## Page Sections (in order)
1. **Sticky navigation** — Castle wordmark with chess-rook icon, anchor links (Services / Why Us / Process / Reviews / FAQ), phone, primary CTA
2. **Hero** — animated gradient mesh + warm amber floating blobs, headline "Keep your castle pest-free.", dual CTA, trust strip (5.0★, Licensed & Insured in NC, Family-owned since 2017)
3. **Trust stat bar** — 8+ Years serving Durham · 1,000+ Durham homes protected · 5.0★ Google & Yelp · 2 hr response
4. **Services grid** — 7 service cards, each with a real photo, hover-zoom, and link to its own detail page (termites, roaches, rodents, ants, mosquitoes, general pest control, **full crawl space encapsulation**)
5. **Why Us** — Local & Family-Owned · Eco-Friendly Treatments · Satisfaction Guaranteed · Licensed & Certified
6. **Process** — 4-step Durham-localized flow with phone in step 1
7. **Testimonials** — Real customer quotes from Sarah J., Michael P., and Emily R. (sourced from the existing Castle Exterminators site)
8. **FAQ** — 5 Durham-localized accordion items (treatment safety, response time, pricing, guarantee, indoor requirements)
9. **Contact** — "Ready to take back your castle?" + GorillaDesk inline CTA + direct phone / email / area / hours cards
10. **Footer** — Castle Exterminators brand, quick links, contact info, copyright
11. **Floating call button** — mobile-only tap-to-call

## Design System
| Token | Value | Use |
|-------|-------|-----|
| `brand.green` | `#067133` | Castle Exterminators primary brand color |
| `brand.green-dark` | `#045724` | Hover for green CTAs |
| `brand.green-light` | `#3CA862` | Accents on dark backgrounds |
| `brand.navy` | `#1B2A4A` | Text, hero gradient, footer |
| `brand.navy-dark` | `#0F1A30` | Deep footer |
| `brand.orange` | `#F4A261` | Primary CTA + hero mesh blob accent |
| `brand.orange-dark` | `#E08A3C` | CTA hover |
| `brand.cream` | `#FAF7F2` | Section dividers (warm beige) |

- **Display font**: Plus Jakarta Sans (extrabold for headings)
- **Body font**: Inter
- **Icons**: Font Awesome 6.4
- **Logo**: Real Castle Exterminators logo (`/static/castle-logo.png`) used in nav, footer, and OG image — boxed-letter wordmark

## Data Architecture
- **Data Models**: None server-side. Lead form submissions are owned and stored by **GorillaDesk**.
- **Storage Services**: None on Cloudflare. All form data lives in the Castle Exterminators GorillaDesk account (numeric `owner_id: 2147`).
- **Data Flow**: Durham visitor → clicks "Get Free Inspection" → GorillaDesk popup opens → fills form → submission goes directly to GorillaDesk → Castle Exterminators is notified inside the GorillaDesk dashboard.

## User Guide
1. Visit the live site.
2. Either tap the **"Get Free Inspection"** CTA (opens the GorillaDesk popup) or tap the phone number to call Castle Exterminators directly at (919) 606-6866.
3. Fill in name, contact info, pest issue and submit — Castle Exterminators receives it inside GorillaDesk and follows up (typically within 2 hours during business hours).

## Completed Features
- [x] Full marketing landing page with 10 distinct sections
- [x] Sticky navigation with anchor links and dual CTAs
- [x] Tailwind-based design system with **real Castle brand color `#067133`**
- [x] 9-pest services grid matching Castle's actual service list (incl. silverfish, fleas & bed bugs)
- [x] Trust stats, real testimonials (Sarah J., Michael P., Emily R.), and 4-step process visualization
- [x] Native HTML accordion FAQ (5 items, Durham-localized)
- [x] Scroll-reveal animations with staggered delays + smooth scroll
- [x] Mobile-friendly with floating tap-to-call button
- [x] GorillaDesk widget integration (inline CTA opens popup form via postMessage)
- [x] SEO meta description, OG tags, theme-color `#067133`, 🏰 favicon
- [x] Pushed to GitHub `main`

### Visual Polish Pass
- [x] **Hero** — animated gradient mesh + warmer amber/green floating blobs + SVG wave divider
- [x] **Trust stats** — count-up animation on scroll-in (`easeOutCubic`)
- [x] **Service cards** — Float-Shadow lift + icon rotate-scale on hover
- [x] **Why-Us cards** — soft neumorphism with inset shadow on hover
- [x] **Process steps** — animated gradient connector line draws across on scroll
- [x] **Testimonials** — glassmorphism cards (`backdrop-blur`) over animated mesh
- [x] **FAQ** — smooth `max-height` transition with cubic-bezier chevron
- [x] **CTAs** — elastic hover scaling + diagonal sheen-sweep
- [x] **Form CTA card** — animated conic-gradient ring
- [x] **Accessibility** — `prefers-reduced-motion` disables all animations

### Castle Exterminators Rebrand
- [x] Brand color swap to real `#067133` (was `#2D6A4F`)
- [x] All contact info localized: (919) 606-6866 · info@castleexterminators.co · Durham, NC
- [x] Real customer testimonials (Sarah J., Michael P., Emily R.)
- [x] Why-Us, Process, FAQ, Contact all localized to Durham, NC
- [x] Hero mesh blobs warmed to amber/dusk palette matching Castle's aesthetic

### Real Logo & Service Pages
- [x] **Real Castle Exterminators logo** integrated at `/static/castle-logo.png` — replaces the chess-rook glyph in nav, footer, and OG image
- [x] **Service cards show photos**: every service card on the landing page has a CC-licensed photo with hover-zoom and a floating icon badge
- [x] **Individual service detail pages** at `/services/<slug>` — each with hero image, breadcrumbs, signs/symptoms checklist, 3-step approach, FAQ accordion, and a sticky CTA sidebar (phone + free inspection)
- [x] Each service page cross-links to other services + has its own SEO meta + OG image

### Latest updates
- [x] **Updated logo asset** — refreshed `/static/castle-logo.png` with the cleaner two-row Castle Exterminators wordmark
- [x] **New Roaches image** — swapped to a clearer German cockroach macro photo (landing card + detail page hero)
- [x] **New General Pest Control image** — swapped to an exterminator-inspection photo that better represents the recurring service (landing card + detail page hero)
- [x] **Removed Silverfish service** — card, route (`/services/silverfish`), and detail page eliminated; services list now totals **7**: termites, roaches, rodents, ants, mosquitoes, general pest control, full crawl space encapsulation

## Not Yet Implemented
- [ ] Cloudflare Pages production deployment (needs Cloudflare API key in Deploy tab)
- [ ] Service-area map (Google Maps embed of the Durham/Raleigh/Chapel Hill triangle)
- [ ] Pricing or plan tiers
- [ ] Privacy Policy and Terms pages (footer links currently `#`)
- [ ] Analytics (Cloudflare Web Analytics, GA4, or Plausible)
- [ ] Production-grade Tailwind build (currently uses CDN — emits a console warning)
- [ ] Spanish version

## Recommended Next Steps
1. **Deploy to Cloudflare Pages** — configure the Cloudflare API key in the Deploy tab, then run `npx wrangler pages deploy dist --project-name castle-exterminators` for a permanent `*.pages.dev` URL.
2. **Verify the GorillaDesk form** by clicking "Get Free Inspection" on the live URL and submitting a test lead.
3. **Add analytics + conversion tracking** to measure CTA clicks vs. form submissions.
4. **Add a Durham service-area map** to reinforce local presence.
5. **Move Tailwind to a build step** (or switch to UnoCSS / static CSS) to remove the CDN warning.
6. **Add Privacy Policy & Terms pages** at `/privacy` and `/terms` and link them from the footer.

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
- **Build output**: `dist/_worker.js` (~154 kB)
- **Status**: ❌ Not deployed to Cloudflare yet (sandbox preview only)
- **Tech Stack**: Hono + TypeScript + Tailwind CSS (CDN) + Fraunces serif + Plus Jakarta Sans + GorillaDesk widget
- **Last Updated**: 2026-05-16

## Recent design refresh — Nature / Eco direction
Swapped the old corporate green + navy + apricot palette for a warmer,
more earthy nature-led system inspired by Coolors / Happy Hues / Khroma.

**Palette tokens** (`brand.*`):
| Token | Hex | Use |
|-------|------|-----|
| `green` | `#1F6F4A` | Primary trust color (forest emerald) |
| `green-dark` | `#13502F` | Pressed / hover states |
| `green-light` | `#3FA372` | Hero blob, accents |
| `green-mist` | `#D7EBDF` | Subtle background washes |
| `navy` | `#1E2A24` | Body text (mossy ink) |
| `navy-dark` | `#0E1612` | Deepest background |
| `orange` | `#C2663B` | Terracotta CTA (replaces apricot) |
| `orange-dark` | `#A0502C` | CTA hover |
| `orange-soft` | `#F1C9A8` | Soft warm wash |
| `cream` | `#F7F2E7` | Warm parchment section bg |
| `sand` | `#EADFC7` | Deeper earthy neutral |
| `bone` | `#FBF8F1` | Near-white page background |
| `leaf` | `#A7C9A4` | Pale leaf accent for badges |

**Typography**:
- Display: `Fraunces` (variable serif, optical-sizing 144, SOFT axis 50)
- Body: `Plus Jakarta Sans` (400 / 500 / 600 / 700 / 800)
- `.serif-italic` helper for accenting words inline in headings

**New visual touches**:
- Hero now uses a forest-emerald → ink-charcoal gradient with grainy
  fractal noise overlay (mix-blend-mode: overlay) for a "grainy
  gradient" film texture.
- Subtle SVG leaf pattern overlay on the Services section
  (`bg-leaf-pattern` Tailwind utility, encoded inline).
- Two large blurred radial accents on the "Why Us" section
  (green-mist + orange-soft) for soft eco mood.
- Section backgrounds now alternate `bone → cream → bone → sand/40`
  for a calm, natural rhythm.
- Neumo cards updated with warmer parchment + leaf-tinted border.
- Testimonials mesh kept dark but recoloured to forest/terracotta and
  got a matching grain overlay.
- Pulse / sheen / dropdown / nav-underline all retuned to the new
  emerald & terracotta tokens.
