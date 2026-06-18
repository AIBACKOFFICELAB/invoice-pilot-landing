# Invoice Pilot Pro — Landing Page

Premium fintech-style landing page for Invoice Pilot Pro Founder Beta program.

Built with Next.js 16 (App Router) + Tailwind CSS v4 + lucide-react icons.

## Before you deploy — 2 things to swap

Open `app/page.tsx` and update these two constants at the top of the file:

```ts
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/REPLACE_WITH_YOUR_LINK";
const FORM_LINK = "https://forms.gle/REPLACE_WITH_YOUR_FORM";
```

- `STRIPE_PAYMENT_LINK` — The Stripe Payment Link for the $10/month Founder Beta subscription. Create at https://dashboard.stripe.com/payment-links
- `FORM_LINK` — The Google Form URL for application/qualification (optional secondary CTA in the final section)

## Deploy to Vercel

Two options:

**Option A — Connect this repo to Vercel (recommended for ongoing updates):**
1. Push this folder to your `AIBACKOFFICELAB/invoice-pilot-landing` repo
2. Go to vercel.com → New Project → Import this repo
3. Vercel auto-detects Next.js, no config needed
4. Click Deploy

**Option B — Direct deploy via CLI:**
```bash
npx vercel
```

## Local development

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## Project structure

```
app/
  layout.tsx        — Root layout, metadata, font setup
  page.tsx          — Full landing page (all sections, components)
  globals.css       — Design tokens, brand palette, glow effects
public/
  logo-nav.png      — Logo (header + footer)
  logo-nav.svg      — Logo SVG (scalable fallback)
  dashboard-screenshot.png — Hero product screenshot (customer info redacted)
```

## Brand palette (from globals.css)

| Token | Value |
|---|---|
| Background primary | `#07111F` |
| Background secondary | `#0F172A` |
| Primary blue | `#2563EB` |
| Highlight blue | `#38BDF8` |
| Text | `#F8FAFC` |
| Muted text | `#94A3B8` |
| Success | `#22C55E` |
| Border | `rgba(255,255,255,0.08)` |

## Sections (top to bottom)

1. **Sticky nav** with blur backdrop, logo, nav links, primary CTA
2. **Hero** with ambient glow rings, floating product screenshot, "Live today" inline strip
3. **Trust strip** — "Trusted by contractors in:" with 5 trade icons
4. **Features** — 4-card grid (Professional Invoices, Customer Management, Payment Tracking, Business Dashboard)
5. **Founder Beta explainer** — three core benefits
6. **Roadmap** — 8 upcoming features in dashed-border cards
7. **Pricing** — Founder Beta $10/mo + standard tier preview
8. **FAQ** — 6 questions with accordion
9. **Final CTA** with secondary form link
10. **Footer**

## Things this build does NOT depend on

- No Google Fonts (uses system font stack — fast, no FOUT, no privacy concerns)
- No external CDN dependencies
- No client-side JS for content rendering (server components throughout except interactive details/summary)
- No heavy animation libraries
