import { Hono } from 'hono'

const app = new Hono()

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pest Control Services in Durham & Chapel Hill | Castle Exterminators</title>
    <meta name="description" content="Top pest control services in Durham & Chapel Hill by Castle Exterminators. We eliminate termites, bed bugs & rodents securely. Contact us now!">
    <meta name="keywords" content="pest control Durham NC, exterminator Durham, termite control Durham, ant control Durham, roach exterminator Durham, mosquito control Durham, rodent removal Durham, eco-friendly pest control, family-safe pest control">
    <meta name="theme-color" content="#1F6F4A">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="Castle Exterminators">
    <meta name="geo.region" content="US-NC">
    <meta name="geo.placename" content="Durham, North Carolina">
    <link rel="canonical" href="https://www.castleexterminators.co/">

    <!-- Open Graph -->
    <meta property="og:site_name" content="Castle Exterminators">
    <meta property="og:title" content="Pest Control Services in Durham & Chapel Hill | Castle Exterminators">
    <meta property="og:description" content="Top pest control services in Durham & Chapel Hill by Castle Exterminators. We eliminate termites, bed bugs & rodents securely. Contact us now!">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.castleexterminators.co/">
    <meta property="og:image" content="https://www.castleexterminators.co/static/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Castle Exterminators — Family-Owned Pest Control · Durham, NC">
    <meta property="og:locale" content="en_US">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Pest Control Services in Durham & Chapel Hill | Castle Exterminators">
    <meta name="twitter:description" content="Top pest control services in Durham & Chapel Hill by Castle Exterminators. We eliminate termites, bed bugs & rodents securely. Contact us now!">
    <meta name="twitter:image" content="https://www.castleexterminators.co/static/og-image.jpg">
    <meta name="twitter:image:alt" content="Castle Exterminators — Family-Owned Pest Control · Durham, NC">

    <!-- Structured data: LocalBusiness + Organization (the most important schema for local Google rankings) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "PestControlService",
      "@id": "https://www.castleexterminators.co/#business",
      "name": "Castle Exterminators",
      "alternateName": "Castle Exterminators Durham NC",
      "description": "Family-owned local pest control company serving Durham, NC and surrounding communities. Eco-friendly, family-safe treatments for termites, ants, roaches, rodents, mosquitoes and more.",
      "url": "https://www.castleexterminators.co/",
      "telephone": "+1-919-606-8686",
      "email": "services@castleexterminators.co",
      "image": "https://www.castleexterminators.co/static/castle-logo.png",
      "logo": "https://www.castleexterminators.co/static/castle-logo.png",
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
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "3",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sarah J." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "We had a really annoying ant problem in our kitchen here in Durham, and Castle Exterminators came to the rescue so fast! The technician arrived on time, was super friendly, and explained everything clearly. Our home is now ant-free — highly recommend!",
          "itemReviewed": { "@id": "https://www.castleexterminators.co/#business" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Michael P." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "When you invite someone into your home, trust is a big deal. The team at Castle Exterminators truly impressed us — professional, knowledgeable, and very respectful of our property. They took their time and inspected every corner. Fantastic job!",
          "itemReviewed": { "@id": "https://www.castleexterminators.co/#business" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Emily R." },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "We were dealing with persistent spiders and I was dreading the process. But Castle Exterminators made it so easy! Got the job done quickly and the results have been fantastic — no more spiders. For reliable, lasting pest solutions, they're the ones to call!",
          "itemReviewed": { "@id": "https://www.castleexterminators.co/#business" }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pest Control Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Termite Control & Inspection", "url": "https://www.castleexterminators.co/services/termites" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roach Extermination", "url": "https://www.castleexterminators.co/services/roaches" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rodent Removal & Exclusion", "url": "https://www.castleexterminators.co/services/rodents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ant Control", "url": "https://www.castleexterminators.co/services/ants" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mosquito Reduction", "url": "https://www.castleexterminators.co/services/mosquitoes" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "General Pest Control", "url": "https://www.castleexterminators.co/services/general-pest-control" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Crawl Space Encapsulation", "url": "https://www.castleexterminators.co/services/crawl-space-encapsulation" } }
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
      "@id": "https://www.castleexterminators.co/#website",
      "url": "https://www.castleexterminators.co/",
      "name": "Castle Exterminators",
      "description": "Family-owned pest control in Durham, NC",
      "publisher": { "@id": "https://www.castleexterminators.co/#business" },
      "inLanguage": "en-US"
    }
    </script>

    <!-- Favicon: castle silhouette mark, brand emerald #1F6F4A -->
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="48x48" href="/static/favicon-48x48.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png">
    <link rel="manifest" href="/static/site.webmanifest">
    <link rel="mask-icon" href="/static/castle-favicon.png" color="#1F6F4A">

    <!-- Tailwind (compiled at build time → fast on mobile) -->
    <link rel="stylesheet" href="/static/tailwind.css">

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Preconnect to the GorillaDesk form host so DNS / TLS handshake
         finish well before the user clicks "Open Inspection Form".
         This shaves ~300-600ms off the perceived form load time. -->
    <link rel="preconnect" href="https://portal-embed-v3.gorilladesk.com" crossorigin>
    <link rel="dns-prefetch" href="https://portal-embed-v3.gorilladesk.com">

    <!-- Preload hero image so it appears as soon as possible (LCP boost).
         Mobile gets the small 1024w version, desktop gets the 1920w. -->
    <link rel="preload" as="image"
          href="/static/hero-home-mobile.webp"
          imagesrcset="/static/hero-home-mobile.webp 1024w, /static/hero-home.webp 1920w"
          imagesizes="(max-width: 1023px) 100vw, 100vw"
          type="image/webp"
          fetchpriority="high">
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

      /* ---------------------------------------------------------------------------
         FFFUEL-STYLE TEXTURES — inline SVG data URIs that apply organic, printed-
         paper feel without any extra HTTP requests. Three textures available:
           1. body grain      — fine fractal-noise tiled background, site-wide
           2. .tex-spots      — voronoi-style organic specks (sections)
           3. .tex-topo       — wavy topographic lines (watermark backgrounds)
         All textures use the mossy-ink / brand green so they blend into the
         natural palette without screaming "I'm a texture!".
         --------------------------------------------------------------------------- */

      /* (1) Site-wide grain — applied as a tiled background-image on the body
         itself, so it's always behind every section without any z-index tricks.
         Each section that wants its own bg (cream/sand/etc.) will override this
         only where its bg-color is opaque. */
      body {
        font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif;
        color: rgba(var(--ink), var(--emphasis-high));  /* 87% — High emphasis baseline */
        background-color: #FBF8F1;
        background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.118  0 0 0 0 0.165  0 0 0 0 0.141  0 0 0 0.07 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-attachment: fixed;
        background-size: 240px 240px;
        font-feature-settings: 'ss01', 'cv11';
      }

      /* Sections with their own bg color need a translucent variant so the body
         grain shows through subtly. We use color-mix to fade the section color
         down to ~96% opaque, letting 4% of the body grain bleed up. */
      #services { background-color: rgba(251, 248, 241, 0.94) !important; }   /* bone w/ grain leak */
      #why-us   { background-color: rgba(245, 240, 226, 0.94) !important; }   /* cream w/ grain leak */
      #process  { background-color: rgba(251, 248, 241, 0.94) !important; }   /* bone w/ grain leak */
      #faq      { background-color: rgba(232, 222, 197, 0.45) !important; }   /* sand/40 keeps its blend */
      #contact  { /* gradient — leave alone */ }

      /* (2) .tex-spots — Voronoi-flavored organic specks. Applied as a section
         background overlay; ~6% opacity over the existing section bg color. */
      .tex-spots {
        position: relative;
      }
      .tex-spots::before {
        content: '';
        position: absolute; inset: 0;
        pointer-events: none;
        z-index: 0;
        opacity: .5;
        background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cg fill='%231F6F4A' fill-opacity='0.07'%3E%3Ccircle cx='42' cy='58' r='2.4'/%3E%3Ccircle cx='118' cy='34' r='1.6'/%3E%3Ccircle cx='192' cy='82' r='3.1'/%3E%3Ccircle cx='268' cy='28' r='2.0'/%3E%3Ccircle cx='338' cy='66' r='1.5'/%3E%3Ccircle cx='412' cy='44' r='2.6'/%3E%3Ccircle cx='486' cy='76' r='1.8'/%3E%3Ccircle cx='552' cy='38' r='2.2'/%3E%3Ccircle cx='28' cy='128' r='1.9'/%3E%3Ccircle cx='96' cy='168' r='2.7'/%3E%3Ccircle cx='168' cy='138' r='1.4'/%3E%3Ccircle cx='244' cy='176' r='2.3'/%3E%3Ccircle cx='318' cy='142' r='3.0'/%3E%3Ccircle cx='392' cy='168' r='1.7'/%3E%3Ccircle cx='458' cy='132' r='2.5'/%3E%3Ccircle cx='528' cy='162' r='2.0'/%3E%3Ccircle cx='58' cy='232' r='2.8'/%3E%3Ccircle cx='128' cy='268' r='1.5'/%3E%3Ccircle cx='208' cy='242' r='2.1'/%3E%3Ccircle cx='282' cy='276' r='2.6'/%3E%3Ccircle cx='358' cy='244' r='1.8'/%3E%3Ccircle cx='426' cy='272' r='2.3'/%3E%3Ccircle cx='498' cy='238' r='1.6'/%3E%3Ccircle cx='568' cy='268' r='2.9'/%3E%3Ccircle cx='38' cy='338' r='1.6'/%3E%3Ccircle cx='112' cy='312' r='2.4'/%3E%3Ccircle cx='184' cy='358' r='1.9'/%3E%3Ccircle cx='256' cy='322' r='2.7'/%3E%3Ccircle cx='328' cy='362' r='1.4'/%3E%3Ccircle cx='404' cy='318' r='2.2'/%3E%3Ccircle cx='472' cy='352' r='3.0'/%3E%3Ccircle cx='546' cy='328' r='1.7'/%3E%3Ccircle cx='72' cy='418' r='2.5'/%3E%3Ccircle cx='148' cy='448' r='1.5'/%3E%3Ccircle cx='222' cy='412' r='2.0'/%3E%3Ccircle cx='296' cy='452' r='2.8'/%3E%3Ccircle cx='368' cy='422' r='1.8'/%3E%3Ccircle cx='442' cy='458' r='2.3'/%3E%3Ccircle cx='514' cy='418' r='1.6'/%3E%3Ccircle cx='584' cy='448' r='2.6'/%3E%3Ccircle cx='52' cy='518' r='2.1'/%3E%3Ccircle cx='124' cy='548' r='2.7'/%3E%3Ccircle cx='198' cy='512' r='1.4'/%3E%3Ccircle cx='272' cy='552' r='2.4'/%3E%3Ccircle cx='344' cy='522' r='1.9'/%3E%3Ccircle cx='418' cy='562' r='2.8'/%3E%3Ccircle cx='492' cy='528' r='1.7'/%3E%3Ccircle cx='562' cy='552' r='2.2'/%3E%3C/g%3E%3Cg fill='%23C2663B' fill-opacity='0.05'%3E%3Ccircle cx='82' cy='92' r='1.2'/%3E%3Ccircle cx='228' cy='114' r='1.4'/%3E%3Ccircle cx='372' cy='102' r='1.1'/%3E%3Ccircle cx='518' cy='118' r='1.3'/%3E%3Ccircle cx='62' cy='202' r='1.5'/%3E%3Ccircle cx='208' cy='198' r='1.2'/%3E%3Ccircle cx='352' cy='212' r='1.4'/%3E%3Ccircle cx='498' cy='196' r='1.1'/%3E%3Ccircle cx='102' cy='302' r='1.3'/%3E%3Ccircle cx='248' cy='292' r='1.5'/%3E%3Ccircle cx='392' cy='308' r='1.2'/%3E%3Ccircle cx='538' cy='298' r='1.4'/%3E%3Ccircle cx='82' cy='392' r='1.1'/%3E%3Ccircle cx='228' cy='398' r='1.3'/%3E%3Ccircle cx='372' cy='388' r='1.5'/%3E%3Ccircle cx='518' cy='402' r='1.2'/%3E%3Ccircle cx='102' cy='488' r='1.4'/%3E%3Ccircle cx='248' cy='482' r='1.1'/%3E%3Ccircle cx='392' cy='498' r='1.3'/%3E%3Ccircle cx='538' cy='488' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
        background-size: 600px 600px;
      }
      .tex-spots > * { position: relative; z-index: 1; }

      /* (3) .tex-topo — wavy topographic / field-guide lines, used as a subtle
         watermark behind the FAQ. */
      .tex-topo {
        position: relative;
      }
      .tex-topo::before {
        content: '';
        position: absolute; inset: 0;
        pointer-events: none;
        z-index: 0;
        opacity: .6;
        background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'%3E%3Cg fill='none' stroke='%231F6F4A' stroke-opacity='0.08' stroke-width='1'%3E%3Cpath d='M0 80 Q 200 40 400 80 T 800 80'/%3E%3Cpath d='M0 140 Q 200 100 400 140 T 800 140'/%3E%3Cpath d='M0 200 Q 200 160 400 200 T 800 200'/%3E%3Cpath d='M0 260 Q 200 220 400 260 T 800 260'/%3E%3Cpath d='M0 320 Q 200 280 400 320 T 800 320'/%3E%3Cpath d='M0 380 Q 200 340 400 380 T 800 380'/%3E%3Cpath d='M0 440 Q 200 400 400 440 T 800 440'/%3E%3Cpath d='M0 500 Q 200 460 400 500 T 800 500'/%3E%3Cpath d='M0 560 Q 200 520 400 560 T 800 560'/%3E%3C/g%3E%3Cg fill='none' stroke='%23C2663B' stroke-opacity='0.05' stroke-width='1'%3E%3Cpath d='M0 110 Q 200 70 400 110 T 800 110'/%3E%3Cpath d='M0 230 Q 200 190 400 230 T 800 230'/%3E%3Cpath d='M0 350 Q 200 310 400 350 T 800 350'/%3E%3Cpath d='M0 470 Q 200 430 400 470 T 800 470'/%3E%3C/g%3E%3C/svg%3E");
        background-size: 800px 600px;
      }
      .tex-topo > * { position: relative; z-index: 1; }

      /* Respect users with low-end devices via the data-saver hint */
      @media (prefers-reduced-data: reduce) {
        body { background-image: none; }
        .tex-spots::before, .tex-topo::before { display: none; }
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
         HERO — cinematic NC home photograph with layered emerald gradient overlay,
         scroll-linked parallax, and progressive vignette. The photo lives in a
         separate layer (.hero-photo) so we can transform it independently for
         parallax without affecting the gradient or content positioning.
         --------------------------------------------------------------------------- */
      .hero-mesh {
        position: relative;
        overflow: hidden;
        background: #0E1612;  /* fallback while photo loads */
        min-height: clamp(620px, 88vh, 880px);
      }

      /* Photo layer — sits behind everything, gets translated via scroll JS.
         Uses image-set() to serve the smallest format the browser supports:
         AVIF (50% smaller than JPEG) → WebP (35% smaller) → JPEG fallback.
         Mobile gets the smaller 1024w variant via media query (saves ~85% on phones). */
      .hero-photo {
        position: absolute;
        inset: -10% 0 -10% 0;  /* over-sized so parallax translate doesn't expose edges */
        /* Mobile-first: load the small 1024w variant by default */
        background-image: image-set(
          url('/static/hero-home-mobile.avif') type('image/avif'),
          url('/static/hero-home-mobile.webp') type('image/webp'),
          url('/static/hero-home-mobile.jpg') type('image/jpeg')
        );
        background-size: cover;
        background-position: center 40%;
        background-repeat: no-repeat;
        z-index: 0;
        will-change: transform;
        transform: translate3d(0, 0, 0);
      }
      /* Desktop: load the full 1920w variant */
      @media (min-width: 1024px) {
        .hero-photo {
          background-image: image-set(
            url('/static/hero-home.avif') type('image/avif'),
            url('/static/hero-home.webp') type('image/webp'),
            url('/static/hero-home.jpg') type('image/jpeg')
          );
        }
      }
      /* Last-resort fallback for browsers without image-set() (rare) */
      @supports not (background-image: image-set(url('a.webp') type('image/webp'))) {
        .hero-photo { background-image: url('/static/hero-home.jpg'); }
      }

      /* Cinematic gradient overlay — emerald wash that fades to clearer on right.
         This is the secret sauce: the photo stays visible enough to feel real,
         but the brand colors dominate so the page reads as "Castle Exterminators"
         not "stock photo of a house". */
      .hero-overlay {
        position: absolute; inset: 0; z-index: 1; pointer-events: none;
        background:
          /* Deep mossy ink wash from top-left (where headline sits) */
          linear-gradient(115deg,
            rgba(14,22,18,0.92) 0%,
            rgba(30,42,36,0.82) 30%,
            rgba(19,80,47,0.55) 60%,
            rgba(14,22,18,0.45) 100%),
          /* Subtle emerald color cast over the whole thing */
          linear-gradient(180deg,
            rgba(19,80,47,0.18) 0%,
            transparent 50%,
            rgba(14,22,18,0.40) 100%);
      }

      /* Floating organic accent blobs — kept from old hero, now layered above
         the photo for depth. Reduced opacity since the photo already gives texture. */
      .hero-blob {
        position: absolute; z-index: 2;
        border-radius: 50%; filter: blur(80px);
        pointer-events: none; will-change: transform;
      }
      .hero-blob.b1 { width: 360px; height: 360px; background: #3FA372; top: -100px; left: -80px; opacity: .28; animation: floatA 16s ease-in-out infinite; }
      .hero-blob.b2 { width: 420px; height: 420px; background: #C2663B; bottom: -140px; right: -100px; opacity: .22; animation: floatB 20s ease-in-out infinite; }
      .hero-blob.b3 { width: 240px; height: 240px; background: #A7C9A4; top: 35%; right: 18%; opacity: .14; animation: floatA 22s ease-in-out infinite reverse; }
      @keyframes floatA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,30px) scale(1.08); } }
      @keyframes floatB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-30px,-40px) scale(1.12); } }

      /* Grain overlay — fffuel-style feTurbulence noise, tuned for the dark hero photo.
         Higher frequency = finer grain; overlay blend lets the photo show through. */
      .hero-mesh::after {
        content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 3;
        background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 320'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch' seed='4'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-size: 320px 320px;
        opacity: .6; mix-blend-mode: overlay;
      }

      /* Hero content sits above all overlays */
      .hero-content { position: relative; z-index: 4; }

      /* Scroll-linked fade-out — JS sets --scroll-progress (0..1) and we use it
         to dim & lift the hero content as the user scrolls past it. */
      .hero-content {
        opacity: calc(1 - var(--scroll-progress, 0) * 1.1);
        transform: translate3d(0, calc(var(--scroll-progress, 0) * -30px), 0);
        transition: opacity .1s linear, transform .1s linear;
      }

      /* Scroll-down cue — animated chevron that nudges the user to scroll.
         Disappears as soon as the user starts scrolling. */
      .hero-scroll-cue {
        position: absolute; left: 50%; bottom: 24px;
        transform: translateX(-50%);
        z-index: 5;
        display: flex; flex-direction: column; align-items: center; gap: .4rem;
        color: rgba(255,255,255,.65);
        font-size: .7rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
        opacity: calc(1 - var(--scroll-progress, 0) * 3);  /* fades fast on scroll */
        pointer-events: none;
        animation: scrollCueFade 1.2s ease-out .6s both;
      }
      .hero-scroll-cue .cue-line {
        width: 1px; height: 38px;
        background: linear-gradient(to bottom, transparent, rgba(255,255,255,.6));
        position: relative; overflow: hidden;
      }
      .hero-scroll-cue .cue-line::after {
        content: ''; position: absolute; top: -50%; left: 0; right: 0; height: 50%;
        background: linear-gradient(to bottom, transparent, #ffffff);
        animation: scrollCueRun 1.8s cubic-bezier(.5,0,.5,1) infinite;
      }
      @keyframes scrollCueRun { 0% { top: -50%; } 100% { top: 100%; } }
      @keyframes scrollCueFade { from { opacity: 0; transform: translate(-50%, 10px); } to { opacity: 1; transform: translate(-50%, 0); } }
      @media (prefers-reduced-motion: reduce) {
        .hero-scroll-cue .cue-line::after { animation: none; }
      }

      /* SVG wave divider sits at the bottom of the hero */
      .wave-divider { position: absolute; left: 0; right: 0; bottom: -1px; line-height: 0; z-index: 4; }
      .wave-divider svg { display: block; width: 100%; height: 80px; }

      /* ---------------------------------------------------------------------------
         GLOBAL SCROLL PROGRESS BAR — sticks under the navbar, fills as the user
         scrolls down the page. Tiny thing but it gives the whole site a more
         premium "long-read" feel.
         --------------------------------------------------------------------------- */
      .scroll-progress {
        position: fixed;
        top: 56px;             /* sits flush below the 56px navbar */
        left: 0; right: 0;
        height: 2px;
        z-index: 49;            /* under the header (z-50), over the content */
        background: transparent;
        pointer-events: none;
      }
      .scroll-progress .scroll-progress-bar {
        height: 100%;
        width: 0;               /* set by JS */
        background: linear-gradient(90deg, #1F6F4A 0%, #2E9B6A 50%, #C2663B 100%);
        box-shadow: 0 0 12px rgba(46,155,106,.6);
        transition: width .08s linear;
        will-change: width;
      }
      @media (prefers-reduced-motion: reduce) {
        .scroll-progress .scroll-progress-bar { transition: none; }
      }

      /* ---------------------------------------------------------------------------
         BLUR-UP REVEAL VARIANT — used for the hero card and key images so they
         feel like they're "coming into focus" as the user scrolls them into view.
         --------------------------------------------------------------------------- */
      .reveal-blur {
        opacity: 0;
        transform: translateY(32px) scale(.97);
        filter: blur(12px);
        transition: opacity .9s cubic-bezier(.22,1,.36,1),
                    transform .9s cubic-bezier(.22,1,.36,1),
                    filter .9s cubic-bezier(.22,1,.36,1);
      }
      .reveal-blur.in {
        opacity: 1;
        transform: none;
        filter: blur(0);
      }
      @media (prefers-reduced-motion: reduce) {
        .reveal-blur { opacity: 1; transform: none; filter: none; }
      }

      /* ---------------------------------------------------------------------------
         SECTION HEADER — eyebrow letter-wipe + animated underline
         The small uppercase label ("WHAT WE TREAT IN DURHAM", "HOW IT WORKS"...)
         wipes in letter-by-letter using a clip-path technique. The H2 below it
         gets a thin terracotta underline that draws from left to right.
         --------------------------------------------------------------------------- */
      .eyebrow {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }
      .eyebrow .eyebrow-inner {
        display: inline-block;
        transform: translateY(105%);
        transition: transform .9s cubic-bezier(.22,1,.36,1) .1s;
      }
      .eyebrow.in .eyebrow-inner {
        transform: translateY(0);
      }
      /* Decorative slim line beside the eyebrow text */
      .eyebrow::before {
        content: '';
        display: inline-block;
        width: 0;
        height: 1px;
        background: currentColor;
        vertical-align: middle;
        margin-right: .8rem;
        transition: width .8s cubic-bezier(.22,1,.36,1) .35s;
      }
      .eyebrow.in::before { width: 24px; }
      @media (prefers-reduced-motion: reduce) {
        .eyebrow .eyebrow-inner { transform: none; }
        .eyebrow::before { width: 24px; }
      }

      /* Section H2 underline draw — the heading gets a 2px accent that draws on reveal */
      .heading-underline {
        position: relative;
        display: inline-block;
        padding-bottom: 8px;
      }
      .heading-underline::after {
        content: '';
        position: absolute;
        left: 0; bottom: 0;
        width: 60px; height: 3px;
        background: linear-gradient(90deg, #1F6F4A, #C2663B);
        border-radius: 2px;
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform .9s cubic-bezier(.22,1,.36,1) .25s;
      }
      .heading-underline.in::after { transform: scaleX(1); }
      /* When the heading is in a center-aligned container, center the underline */
      .text-center .heading-underline::after { left: 50%; transform: translateX(-50%) scaleX(0); transform-origin: center; }
      .text-center .heading-underline.in::after { transform: translateX(-50%) scaleX(1); }
      @media (prefers-reduced-motion: reduce) {
        .heading-underline::after,
        .text-center .heading-underline.in::after { transform: scaleX(1); }
      }

      /* ---------------------------------------------------------------------------
         SERVICE CARDS — 3D TILT on hover (cursor-driven, JS sets --rx/--ry)
         Subtle perspective tilt that follows the cursor for tactile depth.
         The card itself is the transform target; --rx and --ry are CSS custom
         properties that JS updates on pointermove.
         --------------------------------------------------------------------------- */
      .service-card {
        transform-style: preserve-3d;
        perspective: 1000px;
        transform:
          translateY(var(--lift, 0px))
          rotateX(calc(var(--ry, 0) * -1deg))
          rotateY(calc(var(--rx, 0) * 1deg));
        transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease, border-color .3s ease;
        will-change: transform;
      }
      .service-card.is-tilting {
        transition: transform .08s linear, box-shadow .4s ease;
      }
      .service-card:hover { --lift: -6px; }
      /* Override the existing translateY hover from earlier in the file */
      .service-card:hover { transform:
        translateY(var(--lift, -6px))
        rotateX(calc(var(--ry, 0) * -1deg))
        rotateY(calc(var(--rx, 0) * 1deg));
      }
      /* Sheen sweep on hover — luxury feel */
      .service-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.18) 50%, transparent 70%);
        opacity: 0;
        pointer-events: none;
        transition: opacity .4s ease, transform .9s ease;
        transform: translateX(-100%);
        z-index: 2;
        border-radius: inherit;
      }
      .service-card:hover::before { opacity: 1; transform: translateX(100%); }
      @media (prefers-reduced-motion: reduce) {
        .service-card { transform: none !important; }
        .service-card::before { display: none; }
      }

      /* ---------------------------------------------------------------------------
         PROCESS — scroll-linked connector line (replaces all-at-once trigger).
         The line draws itself as the user scrolls through the section, and each
         step card activates as the drawing reaches it.
         --------------------------------------------------------------------------- */
      .process-line {
        background: linear-gradient(90deg, #1F6F4A 0%, #2E9B6A 35%, #C2663B 70%, #1F6F4A 100%);
        transform: scaleX(var(--process-progress, 0));
        transition: none;  /* JS-driven now, no CSS easing */
      }
      /* Step number badge — pulses when the line reaches it */
      .process-step {
        transition: transform .35s ease, box-shadow .35s ease;
      }
      .process-step .process-num {
        position: absolute; top: -16px; left: -8px;
        width: 40px; height: 40px;
        border-radius: 12px;
        background: #1E2A24;
        color: #fff;
        display: grid; place-items: center;
        font-weight: 800;
        font-family: 'Fraunces', serif;
        box-shadow: 0 8px 16px -8px rgba(30,42,36,.35);
        transition: background-color .5s ease, transform .5s cubic-bezier(.34,1.56,.64,1);
      }
      .process-step.is-active .process-num {
        background: linear-gradient(135deg, #1F6F4A, #2E9B6A);
        transform: scale(1.1);
        box-shadow: 0 0 0 4px rgba(46,155,106,.18),
                    0 12px 24px -8px rgba(31,111,74,.5);
      }
      .process-step.is-active {
        transform: translateY(-4px);
        box-shadow: 0 14px 34px -12px rgba(30,42,36,.22);
      }
      .process-step .process-icon {
        transition: transform .5s cubic-bezier(.34,1.56,.64,1), color .3s ease;
      }
      .process-step.is-active .process-icon {
        transform: scale(1.15) rotate(-4deg);
        color: #C2663B;
      }

      /* ---------------------------------------------------------------------------
         STATS — scroll-linked count-up (progressive, tied to scroll position)
         --------------------------------------------------------------------------- */
      .stat-card { transition: transform .4s cubic-bezier(.22,1,.36,1); }
      .stat-card.is-active { transform: translateY(-6px); }
      .stat-card .stat-num {
        background: linear-gradient(135deg, #1F6F4A 0%, #2E9B6A 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
      }

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
         PROCESS — connector line positioning (the scroll-linked progress draw
         is defined further up under the SERVICE/PROCESS section)
         --------------------------------------------------------------------------- */
      .process-wrap { position: relative; }
      .process-line {
        position: absolute; left: 0; right: 0; top: 36px; height: 3px;
        border-radius: 3px;
        transform-origin: left center;
        z-index: 0;
        opacity: .9;
      }
      @media (max-width: 1023px) { .process-line { display: none; } }
      .process-step { position: relative; z-index: 1; }
      .process-step:hover { box-shadow: 0 14px 34px -12px rgba(30,42,36,.22); }

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
                    backdrop-filter .3s ease,
                    border-color .3s ease;
      }

      /* Scroll-aware shadow + tint — stronger, more premium */
      #site-header.nav-scrolled {
        background-color: rgba(251,248,241,.94);
        backdrop-filter: saturate(180%) blur(16px);
        -webkit-backdrop-filter: saturate(180%) blur(16px);
        box-shadow: 0 8px 28px -12px rgba(30,42,36,.22),
                    0 1px 0 0 rgba(31,111,74,.08);
        border-bottom-color: transparent;
      }

      /* Logo — subtle scale on hover, never overdone */
      .nav-logo img {
        transition: transform .4s cubic-bezier(.22,1,.36,1);
      }
      .nav-logo:hover img { transform: scale(1.04); }

      /* ─── Open-now status pill ─────────────────────────────────────── */
      .nav-status {
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        padding: .375rem .75rem;
        border-radius: 999px;
        font-size: .75rem;
        font-weight: 600;
        letter-spacing: .01em;
        background: rgba(31,111,74,.08);
        color: #155538;
        border: 1px solid rgba(31,111,74,.18);
        white-space: nowrap;
        transition: background-color .25s ease, border-color .25s ease;
      }
      .nav-status:hover {
        background: rgba(31,111,74,.12);
        border-color: rgba(31,111,74,.28);
      }
      /* When closed — soft terracotta, communicates "call/email instead" */
      .nav-status.is-closed {
        background: rgba(194,102,59,.08);
        color: #8a3f15;
        border-color: rgba(194,102,59,.20);
      }
      .nav-status.is-closed .nav-status-dot {
        background: #C2663B;
        box-shadow: 0 0 0 0 rgba(194,102,59,.45);
        animation: none;
      }
      .nav-status-dot {
        width: 8px; height: 8px;
        border-radius: 999px;
        background: #2E9B6A;
        box-shadow: 0 0 0 0 rgba(46,155,106,.55);
        animation: nav-status-pulse 2.2s cubic-bezier(.4,0,.6,1) infinite;
        flex-shrink: 0;
      }
      @keyframes nav-status-pulse {
        0%   { box-shadow: 0 0 0 0 rgba(46,155,106,.55); }
        70%  { box-shadow: 0 0 0 7px rgba(46,155,106,0); }
        100% { box-shadow: 0 0 0 0 rgba(46,155,106,0); }
      }
      @media (prefers-reduced-motion: reduce) {
        .nav-status-dot { animation: none; }
      }

      /* CTA button — phone-led, with subtle ring animation on hover */
      .nav-cta {
        position: relative;
        transition: transform .3s cubic-bezier(.22,1,.36,1),
                    box-shadow .3s ease,
                    background-color .25s ease;
      }
      .nav-cta:hover {
        transform: translateY(-1px);
        box-shadow: 0 8px 20px -6px rgba(194,102,59,.45);
      }
      .nav-cta .nav-cta-icon {
        transition: transform .35s cubic-bezier(.34,1.56,.64,1);
      }
      .nav-cta:hover .nav-cta-icon {
        transform: rotate(-8deg) scale(1.1);
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

      /* Mobile hamburger — hidden on desktop, flex on mobile */
      .nav-burger {
        position: relative;
        width: 26px; height: 20px;
        display: none;  /* hidden by default (desktop) */
        flex-direction: column; justify-content: space-between;
        background: transparent; border: 0; padding: 0; cursor: pointer;
      }
      @media (max-width: 767px) {
        .nav-burger { display: flex; }
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
    <nav class="nav-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between relative">
      <a href="/" class="nav-logo flex items-center gap-3 shrink-0" aria-label="Castle Exterminators home">
        <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-9 sm:h-10 w-auto" />
        <span class="sr-only">Castle Exterminators</span>
      </a>

      <ul class="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
        <li class="nav-services" data-open="false">
          <a href="#services" class="nav-link inline-flex items-center gap-1.5" data-section="services" aria-haspopup="true" aria-expanded="false" aria-controls="services-dropdown">
            Services
            <i class="fa-solid fa-chevron-down text-[10px] opacity-70" aria-hidden="true"></i>
          </a>
        </li>
        <li><a href="/pests" class="nav-link">Pest Library</a></li>
        <li><a href="/about" class="nav-link">About</a></li>
        <li><a href="#why-us" class="nav-link" data-section="why-us">Why Us</a></li>
        <li><a href="#reviews" class="nav-link" data-section="reviews">Reviews</a></li>
        <li><a href="#faq" class="nav-link" data-section="faq">FAQ</a></li>
      </ul>

      <div class="flex items-center gap-2.5 sm:gap-3">
        <!-- Open-now status pill (live, computed in JS) -->
        <span id="nav-status" class="nav-status hidden lg:inline-flex" role="status" aria-live="polite">
          <span class="nav-status-dot" aria-hidden="true"></span>
          <span class="nav-status-text">Open today &middot; 8–5</span>
        </span>

        <!-- Phone-led CTA — primary action shifts from generic 'Free Inspection' to a one-tap call -->
        <a href="tel:+19196068686" class="nav-cta inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-navy font-bold text-sm px-3.5 sm:px-4 py-2 rounded-lg shadow-cta">
          <span class="nav-cta-icon" aria-hidden="true"><i class="fa-solid fa-phone-volume"></i></span>
          <span class="hidden sm:inline">(919) 606-8686</span>
          <span class="sm:hidden">Call</span>
        </a>

        <button type="button" id="nav-burger" class="nav-burger md:hidden ml-0.5" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile">
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
        <li><a href="/pests" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Pest Library</a></li>
        <li><a href="/about" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">About</a></li>
        <li><a href="#why-us" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Why Us</a></li>
        <li><a href="#reviews" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Reviews</a></li>
        <li><a href="#faq" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">FAQ</a></li>
        <li class="pt-2">
          <a href="tel:+19196068686" class="flex items-center gap-2 px-2 py-2.5 text-brand-green font-bold">
            <i class="fa-solid fa-phone-volume"></i> (919) 606-8686
          </a>
        </li>
      </ul>
    </div>
  </header>

  <!-- Global scroll progress bar — sits flush under the navbar -->
  <div class="scroll-progress" aria-hidden="true">
    <div class="scroll-progress-bar" id="scroll-progress-bar"></div>
  </div>

  <main id="top" class="pt-14">

    <!-- ============== HERO — cinematic photo backdrop + scroll choreography ============== -->
    <section id="hero" class="hero-mesh text-white relative">
      <!-- Layer 1: photo backdrop (parallax target — JS translates this) -->
      <div class="hero-photo" aria-hidden="true"></div>
      <!-- Layer 2: brand-color gradient wash for legibility + brand identity -->
      <div class="hero-overlay" aria-hidden="true"></div>
      <!-- Layer 3: floating accent blobs -->
      <span class="hero-blob b1" aria-hidden="true"></span>
      <span class="hero-blob b2" aria-hidden="true"></span>
      <span class="hero-blob b3" aria-hidden="true"></span>

      <!-- Content (z-index:4 sits above all overlays) -->
      <div class="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <div class="reveal inline-flex items-center gap-2 bg-white/10 border border-brand-leaf/40 text-brand-leaf text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur">
            <span class="w-2 h-2 rounded-full bg-brand-leaf animate-pulse"></span>
            <i class="fa-solid fa-leaf text-[10px]"></i>
            Family-owned in Durham, NC • Eco-friendly & family-safe
          </div>

          <h1 class="reveal font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6" style="font-weight:700; text-shadow: 0 2px 30px rgba(0,0,0,.35);">
            Protecting What <span class="serif-italic text-brand-orange-soft">Matters Most</span><br>
            <span class="block text-2xl sm:text-3xl lg:text-4xl font-medium text-white/60 mt-2 tracking-tight">Your Home &amp; Family</span>
          </h1>

          <p class="reveal reveal-delay-1 text-lg sm:text-xl text-slate-100/90 max-w-xl mb-8 leading-relaxed" style="text-shadow: 0 1px 12px rgba(0,0,0,.3);">
            Protect your home from unwanted pests with Castle Exterminators, your trusted local pest control experts in Durham, NC. We provide effective, safe, and lasting solutions for a pest-free home.
          </p>

          <div class="reveal reveal-delay-2 flex flex-wrap gap-3 mb-10">
            <a href="#contact" class="cta-elastic pulse inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-navy font-bold px-7 py-4 rounded-xl shadow-cta text-base">
              <i class="fa-solid fa-clipboard-check"></i>
              Get Free Inspection
            </a>
            <a href="tel:+19196068686" class="cta-elastic inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-7 py-4 rounded-xl text-base backdrop-blur">
              <i class="fa-solid fa-phone-volume"></i>
              Call (919) 606-8686
            </a>
          </div>

          <!-- Trust strip -->
          <div class="reveal reveal-delay-3 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-100/90">
            <div class="flex items-center gap-2"><i class="fa-solid fa-star text-brand-orange"></i><strong class="text-white">5.0★</strong> on Google & Yelp</div>
            <div class="flex items-center gap-2"><i class="fa-solid fa-shield-halved text-brand-green-light"></i> Licensed & Insured in NC</div>
            <div class="flex items-center gap-2"><i class="fa-solid fa-leaf text-brand-green-light"></i> Eco-friendly options</div>
            <div class="flex items-center gap-2"><i class="fa-solid fa-people-roof text-brand-green-light"></i> Family-owned since 2017</div>
          </div>
        </div>

        <!-- Hero card — uses blur-up reveal for cinematic entrance -->
        <aside class="lg:col-span-5 reveal-blur">
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

      <!-- Scroll-down cue — soft animated line + label, fades fast as user scrolls -->
      <div class="hero-scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <span class="cue-line"></span>
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
        <div class="max-w-3xl mx-auto text-center mb-14">
          <p class="eyebrow text-brand-green font-bold uppercase tracking-wider text-sm mb-4">
            <span class="eyebrow-inner">What We Treat in Durham</span>
          </p>
          <h2 class="heading-underline text-4xl lg:text-5xl font-extrabold mb-5 reveal">Every common North Carolina pest — handled.</h2>
          <p class="text-lg text-slate-600 reveal reveal-delay-1">From persistent termites to nuisance mosquitoes, Castle Exterminators' certified technicians eliminate infestations at the source and keep them from coming back — using treatments that are tough on pests and gentle on your family.</p>
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
            Don't see your pest? Call (919) 606-8686 — we probably handle it.
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
          <div class="lg:col-span-5">
            <p class="eyebrow text-brand-green font-bold uppercase tracking-wider text-sm mb-4">
              <span class="eyebrow-inner">Why Castle Exterminators</span>
            </p>
            <h2 class="heading-underline text-4xl lg:text-5xl font-extrabold mb-6 reveal">Durham's family-owned pest control</h2>
            <p class="text-lg text-slate-600 mb-8 reveal reveal-delay-1">We're not a national franchise reading from a script — we're your Durham neighbors. Every home gets the same care we'd give our own, with eco-friendly treatments and certified, courteous technicians.</p>
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
    <section id="process" class="tex-spots py-20 lg:py-28 bg-brand-bone">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-14">
          <p class="eyebrow text-brand-green font-bold uppercase tracking-wider text-sm mb-4">
            <span class="eyebrow-inner">How It Works</span>
          </p>
          <h2 class="heading-underline text-4xl lg:text-5xl font-extrabold mb-5 reveal">A simple 4-step process</h2>
          <p class="text-lg text-slate-600 reveal reveal-delay-1">From your first call to long-term protection of your Durham home — here's exactly what to expect.</p>
        </div>

        <ol class="process-wrap grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
          <span class="process-line" aria-hidden="true"></span>
          <li class="process-step reveal relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7" data-step="1">
            <div class="process-num">1</div>
            <i class="process-icon fa-solid fa-phone-volume text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Contact us</h3>
            <p class="text-sm text-slate-600">Call (919) 606-8686, text, or fill out the form. We'll get back to you within 2 business hours.</p>
          </li>
          <li class="process-step reveal reveal-delay-1 relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7" data-step="2">
            <div class="process-num">2</div>
            <i class="process-icon fa-solid fa-magnifying-glass text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Free inspection</h3>
            <p class="text-sm text-slate-600">A certified Castle tech inspects your home and identifies the pest, source, and severity — no charge, no obligation.</p>
          </li>
          <li class="process-step reveal reveal-delay-2 relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7" data-step="3">
            <div class="process-num">3</div>
            <i class="process-icon fa-solid fa-spray-can-sparkles text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Custom treatment</h3>
            <p class="text-sm text-slate-600">A tailored, family-safe treatment plan with transparent flat-fee pricing — no surprises.</p>
          </li>
          <li class="process-step reveal reveal-delay-3 relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7" data-step="4">
            <div class="process-num">4</div>
            <i class="process-icon fa-solid fa-shield-halved text-2xl text-brand-green mb-4 mt-2 block"></i>
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
        <div class="max-w-3xl mx-auto text-center mb-14">
          <p class="eyebrow text-brand-leaf font-bold uppercase tracking-wider text-sm mb-4">
            <span class="eyebrow-inner">What Durham Homeowners Say</span>
          </p>
          <h2 class="heading-underline text-4xl lg:text-5xl font-extrabold mb-5 reveal">Real reviews from real Durham neighbors</h2>
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
    <section id="faq" class="tex-topo py-20 lg:py-28 bg-brand-sand/40">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <p class="eyebrow text-brand-green font-bold uppercase tracking-wider text-sm mb-4">
            <span class="eyebrow-inner">Common Questions</span>
          </p>
          <h2 class="heading-underline text-4xl lg:text-5xl font-extrabold mb-5 reveal">Frequently asked by our Durham neighbors</h2>
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
            <div class="faq-body"><p class="mt-4 text-slate-600 leading-relaxed">For urgent infestations we do our best to offer same-day service in the Durham area if you call before noon at <a href="tel:+19196068686" class="text-brand-green font-bold">(919) 606-8686</a>. Otherwise we'll schedule your free inspection within 24–48 hours, including evening slots.</p></div>
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
              "text": "For urgent infestations we do our best to offer same-day service in the Durham area if you call before noon at (919) 606-8686. Otherwise we'll schedule your free inspection within 24–48 hours, including evening slots."
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

    <!-- ============== SERVICE AREAS ============== -->
    <section id="service-areas" class="py-20 lg:py-28 bg-brand-bone">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 reveal">
          <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Where We Work</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">Pest control across the Triangle</h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">Locally owned in Durham, NC — proudly serving Durham, Chapel Hill, Raleigh, Cary, and the surrounding Triangle communities.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          <a href="/locations/downtown-durham" class="group block bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center"><i class="fa-solid fa-location-dot"></i></span>
              <h3 class="font-display font-extrabold text-xl text-brand-navy group-hover:text-brand-green transition">Downtown Durham</h3>
            </div>
            <p class="text-sm text-slate-600 mb-3">Brightleaf, Trinity Park, American Tobacco — pre-war homes and historic blocks.</p>
            <span class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green">View coverage <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
          </a>
          <a href="/locations/hope-valley" class="group block bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center"><i class="fa-solid fa-location-dot"></i></span>
              <h3 class="font-display font-extrabold text-xl text-brand-navy group-hover:text-brand-green transition">Hope Valley</h3>
            </div>
            <p class="text-sm text-slate-600 mb-3">South Durham's tree-canopy neighborhood — crawl spaces, ants, and seasonal pests.</p>
            <span class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green">View coverage <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
          </a>
          <a href="/locations/chapel-hill" class="group block bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center"><i class="fa-solid fa-location-dot"></i></span>
              <h3 class="font-display font-extrabold text-xl text-brand-navy group-hover:text-brand-green transition">Chapel Hill</h3>
            </div>
            <p class="text-sm text-slate-600 mb-3">UNC neighborhoods, Meadowmont, Southern Village — student rentals and family homes.</p>
            <span class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green">View coverage <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
          </a>
          <a href="/locations/raleigh" class="group block bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center"><i class="fa-solid fa-location-dot"></i></span>
              <h3 class="font-display font-extrabold text-xl text-brand-navy group-hover:text-brand-green transition">Raleigh</h3>
            </div>
            <p class="text-sm text-slate-600 mb-3">North Hills, Five Points, Cameron Village — full residential and small commercial coverage.</p>
            <span class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green">View coverage <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
          </a>
          <a href="/locations/cary" class="group block bg-white rounded-2xl p-6 border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center"><i class="fa-solid fa-location-dot"></i></span>
              <h3 class="font-display font-extrabold text-xl text-brand-navy group-hover:text-brand-green transition">Cary</h3>
            </div>
            <p class="text-sm text-slate-600 mb-3">Preston, Lochmere, Amberly — newer construction and HOA-managed communities.</p>
            <span class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green">View coverage <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
          </a>
          <a href="#contact" class="group block bg-gradient-to-br from-brand-green to-brand-navy-dark text-white rounded-2xl p-6 border border-brand-green hover:shadow-card transition">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-white/15 text-white rounded-xl flex items-center justify-center"><i class="fa-solid fa-plus"></i></span>
              <h3 class="font-display font-extrabold text-xl">Outside these areas?</h3>
            </div>
            <p class="text-sm opacity-90 mb-3">We also serve Morrisville, Hillsborough, and parts of Wake & Orange counties. Just ask.</p>
            <span class="inline-flex items-center gap-1.5 text-xs font-bold">Request inspection <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
          </a>
        </div>
      </div>
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
            <a href="tel:+19196068686" class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
              <span class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center text-lg"><i class="fa-solid fa-phone-volume"></i></span>
              <div>
                <p class="text-xs text-slate-500 font-semibold uppercase tracking-wide">Call or text</p>
                <p class="font-bold text-brand-navy text-lg">(919) 606-8686</p>
              </div>
            </a>
            <a href="mailto:services@castleexterminators.co" class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
              <span class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center text-lg"><i class="fa-solid fa-envelope"></i></span>
              <div>
                <p class="text-xs text-slate-500 font-semibold uppercase tracking-wide">Email us</p>
                <p class="font-bold text-brand-navy text-lg break-all">services@castleexterminators.co</p>
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
                <p class="font-bold text-brand-navy text-lg">Mon–Fri • 8am – 5pm</p>
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
          <div id="inspection-form" class="bg-white rounded-3xl shadow-card border border-slate-100 p-6 sm:p-10 scroll-mt-24">
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
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-5 gap-8">
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
            <li><a href="/about" class="hover:text-white">About Us</a></li>
            <li><a href="#services" class="hover:text-white">Services</a></li>
            <li><a href="#reviews" class="hover:text-white">Reviews</a></li>
            <li><a href="#faq" class="hover:text-white">FAQ</a></li>
            <li><a href="#contact" class="hover:text-white">Free Inspection</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">Service Areas</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/locations/downtown-durham" class="hover:text-white">Downtown Durham</a></li>
            <li><a href="/locations/hope-valley" class="hover:text-white">Hope Valley</a></li>
            <li><a href="/locations/chapel-hill" class="hover:text-white">Chapel Hill</a></li>
            <li><a href="/locations/raleigh" class="hover:text-white">Raleigh</a></li>
            <li><a href="/locations/cary" class="hover:text-white">Cary</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">Get in Touch</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="tel:+19196068686" class="hover:text-white flex items-center gap-2"><i class="fa-solid fa-phone-volume text-brand-green-light"></i> (919) 606-8686</a></li>
            <li><a href="mailto:services@castleexterminators.co" class="hover:text-white flex items-center gap-2"><i class="fa-solid fa-envelope text-brand-green-light"></i> services@castleexterminators.co</a></li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-brand-green-light"></i> Durham, NC</li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-clock text-brand-green-light"></i> Mon–Fri 8am–5pm</li>
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
    // (Process line drawing is now scroll-linked — see scroll handler below)

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

    // ─── Scroll choreography (orchestrated in a single rAF for performance) ───
    // 1. Header gets a scrolled state (shadow + tint) past 8px
    // 2. Global scroll progress bar fills based on doc scroll percentage
    // 3. Hero photo parallax: translates upward as user scrolls (slower than content)
    // 4. Hero content sets --scroll-progress CSS var (0..1 over hero height) for
    //    the fade-out/lift CSS we wrote earlier
    // 5. Process connector line — scroll-linked draw + step activation
    // 6. Stats cards — active state while in viewport center
    const header = document.getElementById('site-header');
    const progressBar = document.getElementById('scroll-progress-bar');
    const heroSection = document.getElementById('hero');
    const heroPhoto = heroSection ? heroSection.querySelector('.hero-photo') : null;
    const heroContent = heroSection ? heroSection.querySelector('.hero-content') : null;
    const processSection = document.getElementById('process');
    const processLine = processSection ? processSection.querySelector('.process-line') : null;
    const processSteps = processSection ? Array.from(processSection.querySelectorAll('.process-step')) : [];
    const statsCards = Array.from(document.querySelectorAll('.stat-card'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let scrollTicking = false;
    const onScroll = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;

        // 1. Header state
        header.classList.toggle('nav-scrolled', y > 8);

        // 2. Scroll progress bar (0–100% of scrollable height)
        if (progressBar) {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? Math.min(100, (y / docHeight) * 100) : 0;
          progressBar.style.width = pct + '%';
        }

        // 3. & 4. Hero parallax + fade — only while hero is in viewport
        if (heroSection && heroContent && !reduceMotion) {
          const heroHeight = heroSection.offsetHeight;
          const progress = Math.max(0, Math.min(1, y / heroHeight));
          heroContent.style.setProperty('--scroll-progress', progress.toFixed(3));
          if (heroPhoto) {
            heroPhoto.style.transform = 'translate3d(0,' + (y * 0.4).toFixed(1) + 'px, 0)';
          }
        }

        // 5. Process section — scroll-linked connector line + step activation
        // Line starts drawing when the section top hits 70% of viewport,
        // completes when section bottom hits 30% of viewport.
        if (processSection && processLine && !reduceMotion) {
          const rect = processSection.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          const startTrigger = vh * 0.7;
          const endTrigger = vh * 0.3;
          const totalTravel = startTrigger + sectionHeight - endTrigger;
          const traveled = startTrigger - sectionTop;
          const lineProgress = Math.max(0, Math.min(1, traveled / totalTravel));
          processLine.style.setProperty('--process-progress', lineProgress.toFixed(3));

          // Activate each step when the line reaches its position (1/4, 2/4, 3/4, 4/4)
          processSteps.forEach((step, i) => {
            const threshold = (i + 0.5) / processSteps.length;
            step.classList.toggle('is-active', lineProgress >= threshold);
          });
        }

        // 6. Stats cards active state — when their center crosses viewport center
        statsCards.forEach((card) => {
          const r = card.getBoundingClientRect();
          const center = r.top + r.height / 2;
          const inActiveZone = center > vh * 0.2 && center < vh * 0.85;
          card.classList.toggle('is-active', inActiveZone);
        });

        scrollTicking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ── Wire up the blur-up reveal variant on its own observer ──
    const blurReveal = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          blurReveal.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal-blur').forEach(el => blurReveal.observe(el));

    // ── Eyebrow + heading-underline reveal observer ──
    // Reuses the .in class pattern so it pairs with the standard reveal system.
    const headerReveal = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          headerReveal.unobserve(e.target);
        }
      });
    }, { threshold: 0.4, rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.eyebrow, .heading-underline').forEach(el => headerReveal.observe(el));

    // ── Service card 3D tilt (cursor-driven) ──
    // Reads pointer position relative to card, sets --rx/--ry custom props.
    // Max tilt is intentionally subtle (~6deg) so it feels premium, not gimmicky.
    if (!reduceMotion) {
      const MAX_TILT = 6; // degrees
      document.querySelectorAll('.service-card').forEach((card) => {
        let rect = null;
        const onEnter = () => {
          rect = card.getBoundingClientRect();
          card.classList.add('is-tilting');
        };
        const onMove = (e) => {
          if (!rect) rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;   // 0..1
          const py = (e.clientY - rect.top) / rect.height;   // 0..1
          // Normalize to -1..1 then scale to MAX_TILT
          const rx = (px - 0.5) * 2 * MAX_TILT;
          const ry = (py - 0.5) * 2 * MAX_TILT;
          card.style.setProperty('--rx', rx.toFixed(2));
          card.style.setProperty('--ry', ry.toFixed(2));
        };
        const onLeave = () => {
          rect = null;
          card.classList.remove('is-tilting');
          card.style.setProperty('--rx', '0');
          card.style.setProperty('--ry', '0');
        };
        card.addEventListener('pointerenter', onEnter);
        card.addEventListener('pointermove', onMove);
        card.addEventListener('pointerleave', onLeave);
      });
    }

    // ─── Live "Open today" status pill ─────────────────────────────────
    // Castle Exterminators hours: Mon–Fri 8am–5pm Eastern Time.
    // We compute status in ET regardless of the visitor's timezone so the
    // pill always reflects the actual business state.
    (function initStatusPill() {
      const pill = document.getElementById('nav-status');
      if (!pill) return;
      const text = pill.querySelector('.nav-status-text');

      function update() {
        // Get current time in Eastern Time (handles DST automatically)
        const et = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
        const day = et.getDay();            // 0 = Sun, 1 = Mon, …, 6 = Sat
        const hour = et.getHours();         // 0–23
        const minute = et.getMinutes();
        const minutesNow = hour * 60 + minute;
        const openAt  = 8 * 60;             // 8:00 AM
        const closeAt = 17 * 60;            // 5:00 PM
        const isWeekday = day >= 1 && day <= 5;
        const isOpen = isWeekday && minutesNow >= openAt && minutesNow < closeAt;

        // Friendly weekday label for "next open" calculations
        const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        if (isOpen) {
          pill.classList.remove('is-closed');
          // Closing soon (< 60 min)? Make the messaging tighter.
          const minsLeft = closeAt - minutesNow;
          if (minsLeft <= 60) {
            text.textContent = 'Open · closes in ' + minsLeft + ' min';
          } else {
            text.textContent = 'Open today · 8–5';
          }
        } else {
          pill.classList.add('is-closed');
          // Find next opening
          if (isWeekday && minutesNow < openAt) {
            text.textContent = 'Opens today at 8 AM';
          } else {
            // After-hours weekday or weekend — find next weekday
            let nextDay = (day + 1) % 7;
            while (nextDay === 0 || nextDay === 6) nextDay = (nextDay + 1) % 7;
            const dayLabel = (nextDay === (day + 1) % 7) ? 'tomorrow' : dayNames[nextDay];
            text.textContent = 'Opens ' + dayLabel + ' · 8 AM';
          }
        }
      }
      update();
      // Refresh every minute so "closes in N min" stays accurate
      setInterval(update, 60 * 1000);
    })();

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

    /* -----------------------------------------------------------------
       GorillaDesk Contact Form — fast-open implementation

       Original GorillaDesk loader waited for window.load (all images,
       fonts, CSS) before even *fetching* contact.js — so on mobile this
       commonly produced a 4-8s wait before the form was ready to open.

       This implementation:
         1. Triggers the GorillaDesk fetch as soon as the DOM is ready
            (or via requestIdleCallback if available, to not block paint).
         2. Pre-warms even earlier on user intent — hover / touchstart /
            focus / scroll-near-form — so the form is ready BEFORE click.
         3. Polls the widget readiness every 50ms instead of 400ms.
         4. Shows a responsive spinner inside the original button so the
            user gets immediate visual feedback.
       ----------------------------------------------------------------- */

    var GORILLA_LOADER_SRC = 'https://portal-embed-v3.gorilladesk.com/js/contact/contact.js';
    var gorillaLoadStarted = false;

    function loadGorillaDeskScript() {
      if (gorillaLoadStarted) return;
      gorillaLoadStarted = true;
      window._gorilla = window._gorilla || {};
      window._gorilla.account_id = '0d73a25092e5c1c9769a9f3255caa65a';
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.defer = true;
      s.src = GORILLA_LOADER_SRC;
      (document.head || document.documentElement).appendChild(s);
    }

    // Start loading as soon as possible — DOMContentLoaded fires WAY before window.load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(loadGorillaDeskScript, { timeout: 1500 });
        } else {
          setTimeout(loadGorillaDeskScript, 1);
        }
      });
    } else {
      // DOM already loaded — kick it off immediately
      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadGorillaDeskScript, { timeout: 1500 });
      } else {
        setTimeout(loadGorillaDeskScript, 1);
      }
    }

    // Pre-warm on user intent: hover / touch / focus on any Schedule/Inspection
    // CTA. If we're not loaded yet, kick off the load immediately so the script
    // is more likely to be ready by the time the user actually clicks.
    function prewarmGorillaDesk() { loadGorillaDeskScript(); }
    function attachPrewarmListeners() {
      var ctaSelector = 'a[href$="#contact"], a[href$="/#contact"], #open-gd-form';
      ['pointerenter', 'touchstart', 'focusin'].forEach(function(evt) {
        document.addEventListener(evt, function(e) {
          if (e.target && e.target.closest && e.target.closest(ctaSelector)) {
            prewarmGorillaDesk();
          }
        }, { passive: true, capture: true });
      });
      // Also pre-warm when the form card enters the viewport
      var formCard = document.getElementById('inspection-form');
      if (formCard && 'IntersectionObserver' in window) {
        var io = new IntersectionObserver(function(entries) {
          if (entries.some(function(en) { return en.isIntersecting; })) {
            prewarmGorillaDesk();
            io.disconnect();
          }
        }, { rootMargin: '400px 0px' });
        io.observe(formCard);
      }
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', attachPrewarmListeners);
    } else {
      attachPrewarmListeners();
    }

    // Open the GorillaDesk popup. Fast polling (50ms) + immediate retry =
    // user perceives near-instant open when script is already loaded.
    function openGorillaDeskForm() {
      var widget = document.getElementById('gorilladesk-portal-widget-contact');
      var btn = document.getElementById('open-gd-form');
      // Ensure the load is kicked off in case user clicked before pre-warm.
      loadGorillaDeskScript();
      if (!widget) {
        if (btn && !btn.dataset.loading) {
          btn.dataset.loading = '1';
          btn.disabled = true;
          btn.innerHTML = '<span class="ring-loader"></span> Loading form…';
        }
        setTimeout(openGorillaDeskForm, 50); // fast poll
        return;
      }
      if (btn) {
        btn.disabled = false;
        delete btn.dataset.loading;
        btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Open Inspection Form <i class="fa-solid fa-arrow-right text-xs"></i>';
      }
      widget.style.setProperty('display', 'block', 'important');
      try {
        widget.contentWindow && widget.contentWindow.postMessage({ type: 'send-open-contact' }, '*');
      } catch (e) { /* no-op */ }
    }
    var openBtn = document.getElementById('open-gd-form');
    if (openBtn) openBtn.addEventListener('click', openGorillaDeskForm);

    /* -----------------------------------------------------------------
       Smart Contact CTA routing
       - On mobile (< 1024px, the lg: breakpoint), every CTA pointing at
         #contact instead lands the user directly on the inspection form
         card (#inspection-form), because the left intro column appears
         ABOVE the form on small screens and would otherwise hide it.
       - On desktop (>= 1024px) the two columns are side-by-side, so we
         keep the default behavior and land at the top of #contact, which
         shows both the intro and the form together.
       ----------------------------------------------------------------- */
    document.addEventListener('click', function(e) {
      const a = e.target && e.target.closest && e.target.closest('a[href$="#contact"], a[href$="/#contact"]');
      if (!a) return;
      // Honor modified clicks (open in new tab, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const isMobile = window.matchMedia('(max-width: 1023.98px)').matches;
      const targetId = isMobile ? 'inspection-form' : 'contact';
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update the URL so back-button + share still work
      try { history.pushState(null, '', '#' + targetId); } catch (err) { /* no-op */ }
    });

    /* If user lands on the page with #contact in the URL on mobile, jump
       to the form card instead so the first thing they see is the form. */
    (function adjustInitialHash() {
      if (window.location.hash !== '#contact') return;
      if (!window.matchMedia('(max-width: 1023.98px)').matches) return;
      // Wait for layout to settle then scroll
      setTimeout(function() {
        const form = document.getElementById('inspection-form');
        if (form) form.scrollIntoView({ behavior: 'auto', block: 'start' });
      }, 60);
    })();
  </script>

  <!--
    NOTE: The GorillaDesk form loader is intentionally NOT here anymore.
    It's now loaded much earlier (on DOMContentLoaded + requestIdleCallback,
    plus pre-warmed on user intent) from the inline script above. This
    makes the "Open Inspection Form" button feel near-instant instead of
    waiting for window.load — typically 3-6 seconds faster on mobile.
  -->
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
  <link rel="canonical" href="https://www.castleexterminators.co/services/${s.slug}" />
  <link rel="icon" type="image/x-icon" href="/static/favicon.ico" /><link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" /><link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" /><link rel="manifest" href="/static/site.webmanifest" />
  <meta property="og:site_name" content="Castle Exterminators" />
  <meta property="og:title" content="${s.name} | Castle Exterminators Durham NC" />
  <meta property="og:description" content="${s.tagline}" />
  <meta property="og:url" content="https://www.castleexterminators.co/services/${s.slug}" />
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
    "url": "https://www.castleexterminators.co/services/${s.slug}",
    "image": "${s.hero}",
    "provider": {
      "@type": "PestControlService",
      "@id": "https://www.castleexterminators.co/#business",
      "name": "Castle Exterminators",
      "telephone": "+1-919-606-8686",
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
      "url": "https://www.castleexterminators.co/services/${s.slug}",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": "https://www.castleexterminators.co/#business" }
    }
  }
  </script>

  <!-- Breadcrumb schema — gives Google a clean nav trail for search results -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.castleexterminators.co/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.castleexterminators.co/#services" },
      { "@type": "ListItem", "position": 3, "name": "${s.name}", "item": "https://www.castleexterminators.co/services/${s.slug}" }
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
  <!-- Tailwind (compiled at build time → fast on mobile) -->
  <link rel="stylesheet" href="/static/tailwind.css" />
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
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
        <li><a href="/pests" class="nav-link">Pest Library</a></li>
        <li><a href="/#why-us" class="nav-link">Why Us</a></li>
        <li><a href="/#process" class="nav-link">Process</a></li>
        <li><a href="/#reviews" class="nav-link">Reviews</a></li>
        <li><a href="/#faq" class="nav-link">FAQ</a></li>
      </ul>
      <div class="flex items-center gap-3">
        <a href="tel:+19196068686" class="nav-phone hidden sm:inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
          <span class="nav-phone-icon text-brand-green"><i class="fa-solid fa-phone-volume"></i></span>
          <span>(919) 606-8686</span>
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
        <li><a href="/pests" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Pest Library</a></li>
        <li><a href="/#why-us" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Why Us</a></li>
        <li><a href="/#process" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Process</a></li>
        <li><a href="/#reviews" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Reviews</a></li>
        <li><a href="/#faq" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">FAQ</a></li>
        <li class="pt-2">
          <a href="tel:+19196068686" class="flex items-center gap-2 px-2 py-2.5 text-brand-green font-bold">
            <i class="fa-solid fa-phone-volume"></i> (919) 606-8686
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
          <a href="tel:+19196068686" class="block text-center bg-white/15 hover:bg-white/25 text-white font-bold py-3 px-4 rounded-xl transition backdrop-blur border border-white/25">
            <i class="fa-solid fa-phone-volume mr-2"></i> (919) 606-8686
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

        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h4 class="font-bold mb-4">${s.name} near you</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/locations/downtown-durham" class="flex items-center gap-2 text-slate-600 hover:text-brand-green transition"><i class="fa-solid fa-location-dot text-brand-green w-4"></i> Downtown Durham</a></li>
            <li><a href="/locations/hope-valley" class="flex items-center gap-2 text-slate-600 hover:text-brand-green transition"><i class="fa-solid fa-location-dot text-brand-green w-4"></i> Hope Valley</a></li>
            <li><a href="/locations/chapel-hill" class="flex items-center gap-2 text-slate-600 hover:text-brand-green transition"><i class="fa-solid fa-location-dot text-brand-green w-4"></i> Chapel Hill</a></li>
            <li><a href="/locations/raleigh" class="flex items-center gap-2 text-slate-600 hover:text-brand-green transition"><i class="fa-solid fa-location-dot text-brand-green w-4"></i> Raleigh</a></li>
            <li><a href="/locations/cary" class="flex items-center gap-2 text-slate-600 hover:text-brand-green transition"><i class="fa-solid fa-location-dot text-brand-green w-4"></i> Cary</a></li>
          </ul>
          <a href="/#service-areas" class="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-green hover:text-brand-green-dark">All service areas <i class="fa-solid fa-arrow-right text-[10px]"></i></a>
        </div>
      </aside>

    </div>
  </main>

  <!-- FOOTER -->
  <footer class="bg-brand-navy-dark text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-5 gap-8">
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
        <h4 class="text-white font-bold mb-4">Service Areas</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/locations/downtown-durham" class="hover:text-white">Downtown Durham</a></li>
          <li><a href="/locations/hope-valley" class="hover:text-white">Hope Valley</a></li>
          <li><a href="/locations/chapel-hill" class="hover:text-white">Chapel Hill</a></li>
          <li><a href="/locations/raleigh" class="hover:text-white">Raleigh</a></li>
          <li><a href="/locations/cary" class="hover:text-white">Cary</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Contact</h4>
        <ul class="space-y-2 text-sm">
          <li><i class="fa-solid fa-phone-volume mr-2"></i> <a href="tel:+19196068686" class="hover:text-white">(919) 606-8686</a></li>
          <li><i class="fa-solid fa-envelope mr-2"></i> <a href="mailto:services@castleexterminators.co" class="hover:text-white">services@castleexterminators.co</a></li>
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
</body>
</html>`

services.forEach(s => {
  app.get(`/services/${s.slug}`, (c) => c.html(renderServicePage(s, services)))
})

// ---------------------------------------------------------------------------
// SLUG REDIRECTS — friendly aliases people/search engines might guess.
// 301 (permanent) so Google consolidates link equity onto the canonical URL.
// ---------------------------------------------------------------------------
const serviceSlugAliases: Record<string, string> = {
  'roach-control':           'roaches',
  'cockroach-control':       'roaches',
  'cockroaches':             'roaches',
  'termite-control':         'termites',
  'termite-inspection':      'termites',
  'rodent-control':          'rodents',
  'mice-control':            'rodents',
  'rat-control':             'rodents',
  'ant-control':             'ants',
  'mosquito-control':        'mosquitoes',
  'pest-control':            'general-pest-control',
  'crawlspace-encapsulation':'crawl-space-encapsulation',
}
Object.entries(serviceSlugAliases).forEach(([alias, canonical]) => {
  app.get(`/services/${alias}`, (c) => c.redirect(`/services/${canonical}`, 301))
})

// ============================================================================
// ABOUT PAGE
// ============================================================================
const renderAboutPage = (allServices: ServiceDetail[]) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Castle Exterminators | Family-Owned Pest Control in Durham, NC</title>
  <meta name="description" content="Meet Castle Exterminators — Durham's family-owned, locally-operated pest control company. Licensed in North Carolina, eco-friendly methods, 5.0 stars on Google & Yelp. Serving Durham since 2017." />
  <meta name="keywords" content="about Castle Exterminators, family-owned pest control Durham, licensed exterminator NC, local pest control Durham NC, eco-friendly pest control" />
  <meta name="theme-color" content="#1F6F4A" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="geo.region" content="US-NC" />
  <meta name="geo.placename" content="Durham, North Carolina" />
  <link rel="canonical" href="https://www.castleexterminators.co/about" />
  <link rel="icon" type="image/x-icon" href="/static/favicon.ico" /><link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" /><link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" /><link rel="manifest" href="/static/site.webmanifest" />
  <meta property="og:site_name" content="Castle Exterminators" />
  <meta property="og:title" content="About Castle Exterminators | Family-Owned Pest Control in Durham, NC" />
  <meta property="og:description" content="Durham's family-owned, locally-operated pest control company. Licensed in NC, eco-friendly methods, 5.0 stars on Google & Yelp." />
  <meta property="og:url" content="https://www.castleexterminators.co/about" />
  <meta property="og:image" content="https://www.castleexterminators.co/static/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": "https://www.castleexterminators.co/about",
    "name": "About Castle Exterminators",
    "description": "Family-owned, locally-operated pest control company serving Durham, NC since 2017.",
    "mainEntity": {
      "@type": "PestControlService",
      "@id": "https://www.castleexterminators.co/#business",
      "name": "Castle Exterminators",
      "foundingDate": "2017",
      "founder": { "@type": "Person", "name": "The Castle Family" },
      "telephone": "+1-919-606-8686",
      "email": "services@castleexterminators.co",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Durham",
        "addressRegion": "NC",
        "addressCountry": "US"
      },
      "areaServed": { "@type": "City", "name": "Durham", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "3", "bestRating": "5", "worstRating": "1" }
    }
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.castleexterminators.co/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.castleexterminators.co/about" }
    ]
  }
  </script>

  <link rel="stylesheet" href="/static/tailwind.css" />
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    html { scroll-behavior: smooth; }
    :root { --ink: 30, 42, 36; --paper: 251, 248, 241; --emphasis-high: 0.87; --emphasis-medium: 0.60; --emphasis-disabled: 0.38; }
    body { font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif; color: rgba(var(--ink), var(--emphasis-high)); background: #FBF8F1; }
    h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.015em; font-variation-settings: "opsz" 144, "SOFT" 50; }
    .hero-grain h1, .hero-grain h2, footer h1, footer h2, footer h3, footer h4 { color: rgba(var(--paper), var(--emphasis-high)) !important; }
    .hero-grain .text-white, footer .text-white { color: rgba(var(--paper), var(--emphasis-high)) !important; }
    footer { color: rgba(var(--paper), var(--emphasis-medium)) !important; }
    .font-display { font-family: 'Fraunces', 'Plus Jakarta Sans', Georgia, serif; font-variation-settings: "opsz" 144, "SOFT" 50; }
    .serif-italic { font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 500; }
    .hero-overlay { background: linear-gradient(135deg, rgba(31,111,74,.92) 0%, rgba(14,22,18,.78) 55%, rgba(14,22,18,.45) 100%); }
    .hero-grain::after { content: ''; position: absolute; inset: 0; pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      opacity: .35; mix-blend-mode: overlay; }

    /* Nav (matches site) */
    #site-header { transition: background-color .3s ease, box-shadow .3s ease, backdrop-filter .3s ease; }
    #site-header.nav-scrolled { background-color: rgba(251,248,241,.96); backdrop-filter: saturate(180%) blur(12px); -webkit-backdrop-filter: saturate(180%) blur(12px); box-shadow: 0 4px 20px -8px rgba(30,42,36,.18); }
    .nav-link { position: relative; padding: .35rem 0; transition: color .25s ease; }
    .nav-link::after { content: ''; position: absolute; left: 0; right: 0; bottom: -4px; height: 2px; border-radius: 2px; background: #1F6F4A; transform: scaleX(0); transform-origin: center; transition: transform .35s cubic-bezier(.65,.05,.36,1); }
    .nav-link:hover, .nav-link:focus-visible, .nav-link.active { color: #1F6F4A; }
    .nav-link:hover::after, .nav-link:focus-visible::after, .nav-link.active::after { transform: scaleX(1); }
    .nav-burger { position: relative; width: 26px; height: 20px; display: none; flex-direction: column; justify-content: space-between; background: transparent; border: 0; padding: 0; cursor: pointer; }
    @media (max-width: 767px) { .nav-burger { display: flex; } }
    .nav-burger span { display: block; width: 100%; height: 2.5px; background: #1E2A24; border-radius: 4px; transition: transform .35s cubic-bezier(.65,.05,.36,1), opacity .25s ease, background-color .25s ease; }
    .nav-burger.open span:nth-child(1) { transform: translateY(8.75px) rotate(45deg); }
    .nav-burger.open span:nth-child(2) { opacity: 0; }
    .nav-burger.open span:nth-child(3) { transform: translateY(-8.75px) rotate(-45deg); }
    #nav-mobile { max-height: 0; opacity: 0; overflow: hidden; transition: max-height .4s cubic-bezier(.22,1,.36,1), opacity .3s ease; }
    #nav-mobile.open { max-height: 720px; opacity: 1; }

    /* About-page–specific: timeline pill */
    .timeline-item { position: relative; padding-left: 2.5rem; }
    .timeline-item::before { content: ''; position: absolute; left: .6rem; top: .55rem; bottom: -1.5rem; width: 2px; background: linear-gradient(to bottom, #1F6F4A, rgba(31,111,74,.15)); }
    .timeline-item:last-child::before { display: none; }
    .timeline-dot { position: absolute; left: 0; top: 0; width: 1.4rem; height: 1.4rem; border-radius: 9999px; background: #1F6F4A; color: #fff; display: grid; place-items: center; font-size: .7rem; box-shadow: 0 0 0 4px rgba(31,111,74,.12); }

    /* Value cards */
    .value-card { transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease; }
    .value-card:hover { transform: translateY(-4px); box-shadow: 0 14px 32px -16px rgba(30,42,36,.22); }

    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; } }
  </style>
</head>
<body class="bg-brand-bone antialiased text-brand-navy">

  <header id="site-header" class="fixed top-0 inset-x-0 z-50 bg-brand-bone/90 backdrop-blur border-b border-brand-green/10">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3" aria-label="Castle Exterminators home">
        <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-10 sm:h-11 w-auto" />
      </a>
      <ul class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <li><a href="/#services" class="nav-link">Services</a></li>
        <li><a href="/pests" class="nav-link">Pest Library</a></li>
        <li><a href="/about" class="nav-link active">About</a></li>
        <li><a href="/#why-us" class="nav-link">Why Us</a></li>
        <li><a href="/#reviews" class="nav-link">Reviews</a></li>
        <li><a href="/#faq" class="nav-link">FAQ</a></li>
      </ul>
      <div class="flex items-center gap-3">
        <a href="tel:+19196068686" class="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
          <span class="text-brand-green"><i class="fa-solid fa-phone-volume"></i></span>
          <span>(919) 606-8686</span>
        </a>
        <a href="/#contact" class="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold px-4 py-2 rounded-lg shadow-card transition-transform duration-300 hover:-translate-y-0.5">
          <span>Free Inspection</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </a>
        <button type="button" id="nav-burger" class="nav-burger md:hidden ml-1" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div id="nav-mobile" class="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur">
      <ul class="px-4 sm:px-6 py-3 space-y-1 text-sm font-semibold text-slate-700">
        <li><a href="/#services" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Services</a></li>
        <li><a href="/pests" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Pest Library</a></li>
        <li><a href="/about" class="block px-2 py-2.5 rounded-lg bg-brand-green/10 text-brand-green transition">About</a></li>
        <li><a href="/#why-us" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Why Us</a></li>
        <li><a href="/#reviews" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Reviews</a></li>
        <li><a href="/#faq" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">FAQ</a></li>
        <li class="pt-2"><a href="tel:+19196068686" class="flex items-center gap-2 px-2 py-2.5 text-brand-green font-bold"><i class="fa-solid fa-phone-volume"></i> (919) 606-8686</a></li>
      </ul>
    </div>
  </header>

  <script>
    (function(){
      var header = document.getElementById('site-header');
      var onScroll = function(){ header.classList.toggle('nav-scrolled', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
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
    })();
  </script>

  <!-- HERO -->
  <section class="relative pt-16">
    <div class="hero-grain relative h-[44vh] min-h-[360px] max-h-[560px] overflow-hidden bg-brand-navy-dark">
      <div class="absolute inset-0 hero-overlay"></div>
      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12 text-white">
        <nav class="text-xs sm:text-sm font-semibold mb-4 opacity-90">
          <a href="/" class="hover:text-brand-green-light transition">Home</a>
          <i class="fa-solid fa-chevron-right text-[10px] mx-2 opacity-60"></i>
          <span class="text-brand-leaf">About</span>
        </nav>
        <div class="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
          <i class="fa-solid fa-house-shield"></i> Family-owned · Durham, NC
        </div>
        <h1 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-tight">A neighbor first. <span class="serif-italic text-brand-leaf">An exterminator second.</span></h1>
        <p class="mt-3 text-lg sm:text-xl max-w-2xl opacity-95">We're Castle Exterminators — Durham's family-owned, locally-operated pest control crew. We treat your home the way we'd treat our own.</p>
      </div>
    </div>
  </section>

  <!-- BODY -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

    <!-- Story -->
    <section class="grid lg:grid-cols-12 gap-12 mb-20 lg:mb-28">
      <div class="lg:col-span-7">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-3">Our Story</p>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl mb-6 leading-tight">Built in Durham. <br/>For Durham.</h2>
        <div class="space-y-5 text-lg leading-relaxed text-slate-700">
          <p>Castle Exterminators started in 2017 with a simple frustration: too many pest control companies treat homeowners like a ticket number. We wanted to build the kind of company we'd want to call ourselves &mdash; one that picks up the phone, shows up when promised, and explains what's happening in plain English.</p>
          <p>Eight years later, we're still family-owned, still based right here in Durham, and still answering our own phone. We've earned <strong>5.0 stars across Google and Yelp</strong> not because of slick marketing, but because every customer is a neighbor &mdash; and neighbors talk.</p>
          <p>If a treatment doesn't work, we come back at no charge. If you have a question at 7pm, you'll usually still get a real person. That's just how we like to do it.</p>
        </div>
      </div>
      <aside class="lg:col-span-5">
        <div class="bg-white rounded-2xl border border-slate-100 shadow-card p-7">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-4">By the numbers</p>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <div class="font-display font-extrabold text-4xl text-brand-navy">8<span class="text-brand-orange">+</span></div>
              <div class="text-sm text-slate-500 mt-1">Years in Durham</div>
            </div>
            <div>
              <div class="font-display font-extrabold text-4xl text-brand-navy">5.0<i class="fa-solid fa-star text-brand-orange text-lg ml-1"></i></div>
              <div class="text-sm text-slate-500 mt-1">Google &amp; Yelp</div>
            </div>
            <div>
              <div class="font-display font-extrabold text-4xl text-brand-navy">100<span class="text-brand-orange">%</span></div>
              <div class="text-sm text-slate-500 mt-1">Family-owned</div>
            </div>
            <div>
              <div class="font-display font-extrabold text-4xl text-brand-navy">NC</div>
              <div class="text-sm text-slate-500 mt-1">Licensed &amp; Insured</div>
            </div>
          </div>
          <div class="mt-6 pt-6 border-t border-slate-100">
            <a href="tel:+19196068686" class="flex items-center gap-3 text-brand-green hover:text-brand-green-dark transition">
              <span class="w-10 h-10 grid place-items-center rounded-full bg-brand-green/10"><i class="fa-solid fa-phone-volume"></i></span>
              <span>
                <span class="block text-xs uppercase tracking-wider text-slate-500 font-bold">Talk to a person</span>
                <span class="block font-bold">(919) 606-8686</span>
              </span>
            </a>
          </div>
        </div>
      </aside>
    </section>

    <!-- Values -->
    <section class="mb-20 lg:mb-28">
      <div class="max-w-3xl mb-12">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-3">What we believe</p>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl leading-tight">Four things we won't compromise on.</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div class="value-card bg-white rounded-2xl border border-slate-100 p-6 shadow-card">
          <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4"><i class="fa-solid fa-leaf text-lg"></i></div>
          <h3 class="font-display font-extrabold text-lg mb-2">Family-safe first</h3>
          <p class="text-sm text-slate-600 leading-relaxed">We use the lowest-impact methods that get the job done. Kids and pets back home the same day &mdash; not 48 hours later.</p>
        </div>
        <div class="value-card bg-white rounded-2xl border border-slate-100 p-6 shadow-card">
          <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4"><i class="fa-solid fa-handshake text-lg"></i></div>
          <h3 class="font-display font-extrabold text-lg mb-2">No surprise pricing</h3>
          <p class="text-sm text-slate-600 leading-relaxed">You'll know the price before we lift a finger. No upsells, no "discovered an extra issue" routine.</p>
        </div>
        <div class="value-card bg-white rounded-2xl border border-slate-100 p-6 shadow-card">
          <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4"><i class="fa-solid fa-arrows-rotate text-lg"></i></div>
          <h3 class="font-display font-extrabold text-lg mb-2">Free re-treatments</h3>
          <p class="text-sm text-slate-600 leading-relaxed">If the pests come back between visits, so do we &mdash; at no charge. Every plan is backed by our service guarantee.</p>
        </div>
        <div class="value-card bg-white rounded-2xl border border-slate-100 p-6 shadow-card">
          <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4"><i class="fa-solid fa-location-dot text-lg"></i></div>
          <h3 class="font-display font-extrabold text-lg mb-2">Hyper-local</h3>
          <p class="text-sm text-slate-600 leading-relaxed">We know Durham's bug seasons, soil types, and crawl-space layouts. National chains don't.</p>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="mb-20 lg:mb-28 grid lg:grid-cols-12 gap-12">
      <div class="lg:col-span-4">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-3">Milestones</p>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl leading-tight mb-4">Eight years, one zip code at a time.</h2>
        <p class="text-slate-600">From a single truck to Durham's most-trusted family-run pest control shop.</p>
      </div>
      <div class="lg:col-span-8 space-y-8">
        <div class="timeline-item">
          <span class="timeline-dot"><i class="fa-solid fa-seedling text-[10px]"></i></span>
          <div class="text-xs font-bold uppercase tracking-wider text-brand-green mb-1">2017</div>
          <h3 class="font-display font-extrabold text-xl mb-1">Castle Exterminators opens</h3>
          <p class="text-slate-600 leading-relaxed">One truck, one phone, and a promise to treat every customer like a neighbor.</p>
        </div>
        <div class="timeline-item">
          <span class="timeline-dot"><i class="fa-solid fa-house text-[10px]"></i></span>
          <div class="text-xs font-bold uppercase tracking-wider text-brand-green mb-1">2019</div>
          <h3 class="font-display font-extrabold text-xl mb-1">First 500 Durham homes protected</h3>
          <p class="text-slate-600 leading-relaxed">Word-of-mouth from neighbors becomes our #1 source of new customers &mdash; and still is today.</p>
        </div>
        <div class="timeline-item">
          <span class="timeline-dot"><i class="fa-solid fa-star text-[10px]"></i></span>
          <div class="text-xs font-bold uppercase tracking-wider text-brand-green mb-1">2022</div>
          <h3 class="font-display font-extrabold text-xl mb-1">Perfect 5.0 across Google &amp; Yelp</h3>
          <p class="text-slate-600 leading-relaxed">We crossed dozens of five-star reviews without buying a single one. Just neighbors talking.</p>
        </div>
        <div class="timeline-item">
          <span class="timeline-dot"><i class="fa-solid fa-shield-halved text-[10px]"></i></span>
          <div class="text-xs font-bold uppercase tracking-wider text-brand-green mb-1">Today</div>
          <h3 class="font-display font-extrabold text-xl mb-1">Seven specialized services, one local crew</h3>
          <p class="text-slate-600 leading-relaxed">From termites to mosquitoes to crawl-space encapsulation &mdash; still family-owned, still picking up the phone ourselves.</p>
        </div>
      </div>
    </section>

    <!-- Service areas mini -->
    <section class="mb-20 lg:mb-28">
      <div class="bg-brand-cream rounded-3xl p-8 sm:p-12 border border-brand-green/10">
        <div class="grid lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-5">
            <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-3">Where we work</p>
            <h2 class="font-display font-extrabold text-3xl sm:text-4xl leading-tight mb-4">Durham, Chapel Hill, Raleigh &amp; the Triangle.</h2>
            <p class="text-slate-600 mb-5">We service every corner of Durham, NC &mdash; plus Chapel Hill, Raleigh, and Cary &mdash; from historic downtown blocks to the newer subdivisions on the edge of town.</p>
            <a href="#contact" class="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-bold transition">
              Schedule a free inspection <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
          <div class="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            <a href="/locations/downtown-durham" class="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-slate-100 hover:border-brand-green/40 hover:shadow-sm transition"><i class="fa-solid fa-location-dot text-brand-green text-sm"></i><span class="font-semibold text-sm text-brand-navy">Downtown Durham</span></a>
            <a href="/locations/hope-valley" class="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-slate-100 hover:border-brand-green/40 hover:shadow-sm transition"><i class="fa-solid fa-location-dot text-brand-green text-sm"></i><span class="font-semibold text-sm text-brand-navy">Hope Valley</span></a>
            <a href="/locations/chapel-hill" class="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-slate-100 hover:border-brand-green/40 hover:shadow-sm transition"><i class="fa-solid fa-location-dot text-brand-green text-sm"></i><span class="font-semibold text-sm text-brand-navy">Chapel Hill</span></a>
            <a href="/locations/raleigh" class="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-slate-100 hover:border-brand-green/40 hover:shadow-sm transition"><i class="fa-solid fa-location-dot text-brand-green text-sm"></i><span class="font-semibold text-sm text-brand-navy">Raleigh</span></a>
            <a href="/locations/cary" class="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-slate-100 hover:border-brand-green/40 hover:shadow-sm transition"><i class="fa-solid fa-location-dot text-brand-green text-sm"></i><span class="font-semibold text-sm text-brand-navy">Cary</span></a>
            <div class="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-slate-100"><i class="fa-solid fa-plus text-brand-green/60 text-sm"></i><span class="font-semibold text-sm text-slate-500">Morrisville &amp; Hillsborough</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service list -->
    <section class="mb-20 lg:mb-28">
      <div class="max-w-3xl mb-10">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-3">What we do</p>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl leading-tight">Specialized for every Durham pest.</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${allServices.map(s => `<a href="/services/${s.slug}" class="value-card bg-white rounded-2xl border border-slate-100 p-5 shadow-card flex items-start gap-3">
          <span class="w-11 h-11 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid ${s.icon} text-lg"></i></span>
          <span class="flex-1 min-w-0">
            <span class="block font-display font-extrabold text-base text-brand-navy">${s.name}</span>
            <span class="block text-xs text-slate-500 leading-snug mt-1">${s.tagline}</span>
          </span>
        </a>`).join('')}
      </div>
    </section>

    <!-- CTA -->
    <section>
      <div class="bg-gradient-to-br from-brand-green to-brand-navy-dark rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden">
        <div class="hero-grain absolute inset-0"></div>
        <div class="relative">
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 max-w-2xl mx-auto leading-tight">Ready to meet your new neighbors?</h2>
          <p class="text-lg opacity-95 max-w-xl mx-auto mb-8">Free, no-pressure inspection. We'll show up, look around, and tell you exactly what's going on &mdash; whether you hire us or not.</p>
          <div class="flex flex-wrap gap-3 justify-center">
            <a href="/#contact" class="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3.5 rounded-xl shadow-card transition-transform duration-300 hover:-translate-y-0.5"><i class="fa-solid fa-calendar-check"></i> Request Free Inspection</a>
            <a href="tel:+19196068686" class="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-xl backdrop-blur border border-white/25 transition"><i class="fa-solid fa-phone-volume"></i> (919) 606-8686</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <footer class="bg-brand-navy-dark text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-5 gap-8">
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
        <h4 class="text-white font-bold mb-4">Service Areas</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/locations/downtown-durham" class="hover:text-white">Downtown Durham</a></li>
          <li><a href="/locations/hope-valley" class="hover:text-white">Hope Valley</a></li>
          <li><a href="/locations/chapel-hill" class="hover:text-white">Chapel Hill</a></li>
          <li><a href="/locations/raleigh" class="hover:text-white">Raleigh</a></li>
          <li><a href="/locations/cary" class="hover:text-white">Cary</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Company</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/about" class="hover:text-white">About</a></li>
          <li><a href="/#reviews" class="hover:text-white">Reviews</a></li>
          <li><a href="/#contact" class="hover:text-white">Contact</a></li>
          <li><i class="fa-solid fa-phone-volume mr-2"></i> <a href="tel:+19196068686" class="hover:text-white">(919) 606-8686</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
        <span>&copy; ${new Date().getFullYear()} Castle Exterminators. All rights reserved.</span>
        <span>Licensed &amp; Insured in North Carolina</span>
      </div>
    </div>
  </footer>
</body>
</html>`

app.get('/about', (c) => c.html(renderAboutPage(services)))

// ============================================================================
// LOCATION PAGES — local-SEO landing pages targeting specific Durham
// neighborhoods. Designed as a template so we can add more neighborhoods later
// (e.g. /locations/trinity-park, /locations/southpoint) with just a data entry.
// ============================================================================
type LocationDetail = {
  slug: string
  name: string                    // "Downtown Durham"
  shortName: string               // "Downtown"
  zipCodes: string[]              // ["27701", "27707"]
  /**
   * The city this location belongs to (for schema.org).
   * - For Durham neighborhoods: 'Durham'
   * - For separate cities: 'Chapel Hill', 'Raleigh', 'Cary', etc.
   */
  city: string
  /** Whether this is a neighborhood within a larger city, or a city itself. */
  type: 'neighborhood' | 'city'
  intro: string                   // Hero paragraph
  about: string                   // Long-form description of the neighborhood
  pests: { name: string; reason: string }[]  // Pests common to this area
  nearby: string[]                // Nearby landmarks/streets we reference
  testimonial?: { quote: string; author: string; street?: string }
}

const locations: LocationDetail[] = [
  {
    slug: 'downtown-durham',
    name: 'Downtown Durham',
    shortName: 'Downtown',
    zipCodes: ['27701', '27707'],
    city: 'Durham',
    type: 'neighborhood',
    intro: "Durham's downtown core packs century-old warehouses, modern lofts, restored bungalows, and busy restaurants into a few square miles — and every one of them comes with its own pest control challenges. Castle Exterminators has been protecting Downtown Durham homes and businesses since 2017.",
    about: "From the American Tobacco Campus to the Brightleaf district, Durham's downtown buildings sit on some of the oldest brick foundations in the city. That charm comes with a downside: aging brick, shared walls, and warm subterranean utility corridors are an invitation for cockroaches, mice, ants, and termites to set up shop. Our crew knows these buildings — we've worked in the lofts above Mateo, the brownstones near Five Points, and the historic homes off Mangum Street. We tailor every treatment to the building, not the bug.",
    pests: [
      { name: 'German cockroaches', reason: 'Restaurants, shared walls, and aging plumbing make downtown a roach hot-spot — especially in older buildings with brick foundations.' },
      { name: 'Mice & rats', reason: 'Construction projects, dumpsters behind restaurants, and proximity to railroad corridors keep rodent pressure high year-round.' },
      { name: 'Argentine ants', reason: 'Brick mortar and stone foundations give ants an endless network of entry points into ground-floor units.' },
      { name: 'Subterranean termites', reason: "Durham's red-clay soil and the age of many downtown structures mean termite damage often goes unnoticed for years." },
    ],
    nearby: ['American Tobacco Campus', 'Brightleaf Square', 'Five Points', 'Mangum Street', 'Trinity Park', 'Old West Durham', 'Durham Central Park'],
    testimonial: {
      quote: "We've used three different exterminators in our downtown loft over the years. Castle is the only one that actually solved the roach problem in our building's old brick walls. Friendly, on-time, no upsells.",
      author: 'Michael P.',
      street: 'W. Main Street loft, Downtown Durham',
    },
  },
  {
    slug: 'chapel-hill',
    name: 'Chapel Hill',
    shortName: 'Chapel Hill',
    zipCodes: ['27514', '27516', '27517'],
    city: 'Chapel Hill',
    type: 'city',
    intro: "From the historic homes of Franklin Street to the wooded subdivisions off Mount Carmel Church Road, Chapel Hill's mix of UNC student housing, established neighborhoods, and rural-edge properties calls for a pest control approach that treats every home like it's the only one we'll see today. Castle Exterminators serves the entire Chapel Hill area with eco-friendly, family-safe treatments.",
    about: "Chapel Hill sits at the edge of where Durham's red clay meets Orange County's deeper hardwoods — and that ecology brings a unique pest profile. Older homes off Estes Drive and Franklin Street wrestle with carpenter ants in aging wood siding; the wooded neighborhoods near Meadowmont and Southern Village deal with rodent pressure from surrounding forest; and the apartment complexes that ring the UNC campus see a constant rotation of cockroach and bed bug issues as tenants come and go. We've worked all of these — and we know the difference between the bug you can spot-treat and the one you have to chase to the source.",
    pests: [
      { name: 'Carpenter ants', reason: "Chapel Hill's older homes — especially the bungalows and craftsmen off Franklin Street — are prime targets for carpenter ants that nest in damp, aging wood siding and trim." },
      { name: 'Termites', reason: "The deeper hardwoods around Meadowmont, Carrboro line, and southern Chapel Hill keep subterranean termite pressure high year-round." },
      { name: 'Mice & deer mice', reason: "Wooded neighborhoods near Mount Carmel, Lake Hogan Farms, and Briar Chapel see persistent rodent activity from the surrounding forest." },
      { name: 'Bed bugs', reason: "High-turnover student rentals near UNC and along Estes Drive mean bed bugs travel between units more easily than in other parts of the Triangle." },
    ],
    nearby: ['Franklin Street', 'UNC campus', 'Meadowmont', 'Southern Village', 'Carrboro', 'Estes Drive', 'Mount Carmel Church Road', 'Briar Chapel'],
    testimonial: {
      quote: "Castle handled a carpenter ant problem in our 1940s Franklin Street home that two other companies told us would require tearing out siding. They found the real nest in the crawl space and solved it in one visit. We're customers for life.",
      author: 'Sarah J.',
      street: 'Franklin Street, Chapel Hill',
    },
  },
  {
    slug: 'raleigh',
    name: 'Raleigh',
    shortName: 'Raleigh',
    zipCodes: ['27601', '27603', '27604', '27605', '27606', '27607', '27608', '27609', '27612', '27613', '27614', '27615', '27616', '27617'],
    city: 'Raleigh',
    type: 'city',
    intro: "From historic Oakwood to North Hills, Five Points to West Raleigh — North Carolina's capital is one of the fastest-growing metros in the country, and that growth comes with pest pressure most homeowners don't expect. Castle Exterminators brings family-owned, Durham-based service to Raleigh homes with the same care we'd give our own.",
    about: "Raleigh's neighborhoods cover everything from century-old craftsman homes downtown to new construction in North Raleigh — and every era of home has its own bug problems. Older homes in Five Points and Oakwood deal with termites and carpenter ants in aging wood; newer subdivisions in North Hills, Brier Creek, and Wakefield see rodent and ant pressure as construction continues to push into formerly wooded areas; and the inner-belt apartments around NC State keep us busy with German roach work. We service all of Raleigh — most jobs scheduled within 48 hours.",
    pests: [
      { name: 'Subterranean termites', reason: "Raleigh's red-clay soil and warm, humid summers make it one of the most termite-active areas in the Carolinas — especially for homes 20+ years old." },
      { name: 'Argentine ants', reason: "Newer subdivisions in North Raleigh and Brier Creek see massive Argentine ant supercolonies that take coordinated bait treatments — not just spray — to eliminate." },
      { name: 'German cockroaches', reason: "Apartments and rentals near NC State and downtown Raleigh see persistent German roach activity that requires multi-visit treatment cycles." },
      { name: 'Roof rats', reason: "Older neighborhoods like Five Points and Hayes Barton with mature trees and attached garages see roof rats — a different problem than the Norway rats most companies are used to treating." },
    ],
    nearby: ['Downtown Raleigh', 'Five Points', 'North Hills', 'Brier Creek', 'Wakefield', 'Oakwood', 'NC State', 'Hayes Barton', 'Cameron Village'],
    testimonial: {
      quote: "We had Terminix on a quarterly plan for three years and still saw roaches every few months. Castle came out, found a hidden nest in the dishwasher cabinet our previous tech had never looked at, and we haven't seen a roach since.",
      author: 'David M.',
      street: 'North Hills, Raleigh',
    },
  },
  {
    slug: 'cary',
    name: 'Cary',
    shortName: 'Cary',
    zipCodes: ['27511', '27513', '27518', '27519'],
    city: 'Cary',
    type: 'city',
    intro: "Cary is one of the most-loved towns in the Triangle — and one of the most demanding when it comes to pest control. Manicured lawns, careful HOAs, and homeowners who notice the smallest detail. Castle Exterminators meets that standard with discreet, family-safe, treatment-grade-only service across all Cary zip codes.",
    about: "Cary's pest control challenges come from its success: rapid residential growth into formerly wooded areas brings persistent contact between homes and the local wildlife, and the mature, well-irrigated neighborhoods around Lochmere, Preston, and Macgregor Downs are exactly the kind of environment termites and carpenter ants thrive in. Newer parts of Cary near RTP and Morrisville see mosquito and ant pressure from drainage and humidity. We treat every Cary home with the precision the town's standard demands — no signs left in the yard, no overspray on landscaping, no upsells.",
    pests: [
      { name: 'Subterranean termites', reason: "Cary's mature subdivisions, irrigated lawns, and wooded edges create year-round termite activity — most homes never see the damage until a routine inspection finds it." },
      { name: 'Carpenter bees', reason: "Decks, fascia boards, and pergolas in older Cary neighborhoods are favorite nesting sites for carpenter bees, which return to the same wood year after year." },
      { name: 'Mosquitoes', reason: "Cary's well-watered lawns, stormwater ponds, and wooded greenways breed mosquitoes from April through October — we treat the source, not just the air." },
      { name: 'Pavement & Argentine ants', reason: "Mulched flower beds, decorative borders, and brick walkways throughout Cary's HOAs are textbook ant superhighways." },
    ],
    nearby: ['Lochmere', 'Preston', 'Macgregor Downs', 'Downtown Cary', 'Crossroads', 'Amberly', 'Carpenter Village', 'Cary Park'],
    testimonial: {
      quote: "What I appreciated most: their tech showed up in a clean shirt, no clipboard full of upsells, and explained exactly what they were doing and why. The mosquitoes were gone within a week. They earn their reviews.",
      author: 'Emily R.',
      street: 'Preston, Cary',
    },
  },
  {
    slug: 'hope-valley',
    name: 'Hope Valley',
    shortName: 'Hope Valley',
    zipCodes: ['27707'],
    city: 'Durham',
    type: 'neighborhood',
    intro: "Hope Valley is one of Durham's most established neighborhoods — and its mature trees, manicured lawns, and stately homes create their own pest control story. Castle Exterminators has been serving Hope Valley homeowners with discreet, treatment-grade pest control since 2017.",
    about: "Built around the Hope Valley Country Club starting in the 1920s, this neighborhood's beauty — mature hardwoods, hilly terrain, deep yards, century-old oaks — also makes it one of the more pest-active corners of Durham. Carpenter ants love the aging wood trim of these elegant homes; termites work the moist soil under deep landscape beds; squirrels and roof rats find easy entry through attached gables and shake-shingle roofs. We've been inside these homes — we know which brand of caulk matches their trim, where the crawl space access usually hides, and how to leave the place spotless. Hope Valley jobs are typically scheduled within 24-48 hours.",
    pests: [
      { name: 'Carpenter ants', reason: "Mature wood trim, fascia, and soffits on Hope Valley's older homes are favorite carpenter ant territory — especially after wet springs." },
      { name: 'Subterranean termites', reason: "Heavy mulch beds, mature landscaping, and deep root systems create ideal termite conditions in nearly every Hope Valley yard." },
      { name: 'Squirrels & roof rats', reason: "Shake-shingle and slate roofs, attached garages, and overhanging branches let squirrels and roof rats enter attics easily." },
      { name: 'Yellow jackets & wasps', reason: "Soffits, eaves, and ground burrows on Hope Valley's hilly lots see annual wasp activity that needs careful, family-safe removal." },
    ],
    nearby: ['Hope Valley Country Club', 'Forest Hills', 'Lakewood', 'Woodcroft', 'University Drive', 'NC-751', 'Erwin Road'],
    testimonial: {
      quote: "Three other companies wouldn't touch our wasp problem because the nest was in the attic gable. Castle handled it in one careful visit — no damage to our shake roof, no chemical smell inside, and they came back free a week later to make sure they were gone.",
      author: 'Linda W.',
      street: 'Hope Valley',
    },
  },
]

const renderLocationPage = (loc: LocationDetail, allServices: ServiceDetail[]) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pest Control in ${loc.name}, NC | Castle Exterminators</title>
  <meta name="description" content="Local pest control in ${loc.name}, NC. Castle Exterminators serves ${loc.zipCodes.join(', ')} with family-owned, licensed, eco-friendly extermination for roaches, termites, ants, mice, and more. Free inspection. (919) 606-8686." />
  <meta name="keywords" content="pest control ${loc.name}, exterminator ${loc.name} NC, ${loc.name} pest control near me, ${loc.zipCodes.join(' ')} pest control, Durham pest control, ${loc.name} roach control, ${loc.name} termite inspection" />
  <meta name="theme-color" content="#1F6F4A" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="geo.region" content="US-NC" />
  <meta name="geo.placename" content="${loc.name}, North Carolina" />
  <link rel="canonical" href="https://www.castleexterminators.co/locations/${loc.slug}" />
  <link rel="icon" type="image/x-icon" href="/static/favicon.ico" /><link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" /><link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" /><link rel="manifest" href="/static/site.webmanifest" />
  <meta property="og:site_name" content="Castle Exterminators" />
  <meta property="og:title" content="Pest Control in ${loc.name}, NC | Castle Exterminators" />
  <meta property="og:description" content="Local, family-owned pest control serving ${loc.name}, NC. ${loc.zipCodes.join(', ')}." />
  <meta property="og:url" content="https://www.castleexterminators.co/locations/${loc.slug}" />
  <meta property="og:image" content="https://www.castleexterminators.co/static/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pest Control in ${loc.name}, NC",
    "description": "Family-owned, licensed pest control serving ${loc.name}, NC (${loc.zipCodes.join(', ')}).",
    "url": "https://www.castleexterminators.co/locations/${loc.slug}",
    "provider": {
      "@type": "PestControlService",
      "@id": "https://www.castleexterminators.co/#business",
      "name": "Castle Exterminators",
      "telephone": "+1-919-606-8686",
      "email": "services@castleexterminators.co",
      "address": { "@type": "PostalAddress", "addressLocality": "${loc.city}", "addressRegion": "NC", "postalCode": "${loc.zipCodes[0]}", "addressCountry": "US" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "3", "bestRating": "5", "worstRating": "1" }
    },
    "areaServed": ${loc.type === 'city' ? `{
      "@type": "City",
      "name": "${loc.name}",
      "containedInPlace": { "@type": "State", "name": "North Carolina" }
    }` : `{
      "@type": "Place",
      "name": "${loc.name}",
      "address": { "@type": "PostalAddress", "addressLocality": "${loc.city}", "addressRegion": "NC", "addressCountry": "US" },
      "containedInPlace": { "@type": "City", "name": "${loc.city}", "containedInPlace": { "@type": "State", "name": "North Carolina" } }
    }`},
    "offers": { "@type": "Offer", "url": "https://www.castleexterminators.co/locations/${loc.slug}", "priceCurrency": "USD", "availability": "https://schema.org/InStock" }
  }
  </script>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.castleexterminators.co/" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.castleexterminators.co/#contact" },
      { "@type": "ListItem", "position": 3, "name": "${loc.name}", "item": "https://www.castleexterminators.co/locations/${loc.slug}" }
    ]
  }
  </script>

  <link rel="stylesheet" href="/static/tailwind.css" />
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    html { scroll-behavior: smooth; }
    :root { --ink: 30, 42, 36; --paper: 251, 248, 241; --emphasis-high: 0.87; --emphasis-medium: 0.60; --emphasis-disabled: 0.38; }
    body { font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif; color: rgba(var(--ink), var(--emphasis-high)); background: #FBF8F1; }
    h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.015em; font-variation-settings: "opsz" 144, "SOFT" 50; }
    .hero-grain h1, .hero-grain h2, footer h1, footer h2, footer h3, footer h4 { color: rgba(var(--paper), var(--emphasis-high)) !important; }
    .hero-grain .text-white, footer .text-white { color: rgba(var(--paper), var(--emphasis-high)) !important; }
    footer { color: rgba(var(--paper), var(--emphasis-medium)) !important; }
    .font-display { font-family: 'Fraunces', 'Plus Jakarta Sans', Georgia, serif; font-variation-settings: "opsz" 144, "SOFT" 50; }
    .serif-italic { font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 500; }
    .hero-overlay { background: linear-gradient(135deg, rgba(31,111,74,.92) 0%, rgba(14,22,18,.78) 55%, rgba(14,22,18,.45) 100%); }
    .hero-grain::after { content: ''; position: absolute; inset: 0; pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      opacity: .35; mix-blend-mode: overlay; }

    #site-header { transition: background-color .3s ease, box-shadow .3s ease, backdrop-filter .3s ease; }
    #site-header.nav-scrolled { background-color: rgba(251,248,241,.96); backdrop-filter: saturate(180%) blur(12px); -webkit-backdrop-filter: saturate(180%) blur(12px); box-shadow: 0 4px 20px -8px rgba(30,42,36,.18); }
    .nav-link { position: relative; padding: .35rem 0; transition: color .25s ease; }
    .nav-link::after { content: ''; position: absolute; left: 0; right: 0; bottom: -4px; height: 2px; border-radius: 2px; background: #1F6F4A; transform: scaleX(0); transform-origin: center; transition: transform .35s cubic-bezier(.65,.05,.36,1); }
    .nav-link:hover, .nav-link:focus-visible, .nav-link.active { color: #1F6F4A; }
    .nav-link:hover::after, .nav-link:focus-visible::after, .nav-link.active::after { transform: scaleX(1); }
    .nav-burger { position: relative; width: 26px; height: 20px; display: none; flex-direction: column; justify-content: space-between; background: transparent; border: 0; padding: 0; cursor: pointer; }
    @media (max-width: 767px) { .nav-burger { display: flex; } }
    .nav-burger span { display: block; width: 100%; height: 2.5px; background: #1E2A24; border-radius: 4px; transition: transform .35s cubic-bezier(.65,.05,.36,1), opacity .25s ease, background-color .25s ease; }
    .nav-burger.open span:nth-child(1) { transform: translateY(8.75px) rotate(45deg); }
    .nav-burger.open span:nth-child(2) { opacity: 0; }
    .nav-burger.open span:nth-child(3) { transform: translateY(-8.75px) rotate(-45deg); }
    #nav-mobile { max-height: 0; opacity: 0; overflow: hidden; transition: max-height .4s cubic-bezier(.22,1,.36,1), opacity .3s ease; }
    #nav-mobile.open { max-height: 720px; opacity: 1; }

    .pest-card { transition: transform .35s cubic-bezier(.22,1,.36,1), box-shadow .35s ease; }
    .pest-card:hover { transform: translateY(-4px); box-shadow: 0 14px 32px -16px rgba(30,42,36,.22); }
    .zip-pill { display: inline-flex; align-items: center; gap: .375rem; background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.25); padding: .25rem .65rem; border-radius: 9999px; font-size: .75rem; font-weight: 700; }

    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; } }
  </style>
</head>
<body class="bg-brand-bone antialiased text-brand-navy">

  <header id="site-header" class="fixed top-0 inset-x-0 z-50 bg-brand-bone/90 backdrop-blur border-b border-brand-green/10">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3" aria-label="Castle Exterminators home">
        <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-10 sm:h-11 w-auto" />
      </a>
      <ul class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <li><a href="/#services" class="nav-link">Services</a></li>
        <li><a href="/pests" class="nav-link">Pest Library</a></li>
        <li><a href="/about" class="nav-link">About</a></li>
        <li><a href="/#why-us" class="nav-link">Why Us</a></li>
        <li><a href="/#reviews" class="nav-link">Reviews</a></li>
        <li><a href="/#faq" class="nav-link">FAQ</a></li>
      </ul>
      <div class="flex items-center gap-3">
        <a href="tel:+19196068686" class="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
          <span class="text-brand-green"><i class="fa-solid fa-phone-volume"></i></span>
          <span>(919) 606-8686</span>
        </a>
        <a href="/#contact" class="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold px-4 py-2 rounded-lg shadow-card transition-transform duration-300 hover:-translate-y-0.5">
          <span>Free Inspection</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </a>
        <button type="button" id="nav-burger" class="nav-burger md:hidden ml-1" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div id="nav-mobile" class="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur">
      <ul class="px-4 sm:px-6 py-3 space-y-1 text-sm font-semibold text-slate-700">
        <li><a href="/#services" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Services</a></li>
        <li><a href="/pests" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Pest Library</a></li>
        <li><a href="/about" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">About</a></li>
        <li><a href="/#why-us" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Why Us</a></li>
        <li><a href="/#reviews" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">Reviews</a></li>
        <li><a href="/#faq" class="block px-2 py-2.5 rounded-lg hover:bg-brand-green/10 hover:text-brand-green transition">FAQ</a></li>
        <li class="pt-2"><a href="tel:+19196068686" class="flex items-center gap-2 px-2 py-2.5 text-brand-green font-bold"><i class="fa-solid fa-phone-volume"></i> (919) 606-8686</a></li>
      </ul>
    </div>
  </header>

  <script>
    (function(){
      var header = document.getElementById('site-header');
      var onScroll = function(){ header.classList.toggle('nav-scrolled', window.scrollY > 8); };
      window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
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
    })();
  </script>

  <!-- HERO -->
  <section class="relative pt-16">
    <div class="hero-grain relative h-[42vh] min-h-[340px] max-h-[520px] overflow-hidden bg-brand-navy-dark">
      <div class="absolute inset-0 hero-overlay"></div>
      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 text-white">
        <nav class="text-xs sm:text-sm font-semibold mb-4 opacity-90">
          <a href="/" class="hover:text-brand-green-light transition">Home</a>
          <i class="fa-solid fa-chevron-right text-[10px] mx-2 opacity-60"></i>
          <span>Locations</span>
          <i class="fa-solid fa-chevron-right text-[10px] mx-2 opacity-60"></i>
          <span class="text-brand-leaf">${loc.name}</span>
        </nav>
        <div class="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
          <i class="fa-solid fa-location-dot"></i> Castle Exterminators · ${loc.name}, NC
        </div>
        <h1 class="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl max-w-3xl leading-tight">Pest Control in <br class="hidden sm:inline" /><span class="serif-italic text-brand-leaf">${loc.name}</span>, NC</h1>
        <p class="mt-3 text-lg sm:text-xl max-w-2xl opacity-95">${loc.intro}</p>
        <div class="mt-5 flex flex-wrap gap-2">
          ${loc.zipCodes.map(z => `<span class="zip-pill"><i class="fa-solid fa-envelope-circle-check text-[10px]"></i> ${z}</span>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
    <div class="grid lg:grid-cols-3 gap-12">

      <article class="lg:col-span-2 space-y-14">

        <!-- About this area -->
        <section>
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-brand-green mb-3">Local pest control, by neighbors who know the area</p>
          <h2 class="font-display font-extrabold text-3xl sm:text-4xl mb-6 leading-tight">${loc.shortName}'s pest problems are different. We know why.</h2>
          <p class="text-lg leading-relaxed text-slate-700">${loc.about}</p>
        </section>

        <!-- Pests common here -->
        <section>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl mb-6">The pests we see most in ${loc.name}</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            ${loc.pests.map(p => `<div class="pest-card bg-white rounded-2xl border border-slate-100 p-5 shadow-card">
              <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid fa-bug"></i></span>
                <div>
                  <h3 class="font-display font-extrabold text-lg mb-1">${p.name}</h3>
                  <p class="text-sm text-slate-600 leading-relaxed">${p.reason}</p>
                </div>
              </div>
            </div>`).join('')}
          </div>
        </section>

        <!-- Services we offer here -->
        <section>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl mb-6">Our ${loc.shortName} pest control services</h2>
          <p class="text-slate-600 mb-6">Every Castle Exterminators service is available across ${loc.name}. Click any service to learn more, or call us for a free, no-pressure inspection.</p>
          <div class="grid sm:grid-cols-2 gap-3">
            ${allServices.map(s => `<a href="/services/${s.slug}" class="pest-card flex items-center gap-3 bg-white rounded-xl border border-slate-100 p-4">
              <span class="w-10 h-10 rounded-lg bg-brand-green/10 text-brand-green grid place-items-center flex-shrink-0"><i class="fa-solid ${s.icon}"></i></span>
              <span class="flex-1 min-w-0">
                <span class="block font-bold text-sm text-brand-navy">${s.name}</span>
                <span class="block text-xs text-slate-500 leading-snug mt-0.5">${s.tagline}</span>
              </span>
              <i class="fa-solid fa-arrow-right text-xs text-brand-green"></i>
            </a>`).join('')}
          </div>
        </section>

        <!-- Nearby landmarks -->
        <section>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl mb-4">${loc.name} areas we cover</h2>
          <p class="text-slate-600 mb-5">Castle Exterminators serves every block of ${loc.name} &mdash; including the neighborhoods and landmarks below.</p>
          <div class="flex flex-wrap gap-2">
            ${loc.nearby.map(n => `<span class="inline-flex items-center gap-2 bg-brand-cream border border-brand-green/15 rounded-full px-4 py-2 text-sm font-semibold text-brand-navy"><i class="fa-solid fa-location-dot text-brand-green text-xs"></i> ${n}</span>`).join('')}
          </div>
        </section>

        <!-- Other service areas (internal cross-linking) -->
        <section>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl mb-4">Also serving the Triangle</h2>
          <p class="text-slate-600 mb-5">Looking for pest control elsewhere in the area? We cover these Triangle communities too:</p>
          <div class="grid sm:grid-cols-2 gap-3">
            ${locations.filter(o => o.slug !== loc.slug).map(o => `
              <a href="/locations/${o.slug}" class="group flex items-start gap-3 bg-white border border-slate-200 hover:border-brand-green/40 hover:shadow-sm rounded-xl px-4 py-3 transition">
                <i class="fa-solid fa-location-dot text-brand-green text-sm mt-1"></i>
                <span class="flex-1">
                  <span class="block font-bold text-sm text-brand-navy group-hover:text-brand-green transition">Pest Control in ${o.name}</span>
                  <span class="block text-xs text-slate-500 leading-snug mt-0.5">${o.zipCodes.slice(0, 3).join(' · ')}${o.zipCodes.length > 3 ? '…' : ''}</span>
                </span>
                <i class="fa-solid fa-arrow-right text-xs text-brand-green/70 mt-1.5"></i>
              </a>`).join('')}
          </div>
        </section>

        ${loc.testimonial ? `
        <!-- Local testimonial -->
        <section class="bg-brand-cream rounded-2xl p-8 border border-brand-green/10">
          <div class="text-brand-green text-3xl mb-3"><i class="fa-solid fa-quote-left"></i></div>
          <blockquote class="font-display text-xl sm:text-2xl leading-relaxed text-brand-navy serif-italic mb-4">${loc.testimonial.quote}</blockquote>
          <footer class="text-sm text-slate-600">
            <strong class="text-brand-navy">${loc.testimonial.author}</strong>${loc.testimonial.street ? ` &middot; ${loc.testimonial.street}` : ''}
          </footer>
        </section>` : ''}

      </article>

      <!-- Sidebar CTA -->
      <aside class="lg:col-span-1 space-y-6">
        <div class="bg-gradient-to-br from-brand-green to-brand-navy-dark text-white rounded-2xl p-6 shadow-card sticky top-24">
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-leaf mb-3">${loc.name} · ${loc.zipCodes.join(' · ')}</p>
          <h3 class="font-display font-extrabold text-2xl mb-3 leading-tight">Free inspection in ${loc.shortName}</h3>
          <p class="text-sm opacity-90 mb-5">Same-day service available. Licensed, insured, and family-owned since 2017.</p>
          <a href="/#contact" class="block text-center bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-xl transition shadow-card mb-3">
            <i class="fa-solid fa-calendar-check mr-2"></i> Request Free Inspection
          </a>
          <a href="tel:+19196068686" class="block text-center bg-white/15 hover:bg-white/25 text-white font-bold py-3 px-4 rounded-xl transition backdrop-blur border border-white/25">
            <i class="fa-solid fa-phone-volume mr-2"></i> (919) 606-8686
          </a>
          <div class="mt-5 pt-5 border-t border-white/20 grid grid-cols-2 gap-3 text-center">
            <div><div class="font-display font-extrabold text-xl">5.0<i class="fa-solid fa-star text-brand-orange text-sm ml-1"></i></div><div class="text-[11px] opacity-80">Google &amp; Yelp</div></div>
            <div><div class="font-display font-extrabold text-xl">8+</div><div class="text-[11px] opacity-80">Years in Durham</div></div>
          </div>
        </div>

        <div class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h4 class="font-bold mb-4">Other services</h4>
          <ul class="space-y-2 text-sm">
            ${allServices.slice(0, 6).map(o => `<li><a href="/services/${o.slug}" class="flex items-center gap-2 text-slate-600 hover:text-brand-green transition"><i class="fa-solid ${o.icon} text-brand-green w-4"></i> ${o.name}</a></li>`).join('')}
          </ul>
          <a href="/about" class="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-green hover:text-brand-green-dark">About Castle Exterminators <i class="fa-solid fa-arrow-right text-[10px]"></i></a>
        </div>
      </aside>

    </div>
  </main>

  <footer class="bg-brand-navy-dark text-slate-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-5 gap-8">
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
        <h4 class="text-white font-bold mb-4">Service Areas</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/locations/downtown-durham" class="hover:text-white">Downtown Durham</a></li>
          <li><a href="/locations/hope-valley" class="hover:text-white">Hope Valley</a></li>
          <li><a href="/locations/chapel-hill" class="hover:text-white">Chapel Hill</a></li>
          <li><a href="/locations/raleigh" class="hover:text-white">Raleigh</a></li>
          <li><a href="/locations/cary" class="hover:text-white">Cary</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Company</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/about" class="hover:text-white">About</a></li>
          <li><a href="/#reviews" class="hover:text-white">Reviews</a></li>
          <li><a href="/#contact" class="hover:text-white">Contact</a></li>
          <li><i class="fa-solid fa-phone-volume mr-2"></i> <a href="tel:+19196068686" class="hover:text-white">(919) 606-8686</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
        <span>&copy; ${new Date().getFullYear()} Castle Exterminators. All rights reserved.</span>
        <span>Licensed &amp; Insured in North Carolina</span>
      </div>
    </div>
  </footer>
</body>
</html>`

locations.forEach(loc => {
  app.get(`/locations/${loc.slug}`, (c) => c.html(renderLocationPage(loc, services)))
})

// ============================================================================
// PEST LIBRARY — identification pages for 48 common pests.
// Each pest gets /pests/<slug> with infographic + intro + CTA + cross-links.
// Hub page at /pests groups them by category.
// ============================================================================
type PestCategory = 'ants' | 'roaches' | 'rodents' | 'flying' | 'stinging' | 'spiders' | 'occasional' | 'wood-destroying' | 'fabric-pantry' | 'biting' | 'garden'

type Pest = {
  slug: string
  name: string
  scientific: string
  category: PestCategory
  size: string             // e.g., '2–6 mm'
  threat: 'low' | 'medium' | 'high'
  serviceSlug?: string     // related service for CTA
  shortDesc: string        // 1-sentence card description (for hub page)
  intro: string            // ~80-word intro paragraph
  identify: string         // 1-sentence ID clue
  whereInNc: string        // Triangle/NC context
}

const pestCategories: { id: PestCategory; name: string; description: string; icon: string }[] = [
  { id: 'ants',             name: 'Ants',                description: 'Trail-followers, scavengers, and structural nesters — from sugar ants to fire ants.',                       icon: 'fa-bugs' },
  { id: 'roaches',          name: 'Cockroaches',         description: 'Allergen-spreading, fast-breeding kitchen and bathroom invaders.',                                          icon: 'fa-bug' },
  { id: 'rodents',          name: 'Rodents',             description: 'Mice that chew wires, contaminate food, and squeeze through dime-sized gaps.',                              icon: 'fa-mouse' },
  { id: 'flying',           name: 'Flies & Flying Pests',description: 'Houseflies, fruit flies, mosquitoes, cluster flies, cicadas — anything with wings and a buzz.',             icon: 'fa-feather' },
  { id: 'stinging',         name: 'Stinging Insects',    description: 'Yellow jackets, wasps, and hornets — painful, sometimes life-threatening.',                                  icon: 'fa-triangle-exclamation' },
  { id: 'spiders',          name: 'Spiders',             description: 'From harmless cellar spiders to medically significant widows and recluses.',                                 icon: 'fa-spider' },
  { id: 'biting',           name: 'Biting Pests',        description: 'Bed bugs, ticks, fleas — pests that feed on blood and cause itching, welts, or disease.',                    icon: 'fa-droplet' },
  { id: 'occasional',       name: 'Occasional Invaders', description: 'Silverfish, earwigs, stink bugs, centipedes — sneak in when weather changes.',                              icon: 'fa-house-crack' },
  { id: 'wood-destroying',  name: 'Wood-Destroying',     description: 'Subterranean termites, carpenter ants, and borer beetles — silent structural damage.',                      icon: 'fa-tree' },
  { id: 'fabric-pantry',    name: 'Fabric & Pantry',     description: 'Clothes moths and pantry moths that ruin garments and contaminate dry goods.',                              icon: 'fa-shirt' },
  { id: 'garden',           name: 'Garden & Outdoor',    description: 'Aphids, scale insects, leaf chewers, wood borers, grasshoppers, locusts — primarily landscape concerns.',   icon: 'fa-leaf' }
]

const pests: Pest[] = [
  // ----- ANTS -----
  { slug: 'fire-ant', name: 'Fire Ant', scientific: 'Solenopsis invicta', category: 'ants', size: '2–6 mm', threat: 'high', serviceSlug: 'ants',
    shortDesc: 'Aggressive reddish-orange ants with a painful stinging bite that builds dome-shaped mounds.',
    intro: "Fire ants are one of the most aggressive ant species in the southern US — and they're a growing problem in central North Carolina. Workers swarm and sting in numbers when their mound is disturbed, causing burning welts and pustules that can develop into severe allergic reactions for sensitive people. They build dome-shaped soil mounds with no central opening, often in lawns, pasture edges, and along sidewalk and driveway cracks where the soil stays warm.",
    identify: 'Reddish-orange body with darker abdomen; workers come in varied sizes within the same mound.',
    whereInNc: 'Common across the Triangle on sunny lawns, school fields, and the edges of driveways — especially South Durham, Cary, and Raleigh subdivisions.' },
  { slug: 'pharaoh-ant', name: 'Pharaoh Ant', scientific: 'Monomorium pharaonis', category: 'ants', size: '1.5–2 mm', threat: 'medium', serviceSlug: 'ants',
    shortDesc: 'Tiny pale yellow ants that bud into new colonies when sprayed — never use repellent insecticides.',
    intro: "Pharaoh ants are one of the trickiest indoor ant species to control. They are tiny, pale yellow, almost translucent, and form colonies with multiple queens. If you spray them with a repellent insecticide, the colony 'buds' — splitting into several smaller colonies that spread further through your home. Pharaoh ants prefer warm, humid indoor spaces and are a notorious problem in hospitals, hotels, apartments, kitchens, and bathrooms where they can contaminate sterile surfaces and food.",
    identify: '1.5–2 mm pale yellow to light tan body with darker abdomen; almost translucent.',
    whereInNc: 'Encountered year-round indoors across the Triangle, especially in apartments, restaurants, and older buildings.' },
  { slug: 'odorous-house-ant', name: 'Odorous House Ant', scientific: 'Tapinoma sessile', category: 'ants', size: '2.5–3 mm', threat: 'low', serviceSlug: 'ants',
    shortDesc: 'Brown ants that smell like rotten coconut when crushed; love sweets and form wide foraging trails.',
    intro: "Odorous house ants are one of the most common indoor ants in North Carolina homes. They're harmless — no bite, no sting, no disease — but they're a serious nuisance, forming wide foraging trails along countertops and baseboards in pursuit of sweets, dead insects, and crumbs. Their signature feature: a distinctive rotten-coconut smell when crushed. They nest under sinks, in wall voids, and behind appliances anywhere moisture is available.",
    identify: '2.5–3 mm brown to black body; produces rotten-coconut odor when crushed.',
    whereInNc: 'One of the most-reported indoor ants in Durham and Chapel Hill kitchens, especially after spring rains.' },
  { slug: 'little-black-ant', name: 'Little Black Ant', scientific: 'Monomorium minimum', category: 'ants', size: '1.5–2 mm', threat: 'low', serviceSlug: 'ants',
    shortDesc: 'Jet-black, smaller than most household ants; nests in masonry and wall cavities with multiple queens.',
    intro: "Little black ants are among the smallest household ants you'll encounter — a tiny, shiny jet-black ant that forms long foraging trails between outdoor nests and indoor food sources. They're opportunistic omnivores: sugar, grease, meat, dead insects — anything available. Colonies have multiple queens, which makes them resilient and quick to re-establish if you only spray the workers you see. They typically nest in rotting wood, brickwork, masonry voids, wall cavities, and under stones.",
    identify: '1.5–2 mm jet-black shiny body; among the smallest household ants.',
    whereInNc: 'Frequently found nesting in older Durham brick foundations and stone garden walls.' },
  { slug: 'thief-ant', name: 'Thief Ant', scientific: 'Solenopsis molesta', category: 'ants', size: '1.5–2 mm', threat: 'low', serviceSlug: 'ants',
    shortDesc: 'Tiny pale ants that nest beside other ant colonies and steal their brood; easy to confuse with pharaoh ants.',
    intro: "Thief ants get their name from their unusual habit: they nest right next to other ant colonies and 'steal' the larvae and pupae to feed their own brood. They're tiny — easy to mistake for pharaoh ants — but they tend to prefer greasy and high-protein foods over sweets, which is one way to tell them apart. Indoors they're a kitchen nuisance that contaminates food; outdoors they nest in wall voids, soil, and masonry.",
    identify: '1.5–2 mm pale yellow to light brown body; very small with two-segment waist.',
    whereInNc: 'Less common than odorous house ants but show up in older Triangle homes with mixed ant pressure.' },
  { slug: 'raspberry-crazy-ant', name: 'Raspberry Crazy Ant', scientific: 'Nylanderia fulva', category: 'ants', size: '2–3 mm', threat: 'medium', serviceSlug: 'ants',
    shortDesc: 'Erratic-running reddish-brown ants that displace native ants, form supercolonies, and short out electronics.',
    intro: "Raspberry crazy ants are a Gulf-coast invasive species that has been steadily expanding north. They earn their name from the erratic, jerky way they run — no defined trails like other ants. They form massive supercolonies that displace native ant species and notoriously short-circuit electrical equipment by nesting inside outlets, breaker boxes, and HVAC units. They're not strongly attracted to typical ant baits, which makes them especially hard to control.",
    identify: '2–3 mm reddish-brown ant with long legs and antennae; moves erratically.',
    whereInNc: 'Mostly a Gulf-coast pest; rare in the Triangle, but worth identifying if you see ants behaving unusually.' },
  { slug: 'carpenter-ant', name: 'Carpenter Ant', scientific: 'Camponotus pennsylvanicus', category: 'wood-destroying', size: '6–13 mm', threat: 'high', serviceSlug: 'ants',
    shortDesc: 'Large black ants that excavate smooth galleries in moisture-damaged wood — a sign of structural issues.',
    intro: "Carpenter ants don't actually eat wood — they excavate smooth galleries inside moist, damaged wood for nesting. That makes them a secondary indicator of a moisture problem somewhere in your home: a leaky roof, a sweating pipe, a damp crawl space. Left alone, an established colony can do significant structural damage to window frames, decks, roofs, and tree stumps. The tell-tale sign is coarse sawdust (frass) piling up below tiny holes.",
    identify: '6–13 mm large black (or red-and-black) ants with smooth, rounded thorax.',
    whereInNc: 'Common in older Durham homes, especially around chimneys, decks, and crawl spaces where moisture issues hide.' },
  { slug: 'pavement-ant', name: 'Pavement Ant', scientific: 'Tetramorium immigrans', category: 'ants', size: '2.5–3 mm', threat: 'low', serviceSlug: 'ants',
    shortDesc: 'Dark brown ants that pile soil at sidewalk cracks; forage indoors for grease, sweets, and meats.',
    intro: "Pavement ants are the small dark ants you see leaving little piles of soil at the cracks of sidewalks, driveways, and foundation slabs. They forage indoors aggressively for grease, sweets, and meats — basically anything they can carry back to the nest. They're also known for territorial 'ant wars' with rival colonies, sometimes leaving small piles of dead workers on pavement.",
    identify: '2.5–3 mm dark brown to black body with parallel grooves on head and thorax.',
    whereInNc: 'Extremely common in Triangle driveways and foundations; one of the top reasons homeowners call about ants on patios.' },
  { slug: 'acrobat-ant', name: 'Acrobat Ant', scientific: 'Crematogaster spp.', category: 'ants', size: '2.5–4 mm', threat: 'low', serviceSlug: 'ants',
    shortDesc: 'Heart-shaped abdomen raised over the head when threatened; nests in moist wood and foam insulation.',
    intro: "Acrobat ants get their name from their habit of raising their heart-shaped abdomen up over their head when alarmed. They nest in moist or damaged wood — often in old termite or carpenter ant galleries — and increasingly in foam insulation behind siding. They can bite mildly and emit a faint musky odor. While usually a nuisance pest, finding them inside your walls can signal underlying moisture damage worth investigating.",
    identify: '2.5–4 mm light brown to black with heart-shaped abdomen raised when disturbed.',
    whereInNc: 'Occasional in Triangle homes, especially houses with EIFS / foam-insulated exteriors.' },
  { slug: 'harvester-ant', name: 'Harvester Ant', scientific: 'Pogonomyrmex spp.', category: 'ants', size: '5–10 mm', threat: 'high', serviceSlug: 'ants',
    shortDesc: 'Large red ants of the western US with one of the most painful insect stings known to science.',
    intro: "Harvester ants are large, robust red-to-dark-brown ants known for collecting seeds and clearing the vegetation in a wide circle around their nest entrance — making their mounds easy to spot. They deliver one of the most painful stings of any North American insect, and reactions can be severe in allergic individuals. They're primarily a western US species and rarely encountered in North Carolina.",
    identify: '5–10 mm robust red to dark-brown body with prominent square head and beard-like hairs.',
    whereInNc: 'Not native to the Triangle; included for identification reference if you encounter one while traveling west.' },
  { slug: 'argentine-ant', name: 'Argentine Ant', scientific: 'Linepithema humile', category: 'ants', size: '2.5–3 mm', threat: 'medium', serviceSlug: 'ants',
    shortDesc: 'Light-brown invasive ants that form vast supercolonies and displace native species.',
    intro: "Argentine ants are an invasive species that has spread across the southern US. They form enormous supercolonies that can stretch across entire neighborhoods, displacing nearly all native ant species along the way. They follow distinct foraging trails to sweets indoors and tend aphid populations outdoors (which makes plant pests worse). Controlling them requires slow-acting sugar-based baits and persistent perimeter treatment — quick sprays don't work.",
    identify: '2.5–3 mm uniform light-brown body, single waist segment, no stinger.',
    whereInNc: 'Present in southern NC; in the Triangle they appear sporadically but can establish in landscaping mulch beds.' },

  // ----- ROACHES -----
  { slug: 'german-cockroach', name: 'German Cockroach', scientific: 'Blattella germanica', category: 'roaches', size: '13–16 mm', threat: 'high', serviceSlug: 'roaches',
    shortDesc: 'The #1 indoor roach — light brown with two dark stripes; triggers asthma, breeds explosively.',
    intro: "German cockroaches are the most common — and most problematic — indoor cockroach in North Carolina. A single female can produce thousands of offspring in a year, and infestations escalate fast. They trigger asthma and allergy attacks, spread salmonella and E. coli, and contaminate food. They prefer warm, humid spaces near food: kitchens, bathrooms, behind appliances. DIY sprays usually make infestations worse by scattering the population. Professional gel baits and IGRs are the proven solution.",
    identify: '13–16 mm light brown body with two dark parallel stripes behind the head.',
    whereInNc: 'Extremely common across the Triangle in apartments, rentals, restaurants, and any home with consistent humidity issues.' },
  { slug: 'american-cockroach', name: 'American Cockroach', scientific: 'Periplaneta americana', category: 'roaches', size: '35–50 mm', threat: 'high', serviceSlug: 'roaches',
    shortDesc: 'Large reddish-brown roach (a.k.a. "palmetto bug") from sewers, drains, and commercial basements.',
    intro: "American cockroaches — often called 'water bugs' or 'palmetto bugs' — are the large reddish-brown roaches that show up unexpectedly from drains, basements, and sewers. They're long-lived, can fly short distances, and prefer warm damp commercial buildings, though they invade homes through plumbing and crawl spaces. They spread bacteria, parasites, and allergens. The fix is moisture control + sealing entry points + targeted baits and pro treatments.",
    identify: '35–50 mm reddish-brown body with a yellow figure-8 marking on the pronotum; fully winged.',
    whereInNc: 'Frequent in Triangle restaurants, basements, and older downtown commercial buildings.' },
  { slug: 'smokybrown-cockroach', name: 'Smokybrown Cockroach', scientific: 'Periplaneta fuliginosa', category: 'roaches', size: '32–38 mm', threat: 'medium', serviceSlug: 'roaches',
    shortDesc: 'Glossy mahogany-brown roach common in southern climates; strong flier, attracted to lights.',
    intro: "Smokybrown cockroaches are large, glossy mahogany-brown roaches that thrive in the humid southern US. Unlike German roaches, they prefer to live outdoors — in gutters, tree holes, mulch, attic vents — and fly into homes attracted to lights at night, often in large numbers. They contribute to indoor allergens and can mechanically transmit pathogens. Effective control combines gutter cleaning, reduced outdoor lighting, perimeter treatments, and sealing entry points.",
    identify: '32–38 mm uniformly dark mahogany-brown body; pronotum is solid dark brown; fully winged.',
    whereInNc: "Common Triangle outdoor roach — especially in wooded properties around Duke Forest, Chapel Hill, and Hope Valley." },

  // ----- RODENTS -----
  { slug: 'house-mouse', name: 'House Mouse', scientific: 'Mus musculus', category: 'rodents', size: '7–10 cm body', threat: 'high', serviceSlug: 'rodents',
    shortDesc: 'Small greyish-brown mouse that squeezes through quarter-inch gaps; chews wires, spreads disease.',
    intro: "The house mouse is the most common indoor rodent in North Carolina. Adults can squeeze through gaps as small as a quarter-inch, climb walls and pipes, and breed rapidly — a single pair can produce dozens of offspring in a year. They contaminate food with droppings and urine, chew electrical wires (a leading cause of mystery house fires), and spread salmonella, hantavirus, and allergens. Effective control requires sealing entry points + traps + bait stations + sanitation.",
    identify: '7–10 cm body plus equally long tail; greyish-brown fur, large ears, pointed snout.',
    whereInNc: 'Universal in Triangle homes during fall and winter when temperatures drop — especially in homes with attached garages or older crawl spaces.' },

  // ----- FLIES & FLYING -----
  { slug: 'house-fly', name: 'House Fly', scientific: 'Musca domestica', category: 'flying', size: '6–7 mm', threat: 'medium', serviceSlug: 'general-pest-control',
    shortDesc: 'Grey fly with four dark thoracic stripes; mechanical vector for salmonella, E. coli, and dysentery.',
    intro: "House flies are the everyday grey fly you see around garbage, manure, and decaying matter. They feed by regurgitating saliva onto food, which is exactly how they mechanically transfer salmonella, E. coli, dysentery, and other pathogens onto your kitchen surfaces. They breed in days, not weeks, so even one or two ignored flies become an infestation quickly. Sanitation, sealing trash, screens on doors and windows, and fly traps are the foundation of control.",
    identify: '6–7 mm grey body with four dark thorax stripes, red eyes, single pair of wings.',
    whereInNc: 'Year-round across the Triangle; peak in summer.' },
  { slug: 'fruit-fly', name: 'Fruit Fly', scientific: 'Drosophila melanogaster', category: 'flying', size: '3 mm', threat: 'low', serviceSlug: 'general-pest-control',
    shortDesc: 'Tiny tan-brown flies with red eyes that breed in overripe produce, fermenting liquids, and drains.',
    intro: "Fruit flies are the tiny tan-brown flies with bright red eyes that appear seemingly out of nowhere around bowls of fruit, recycling bins, and kitchen drains. Their lifecycle is just 8–10 days, so a small population becomes a swarm in under two weeks. They contaminate food and spread yeasts and bacteria. Control is mostly sanitation: discard overripe produce, clean drains, empty recycling bins, and use apple-cider vinegar traps to catch what's already flying.",
    identify: '3 mm tan-brown body with distinctive red eyes and slow, hovering flight.',
    whereInNc: 'Universal nuisance year-round; especially bad in late summer when fruit ripens fast.' },
  { slug: 'cluster-fly', name: 'Cluster Fly', scientific: 'Pollenia rudis', category: 'flying', size: '8–10 mm', threat: 'medium', serviceSlug: 'general-pest-control',
    shortDesc: 'Sluggish dark-grey flies that overwinter inside attics and walls in large clusters.',
    intro: "Cluster flies are larger and slower than house flies, with distinctive golden-yellow crinkled hairs on the thorax. They don't breed indoors — instead, large numbers overwinter inside attics, wall voids, and around window frames, emerging on warm winter days to crawl on sunny windows. They're a major nuisance pest, and their clusters can leave dark fecal spots on walls and curtains. Prevention is exterior sealing in late summer before they move in for the season.",
    identify: '8–10 mm dark grey body with golden-yellow crinkled thorax hairs; wings overlap at rest.',
    whereInNc: 'Common in older Triangle homes with attics and rural / wooded properties.' },
  { slug: 'mosquito', name: 'Mosquito', scientific: 'Culicidae family', category: 'biting', size: '3–9 mm', threat: 'high', serviceSlug: 'mosquitoes',
    shortDesc: 'Slender biting flies that vector West Nile, Zika, and other diseases; breed in standing water.',
    intro: "Mosquitoes are the #1 reason summer evenings in North Carolina get cut short. Only the females bite — they need a blood meal to lay eggs — and they're most active at dawn and dusk. They breed in any standing water: gutters, plant saucers, bird baths, old tires, kid's toys. Beyond the itchy welts, they're vectors for West Nile virus, Zika, Eastern Equine Encephalitis, and dog heartworm. Eliminating standing water is the single highest-impact control step.",
    identify: 'Slender 3–9 mm body with long proboscis and scaled wings.',
    whereInNc: 'Triangle mosquito season runs roughly April through October; worst near creeks, ponds, and wooded areas.' },
  { slug: 'cicada', name: 'Cicada', scientific: 'Cicadidae family', category: 'flying', size: '25–50 mm', threat: 'low',
    shortDesc: 'Large stout-bodied insects with transparent veined wings; males produce the famous buzzing song.',
    intro: "Cicadas are harmless to humans, despite their large size and the dramatic buzzing chorus the males produce in summer. Nymphs spend years underground feeding on tree root sap, then emerge in synchronized broods every 13 or 17 years for periodical species, or annually for 'dog-day' species. The only real damage comes from females laying eggs in pencil-thick young tree branches, which can cause flagging. Netting young trees during emergence is the main control if you want one.",
    identify: '25–50 mm stout body with transparent veined wings and prominent red eyes.',
    whereInNc: 'Annual cicadas every summer; major periodical broods (Brood XIV, XIX) emerge across parts of NC on cycles.' },

  // ----- STINGING -----
  { slug: 'yellow-jacket', name: 'Yellow Jacket', scientific: 'Vespula spp.', category: 'stinging', size: '10–16 mm', threat: 'high', serviceSlug: 'general-pest-control',
    shortDesc: 'Aggressive yellow-and-black scavenger wasps; sharp bands, smooth body, painful repeated stings.',
    intro: "Yellow jackets are the aggressive yellow-and-black wasps that crash your summer picnic and pursue you when you walk near their nest. They scavenge sweets and meats — which is why they're attracted to outdoor dining — and they sting repeatedly without dying. Nests are typically underground in old rodent burrows, but also in wall voids and attics. Sting allergies can be life-threatening. Never try to remove a mature nest yourself; call a licensed professional for treatment at dusk.",
    identify: '10–16 mm sleek (not hairy) body with sharp yellow-and-black bands.',
    whereInNc: 'Peaks August through October across the Triangle; old chipmunk and groundhog burrows are common nest sites.' },
  { slug: 'wasp', name: 'Paper Wasp', scientific: 'Polistes spp.', category: 'stinging', size: '15–25 mm', threat: 'high', serviceSlug: 'general-pest-control',
    shortDesc: 'Slender brown-yellow wasps with long dangling legs; build umbrella-shaped paper nests under eaves.',
    intro: "Paper wasps are less aggressive than yellow jackets — they typically only sting when their nest is threatened — but their sting is just as painful and can cause allergic reactions. They build the recognizable open umbrella-shaped paper nests under eaves, decks, branches, and inside light fixtures and grills. Early-season nests with just one or two queens can be knocked down safely; mature colonies need a licensed professional.",
    identify: '15–25 mm slender brown-yellow body; long legs dangle in flight.',
    whereInNc: 'Common across Triangle porches, decks, and patios all summer; check under eaves before grilling season.' },
  { slug: 'hornet', name: 'Hornet (Bald-Faced)', scientific: 'Dolichovespula maculata', category: 'stinging', size: '18–20 mm', threat: 'high', serviceSlug: 'general-pest-control',
    shortDesc: 'Black with ivory-white markings; build large grey papery aerial nests in trees and eaves.',
    intro: "Bald-faced hornets are actually a type of large aerial yellowjacket, despite the name. They're black with distinctive ivory-white facial and abdominal markings, and they build the basketball-sized grey papery aerial nests you sometimes see hanging from tree branches or building eaves. They are extremely defensive of their nest and can sting repeatedly. Never approach a hornet nest — call a licensed pro to treat it at dusk when the colony is inside.",
    identify: '18–20 mm black body with ivory-white facial and abdominal markings.',
    whereInNc: 'Common across the Triangle, especially in wooded properties; nests grow noticeable mid-to-late summer.' },

  // ----- SPIDERS -----
  { slug: 'black-widow', name: 'Black Widow', scientific: 'Latrodectus mactans', category: 'spiders', size: '8–13 mm', threat: 'high', serviceSlug: 'general-pest-control',
    shortDesc: 'Glossy black female with red hourglass on underside; neurotoxic venom — seek medical care if bitten.',
    intro: "Black widows are reclusive spiders that rarely bite humans — only when pressed against skin. The female is the medically significant one: 8–13 mm, glossy black, with the unmistakable red hourglass mark on her underside. Their venom is neurotoxic and bites cause severe pain, cramping, and sweating; seek medical care promptly. They prefer undisturbed dark spaces: wood piles, sheds, garages, outdoor furniture corners, under porch steps.",
    identify: '8–13 mm glossy black female with red hourglass marking on underside of abdomen.',
    whereInNc: 'Present across the Triangle, especially in older wood piles, garden sheds, and rarely-used garages.' },
  { slug: 'brown-recluse', name: 'Brown Recluse', scientific: 'Loxosceles reclusa', category: 'spiders', size: '6–20 mm', threat: 'high', serviceSlug: 'general-pest-control',
    shortDesc: 'Uniform light-brown spider with dark violin shape on back; necrotic venom can cause open ulcers.',
    intro: "Brown recluses are reclusive nocturnal hunters that bite humans only when accidentally pressed against skin — putting on a shoe they crawled into, slipping into bedding, reaching into a stored box. Their venom is necrotic, which means a bite can develop into an open ulcer requiring medical treatment. They have a distinctive dark violin shape on the back of the body and six eyes arranged in pairs (most spiders have eight). Always shake out shoes and clothes from storage, and declutter.",
    identify: '6–20 mm uniform light brown with dark violin shape on back; six eyes in pairs.',
    whereInNc: 'Present in NC but less established in the Triangle than the deep South; concentrate inspections in attics, garages, and storage boxes.' },
  { slug: 'cellar-spider', name: 'Cellar Spider', scientific: 'Pholcus phalangioides', category: 'spiders', size: '7–10 mm body', threat: 'low',
    shortDesc: 'Pale tan body with extremely long thin legs; harmless and actually preys on other spiders.',
    intro: "Cellar spiders — sometimes called 'daddy long-legs spiders' — are the harmless pale spiders with the impossibly long thin legs that build messy tangled webs in basements, garage corners, and ceiling corners. They're actually beneficial: they prey on other spiders, including some medically significant ones. The 'cellar spider venom is the deadliest' myth has been thoroughly debunked. If population is unsightly, just vacuum the webs and reduce indoor humidity.",
    identify: '7–10 mm pale tan body with extremely long thin legs spanning up to 50 mm.',
    whereInNc: 'Universal in Triangle basements, crawl spaces, and garage ceilings.' },
  { slug: 'house-spider', name: 'Common House Spider', scientific: 'Parasteatoda tepidariorum', category: 'spiders', size: '5–8 mm', threat: 'low',
    shortDesc: 'Mottled tan-brown spider that builds tangled cobwebs in corners; harmless beneficial predator.',
    intro: "The common house spider is the tan-brown spider you most often see in corners of rooms, garages, and sheds — the one responsible for most of the cobwebs you spot. They're harmless to humans, build messy tangled webs to ambush flies and small insects, and are sedentary by nature. If you tolerate them, they help keep indoor flying pests down. If you don't, vacuum the webs and egg sacs and reduce indoor flying insect populations.",
    identify: '5–8 mm mottled tan-brown body with rounded abdomen and chevron pattern.',
    whereInNc: 'Universal across Triangle homes; one of the most-encountered indoor spiders.' },
  { slug: 'wolf-spider', name: 'Wolf Spider', scientific: 'Lycosidae family', category: 'spiders', size: '10–35 mm', threat: 'low',
    shortDesc: 'Robust hairy brown-grey spider that hunts on the ground instead of building webs; not medically significant.',
    intro: "Wolf spiders are the large hairy brown-grey spiders that startle you when they sprint across a basement floor or garage. They don't build webs — they're active hunters with excellent eyesight (a distinctive eye arrangement with two large forward-facing eyes). Females carry an egg sac attached to their spinnerets. Bites are uncommon and not medically significant, usually causing only localized redness and itching for 24 hours. Sealing cracks and reducing outdoor lighting helps keep them outside.",
    identify: '10–35 mm robust hairy brown-grey body; two large eyes facing forward; carries egg sac on spinnerets.',
    whereInNc: 'Common throughout the Triangle, especially in basements, garages, mulched landscapes, and leaf litter.' },

  // ----- BITING -----
  { slug: 'bed-bug', name: 'Bed Bug', scientific: 'Cimex lectularius', category: 'biting', size: '4–5 mm', threat: 'high', serviceSlug: 'general-pest-control',
    shortDesc: 'Flat reddish-brown blood feeders that hide in mattress seams; requires professional heat treatment.',
    intro: "Bed bugs are flat oval reddish-brown insects that feed on human blood — usually at night — and hide in the tiniest crevices of mattresses, headboards, baseboards, luggage, and upholstered furniture. They don't transmit known diseases, but the itchy welts, anxiety, and sleep loss they cause are real. Bed bugs can survive months without a meal, which is why DIY treatments usually fail. Professional heat treatment, mattress encasements, and thorough vacuuming are the proven approach.",
    identify: '4–5 mm flat oval reddish-brown body that swells and darkens after feeding.',
    whereInNc: 'Rising problem across the Triangle — especially in apartments, hotels, and homes after travel.' },
  { slug: 'tick', name: 'Deer Tick', scientific: 'Ixodes scapularis', category: 'biting', size: '2–3 mm', threat: 'high', serviceSlug: 'mosquitoes',
    shortDesc: 'Tiny reddish-brown tick with black legs; primary Lyme disease vector in the eastern US.',
    intro: "Deer ticks (also called black-legged ticks) are the primary vector of Lyme disease in the eastern US, along with anaplasmosis and babesiosis. They quest on tall grass and leaf litter, latch onto people or pets passing by, and slowly feed for days as they engorge. Prevention is everything: DEET or permethrin repellent, long sleeves and pants on hikes, prompt tick checks after coming inside, and treating yard edges if you live near woods.",
    identify: '2–3 mm flat oval reddish-brown body with distinctly black legs; engorges to grape-size when feeding.',
    whereInNc: "The Triangle is solidly in NC's Lyme range; expect ticks anywhere there's tall grass, leaf litter, or deer pressure." },

  // ----- OCCASIONAL INVADERS -----
  { slug: 'silverfish', name: 'Silverfish', scientific: 'Lepisma saccharinum', category: 'occasional', size: '12–19 mm', threat: 'low', serviceSlug: 'general-pest-control',
    shortDesc: 'Metallic silver teardrop-shaped insects that eat paper, glue, and starches in damp dark spaces.',
    intro: "Silverfish are the silver-grey teardrop-shaped insects you sometimes find in bathrooms, basements, attics, and behind wallpaper. They're nocturnal, surprisingly fast, and feed on starches, glue, paper, fabric, and dead skin — which means they can damage books, wallpaper, clothing, and dry goods over time. They're not a disease vector. The single most effective control is reducing humidity (dehumidifier in basements, fix bathroom ventilation) plus residual treatments in cracks.",
    identify: '12–19 mm metallic silver teardrop body with three long bristles at the rear.',
    whereInNc: 'Common in older Triangle homes with damp basements, crawl spaces, and poorly ventilated bathrooms.' },
  { slug: 'earwig', name: 'Earwig', scientific: 'Forficula auricularia', category: 'occasional', size: '12–25 mm', threat: 'low', serviceSlug: 'general-pest-control',
    shortDesc: 'Dark reddish-brown insects with rear pincers; nocturnal, harmless to humans, despite the old myth.',
    intro: "Earwigs are the small dark reddish-brown insects with the distinctive curved pincers (cerci) at their rear. Despite the old folk legend, they do NOT crawl into ears — that's pure myth. They're nocturnal omnivores that eat plants, insects, and decaying matter, and they can damage seedlings and soft fruit in gardens. Indoors they're a nuisance only. Reducing moisture and mulch right against the foundation, plus sealing entry points, keeps them outside where they belong.",
    identify: '12–25 mm dark reddish-brown body with distinctive curved pincers at the rear.',
    whereInNc: 'Very common in Triangle mulch beds, basements, and crawl spaces during wet weather.' },
  { slug: 'boxelder-bug', name: 'Boxelder Bug', scientific: 'Boisea trivittata', category: 'occasional', size: '11–14 mm', threat: 'low', serviceSlug: 'general-pest-control',
    shortDesc: 'Black with three red-orange thorax stripes; clusters on sunny walls in fall trying to overwinter inside.',
    intro: "Boxelder bugs are the striking black-and-red-orange bugs that gather in large numbers on sunny exterior walls in fall, looking for somewhere warm to overwinter. They feed on boxelder, maple, and ash trees — harmless plant feeders — but they're a nuisance pest when they cluster by the dozens and try to push inside through cracks. They can stain fabrics and curtains with droppings. The fix is sealing exterior cracks before fall and vacuuming any clusters that appear.",
    identify: '11–14 mm black body with three red-orange stripes on thorax and red wing veins.',
    whereInNc: "A predictable fall nuisance across Triangle neighborhoods with boxelder and maple trees." },
  { slug: 'stink-bug', name: 'Stink Bug (BMSB)', scientific: 'Halyomorpha halys', category: 'occasional', size: '12–17 mm', threat: 'medium', serviceSlug: 'general-pest-control',
    shortDesc: 'Shield-shaped mottled brown bug; major agricultural pest, indoor nuisance, releases pungent odor when crushed.',
    intro: "The brown marmorated stink bug (BMSB) is an invasive shield-shaped bug that has become a major nuisance across the eastern US. They feed on fruit and vegetable crops outdoors during summer, then cluster on sunny south-facing walls in fall and push inside walls, attics, and crevices to overwinter. When crushed they release a famously pungent odor — which is why you should vacuum them up instead. Seal cracks and exterior gaps before fall, and treat the perimeter.",
    identify: '12–17 mm shield-shaped mottled brown body with distinctive white bands on antennae and legs.',
    whereInNc: 'Major fall nuisance across the Triangle — particularly noticeable in homes near orchards and farmland.' },
  { slug: 'centipede', name: 'House Centipede', scientific: 'Scutigera coleoptrata', category: 'occasional', size: '25–50 mm', threat: 'low', serviceSlug: 'general-pest-control',
    shortDesc: 'Fast yellow-grey predator with 15 pairs of long banded legs; preys on roaches and silverfish.',
    intro: "House centipedes are the unsettling fast-moving yellow-grey arthropods with 15 pairs of long banded legs that you sometimes find in basements and bathrooms. As alarming as they look, they're actually beneficial predators that hunt roaches, silverfish, and spiders. They rarely bite humans, and if they do, the venom is mild. The real fix is reducing the prey they're chasing: control humidity, seal cracks, and treat the underlying pest population.",
    identify: '25–50 mm flattened yellow-grey body with 15 pairs of long banded legs.',
    whereInNc: 'Common in Triangle basements, crawl spaces, and damp bathrooms.' },
  { slug: 'millipede', name: 'Millipede', scientific: 'Diplopoda class', category: 'occasional', size: '25–100 mm', threat: 'low', serviceSlug: 'general-pest-control',
    shortDesc: 'Cylindrical dark brown segmented arthropod with two pairs of legs per segment; harmless detritivore.',
    intro: "Millipedes are the dark brown segmented arthropods that curl into a spiral when disturbed. They're slow-moving detritivores that eat decaying plant matter — completely harmless to humans, though they can secrete a mild skin irritant if handled directly. After heavy rain they sometimes migrate indoors in surprising numbers. The fix is reducing mulch and leaf litter against your foundation, sealing exterior cracks, and running a dehumidifier in basements.",
    identify: '25–100 mm cylindrical dark brown segmented body with two pairs of legs per segment.',
    whereInNc: "Common Triangle migration events after heavy rain, especially spring and fall." },
  { slug: 'cricket', name: 'House Cricket', scientific: 'Acheta domesticus', category: 'occasional', size: '16–21 mm', threat: 'low', serviceSlug: 'general-pest-control',
    shortDesc: 'Light yellow-brown crickets that chirp at night; chew fabric and paper, attracted to warmth.',
    intro: "House crickets are the light yellow-brown crickets that get inside during cooler weather and keep you up at night with rhythmic chirping (males rubbing their forewings together to attract females). They're attracted to warmth — furnaces, water heaters, appliances — and they can chew wool, cotton, silk, paper, and plant matter. Sealing cracks and crevices, reducing basement and crawl space humidity, and placing sticky traps near entry points usually solves the problem.",
    identify: '16–21 mm light yellow-brown body with long thread-like antennae, large jumping hind legs, and three dark bands on the head.',
    whereInNc: 'Common indoor invader across the Triangle in late summer and fall as nights cool off.' },

  // ----- WOOD-DESTROYING -----
  { slug: 'subterranean-termite', name: 'Subterranean Termite', scientific: 'Reticulitermes spp.', category: 'wood-destroying', size: '3–10 mm', threat: 'high', serviceSlug: 'termites',
    shortDesc: "The #1 wood-destroying pest in the US — colonies of millions silently consume structural timber.",
    intro: "Subterranean termites are the most economically destructive wood-destroying pest in the United States — responsible for billions in damage annually. Colonies of millions live in the soil, building characteristic mud tubes from ground level up into the wood of homes, where they silently consume cellulose 24/7. By the time you see damage, significant structural loss has usually occurred. Annual professional inspection + soil termiticide barrier or baiting system is the standard of care in North Carolina.",
    identify: '3–10 mm cream-white workers; soldiers have darker heads and large mandibles. Mud tubes on foundations are the #1 sign.',
    whereInNc: 'NC is in the high-pressure termite zone; the Triangle sees year-round termite activity.' },
  { slug: 'borer-beetle', name: 'Powderpost / Borer Beetle', scientific: 'Lyctus / Anobium spp.', category: 'wood-destroying', size: '2–7 mm', threat: 'high', serviceSlug: 'termites',
    shortDesc: 'Small reddish-brown beetles whose larvae tunnel through hardwood floors and structural timber for years.',
    intro: "Powderpost beetles and related borer beetles are small reddish-brown to black beetles whose larvae tunnel through hardwood for years before emerging as adults through tiny round exit holes. They damage hardwood floors, furniture, structural timber, attic rafters, and firewood. The tell-tale sign is fine powdery frass (sawdust) sifting out of those exit holes. Control combines moisture control, kiln-dried wood for repairs, borate treatments on bare wood, and professional fumigation for serious infestations.",
    identify: '2–7 mm elongated reddish-brown to black beetles; larvae are creamy C-shaped grubs.',
    whereInNc: 'Less common than termites in the Triangle but significant in older homes with original hardwood floors and exposed crawl-space timber.' },

  // ----- FABRIC & PANTRY -----
  { slug: 'clothes-moth', name: 'Clothes Moth', scientific: 'Tineola bisselliella', category: 'fabric-pantry', size: '6–8 mm', threat: 'medium', serviceSlug: 'general-pest-control',
    shortDesc: 'Small straw-yellow moth whose larvae chew irregular holes in wool, cashmere, silk, and fur.',
    intro: "Clothes moths are small, straw-yellow moths that avoid light — which is why they thrive undisturbed in the back of closets, dresser drawers, and attics. The adults don't actually feed; the damage comes from the cream-white larvae, which chew irregular holes through wool, cashmere, silk, fur, feathers, and even taxidermy. Vacuuming thoroughly, dry cleaning or freezing affected items, and using cedar blocks and pheromone traps are the proven control combo.",
    identify: '6–8 mm uniform straw-yellow body, narrow wings with golden hairs; avoids light.',
    whereInNc: 'A real risk in Triangle homes with stored woolens, vintage clothing, and rarely-opened closets.' },
  { slug: 'pantry-moth', name: 'Indian Meal Moth (Pantry Moth)', scientific: 'Plodia interpunctella', category: 'fabric-pantry', size: '8–10 mm', threat: 'medium', serviceSlug: 'general-pest-control',
    shortDesc: 'Small two-toned moth that contaminates flour, cereal, dried fruit, and pet food in pantries.',
    intro: "Indian meal moths — commonly called pantry moths — are the small two-toned moths (pale grey near the body, coppery-bronze at the wing tips) that flutter through your kitchen at night. The larvae spin silken webbing inside grain bags, flour, cereal, dried fruit, birdseed, and pet food, contaminating it with larvae and frass. Once they're established, you have to discard infested goods, deep-clean the pantry, switch to airtight containers, and use pheromone traps to catch surviving adults.",
    identify: '8–10 mm with two-tone wings: pale grey near the body, coppery-bronze at the wing tips.',
    whereInNc: 'Very common in Triangle pantries; often arrives hidden inside a single contaminated bag of birdseed or flour.' },

  // ----- GARDEN / OUTDOOR (informational only) -----
  { slug: 'grasshopper', name: 'Grasshopper', scientific: 'Caelifera suborder', category: 'garden', size: '25–75 mm', threat: 'low',
    shortDesc: 'Green or brown jumpers that chew garden plants and crops during high-population years.',
    intro: "Grasshoppers are the familiar large jumping insects of meadows, lawns, and agricultural fields. They feed on a wide variety of plants — leaves, stems, flowers — and can cause significant damage to gardens and crops during outbreak years. They're not a household pest, but if you garden in the Triangle, knowing how to recognize them and protect young plants with row covers matters.",
    identify: '25–75 mm green or brown body, short antennae, very large jumping hind legs.',
    whereInNc: 'Common in Triangle meadows, gardens, and farm edges; rarely a structural concern.' },
  { slug: 'locust', name: 'Locust', scientific: 'Locusta migratoria', category: 'garden', size: '35–60 mm', threat: 'low',
    shortDesc: 'Grasshopper that swarms into massive migratory flocks during outbreak years; not present in NC.',
    intro: "Locusts are grasshoppers that, under crowded conditions, transform into a 'gregarious phase' and form the massive migratory swarms famous from history. They're a devastating agricultural pest globally — a single swarm can devour tons of crops per day — but they're not present in North Carolina. Included here for identification only.",
    identify: '35–60 mm grasshopper-like body that shifts to bright yellow-brown in the gregarious phase.',
    whereInNc: 'Not present in NC. Native to Africa, Asia, and southern Europe.' },
  { slug: 'aphid', name: 'Aphid', scientific: 'Aphidoidea superfamily', category: 'garden', size: '1–4 mm', threat: 'low',
    shortDesc: 'Tiny soft pear-shaped sap-suckers on leaf undersides; tended by ants for their honeydew.',
    intro: "Aphids are the tiny soft-bodied pear-shaped insects you find clustered on the undersides of leaves and on new plant growth, sucking sap and secreting sticky honeydew. They reproduce asexually and explosively in spring — a single aphid can become hundreds in a week. They stunt plant growth, transmit plant viruses, and their honeydew grows sooty mold. Encourage ladybugs and lacewings, blast them off with water, or use insecticidal soap or neem oil.",
    identify: '1–4 mm pear-shaped soft body in green, black, or yellow; a pair of cornicles (small tubes) at the rear.',
    whereInNc: 'Universal Triangle garden pest from spring through fall.' },
  { slug: 'scale-insects', name: 'Scale Insects', scientific: 'Coccoidea superfamily', category: 'garden', size: '1–5 mm', threat: 'low',
    shortDesc: 'Immobile waxy bumps on stems and leaves that suck sap and produce honeydew like aphids.',
    intro: "Scale insects are weird little immobile bumps in tan, brown, white, or grey that you find permanently attached to plant stems, leaves (especially veins), and bark of ornamentals, citrus, and houseplants. They look like small scabs, but they're alive — piercing the plant and feeding on sap. They secrete honeydew or wax, cause yellowing leaves, branch dieback, and sooty mold. Horticultural oil, systemic insecticide, pruning heavily infested branches, and introducing beneficial ladybugs are the standard controls.",
    identify: '1–5 mm immobile bumps in tan, brown, white, or grey; look like small scabs on stems.',
    whereInNc: 'Common on Triangle ornamentals, especially azaleas, camellias, and houseplants brought outside in summer.' },
  { slug: 'borers', name: 'Wood Borers (Tree)', scientific: 'Wood-boring beetle larvae', category: 'garden', size: '6–14 mm adults', threat: 'high',
    shortDesc: 'Larvae of metallic green and bronze beetles that tunnel under bark, killing ash, fruit, and ornamental trees.',
    intro: "Wood borers are the larvae of metallic-colored beetles (like the emerald ash borer) that tunnel under tree bark, severing the nutrient flow and killing trees from the inside out. Adults emerge through D-shaped exit holes. They primarily attack stressed, declining, or recently planted trees — including ash, birch, locust, fruit trees, and many ornamentals. Keeping trees healthy, prompt removal of infested wood, and systemic injections for high-value trees are the main defenses.",
    identify: 'Adults 6–14 mm shiny metallic beetles; D-shaped exit holes in bark; serpentine galleries under bark.',
    whereInNc: 'Emerald ash borer is established in NC and killing ash trees across the Triangle.' },
  { slug: 'leaf-chewers', name: 'Leaf Chewers', scientific: 'Caterpillars / beetles / sawflies', category: 'garden', size: 'Varies', threat: 'low',
    shortDesc: 'Caterpillars, beetle larvae, and sawflies that chew irregular holes in garden and ornamental leaves.',
    intro: "Leaf chewers is a catch-all for caterpillars, leaf-feeding beetles, and sawfly larvae that visibly damage plant leaves — irregular holes, notched edges, skeletonized leaves. Most cause only cosmetic damage, but heavy populations weaken plants, reduce yields, and create entry points for plant diseases. Hand-picking, row covers, Bt (Bacillus thuringiensis) for caterpillars, and targeted insecticides for serious outbreaks are the typical responses.",
    identify: 'Visible feeding damage: irregular holes, notched leaf edges, or skeletonized leaves.',
    whereInNc: 'Universal across Triangle vegetable gardens and ornamental beds.' },
  { slug: 'beetles', name: 'Beetles (Coleoptera)', scientific: 'Coleoptera order', category: 'garden', size: '12–25 mm', threat: 'low', serviceSlug: 'general-pest-control',
    shortDesc: 'Largest insect order — huge variety; some are pantry pests, some lawn pests, some structural.',
    intro: "Beetles are the largest order of insects on Earth — over 350,000 known species — and they fill every ecological niche imaginable. Some beetles are pantry pests (flour beetles, grain weevils), some are lawn pests (Japanese beetle grubs), some are structural (powderpost beetles), and some are beneficial (ladybugs, ground beetles). Effective control starts with correct identification: get the species first, then target it with the appropriate bait, beneficial nematodes, sanitation, or perimeter spray.",
    identify: '12–25 mm hardened wing covers (elytra); huge variety of shapes, colors, sizes.',
    whereInNc: 'Universally present in the Triangle; identification is key to deciding whether action is needed.' }
]

// ============================================================================
// CATEGORY -> PEST INDEX
// ============================================================================
const pestsByCategory = (cat: PestCategory) => pests.filter(p => p.category === cat)
const findService = (slug?: string) => slug ? services.find(s => s.slug === slug) : undefined

const threatColors: Record<Pest['threat'], { bg: string; text: string; label: string }> = {
  low:    { bg: 'bg-emerald-50',  text: 'text-emerald-700', label: 'Low concern' },
  medium: { bg: 'bg-amber-50',    text: 'text-amber-700',   label: 'Moderate concern' },
  high:   { bg: 'bg-rose-50',     text: 'text-rose-700',    label: 'High concern' }
}

// ============================================================================
// INDIVIDUAL PEST PAGE: /pests/:slug
// ============================================================================
const renderPestPage = (pest: Pest, allPests: Pest[]) => {
  const service = findService(pest.serviceSlug)
  const sameCategory = allPests.filter(p => p.category === pest.category && p.slug !== pest.slug).slice(0, 6)
  const threat = threatColors[pest.threat]
  const cat = pestCategories.find(c => c.id === pest.category)!
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${pest.name} (${pest.scientific}) — Identification &amp; Control | Castle Exterminators</title>
  <meta name="description" content="${pest.name} identification, habitat, behavior, and control. ${pest.shortDesc} Free inspection across Durham &amp; the Triangle. Castle Exterminators." />
  <meta name="keywords" content="${pest.name.toLowerCase()}, ${pest.scientific.toLowerCase()}, ${pest.name.toLowerCase()} identification, ${pest.name.toLowerCase()} in NC, ${pest.name.toLowerCase()} Durham, pest control" />
  <meta name="theme-color" content="#1F6F4A" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="https://www.castleexterminators.co/pests/${pest.slug}" />
  <link rel="icon" type="image/x-icon" href="/static/favicon.ico" /><link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" /><link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" /><link rel="manifest" href="/static/site.webmanifest" />
  <meta property="og:site_name" content="Castle Exterminators" />
  <meta property="og:title" content="${pest.name} (${pest.scientific}) — Identification &amp; Control" />
  <meta property="og:description" content="${pest.shortDesc}" />
  <meta property="og:url" content="https://www.castleexterminators.co/pests/${pest.slug}" />
  <meta property="og:image" content="https://www.castleexterminators.co/static/pests/${pest.slug}.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1600" />
  <meta property="og:image:alt" content="${pest.name} identification infographic" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://www.castleexterminators.co/static/pests/${pest.slug}.webp" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${pest.name} (${pest.scientific}) — Identification & Control",
    "description": "${pest.shortDesc.replace(/"/g,'\\"')}",
    "image": "https://www.castleexterminators.co/static/pests/${pest.slug}.webp",
    "author": { "@type": "Organization", "name": "Castle Exterminators" },
    "publisher": {
      "@type": "Organization",
      "name": "Castle Exterminators",
      "logo": { "@type": "ImageObject", "url": "https://www.castleexterminators.co/static/castle-logo.png" }
    },
    "mainEntityOfPage": "https://www.castleexterminators.co/pests/${pest.slug}"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.castleexterminators.co/" },
      { "@type": "ListItem", "position": 2, "name": "Pest Library", "item": "https://www.castleexterminators.co/pests" },
      { "@type": "ListItem", "position": 3, "name": "${pest.name}", "item": "https://www.castleexterminators.co/pests/${pest.slug}" }
    ]
  }
  </script>

  <link rel="stylesheet" href="/static/tailwind.css" />
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    html { scroll-behavior: smooth; }
    body { font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif; color: #1E2A24; background: #FBF8F1; }
    h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.015em; font-variation-settings: "opsz" 144, "SOFT" 50; }
    .font-display { font-family: 'Fraunces', Georgia, serif; font-variation-settings: "opsz" 144, "SOFT" 50; }
    .serif-italic { font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 500; }
  </style>
</head>
<body class="bg-brand-bone">

  <!-- HEADER -->
  <header class="bg-white border-b border-slate-200 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2.5">
        <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-9 w-auto" />
      </a>
      <nav class="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
        <a href="/" class="hover:text-brand-green">Home</a>
        <a href="/#services" class="hover:text-brand-green">Services</a>
        <a href="/pests" class="text-brand-green">Pest Library</a>
        <a href="/about" class="hover:text-brand-green">About</a>
        <a href="/#contact" class="hover:text-brand-green">Contact</a>
      </nav>
      <a href="/#contact" class="hidden sm:inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm px-4 py-2 rounded-xl transition shadow-card">
        <i class="fa-solid fa-calendar-check"></i> Free Inspection
      </a>
    </div>
  </header>

  <!-- BREADCRUMB -->
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-xs text-slate-500" aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center gap-1.5">
      <li><a href="/" class="hover:text-brand-green">Home</a></li>
      <li class="text-slate-400"><i class="fa-solid fa-chevron-right text-[8px]"></i></li>
      <li><a href="/pests" class="hover:text-brand-green">Pest Library</a></li>
      <li class="text-slate-400"><i class="fa-solid fa-chevron-right text-[8px]"></i></li>
      <li class="text-slate-700 font-semibold">${pest.name}</li>
    </ol>
  </nav>

  <!-- HERO -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="grid lg:grid-cols-12 gap-10">

      <!-- LEFT: Infographic -->
      <div class="lg:col-span-7">
        <div class="bg-white rounded-3xl border border-slate-200 shadow-card p-4 sm:p-6">
          <img src="/static/pests/${pest.slug}.webp"
               alt="${pest.name} (${pest.scientific}) identification infographic showing size, habitat, behavior, risk, and control"
               class="w-full h-auto rounded-2xl"
               loading="eager"
               fetchpriority="high"
               width="768" height="1024" />
        </div>
      </div>

      <!-- RIGHT: Content -->
      <article class="lg:col-span-5">
        <div class="inline-flex items-center gap-2 ${threat.bg} ${threat.text} text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
          <i class="fa-solid fa-circle text-[8px]"></i> ${threat.label}
        </div>

        <h1 class="font-display font-extrabold text-4xl sm:text-5xl leading-tight text-brand-navy mb-2">${pest.name}</h1>
        <p class="serif-italic text-xl text-slate-500 mb-6">${pest.scientific}</p>

        <div class="grid grid-cols-2 gap-3 mb-6">
          <div class="bg-white border border-slate-200 rounded-xl px-4 py-3">
            <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Size</div>
            <div class="font-semibold text-brand-navy text-sm">${pest.size}</div>
          </div>
          <div class="bg-white border border-slate-200 rounded-xl px-4 py-3">
            <div class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Category</div>
            <div class="font-semibold text-brand-navy text-sm">${cat.name}</div>
          </div>
        </div>

        <h2 class="font-display font-bold text-lg text-brand-navy mb-2">About the ${pest.name.toLowerCase()}</h2>
        <p class="text-slate-700 leading-relaxed mb-5">${pest.intro}</p>

        <div class="bg-brand-cream border border-brand-green/15 rounded-xl p-5 mb-5">
          <div class="flex items-start gap-3">
            <span class="w-9 h-9 bg-brand-green/15 text-brand-green rounded-lg flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-magnifying-glass"></i></span>
            <div>
              <h3 class="font-bold text-sm text-brand-navy mb-1">Quick ID</h3>
              <p class="text-sm text-slate-700 leading-relaxed">${pest.identify}</p>
            </div>
          </div>
        </div>

        <div class="bg-white border border-slate-200 rounded-xl p-5 mb-6">
          <div class="flex items-start gap-3">
            <span class="w-9 h-9 bg-brand-green/15 text-brand-green rounded-lg flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-location-dot"></i></span>
            <div>
              <h3 class="font-bold text-sm text-brand-navy mb-1">In the Triangle</h3>
              <p class="text-sm text-slate-700 leading-relaxed">${pest.whereInNc}</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-gradient-to-br from-brand-green to-brand-navy-dark text-white rounded-2xl p-6 shadow-card">
          <h3 class="font-display font-extrabold text-2xl mb-2 leading-tight">Think you have ${pest.name.toLowerCase()}s?</h3>
          <p class="text-sm opacity-90 mb-5">Free inspection from a licensed Castle Exterminators technician — Durham, Chapel Hill, Raleigh, Cary &amp; the Triangle. We'll confirm the species and recommend a treatment plan.</p>
          <a href="/#contact" class="block text-center bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-xl transition shadow-card mb-3">
            <i class="fa-solid fa-calendar-check mr-2"></i> Request Free Inspection
          </a>
          <a href="tel:+19196068686" class="block text-center bg-white/15 hover:bg-white/25 text-white font-bold py-3 px-4 rounded-xl transition backdrop-blur border border-white/25">
            <i class="fa-solid fa-phone-volume mr-2"></i> (919) 606-8686
          </a>
        </div>

        ${service ? `
        <div class="mt-5 bg-white border border-slate-200 rounded-xl p-5">
          <div class="text-[10px] font-bold uppercase tracking-wider text-brand-green mb-2">Related service</div>
          <a href="/services/${service.slug}" class="group flex items-center gap-3 hover:text-brand-green transition">
            <span class="w-10 h-10 bg-brand-green/15 text-brand-green rounded-lg flex items-center justify-center"><i class="fa-solid ${service.icon}"></i></span>
            <span class="flex-1">
              <span class="block font-bold text-brand-navy group-hover:text-brand-green">${service.name}</span>
              <span class="block text-xs text-slate-500">${service.tagline}</span>
            </span>
            <i class="fa-solid fa-arrow-right text-xs text-brand-green"></i>
          </a>
        </div>` : ''}
      </article>
    </div>

    <!-- SAME-CATEGORY CROSS-LINKS -->
    ${sameCategory.length ? `
    <section class="mt-16 pt-10 border-t border-slate-200">
      <div class="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-brand-green mb-2">Related pests</p>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl text-brand-navy">More in ${cat.name.toLowerCase()}</h2>
        </div>
        <a href="/pests" class="text-sm font-bold text-brand-green hover:text-brand-green-dark inline-flex items-center gap-1.5">Browse all pests <i class="fa-solid fa-arrow-right text-xs"></i></a>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        ${sameCategory.map(p => `
          <a href="/pests/${p.slug}" class="group bg-white border border-slate-200 hover:border-brand-green/40 hover:shadow-card rounded-2xl p-4 transition flex gap-4 items-center">
            <img src="/static/pests/${p.slug}.webp" alt="${p.name}" class="w-20 h-20 object-cover rounded-xl flex-shrink-0" loading="lazy" width="120" height="120" />
            <div class="flex-1 min-w-0">
              <div class="font-bold text-brand-navy group-hover:text-brand-green transition truncate">${p.name}</div>
              <div class="serif-italic text-xs text-slate-500 truncate">${p.scientific}</div>
              <div class="text-xs text-slate-600 mt-1 line-clamp-2">${p.shortDesc}</div>
            </div>
          </a>`).join('')}
      </div>
    </section>` : ''}
  </main>

  <!-- FOOTER -->
  <footer class="bg-brand-navy-dark text-slate-300 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-5 gap-8">
      <div class="md:col-span-2">
        <span class="inline-block bg-white rounded-xl p-2 shadow-card mb-4">
          <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-9 w-auto" />
        </span>
        <p class="text-sm leading-relaxed max-w-md">Durham's family-owned pest control. Protecting homes across Durham, NC and surrounding communities since 2017 — with eco-friendly, family-safe treatments.</p>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Services</h4>
        <ul class="space-y-2 text-sm">
          ${services.slice(0, 6).map(o => `<li><a href="/services/${o.slug}" class="hover:text-white">${o.name}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Pest Library</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/pests" class="hover:text-white">All pests</a></li>
          <li><a href="/pests#ants" class="hover:text-white">Ants</a></li>
          <li><a href="/pests#roaches" class="hover:text-white">Cockroaches</a></li>
          <li><a href="/pests#rodents" class="hover:text-white">Rodents</a></li>
          <li><a href="/pests#spiders" class="hover:text-white">Spiders</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Service Areas</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/locations/downtown-durham" class="hover:text-white">Downtown Durham</a></li>
          <li><a href="/locations/chapel-hill" class="hover:text-white">Chapel Hill</a></li>
          <li><a href="/locations/raleigh" class="hover:text-white">Raleigh</a></li>
          <li><a href="/locations/cary" class="hover:text-white">Cary</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
        <span>&copy; ${new Date().getFullYear()} Castle Exterminators. All rights reserved.</span>
        <span>Licensed &amp; Insured in North Carolina</span>
      </div>
    </div>
  </footer>
</body>
</html>`
}

// ============================================================================
// PEST LIBRARY HUB: /pests
// ============================================================================
const renderPestLibraryPage = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Pest Library — Identify ${pests.length}+ Common Pests | Castle Exterminators</title>
  <meta name="description" content="Identify ${pests.length}+ common pests with our visual pest library. Photos, scientific names, habitat, behavior, and control tips for ants, roaches, rodents, spiders, termites &amp; more. Durham, NC." />
  <meta name="keywords" content="pest identification, pest library, pest guide, what bug is this, pest control Durham NC, identify ants, identify roaches, identify spiders" />
  <meta name="theme-color" content="#1F6F4A" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="https://www.castleexterminators.co/pests" />
  <link rel="icon" type="image/x-icon" href="/static/favicon.ico" /><link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" /><link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" /><link rel="manifest" href="/static/site.webmanifest" />
  <meta property="og:site_name" content="Castle Exterminators" />
  <meta property="og:title" content="Pest Library — Identify ${pests.length}+ Common Pests" />
  <meta property="og:description" content="Identify ${pests.length}+ common pests with our visual pest library. Photos, scientific names, habitat, behavior, and control tips." />
  <meta property="og:url" content="https://www.castleexterminators.co/pests" />
  <meta property="og:image" content="https://www.castleexterminators.co/static/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Pest Library",
    "description": "Visual identification guide to ${pests.length}+ common pests found in Durham, NC and the Triangle.",
    "url": "https://www.castleexterminators.co/pests",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": ${pests.length},
      "itemListElement": [
        ${pests.map((p, i) => `{ "@type": "ListItem", "position": ${i + 1}, "url": "https://www.castleexterminators.co/pests/${p.slug}", "name": "${p.name}" }`).join(',\n        ')}
      ]
    }
  }
  </script>

  <link rel="stylesheet" href="/static/tailwind.css" />
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    html { scroll-behavior: smooth; }
    body { font-family: 'Plus Jakarta Sans', Inter, system-ui, sans-serif; color: #1E2A24; background: #FBF8F1; }
    h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; letter-spacing: -0.015em; font-variation-settings: "opsz" 144, "SOFT" 50; }
    .font-display { font-family: 'Fraunces', Georgia, serif; font-variation-settings: "opsz" 144, "SOFT" 50; }
    .serif-italic { font-family: 'Fraunces', Georgia, serif; font-style: italic; font-weight: 500; }
    .pest-card img { transition: transform .4s ease; }
    .pest-card:hover img { transform: scale(1.03); }
    /* Search */
    .pest-card[data-hidden="true"] { display: none; }
  </style>
</head>
<body class="bg-brand-bone">

  <!-- HEADER -->
  <header class="bg-white border-b border-slate-200 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2.5">
        <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-9 w-auto" />
      </a>
      <nav class="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
        <a href="/" class="hover:text-brand-green">Home</a>
        <a href="/#services" class="hover:text-brand-green">Services</a>
        <a href="/pests" class="text-brand-green">Pest Library</a>
        <a href="/about" class="hover:text-brand-green">About</a>
        <a href="/#contact" class="hover:text-brand-green">Contact</a>
      </nav>
      <a href="/#contact" class="hidden sm:inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm px-4 py-2 rounded-xl transition shadow-card">
        <i class="fa-solid fa-calendar-check"></i> Free Inspection
      </a>
    </div>
  </header>

  <!-- HERO -->
  <section class="bg-gradient-to-br from-brand-green via-brand-navy-dark to-brand-navy-dark text-white py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="text-xs text-white/60 mb-4" aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center gap-1.5">
          <li><a href="/" class="hover:text-white">Home</a></li>
          <li><i class="fa-solid fa-chevron-right text-[8px]"></i></li>
          <li class="text-white font-semibold">Pest Library</li>
        </ol>
      </nav>
      <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-leaf mb-3">Pest Identification Library</p>
      <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 text-white">What bug is that?</h1>
      <p class="text-lg sm:text-xl text-white/85 max-w-3xl leading-relaxed mb-8">A visual guide to ${pests.length}+ pests we encounter across Durham, Chapel Hill, Raleigh, and the Triangle. Photos, scientific names, habits, threat levels &mdash; and what to do about each one.</p>

      <!-- Search -->
      <div class="max-w-xl">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
          <input id="pest-search" type="search" placeholder="Search by name (e.g. roach, ant, spider)…"
                 class="w-full pl-11 pr-4 py-3.5 rounded-2xl border-0 bg-white text-brand-navy placeholder:text-slate-400 focus:ring-4 focus:ring-brand-leaf/40 focus:outline-none shadow-card" />
        </div>
        <p id="pest-search-empty" class="text-sm text-white/70 mt-3 hidden">No pests match — try a different search.</p>
      </div>
    </div>
  </section>

  <!-- CATEGORY NAV -->
  <nav class="sticky top-[60px] z-30 bg-brand-bone/95 backdrop-blur border-b border-slate-200 py-3">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 overflow-x-auto scrollbar-hide">
      ${pestCategories.map(c => `<a href="#${c.id}" class="flex-shrink-0 inline-flex items-center gap-2 bg-white hover:bg-brand-green hover:text-white border border-slate-200 hover:border-brand-green text-sm font-semibold text-brand-navy px-4 py-2 rounded-full transition"><i class="fa-solid ${c.icon} text-xs"></i> ${c.name} <span class="text-xs opacity-60">${pestsByCategory(c.id).length}</span></a>`).join('')}
    </div>
  </nav>

  <!-- CATEGORIES & GRID -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    ${pestCategories.map(cat => {
      const catPests = pestsByCategory(cat.id)
      if (catPests.length === 0) return ''
      return `
      <section id="${cat.id}" class="mb-16 scroll-mt-32">
        <div class="flex items-center gap-3 mb-2">
          <span class="w-10 h-10 bg-brand-green/15 text-brand-green rounded-xl flex items-center justify-center"><i class="fa-solid ${cat.icon}"></i></span>
          <h2 class="font-display font-extrabold text-3xl text-brand-navy">${cat.name}</h2>
          <span class="text-sm text-slate-500 font-semibold">${catPests.length} ${catPests.length === 1 ? 'pest' : 'pests'}</span>
        </div>
        <p class="text-slate-600 mb-6 max-w-3xl">${cat.description}</p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          ${catPests.map(p => {
            const t = threatColors[p.threat]
            return `
            <a href="/pests/${p.slug}" class="pest-card group block bg-white border border-slate-200 hover:border-brand-green/40 hover:shadow-card rounded-2xl overflow-hidden transition"
               data-name="${p.name.toLowerCase()}" data-scientific="${p.scientific.toLowerCase()}" data-category="${p.category}">
              <div class="aspect-[3/4] bg-brand-cream overflow-hidden">
                <img src="/static/pests/${p.slug}.webp" alt="${p.name} identification" class="w-full h-full object-cover" loading="lazy" width="400" height="533" />
              </div>
              <div class="p-4">
                <div class="flex items-center gap-2 mb-1.5">
                  <span class="inline-block w-2 h-2 rounded-full ${p.threat === 'high' ? 'bg-rose-500' : p.threat === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'}"></span>
                  <span class="text-[10px] font-bold uppercase tracking-wider ${t.text}">${t.label}</span>
                </div>
                <div class="font-bold text-brand-navy group-hover:text-brand-green transition leading-tight">${p.name}</div>
                <div class="serif-italic text-xs text-slate-500 mt-0.5 truncate">${p.scientific}</div>
                <div class="text-xs text-slate-600 mt-2 line-clamp-2">${p.shortDesc}</div>
              </div>
            </a>`
          }).join('')}
        </div>
      </section>`
    }).join('')}

    <!-- Final CTA -->
    <section class="mt-20 bg-gradient-to-br from-brand-green to-brand-navy-dark text-white rounded-3xl p-8 sm:p-12">
      <div class="max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand-leaf mb-3">Can't ID it?</p>
        <h2 class="font-display font-extrabold text-3xl sm:text-4xl mb-4 leading-tight">Send us a photo &mdash; we'll identify it free.</h2>
        <p class="text-lg opacity-90 mb-7">Castle Exterminators is family-owned and based in Durham. We've been identifying and treating Triangle pests since 2017. Get a free in-person inspection or just text us a clear photo.</p>
        <div class="flex flex-wrap gap-3">
          <a href="/#contact" class="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-6 py-3.5 rounded-xl transition shadow-card">
            <i class="fa-solid fa-calendar-check"></i> Request Free Inspection
          </a>
          <a href="tel:+19196068686" class="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-xl transition backdrop-blur border border-white/25">
            <i class="fa-solid fa-phone-volume"></i> (919) 606-8686
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="bg-brand-navy-dark text-slate-300 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-5 gap-8">
      <div class="md:col-span-2">
        <span class="inline-block bg-white rounded-xl p-2 shadow-card mb-4">
          <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-9 w-auto" />
        </span>
        <p class="text-sm leading-relaxed max-w-md">Durham's family-owned pest control. Protecting homes across Durham, NC and surrounding communities since 2017 &mdash; with eco-friendly, family-safe treatments.</p>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Services</h4>
        <ul class="space-y-2 text-sm">
          ${services.slice(0, 6).map(o => `<li><a href="/services/${o.slug}" class="hover:text-white">${o.name}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Pest Library</h4>
        <ul class="space-y-2 text-sm">
          ${pestCategories.slice(0, 5).map(c => `<li><a href="/pests#${c.id}" class="hover:text-white">${c.name}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Service Areas</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="/locations/downtown-durham" class="hover:text-white">Downtown Durham</a></li>
          <li><a href="/locations/chapel-hill" class="hover:text-white">Chapel Hill</a></li>
          <li><a href="/locations/raleigh" class="hover:text-white">Raleigh</a></li>
          <li><a href="/locations/cary" class="hover:text-white">Cary</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
        <span>&copy; ${new Date().getFullYear()} Castle Exterminators. All rights reserved.</span>
        <span>Licensed &amp; Insured in North Carolina</span>
      </div>
    </div>
  </footer>

  <script>
    // Pest library search — filters cards live based on name/scientific.
    (function() {
      const input = document.getElementById('pest-search');
      const empty = document.getElementById('pest-search-empty');
      if (!input) return;
      const cards = Array.from(document.querySelectorAll('.pest-card'));
      const sections = Array.from(document.querySelectorAll('section[id]'));
      input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        let anyVisible = false;
        cards.forEach(c => {
          const name = c.dataset.name || '';
          const sci = c.dataset.scientific || '';
          const cat = c.dataset.category || '';
          const hit = !q || name.includes(q) || sci.includes(q) || cat.includes(q);
          c.dataset.hidden = hit ? 'false' : 'true';
          if (hit) anyVisible = true;
        });
        // Hide sections that have no visible pests
        sections.forEach(s => {
          const visible = s.querySelectorAll('.pest-card[data-hidden="false"]').length;
          s.style.display = visible === 0 ? 'none' : '';
        });
        empty.classList.toggle('hidden', anyVisible);
      });
    })();
  </script>
</body>
</html>`

// ============================================================================
// ROUTES
// ============================================================================
app.get('/pests', (c) => c.html(renderPestLibraryPage()))
pests.forEach(p => {
  app.get(`/pests/${p.slug}`, (c) => c.html(renderPestPage(p, pests)))
})



// ---------------------------------------------------------------------------
// SEO: robots.txt — allows all crawlers and points them to the sitemap
// ---------------------------------------------------------------------------
app.get('/robots.txt', (c) => {
  const body = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.castleexterminators.co/sitemap.xml
`
  return c.text(body, 200, { 'Content-Type': 'text/plain; charset=utf-8' })
})

// ---------------------------------------------------------------------------
// SEO: sitemap.xml — homepage + every service detail page
// ---------------------------------------------------------------------------
app.get('/sitemap.xml', (c) => {
  const today = new Date().toISOString().split('T')[0]
  const urls = [
    { loc: 'https://www.castleexterminators.co/',           priority: '1.0', changefreq: 'weekly' },
    { loc: 'https://www.castleexterminators.co/about',      priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://www.castleexterminators.co/pests',      priority: '0.8', changefreq: 'monthly' },
    ...services.map(s => ({
      loc: `https://www.castleexterminators.co/services/${s.slug}`,
      priority: '0.9',
      changefreq: 'monthly'
    })),
    ...locations.map(l => ({
      loc: `https://www.castleexterminators.co/locations/${l.slug}`,
      priority: '0.8',
      changefreq: 'monthly'
    })),
    ...pests.map(p => ({
      loc: `https://www.castleexterminators.co/pests/${p.slug}`,
      priority: '0.7',
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

// ---------------------------------------------------------------------------
// SEO: IndexNow — let Bing, Yandex, and other engines discover updates quickly.
// Key file must be served at /{key}.txt so search engines can verify ownership.
// ---------------------------------------------------------------------------
const INDEXNOW_KEY = 'af93643ffe9c72db168e469d05a122a1'
app.get(`/${INDEXNOW_KEY}.txt`, (c) => c.text(INDEXNOW_KEY, 200, { 'Content-Type': 'text/plain; charset=utf-8' }))

// Manual ping endpoint — visit /api/indexnow-ping to submit all URLs to IndexNow.
// Safe to call anytime; IndexNow rate-limits and dedupes on their side.
app.get('/api/indexnow-ping', async (c) => {
  const urlList = [
    'https://www.castleexterminators.co/',
    'https://www.castleexterminators.co/about',
    ...services.map(s => `https://www.castleexterminators.co/services/${s.slug}`),
    ...locations.map(l => `https://www.castleexterminators.co/locations/${l.slug}`)
  ]
  try {
    const res = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'www.castleexterminators.co',
        key: INDEXNOW_KEY,
        keyLocation: `https://www.castleexterminators.co/${INDEXNOW_KEY}.txt`,
        urlList
      })
    })
    return c.json({ ok: res.ok, status: res.status, submitted: urlList.length })
  } catch (e: any) {
    return c.json({ ok: false, error: String(e?.message || e) }, 500)
  }
})

export default app
