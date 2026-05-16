import { Hono } from 'hono'

const app = new Hono()

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professional Pest Control Services | Free Inspection & Same-Day Service</title>
    <meta name="description" content="Licensed, insured pest control. Eliminate termites, roaches, rodents, wasps, ants, mosquitoes & bed bugs. Free inspection, 100% satisfaction guarantee, family & pet safe treatments.">
    <meta name="theme-color" content="#1B2A4A">

    <!-- Open Graph -->
    <meta property="og:title" content="Professional Pest Control Services | Free Inspection">
    <meta property="og:description" content="Licensed pest control protecting families and homes. Get your free inspection today.">
    <meta property="og:type" content="website">

    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛡️</text></svg>">

    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                green: '#2D6A4F',
                'green-dark': '#1F4F3A',
                'green-light': '#52B788',
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

      /* Hero background pattern */
      .hero-pattern {
        background-image:
          radial-gradient(circle at 20% 30%, rgba(82,183,136,0.18) 0, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(244,162,97,0.15) 0, transparent 40%),
          linear-gradient(135deg, #1B2A4A 0%, #2D6A4F 100%);
      }

      /* Scroll reveal */
      .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
      .reveal.in { opacity: 1; transform: none; }

      /* CTA pulse */
      @keyframes softPulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(244,162,97,.6); } 50% { box-shadow: 0 0 0 16px rgba(244,162,97,0); } }
      .pulse { animation: softPulse 2.4s ease-out infinite; }

      /* GorillaDesk form wrapper polish (form itself lives inside an iframe) */
      #gorilladesk-contact-form { transition: opacity .3s ease; }
      #gd-form-iframe { display: block; }

      /* Accordion */
      details[open] summary .chev { transform: rotate(180deg); }
      summary { list-style: none; cursor: pointer; }
      summary::-webkit-details-marker { display: none; }
    </style>
</head>
<body class="bg-white antialiased">

  <!-- ============== STICKY NAV ============== -->
  <header id="site-header" class="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur border-b border-slate-100">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#top" class="flex items-center gap-2 font-display font-extrabold text-brand-navy text-lg">
        <span class="w-9 h-9 rounded-xl bg-brand-green text-white grid place-items-center shadow-card">
          <i class="fa-solid fa-shield-virus"></i>
        </span>
        <span>ShieldPest<span class="text-brand-orange">.</span></span>
      </a>

      <ul class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <li><a href="#services" class="hover:text-brand-green transition">Services</a></li>
        <li><a href="#why-us" class="hover:text-brand-green transition">Why Us</a></li>
        <li><a href="#process" class="hover:text-brand-green transition">Process</a></li>
        <li><a href="#reviews" class="hover:text-brand-green transition">Reviews</a></li>
        <li><a href="#faq" class="hover:text-brand-green transition">FAQ</a></li>
      </ul>

      <div class="flex items-center gap-3">
        <a href="tel:+1XXXXXXXXXX" class="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-green">
          <i class="fa-solid fa-phone-volume text-brand-green"></i>
          <span>(XXX) XXX-XXXX</span>
        </a>
        <a href="#contact" class="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-navy font-bold text-sm px-4 py-2.5 rounded-lg shadow-cta transition">
          Free Inspection
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </a>
      </div>
    </nav>
  </header>

  <main id="top" class="pt-16">

    <!-- ============== HERO ============== -->
    <section class="hero-pattern text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;);"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur">
            <span class="w-2 h-2 rounded-full bg-brand-green-light animate-pulse"></span>
            Same-day service available • Family & pet safe
          </div>

          <h1 class="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Pests gone for good.<br>
            <span class="text-brand-orange">Peace of mind</span> guaranteed.
          </h1>

          <p class="text-lg sm:text-xl text-slate-100/90 max-w-xl mb-8 leading-relaxed">
            Licensed and insured technicians protecting your family from termites, roaches, rodents, wasps, ants, mosquitoes, and more — with treatments that are tough on pests and safe for kids and pets.
          </p>

          <div class="flex flex-wrap gap-3 mb-10">
            <a href="#contact" class="pulse inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-brand-navy font-bold px-7 py-4 rounded-xl shadow-cta transition text-base">
              <i class="fa-solid fa-clipboard-check"></i>
              Get Free Inspection
            </a>
            <a href="tel:+1XXXXXXXXXX" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-7 py-4 rounded-xl transition text-base">
              <i class="fa-solid fa-phone-volume"></i>
              Call (XXX) XXX-XXXX
            </a>
          </div>

          <!-- Trust strip -->
          <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-100/90">
            <div class="flex items-center gap-2"><i class="fa-solid fa-star text-brand-orange"></i><strong class="text-white">4.9/5</strong> from 500+ reviews</div>
            <div class="flex items-center gap-2"><i class="fa-solid fa-shield-halved text-brand-green-light"></i> Licensed & Insured</div>
            <div class="flex items-center gap-2"><i class="fa-solid fa-leaf text-brand-green-light"></i> Eco-friendly options</div>
          </div>
        </div>

        <!-- Hero card -->
        <aside class="lg:col-span-5">
          <div class="bg-white text-brand-navy rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/40">
            <div class="flex items-center gap-3 mb-5">
              <span class="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center">
                <i class="fa-solid fa-bolt-lightning"></i>
              </span>
              <div>
                <p class="font-bold text-lg leading-tight">Quick Quote in 60 seconds</p>
                <p class="text-slate-500 text-sm">We'll call you back within 2 business hours</p>
              </div>
            </div>

            <ul class="space-y-3 text-sm mb-6">
              <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-brand-green mt-1"></i><span><strong>Free, no-obligation</strong> on-site inspection</span></li>
              <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-brand-green mt-1"></i><span><strong>100% satisfaction</strong> — we'll re-treat for free</span></li>
              <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-brand-green mt-1"></i><span><strong>Transparent pricing</strong> — no hidden fees</span></li>
              <li class="flex items-start gap-3"><i class="fa-solid fa-circle-check text-brand-green mt-1"></i><span><strong>EPA-approved</strong> treatments, kid & pet safe</span></li>
            </ul>

            <a href="#contact" class="block w-full text-center bg-brand-navy hover:bg-brand-navy-dark text-white font-bold py-3.5 rounded-xl transition">
              Request My Free Inspection →
            </a>
          </div>
        </aside>
      </div>
    </section>

    <!-- ============== TRUST BAR ============== -->
    <section class="bg-brand-cream border-y border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p class="font-display font-extrabold text-3xl text-brand-green">15+</p>
          <p class="text-sm text-slate-600 font-semibold">Years protecting homes</p>
        </div>
        <div>
          <p class="font-display font-extrabold text-3xl text-brand-green">10,000+</p>
          <p class="text-sm text-slate-600 font-semibold">Treatments completed</p>
        </div>
        <div>
          <p class="font-display font-extrabold text-3xl text-brand-green">4.9★</p>
          <p class="text-sm text-slate-600 font-semibold">Average customer rating</p>
        </div>
        <div>
          <p class="font-display font-extrabold text-3xl text-brand-green">2 hr</p>
          <p class="text-sm text-slate-600 font-semibold">Average response time</p>
        </div>
      </div>
    </section>

    <!-- ============== SERVICES GRID ============== -->
    <section id="services" class="py-20 lg:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-14 reveal">
          <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">What We Treat</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-5">Complete protection from every common pest</h2>
          <p class="text-lg text-slate-600">One call handles it all. Our certified technicians eliminate infestations at the source and prevent them from coming back.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card template repeated -->
          <article class="reveal group bg-white border border-slate-100 hover:border-brand-green/30 hover:shadow-card rounded-2xl p-6 transition">
            <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4 group-hover:bg-brand-green group-hover:text-white transition">
              <i class="fa-solid fa-bug text-xl"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Termites</h3>
            <p class="text-sm text-slate-600">Save your home from costly structural damage with proactive termite detection and elimination.</p>
          </article>

          <article class="reveal group bg-white border border-slate-100 hover:border-brand-green/30 hover:shadow-card rounded-2xl p-6 transition">
            <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4 group-hover:bg-brand-green group-hover:text-white transition">
              <i class="fa-solid fa-bugs text-xl"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Roaches</h3>
            <p class="text-sm text-slate-600">Targeted gel and bait treatments that wipe out colonies — including German and American roaches.</p>
          </article>

          <article class="reveal group bg-white border border-slate-100 hover:border-brand-green/30 hover:shadow-card rounded-2xl p-6 transition">
            <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4 group-hover:bg-brand-green group-hover:text-white transition">
              <i class="fa-solid fa-house-chimney-crack text-xl"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Rodents</h3>
            <p class="text-sm text-slate-600">Humane removal of mice and rats, plus entry-point sealing so they don't come back.</p>
          </article>

          <article class="reveal group bg-white border border-slate-100 hover:border-brand-green/30 hover:shadow-card rounded-2xl p-6 transition">
            <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4 group-hover:bg-brand-green group-hover:text-white transition">
              <i class="fa-solid fa-bee text-xl"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Wasps & Hornets</h3>
            <p class="text-sm text-slate-600">Safe nest removal and perimeter spray to keep stinging insects off your property.</p>
          </article>

          <article class="reveal group bg-white border border-slate-100 hover:border-brand-green/30 hover:shadow-card rounded-2xl p-6 transition">
            <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4 group-hover:bg-brand-green group-hover:text-white transition">
              <i class="fa-solid fa-ant text-xl"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Ants</h3>
            <p class="text-sm text-slate-600">Carpenter, fire, sugar, and odorous house ants — eliminated colony and all.</p>
          </article>

          <article class="reveal group bg-white border border-slate-100 hover:border-brand-green/30 hover:shadow-card rounded-2xl p-6 transition">
            <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4 group-hover:bg-brand-green group-hover:text-white transition">
              <i class="fa-solid fa-mosquito text-xl"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Mosquitoes</h3>
            <p class="text-sm text-slate-600">Reclaim your yard with our seasonal mosquito misting and breeding-site treatment.</p>
          </article>

          <article class="reveal group bg-white border border-slate-100 hover:border-brand-green/30 hover:shadow-card rounded-2xl p-6 transition">
            <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4 group-hover:bg-brand-green group-hover:text-white transition">
              <i class="fa-solid fa-bed text-xl"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Bed Bugs</h3>
            <p class="text-sm text-slate-600">Heat and chemical treatments that eradicate every life stage — adults, nymphs, and eggs.</p>
          </article>

          <article class="reveal group bg-white border border-slate-100 hover:border-brand-green/30 hover:shadow-card rounded-2xl p-6 transition">
            <div class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center mb-4 group-hover:bg-brand-green group-hover:text-white transition">
              <i class="fa-solid fa-spider text-xl"></i>
            </div>
            <h3 class="font-bold text-lg mb-2">Spiders & More</h3>
            <p class="text-sm text-slate-600">Black widows, brown recluses, silverfish, earwigs, fleas, ticks — we handle the lot.</p>
          </article>
        </div>

        <div class="text-center mt-12 reveal">
          <a href="#contact" class="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-green-dark">
            Don't see your pest? We probably handle it.
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
            <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Why Choose Us</p>
            <h2 class="text-4xl lg:text-5xl font-extrabold mb-6">Local experts your neighbors already trust</h2>
            <p class="text-lg text-slate-600 mb-8">We're not a national franchise reading a script. We're licensed local technicians who treat every home like it's our own — and we stand behind every job.</p>
            <a href="#contact" class="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold px-6 py-3.5 rounded-xl transition">
              Schedule Inspection
              <i class="fa-solid fa-arrow-right text-sm"></i>
            </a>
          </div>

          <div class="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            <div class="reveal bg-white rounded-2xl p-6 shadow-card border border-white">
              <div class="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orange-dark grid place-items-center mb-4"><i class="fa-solid fa-medal text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Licensed & Insured</h3>
              <p class="text-sm text-slate-600">Fully state-licensed technicians and $2M liability coverage — protected on every job.</p>
            </div>
            <div class="reveal bg-white rounded-2xl p-6 shadow-card border border-white">
              <div class="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orange-dark grid place-items-center mb-4"><i class="fa-solid fa-leaf text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Family & Pet Safe</h3>
              <p class="text-sm text-slate-600">EPA-approved, low-toxicity products applied precisely where they're needed.</p>
            </div>
            <div class="reveal bg-white rounded-2xl p-6 shadow-card border border-white">
              <div class="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orange-dark grid place-items-center mb-4"><i class="fa-solid fa-handshake text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Satisfaction Guarantee</h3>
              <p class="text-sm text-slate-600">Pests come back between visits? We come back too — at no extra charge.</p>
            </div>
            <div class="reveal bg-white rounded-2xl p-6 shadow-card border border-white">
              <div class="w-11 h-11 rounded-xl bg-brand-orange/15 text-brand-orange-dark grid place-items-center mb-4"><i class="fa-solid fa-clock text-lg"></i></div>
              <h3 class="font-bold text-lg mb-2">Same-Day Service</h3>
              <p class="text-sm text-slate-600">Call before noon for same-day treatment, plus evening and weekend appointments.</p>
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
          <p class="text-lg text-slate-600">From your first call to long-term protection — here's exactly what to expect.</p>
        </div>

        <ol class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          <li class="reveal relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7">
            <div class="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-brand-navy text-white font-display font-extrabold grid place-items-center shadow-card">1</div>
            <i class="fa-solid fa-phone-volume text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Contact us</h3>
            <p class="text-sm text-slate-600">Call, text, or fill out the form. We'll get back to you within 2 business hours.</p>
          </li>
          <li class="reveal relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7">
            <div class="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-brand-navy text-white font-display font-extrabold grid place-items-center shadow-card">2</div>
            <i class="fa-solid fa-magnifying-glass text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Free inspection</h3>
            <p class="text-sm text-slate-600">A licensed tech inspects your property and identifies the pest, source, and severity — no charge.</p>
          </li>
          <li class="reveal relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7">
            <div class="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-brand-navy text-white font-display font-extrabold grid place-items-center shadow-card">3</div>
            <i class="fa-solid fa-spray-can-sparkles text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Custom treatment</h3>
            <p class="text-sm text-slate-600">We apply a tailored, pet-safe treatment plan with transparent, upfront pricing.</p>
          </li>
          <li class="reveal relative bg-white border border-slate-100 rounded-2xl p-6 lg:p-7">
            <div class="absolute -top-4 -left-2 w-10 h-10 rounded-xl bg-brand-navy text-white font-display font-extrabold grid place-items-center shadow-card">4</div>
            <i class="fa-solid fa-shield-halved text-2xl text-brand-green mb-4 mt-2 block"></i>
            <h3 class="font-bold text-lg mb-2">Ongoing protection</h3>
            <p class="text-sm text-slate-600">Optional quarterly visits keep your home pest-free year-round — cancel anytime.</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ============== TESTIMONIALS ============== -->
    <section id="reviews" class="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.05]" style="background-image: radial-gradient(circle at 30% 20%, #52B788 0, transparent 50%), radial-gradient(circle at 70% 80%, #F4A261 0, transparent 50%);"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-14 reveal">
          <p class="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3">What Customers Say</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-5">Real reviews from real neighbors</h2>
          <div class="flex items-center justify-center gap-2 text-brand-orange text-xl">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <span class="ml-2 text-white font-bold">4.9 / 5</span>
            <span class="text-slate-300 text-base">(500+ reviews)</span>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <figure class="reveal bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur">
            <div class="text-brand-orange mb-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <blockquote class="text-slate-100 leading-relaxed mb-5">"They showed up the same day I called, found a roach issue under the dishwasher I didn't even know about, and treated the whole house. Two weeks pest-free and counting."</blockquote>
            <figcaption class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-green-light text-brand-navy font-bold grid place-items-center">SM</div>
              <div>
                <p class="font-bold">Sarah M.</p>
                <p class="text-xs text-slate-300">Homeowner • Verified Google review</p>
              </div>
            </figcaption>
          </figure>

          <figure class="reveal bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur">
            <div class="text-brand-orange mb-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <blockquote class="text-slate-100 leading-relaxed mb-5">"We had termites in the garage and were panicking. The tech walked us through everything, the pricing was fair, and they came back twice to make sure they got them all. Excellent service."</blockquote>
            <figcaption class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-orange text-brand-navy font-bold grid place-items-center">DR</div>
              <div>
                <p class="font-bold">David R.</p>
                <p class="text-xs text-slate-300">Homeowner • Verified Google review</p>
              </div>
            </figcaption>
          </figure>

          <figure class="reveal bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur">
            <div class="text-brand-orange mb-3"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
            <blockquote class="text-slate-100 leading-relaxed mb-5">"Mosquitoes used to ruin our backyard every summer. After their seasonal treatment we can actually use the patio again. Worth every penny — and safe for our dogs."</blockquote>
            <figcaption class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-brand-green-light text-brand-navy font-bold grid place-items-center">JL</div>
              <div>
                <p class="font-bold">Jessica L.</p>
                <p class="text-xs text-slate-300">Homeowner • Verified Google review</p>
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
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-5">Frequently asked</h2>
        </div>

        <div class="space-y-3">
          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition" open>
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">Is your treatment safe for kids and pets?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <p class="mt-4 text-slate-600 leading-relaxed">Yes. We use EPA-approved, low-toxicity products applied precisely where pests live and travel — typically along baseboards, under sinks, and outdoor entry points. Most treatments are dry within an hour, after which kids and pets can return to those areas safely.</p>
          </details>

          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition">
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">How fast can you come out?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <p class="mt-4 text-slate-600 leading-relaxed">For urgent infestations we offer same-day service if you call before noon. Otherwise we'll schedule your free inspection within 24–48 hours, including evening and Saturday slots.</p>
          </details>

          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition">
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">How much does it cost?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <p class="mt-4 text-slate-600 leading-relaxed">It depends on the pest, the property size, and the severity — which is why the on-site inspection is free. You'll get a transparent flat-fee quote before any work begins, with no hidden charges and no obligation to proceed.</p>
          </details>

          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition">
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">Do you offer a guarantee?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <p class="mt-4 text-slate-600 leading-relaxed">Absolutely. If pests return between scheduled visits on any of our recurring plans, we come back and re-treat at no charge. Your satisfaction is the only thing that matters to us.</p>
          </details>

          <details class="reveal group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-card transition">
            <summary class="flex items-center justify-between gap-4">
              <h3 class="font-bold text-lg pr-4">Do I need to leave the house during treatment?</h3>
              <span class="chev w-9 h-9 rounded-full bg-brand-green/10 text-brand-green grid place-items-center transition-transform"><i class="fa-solid fa-chevron-down text-sm"></i></span>
            </summary>
            <p class="mt-4 text-slate-600 leading-relaxed">For most general pest treatments — no. You can stay in the home; we'll just ask you to keep pets out of treated rooms until products dry (usually 30–60 minutes). For specialty treatments like bed bug heat or fumigation, we'll give you specific instructions in advance.</p>
          </details>
        </div>
      </div>
    </section>

    <!-- ============== CONTACT / FINAL CTA ============== -->
    <section id="contact" class="py-20 lg:py-28 bg-gradient-to-b from-brand-cream to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">

        <!-- Left: messaging + contact info -->
        <div class="lg:col-span-5 reveal">
          <p class="text-brand-green font-bold uppercase tracking-wider text-sm mb-3">Get Started</p>
          <h2 class="text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">Ready to take back your home?</h2>
          <p class="text-lg text-slate-600 mb-8">Tell us a bit about your pest problem and we'll be in touch within <strong>2 business hours</strong> to schedule your free inspection.</p>

          <div class="space-y-4 mb-8">
            <a href="tel:+1XXXXXXXXXX" class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
              <span class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center text-lg"><i class="fa-solid fa-phone-volume"></i></span>
              <div>
                <p class="text-xs text-slate-500 font-semibold uppercase tracking-wide">Call or text</p>
                <p class="font-bold text-brand-navy text-lg">(XXX) XXX-XXXX</p>
              </div>
            </a>
            <a href="mailto:info@yourcompany.com" class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 hover:border-brand-green/40 hover:shadow-card transition">
              <span class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center text-lg"><i class="fa-solid fa-envelope"></i></span>
              <div>
                <p class="text-xs text-slate-500 font-semibold uppercase tracking-wide">Email us</p>
                <p class="font-bold text-brand-navy text-lg break-all">info@yourcompany.com</p>
              </div>
            </a>
            <div class="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200">
              <span class="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green grid place-items-center text-lg"><i class="fa-solid fa-location-dot"></i></span>
              <div>
                <p class="text-xs text-slate-500 font-semibold uppercase tracking-wide">Service area</p>
                <p class="font-bold text-brand-navy text-lg">[Your City] & Surrounding Areas</p>
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
              <h3 class="font-extrabold text-2xl">Request Your Free Inspection</h3>
            </div>
            <p class="text-slate-600 mb-6">Fill out the form and we'll contact you within 2 business hours. No obligation, no pressure.</p>

            <!-- GorillaDesk Inline Form (iframe embed) -->
            <div id="gorilladesk-contact-form" class="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50" style="min-height: 640px;">
              <!-- Loading placeholder (shown until iframe paints) -->
              <div id="gd-form-loading" class="absolute inset-0 grid place-items-center text-slate-500 text-sm">
                <div class="flex flex-col items-center gap-3">
                  <i class="fa-solid fa-circle-notch fa-spin text-2xl text-brand-green"></i>
                  <span>Loading inspection form…</span>
                </div>
              </div>
              <!--
                NOTE on account_id:
                The portal hex key "0d73a25092e5c1c9769a9f3255caa65a" is NOT what the iframe expects.
                GorillaDesk's loader script resolves it to a numeric owner_id via a POST to
                https://api-portal-v3.gorilladesk.com/company/settings — for this account that
                returns account_id "2147" (business: Castle Exterminators).
                If the business ever changes accounts, refresh this value by running:
                  curl -X POST https://api-portal-v3.gorilladesk.com/company/settings \\
                    -H "Content-Type: application/json" \\
                    -d '{"account_id":"<hex-key-here>"}'
                and copying the returned "account_id" into the URL below.
              -->
              <iframe
                id="gd-form-iframe"
                title="Request your free pest control inspection"
                src="https://portal-embed-v3.gorilladesk.com/?screen=contact&account_id=2147&embed_form=true&embed_web_code=true&embed_form_type=portal"
                loading="lazy"
                allow="clipboard-write"
                style="width:100%; height:640px; border:0; display:block; background:transparent;"
                onload="(function(){var l=document.getElementById('gd-form-loading'); if(l) l.style.display='none';})()"
              ></iframe>
            </div>

            <!-- Fallback: if iframe is blocked or doesn't load, give users a way to reach us -->
            <noscript>
              <p class="mt-4 text-sm text-slate-600">
                The form requires JavaScript. Please call <a class="text-brand-green font-bold" href="tel:+1XXXXXXXXXX">(XXX) XXX-XXXX</a>
                or email <a class="text-brand-green font-bold" href="mailto:info@yourcompany.com">info@yourcompany.com</a>.
              </p>
            </noscript>

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
          <a href="#top" class="flex items-center gap-2 font-display font-extrabold text-white text-lg mb-4">
            <span class="w-9 h-9 rounded-xl bg-brand-green text-white grid place-items-center"><i class="fa-solid fa-shield-virus"></i></span>
            ShieldPest<span class="text-brand-orange">.</span>
          </a>
          <p class="text-sm leading-relaxed max-w-md">Licensed, insured, and locally trusted pest control. Protecting families and homes from termites, roaches, rodents, and more — with treatments that are safe for the people and pets you love.</p>
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
            <li><a href="tel:+1XXXXXXXXXX" class="hover:text-white flex items-center gap-2"><i class="fa-solid fa-phone-volume text-brand-green-light"></i> (XXX) XXX-XXXX</a></li>
            <li><a href="mailto:info@yourcompany.com" class="hover:text-white flex items-center gap-2"><i class="fa-solid fa-envelope text-brand-green-light"></i> info@yourcompany.com</a></li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-brand-green-light"></i> [Your City]</li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-clock text-brand-green-light"></i> Mon–Sat 7am–7pm</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-slate-400">
          <p>© <span id="year"></span> ShieldPest. All rights reserved. Licensed & insured.</p>
          <p class="flex items-center gap-4">
            <a href="#" class="hover:text-white">Privacy Policy</a>
            <a href="#" class="hover:text-white">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  </main>

  <!-- Floating call button (mobile) -->
  <a href="tel:+1XXXXXXXXXX" aria-label="Call us now" class="lg:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-brand-orange text-brand-navy grid place-items-center shadow-cta pulse">
    <i class="fa-solid fa-phone-volume text-xl"></i>
  </a>

  <!-- Page scripts -->
  <script>
    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Subtle header shadow on scroll
    const header = document.getElementById('site-header');
    const onScroll = () => header.classList.toggle('shadow-card', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  </script>

  <!--
    GorillaDesk integration notes:
    -----------------------------
    The provided contact.js script (https://portal-embed-v3.gorilladesk.com/js/contact/contact.js)
    renders a *floating chat-bubble widget* attached to <body>, NOT an inline form into a target div.
    Since we already have a strong inline form section, we embed GorillaDesk's contact form directly
    as an iframe inside #gorilladesk-contact-form above. That uses the same backend and submits to
    the same GorillaDesk account (account_id 0d73a25092e5c1c9769a9f3255caa65a).

    If you ALSO want the floating chat bubble in addition to the inline form, uncomment the
    snippet below — it will add a second contact button in the bottom-right corner.
  -->
  <!--
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
  -->
</body>
</html>`

app.get('/', (c) => c.html(html))

export default app
