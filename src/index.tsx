import { Hono } from 'hono'

const app = new Hono()

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Castle Exterminators | Trusted Pest Control in Durham, NC | Free Inspection</title>
    <meta name="description" content="Castle Exterminators — family-owned pest control in Durham, NC. We protect homes from termites, ants, roaches, mice, mosquitoes, bed bugs & more with eco-friendly, family-safe treatments. Free inspection — call (919) 606-6866.">
    <meta name="theme-color" content="#067133">
    <link rel="canonical" href="https://www.castleexterminators.co/">

    <!-- Open Graph -->
    <meta property="og:title" content="Castle Exterminators | Pest Control in Durham, NC">
    <meta property="og:description" content="Family-owned, eco-friendly pest control in Durham, NC. Free inspection. Call (919) 606-6866.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="/static/castle-logo.png">
    <meta property="og:locale" content="en_US">

    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏰</text></svg>">

    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                green: '#067133',
                'green-dark': '#045724',
                'green-light': '#3CA862',
                navy: '#1B2A4A',
                'navy-dark': '#0F1A30',
                orange: '#F4A261',
                'orange-dark': '#E08A3C',
                cream: '#FAF7F2',
              }
            },
            fontFamily: {
              display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
              body: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
              'card': '0 10px 30px -10px rgba(27,42,74,0.15)',
              'cta': '0 12px 30px -8px rgba(244,162,97,0.55)',
            }
          }
        }
      }
    </script>

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">

    <style>
      html { scroll-behavior: smooth; scroll-padding-top: 80px; }
      body { font-family: 'Inter', system-ui, sans-serif; color: #1B2A4A; }
      h1, h2, h3, h4 { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; letter-spacing: -0.02em; }

      /* ---------------------------------------------------------------------------
         HERO — animated gradient mesh (Haikei-style) + floating blob shapes
         --------------------------------------------------------------------------- */
      /* Hero mesh tuned warmer to match Castle Exterminators' dusk/amber aesthetic */
      .hero-mesh {
        position: relative;
        background:
          radial-gradient(900px 600px at 15% 20%, rgba(60,168,98,0.30) 0%, transparent 60%),
          radial-gradient(700px 500px at 85% 75%, rgba(244,162,97,0.34) 0%, transparent 60%),
          radial-gradient(600px 400px at 60% 40%, rgba(244,162,97,0.18) 0%, transparent 65%),
          linear-gradient(135deg, #0F1A30 0%, #1B2A4A 45%, #045724 100%);
        background-size: 200% 200%, 200% 200%, 200% 200%, 100% 100%;
        animation: meshShift 22s ease-in-out infinite alternate;
      }
      @keyframes meshShift {
        0%   { background-position: 0% 0%, 100% 100%, 50% 50%, 0% 0%; }
        100% { background-position: 100% 50%, 0% 0%, 30% 70%, 0% 0%; }
      }
      .hero-blob {
        position: absolute; border-radius: 50%; filter: blur(70px); opacity: .35; pointer-events: none;
        will-change: transform;
      }
      .hero-blob.b1 { width: 320px; height: 320px; background: #3CA862; top: -80px; left: -60px; animation: floatA 14s ease-in-out infinite; }
      .hero-blob.b2 { width: 380px; height: 380px; background: #F4A261; bottom: -120px; right: -80px; animation: floatB 18s ease-in-out infinite; }
      .hero-blob.b3 { width: 220px; height: 220px; background: #F4A261; top: 30%; right: 20%; opacity: .22; animation: floatA 20s ease-in-out infinite reverse; }
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

      @keyframes softPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(244,162,97,.55); } 50% { box-shadow: 0 0 0 18px rgba(244,162,97,0); } }
      .pulse { animation: softPulse 2.6s ease-out infinite; }

      /* ---------------------------------------------------------------------------
         SERVICE CARDS — Hover.css "Float Shadow" + subtle glassmorphism on hover
         --------------------------------------------------------------------------- */
      .service-card { transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s ease, border-color .3s ease, background .3s ease; position: relative; }
      .service-card::after {
        content: ''; position: absolute; left: 10%; right: 10%; bottom: -8px; height: 18px;
        background: radial-gradient(ellipse at center, rgba(27,42,74,.18), transparent 70%);
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
        background: #FAF7F2;
        box-shadow: 8px 8px 20px rgba(174,170,160,.45), -8px -8px 20px #ffffff;
        transition: box-shadow .35s ease, transform .35s ease;
      }
      .neumo-card:hover {
        box-shadow: inset 6px 6px 14px rgba(174,170,160,.4), inset -6px -6px 14px #ffffff;
        transform: translateY(-2px);
      }

      /* ---------------------------------------------------------------------------
         PROCESS — animated connector line (Codrops style)
         --------------------------------------------------------------------------- */
      .process-wrap { position: relative; }
      .process-line {
        position: absolute; left: 0; right: 0; top: 36px; height: 2px;
        background: linear-gradient(90deg, transparent, #2D6A4F 15%, #F4A261 50%, #2D6A4F 85%, transparent);
        transform-origin: left center; transform: scaleX(0); transition: transform 1.4s cubic-bezier(.22,1,.36,1) .2s;
        z-index: 0;
      }
      .process-line.in { transform: scaleX(1); }
      @media (max-width: 1023px) { .process-line { display: none; } }
      .process-step { position: relative; z-index: 1; transition: transform .35s ease, box-shadow .35s ease; }
      .process-step:hover { transform: translateY(-4px); box-shadow: 0 14px 34px -12px rgba(27,42,74,.22); }

      /* ---------------------------------------------------------------------------
         TESTIMONIALS — glassmorphism cards over animated mesh backdrop
         --------------------------------------------------------------------------- */
      .testi-mesh {
        background:
          radial-gradient(700px 500px at 20% 30%, rgba(60,168,98,.22) 0%, transparent 60%),
          radial-gradient(600px 500px at 80% 70%, rgba(244,162,97,.22) 0%, transparent 60%),
          linear-gradient(135deg, #0F1A30 0%, #1B2A4A 100%);
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
      details[open] summary .chev { transform: rotate(180deg); background-color: rgba(45,106,79,.18); }
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
      .stat-card:hover .stat-num { color: #1F4F3A; }

      /* ---------------------------------------------------------------------------
         FORM CTA card — soft sheen sweep on hover
         --------------------------------------------------------------------------- */
      #gorilladesk-contact-form { position: relative; overflow: hidden; }
      #gorilladesk-contact-form::before {
        content: ''; position: absolute; inset: -2px;
        background: conic-gradient(from 0deg, transparent 0deg, rgba(45,106,79,.25) 60deg, transparent 120deg, transparent 240deg, rgba(244,162,97,.25) 300deg, transparent 360deg);
        animation: ringRotate 16s linear infinite; z-index: 0; opacity: .35;
      }
      #gorilladesk-contact-form > * { position: relative; z-index: 1; }
      @keyframes ringRotate { to { transform: rotate(1turn); } }

      /* ---------------------------------------------------------------------------
         Accessibility — respect reduced motion
         --------------------------------------------------------------------------- */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; }
      }
    </style>
</head>
<body class="bg-white antialiased">

  <!-- ============== STICKY NAV ============== -->
  <header id="site-header" class="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur border-b border-slate-100">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3" aria-label="Castle Exterminators home">
        <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-10 sm:h-11 w-auto" />
        <span class="sr-only">Castle Exterminators</span>
      </a>

      <ul class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <li><a href="#services" class="hover:text-brand-green transition">Services</a></li>
        <li><a href="#why-us" class="hover:text-brand-green transition">Why Us</a></li>
        <li><a href="#process" class="hover:text-brand-green transition">Process</a></li>
        <li><a href="#reviews" class="hover:text-brand-green transition">Reviews</a></li>
        <li><a href="#faq" class="hover:text-brand-green transition">FAQ</a></li>
      </ul>

      <div class="flex items-center gap-3">
        <a href="tel:+19196066866" class="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-green">
          <i class="fa-solid fa-phone-volume text-brand-green"></i>
          <span>(919) 606-6866</span>
        </a>
        <a href="#contact" class="cta-elastic inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-navy font-bold text-sm px-4 py-2.5 rounded-lg shadow-cta">
          Free Inspection
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </a>
      </div>
    </nav>
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
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur">
            <span class="w-2 h-2 rounded-full bg-brand-green-light animate-pulse"></span>
            Family-owned in Durham, NC • Eco-friendly & family-safe
          </div>

          <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Keep your <span class="text-brand-orange">castle</span><br>
            pest-free.
          </h1>

          <p class="text-lg sm:text-xl text-slate-100/90 max-w-xl mb-8 leading-relaxed">
            Castle Exterminators is Durham's trusted local pest control. Our certified technicians protect your family from termites, ants, roaches, mice, mosquitoes and more — with eco-friendly treatments safe for kids, pets, and our beautiful NC environment.
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
                <p class="font-bold text-lg leading-tight">Free Durham quote in 60 seconds</p>
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
          <path d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z" fill="#FAF7F2"/>
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
    <section id="services" class="py-20 lg:py-28">
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
    </section>

    <!-- ============== WHY US ============== -->
    <section id="why-us" class="py-20 lg:py-28 bg-brand-cream">
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
              <div class="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orange-dark grid place-items-center mb-4"><i class="fa-solid fa-house-chimney text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Local & Family-Owned</h3>
              <p class="text-sm text-slate-600">Born and rooted in Durham, NC. We know our community — and the pests that show up here.</p>
            </div>
            <div class="neumo-card reveal reveal-delay-1 rounded-2xl p-6">
              <div class="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orange-dark grid place-items-center mb-4"><i class="fa-solid fa-leaf text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Eco-Friendly Treatments</h3>
              <p class="text-sm text-slate-600">Low-toxicity, family-safe products applied precisely where pests live — safe for kids, pets, and the NC ecosystem.</p>
            </div>
            <div class="neumo-card reveal reveal-delay-2 rounded-2xl p-6">
              <div class="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orange-dark grid place-items-center mb-4"><i class="fa-solid fa-handshake text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Satisfaction Guaranteed</h3>
              <p class="text-sm text-slate-600">Pests come back between visits? We come back too — at no extra charge. Your peace of mind is our promise.</p>
            </div>
            <div class="neumo-card reveal reveal-delay-3 rounded-2xl p-6">
              <div class="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orange-dark grid place-items-center mb-4"><i class="fa-solid fa-medal text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Licensed & Certified</h3>
              <p class="text-sm text-slate-600">Fully state-licensed NC technicians, highly trained and fully insured — protected on every job.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============== PROCESS ============== -->
    <section id="process" class="py-20 lg:py-28">
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
          <p class="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3">What Durham Homeowners Say</p>
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
    <section id="faq" class="py-20 lg:py-28">
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
    </section>

    <!-- ============== CONTACT / FINAL CTA ============== -->
    <section id="contact" class="py-20 lg:py-28 bg-gradient-to-b from-brand-cream to-white">
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
              <span class="w-10 h-10 rounded-xl bg-brand-orange/15 text-brand-orange-dark grid place-items-center"><i class="fa-solid fa-clipboard-check"></i></span>
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

              <div class="mt-6 grid sm:grid-cols-2 gap-3 max-w-md mx-auto text-left">
                <a href="tel:+19196066866" class="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-slate-200 hover:border-brand-green/40 transition text-sm">
                  <i class="fa-solid fa-phone-volume text-brand-green"></i>
                  <span class="font-semibold text-brand-navy">Prefer to call?</span>
                </a>
                <a href="mailto:info@castleexterminators.co" class="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-slate-200 hover:border-brand-green/40 transition text-sm">
                  <i class="fa-solid fa-envelope text-brand-green"></i>
                  <span class="font-semibold text-brand-navy">Or email us</span>
                </a>
              </div>
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
          <p class="text-xs text-slate-400 mt-4">Keep your <strong class="text-brand-orange">castle</strong> pest-free.</p>
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

    // Subtle header shadow on scroll
    const header = document.getElementById('site-header');
    const onScroll = () => header.classList.toggle('shadow-card', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

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
  <meta name="theme-color" content="#067133" />
  <link rel="icon" href="/static/castle-logo.png" />
  <meta property="og:title" content="${s.name} | Castle Exterminators Durham NC" />
  <meta property="og:description" content="${s.tagline}" />
  <meta property="og:image" content="${s.hero}" />
  <meta property="og:type" content="website" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { display: ['"Plus Jakarta Sans"', 'sans-serif'], sans: ['Inter', 'sans-serif'] },
          colors: {
            brand: {
              green: '#067133', 'green-dark': '#045724', 'green-light': '#3CA862',
              navy: '#1B2A4A', 'navy-dark': '#0F1A30',
              orange: '#F4A261', 'orange-dark': '#E08A3C',
              cream: '#FAF7F2'
            }
          },
          boxShadow: { card: '0 10px 30px -10px rgba(15,26,48,.15)' }
        }
      }
    }
  </script>
  <style>
    html { scroll-behavior: smooth; }
    body { font-family: Inter, sans-serif; color: #1B2A4A; }
    .font-display { font-family: 'Plus Jakarta Sans', sans-serif; }
    .hero-overlay {
      background:
        linear-gradient(135deg, rgba(6,113,51,.92) 0%, rgba(15,26,48,.75) 60%, rgba(15,26,48,.45) 100%);
    }
  </style>
</head>
<body class="bg-white antialiased">

  <!-- NAV -->
  <header class="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3" aria-label="Castle Exterminators home">
        <img src="/static/castle-logo.png" alt="Castle Exterminators" class="h-10 sm:h-11 w-auto" />
      </a>
      <ul class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <li><a href="/#services" class="hover:text-brand-green transition">Services</a></li>
        <li><a href="/#why-us" class="hover:text-brand-green transition">Why Us</a></li>
        <li><a href="/#process" class="hover:text-brand-green transition">Process</a></li>
        <li><a href="/#reviews" class="hover:text-brand-green transition">Reviews</a></li>
        <li><a href="/#faq" class="hover:text-brand-green transition">FAQ</a></li>
      </ul>
      <div class="flex items-center gap-3">
        <a href="tel:+19196066866" class="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-green">
          <i class="fa-solid fa-phone-volume text-brand-green"></i>
          <span>(919) 606-6866</span>
        </a>
        <a href="/#contact" class="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold px-4 py-2 rounded-lg transition shadow-card">
          Free Inspection
        </a>
      </div>
    </nav>
  </header>

  <!-- HERO -->
  <section class="relative pt-16">
    <div class="relative h-[42vh] min-h-[340px] max-h-[520px] overflow-hidden bg-brand-navy">
      <img src="${s.hero}" alt="${s.name}" class="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div class="absolute inset-0 hero-overlay"></div>
      <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 text-white">
        <nav class="text-xs sm:text-sm font-semibold mb-4 opacity-90">
          <a href="/" class="hover:text-brand-orange transition">Home</a>
          <i class="fa-solid fa-chevron-right text-[10px] mx-2 opacity-60"></i>
          <a href="/#services" class="hover:text-brand-orange transition">Services</a>
          <i class="fa-solid fa-chevron-right text-[10px] mx-2 opacity-60"></i>
          <span class="text-brand-orange">${s.name}</span>
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

export default app
