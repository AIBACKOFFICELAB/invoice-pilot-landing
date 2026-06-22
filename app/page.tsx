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
  QrCode,
  Clock,
  Lock,
} from "lucide-react";
import { Nav } from "./components/nav";

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
//
//  BEFORE YOU GO LIVE — replace every REPLACE_WITH_* value below:
//
//  1. STRIPE_FOUNDER_LINK  → Paste your real Stripe Payment Link for the
//                            $20/month Founder Beta tier.
//                            In Stripe: set "After payment → Redirect" to
//                            your Google Form URL so customers land on
//                            onboarding automatically after paying.
//
//  2. FORM_LINK            → Paste your real Google Form URL.
//                            Also update the form: Question 11 currently
//                            says "$10/month" — change it to "$20/month"
//                            so it matches what customers just paid.
//
//  Everything else on the page is live and ready.
//
const STRIPE_FOUNDER_LINK = "https://buy.stripe.com/REPLACE_WITH_FOUNDER_LINK";
const FORM_LINK = "https://forms.gle/REPLACE_WITH_YOUR_FORM";

// ─── CONTENT ──────────────────────────────────────────────────────────────────

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
    a: "As long as you stay subscribed to Founder Beta, your price stays $20/month — even after the product moves to standard pricing (Solo $35, Pro $50, Team $80) for new customers. If you ever cancel and rejoin later, you'd rejoin at the then-current price.",
  },
  {
    q: "Is this a replacement for QuickBooks or my accountant?",
    a: "No, and that's intentional. This is a fast, no-bloat tool for creating invoices and knowing who owes you money — not full double-entry accounting. Your books stay clean and exportable; the heavy ledger work stays with your accountant if you use one.",
  },
  {
    q: "What does 'beta' actually mean here?",
    a: "It means real, but early. You'll get full access to everything listed under What's Live, you may hit the occasional rough edge, and your feedback directly shapes what we build next.",
  },
  {
    q: "What happens after I pay?",
    a: "Right after checkout you'll be redirected to a short onboarding form. We'll review it and reach out within 24 hours — usually same day — to get your account set up personally.",
  },
];

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

function FounderBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)]/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[var(--text-muted)] backdrop-blur">
      <Rocket className="h-3.5 w-3.5 text-[var(--blue-highlight)]" />
      <span className="text-[var(--text)]">FOUNDER BETA</span>
      <span className="text-[var(--text-muted)]">NOW OPEN</span>
    </span>
  );
}

function PrimaryCta({
  children = "Join Founder Beta — $20/month",
  href = STRIPE_FOUNDER_LINK,
  className = "",
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-highlight)] ${className}`}
    >
      {children}
    </a>
  );
}

// ─── SECTIONS ─────────────────────────────────────────────────────────────────

function ProductScreenshot() {
  return (
    <div className="relative">
      <div className="glow-rings" aria-hidden="true" />
      <div className="screenshot-frame relative z-10 overflow-hidden rounded-2xl p-2">
        <Image
          src="/dashboard-screenshot.png"
          alt="Invoice Pilot Pro product dashboard showing invoice detail view, customer list, and payment status"
          width={1200}
          height={760}
          className="w-full rounded-xl"
          priority
        />
      </div>
      <div className="relative z-10 mt-4 flex items-center justify-center gap-2 text-xs text-[var(--text-muted)]">
        <ShieldCheck className="h-3.5 w-3.5 text-[var(--success)]" />
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
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
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
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <CheckCircle2 className="h-4 w-4 text-[var(--success)]" />
              <span>
                Locked pricing while subscribed.{" "}
                <span className="text-[var(--text-dim)]">Limited spots.</span>
              </span>
            </div>
          </div>

          {/* Live today inline strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]">
            <span className="font-mono-data text-xs tracking-[0.2em] text-[var(--text-dim)]">
              LIVE TODAY:
            </span>
            {LIVE_TODAY_ITEMS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-[var(--text-muted)]"
              >
                <Icon className="h-4 w-4 text-[var(--blue-highlight)]" />
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
    <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]/40">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-6 px-6 py-8">
        <span className="font-mono-data text-xs tracking-[0.22em] text-[var(--text-dim)]">
          BUILT FOR:
        </span>
        <div className="flex flex-wrap items-center gap-x-9 gap-y-4">
          {TRADES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-sm text-[var(--text-muted)]"
            >
              <Icon className="h-4 w-4 text-[var(--blue-highlight)]" strokeWidth={1.75} />
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
          <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
            BUILT FOR CONTRACTORS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Everything you need to run your business.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            No bookkeeping degree required. No bloat. Just the tools you need
            to create invoices, track payments, and know who owes you money.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="feature-card group rounded-2xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--blue-primary)]/10 ring-1 ring-inset ring-[var(--blue-primary)]/20 transition-all group-hover:bg-[var(--blue-primary)]/15 group-hover:ring-[var(--blue-primary)]/30">
                <Icon className="h-5 w-5 text-[var(--blue-highlight)]" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-[var(--text)]">{title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--text-muted)]">
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
    <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)]/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
              FOUNDER BETA
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-[40px]">
              You&rsquo;re not joining a waitlist.
              <br />
              You&rsquo;re joining the build.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)]">
              Founder Beta members get full access to everything live today, lock
              in $20/month for as long as they stay subscribed, and shape what we
              build next. Standard pricing starts at $35/month after beta — this
              is the only time to get in at $20.
            </p>
          </div>
          <ul className="space-y-5">
            {[
              {
                icon: Lock,
                title: "$20/month, locked while subscribed",
                body: "Standard pricing starts at $35/month for new customers after beta ends.",
              },
              {
                icon: Rocket,
                title: "Every roadmap feature, at no extra cost",
                body: "Deposits, payments, automations — every item ships to you the moment it's live.",
              },
              {
                icon: CheckCircle2,
                title: "Direct influence on the roadmap",
                body: "Your feedback goes straight to the build. What you ask for, we build next.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success)]" />
                <div>
                  <p className="font-medium text-[var(--text)]">{item.title}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{item.body}</p>
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
          <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
            ROADMAP
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Coming next, included in Founder Beta.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)]">
            Not live yet — but Founder Beta members get every one of these the
            moment it ships, at no extra cost, no re-signup required.
          </p>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ROADMAP.map((item) => (
            <li
              key={item}
              className="feature-card flex items-start gap-3 rounded-xl border-dashed p-4 text-sm text-[var(--text-muted)]"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--blue-highlight)]"
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

// Pricing — Founder Beta featured prominently. Future tiers shown as preview only
// (disabled) to demonstrate value of locking in early. This eliminates all dead
// Stripe link exposure on the pricing page.
function Pricing() {
  const futureTiers = [
    {
      name: "Solo",
      price: 35,
      bullets: ["Unlimited invoices & customers", "Email support", "All live features"],
    },
    {
      name: "Pro",
      price: 50,
      bullets: ["Everything in Solo", "Deposits & partial payments", "Automated follow-ups", "Priority support"],
    },
    {
      name: "Team",
      price: 80,
      bullets: ["Everything in Pro", "Multi-user access", "Team roles & permissions", "Dedicated onboarding"],
    },
  ];

  return (
    <section id="pricing" className="border-t border-[var(--border)] bg-[var(--bg-secondary)]/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
            PRICING
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            One offer. Simple.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            Founder Beta locks in $20/month for as long as you stay subscribed
            — before standard plans go live at $35–$80/month.
          </p>
        </div>

        {/* Featured Founder Beta card */}
        <div className="mx-auto mt-14 max-w-lg">
          <div className="screenshot-frame relative flex flex-col rounded-2xl p-8">
            <div className="absolute -top-3.5 left-8">
              <span className="rounded-full bg-[var(--blue-primary)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Founder Beta — Limited Spots
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--text-dim)]">
                Beta Founder
              </p>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-6xl font-semibold tracking-tight text-[var(--text)]">
                  $20
                </span>
                <span className="text-[var(--text-muted)]">/ month</span>
                <span className="ml-2 rounded-full bg-[var(--success)]/15 px-2.5 py-0.5 text-xs font-medium text-[var(--success)]">
                  Locked while subscribed
                </span>
              </div>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Full access to everything live today, plus every roadmap feature
                the moment it ships — at the founder price, forever.
              </p>
            </div>
            <ul className="mt-7 space-y-3.5 text-sm text-[var(--text-muted)]">
              {[
                "Everything under What's Live today",
                "Every roadmap feature, the moment it ships",
                "Direct say in what we build next",
                "Priority onboarding & personal setup",
                "$20/month locked — even as pricing rises",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <PrimaryCta
              href={STRIPE_FOUNDER_LINK}
              className="mt-8 w-full px-5 py-4 text-[15px]"
            >
              Join Founder Beta — $20/month
              <ArrowRight className="h-4 w-4" />
            </PrimaryCta>
            <p className="mt-4 text-center text-xs text-[var(--text-dim)]">
              After paying, you&rsquo;ll be redirected to a short onboarding form.
              We&rsquo;ll reach out within 24 hours.
            </p>
          </div>
        </div>

        {/* Future tiers preview (disabled) */}
        <div className="mx-auto mt-16 max-w-4xl">
          <p className="mb-6 text-center text-sm font-medium tracking-wider text-[var(--text-dim)]">
            STANDARD PRICING AFTER BETA
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {futureTiers.map((tier) => (
              <div
                key={tier.name}
                className="relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)]/20 p-6 opacity-50"
                aria-label={`${tier.name} plan — coming post-beta`}
              >
                <div className="absolute -top-3 left-5">
                  <span className="rounded-full border border-[var(--border-strong)] bg-[var(--bg-primary)] px-2.5 py-0.5 text-[10px] font-medium tracking-wider text-[var(--text-dim)]">
                    COMING POST-BETA
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-[var(--text-dim)]">
                  {tier.name}
                </p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold text-[var(--text)]">${tier.price}</span>
                  <span className="text-sm text-[var(--text-muted)]">/mo</span>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-[var(--text-dim)]">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-dim)]" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[var(--text-dim)]">
            Founder Beta locks in $20/month — that&rsquo;s{" "}
            <span className="text-[var(--text-muted)]">43% less than Solo</span>{" "}
            and{" "}
            <span className="text-[var(--text-muted)]">75% less than Team</span>.
          </p>
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
          <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Straight answers.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40">
          {FAQ.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-medium text-[var(--text)]">
                {item.q}
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-all group-open:rotate-45 group-open:border-[var(--blue-highlight)] group-open:text-[var(--blue-highlight)]">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-muted)]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function QrSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)]/40">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          <div className="shrink-0">
            <div className="screenshot-frame rounded-2xl p-3">
              <Image
                src="/qr.png"
                alt="QR code to join Invoice Pilot Pro Founder Beta"
                width={160}
                height={160}
                className="h-40 w-40 rounded-xl"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <QrCode className="h-4 w-4 text-[var(--blue-highlight)]" />
              <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
                SHARE AT THE JOB SITE
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Know another contractor
              <br />
              who needs to get paid faster?
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Scan the QR code to open this page. Works great for sharing on
              Instagram, at trade shows, and in group chats.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href={STRIPE_FOUNDER_LINK}
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium"
              >
                Join now — $20/month
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-2 text-sm text-[var(--text-dim)]">
                <Clock className="h-4 w-4" />
                Setup takes under 5 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)]">
      <div className="absolute inset-x-0 top-0 -z-0 h-px bg-gradient-to-r from-transparent via-[var(--blue-highlight)]/60 to-transparent" />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <FounderBadge />
        <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Stop chasing payments.
          <br />
          <span className="text-gradient-blue">Start tracking them.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--text-muted)] md:text-lg">
          Join Founder Beta and get full access today — locked in at $20/month
          for as long as you stay subscribed. Standard pricing starts at
          $35/month after beta.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryCta className="px-7 py-4 text-base">
            Join Founder Beta — $20/month
            <ArrowRight className="h-4 w-4" />
          </PrimaryCta>
          <a
            href={FORM_LINK}
            className="text-sm text-[var(--text-muted)] underline-offset-4 transition hover:text-[var(--text)] hover:underline"
          >
            Or apply with a quick form →
          </a>
        </div>
        <div className="mx-auto mt-10 grid max-w-sm grid-cols-3 gap-4 text-center">
          {[
            { label: "Live today", sub: "No waitlist" },
            { label: "$20/month", sub: "Locked in" },
            { label: "24 hr", sub: "Onboarding" },
          ].map(({ label, sub }) => (
            <div key={label} className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-3">
              <p className="text-lg font-semibold text-[var(--text)]">{label}</p>
              <p className="mt-0.5 text-xs text-[var(--text-dim)]">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-nav.png"
            alt="Invoice Pilot Pro"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-sm font-medium tracking-wider text-[var(--text)]">
            INVOICE PILOT <span className="text-[var(--blue-highlight)]">PRO</span>
          </span>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[var(--text-dim)] md:items-end">
          <p>Invoice Pilot Pro is a product of 6 Star Service.</p>
          <p>
            Contact:{" "}
            <a href="mailto:6starservice6@gmail.com" className="hover:text-[var(--text)]">
              6starservice6@gmail.com
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--text)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--text)]">
              Terms of Service
            </Link>
          </div>
          <p>© {new Date().getFullYear()} 6 Star Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav ctaHref={STRIPE_FOUNDER_LINK} />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <FounderExplainer />
        <Roadmap />
        <Pricing />
        <Faq />
        <QrSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
