import { Hono } from 'hono'

const app = new Hono()

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pest Control Durham NC | Castle Exterminators — Termites, Ants, Roaches & Mosquitoes</title>
    <meta name="description" content="Local pest control in Durham, NC. Castle Exterminators eliminates termites, ants, roaches, mice, mosquitoes & more with eco-friendly, family-safe treatments. Free inspection · 5.0★ on Google · Licensed & insured. Call (919) 606-6866.">
    <meta name="keywords" content="pest control Durham NC, exterminator Durham, termite control Durham, ant control Durham, roach exterminator Durham, mosquito control Durham, rodent removal Durham, eco-friendly pest control, family-safe pest control">
    <meta name="theme-color" content="#1F6F4A">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="Castle Exterminators">
    <meta name="geo.region" content="US-NC">
    <meta name="geo.placename" content="Durham, North Carolina">
    <link rel="canonical" href="https://castleexterminators.co/">

    <!-- Open Graph -->
    <meta property="og:site_name" content="Castle Exterminators">
    <meta property="og:title" content="Pest Control Durham NC | Castle Exterminators">
    <meta property="og:description" content="Family-owned, eco-friendly pest control in Durham, NC. Termites, ants, roaches, mosquitoes & more. Free inspection — (919) 606-6866.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://castleexterminators.co/">
    <meta property="og:image" content="https://castleexterminators.co/static/castle-logo.png">
    <meta property="og:locale" content="en_US">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Pest Control Durham NC | Castle Exterminators">
    <meta name="twitter:description" content="Family-owned, eco-friendly pest control in Durham, NC. Free inspection — (919) 606-6866.">
    <meta name="twitter:image" content="https://castleexterminators.co/static/castle-logo.png">

    <!-- Structured data: LocalBusiness + Organization (the most important schema for local Google rankings) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "PestControlService",
      "@id": "https://castleexterminators.co/#business",
      "name": "Castle Exterminators",
      "alternateName": "Castle Exterminators Durham NC",
      "description": "Family-owned local pest control company serving Durham, NC and surrounding communities. Eco-friendly, family-safe treatments for termites, ants, roaches, rodents, mosquitoes and more.",
      "url": "https://castleexterminators.co/",
      "telephone": "+1-919-606-6866",
      "email": "info@castleexterminators.co",
      "image": "https://castleexterminators.co/static/castle-logo.png",
      "logo": "https://castleexterminators.co/static/castle-logo.png",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Check",
      "foundingDate": "2017",
      "slogan": "Keep your castle pest-free.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Durham",
        "addressRegion": "NC",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.9940,
        "longitude": -78.8986
      },
      "areaServed": [
        { "@type": "City", "name": "Durham", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
        { "@type": "City", "name": "Chapel Hill", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
        { "@type": "City", "name": "Raleigh", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
        { "@type": "City", "name": "Cary", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
        { "@type": "City", "name": "Morrisville", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
        { "@type": "City", "name": "Hillsborough", "containedInPlace": { "@type": "State", "name": "North Carolina" } }
      ],
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      }],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pest Control Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Termite Control & Inspection", "url": "https://castleexterminators.co/services/termites" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roach Extermination", "url": "https://castleexterminators.co/services/roaches" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rodent Removal & Exclusion", "url": "https://castleexterminators.co/services/rodents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ant Control", "url": "https://castleexterminators.co/services/ants" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mosquito Reduction", "url": "https://castleexterminators.co/services/mosquitoes" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "General Pest Control", "url": "https://castleexterminators.co/services/general-pest-control" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crawl Space Encapsulation", "url": "https://castleexterminators.co/services/crawl-space-encapsulation" } }
        ]
      },
      "sameAs": []
    }
    </script>

    <!-- Structured data: WebSite (helps Google build sitelinks search box) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://castleexterminators.co/#website",
      "url": "https://castleexterminators.co/",
      "name": "Castle Exterminators",
      "description": "Family-owned pest control in Durham, NC",
      "publisher": { "@id": "https://castleexterminators.co/#business" },
      "inLanguage": "en-US"
    }
    </script>

    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏰</text></svg>">

    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      // NATURE / ECO palette — deep forest emerald + warm sand + terracotta CTA + ink charcoal
      // Inspired by Coolors / Happy Hues / Khroma nature palettes
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                // Primary trust color — deep forest emerald (replaces #067133)
                green:        '#1F6F4A',
                'green-dark': '#13502F',
                'green-light':'#3FA372',
                'green-mist': '#D7EBDF',  // subtle wash for backgrounds

                // Replaces "navy" — deep charcoal-ink for serious typography
                navy:        '#1E2A24',   // mossy ink
                'navy-dark': '#0E1612',

                // CTA — warm terracotta (replaces apricot orange)
                orange:       '#C2663B',  // terracotta
                'orange-dark':'#A0502C',
                'orange-soft':'#F1C9A8',  // soft warm wash

                // Cream + sand — warm earthy neutrals
                cream: '#F7F2E7',   // warm parchment
                sand:  '#EADFC7',   // deeper sand
                bone:  '#FBF8F1',   // brightest, near-white

                // Accent — pale leaf for tags & highlights
                leaf:  '#A7C9A4',
              }
            },
            fontFamily: {
              // Fraunces serif for display headings (warm, organic, trust)
              // Plus Jakarta Sans for body (clean modern)
              display: ['"Fraunces"', '"Plus Jakarta Sans"', 'system-ui', 'serif'],
              sans:    ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
              body:    ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
              'card':  '0 14px 36px -14px rgba(30,42,36,0.22)',
              'card-hover': '0 22px 50px -16px rgba(30,42,36,0.30)',
              'cta':   '0 14px 30px -8px rgba(194,102,59,0.45)',
              'inset-leaf': 'inset 0 0 0 1px rgba(31,111,74,0.10)',
            },
            backgroundImage: {
              // Subtle leaf hero-pattern (Hero Patterns style) — encoded SVG
              'leaf-pattern': 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill=%27%231F6F4A%27 fill-opacity=%270.06%27%3E%3Cpath d=%27M40 0c5 10 0 20-10 25 5 10 0 20-10 25C25 60 35 55 40 45c5 10 15 15 20 5-10-5-15-15-10-25-10-5-15-15-10-25z%27/%3E%3C/g%3E%3C/svg%3E")',
            }
          }
        }
      }
    </script>

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">

    <style>
      html { scroll-behavior: smooth; scroll-padding-top: 80px; }

      /* ---------------------------------------------------------------------------
         MATERIAL TEXT EMPHASIS SYSTEM
         All on-light text is layered as rgba(ink, alpha) so the page reads with
         a clear visual hierarchy.
           87% — High emphasis (body, headings, primary copy)
           60% — Medium emphasis (secondary, captions, helper text)
           38% — Disabled / lowest emphasis (placeholders, fine print)
         Reference ink color: #1E2A24 (brand.navy / mossy ink).
         --------------------------------------------------------------------------- */
      :root {
        --ink: 30, 42, 36;             /* #1E2A24 as RGB triplet  */
        --paper: 251, 248, 241;         /* #FBF8F1 (bone) for inverse */
        --emphasis-high:     0.87;
        --emphasis-medium:   0.60;
        --emphasis-disabled: 0.38;
      }

      body {
        font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif;
        color: rgba(var(--ink), var(--emphasis-high));  /* 87% — High emphasis baseline */
        background: #FBF8F1;
        font-feature-settings: 'ss01', 'cv11';
      }

      /* Semantic emphasis helpers (work on any background by recomposing the ink color) */
      .text-emphasis-high     { color: rgba(var(--ink), var(--emphasis-high))     !important; }
      .text-emphasis-medium   { color: rgba(var(--ink), var(--emphasis-medium))   !important; }
      .text-emphasis-disabled { color: rgba(var(--ink), var(--emphasis-disabled)) !important; }
      /* Inverse (for dark backgrounds — hero, testimonials, footer) */
      .text-emphasis-high-inv     { color: rgba(var(--paper), var(--emphasis-high))     !important; }
      .text-emphasis-medium-inv   { color: rgba(var(--paper), var(--emphasis-medium))   !important; }
      .text-emphasis-disabled-inv { color: rgba(var(--paper), var(--emphasis-disabled)) !important; }

      /* Map Tailwind grayscale utilities to the emphasis ladder ONLY on light
         surfaces — :not() excludes any descendant of a dark surface so footer,
         hero, testimonials and dark cards keep readable inverse colors. */
      :not(.hero-mesh):not(.testi-mesh):not(footer):not(.bg-brand-navy):not(.bg-brand-navy-dark):not(.hero-grain) > .text-slate-700,
      :not(.hero-mesh):not(.testi-mesh):not(footer):not(.bg-brand-navy):not(.bg-brand-navy-dark):not(.hero-grain) > .text-slate-800,
      :not(.hero-mesh):not(.testi-mesh):not(footer):not(.bg-brand-navy):not(.bg-brand-navy-dark):not(.hero-grain) > .text-slate-900,
      :not(.hero-mesh):not(.testi-mesh):not(footer):not(.bg-brand-navy):not(.bg-brand-navy-dark):not(.hero-grain) > .text-gray-700,
      :not(.hero-mesh):not(.testi-mesh):not(footer):not(.bg-brand-navy):not(.bg-brand-navy-dark):not(.hero-grain) > .text-gray-800,
      :not(.hero-mesh):not(.testi-mesh):not(footer):not(.bg-brand-navy):not(.bg-brand-navy-dark):not(.hero-grain) > .text-gray-900 {
        color: rgba(var(--ink), var(--emphasis-high)) !important;
      }
      /* Simpler fallback: tag-level rules that apply globally but get OVERRIDDEN
         by the dark-surface rules below. Tailwind's specificity makes this work. */
      .text-slate-700, .text-slate-800, .text-slate-900,
      .text-gray-700,  .text-gray-800,  .text-gray-900   { color: rgba(var(--ink), var(--emphasis-high))     !important; }
      .text-slate-500, .text-slate-600,
      .text-gray-500,  .text-gray-600                    { color: rgba(var(--ink), var(--emphasis-medium))   !important; }
      .text-slate-300, .text-slate-400,
      .text-gray-300,  .text-gray-400                    { color: rgba(var(--ink), var(--emphasis-disabled)) !important; }

      /* DARK-SURFACE OVERRIDES — these win on specificity because they include
         an ancestor selector. Inside hero / testimonials / footer / navy bgs,
         the grayscale utilities flip to the inverse paper ladder so text stays
         readable on dark backgrounds. */
      .hero-mesh .text-white, .hero-mesh .text-slate-100, .hero-mesh .text-slate-200,
      .testi-mesh .text-white, .testi-mesh .text-slate-100, .testi-mesh .text-slate-200,
      .hero-grain .text-white, .hero-grain .text-slate-100, .hero-grain .text-slate-200,
      footer .text-white,
      .bg-brand-navy .text-white, .bg-brand-navy .text-slate-100, .bg-brand-navy .text-slate-200,
      .bg-brand-navy-dark .text-white, .bg-brand-navy-dark .text-slate-100, .bg-brand-navy-dark .text-slate-200 {
        color: rgba(var(--paper), var(--emphasis-high)) !important;
      }
      .hero-mesh .text-slate-300,
      .testi-mesh .text-slate-300,
      .hero-grain .text-slate-300,
      footer .text-slate-300,
      footer.text-slate-300,
      .bg-brand-navy .text-slate-300,
      .bg-brand-navy-dark .text-slate-300,
      .bg-brand-navy-dark.text-slate-300 {
        color: rgba(var(--paper), var(--emphasis-medium)) !important;
      }
      .hero-mesh .text-slate-400, .hero-mesh .text-slate-500, .hero-mesh .text-slate-600,
      .testi-mesh .text-slate-400, .testi-mesh .text-slate-500, .testi-mesh .text-slate-600,
      .hero-grain .text-slate-400, .hero-grain .text-slate-500, .hero-grain .text-slate-600,
      footer .text-slate-400, footer .text-slate-500, footer .text-slate-600, footer .text-slate-700,
      footer.text-slate-400,
      .bg-brand-navy .text-slate-400, .bg-brand-navy .text-slate-500, .bg-brand-navy .text-slate-600,
      .bg-brand-navy-dark .text-slate-400, .bg-brand-navy-dark .text-slate-500, .bg-brand-navy-dark .text-slate-600 {
        color: rgba(var(--paper), var(--emphasis-disabled)) !important;
      }

      /* Footer descendants — anything WITHOUT an explicit text-* class inherits
         from <footer class="text-slate-300">. Force all footer text to paper-medium
         by default so paragraphs, list items and links stay readable on navy-dark. */
      footer { color: rgba(var(--paper), var(--emphasis-medium)) !important; }
      footer p, footer li, footer span, footer a, footer strong {
        color: inherit;
      }
      footer a:hover { color: rgba(var(--paper), var(--emphasis-high)) !important; }

      /* Headings — Fraunces serif w/ optical sizing, anchored at 87% high emphasis */
      h1, h2, h3 {
        font-family: 'Fraunces', 'Plus Jakarta Sans', Georgia, serif;
        letter-spacing: -0.015em;
        font-variation-settings: "opsz" 144, "SOFT" 50;
        color: rgba(var(--ink), var(--emphasis-high));
      }
      h4, h5, h6 {
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        letter-spacing: -0.01em;
        color: rgba(var(--ink), var(--emphasis-high));
      }
      /* Hero / dark-bg heading inversion — keep headings readable on dark surfaces */
      .hero-mesh h1, .hero-mesh h2, .hero-mesh h3,
      .testi-mesh h1, .testi-mesh h2, .testi-mesh h3,
      .hero-grain h1, .hero-grain h2, .hero-grain h3,
      .bg-brand-navy h1, .bg-brand-navy h2, .bg-brand-navy h3,
      .bg-brand-navy-dark h1, .bg-brand-navy-dark h2, .bg-brand-navy-dark h3,
      .bg-gradient-to-br.from-brand-green h1,
      .bg-gradient-to-br.from-brand-green h2,
      .bg-gradient-to-br.from-brand-green h3,
      footer h1, footer h2, footer h3, footer h4, footer h5 {
        color: rgba(var(--paper), var(--emphasis-high)) !important;
      }

      .font-display {
        font-family: 'Fraunces', 'Plus Jakarta Sans', Georgia, serif;
        font-variation-settings: "opsz" 144, "SOFT" 50;
      }

      /* Placeholders + disabled form elements automatically pick up the 38% layer */
      ::placeholder { color: rgba(var(--ink), var(--emphasis-disabled)); opacity: 1; }
      :disabled     { color: rgba(var(--ink), var(--emphasis-disabled)); }

      /* Brand-coloured text (text-brand-green, text-brand-orange, etc.) stays fully
         opaque on purpose — accent colors are emphatic by definition. */

      /* Custom ant icon — fa-ant is FontAwesome Pro only, so we replace it with
         an inline SVG that inherits currentColor and sizes via font-size like
         a real FA icon. */
      .fa-ant::before { content: '' !important; }
      .fa-ant {
        display: inline-block;
        width: 1em;
        height: 1em;
        background-color: currentColor;
        -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 32c-17.7 0-32 14.3-32 32v8.3c-23.6 4.5-44.7 16.4-60.5 33.4L130.3 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l46.3 46.3c-4.5 11-7.3 22.9-8 35.4l-50.6 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c4.6 11.8 11.1 22.7 19.1 32.3l-65.3 49C68.1 354.4 64 362.9 64 372c0 17.7 14.3 32 32 32l5.3 0c10.1 0 19.6-4.7 25.6-12.8L173.3 320c11.4 5.9 23.9 9.9 37.3 11.5l0 9.2-39.4 39.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l24.4-24.4c4.6 24.2 25.9 42.5 51.5 42.5s46.9-18.3 51.5-42.5l24.4 24.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L373.3 340.7l0-9.2c13.4-1.6 25.9-5.6 37.3-11.5l46.3 71.2c6 8.1 15.5 12.8 25.6 12.8l5.3 0c17.7 0 32-14.3 32-32 0-9.1-4.1-17.6-11.5-23.3l-65.3-49c8-9.6 14.5-20.5 19.1-32.3l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.6 0c-.7-12.5-3.5-24.4-8-35.4l46.3-46.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-33.2 33.2c-15.8-17-37-28.9-60.5-33.4L320 64c0-17.7-14.3-32-32-32l-32 0z'/></svg>") no-repeat center / contain;
                mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 32c-17.7 0-32 14.3-32 32v8.3c-23.6 4.5-44.7 16.4-60.5 33.4L130.3 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l46.3 46.3c-4.5 11-7.3 22.9-8 35.4l-50.6 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c4.6 11.8 11.1 22.7 19.1 32.3l-65.3 49C68.1 354.4 64 362.9 64 372c0 17.7 14.3 32 32 32l5.3 0c10.1 0 19.6-4.7 25.6-12.8L173.3 320c11.4 5.9 23.9 9.9 37.3 11.5l0 9.2-39.4 39.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l24.4-24.4c4.6 24.2 25.9 42.5 51.5 42.5s46.9-18.3 51.5-42.5l24.4 24.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L373.3 340.7l0-9.2c13.4-1.6 25.9-5.6 37.3-11.5l46.3 71.2c6 8.1 15.5 12.8 25.6 12.8l5.3 0c17.7 0 32-14.3 32-32 0-9.1-4.1-17.6-11.5-23.3l-65.3-49c8-9.6 14.5-20.5 19.1-32.3l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.6 0c-.7-12.5-3.5-24.4-8-35.4l46.3-46.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-33.2 33.2c-15.8-17-37-28.9-60.5-33.4L320 64c0-17.7-14.3-32-32-32l-32 0z'/></svg>") no-repeat center / contain;
        vertical-align: -0.125em;
      }

      /* ---------------------------------------------------------------------------
         60-30-10 COLOR PROPORTION SYSTEM
         The site's color balance is intentionally tuned to:
           60% — Dominant neutrals   (bone #FBF8F1 + cream #F7F2E7 + sand)
                                      page backgrounds, cards, large surfaces
           30% — Secondary brand     (forest emerald #1F6F4A + mossy ink #1E2A24)
                                      headings, nav links, icons, eyebrows, dark sections
           10% — Accent (rare!)      (terracotta #C2663B + leaf #A7C9A4)
                                      ONLY on CTAs (Free Inspection, phone FAB, form submit),
                                      review stars, single hero-word accent.
                                      Decorative orange icons have been demoted to leaf-green.
         --------------------------------------------------------------------------- */

      /* Pure terracotta accent is reserved for primary CTAs + 5-star ratings only.
         To enforce this and make rule-violations easy to spot, we give every
         direct usage of .bg-brand-orange a built-in CTA shadow + sheen. */
      .bg-brand-orange {
        box-shadow: 0 8px 24px -10px rgba(194,102,59,.5);
      }
      .bg-brand-orange:hover { box-shadow: 0 14px 30px -8px rgba(194,102,59,.6); }

      /* Decorative leaf accent — for soft secondary highlights (10% slot) */
      .accent-leaf {
        color: rgba(31,111,74, var(--emphasis-high));
        background: rgba(167,201,164,.20);
      }

      /* Section eyebrows — uniform high-emphasis green, tracked & uppercase
         These ARE the deliberate 30% identity moments — keep saturated. */
      .section-eyebrow {
        color: #1F6F4A;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.16em;
        font-size: 0.75rem;
        font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      }

      /* ---------------------------------------------------------------------------
         60-30-10 ENFORCEMENT — demote secondary green usages to neutral ink
         A previous pass painted nearly every icon, arrow, check & inline link
         green. That tips the page to ~64% green and breaks the proportion rule.
         These overrides surgically demote decorative greens to the warmer ink so
         the eye sees identity green only in eyebrows, icons-on-cards, key
         hover states, and primary brand elements. Terracotta stays rare,
         and where green WAS dominant we now use ink + terracotta highlights.
         --------------------------------------------------------------------------- */

      /* Inline decorative arrows / chevrons / bullet markers — demote to ink.
         They were green for flair; the 60-30-10 rule says they should recede. */
      .service-card .fa-arrow-right,
      .service-card .fa-chevron-right,
      .nav-service-arrow,
      .stat-card .stat-num + p,
      summary .fa-chevron-down,
      details .fa-chevron-down {
        color: rgba(var(--ink), var(--emphasis-medium)) !important;
      }

      /* "View all" style secondary links — slate-ink rather than competing green */
      a.text-brand-green.text-sm.font-semibold {
        color: rgba(var(--ink), var(--emphasis-high)) !important;
      }
      a.text-brand-green.text-sm.font-semibold:hover {
        color: #C2663B !important;   /* terracotta on hover = "you can click me" */
      }

      /* Decorative service-card hint arrows on hover — switch to terracotta so the
         hover signal is the accent, not more green */
      .service-card:hover .fa-arrow-right,
      .nav-service-card:hover .nav-service-arrow {
        color: #C2663B !important;
      }

      /* Check-mark bullets in "signs" lists — keep green but only at 60% so it
         feels like an accent rather than a primary message */
      .bg-brand-cream\/60 .fa-check,
      ul .text-brand-green-light .fa-check {
        opacity: 0.7;
      }

      /* FAQ chevron — neutralize to ink, accent green only when open */
      summary .chev { color: rgba(var(--ink), var(--emphasis-medium)); }
      details[open] summary .chev { color: #1F6F4A; }

      /* Hover state for nav-link — fade to ink-on-orange-underline so the link
         itself doesn't go FULL green */
      .nav-link:hover { color: rgba(var(--ink), var(--emphasis-high)); }
      .nav-link.active { color: #1F6F4A; }      /* Active stays green = identity */
      .nav-link::after { background: #C2663B; }  /* Underline accent = terracotta */
      .nav-link.active::after { background: #1F6F4A; }

      /* "5.0" review numbers / star ratings — terracotta is the accent here */
      .stars-terracotta i.fa-star { color: #C2663B; }

      /* Active section indicator next to the nav link (subtle dot) */
      .nav-link.active::before {
        content: '';
        position: absolute;
        left: -10px; top: 50%;
        width: 5px; height: 5px;
        border-radius: 50%;
        background: #C2663B;
        transform: translateY(-50%);
      }

      /* Decorative serif italic accent (for highlighted words inside headings) */
      .serif-italic { font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 500; }

      /* ---------------------------------------------------------------------------
         HERO — forest emerald gradient + Haikei organic blob shapes + grain
         --------------------------------------------------------------------------- */
      .hero-mesh {
        position: relative;
        background:
          radial-gradient(900px 600px at 12% 18%, rgba(63,163,114,0.40) 0%, transparent 60%),
          radial-gradient(700px 500px at 88% 78%, rgba(194,102,59,0.30) 0%, transparent 60%),
          radial-gradient(600px 400px at 60% 35%, rgba(167,201,164,0.22) 0%, transparent 65%),
          linear-gradient(135deg, #0E1612 0%, #1E2A24 40%, #13502F 100%);
        background-size: 200% 200%, 200% 200%, 200% 200%, 100% 100%;
        animation: meshShift 22s ease-in-out infinite alternate;
      }
      @keyframes meshShift {
        0%   { background-position: 0% 0%, 100% 100%, 50% 50%, 0% 0%; }
        100% { background-position: 100% 50%, 0% 0%, 30% 70%, 0% 0%; }
      }
      /* Grain overlay (Grainy Gradients style) */
      .hero-mesh::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        opacity: .35; mix-blend-mode: overlay;
      }
      .hero-blob {
        position: absolute; border-radius: 50%; filter: blur(70px); opacity: .38; pointer-events: none;
        will-change: transform;
      }
      .hero-blob.b1 { width: 320px; height: 320px; background: #3FA372; top: -80px; left: -60px; animation: floatA 14s ease-in-out infinite; }
      .hero-blob.b2 { width: 380px; height: 380px; background: #C2663B; bottom: -120px; right: -80px; animation: floatB 18s ease-in-out infinite; }
      .hero-blob.b3 { width: 220px; height: 220px; background: #A7C9A4; top: 30%; right: 20%; opacity: .28; animation: floatA 20s ease-in-out infinite reverse; }
      @keyframes floatA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,30px) scale(1.08); } }
      @keyframes floatB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-30px,-40px) scale(1.12); } }

      /* SVG wave divider sits at the bottom of the hero */
      .wave-divider { position: absolute; left: 0; right: 0; bottom: -1px; line-height: 0; }
      .wave-divider svg { display: block; width: 100%; height: 80px; }

      /* ---------------------------------------------------------------------------
         GLOBAL — scroll reveal
         --------------------------------------------------------------------------- */
      .reveal { opacity: 0; transform: translateY(28px); transition: opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
      .reveal.in { opacity: 1; transform: none; }
      .reveal-delay-1 { transition-delay: .08s; }
      .reveal-delay-2 { transition-delay: .16s; }
      .reveal-delay-3 { transition-delay: .24s; }
      .reveal-delay-4 { transition-delay: .32s; }

      /* ---------------------------------------------------------------------------
         CTA / BUTTONS — CSSFX-style elastic hover, sheen sweep, soft pulse
         --------------------------------------------------------------------------- */
      .cta-elastic { position: relative; overflow: hidden; transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s ease; }
      .cta-elastic:hover { transform: translateY(-3px) scale(1.02); }
      .cta-elastic:active { transform: translateY(0) scale(.98); transition-duration: .1s; }
      .cta-elastic::after {
        content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,.45), transparent);
        transform: skewX(-20deg); transition: left .7s ease;
      }
      .cta-elastic:hover::after { left: 130%; }

      @keyframes softPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(194,102,59,.55); } 50% { box-shadow: 0 0 0 18px rgba(194,102,59,0); } }
      .pulse { animation: softPulse 2.6s ease-out infinite; }

      /* ---------------------------------------------------------------------------
         SERVICE CARDS — Hover.css "Float Shadow" + subtle glassmorphism on hover
         --------------------------------------------------------------------------- */
      .service-card { transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease, border-color .3s ease, background .3s ease; position: relative; }
      .service-card::after {
        content: ''; position: absolute; left: 10%; right: 10%; bottom: -8px; height: 18px;
        background: radial-gradient(ellipse at center, rgba(30,42,36,.22), transparent 70%);
        opacity: 0; transition: opacity .4s ease, transform .4s ease; transform: scale(.6);
      }
      .service-card:hover { transform: translateY(-8px); }
      .service-card:hover::after { opacity: 1; transform: scale(1); }
      .service-icon { transition: transform .5s cubic-bezier(.34,1.56,.64,1), background-color .3s ease, color .3s ease; }
      .service-card:hover .service-icon { transform: rotate(-6deg) scale(1.08); }

      /* ---------------------------------------------------------------------------
         WHY-US CARDS — soft neumorphism on hover (Neumorphism.io style)
         --------------------------------------------------------------------------- */
      .neumo-card {
        background: #F7F2E7;
        border: 1px solid rgba(31,111,74,0.08);
        box-shadow: 10px 10px 24px rgba(180,170,148,.40), -8px -8px 22px #ffffff;
        transition: box-shadow .35s ease, transform .35s ease, border-color .25s ease;
      }
      .neumo-card:hover {
        box-shadow: inset 6px 6px 16px rgba(180,170,148,.35), inset -6px -6px 16px #ffffff;
        transform: translateY(-2px);
        border-color: rgba(31,111,74,0.22);
      }

      /* ---------------------------------------------------------------------------
         PROCESS — animated connector line (Codrops style)
         --------------------------------------------------------------------------- */
      .process-wrap { position: relative; }
      .process-line {
        position: absolute; left: 0; right: 0; top: 36px; height: 2px;
        background: linear-gradient(90deg, transparent, #1F6F4A 15%, #C2663B 50%, #1F6F4A 85%, transparent);
        transform-origin: left center; transform: scaleX(0); transition: transform 1.4s cubic-bezier(.22,1,.36,1) .2s;
        z-index: 0;
      }
      .process-line.in { transform: scaleX(1); }
      @media (max-width: 1023px) { .process-line { display: none; } }
      .process-step { position: relative; z-index: 1; transition: transform .35s ease, box-shadow .35s ease; }
      .process-step:hover { transform: translateY(-4px); box-shadow: 0 14px 34px -12px rgba(30,42,36,.22); }

      /* ---------------------------------------------------------------------------
         TESTIMONIALS — glassmorphism cards over animated mesh backdrop
         --------------------------------------------------------------------------- */
      .testi-mesh {
        position: relative;
        background:
          radial-gradient(700px 500px at 20% 30%, rgba(63,163,114,.30) 0%, transparent 60%),
          radial-gradient(600px 500px at 80% 70%, rgba(194,102,59,.22) 0%, transparent 60%),
          linear-gradient(135deg, #0E1612 0%, #1E2A24 100%);
      }
      .testi-mesh::before {
        content: ''; position: absolute; inset: 0; pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        opacity: .4; mix-blend-mode: overlay;
      }
      .glass {
        background: rgba(255,255,255,.07);
        backdrop-filter: blur(14px) saturate(140%);
        -webkit-backdrop-filter: blur(14px) saturate(140%);
        border: 1px solid rgba(255,255,255,.14);
        box-shadow: 0 10px 40px -10px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.08);
        transition: transform .4s ease, box-shadow .4s ease, background .4s ease;
      }
      .glass:hover { transform: translateY(-4px); background: rgba(255,255,255,.1); }

      /* ---------------------------------------------------------------------------
         FAQ — whirl-style accordion chevron spin
         --------------------------------------------------------------------------- */
      details[open] summary .chev { transform: rotate(180deg); background-color: rgba(31,111,74,.18); }
      summary .chev { transition: transform .45s cubic-bezier(.34,1.56,.64,1), background-color .25s ease; }
      summary { list-style: none; cursor: pointer; }
      summary::-webkit-details-marker { display: none; }
      details > div.faq-body { max-height: 0; overflow: hidden; opacity: 0; transition: max-height .35s ease, opacity .25s ease .05s; }
      details[open] > div.faq-body { max-height: 400px; opacity: 1; }

      /* ---------------------------------------------------------------------------
         CSS LOADERS — fancy ring for form button retry (css-loaders.com inspired)
         --------------------------------------------------------------------------- */
      .ring-loader { width: 18px; height: 18px; border-radius: 50%; display: inline-block; position: relative; vertical-align: -3px;
        background: conic-gradient(from 90deg, transparent 0 270deg, currentColor 270deg 360deg);
        -webkit-mask: radial-gradient(closest-side, transparent 60%, #000 62%);
                mask: radial-gradient(closest-side, transparent 60%, #000 62%);
        animation: ringSpin .9s linear infinite;
      }
      @keyframes ringSpin { to { transform: rotate(1turn); } }

      /* ---------------------------------------------------------------------------
         STAT COUNTERS
         --------------------------------------------------------------------------- */
      .stat-num { transition: color .3s ease; }
      .stat-card:hover .stat-num { color: #13502F; }

      /* ---------------------------------------------------------------------------
         FORM CTA card — soft sheen sweep on hover
         --------------------------------------------------------------------------- */
      #gorilladesk-contact-form { position: relative; overflow: hidden; }
      #gorilladesk-contact-form::before {
        content: ''; position: absolute; inset: -2px;
        background: conic-gradient(from 0deg, transparent 0deg, rgba(31,111,74,.30) 60deg, transparent 120deg, transparent 240deg, rgba(194,102,59,.28) 300deg, transparent 360deg);
        animation: ringRotate 16s linear infinite; z-index: 0; opacity: .35;
      }
      #gorilladesk-contact-form > * { position: relative; z-index: 1; }
      @keyframes ringRotate { to { transform: rotate(1turn); } }

      /* ---------------------------------------------------------------------------
         TOP MENU — minimal animations + Services slide-out mega dropdown
         --------------------------------------------------------------------------- */

      #site-header {
        transition: background-color .3s ease,
                    box-shadow .3s ease,
                    backdrop-filter .3s ease;
      }

      /* Scroll-aware shadow + tint */
      #site-header.nav-scrolled {
        background-color: rgba(251,248,241,.96);
        backdrop-filter: saturate(180%) blur(12px);
        -webkit-backdrop-filter: saturate(180%) blur(12px);
        box-shadow: 0 4px 20px -8px rgba(30,42,36,.18);
      }

      /* Top-level links — simple color + subtle underline on hover */
      .nav-link {
        position: relative;
        padding: .35rem 0;
        transition: color .25s ease;
      }
      .nav-link::after {
        content: '';
        position: absolute;
        left: 0; right: 0;
        bottom: -4px;
        height: 2px;
        border-radius: 2px;
        background: #1F6F4A;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform .35s cubic-bezier(.65,.05,.36,1);
      }
      .nav-link:hover,
      .nav-link:focus-visible,
      .nav-link.active { color: #1F6F4A; }
      .nav-link:hover::after,
      .nav-link:focus-visible::after,
      .nav-link.active::after { transform: scaleX(1); }

      /* ---- Services mega-dropdown ---- */
      .nav-services {
        /* the trigger <li> — hover anywhere here keeps the panel open */
        position: static;
      }
      .nav-services .nav-link i.fa-chevron-down {
        transition: transform .35s cubic-bezier(.22,1,.36,1);
      }
      .nav-services[data-open="true"] .nav-link i.fa-chevron-down {
        transform: rotate(180deg);
      }

      #services-dropdown {
        position: absolute;
        left: 0; right: 0;
        top: 100%;
        background: #FBF8F1;
        border-top: 1px solid rgba(31,111,74,.10);
        box-shadow: 0 22px 40px -18px rgba(30,42,36,.22);
        transform: translateY(-12px);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: transform .4s cubic-bezier(.22,1,.36,1),
                    opacity .3s ease,
                    visibility 0s linear .3s;
      }
      .nav-services[data-open="true"] #services-dropdown,
      #services-dropdown[data-open="true"] {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transition: transform .45s cubic-bezier(.22,1,.36,1),
                    opacity .3s ease,
                    visibility 0s linear 0s;
      }

      .nav-service-card {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity .4s ease, transform .45s cubic-bezier(.22,1,.36,1),
                    border-color .25s ease, background-color .25s ease;
      }
      .nav-services[data-open="true"] .nav-service-card,
      #services-dropdown[data-open="true"] .nav-service-card {
        opacity: 1;
        transform: translateY(0);
      }
      .nav-service-card:nth-child(1) { transition-delay: .05s; }
      .nav-service-card:nth-child(2) { transition-delay: .10s; }
      .nav-service-card:nth-child(3) { transition-delay: .15s; }
      .nav-service-card:nth-child(4) { transition-delay: .20s; }
      .nav-service-card:nth-child(5) { transition-delay: .25s; }
      .nav-service-card:nth-child(6) { transition-delay: .30s; }
      .nav-service-card:nth-child(7) { transition-delay: .35s; }

      .nav-service-card:hover {
        background: #F7F2E7;
        border-color: rgba(31,111,74,.4);
      }
      .nav-service-card .nav-service-icon {
        transition: transform .35s cubic-bezier(.34,1.56,.64,1),
                    background-color .25s ease, color .25s ease;
      }
      .nav-service-card:hover .nav-service-icon {
        background: #1F6F4A;
        color: #fff;
        transform: rotate(-6deg) scale(1.08);
      }
      .nav-service-card .nav-service-arrow {
        transition: transform .3s cubic-bezier(.22,1,.36,1), opacity .25s ease;
        opacity: 0;
        transform: translateX(-4px);
      }
      .nav-service-card:hover .nav-service-arrow {
        opacity: 1;
        transform: translateX(0);
      }

      /* Mobile hamburger */
      .nav-burger {
        position: relative;
        width: 26px; height: 20px;
        display: flex; flex-direction: column; justify-content: space-between;
        background: transparent; border: 0; padding: 0; cursor: pointer;
      }
      .nav-burger span {
        display: block;
        width: 100%;
        height: 2.5px;
        background: #1E2A24;
        border-radius: 4px;
        transition: transform .35s cubic-bezier(.65,.05,.36,1),
                    opacity .25s ease,
                    background-color .25s ease;
      }
      .nav-burger:hover span { background: #1F6F4A; }
      .nav-burger.open span:nth-child(1) { transform: translateY(8.75px) rotate(45deg); }
      .nav-burger.open span:nth-child(2) { opacity: 0; }
      .nav-burger.open span:nth-child(3) { transform: translateY(-8.75px) rotate(-45deg); }

      /* Mobile dropdown panel */
      #nav-mobile {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height .4s cubic-bezier(.22,1,.36,1), opacity .3s ease;
      }
      #nav-mobile.open {
        max-height: 720px;
        opacity: 1;
      }

      /* Mobile services sub-list slides open */
      #nav-mobile-services-list {
        max-height: 0;
        overflow: hidden;
        transition: max-height .4s cubic-bezier(.22,1,.36,1);
      }
      #nav-mobile-services-toggle[aria-expanded="true"] + #nav-mobile-services-list {
        max-height: 600px;
      }
      #nav-mobile-services-toggle i.fa-chevron-down {
        transition: transform .35s ease;
      }
      #nav-mobile-services-toggle[aria-expanded="true"] i.fa-chevron-down {
        transform: rotate(180deg);
      }

      /* ---------------------------------------------------------------------------
         Accessibility — respect reduced motion
         --------------------------------------------------------------------------- */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; }
      }
    </style>
</head>
<body class="bg-brand-bone antialiased text-brand-navy">

  <!-- ============== STICKY NAV — slide-out Services mega dropdown ============== -->
  <header id="site-header" class="fixed top-0 inset-x-0 z-50 bg-brand-bone/85 backdrop-blur border-b border-brand-green/10">
    <nav class="nav-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
      <a href="/" class="nav-logo flex items-center gap-3" aria-label="Castle Exterminators home">
        <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-10 sm:h-11 w-auto" />
        <span class="sr-only">Castle Exterminators</span>
      </a>

      <ul class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <li class="nav-services" data-open="false">
          <a href="#services" class="nav-link inline-flex items-center gap-1.5" data-section="services" aria-haspopup="true" aria-expanded="false" aria-controls="services-dropdown">
            Services
            <i class="fa-solid fa-chevron-down text-[10px] opacity-70" aria-hidden="true"></i>
          </a>
        </li>
        <li><a href="#why-us" class="nav-link" data-section="why-us">Why Us</a></li>
        <li><a href="#process" class="nav-link" data-section="process">Process</a></li>
        <li><a href="#reviews" class="nav-link" data-section="reviews">Reviews</a></li>
        <li><a href="#faq" class="nav-link" data-section="faq">FAQ</a></li>
      </ul>

      <div class="flex items-center gap-3">
        <a href="tel:+19196066866" class="nav-phone hidden sm:inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
          <span class="nav-phone-icon text-brand-green"><i class="fa-solid fa-phone-volume"></i></span>
          <span>(919) 606-6866</span>
        </a>
        <a href="#contact" class="nav-cta inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-navy font-bold text-sm px-4 py-2.5 rounded-lg shadow-cta transition-transform duration-300 hover:-translate-y-0.5">
          <span>Free Inspection</span>
          <span class="nav-cta-arrow"><i class="fa-solid fa-arrow-right text-xs"></i></span>
        </a>
        <button type="button" id="nav-burger" class="nav-burger md:hidden ml-1" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Services mega-dropdown panel (desktop) -->
      <div id="services-dropdown" role="menu" aria-label="Services" data-open="false" class="hidden md:block">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="flex items-center justify-between mb-5">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">Our Services</p>
              <h3 class="font-display font-extrabold text-xl text-brand-navy mt-1">Pest control across Durham, NC</h3>
            </div>
            <a href="#services" class="text-sm font-semibold text-brand-green hover:text-brand-green-dark inline-flex items-center gap-1.5">
              View all on home <i class="fa-solid fa-arrow-right text-[11px]"></i>
            </a>
          </div>

          <ul class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <li><a href="/services/termites" class="nav-service-card group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white" role="menuitem">
              <span class="nav-service-icon w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid fa-bug"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block text-sm font-bold text-brand-navy">Termite Control</span>
                <span class="block text-xs text-slate-500 leading-snug mt-0.5">Stop structural damage early.</span>
              </span>
              <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-green mt-3"></i>
            </a></li>

            <li><a href="/services/roaches" class="nav-service-card group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white" role="menuitem">
              <span class="nav-service-icon w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid fa-bugs"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block text-sm font-bold text-brand-navy">Roach Extermination</span>
                <span class="block text-xs text-slate-500 leading-snug mt-0.5">Wipe out the entire colony.</span>
              </span>
              <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-green mt-3"></i>
            </a></li>

            <li><a href="/services/rodents" class="nav-service-card group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white" role="menuitem">
              <span class="nav-service-icon w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid fa-house-chimney-crack"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block text-sm font-bold text-brand-navy">Rodent Removal</span>
                <span class="block text-xs text-slate-500 leading-snug mt-0.5">Mice & rats out — and sealed out.</span>
              </span>
              <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-green mt-3"></i>
            </a></li>

            <li><a href="/services/ants" class="nav-service-card group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white" role="menuitem">
              <span class="nav-service-icon w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid fa-ant"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block text-sm font-bold text-brand-navy">Ant Control</span>
                <span class="block text-xs text-slate-500 leading-snug mt-0.5">Eliminate the colony at the source.</span>
              </span>
              <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-green mt-3"></i>
            </a></li>

            <li><a href="/services/mosquitoes" class="nav-service-card group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white" role="menuitem">
              <span class="nav-service-icon w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid fa-mosquito"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block text-sm font-bold text-brand-navy">Mosquito Reduction</span>
                <span class="block text-xs text-slate-500 leading-snug mt-0.5">Reclaim your backyard all season.</span>
              </span>
              <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-green mt-3"></i>
            </a></li>

            <li><a href="/services/general-pest-control" class="nav-service-card group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white" role="menuitem">
              <span class="nav-service-icon w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid fa-shield-halved"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block text-sm font-bold text-brand-navy">General Pest Control</span>
                <span class="block text-xs text-slate-500 leading-snug mt-0.5">Quarterly year-round protection.</span>
              </span>
              <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-green mt-3"></i>
            </a></li>

            <li><a href="/services/crawl-space-encapsulation" class="nav-service-card group flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white" role="menuitem">
              <span class="nav-service-icon w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid fa-house-flag"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block text-sm font-bold text-brand-navy">Crawl Space Encapsulation</span>
                <span class="block text-xs text-slate-500 leading-snug mt-0.5">Seal out moisture, mold & pests.</span>
              </span>
              <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-green mt-3"></i>
            </a></li>

            <li><a href="#contact" class="nav-service-card group flex items-start gap-3 p-4 rounded-xl border border-brand-orange/40 bg-brand-orange/10" role="menuitem">
              <span class="nav-service-icon w-10 h-10 rounded-lg bg-brand-orange text-white grid place-items-center flex-shrink-0"><i class="fa-solid fa-phone-volume"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block text-sm font-bold text-brand-navy">Free Inspection</span>
                <span class="block text-xs text-slate-600 leading-snug mt-0.5">Talk to a Durham specialist.</span>
              </span>
              <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-orange mt-3"></i>
            </a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Mobile dropdown -->
    <div id="nav-mobile" class="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur">
      <ul class="px-4 sm:px-6 py-3 space-y-1 text-sm font-semibold text-slate-700">
        <li>
          <button type="button" id="nav-mobile-services-toggle" aria-expanded="false" aria-controls="nav-mobile-services-list"
                  class="w-full flex items-center justify-between px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">
            <span>Services</span>
            <i class="fa-solid fa-chevron-down text-[11px] opacity-70"></i>
          </button>
          <ul id="nav-mobile-services-list" class="pl-2 mt-1 space-y-1">
            <li><a href="/services/termites" class="flex items-center gap-2.5 px-2 py-2 text-sm rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition"><i class="fa-solid fa-bug w-4 text-brand-green"></i> Termite Control</a></li>
            <li><a href="/services/roaches" class="flex items-center gap-2.5 px-2 py-2 text-sm rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition"><i class="fa-solid fa-bugs w-4 text-brand-green"></i> Roach Extermination</a></li>
            <li><a href="/services/rodents" class="flex items-center gap-2.5 px-2 py-2 text-sm rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition"><i class="fa-solid fa-house-chimney-crack w-4 text-brand-green"></i> Rodent Removal</a></li>
            <li><a href="/services/ants" class="flex items-center gap-2.5 px-2 py-2 text-sm rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition"><i class="fa-solid fa-ant w-4 text-brand-green"></i> Ant Control</a></li>
            <li><a href="/services/mosquitoes" class="flex items-center gap-2.5 px-2 py-2 text-sm rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition"><i class="fa-solid fa-mosquito w-4 text-brand-green"></i> Mosquito Reduction</a></li>
            <li><a href="/services/general-pest-control" class="flex items-center gap-2.5 px-2 py-2 text-sm rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition"><i class="fa-solid fa-shield-halved w-4 text-brand-green"></i> General Pest Control</a></li>
            <li><a href="/services/crawl-space-encapsulation" class="flex items-center gap-2.5 px-2 py-2 text-sm rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition"><i class="fa-solid fa-house-flag w-4 text-brand-green"></i> Crawl Space Encapsulation</a></li>
          </ul>
        </li>
        <li><a href="#why-us" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Why Us</a></li>
        <li><a href="#process" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Process</a></li>
        <li><a href="#reviews" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Reviews</a></li>
        <li><a href="#faq" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">FAQ</a></li>
        <li class="pt-2">
          <a href="tel:+19196066866" class="flex items-center gap-2 px-2 py-2.5 text-brand-green font-bold">
            <i class="fa-solid fa-phone-volume"></i> (919) 606-6866
          </a>
        </li>
      </ul>
    </div>
  </header>

  <main id="top" class="pt-16">

    <!-- ============== HERO ============== -->
    <section class="hero-mesh text-white relative overflow-hidden">
      <!-- Floating mesh blobs (Haikei-style) -->
      <span class="hero-blob b1" aria-hidden="true"></span>
      <span class="hero-blob b2" aria-hidden="true"></span>
      <span class="hero-blob b3" aria-hidden="true"></span>
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 bg-white/10 border border-brand-leaf/40 text-brand-leaf text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur">
            <span class="w-2 h-2 rounded-full bg-brand-leaf animate-pulse"></span>
            <i class="fa-solid fa-leaf text-[10px]"></i>
            Family-owned in Durham, NC • Eco-friendly & family-safe
          </div>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6" style="font-weight:700;">
            Protecting What <span class="serif-italic text-brand-orange-soft">Matters Most</span><br>
            <span class="block text-2xl sm:text-3xl lg:text-4xl font-medium text-white/60 mt-2 tracking-tight">Your Home &amp; Family</span>
          </h1>

          <p class="text-lg sm:text-xl text-slate-100/90 max-w-xl mb-8 leading-relaxed">
            Protect your home from unwanted pests with Castle Exterminators, your trusted local pest control experts in Durham, NC. We provide effective, safe, and lasting solutions for a pest-free home.
          </p>

          <div class="flex flex-wrap gap-3 mb-10">
            <a href="#contact" class="cta-elastic pulse inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-navy font-bold px-7 py-4 rounded-xl shadow-cta text-base">
              <i class="fa-solid fa-clipboard-check"></i>
              Get Free Inspection
            </a>
            <a href="tel:+19196066866" class="cta-elastic inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-7 py-4 rounded-xl text-base backdrop-blur">
              <i class="fa-solid fa-phone-volume"></i>
              Call (919) 606-6866
            </a>
          </div>

          <!-- Trust strip -->
          <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-100/90">
            <div class="flex items-center gap-2"><i class="fa-solid fa-star text-brand-orange"></i><strong class="text-white">5.0★</strong> on Google & Yelp</div>
            <div class="flex items-center gap-2"><i class="fa-solid fa-shield-halved text-brand-green-light"></i> Licensed & Insured in NC</div>
            <div class="flex items-center gap-2"><i class="fa-solid fa-leaf text-brand-green-light"></i> Eco-friendly options</div>
            <div class="flex items-center gap-2"><i class="fa-solid fa-people-roof text-brand-green-light"></i> Family-owned since 2017</div>
          </div>
        </div>

        <!-- Hero card -->
        <aside class="lg:col-span-5">
          <div class="bg-white/95 text-brand-navy rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/60 backdrop-blur-sm">
            <div class="flex items-center gap-3 mb-5">
              <span class="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center">
                <i class="fa-solid fa-bolt-lightning"></i>
              </span>
              <div>
                <p class="font-bold text-lg leading-tight">Book now</p>
                <p class="text-slate-500 text-sm">We'll call you back within 2 business hours</p>
              </div>
            </div>

            <ul class="space-y-3 text-sm mb-6">
              <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-brand-green mt-1"></i><span><strong>Free, no-obligation</strong> on-site inspection</span></li>
              <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-brand-green mt-1"></i><span><strong>100% satisfaction</strong> — we'll re-treat for free</span></li>
              <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-brand-green mt-1"></i><span><strong>Family-safe</strong> treatments — gentle on kids & pets</span></li>
              <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-brand-green mt-1"></i><span><strong>Local Durham techs</strong> — not a national franchise</span></li>
            </ul>

            <a href="#contact" class="cta-elastic block w-full text-center bg-brand-navy hover:bg-brand-navy-dark text-white font-bold py-3.5 rounded-xl">
              Request My Free Inspection →
            </a>
          </div>
        </aside>
      </div>

      <!-- Getwaves.io-style SVG wave divider transitioning into the next section -->
      <div class="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z" fill="#FBF8F1"/>
        </svg>
      </div>
    </section>

    <!-- ============== TRUST BAR ============== -->
    <section class="bg-brand-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="stat-card reveal">
          <p class="font-display font-extrabold text-4xl md:text-5xl text-brand-green stat-num" data-count="8" data-suffix="+">0+</p>
          <p class="text-sm text-slate-600 font-semibold mt-1">Years serving Durham</p>
        </div>
        <div class="stat-card reveal reveal-delay-1">
          <p class="font-display font-extrabold text-4xl md:text-5xl text-brand-green stat-num" data-count="1000" data-suffix="+">0+</p>
          <p class="text-sm text-slate-600 font-semibold mt-1">Durham homes protected</p>
        </div>
        <div class="stat-card reveal reveal-delay-2">
          <p class="font-display font-extrabold text-4xl md:text-5xl text-brand-green stat-num" data-count="5.0" data-suffix="★" data-decimals="1">0★</p>
          <p class="text-sm text-slate-600 font-semibold mt-1">Google & Yelp rating</p>
        </div>
        <div class="stat-card reveal reveal-delay-3">
          <p class="font-display font-extrabold text-4xl md:text-5xl text-brand-green stat-num" data-count="2" data-suffix=" hr">0 hr</p>
          <p class="text-sm text-slate-600 font-semibold mt-1">Average response time</p>
        </div>
      </div>
    </section>

    <!-- ============== SERVICES GRID ============== -->
    <section id="services" class="py-20 lg:py-28 bg-brand-bone relative">
      <!-- Subtle leaf pattern accent -->
      <div class="absolute inset-0 bg-leaf-pattern opacity-60 pointer-events-none"></div>
      <div class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-14 reveal">
          <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">What We Treat in Durham</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-5">Every common North Carolina pest — handled.</h2>
          <p class="text-lg text-slate-600">From persistent termites to nuisance mosquitoes, Castle Exterminators' certified technicians eliminate infestations at the source and keep them from coming back — using treatments that are tough on pests and gentle on your family.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="/services/termites" class="service-card reveal group bg-white border border-slate-100 hover:border-brand-green/40 hover:shadow-card rounded-2xl overflow-hidden block">
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img src="https://sspark.genspark.ai/cfimages?u1=cNC82WKkBNjF6Fmsrsh%2BhIU363ff1RUR00YeUbRamr4zRm1390kDGGX2X1P34xWW0oRl%2BV1OqliS21HTjN9y1TqxGOstXVSnsRrNyW%2BHu4IPPQ3U%2FOzjGhpXQ8fZKa1EYo44b70uqZlIseyBxgczUeWa%2B6wf&u2=kjNqgFm1vrTya5Cr&width=2560" alt="Termite damage in wood" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div class="absolute top-3 left-3 service-icon w-10 h-10 rounded-xl bg-white/95 backdrop-blur text-brand-green grid place-items-center shadow-card group-hover:bg-brand-green group-hover:text-white">
                <i class="fa-solid fa-bug"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2 group-hover:text-brand-green transition">Termites</h3>
              <p class="text-sm text-slate-600">Save your home from costly structural damage with proactive termite detection and elimination.</p>
              <span class="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-green opacity-0 group-hover:opacity-100 transition">Learn more <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
            </div>
          </a>

          <a href="/services/roaches" class="service-card reveal reveal-delay-1 group bg-white border border-slate-100 hover:border-brand-green/40 hover:shadow-card rounded-2xl overflow-hidden block">
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img src="https://sspark.genspark.ai/cfimages?u1=8B19bfklzQPiNKn%2F4fTUCPvR9rZHch%2FyOrnqI9kZPun%2FSP0AsaO%2Bd8zuXZQobT%2B%2FZ3zvc%2F4Zlt86tDTNVfwBBj4D5Cu5sNSLY6lmmiH3KIG74jDa41Zls%2Bu7qsY250HxUNVro%2FJEonJ3fWSfB1jHXBfRid2ioPdezL2RZn8cHNRZGjdA&u2=cqr0oXT0M3zkRymX&width=2560" alt="German cockroach close-up" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div class="absolute top-3 left-3 service-icon w-10 h-10 rounded-xl bg-white/95 backdrop-blur text-brand-green grid place-items-center shadow-card group-hover:bg-brand-green group-hover:text-white">
                <i class="fa-solid fa-bugs"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2 group-hover:text-brand-green transition">Roaches</h3>
              <p class="text-sm text-slate-600">Targeted gel and bait treatments that wipe out colonies — including German and American roaches.</p>
              <span class="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-green opacity-0 group-hover:opacity-100 transition">Learn more <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
            </div>
          </a>

          <a href="/services/rodents" class="service-card reveal reveal-delay-2 group bg-white border border-slate-100 hover:border-brand-green/40 hover:shadow-card rounded-2xl overflow-hidden block">
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img src="https://sspark.genspark.ai/cfimages?u1=G54sk51bVyPHYaaAnu7upw479ZRuP%2B37rqo4xyetn2hWfso8ZbZwf0IN7JHysYdaxt4gtKZou4RbuE%2FpI4HFJMUzyEn649Wy%2BXFyxjQNmDKT5KCyFRe2eruDEPEorr00qwMFDuxmDQs4gWSWzxj8vC3kvAp3TifFn7c67oc0I7QbeX23UzmUS6WdVVbqGplOh2k12ZvdwO95ZZzj4QKGPK2fJzhmO5MDX0DM0szf6A%3D%3D&u2=HFC2A2x74rx7wycB&width=2560" alt="Mouse in an attic" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div class="absolute top-3 left-3 service-icon w-10 h-10 rounded-xl bg-white/95 backdrop-blur text-brand-green grid place-items-center shadow-card group-hover:bg-brand-green group-hover:text-white">
                <i class="fa-solid fa-house-chimney-crack"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2 group-hover:text-brand-green transition">Rodents</h3>
              <p class="text-sm text-slate-600">Humane removal of mice and rats, plus entry-point sealing so they don't come back.</p>
              <span class="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-green opacity-0 group-hover:opacity-100 transition">Learn more <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
            </div>
          </a>

          <a href="/services/ants" class="service-card reveal reveal-delay-3 group bg-white border border-slate-100 hover:border-brand-green/40 hover:shadow-card rounded-2xl overflow-hidden block">
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img src="https://sspark.genspark.ai/cfimages?u1=qm%2FbCGJIPU%2FGBlt8Tvk9Aly%2FJC1HamnheEa6sH%2BQiteah4P%2FprkM%2BIeK%2BK2yIvFoyXeI5mNW7VntUOUksv67BZWjoUE%2BJiIuAlKVp%2B%2FaNdGxTVux2CNTXrsn&u2=h0b%2FuYAvf36IDnqM&width=2560" alt="Ants on a trail in a home" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div class="absolute top-3 left-3 service-icon w-10 h-10 rounded-xl bg-white/95 backdrop-blur text-brand-green grid place-items-center shadow-card group-hover:bg-brand-green group-hover:text-white">
                <i class="fa-solid fa-ant"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2 group-hover:text-brand-green transition">Ants</h3>
              <p class="text-sm text-slate-600">Carpenter, fire, sugar, and odorous house ants — eliminated colony and all.</p>
              <span class="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-green opacity-0 group-hover:opacity-100 transition">Learn more <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
            </div>
          </a>

          <a href="/services/mosquitoes" class="service-card reveal group bg-white border border-slate-100 hover:border-brand-green/40 hover:shadow-card rounded-2xl overflow-hidden block">
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img src="https://sspark.genspark.ai/cfimages?u1=HjaObNyOAEJSsbM5jQAjwbt7x8oMl%2BwIFIkN5DaF7PjThs8GiBpcZWb%2FmY8NG9MDQQkzDovk%2BM4dDx1VfwwL2QAhZ7y2FgN0wHsuovq62Jhfpi7R28iO2cHdXkYfiOA7Qg75tAMdzm8%2Bo3l8MEGqbow2erSbNLtWipB%2BKodmOOHCeKAMDyhELQ0YcxQyxAX%2F2Q%3D%3D&u2=0HMg%2BwOwbPe4%2Fm0D&width=2560" alt="Backyard with mosquito control" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div class="absolute top-3 left-3 service-icon w-10 h-10 rounded-xl bg-white/95 backdrop-blur text-brand-green grid place-items-center shadow-card group-hover:bg-brand-green group-hover:text-white">
                <i class="fa-solid fa-mosquito"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2 group-hover:text-brand-green transition">Mosquitoes</h3>
              <p class="text-sm text-slate-600">Reclaim your yard with our seasonal mosquito misting and breeding-site treatment.</p>
              <span class="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-green opacity-0 group-hover:opacity-100 transition">Learn more <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
            </div>
          </a>

          <a href="/services/general-pest-control" class="service-card reveal reveal-delay-1 group bg-white border border-slate-100 hover:border-brand-green/40 hover:shadow-card rounded-2xl overflow-hidden block">
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img src="https://sspark.genspark.ai/cfimages?u1=ByHod32hmtjKIqV0gihyyaSUxRNNhdn5pBqUCplZTs5kchrIoVOZ8FMWcyPSUTyAhwRKv2GYIqVvHwhY0z16xAo%2Bs%2BsvSZRWfEhMdVJSHFni%2FtXyjUgfoRgPE%2FGoPY%2F%2BQKxAW8eY1Y4nirpJqA%2BSIt7jPMX0q%2BwQdEafKqsdKhqSbydJdWCVN2XLm0uI3X31Rzs2&u2=sAT4OFzVQzYtXJ2H&width=2560" alt="Pest control exterminator inspecting a home" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div class="absolute top-3 left-3 service-icon w-10 h-10 rounded-xl bg-white/95 backdrop-blur text-brand-green grid place-items-center shadow-card group-hover:bg-brand-green group-hover:text-white">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2 group-hover:text-brand-green transition">General Pest Control</h3>
              <p class="text-sm text-slate-600">Quarterly preventive treatments that keep ants, roaches, earwigs, ticks and more out year-round.</p>
              <span class="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-green opacity-0 group-hover:opacity-100 transition">Learn more <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
            </div>
          </a>

          <a href="/services/crawl-space-encapsulation" class="service-card reveal reveal-delay-2 group bg-white border border-slate-100 hover:border-brand-green/40 hover:shadow-card rounded-2xl overflow-hidden block">
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img src="https://sspark.genspark.ai/cfimages?u1=UJZ99GM%2F5geIohvakjJrI5XC0VLe7gJKACnCCo6T7pygPutQgZ65UFOJdaLCk88I%2FwAL2TI6EdrLXuTkvc6kFtsB7lbv0cdDyyIxovRxGqeAwLsiuyfsRIMdIN8v%2BPOghobk3dJG1%2BsY47RVFf%2F%2FzIEXn5BZHq0BPbTffMbZFbFrIKEFnPU%3D&u2=10oN2nzZAPoFIdni&width=2560" alt="Crawl space vapor barrier encapsulation under a house" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div class="absolute top-3 left-3 service-icon w-10 h-10 rounded-xl bg-white/95 backdrop-blur text-brand-green grid place-items-center shadow-card group-hover:bg-brand-green group-hover:text-white">
                <i class="fa-solid fa-house-flag"></i>
              </div>
            </div>
            <div class="p-6">
              <h3 class="font-bold text-lg mb-2 group-hover:text-brand-green transition">Full Crawl Space Encapsulation</h3>
              <p class="text-sm text-slate-600">Complete vapor barrier, sealing, and moisture control under your Durham home — healthier air, lower bills, fewer pests.</p>
              <span class="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-green opacity-0 group-hover:opacity-100 transition">Learn more <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
            </div>
          </a>
        </div>

        <div class="text-center mt-12 reveal">
          <a href="#contact" class="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-green-dark">
            Don't see your pest? Call (919) 606-6866 — we probably handle it.
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      </div>
    </section>

    <!-- ============== WHY US ============== -->
    <section id="why-us" class="py-20 lg:py-28 bg-brand-cream relative overflow-hidden">
      <span class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-green-mist blur-3xl opacity-50 pointer-events-none" aria-hidden="true"></span>
      <span class="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-brand-orange-soft/40 blur-3xl opacity-50 pointer-events-none" aria-hidden="true"></span>
      <div class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5 reveal">
            <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Why Castle Exterminators</p>
            <h2 class="text-4xl lg:text-5xl font-extrabold mb-6">Durham's family-owned pest control</h2>
            <p class="text-lg text-slate-600 mb-8">We're not a national franchise reading from a script — we're your Durham neighbors. Every home gets the same care we'd give our own, with eco-friendly treatments and certified, courteous technicians.</p>
            <a href="#contact" class="cta-elastic inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-3.5 rounded-xl">
              Schedule Inspection
              <i class="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>

          <div class="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div class="neumo-card reveal rounded-2xl p-6">
              <div class="w-11 h-11 rounded-xl bg-brand-green-mist text-brand-green-dark grid place-items-center mb-4"><i class="fa-solid fa-house-chimney text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Local & Family-Owned</h3>
              <p class="text-sm text-slate-600">Born and rooted in Durham, NC. We know our community — and the pests that show up here.</p>
            </div>
            <div class="neumo-card reveal reveal-delay-1 rounded-2xl p-6">
              <div class="w-11 h-11 rounded-xl bg-brand-green-mist text-brand-green-dark grid place-items-center mb-4"><i class="fa-solid fa-leaf text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Eco-Friendly Treatments</h3>
              <p class="text-sm text-slate-600">Low-toxicity, family-safe products applied precisely where pests live — safe for kids, pets, and the NC ecosystem.</p>
            </div>
            <div class="neumo-card reveal reveal-delay-2 rounded-2xl p-6">
              <div class="w-11 h-11 rounded-xl bg-brand-green-mist text-brand-green-dark grid place-items-center mb-4"><i class="fa-solid fa-handshake text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Satisfaction Guaranteed</h3>
              <p class="text-sm text-slate-600">Pests come back between visits? We come back too — at no extra charge. Your peace of mind is our promise.</p>
            </div>
            <div class="neumo-card reveal reveal-delay-3 rounded-2xl p-6">
              <div class="w-11 h-11 rounded-xl bg-brand-green-mist text-brand-green-dark grid place-items-center mb-4"><i class="fa-solid fa-medal text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Licensed & Certified</h3>
              <p class="text-sm text-slate-600">Fully state-licensed NC technicians, highly trained and fully insured — protected on every job.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- ============== PROCESS ============== -->
    <section id="process" class="py-20 lg:py-28 bg-brand-bone">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-14 reveal">
          <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">How It Works</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-5">A simple 4-step process</h2>
          <p class="text-lg text-slate-600">From your first call to long-term protection of your Durham home — here's exactly what to expect.</p>
        </div>

        <ol class="process-wrap grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
          <span class="process-line" aria-hidden="true"></span>
          <li class="process-step reveal relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7">
            <div class="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-brand-navy text-white font-display font-extrabold grid place-items-center shadow-card">1</div>
            <i class="fa-solid fa-phone-volume text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Contact us</h3>
            <p class="text-sm text-slate-600">Call (919) 606-6866, text, or fill out the form. We'll get back to you within 2 business hours.</p>
          </li>
          <li class="process-step reveal reveal-delay-1 relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7">
            <div class="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-brand-navy text-white font-display font-extrabold grid place-items-center shadow-card">2</div>
            <i class="fa-solid fa-magnifying-glass text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Free inspection</h3>
            <p class="text-sm text-slate-600">A certified Castle tech inspects your home and identifies the pest, source, and severity — no charge, no obligation.</p>
          </li>
          <li class="process-step reveal reveal-delay-2 relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7">
            <div class="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-brand-navy text-white font-display font-extrabold grid place-items-center shadow-card">3</div>
            <i class="fa-solid fa-spray-can-sparkles text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Custom treatment</h3>
            <p class="text-sm text-slate-600">A tailored, family-safe treatment plan with transparent flat-fee pricing — no surprises.</p>
          </li>
          <li class="process-step reveal reveal-delay-3 relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7">
            <div class="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-brand-navy text-white font-display font-extrabold grid place-items-center shadow-card">4</div>
            <i class="fa-solid fa-shield-halved text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Ongoing protection</h3>
            <p class="text-sm text-slate-600">Optional quarterly visits keep your castle pest-free year-round through NC's changing seasons — cancel anytime.</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ============== TESTIMONIALS ============== -->
    <section id="reviews" class="testi-mesh py-20 lg:py-28 text-white relative overflow-hidden">
      <!-- Decorative blobs -->
      <span class="hero-blob b1" style="opacity:.25" aria-hidden="true"></span>
      <span class="hero-blob b2" style="opacity:.25" aria-hidden="true"></span>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-14 reveal">
          <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">What Durham Homeowners Say</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-5">Real reviews from real Durham neighbors</h2>
          <div class="flex items-center justify-center gap-2 text-brand-orange text-xl">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <span class="ml-2 text-white font-bold">5.0 / 5</span>
            <span class="text-slate-300 text-base">on Google & Yelp</span>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <figure class="glass reveal rounded-2xl p-7">
            <div class="text-brand-orange mb-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <blockquote class="text-slate-100 leading-relaxed mb-5">"We had a really annoying ant problem in our kitchen here in Durham, and Castle Exterminators came to the rescue so fast! The technician arrived on time, was super friendly, and explained everything clearly. Our home is now ant-free — highly recommend!"</blockquote>
            <figcaption class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-green-light text-brand-navy font-bold grid place-items-center">SJ</div>
              <div>
                <p class="font-bold">Sarah J.</p>
                <p class="text-xs text-slate-300">Homeowner • Durham, NC</p>
              </div>
            </figcaption>
          </figure>

          <figure class="glass reveal reveal-delay-1 rounded-2xl p-7">
            <div class="text-brand-orange mb-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <blockquote class="text-slate-100 leading-relaxed mb-5">"When you invite someone into your home, trust is a big deal. The team at Castle Exterminators truly impressed us — professional, knowledgeable, and very respectful of our property. They took their time and inspected every corner. Fantastic job!"</blockquote>
            <figcaption class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-orange text-brand-navy font-bold grid place-items-center">MP</div>
              <div>
                <p class="font-bold">Michael P.</p>
                <p class="text-xs text-slate-300">Homeowner • Durham, NC</p>
              </div>
            </figcaption>
          </figure>

          <figure class="glass reveal reveal-delay-2 rounded-2xl p-7">
            <div class="text-brand-orange mb-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <blockquote class="text-slate-100 leading-relaxed mb-5">"We were dealing with persistent spiders and I was dreading the process. But Castle Exterminators made it so easy! Got the job done quickly and the results have been fantastic — no more spiders. For reliable, lasting pest solutions, they're the ones to call!"</blockquote>
            <figcaption class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-green-light text-brand-navy font-bold grid place-items-center">ER</div>
              <div>
                <p class="font-bold">Emily R.</p>
                <p class="text-xs text-slate-300">Homeowner • Durham, NC</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ============== FAQ ============== -->
    <section id="faq" class="py-20 lg:py-28 bg-brand-sand/40">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 reveal">
          <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Common Questions</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-5">Frequently asked by our Durham neighbors</h2>
        </div>

        <div class="space-y-3">
          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition" open="">
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">Is your treatment safe for kids and pets?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <div class="faq-body"><p class="mt-4 text-slate-600 leading-relaxed">Yes. We use EPA-approved, low-toxicity products applied precisely where pests live and travel — typically along baseboards, under sinks, and outdoor entry points. Most treatments are dry within an hour, after which kids and pets can return to those areas safely.</p></div>
          </details>

          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition">
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">How fast can you come out to my Durham home?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <div class="faq-body"><p class="mt-4 text-slate-600 leading-relaxed">For urgent infestations we do our best to offer same-day service in the Durham area if you call before noon at <a href="tel:+19196066866" class="text-brand-green font-bold">(919) 606-6866</a>. Otherwise we'll schedule your free inspection within 24–48 hours, including evening and Saturday slots.</p></div>
          </details>

          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition">
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">How much does it cost?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <div class="faq-body"><p class="mt-4 text-slate-600 leading-relaxed">It depends on the pest, your home's size, and the severity — which is exactly why our on-site inspection is free. You'll get a transparent flat-fee quote before any work begins, with no hidden charges and zero obligation to proceed.</p></div>
          </details>

          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition">
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">Do you guarantee your work?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <div class="faq-body"><p class="mt-4 text-slate-600 leading-relaxed">Absolutely. If pests return between scheduled visits on any of our recurring plans, we come back and re-treat at no charge. We're family-owned in Durham — your satisfaction is the only thing that matters to us.</p></div>
          </details>

          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition">
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">Do I need to leave the house during treatment?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <div class="faq-body"><p class="mt-4 text-slate-600 leading-relaxed">For most general pest treatments — no. You can stay in the home; we'll just ask you to keep pets out of treated rooms until products dry (usually 30–60 minutes). For specialty treatments like bed bug heat or fumigation, we'll give you specific instructions in advance.</p></div>
          </details>
        </div>
      </div>

      <!-- FAQ schema — eligible for rich FAQ snippets in Google search results -->
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is your treatment safe for kids and pets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We use EPA-approved, low-toxicity products applied precisely where pests live and travel — typically along baseboards, under sinks, and outdoor entry points. Most treatments are dry within an hour, after which kids and pets can return to those areas safely."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can you come out to my Durham home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For urgent infestations we do our best to offer same-day service in the Durham area if you call before noon at (919) 606-6866. Otherwise we'll schedule your free inspection within 24–48 hours, including evening and Saturday slots."
            }
          },
          {
            "@type": "Question",
            "name": "How much does pest control cost in Durham, NC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the pest, your home's size, and the severity — which is exactly why our on-site inspection is free. You'll get a transparent flat-fee quote before any work begins, with no hidden charges and zero obligation to proceed."
            }
          },
          {
            "@type": "Question",
            "name": "Do you guarantee your pest control work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. If pests return between scheduled visits on any of our recurring plans, we come back and re-treat at no charge. We're family-owned in Durham — your satisfaction is the only thing that matters to us."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to leave the house during pest treatment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For most general pest treatments — no. You can stay in the home; we'll just ask you to keep pets out of treated rooms until products dry (usually 30–60 minutes). For specialty treatments like bed bug heat or fumigation, we'll give you specific instructions in advance."
            }
          }
        ]
      }
      </script>
    </section>

    <!-- ============== CONTACT / FINAL CTA ============== -->
    <section id="contact" class="py-20 lg:py-28 bg-gradient-to-b from-brand-cream via-brand-bone to-brand-bone">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">

        <!-- Left: messaging + contact info -->
        <div class="lg:col-span-5 reveal">
          <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Get Your Free Quote</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">Ready to take back your castle?</h2>
          <p class="text-lg text-slate-600 mb-8">Tell us a bit about your pest problem and a friendly Castle Exterminators expert will get back to you within <strong>2 business hours</strong> to schedule your free inspection — anywhere in Durham, NC and surrounding communities.</p>

          <div class="space-y-4 mb-8">
            <a href="tel:+19196066866" class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
              <span class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center text-lg"><i class="fa-solid fa-phone-volume"></i></span>
              <div>
                <p class="text-xs text-slate-500 font-semibold uppercase tracking-wide">Call or text</p>
                <p class="font-bold text-brand-navy text-lg">(919) 606-6866</p>
              </div>
            </a>
            <a href="mailto:info@castleexterminators.co" class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
              <span class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center text-lg"><i class="fa-solid fa-envelope"></i></span>
              <div>
                <p class="text-xs text-slate-500 font-semibold uppercase tracking-wide">Email us</p>
                <p class="font-bold text-brand-navy text-lg break-all">info@castleexterminators.co</p>
              </div>
            </a>
            <div class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200">
              <span class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center text-lg"><i class="fa-solid fa-location-dot"></i></span>
              <div>
                <p class="text-xs text-slate-500 font-semibold uppercase tracking-wide">Service area</p>
                <p class="font-bold text-brand-navy text-lg">Durham, NC & surrounding NC communities</p>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200">
              <span class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center text-lg"><i class="fa-solid fa-clock"></i></span>
              <div>
                <p class="text-xs text-slate-500 font-semibold uppercase tracking-wide">Hours</p>
                <p class="font-bold text-brand-navy text-lg">Mon–Sat • 7am – 7pm</p>
              </div>
            </div>
          </div>

          <div class="bg-brand-navy text-white rounded-2xl p-6">
            <p class="font-bold flex items-center gap-2 mb-2"><i class="fa-solid fa-lock text-brand-green-light"></i> Your info is safe</p>
            <p class="text-sm text-slate-200">We'll never share your details. No spam, no robocalls — just a quick callback from a real technician.</p>
          </div>
        </div>

        <!-- Right: GorillaDesk form -->
        <div class="lg:col-span-7 reveal">
          <div class="bg-white rounded-3xl shadow-card border border-slate-100 p-6 sm:p-10">
            <div class="flex items-center gap-3 mb-2">
              <span class="w-10 h-10 rounded-xl bg-brand-green-mist text-brand-green-dark grid place-items-center"><i class="fa-solid fa-clipboard-check"></i></span>
              <h3 class="font-extrabold text-2xl">Request Your Free Durham Inspection</h3>
            </div>
            <p class="text-slate-600 mb-6">Fill out the form and a Castle Exterminators specialist will contact you within 2 business hours. No obligation, no pressure — just a friendly local quote.</p>

            <!--
              GorillaDesk contact form integration:
              The official GorillaDesk embed is a *floating button + popup* widget (it injects a
              chat-bubble onto the page that opens an iframe form). It does NOT support being
              rendered inline. So instead of trying to force it inline, we:
                1. Load GorillaDesk's official loader script (further down at end of <body>)
                   which creates two hidden elements: #gorilladesk-portal-button-contact
                   (the floating chat bubble) and #gorilladesk-portal-widget-contact (the popup).
                2. Render a beautiful inline "Open the inspection form" CTA right here, and on
                   click we send the same postMessage the chat bubble sends, which makes the
                   GorillaDesk popup slide open with the actual contact form inside.

              This gives the visitor the same prominent inline call-to-action we designed, while
              correctly using GorillaDesk's intended UX pattern (button → modal form).
            -->
            <div id="gorilladesk-contact-form" class="rounded-2xl border border-dashed border-brand-green/40 bg-gradient-to-br from-brand-green/5 to-brand-orange/10 p-8 sm:p-10 text-center">
              <div class="w-16 h-16 mx-auto rounded-2xl bg-brand-green text-white grid place-items-center text-2xl mb-4 shadow-card">
                <i class="fa-solid fa-clipboard-check"></i>
              </div>
              <h4 class="font-display font-extrabold text-xl sm:text-2xl mb-2">Start your free Durham inspection request</h4>
              <p class="text-slate-600 mb-6 max-w-md mx-auto text-sm sm:text-base">
                Click below to open our secure inspection form. It takes about 60 seconds — we'll be in touch within 2 business hours.
              </p>
              <button
                type="button"
                id="open-gd-form"
                class="cta-elastic inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-navy font-bold px-7 py-4 rounded-xl shadow-cta text-base"
              >
                <i class="fa-solid fa-pen-to-square"></i>
                Open Inspection Form
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </button>

            </div>

            <p class="text-xs text-slate-500 mt-6 flex items-start gap-2">
              <i class="fa-solid fa-shield-halved text-brand-green mt-0.5"></i>
              <span>By submitting, you agree to be contacted about your inspection. We respect your privacy and never sell your information.</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============== FOOTER ============== -->
    <footer class="bg-brand-navy-dark text-slate-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <a href="/" class="inline-flex items-center gap-2.5 mb-4">
            <span class="inline-block bg-white rounded-xl p-2 shadow-card">
              <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-9 w-auto" />
            </span>
            <span class="sr-only">Castle Exterminators</span>
          </a>
          <p class="text-sm leading-relaxed max-w-md">Durham's family-owned pest control. Protecting homes across Durham, NC and surrounding communities since 2017 — with eco-friendly, family-safe treatments and certified, neighborly service.</p>
          <p class="text-xs text-slate-400 mt-4">Keep your <strong class="serif-italic text-brand-leaf font-medium">castle</strong> pest-free.</p>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#services" class="hover:text-white">Services</a></li>
            <li><a href="#why-us" class="hover:text-white">Why Choose Us</a></li>
            <li><a href="#process" class="hover:text-white">Our Process</a></li>
            <li><a href="#reviews" class="hover:text-white">Reviews</a></li>
            <li><a href="#faq" class="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">Get in Touch</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="tel:+19196066866" class="hover:text-white flex items-center gap-2"><i class="fa-solid fa-phone-volume text-brand-green-light"></i> (919) 606-6866</a></li>
            <li><a href="mailto:info@castleexterminators.co" class="hover:text-white flex items-center gap-2"><i class="fa-solid fa-envelope text-brand-green-light"></i> info@castleexterminators.co</a></li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-brand-green-light"></i> Durham, NC</li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-clock text-brand-green-light"></i> Mon–Sat 7am–7pm</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-slate-400">
          <p>© <span id="year"></span> Castle Exterminators. Family-owned and operated in Durham, NC. Licensed & insured.</p>
          <p class="flex items-center gap-4">
            <a href="#" class="hover:text-white">Privacy Policy</a>
            <a href="#" class="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  </main>

  <!-- Floating call button (mobile) -->
  <a href="tel:+19196066866" aria-label="Call us now" class="lg:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-brand-orange text-brand-navy grid place-items-center shadow-cta pulse">
    <i class="fa-solid fa-phone-volume text-xl"></i>
  </a>

  <!-- Page scripts -->
  <script>
    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll reveal — adds .in class to anything with .reveal once visible
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Animated process connector line — triggers when process section enters view
    const processLine = document.querySelector('.process-line');
    if (processLine) {
      const lineIO = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); lineIO.unobserve(e.target); } });
      }, { threshold: 0.3 });
      lineIO.observe(processLine);
    }

    // Animista-style count-up for the trust stat numbers
    function animateCount(el) {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1600;
      const start = performance.now();
      function step(now) {
        const t = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        const value = target * eased;
        el.textContent = (decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()) + suffix;
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = (decimals > 0 ? target.toFixed(decimals) : Math.round(target).toLocaleString()) + suffix;
      }
      requestAnimationFrame(step);
    }
    const statIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.stat-num').forEach(animateCount);
          statIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('.stat-card').forEach(el => statIO.observe(el));

    // Header — scroll-aware shadow/tint
    const header = document.getElementById('site-header');
    const onScroll = () => {
      header.classList.toggle('nav-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Services mega-dropdown (desktop): hover-open + click-toggle ----
    const navServices = document.querySelector('.nav-services');
    const servicesTrigger = navServices ? navServices.querySelector('.nav-link') : null;
    const servicesDropdown = document.getElementById('services-dropdown');
    if (navServices && servicesTrigger && servicesDropdown) {
      let closeTimer = null;
      const setOpen = (open) => {
        navServices.setAttribute('data-open', String(open));
        servicesDropdown.setAttribute('data-open', String(open));
        servicesTrigger.setAttribute('aria-expanded', String(open));
      };
      const openNow = () => { if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; } setOpen(true); };
      const closeSoon = () => { if (closeTimer) clearTimeout(closeTimer); closeTimer = setTimeout(() => setOpen(false), 140); };
      const closeNow = () => { if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; } setOpen(false); };

      // Hover on the trigger or the panel keeps it open
      navServices.addEventListener('mouseenter', openNow);
      navServices.addEventListener('mouseleave', closeSoon);
      servicesDropdown.addEventListener('mouseenter', openNow);
      servicesDropdown.addEventListener('mouseleave', closeSoon);

      // Click toggles (and prevents jumping to #services so the user can see the panel)
      servicesTrigger.addEventListener('click', (e) => {
        if (window.innerWidth < 768) return; // mobile uses its own accordion
        e.preventDefault();
        const isOpen = navServices.getAttribute('data-open') === 'true';
        if (isOpen) closeNow(); else openNow();
      });

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!navServices.contains(e.target) && !servicesDropdown.contains(e.target)) closeNow();
      });
      // Close on Escape
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNow(); });
      // Close when any service card is clicked (so smooth-scroll feels natural for /#contact)
      servicesDropdown.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNow));
    }

    // Mobile menu toggle (hamburger ↔ X)
    const burger = document.getElementById('nav-burger');
    const mobile = document.getElementById('nav-mobile');
    if (burger && mobile) {
      const closeMenu = () => {
        burger.classList.remove('open');
        mobile.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      };
      burger.addEventListener('click', () => {
        const isOpen = burger.classList.toggle('open');
        mobile.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', String(isOpen));
      });
      // Close after tapping any actual link inside the mobile panel (but NOT the services toggle button)
      mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
      // Close on resize past breakpoint
      window.addEventListener('resize', () => { if (window.innerWidth >= 768) closeMenu(); });
    }

    // Mobile services accordion
    const mobileServicesToggle = document.getElementById('nav-mobile-services-toggle');
    if (mobileServicesToggle) {
      mobileServicesToggle.addEventListener('click', () => {
        const expanded = mobileServicesToggle.getAttribute('aria-expanded') === 'true';
        mobileServicesToggle.setAttribute('aria-expanded', String(!expanded));
      });
    }

    // Active-section nav highlighting via IntersectionObserver
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const sectionIds = Array.from(navLinks).map(l => l.getAttribute('data-section'));
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    if (sections.length) {
      const setActive = (id) => {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('data-section') === id));
      };
      const sectionIO = new IntersectionObserver((entries) => {
        // Pick the entry closest to the top that is intersecting
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });
      sections.forEach(s => sectionIO.observe(s));
    }

    // Open the GorillaDesk contact form when our inline CTA is clicked.
    // The official GorillaDesk script (loaded below) creates a hidden popup iframe with the
    // form inside it. We trigger it by posting the same message its own chat bubble sends.
    function openGorillaDeskForm() {
      const widget = document.getElementById('gorilladesk-portal-widget-contact');
      const btn = document.getElementById('open-gd-form');
      if (!widget) {
        // Script hasn't finished loading yet — try again in a moment.
        if (btn) { btn.disabled = true; btn.innerHTML = '<span class="ring-loader"></span> Loading form…'; }
        setTimeout(openGorillaDeskForm, 400);
        return;
      }
      // Restore button label in case we changed it during a retry.
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Open Inspection Form <i class="fa-solid fa-arrow-right text-xs"></i>';
      }
      widget.style.setProperty('display', 'block', 'important');
      try {
        widget.contentWindow && widget.contentWindow.postMessage({ type: 'send-open-contact' }, '*');
      } catch (e) { /* no-op */ }
    }
    const openBtn = document.getElementById('open-gd-form');
    if (openBtn) openBtn.addEventListener('click', openGorillaDeskForm);
  </script>

  <!--
    GorillaDesk loader — creates a hidden popup iframe (#gorilladesk-portal-widget-contact)
    plus a floating chat bubble (#gorilladesk-portal-button-contact). Our inline CTA button
    above opens the same popup by posting a 'send-open-contact' message.
  -->
  <script type="text/javascript">
      var _gorilla = _gorilla || {};
      _gorilla.account_id = '0d73a25092e5c1c9769a9f3255caa65a';
      var _gorillaInitPortal = function () {
          var a = document.createElement('script');
          a.type = 'text/javascript';
          a.async = !0;
          a.defer = !0;
          a.src = 'https://portal-embed-v3.gorilladesk.com/js/contact/contact.js';
          var b = document.getElementsByTagName('script')[0];
          b.parentNode.insertBefore(a, b);
      };
      window.addEventListener
          ? window.addEventListener('load', _gorillaInitPortal, !1)
          : window.attachEvent
          ? window.attachEvent('onload', _gorillaInitPortal)
          : (window.onload = _gorillaInitPortal);
  </script>
</body>
</html>`

app.get('/', (c) => c.html(html))

// ============================================================================
// SERVICE DETAIL PAGES
// ============================================================================

type ServiceDetail = {
  slug: string
  name: string
  icon: string
  hero: string
  tagline: string
  intro: string
  signs: string[]
  approach: { title: string; body: string }[]
  faq: { q: string; a: string }[]
}

const services: ServiceDetail[] = [
  {
    slug: 'termites',
    name: 'Termite Control & Inspection',
    icon: 'fa-bug',
    hero: 'https://sspark.genspark.ai/cfimages?u1=cNC82WKkBNjF6Fmsrsh%2BhIU363ff1RUR00YeUbRamr4zRm1390kDGGX2X1P34xWW0oRl%2BV1OqliS21HTjN9y1TqxGOstXVSnsRrNyW%2BHu4IPPQ3U%2FOzjGhpXQ8fZKa1EYo44b70uqZlIseyBxgczUeWa%2B6wf&u2=kjNqgFm1vrTya5Cr&width=2560',
    tagline: 'Stop costly structural damage before it spreads.',
    intro: "Termites silently chew through more than $5 billion in U.S. homes every year — and Durham's humid climate is prime termite territory. Castle Exterminators uses proven inspection, baiting, and liquid soil treatments to wipe out colonies and protect your home year after year.",
    signs: [
      'Mud tubes running up your foundation or crawl space walls',
      'Soft, hollow-sounding wood around windows and door frames',
      'Discarded wings near interior light sources after a swarm',
      'Tiny piles of pellet-like frass (termite droppings) near wood',
      'Bubbling or uneven paint that looks like water damage'
    ],
    approach: [
      { title: 'Free 60-minute inspection', body: 'Our certified tech walks your full property — interior, exterior, crawl space, and attic — looking for active termites, conducive conditions, and prior damage.' },
      { title: 'Custom treatment plan', body: 'Depending on what we find, we recommend a liquid termiticide barrier, in-ground bait stations, or a combination. You always get a clear written quote before we begin.' },
      { title: 'Annual re-inspection & warranty', body: 'Every termite job comes with an annual re-inspection so you stay protected — and stay ahead of any new colony activity.' }
    ],
    faq: [
      { q: 'Are your termite treatments safe for kids and pets?', a: 'Yes. We use EPA-registered termiticides applied below ground level or inside bait stations, so there is no exposure to your family or pets inside the home.' },
      { q: 'How long does a treatment take?', a: 'Most Durham homes are treated in a single visit lasting 2–4 hours. You can stay home during the appointment.' }
    ]
  },
  {
    slug: 'roaches',
    name: 'Roach Extermination',
    icon: 'fa-bugs',
    hero: 'https://sspark.genspark.ai/cfimages?u1=8B19bfklzQPiNKn%2F4fTUCPvR9rZHch%2FyOrnqI9kZPun%2FSP0AsaO%2Bd8zuXZQobT%2B%2FZ3zvc%2F4Zlt86tDTNVfwBBj4D5Cu5sNSLY6lmmiH3KIG74jDa41Zls%2Bu7qsY250HxUNVro%2FJEonJ3fWSfB1jHXBfRid2ioPdezL2RZn8cHNRZGjdA&u2=cqr0oXT0M3zkRymX&width=2560',
    tagline: 'Wipe out every roach — colony and all.',
    intro: "Roaches reproduce fast, hide in walls, and trigger allergies and asthma. Sprays from the hardware store almost always make the problem worse by scattering colonies. Castle Exterminators uses targeted gel bait, IGRs, and crack-and-crevice treatments that hit the entire population at its source.",
    signs: [
      'Roach droppings (look like ground coffee or pepper) in cabinets',
      'A musty, oily odor in the kitchen or pantry',
      'Egg casings (oothecae) tucked behind appliances',
      'Live roaches darting away when you turn on the lights at night',
      'Smear marks along baseboards or behind the fridge'
    ],
    approach: [
      { title: 'Identify the species', body: 'German, American, Oriental, and Smoky Brown roaches each behave differently. Correct ID is the difference between a one-visit fix and a recurring problem.' },
      { title: 'Targeted gel + IGR treatment', body: 'We apply professional-grade gel bait inside harborage points, plus an insect growth regulator that stops eggs from hatching — collapsing the population in 2–3 weeks.' },
      { title: 'Follow-up & sanitation tips', body: 'We come back to verify zero activity and walk you through small changes that keep them from coming back.' }
    ],
    faq: [
      { q: 'Do I have to leave the house during treatment?', a: 'No. Gel bait is applied in cracks and crevices where pets and kids cannot reach, so you can stay home throughout.' },
      { q: 'How fast will I see results?', a: 'Most clients see a major drop in activity within 72 hours and full elimination within 2–3 weeks.' }
    ]
  },
  {
    slug: 'rodents',
    name: 'Rodent Removal & Exclusion',
    icon: 'fa-house-chimney-crack',
    hero: 'https://sspark.genspark.ai/cfimages?u1=G54sk51bVyPHYaaAnu7upw479ZRuP%2B37rqo4xyetn2hWfso8ZbZwf0IN7JHysYdaxt4gtKZou4RbuE%2FpI4HFJMUzyEn649Wy%2BXFyxjQNmDKT5KCyFRe2eruDEPEorr00qwMFDuxmDQs4gWSWzxj8vC3kvAp3TifFn7c67oc0I7QbeX23UzmUS6WdVVbqGplOh2k12ZvdwO95ZZzj4QKGPK2fJzhmO5MDX0DM0szf6A%3D%3D&u2=HFC2A2x74rx7wycB&width=2560',
    tagline: 'Get the mice out — and keep them out.',
    intro: "Mice and rats damage insulation, chew wiring, and contaminate food. Worse, a single breeding pair can become 60+ rodents in a year. Castle Exterminators trap, remove, and seal entry points — a true exclusion program, not just bait stations.",
    signs: [
      'Droppings in the pantry, attic, garage, or crawl space',
      'Gnaw marks on baseboards, food packaging, or wiring',
      'Scratching or scurrying sounds in walls or ceilings at night',
      'Greasy rub marks along baseboards and entry points',
      'Nests built from shredded paper, insulation, or fabric'
    ],
    approach: [
      { title: 'Full property inspection', body: 'We map every entry point — gaps as small as a dime are enough — and identify nesting and travel routes.' },
      { title: 'Trapping & removal', body: 'Snap traps and tamper-resistant bait stations placed strategically (never in living areas with children or pets) to rapidly knock the population down.' },
      { title: 'Exclusion sealing', body: 'We seal every entry with steel mesh, hardware cloth, and weather-resistant sealant so rodents physically cannot get back in.' }
    ],
    faq: [
      { q: 'Are bait stations safe around pets?', a: 'Yes — we use tamper-resistant stations placed in attics, crawl spaces, or along the exterior perimeter where pets cannot reach.' },
      { q: 'How long until they are gone?', a: 'Most rodent issues are fully resolved within 2–4 weeks, depending on the size of the population.' }
    ]
  },
  {
    slug: 'ants',
    name: 'Ant Control',
    icon: 'fa-ant',
    hero: 'https://sspark.genspark.ai/cfimages?u1=qm%2FbCGJIPU%2FGBlt8Tvk9Aly%2FJC1HamnheEa6sH%2BQiteah4P%2FprkM%2BIeK%2BK2yIvFoyXeI5mNW7VntUOUksv67BZWjoUE%2BJiIuAlKVp%2B%2FaNdGxTVux2CNTXrsn&u2=h0b%2FuYAvf36IDnqM&width=2560',
    tagline: 'Eliminate the colony — not just the trail you can see.',
    intro: "Spraying a visible ant trail kills 1% of the colony. Castle Exterminators uses non-repellent baits and perimeter treatments that workers carry back to the queen, collapsing the entire colony. We handle carpenter, fire, sugar, pavement, and odorous house ants common in the Durham area.",
    signs: [
      'Trails of ants leading to food, water, or pet bowls',
      'Small piles of sawdust or wood shavings (carpenter ants)',
      'Visible mounds in your yard, driveway cracks, or patio',
      'Winged ants ("alates") inside the home in spring',
      'Bites or stings near outdoor mounds (fire ants)'
    ],
    approach: [
      { title: 'Species ID + colony mapping', body: 'Different ant species require very different treatments. We confirm the species and trace activity back to the nest.' },
      { title: 'Non-repellent bait transfer', body: 'Workers carry our slow-acting bait back to the queen and brood — wiping out the entire colony in 7–14 days without scattering it.' },
      { title: 'Exterior perimeter barrier', body: 'A perimeter treatment around the foundation, eaves, and entry points keeps new colonies from re-invading.' }
    ],
    faq: [
      { q: 'Why did spraying make my ant problem worse?', a: 'Repellent sprays cause colonies to "bud" — splitting into multiple smaller colonies. We use non-repellent products that ants carry home instead.' },
      { q: 'Do you treat fire ant mounds outside?', a: 'Yes — we use targeted mound drenches and broadcast bait treatments for yard-wide control.' }
    ]
  },
  {
    slug: 'mosquitoes',
    name: 'Mosquito Reduction',
    icon: 'fa-mosquito',
    hero: 'https://sspark.genspark.ai/cfimages?u1=HjaObNyOAEJSsbM5jQAjwbt7x8oMl%2BwIFIkN5DaF7PjThs8GiBpcZWb%2FmY8NG9MDQQkzDovk%2BM4dDx1VfwwL2QAhZ7y2FgN0wHsuovq62Jhfpi7R28iO2cHdXkYfiOA7Qg75tAMdzm8%2Bo3l8MEGqbow2erSbNLtWipB%2BKodmOOHCeKAMDyhELQ0YcxQyxAX%2F2Q%3D%3D&u2=0HMg%2BwOwbPe4%2Fm0D&width=2560',
    tagline: 'Reclaim your Durham backyard — all season long.',
    intro: "Durham summers belong outside, not swatting mosquitoes on the deck. Our seasonal mosquito program treats foliage, shaded resting areas, and standing-water breeding sites for up to 90% reduction in mosquito activity in your yard.",
    signs: [
      'Bites every time you step outside, even briefly',
      'Standing water in gutters, planters, birdbaths, or low spots',
      'Heavy mosquito activity at dawn and dusk',
      'Mosquitoes resting in shaded shrubs and tall grass',
      'Tiger or Asian mosquitoes (white-striped) common in NC'
    ],
    approach: [
      { title: 'Yard assessment', body: 'We walk your property to identify breeding sites, resting areas, and high-activity zones.' },
      { title: 'Monthly barrier treatment', body: 'Backpack misting of shrubs, foliage undersides, and resting harborage from April through October knocks down adult mosquitoes and stops them from re-establishing.' },
      { title: 'Larvicide for standing water', body: 'For drainage areas, fountains, and ponds we use mosquito-specific larvicides that are safe for fish and beneficial insects.' }
    ],
    faq: [
      { q: 'Is the spray safe for kids, pets, and pollinators?', a: 'Yes. We apply treatments to foliage where mosquitoes rest, not flowers, and the spray dries within 20 minutes. We avoid blooming plants and pollinator zones.' },
      { q: 'How often do you treat?', a: 'Monthly from April through October — that is the Durham mosquito season.' }
    ]
  },
  {
    slug: 'general-pest-control',
    name: 'General Pest Control',
    icon: 'fa-shield-halved',
    hero: 'https://sspark.genspark.ai/cfimages?u1=ByHod32hmtjKIqV0gihyyaSUxRNNhdn5pBqUCplZTs5kchrIoVOZ8FMWcyPSUTyAhwRKv2GYIqVvHwhY0z16xAo%2Bs%2BsvSZRWfEhMdVJSHFni%2FtXyjUgfoRgPE%2FGoPY%2F%2BQKxAW8eY1Y4nirpJqA%2BSIt7jPMX0q%2BwQdEafKqsdKhqSbydJdWCVN2XLm0uI3X31Rzs2&u2=sAT4OFzVQzYtXJ2H&width=2560',
    tagline: 'Quarterly protection that keeps your home pest-free year-round.',
    intro: "Most pest problems are best solved before they start. Our quarterly general pest control program is the most popular service for Durham homeowners — a single recurring treatment covers ants, roaches, spiders, earwigs, ticks, and more.",
    signs: [
      'Recurring seasonal pests (spring ants, fall spiders, winter rodents)',
      'A property near woods, fields, or water',
      'A previous DIY approach that has not held',
      'Children, pets, or family members with allergies',
      'A home you want to protect long-term, not just react to'
    ],
    approach: [
      { title: 'Initial deep-clean treatment', body: 'A thorough first visit eliminates current activity inside and around the home — baseboards, eaves, garage, perimeter, and entry points.' },
      { title: 'Quarterly maintenance visits', body: 'Once every 90 days we return to refresh the exterior barrier and check for any new activity. Most visits do not require any interior access.' },
      { title: 'Free re-treatments', body: 'See pests between scheduled visits? We come back free of charge — that is our satisfaction guarantee.' }
    ],
    faq: [
      { q: 'Do I have to sign a long contract?', a: 'No. Our quarterly program is month-to-month — cancel anytime, no penalty.' },
      { q: 'What pests are included?', a: 'Over 30 common pests including ants, roaches, spiders, earwigs, crickets, ticks, wasps, and millipedes. Termites, rodents, mosquitoes, and crawl space encapsulation are handled by separate specialty programs.' }
    ]
  },
  {
    slug: 'crawl-space-encapsulation',
    name: 'Full Crawl Space Encapsulation',
    icon: 'fa-house-flag',
    hero: 'https://sspark.genspark.ai/cfimages?u1=UJZ99GM%2F5geIohvakjJrI5XC0VLe7gJKACnCCo6T7pygPutQgZ65UFOJdaLCk88I%2FwAL2TI6EdrLXuTkvc6kFtsB7lbv0cdDyyIxovRxGqeAwLsiuyfsRIMdIN8v%2BPOghobk3dJG1%2BsY47RVFf%2F%2FzIEXn5BZHq0BPbTffMbZFbFrIKEFnPU%3D&u2=10oN2nzZAPoFIdni&width=2560',
    tagline: 'A healthier home, lower energy bills, and zero pest highway underneath.',
    intro: "Up to 50% of the air you breathe upstairs comes from your crawl space. A damp, vented crawl breeds mold, attracts pests, and drives up your power bill. Full encapsulation seals it off — and it is one of the highest-ROI upgrades a Durham homeowner can make.",
    signs: [
      'Musty smells on the first floor or near floor vents',
      'Sagging floors or buckled hardwood',
      'High humidity in the home, especially in summer',
      'Visible moisture, standing water, or efflorescence on crawl walls',
      'Recurring pest problems despite treatment'
    ],
    approach: [
      { title: 'Clean-out & repair', body: 'We remove old vapor barrier, debris, and damaged insulation and address any drainage or grading issues.' },
      { title: '20-mil reinforced vapor barrier', body: 'Heavy-duty white poly liner sealed to the walls and piers — overlapping seams taped, edges mechanically fastened. No gaps, no shortcuts.' },
      { title: 'Seal vents + dehumidifier', body: 'We seal foundation vents and install a crawl-rated dehumidifier so the space stays under 55% relative humidity year-round.' }
    ],
    faq: [
      { q: 'How long does encapsulation take?', a: 'Most Durham crawl spaces are completed in 2–4 days depending on size and prep required.' },
      { q: 'What is the typical ROI?', a: 'Homeowners commonly see 15–25% lower heating and cooling bills, plus eliminated mold and pest issues. Resale value improvement is significant — appraisers recognize encapsulation as a structural upgrade.' }
    ]
  },
]

const renderServicePage = (s: ServiceDetail, allServices: ServiceDetail[]) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${s.name} in Durham, NC | Castle Exterminators</title>
  <meta name="description" content="${s.tagline} Castle Exterminators — Durham's family-owned pest control. Free inspection, licensed & insured, 5.0 on Google & Yelp." />
  <meta name="keywords" content="${s.name.toLowerCase()} Durham NC, ${s.name.toLowerCase()} near me, pest control Durham, exterminator Durham NC, ${s.slug} treatment, Castle Exterminators" />
  <meta name="theme-color" content="#1F6F4A" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="geo.region" content="US-NC" />
  <meta name="geo.placename" content="Durham, North Carolina" />
  <link rel="canonical" href="https://castleexterminators.co/services/${s.slug}" />
  <link rel="icon" href="/static/castle-logo.png" />
  <meta property="og:site_name" content="Castle Exterminators" />
  <meta property="og:title" content="${s.name} | Castle Exterminators Durham NC" />
  <meta property="og:description" content="${s.tagline}" />
  <meta property="og:url" content="https://castleexterminators.co/services/${s.slug}" />
  <meta property="og:image" content="${s.hero}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${s.name} | Castle Exterminators Durham NC" />
  <meta name="twitter:description" content="${s.tagline}" />
  <meta name="twitter:image" content="${s.hero}" />

  <!-- Service schema — tells Google this page describes a specific local service -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "${s.name}",
    "name": "${s.name} in Durham, NC",
    "description": "${s.tagline}",
    "url": "https://castleexterminators.co/services/${s.slug}",
    "image": "${s.hero}",
    "provider": {
      "@type": "PestControlService",
      "@id": "https://castleexterminators.co/#business",
      "name": "Castle Exterminators",
      "telephone": "+1-919-606-6866",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Durham",
        "addressRegion": "NC",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Durham",
      "containedInPlace": { "@type": "State", "name": "North Carolina" }
    },
    "offers": {
      "@type": "Offer",
      "url": "https://castleexterminators.co/services/${s.slug}",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": "https://castleexterminators.co/#business" }
    }
  }
  </script>

  <!-- Breadcrumb schema — gives Google a clean nav trail for search results -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://castleexterminators.co/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://castleexterminators.co/#services" },
      { "@type": "ListItem", "position": 3, "name": "${s.name}", "item": "https://castleexterminators.co/services/${s.slug}" }
    ]
  }
  </script>

  <!-- FAQ schema — service-specific Q&A eligible for rich snippets -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ${s.faq.map(item => `{
        "@type": "Question",
        "name": ${JSON.stringify(item.q)},
        "acceptedAnswer": { "@type": "Answer", "text": ${JSON.stringify(item.a)} }
      }`).join(',\n      ')}
    ]
  }
  </script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <script>
    // Nature / Eco palette — must mirror homepage tokens
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            display: ['"Fraunces"', '"Plus Jakarta Sans"', 'Georgia', 'serif'],
            sans:    ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
          },
          colors: {
            brand: {
              green:        '#1F6F4A',
              'green-dark': '#13502F',
              'green-light':'#3FA372',
              'green-mist': '#D7EBDF',
              navy:        '#1E2A24',
              'navy-dark': '#0E1612',
              orange:       '#C2663B',
              'orange-dark':'#A0502C',
              'orange-soft':'#F1C9A8',
              cream: '#F7F2E7',
              sand:  '#EADFC7',
              bone:  '#FBF8F1',
              leaf:  '#A7C9A4',
            }
          },
          boxShadow: {
            card:  '0 14px 36px -14px rgba(30,42,36,0.22)',
            'card-hover': '0 22px 50px -16px rgba(30,42,36,0.30)',
            cta:   '0 14px 30px -8px rgba(194,102,59,0.45)',
          }
        }
      }
    }
  </script>
  <style>
    html { scroll-behavior: smooth; }

    /* Material text-emphasis system (shared with homepage) */
    :root {
      --ink: 30, 42, 36;
      --paper: 251, 248, 241;
      --emphasis-high: 0.87;
      --emphasis-medium: 0.60;
      --emphasis-disabled: 0.38;
    }
    body { font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif; color: rgba(var(--ink), var(--emphasis-high)); background: #FBF8F1; }
    h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.015em; font-variation-settings: "opsz" 144, "SOFT" 50; color: rgba(var(--ink), var(--emphasis-high)); }
    /* Invert headings on dark surfaces so the hero h1 + footer headings stay readable */
    .hero-grain h1, .hero-grain h2, .hero-grain h3,
    .bg-brand-navy h1, .bg-brand-navy h2, .bg-brand-navy h3,
    .bg-brand-navy-dark h1, .bg-brand-navy-dark h2, .bg-brand-navy-dark h3,
    .bg-gradient-to-br.from-brand-green h1,
    .bg-gradient-to-br.from-brand-green h2,
    .bg-gradient-to-br.from-brand-green h3,
    footer h1, footer h2, footer h3, footer h4, footer h5 {
      color: rgba(var(--paper), var(--emphasis-high)) !important;
    }
    /* Also force any white-text wrapper on the service-detail hero to stay white
       for its <p> tagline (inherits color from parent .text-white wrapper) */
    .hero-grain .text-white { color: rgba(var(--paper), var(--emphasis-high)) !important; }
    /* Make sure breadcrumb anchors stay visible on the dark hero */
    .hero-grain a { color: rgba(var(--paper), var(--emphasis-medium)); }
    .hero-grain a:hover { color: rgba(var(--paper), var(--emphasis-high)); }
    .font-display { font-family: 'Fraunces', 'Plus Jakarta Sans', Georgia, serif; font-variation-settings: "opsz" 144, "SOFT" 50; }
    .serif-italic { font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 500; }

    .text-emphasis-high     { color: rgba(var(--ink), var(--emphasis-high))     !important; }
    .text-emphasis-medium   { color: rgba(var(--ink), var(--emphasis-medium))   !important; }
    .text-emphasis-disabled { color: rgba(var(--ink), var(--emphasis-disabled)) !important; }
    .text-emphasis-high-inv     { color: rgba(var(--paper), var(--emphasis-high))     !important; }
    .text-emphasis-medium-inv   { color: rgba(var(--paper), var(--emphasis-medium))   !important; }
    .text-emphasis-disabled-inv { color: rgba(var(--paper), var(--emphasis-disabled)) !important; }

    /* Auto-map Tailwind grayscale utilities to emphasis ladder (light surfaces) */
    .text-slate-700, .text-slate-800, .text-slate-900,
    .text-gray-700,  .text-gray-800,  .text-gray-900   { color: rgba(var(--ink), var(--emphasis-high))     !important; }
    .text-slate-500, .text-slate-600,
    .text-gray-500,  .text-gray-600                    { color: rgba(var(--ink), var(--emphasis-medium))   !important; }
    .text-slate-300, .text-slate-400,
    .text-gray-300,  .text-gray-400                    { color: rgba(var(--ink), var(--emphasis-disabled)) !important; }

    /* DARK-SURFACE OVERRIDES — keep text readable on hero, footer & navy panels */
    .hero-grain .text-white, .hero-grain .text-slate-100, .hero-grain .text-slate-200,
    footer .text-white,
    .bg-brand-navy .text-white, .bg-brand-navy .text-slate-100, .bg-brand-navy .text-slate-200,
    .bg-brand-navy-dark .text-white, .bg-brand-navy-dark .text-slate-100, .bg-brand-navy-dark .text-slate-200,
    .bg-gradient-to-br.from-brand-green .text-white {
      color: rgba(var(--paper), var(--emphasis-high)) !important;
    }
    .hero-grain .text-slate-300,
    footer .text-slate-300, footer.text-slate-300,
    .bg-brand-navy .text-slate-300,
    .bg-brand-navy-dark .text-slate-300, .bg-brand-navy-dark.text-slate-300 {
      color: rgba(var(--paper), var(--emphasis-medium)) !important;
    }
    .hero-grain .text-slate-400, .hero-grain .text-slate-500, .hero-grain .text-slate-600,
    footer .text-slate-400, footer .text-slate-500, footer .text-slate-600, footer .text-slate-700,
    footer.text-slate-400,
    .bg-brand-navy .text-slate-400, .bg-brand-navy .text-slate-500, .bg-brand-navy .text-slate-600,
    .bg-brand-navy-dark .text-slate-400, .bg-brand-navy-dark .text-slate-500, .bg-brand-navy-dark .text-slate-600 {
      color: rgba(var(--paper), var(--emphasis-disabled)) !important;
    }

    /* Footer descendants — inherit paper-medium so paragraphs/links that don't carry
       an explicit text-* class stay readable on navy-dark. */
    footer { color: rgba(var(--paper), var(--emphasis-medium)) !important; }
    footer p, footer li, footer span, footer a, footer strong { color: inherit; }
    footer a:hover { color: rgba(var(--paper), var(--emphasis-high)) !important; }

    ::placeholder { color: rgba(var(--ink), var(--emphasis-disabled)); opacity: 1; }
    :disabled     { color: rgba(var(--ink), var(--emphasis-disabled)); }

    /* Custom ant icon (fa-ant is FA Pro only) — inline SVG via CSS mask */
    .fa-ant::before { content: '' !important; }
    .fa-ant {
      display: inline-block;
      width: 1em;
      height: 1em;
      background-color: currentColor;
      -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 32c-17.7 0-32 14.3-32 32v8.3c-23.6 4.5-44.7 16.4-60.5 33.4L130.3 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l46.3 46.3c-4.5 11-7.3 22.9-8 35.4l-50.6 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c4.6 11.8 11.1 22.7 19.1 32.3l-65.3 49C68.1 354.4 64 362.9 64 372c0 17.7 14.3 32 32 32l5.3 0c10.1 0 19.6-4.7 25.6-12.8L173.3 320c11.4 5.9 23.9 9.9 37.3 11.5l0 9.2-39.4 39.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l24.4-24.4c4.6 24.2 25.9 42.5 51.5 42.5s46.9-18.3 51.5-42.5l24.4 24.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L373.3 340.7l0-9.2c13.4-1.6 25.9-5.6 37.3-11.5l46.3 71.2c6 8.1 15.5 12.8 25.6 12.8l5.3 0c17.7 0 32-14.3 32-32 0-9.1-4.1-17.6-11.5-23.3l-65.3-49c8-9.6 14.5-20.5 19.1-32.3l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.6 0c-.7-12.5-3.5-24.4-8-35.4l46.3-46.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-33.2 33.2c-15.8-17-37-28.9-60.5-33.4L320 64c0-17.7-14.3-32-32-32l-32 0z'/></svg>") no-repeat center / contain;
              mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 32c-17.7 0-32 14.3-32 32v8.3c-23.6 4.5-44.7 16.4-60.5 33.4L130.3 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l46.3 46.3c-4.5 11-7.3 22.9-8 35.4l-50.6 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l54.7 0c4.6 11.8 11.1 22.7 19.1 32.3l-65.3 49C68.1 354.4 64 362.9 64 372c0 17.7 14.3 32 32 32l5.3 0c10.1 0 19.6-4.7 25.6-12.8L173.3 320c11.4 5.9 23.9 9.9 37.3 11.5l0 9.2-39.4 39.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l24.4-24.4c4.6 24.2 25.9 42.5 51.5 42.5s46.9-18.3 51.5-42.5l24.4 24.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L373.3 340.7l0-9.2c13.4-1.6 25.9-5.6 37.3-11.5l46.3 71.2c6 8.1 15.5 12.8 25.6 12.8l5.3 0c17.7 0 32-14.3 32-32 0-9.1-4.1-17.6-11.5-23.3l-65.3-49c8-9.6 14.5-20.5 19.1-32.3l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.6 0c-.7-12.5-3.5-24.4-8-35.4l46.3-46.3c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-33.2 33.2c-15.8-17-37-28.9-60.5-33.4L320 64c0-17.7-14.3-32-32-32l-32 0z'/></svg>") no-repeat center / contain;
      vertical-align: -0.125em;
    }

    /* 60-30-10 enforcement (shared with homepage) */
    a.text-brand-green.text-sm.font-semibold { color: rgba(var(--ink), var(--emphasis-high)) !important; }
    a.text-brand-green.text-sm.font-semibold:hover { color: #C2663B !important; }
    .nav-service-arrow { color: rgba(var(--ink), var(--emphasis-medium)) !important; }
    .nav-service-card:hover .nav-service-arrow { color: #C2663B !important; }
    .nav-link:hover { color: rgba(var(--ink), var(--emphasis-high)); }
    .nav-link.active { color: #1F6F4A; }
    .nav-link::after { background: #C2663B; }
    .nav-link.active::after { background: #1F6F4A; }

    .hero-overlay {
      background:
        linear-gradient(135deg, rgba(31,111,74,.92) 0%, rgba(14,22,18,.78) 55%, rgba(14,22,18,.45) 100%);
    }
    /* Grain noise on hero */
    .hero-grain::after {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      opacity: .35; mix-blend-mode: overlay;
    }

    /* ---- Top menu — minimal animations + Services slide-out dropdown (matches homepage) ---- */
    #site-header { transition: background-color .3s ease, box-shadow .3s ease, backdrop-filter .3s ease; }
    #site-header.nav-scrolled { background-color: rgba(251,248,241,.96); backdrop-filter: saturate(180%) blur(12px); -webkit-backdrop-filter: saturate(180%) blur(12px); box-shadow: 0 4px 20px -8px rgba(30,42,36,.18); }

    .nav-link { position: relative; padding: .35rem 0; transition: color .25s ease; }
    .nav-link::after { content: ''; position: absolute; left: 0; right: 0; bottom: -4px; height: 2px; border-radius: 2px;
      background: #1F6F4A; transform: scaleX(0); transform-origin: center; transition: transform .35s cubic-bezier(.65,.05,.36,1); }
    .nav-link:hover, .nav-link:focus-visible, .nav-link.active { color: #1F6F4A; }
    .nav-link:hover::after, .nav-link:focus-visible::after, .nav-link.active::after { transform: scaleX(1); }

    .nav-services { position: static; }
    .nav-services .nav-link i.fa-chevron-down { transition: transform .35s cubic-bezier(.22,1,.36,1); }
    .nav-services[data-open="true"] .nav-link i.fa-chevron-down { transform: rotate(180deg); }

    #services-dropdown { position: absolute; left: 0; right: 0; top: 100%; background: #FBF8F1;
      border-top: 1px solid rgba(31,111,74,.10); box-shadow: 0 22px 40px -18px rgba(30,42,36,.22);
      transform: translateY(-12px); opacity: 0; visibility: hidden; pointer-events: none;
      transition: transform .4s cubic-bezier(.22,1,.36,1), opacity .3s ease, visibility 0s linear .3s; }
    .nav-services[data-open="true"] #services-dropdown, #services-dropdown[data-open="true"] {
      transform: translateY(0); opacity: 1; visibility: visible; pointer-events: auto;
      transition: transform .45s cubic-bezier(.22,1,.36,1), opacity .3s ease, visibility 0s linear 0s; }

    .nav-service-card { opacity: 0; transform: translateY(10px);
      transition: opacity .4s ease, transform .45s cubic-bezier(.22,1,.36,1), border-color .25s ease, background-color .25s ease; }
    .nav-services[data-open="true"] .nav-service-card, #services-dropdown[data-open="true"] .nav-service-card { opacity: 1; transform: translateY(0); }
    .nav-service-card:nth-child(1) { transition-delay: .05s; }
    .nav-service-card:nth-child(2) { transition-delay: .10s; }
    .nav-service-card:nth-child(3) { transition-delay: .15s; }
    .nav-service-card:nth-child(4) { transition-delay: .20s; }
    .nav-service-card:nth-child(5) { transition-delay: .25s; }
    .nav-service-card:nth-child(6) { transition-delay: .30s; }
    .nav-service-card:nth-child(7) { transition-delay: .35s; }
    .nav-service-card:hover { background: #F7F2E7; border-color: rgba(31,111,74,.4); }
    .nav-service-icon { transition: transform .35s cubic-bezier(.34,1.56,.64,1), background-color .25s ease, color .25s ease; }
    .nav-service-card:hover .nav-service-icon { background: #1F6F4A; color: #fff; transform: rotate(-6deg) scale(1.08); }
    .nav-service-arrow { transition: transform .3s cubic-bezier(.22,1,.36,1), opacity .25s ease; opacity: 0; transform: translateX(-4px); }
    .nav-service-card:hover .nav-service-arrow { opacity: 1; transform: translateX(0); }

    .nav-burger { position: relative; width: 26px; height: 20px; display: flex; flex-direction: column; justify-content: space-between;
      background: transparent; border: 0; padding: 0; cursor: pointer; }
    .nav-burger span { display: block; width: 100%; height: 2.5px; background: #1E2A24; border-radius: 4px;
      transition: transform .35s cubic-bezier(.65,.05,.36,1), opacity .25s ease, background-color .25s ease; }
    .nav-burger:hover span { background: #1F6F4A; }
    .nav-burger.open span:nth-child(1) { transform: translateY(8.75px) rotate(45deg); }
    .nav-burger.open span:nth-child(2) { opacity: 0; }
    .nav-burger.open span:nth-child(3) { transform: translateY(-8.75px) rotate(-45deg); }

    #nav-mobile { max-height: 0; opacity: 0; overflow: hidden; transition: max-height .4s cubic-bezier(.22,1,.36,1), opacity .3s ease; }
    #nav-mobile.open { max-height: 720px; opacity: 1; }
    #nav-mobile-services-list { max-height: 0; overflow: hidden; transition: max-height .4s cubic-bezier(.22,1,.36,1); }
    #nav-mobile-services-toggle[aria-expanded="true"] + #nav-mobile-services-list { max-height: 600px; }
    #nav-mobile-services-toggle i.fa-chevron-down { transition: transform .35s ease; }
    #nav-mobile-services-toggle[aria-expanded="true"] i.fa-chevron-down { transform: rotate(180deg); }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; }
    }
  </style>
</head>
<body class="bg-brand-bone antialiased text-brand-navy">

  <!-- NAV — slide-out Services mega dropdown (matches homepage) -->
  <header id="site-header" class="fixed top-0 inset-x-0 z-50 bg-brand-bone/90 backdrop-blur border-b border-brand-green/10">
    <nav class="nav-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
      <a href="/" class="nav-logo flex items-center gap-3" aria-label="Castle Exterminators home">
        <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-10 sm:h-11 w-auto" />
      </a>
      <ul class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <li class="nav-services" data-open="false">
          <a href="/#services" class="nav-link active inline-flex items-center gap-1.5" aria-haspopup="true" aria-expanded="false" aria-controls="services-dropdown">
            Services
            <i class="fa-solid fa-chevron-down text-[10px] opacity-70" aria-hidden="true"></i>
          </a>
        </li>
        <li><a href="/#why-us" class="nav-link">Why Us</a></li>
        <li><a href="/#process" class="nav-link">Process</a></li>
        <li><a href="/#reviews" class="nav-link">Reviews</a></li>
        <li><a href="/#faq" class="nav-link">FAQ</a></li>
      </ul>
      <div class="flex items-center gap-3">
        <a href="tel:+19196066866" class="nav-phone hidden sm:inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
          <span class="nav-phone-icon text-brand-green"><i class="fa-solid fa-phone-volume"></i></span>
          <span>(919) 606-6866</span>
        </a>
        <a href="/#contact" class="nav-cta inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold px-4 py-2 rounded-lg shadow-card transition-transform duration-300 hover:-translate-y-0.5">
          <span>Free Inspection</span>
          <span class="nav-cta-arrow"><i class="fa-solid fa-arrow-right text-xs"></i></span>
        </a>
        <button type="button" id="nav-burger" class="nav-burger md:hidden ml-1" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Services mega-dropdown panel -->
      <div id="services-dropdown" role="menu" aria-label="Services" data-open="false" class="hidden md:block">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="flex items-center justify-between mb-5">
            <div>
              <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">Our Services</p>
              <h3 class="font-display font-extrabold text-xl text-brand-navy mt-1">Pest control across Durham, NC</h3>
            </div>
            <a href="/#services" class="text-sm font-semibold text-brand-green hover:text-brand-green-dark inline-flex items-center gap-1.5">
              View all on home <i class="fa-solid fa-arrow-right text-[11px]"></i>
            </a>
          </div>
          <ul class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            ${allServices.map(svc => {
              const isCurrent = svc.slug === s.slug;
              const cardCls = isCurrent
                ? 'nav-service-card flex items-start gap-3 p-4 rounded-xl border-2 border-brand-green bg-brand-green/5'
                : 'nav-service-card flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-white';
              return `<li><a href="/services/${svc.slug}" class="${cardCls}" role="menuitem">
                <span class="nav-service-icon w-10 h-10 rounded-lg ${isCurrent ? 'bg-brand-green text-white' : 'bg-brand-green/10 text-brand-green'} grid place-items-center flex-shrink-0"><i class="fa-solid ${svc.icon}"></i></span>
                <span class="flex-1 min-w-0">
                  <span class="block text-sm font-bold text-brand-navy">${svc.name}</span>
                  <span class="block text-xs text-slate-500 leading-snug mt-0.5">${isCurrent ? 'You are here' : svc.tagline}</span>
                </span>
                <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-green mt-3"></i>
              </a></li>`;
            }).join('')}
            <li><a href="/#contact" class="nav-service-card flex items-start gap-3 p-4 rounded-xl border border-brand-orange/40 bg-brand-orange/10" role="menuitem">
              <span class="nav-service-icon w-10 h-10 rounded-lg bg-brand-orange text-white grid place-items-center flex-shrink-0"><i class="fa-solid fa-phone-volume"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block text-sm font-bold text-brand-navy">Free Inspection</span>
                <span class="block text-xs text-slate-600 leading-snug mt-0.5">Talk to a Durham specialist.</span>
              </span>
              <i class="nav-service-arrow fa-solid fa-arrow-right text-xs text-brand-orange mt-3"></i>
            </a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Mobile dropdown -->
    <div id="nav-mobile" class="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur">
      <ul class="px-4 sm:px-6 py-3 space-y-1 text-sm font-semibold text-slate-700">
        <li>
          <button type="button" id="nav-mobile-services-toggle" aria-expanded="true" aria-controls="nav-mobile-services-list"
                  class="w-full flex items-center justify-between px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition text-brand-green">
            <span>Services</span>
            <i class="fa-solid fa-chevron-down text-[11px] opacity-70"></i>
          </button>
          <ul id="nav-mobile-services-list" class="pl-2 mt-1 space-y-1">
            ${allServices.map(svc => `<li><a href="/services/${svc.slug}" class="flex items-center gap-2.5 px-2 py-2 text-sm rounded-lg ${svc.slug === s.slug ? 'bg-brand-green/10 text-brand-green' : 'hover:bg-brand-green/10 hover:text-brand-green'} transition"><i class="fa-solid ${svc.icon} w-4 text-brand-green"></i> ${svc.name}</a></li>`).join('')}
          </ul>
        </li>
        <li><a href="/#why-us" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Why Us</a></li>
        <li><a href="/#process" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Process</a></li>
        <li><a href="/#reviews" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Reviews</a></li>
        <li><a href="/#faq" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">FAQ</a></li>
        <li class="pt-2">
          <a href="tel:+19196066866" class="flex items-center gap-2 px-2 py-2.5 text-brand-green font-bold">
            <i class="fa-solid fa-phone-volume"></i> (919) 606-6866
          </a>
        </li>
      </ul>
    </div>
  </header>

  <script>
    (function(){
      var header = document.getElementById('site-header');
      var onScroll = function(){ header.classList.toggle('nav-scrolled', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

      // Desktop: Services mega-dropdown — hover + click
      var navServices = document.querySelector('.nav-services');
      var servicesTrigger = navServices ? navServices.querySelector('.nav-link') : null;
      var servicesDropdown = document.getElementById('services-dropdown');
      if (navServices && servicesTrigger && servicesDropdown) {
        var closeTimer = null;
        var setOpen = function(open){
          navServices.setAttribute('data-open', String(open));
          servicesDropdown.setAttribute('data-open', String(open));
          servicesTrigger.setAttribute('aria-expanded', String(open));
        };
        var openNow = function(){ if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; } setOpen(true); };
        var closeSoon = function(){ if (closeTimer) clearTimeout(closeTimer); closeTimer = setTimeout(function(){ setOpen(false); }, 140); };
        var closeNow = function(){ if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; } setOpen(false); };
        navServices.addEventListener('mouseenter', openNow);
        navServices.addEventListener('mouseleave', closeSoon);
        servicesDropdown.addEventListener('mouseenter', openNow);
        servicesDropdown.addEventListener('mouseleave', closeSoon);
        servicesTrigger.addEventListener('click', function(e){
          if (window.innerWidth < 768) return;
          e.preventDefault();
          var isOpen = navServices.getAttribute('data-open') === 'true';
          if (isOpen) closeNow(); else openNow();
        });
        document.addEventListener('click', function(e){
          if (!navServices.contains(e.target) && !servicesDropdown.contains(e.target)) closeNow();
        });
        document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeNow(); });
        servicesDropdown.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeNow); });
      }

      // Mobile menu hamburger
      var burger = document.getElementById('nav-burger');
      var mobile = document.getElementById('nav-mobile');
      if (burger && mobile) {
        var close = function(){ burger.classList.remove('open'); mobile.classList.remove('open'); burger.setAttribute('aria-expanded','false'); };
        burger.addEventListener('click', function(){
          var open = burger.classList.toggle('open');
          mobile.classList.toggle('open', open);
          burger.setAttribute('aria-expanded', String(open));
        });
        mobile.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', close); });
        window.addEventListener('resize', function(){ if (window.innerWidth >= 768) close(); });
      }

      // Mobile services accordion
      var mobileServicesToggle = document.getElementById('nav-mobile-services-toggle');
      if (mobileServicesToggle) {
        mobileServicesToggle.addEventListener('click', function(){
          var expanded = mobileServicesToggle.getAttribute('aria-expanded') === 'true';
          mobileServicesToggle.setAttribute('aria-expanded', String(!expanded));
        });
      }
    })();
  </script>

  <!-- HERO -->
  <section class="relative pt-16">
    <div class="hero-grain relative h-[42vh] min-h-[340px] max-h-[520px] overflow-hidden bg-brand-navy-dark">
      <img src="${s.hero}" alt="${s.name}" class="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div class="absolute inset-0 hero-overlay"></div>
      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 text-white">
        <nav class="text-xs sm:text-sm font-semibold mb-4 opacity-90">
          <a href="/" class="hover:text-brand-green-light transition">Home</a>
          <i class="fa-solid fa-chevron-right text-[10px] mx-2 opacity-60"></i>
          <a href="/#services" class="hover:text-brand-green-light transition">Services</a>
          <i class="fa-solid fa-chevron-right text-[10px] mx-2 opacity-60"></i>
          <span class="text-brand-leaf">${s.name}</span>
        </nav>
        <div class="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
          <i class="fa-solid ${s.icon}"></i> Castle Exterminators · Durham, NC
        </div>
        <h1 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-tight">${s.name}</h1>
        <p class="mt-3 text-lg sm:text-xl max-w-2xl opacity-95">${s.tagline}</p>
      </div>
    </div>
  </section>

  <!-- BODY -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
    <div class="grid lg:grid-cols-3 gap-12">

      <article class="lg:col-span-2 space-y-12">

        <section>
          <p class="text-lg leading-relaxed text-slate-700">${s.intro}</p>
        </section>

        <section>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl mb-6">Common signs you need help</h2>
          <ul class="grid sm:grid-cols-2 gap-3">
            ${s.signs.map(item => `<li class="flex items-start gap-3 bg-brand-cream/60 border border-slate-100 rounded-xl p-4">
              <span class="mt-0.5 w-6 h-6 rounded-full bg-brand-green text-white grid place-items-center text-[11px] flex-shrink-0"><i class="fa-solid fa-check"></i></span>
              <span class="text-sm text-slate-700">${item}</span>
            </li>`).join('')}
          </ul>
        </section>

        <section>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl mb-6">How Castle Exterminators handles it</h2>
          <div class="space-y-4">
            ${s.approach.map((step, i) => `<div class="flex gap-5 bg-white border border-slate-100 hover:border-brand-green/40 rounded-2xl p-5 transition shadow-sm hover:shadow-card">
              <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-green text-white grid place-items-center font-display font-extrabold text-lg">${i + 1}</div>
              <div>
                <h3 class="font-bold text-lg mb-1">${step.title}</h3>
                <p class="text-sm text-slate-600 leading-relaxed">${step.body}</p>
              </div>
            </div>`).join('')}
          </div>
        </section>

        <section>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl mb-6">Frequently asked questions</h2>
          <div class="space-y-3">
            ${s.faq.map(item => `<details class="group bg-white border border-slate-100 rounded-xl p-5 transition hover:border-brand-green/40">
              <summary class="flex items-start justify-between gap-4 cursor-pointer font-bold text-brand-navy">
                <span>${item.q}</span>
                <i class="fa-solid fa-chevron-down text-brand-green transition group-open:rotate-180 mt-1"></i>
              </summary>
              <p class="mt-3 text-sm text-slate-600 leading-relaxed">${item.a}</p>
            </details>`).join('')}
          </div>
        </section>

      </article>

      <!-- SIDEBAR -->
      <aside class="space-y-6">
        <div class="bg-gradient-to-br from-brand-green to-brand-green-dark text-white rounded-2xl p-6 shadow-card sticky top-24">
          <p class="text-xs font-bold uppercase tracking-wider opacity-80 mb-2">Free inspection</p>
          <h3 class="font-display font-extrabold text-2xl mb-3">Get rid of ${s.name.toLowerCase()} for good.</h3>
          <p class="text-sm opacity-90 mb-5">Same-day service available across Durham, NC. Licensed, insured, and family-owned since 2017.</p>
          <a href="/#contact" class="block text-center bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-xl transition shadow-card mb-3">
            <i class="fa-solid fa-calendar-check mr-2"></i> Request Free Inspection
          </a>
          <a href="tel:+19196066866" class="block text-center bg-white/15 hover:bg-white/25 text-white font-bold py-3 px-4 rounded-xl transition backdrop-blur border border-white/25">
            <i class="fa-solid fa-phone-volume mr-2"></i> (919) 606-6866
          </a>
          <div class="mt-5 pt-5 border-t border-white/20 grid grid-cols-2 gap-3 text-center">
            <div><div class="font-display font-extrabold text-xl">5.0<i class="fa-solid fa-star text-brand-orange text-sm ml-1"></i></div><div class="text-[11px] opacity-80">Google & Yelp</div></div>
            <div><div class="font-display font-extrabold text-xl">8+</div><div class="text-[11px] opacity-80">Years in Durham</div></div>
          </div>
        </div>

        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h4 class="font-bold mb-4">Other services</h4>
          <ul class="space-y-2 text-sm">
            ${allServices.filter(o => o.slug !== s.slug).slice(0, 6).map(o => `<li><a href="/services/${o.slug}" class="flex items-center gap-2 text-slate-600 hover:text-brand-green transition"><i class="fa-solid ${o.icon} text-brand-green w-4"></i> ${o.name}</a></li>`).join('')}
          </ul>
          <a href="/#services" class="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-green hover:text-brand-green-dark">View all services <i class="fa-solid fa-arrow-right text-[10px]"></i></a>
        </div>
      </aside>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="bg-brand-navy-dark text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
      <div class="md:col-span-2">
        <span class="inline-block bg-white rounded-xl p-2 shadow-card mb-4">
          <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-9 w-auto" />
        </span>
        <p class="text-sm leading-relaxed max-w-md">Durham's family-owned pest control. Protecting homes across Durham, NC and surrounding communities since 2017 — with eco-friendly, family-safe treatments.</p>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Services</h4>
        <ul class="space-y-2 text-sm">
          ${allServices.slice(0, 6).map(o => `<li><a href="/services/${o.slug}" class="hover:text-white">${o.name}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Contact</h4>
        <ul class="space-y-2 text-sm">
          <li><i class="fa-solid fa-phone-volume mr-2"></i> <a href="tel:+19196066866" class="hover:text-white">(919) 606-6866</a></li>
          <li><i class="fa-solid fa-envelope mr-2"></i> <a href="mailto:info@castleexterminators.co" class="hover:text-white">info@castleexterminators.co</a></li>
          <li><i class="fa-solid fa-location-dot mr-2"></i> Durham, NC</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
        <span>© ${new Date().getFullYear()} Castle Exterminators. All rights reserved.</span>
        <span>Licensed & Insured in North Carolina</span>
      </div>
    </div>
  </footer>

  <a href="tel:+19196066866" class="md:hidden fixed bottom-5 right-5 z-50 bg-brand-orange hover:bg-brand-orange-dark text-white w-14 h-14 rounded-full grid place-items-center shadow-card">
    <i class="fa-solid fa-phone-volume text-xl"></i>
  </a>
</body>
</html>`

services.forEach(s => {
  app.get(`/services/${s.slug}`, (c) => c.html(renderServicePage(s, services)))
})

// ---------------------------------------------------------------------------
// SEO: robots.txt — allows all crawlers and points them to the sitemap
// ---------------------------------------------------------------------------
app.get('/robots.txt', (c) => {
  const body = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://castleexterminators.co/sitemap.xml
`
  return c.text(body, 200, { 'Content-Type': 'text/plain; charset=utf-8' })
})

// ---------------------------------------------------------------------------
// SEO: sitemap.xml — homepage + every service detail page
// ---------------------------------------------------------------------------
app.get('/sitemap.xml', (c) => {
  const today = new Date().toISOString().split('T')[0]
  const urls = [
    { loc: 'https://castleexterminators.co/',           priority: '1.0', changefreq: 'weekly' },
    ...services.map(s => ({
      loc: `https://castleexterminators.co/services/${s.slug}`,
      priority: '0.9',
      changefreq: 'monthly'
    }))
  ]
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  return c.text(body, 200, { 'Content-Type': 'application/xml; charset=utf-8' })
})

export default app
