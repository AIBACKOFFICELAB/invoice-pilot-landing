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
// Swap with your real Stripe Payment Link before going live
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/REPLACE_WITH_YOUR_LINK";
// Swap with your real Google Form URL
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
    q: "What does '$10/month, locked while subscribed' mean?",
    a: "As long as you stay subscribed to Founder Beta, your price stays $10/month — even after the product moves to standard pricing (Solo, Pro, Team tiers) for new customers. If you ever cancel and rejoin later, you'd rejoin at the then-current price.",
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
  children = "Join Founder Beta — $10/month",
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
          Join Founder Beta — $10/month
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
              Join Founder Beta — $10/month
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
              in $10/month for as long as they stay subscribed, and shape what we
              build next.
            </p>
          </div>
          <ul className="space-y-5">
            {[
              {
                title: "$10/month, locked while subscribed",
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

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border bg-bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-mono-data text-xs tracking-[0.22em] text-blue-highlight">
            PRICING
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Founder Beta pricing.
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="screenshot-frame relative rounded-2xl p-8">
            <div className="absolute -top-3 left-8">
              <span className="rounded-full bg-blue-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Founder Beta
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight">$10</span>
              <span className="text-text-muted">/ month</span>
            </div>
            <p className="mt-3 text-sm text-text-muted">
              Locked in for as long as you stay subscribed. Limited spots.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-text-muted">
              {[
                "Everything under What's Live today",
                "Every roadmap feature, the moment it ships",
                "Direct say in what we build next",
                "Priority onboarding & support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <PrimaryCta className="mt-8 w-full px-6 py-3.5 text-[15px]">
              Join Founder Beta — $10/month
              <ArrowRight className="h-4 w-4" />
            </PrimaryCta>
          </div>
          <div className="rounded-2xl border border-border bg-surface/40 p-8 text-text-muted">
            <p className="text-sm font-medium uppercase tracking-wider text-text-dim">
              After Beta — standard pricing
            </p>
            <ul className="mt-7 space-y-5 text-sm">
              {[
                { tier: "Solo", price: "$19" },
                { tier: "Pro", price: "$39" },
                { tier: "Team", price: "$79" },
              ].map((row) => (
                <li
                  key={row.tier}
                  className="flex items-baseline justify-between border-b border-border pb-4 last:border-0"
                >
                  <span className="text-text">{row.tier}</span>
                  <span className="font-mono-data text-text">
                    {row.price}
                    <span className="text-text-dim">/mo</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed">
              Founder Beta members keep their{" "}
              <span className="text-text font-medium">$10/month</span> rate while
              subscribed — even after public launch.
            </p>
          </div>
        </div>
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
          Join Founder Beta and get full access today — locked in at $10/month
          for as long as you stay subscribed.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryCta className="px-7 py-4 text-base">
            Join Founder Beta — $10/month
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
        <p className="text-sm text-text-dim">
          Built by people who run service businesses. © {new Date().getFullYear()} Invoice Pilot Pro.
        </p>
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
