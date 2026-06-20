import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Users,
  CircleDollarSign,
  LayoutDashboard,
  Rocket,
  CheckCircle2,
  Wrench,
  Wind,
  Zap,
  HardHat,
  Hammer,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

// === CONFIGURATION ===
// Paste the real Stripe Payment Link for each tier before going live.
// On each Stripe Payment Link, set the "After payment → Redirect" to FORM_LINK
// so the customer is sent straight to the beta onboarding form after paying.
const PLANS = {
  founder: {
    name: "Beta Founder",
    price: 20,
    link: "https://buy.stripe.com/REPLACE_WITH_FOUNDER_LINK",
  },
  solo: {
    name: "Solo",
    price: 35,
    link: "https://buy.stripe.com/REPLACE_WITH_SOLO_LINK",
  },
  pro: {
    name: "Pro",
    price: 50,
    link: "https://buy.stripe.com/REPLACE_WITH_PRO_LINK",
  },
  team: {
    name: "Team",
    price: 80,
    link: "https://buy.stripe.com/REPLACE_WITH_TEAM_LINK",
  },
} as const;

// Default CTA target (Beta Founder tier) — used by the hero / nav / final CTA.
const STRIPE_PAYMENT_LINK = PLANS.founder.link;

// Beta onboarding form (Google Form). Also used as the post-payment redirect
// configured inside each Stripe Payment Link.
const FORM_LINK = "https://forms.gle/REPLACE_WITH_YOUR_FORM";

// === CONTENT ===
const NAV_LINKS = [
  { href: "#live", label: "What's Live" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const LIVE_TODAY_ITEMS = [
  { icon: FileText, label: "Invoicing" },
  { icon: Users, label: "Customer management" },
  { icon: CircleDollarSign, label: "Status tracking" },
  { icon: LayoutDashboard, label: "Dashboard" },
];

const TRADES = [
  { icon: Wrench, label: "Plumbing" },
  { icon: Wind, label: "HVAC" },
  { icon: Zap, label: "Electrical" },
  { icon: HardHat, label: "General Contracting" },
  { icon: Hammer, label: "Handyman Services" },
];

const FEATURES = [
  {
    icon: FileText,
    title: "Professional Invoices",
    body: "Create branded invoices in seconds. Look professional and get paid faster.",
  },
  {
    icon: Users,
    title: "Customer Management",
    body: "Store client details, job history, and communication in one organized place.",
  },
  {
    icon: CircleDollarSign,
    title: "Payment Tracking",
    body: "See what's paid, what's due, and what's overdue. Never lose track of money again.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Dashboard",
    body: "Get a clear view of your business performance and cash flow whenever you need it.",
  },
];

const ROADMAP = [
  "Deposits & partial payments",
  "Online payments — card & bank via Stripe",
  "Automatic payment reminders",
  "Automated follow-up engine",
  "Voice-to-Invoice",
  "Smart document extraction (IDP)",
  "Reusable service catalog",
  "Payment collection workflow",
];

const FAQ = [
  {
    q: "Is this live today, or am I joining a waitlist?",
    a: "This is live. Founder Beta members get an account today and can start creating invoices and managing customers right now — this isn't a waitlist.",
  },
  {
    q: "Can I collect deposits or take payments through the app right now?",
    a: "Not yet. Deposits, partial payments, and in-app payment collection (Pay Now via Stripe) are next on the roadmap. Founder Beta members get them automatically, at no extra cost, the moment they ship.",
  },
  {
    q: "How do I actually get paid right now?",
    a: "Today, Invoice Pilot Pro handles invoice creation, customer records, and status tracking. You send the invoice, collect payment the way you do now (cash, check, Zelle, bank transfer), then mark it paid — your dashboard and records update instantly.",
  },
  {
    q: "What does '$20/month, locked while subscribed' mean?",
    a: "As long as you stay subscribed to Founder Beta, your price stays $20/month — even after the product moves to standard pricing (Solo, Pro, Team tiers) for new customers. If you ever cancel and rejoin later, you'd rejoin at the then-current price.",
  },
  {
    q: "Is this a replacement for QuickBooks or my accountant?",
    a: "No, and that's intentional. This is a fast, no-bloat tool for creating invoices and knowing who owes you money — not full double-entry accounting. Your books stay clean and exportable; the heavy ledger work stays with your accountant if you use one.",
  },
  {
    q: "What does 'beta' actually mean here?",
    a: "It means real, but early. You'll get full access to everything listed under What's Live, you may hit the occasional rough edge, and your feedback directly shapes what we build next.",
  },
];

// === COMPONENTS ===

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo-nav.png"
        alt="Invoice Pilot Pro"
        width={36}
        height={36}
        className="h-9 w-9"
        priority
      />
      <span className="text-[15px] font-semibold tracking-[0.18em] text-text">
        INVOICE PILOT <span className="text-blue-highlight">PRO</span>
      </span>
    </Link>
  );
}

function PrimaryCta({
  children = "Join Founder Beta — $20/month",
  href = STRIPE_PAYMENT_LINK,
  className = "",
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-highlight ${className}`}
    >
      {children}
    </Link>
  );
}

function Nav() {
  return (
    <header className="nav-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-9 text-sm text-text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <PrimaryCta className="px-4 py-2 text-[13px]">
          Join Founder Beta — $20/month
        </PrimaryCta>
      </div>
    </header>
  );
}

function FounderBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-text-muted backdrop-blur">
      <Rocket className="h-3.5 w-3.5 text-blue-highlight" />
      <span className="text-text">FOUNDER BETA</span>
      <span className="text-text-muted">NOW OPEN</span>
    </span>
  );
}

function ProductScreenshot() {
  return (
    <div className="relative">
      <div className="glow-rings" aria-hidden="true" />
      <div className="screenshot-frame relative z-10 overflow-hidden rounded-2xl p-2">
        <Image
          src="/dashboard-screenshot.png"
          alt="Invoice Pilot Pro product dashboard showing an invoice detail view"
          width={1200}
          height={760}
          className="w-full rounded-xl"
          priority
        />
      </div>
      <div className="relative z-10 mt-4 flex items-center justify-center gap-2 text-xs text-text-muted">
        <ShieldCheck className="h-3.5 w-3.5 text-success" />
        Real product screenshot — customer details blurred for privacy
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-20 pb-24 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:pt-28">
        <div className="relative z-10">
          <FounderBadge />
          <h1 className="mt-7 text-[44px] font-semibold leading-[1.05] tracking-tight md:text-[64px]">
            Get paid faster
            <br />
            without chasing
            <br />
            <span className="text-gradient-blue">customers.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
            Invoice Pilot Pro helps contractors, plumbers, HVAC companies,
            electricians, handymen, and freelancers create professional invoices,
            track payments, and stay organized — without the complexity of
            QuickBooks.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <PrimaryCta className="px-6 py-3.5 text-[15px]">
              Join Founder Beta — $20/month
              <ArrowRight className="h-4 w-4" />
            </PrimaryCta>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span>
                Locked pricing while subscribed.{" "}
                <span className="text-text-dim">Limited spots.</span>
              </span>
            </div>
          </div>

          {/* Live today inline strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]">
            <span className="font-mono-data text-xs tracking-[0.2em] text-text-dim">
              LIVE TODAY:
            </span>
            {LIVE_TODAY_ITEMS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-text-muted"
              >
                <Icon className="h-4 w-4 text-blue-highlight" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <ProductScreenshot />
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-6 px-6 py-8">
        <span className="font-mono-data text-xs tracking-[0.22em] text-text-dim">
          TRUSTED BY CONTRACTORS IN:
        </span>
        <div className="flex flex-wrap items-center gap-x-9 gap-y-4">
          {TRADES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-sm text-text-muted"
            >
              <Icon className="h-4 w-4 text-blue-highlight" strokeWidth={1.75} />
              <span className="uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="live" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-mono-data text-xs tracking-[0.22em] text-blue-highlight">
            BUILT FOR CONTRACTORS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Everything you need to run your business.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="feature-card group rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-primary/10 ring-1 ring-inset ring-blue-primary/20 transition-all group-hover:bg-blue-primary/15 group-hover:ring-blue-primary/30">
                <Icon className="h-5 w-5 text-blue-highlight" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-text">{title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-text-muted">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderExplainer() {
  return (
    <section className="border-y border-border bg-bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono-data text-xs tracking-[0.22em] text-blue-highlight">
              FOUNDER BETA
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-[40px]">
              You&rsquo;re not joining a waitlist. You&rsquo;re joining the build.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted">
              Founder Beta members get full access to everything live today, lock
              in $20/month for as long as they stay subscribed, and shape what we
              build next.
            </p>
          </div>
          <ul className="space-y-5">
            {[
              {
                title: "$20/month, locked while subscribed",
                body: "Even as new customers pay standard pricing later.",
              },
              {
                title: "Every beta feature, no extra cost",
                body: "Roadmap items ship to you automatically.",
              },
              {
                title: "Direct influence on the roadmap",
                body: "Your feedback goes straight to the build.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <div>
                  <p className="font-medium text-text">{item.title}</p>
                  <p className="mt-1 text-sm text-text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-mono-data text-xs tracking-[0.22em] text-blue-highlight">
            ROADMAP
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Coming next, included in Founder Beta.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            Not live yet. Founder Beta members get every one of these the moment
            it ships — no extra cost, no re-signup.
          </p>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ROADMAP.map((item) => (
            <li
              key={item}
              className="feature-card flex items-start gap-3 rounded-xl border-dashed p-4 text-sm text-text-muted"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-highlight"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const PRICING_TIERS = [
  {
    key: "founder" as const,
    name: PLANS.founder.name,
    price: PLANS.founder.price,
    link: PLANS.founder.link,
    badge: "Founder Beta",
    featured: true,
    blurb: "Locked in for as long as you stay subscribed. Limited spots.",
    bullets: [
      "Everything under What's Live today",
      "Every roadmap feature, the moment it ships",
      "Direct say in what we build next",
      "Priority onboarding & support",
    ],
    cta: `Join Founder Beta — $${PLANS.founder.price}/month`,
  },
  {
    key: "solo" as const,
    name: PLANS.solo.name,
    price: PLANS.solo.price,
    link: PLANS.solo.link,
    blurb: "For one-person shops running their own jobs.",
    bullets: [
      "Everything in Founder Beta",
      "Unlimited invoices & customers",
      "Email support",
    ],
    cta: `Start Solo — $${PLANS.solo.price}/month`,
  },
  {
    key: "pro" as const,
    name: PLANS.pro.name,
    price: PLANS.pro.price,
    link: PLANS.pro.link,
    blurb: "For growing operators ready to scale.",
    bullets: [
      "Everything in Solo",
      "Deposits & partial payments",
      "Automated follow-ups",
      "Priority support",
    ],
    cta: `Start Pro — $${PLANS.pro.price}/month`,
  },
  {
    key: "team" as const,
    name: PLANS.team.name,
    price: PLANS.team.price,
    link: PLANS.team.link,
    blurb: "For crews with multiple users on the road.",
    bullets: [
      "Everything in Pro",
      "Multi-user access",
      "Team roles & permissions",
      "Dedicated onboarding",
    ],
    cta: `Start Team — $${PLANS.team.price}/month`,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border bg-bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-mono-data text-xs tracking-[0.22em] text-blue-highlight">
            PRICING
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Beta onboarding plans.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            Pick the tier that fits your shop. Founder Beta locks in $
            {PLANS.founder.price}/month for as long as you stay subscribed.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.key}
              className={
                tier.featured
                  ? "screenshot-frame relative flex flex-col rounded-2xl p-7"
                  : "relative flex flex-col rounded-2xl border border-border bg-surface/40 p-7"
              }
            >
              {tier.badge && (
                <div className="absolute -top-3 left-7">
                  <span className="rounded-full bg-blue-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {tier.badge}
                  </span>
                </div>
              )}
              <div className="mt-2">
                <p className="text-sm font-medium uppercase tracking-wider text-text-dim">
                  {tier.name}
                </p>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-5xl font-semibold tracking-tight text-text">
                    ${tier.price}
                  </span>
                  <span className="text-text-muted">/ month</span>
                </div>
                <p className="mt-3 text-sm text-text-muted">{tier.blurb}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-text-muted">
                {tier.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <PrimaryCta
                href={tier.link}
                className="mt-7 w-full px-5 py-3 text-[14px]"
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </PrimaryCta>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-dim">
          After paying, you&rsquo;ll be redirected to a short onboarding form so
          we can set up your account.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <p className="font-mono-data text-xs tracking-[0.22em] text-blue-highlight">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Straight answers.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-surface/40">
          {FAQ.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-medium text-text">
                {item.q}
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-text-muted transition-all group-open:rotate-45 group-open:border-blue-highlight group-open:text-blue-highlight">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[14px] leading-relaxed text-text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-x-0 top-0 -z-0 h-px bg-gradient-to-r from-transparent via-blue-highlight/60 to-transparent" />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <FounderBadge />
        <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Stop chasing payments.
          <br />
          <span className="text-gradient-blue">Start tracking them.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-text-muted md:text-lg">
          Join Founder Beta and get full access today — locked in at $20/month
          for as long as you stay subscribed.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryCta className="px-7 py-4 text-base">
            Join Founder Beta — $20/month
            <ArrowRight className="h-4 w-4" />
          </PrimaryCta>
          <Link
            href={FORM_LINK}
            className="text-sm text-text-muted underline-offset-4 transition hover:text-text hover:underline"
          >
            Or apply with a quick form →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-nav.png"
            alt="Invoice Pilot Pro"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-sm font-medium tracking-wider text-text">
            INVOICE PILOT <span className="text-blue-highlight">PRO</span>
          </span>
        </div>
        <div className="flex flex-col gap-2 text-sm text-text-dim md:items-end">
          <p>
            Invoice Pilot Pro is a product of 6 Star Service.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:6starservice6@gmail.com" className="hover:text-text">
              6starservice6@gmail.com
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-text">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text">
              Terms of Service
            </Link>
          </div>
          <p>© {new Date().getFullYear()} 6 Star Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// === PAGE ===
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <FounderExplainer />
        <Roadmap />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
