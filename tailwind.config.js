/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan all source files for class usage so the JIT keeps used classes.
  content: ['./src/**/*.{tsx,ts,js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary trust color — deep forest emerald
          green:        '#1F6F4A',
          'green-dark': '#13502F',
          'green-light':'#3FA372',
          'green-mist': '#D7EBDF',
          // Replaces "navy" — deep charcoal-ink for serious typography
          navy:        '#1E2A24',
          'navy-dark': '#0E1612',
          // CTA — warm terracotta
          orange:       '#C2663B',
          'orange-dark':'#A0502C',
          'orange-soft':'#F1C9A8',
          // Warm earthy neutrals
          cream: '#F7F2E7',
          sand:  '#EADFC7',
          bone:  '#FBF8F1',
          // Accent — pale leaf
          leaf:  '#A7C9A4',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', '"Plus Jakarta Sans"', 'system-ui', 'serif'],
        sans:    ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body:    ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:         '0 14px 36px -14px rgba(30,42,36,0.22)',
        'card-hover': '0 22px 50px -16px rgba(30,42,36,0.30)',
        cta:          '0 14px 30px -8px rgba(194,102,59,0.45)',
        'inset-leaf': 'inset 0 0 0 1px rgba(31,111,74,0.10)',
      },
      backgroundImage: {
        'leaf-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2780%27 height=%2780%27 viewBox=%270 0 80 80%27%3E%3Cg fill=%27%231F6F4A%27 fill-opacity=%270.06%27%3E%3Cpath d=%27M40 0c5 10 0 20-10 25 5 10 0 20-10 25C25 60 35 55 40 45c5 10 15 15 20 5-10-5-15-15-10-25-10-5-15-15-10-25z%27/%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  // Keep slate utility colors enabled (used heavily in content)
  // safelist some commonly-used dynamic classes to prevent purge
  safelist: [
    'bg-brand-green',
    'bg-brand-green/10',
    'bg-brand-green/5',
    'bg-brand-orange',
    'bg-brand-navy',
    'bg-brand-navy-dark',
    'bg-brand-cream',
    'bg-brand-sand',
    'bg-brand-bone',
    'bg-brand-leaf',
    'text-brand-green',
    'text-brand-orange',
    'text-brand-navy',
    'text-brand-leaf',
    'text-brand-orange-soft',
    'border-brand-green',
    'border-brand-green/40',
    'border-brand-orange/40',
  ],
  plugins: [],
}
