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
  Laptop,
  Briefcase,
  Building2,
  Palette,
  Store,
  ArrowRight,
  ShieldCheck,
  QrCode,
  Clock,
  Lock,
  Heart,
  Play,
} from "lucide-react";
import { Nav } from "./components/nav";

// ─── CONFIGURATION ────────────────────────────────────────────────────────────
// Stripe Payment Link — Founder Beta $20/month
// In Stripe: "After payment → Redirect" is set to FORM_LINK for seamless onboarding.
const STRIPE_FOUNDER_LINK = "https://buy.stripe.com/28EbIT7cpgI4eal9PBbQY00";

// Beta onboarding form — Google Form
const FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScfiuau6ECNdQrMpVd1IGCNJbqskYPLAMFxseJbPkkfPhEw6w/viewform?usp=header";

// ─── CONTENT ──────────────────────────────────────────────────────────────────

const LIVE_TODAY_ITEMS = [
  { icon: FileText, label: "Invoicing" },
  { icon: Users, label: "Customer management" },
  { icon: CircleDollarSign, label: "Payment tracking" },
  { icon: LayoutDashboard, label: "Dashboard" },
];

const TRADES = [
  { icon: Wrench, label: "Contractors" },
  { icon: Laptop, label: "Freelancers" },
  { icon: Briefcase, label: "Consultants" },
  { icon: Building2, label: "Agencies" },
  { icon: Palette, label: "Creators" },
  { icon: Store, label: "Small Businesses" },
  { icon: Users, label: "Service Businesses" },
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

// Everything below shipped across 12 development sprints and is live in the app today.
const LIVE_CAPABILITIES = [
  "Dashboard",
  "Customers",
  "Invoice creation",
  "Invoice editing",
  "Public invoice pages",
  "Stripe payments",
  "Payment status tracking",
  "Company branding",
  "Logo upload",
  "Customer management",
  "Reminder engine",
  "Invoice timeline",
  "PDF export",
  "Authentication",
  "Responsive dashboard",
  "Secure cloud storage",
];

// True future work only — everything already shipped is in LIVE_CAPABILITIES above.
const ROADMAP = [
  "Voice-to-Invoice",
  "AI Follow-Up Agent",
  "Intelligent Document Processing (IDP)",
  "AI bookkeeping",
  "Mobile apps (iOS & Android)",
  "Analytics & advanced reporting",
  "Recurring invoices",
  "Team collaboration",
  "Integrations",
];

const FAQ = [
  {
    q: "Is this live today, or am I joining a waitlist?",
    a: "This is live. Founder Beta members get an account today and can start creating invoices and managing customers right now — this isn't a waitlist.",
  },
  {
    q: "Can I take payments through the app right now?",
    a: "Yes. Invoice Pilot Pro supports online payments through Stripe and public invoice pages your customers can open and pay from directly — alongside automated reminders to nudge slow payers. Recurring invoices and a few advanced payment options are still on the roadmap, and Founder Beta members get them automatically the moment they ship.",
  },
  {
    q: "How do I actually get paid?",
    a: "Send a professional invoice in seconds, share its public invoice page, and your customer can pay online via Stripe. Prefer to collect offline (cash, check, Zelle, bank transfer)? Just mark it paid — your dashboard, timeline, and records update instantly either way.",
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
    a: "It means real, but early. You'll get full access to everything live today, you may hit the occasional rough edge, and your feedback directly shapes what we build next.",
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

// ─── DEVICE SHOWCASE ──────────────────────────────────────────────────────────
// Desktop browser-frame mockup + phone frame side by side.
// Uses existing dashboard-screenshot.png for both — no PII in that image.
// Swap src values when dedicated mobile screenshots are available.
function DeviceShowcase() {
  return (
    <div className="relative flex items-end justify-center gap-3 sm:gap-4">
      <div className="glow-rings" aria-hidden="true" />

      {/* Desktop — browser frame */}
      <div className="relative z-10 w-full max-w-[560px] flex-1">
        {/* Chrome bar */}
        <div className="flex items-center gap-1.5 rounded-t-xl border border-b-0 border-[var(--border-strong)] bg-[var(--surface-raised)] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/75" />
          <div className="ml-2 flex-1 rounded-md bg-[var(--surface)]/80 px-3 py-1 text-[11px] text-[var(--text-dim)]">
            invoicepilotpro.app
          </div>
        </div>
        {/* Screenshot */}
        <div className="screenshot-frame overflow-hidden rounded-b-xl rounded-t-none border-t-0">
          <Image
            src="/dashboard-screenshot.png"
            alt="Invoice Pilot Pro dashboard — invoice list, payment status, and business overview"
            width={1200}
            height={760}
            className="w-full"
            priority
          />
        </div>
      </div>

      {/* Mobile — phone frame (hidden on xs, shown sm+) */}
      <div className="relative z-10 mb-4 hidden shrink-0 sm:block">
        <div
          className="phone-frame overflow-hidden rounded-[28px] border-[5px] border-[var(--surface-raised)]"
          style={{ width: 118 }}
        >
          {/* Notch */}
          <div className="flex justify-center bg-[var(--surface-raised)] py-1.5">
            <div className="h-2 w-10 rounded-full bg-[var(--bg-primary)]/60" />
          </div>
          {/* Screen */}
          <div className="overflow-hidden" style={{ height: 216 }}>
            <Image
              src="/media/dashboard-mobile.jpeg"
              alt="Invoice Pilot Pro on mobile — accounts receivable overview"
              width={390}
              height={812}
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Home bar */}
          <div className="flex justify-center bg-[var(--surface-raised)] py-2">
            <div className="h-1 w-8 rounded-full bg-[var(--text-dim)]/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SECTIONS ─────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-20 pb-20 lg:grid-cols-[1fr_1.15fr] lg:gap-10 lg:pt-28">
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
            Invoice Pilot Pro helps service businesses create professional
            invoices, track payments, and get paid faster—without the complexity
            of traditional accounting software.
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

          {/* Live today strip */}
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
          <DeviceShowcase />
        </div>
      </div>

      {/* Privacy note — below screenshot on mobile, aligned right on lg */}
      <div className="mx-auto max-w-7xl px-6 pb-6">
        <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-muted)] lg:justify-end">
          <ShieldCheck className="h-3.5 w-3.5 text-[var(--success)]" />
          Real product screenshot — customer details blurred for privacy
        </div>
      </div>
    </section>
  );
}

const TRUST_BADGES = [
  { icon: CheckCircle2, label: "Mobile Friendly" },
  { icon: ShieldCheck, label: "Secure Stripe Payments" },
  { icon: Clock, label: "Setup in Under 5 Minutes" },
  { icon: Lock, label: "Founder Pricing Locked" },
];

function TrustBadges() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--bg-secondary)]/40">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-[var(--text-muted)]"
            >
              <Icon
                className="h-4 w-4 text-[var(--success)]"
                strokeWidth={1.75}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs tracking-[0.18em] text-[var(--text-dim)]">
          Built for{" "}
          <span className="text-[var(--text-muted)]">Contractors</span>
          {" • "}
          <span className="text-[var(--text-muted)]">Freelancers</span>
          {" • "}
          <span className="text-[var(--text-muted)]">Consultants</span>
          {" • "}
          <span className="text-[var(--text-muted)]">Agencies</span>
          {" • "}
          <span className="text-[var(--text-muted)]">Service Businesses</span>
        </p>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--bg-secondary)]/40">
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
              <Icon
                className="h-4 w-4 text-[var(--blue-highlight)]"
                strokeWidth={1.75}
              />
              <span className="uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── VIDEO SECTION ─────────────────────────────────────────────────────────────
// References public/media/DEMO.mov — served statically by Next.js.
// autoPlay + muted satisfies browser autoplay policies.
// controls lets users unmute/scrub; loop keeps it ambient.
function VideoSection() {
  return (
    <section
      id="demo"
      className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--bg-secondary)]/40"
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
            DEMO
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            See Invoice Pilot Pro in Action
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[var(--text-muted)]">
            Watch how quickly you can create an invoice, send it, and get paid.
          </p>
        </div>

        {/* Browser-chrome wrapper */}
        <div className="overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] shadow-2xl">
          {/* Chrome bar */}
          <div className="flex items-center gap-1.5 border-b border-[var(--border)] bg-[var(--surface-raised)] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/75" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/75" />
            <div className="ml-2 flex flex-1 items-center gap-2 rounded-md bg-[var(--surface)]/80 px-3 py-1 text-[11px] text-[var(--text-dim)]">
              <Play className="h-3 w-3 shrink-0" />
              invoicepilotpro.app — Live Demo
            </div>
          </div>

          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            className="aspect-video w-full bg-[var(--bg-primary)] object-cover"
            aria-label="Invoice Pilot Pro product demo"
          >
            <source src="/media/DEMO.mov" type="video/quicktime" />
            <source src="/media/DEMO.mp4" type="video/mp4" />
          </video>
        </div>

        <p className="mt-4 text-center text-xs text-[var(--text-dim)]">
          Full product walkthrough · Recorded in the live app
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="live" className="relative scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
            WHAT&rsquo;S LIVE TODAY
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Everything you need to run your business.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
            No bookkeeping degree required. No bloat. Just the tools service
            businesses use to create invoices, track payments, and know who owes
            them money — all shipped and live in the app today.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="feature-card group rounded-2xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--blue-primary)]/10 ring-1 ring-inset ring-[var(--blue-primary)]/20 transition-all group-hover:bg-[var(--blue-primary)]/15 group-hover:ring-[var(--blue-primary)]/30">
                <Icon
                  className="h-5 w-5 text-[var(--blue-highlight)]"
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-[var(--text)]">
                {title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--text-muted)]">
                {body}
              </p>
            </article>
          ))}
        </div>

        {/* Shipped-capabilities checklist */}
        <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-[var(--text)]">
              Live in the app right now
            </h3>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--success)]/25 bg-[var(--success)]/10 px-3 py-1 text-xs font-medium text-[var(--success)]">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--success)]"
                aria-hidden="true"
              />
              Shipped &amp; ready
            </span>
          </div>
          <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {LIVE_CAPABILITIES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14px] text-[var(--text-muted)]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
                body: "Voice-to-Invoice, AI follow-ups, mobile apps, integrations — every item ships to you the moment it's live.",
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
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {item.body}
                  </p>
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
    <section id="roadmap" className="relative scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
            ROADMAP
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-[40px]">
            Coming next, included in Founder Beta.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)]">
            The core product is already live. These are the next big bets —
            Founder Beta members get every one of them the moment it ships, at
            no extra cost, no re-signup required.
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

function Pricing() {
  const futureTiers = [
    {
      name: "Solo",
      price: 35,
      bullets: [
        "Unlimited invoices & customers",
        "Email support",
        "All live features",
      ],
    },
    {
      name: "Pro",
      price: 50,
      bullets: [
        "Everything in Solo",
        "Deposits & partial payments",
        "Automated follow-ups",
        "Priority support",
      ],
    },
    {
      name: "Team",
      price: 80,
      bullets: [
        "Everything in Pro",
        "Multi-user access",
        "Team roles & permissions",
        "Dedicated onboarding",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--bg-secondary)]/40"
    >
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
                "Everything live today — invoices, customers, payment tracking",
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
              After paying, you&rsquo;ll be redirected to a short onboarding
              form. We&rsquo;ll reach out within 24 hours.
            </p>
          </div>
        </div>

        {/* Future tiers preview — disabled / greyed out */}
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
                  <span className="text-3xl font-semibold text-[var(--text)]">
                    ${tier.price}
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">/mo</span>
                </div>
                <ul className="mt-4 space-y-2 text-xs text-[var(--text-dim)]">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--text-dim)]"
                        aria-hidden="true"
                      />
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
            <span className="text-[var(--text-muted)]">75% less than Team</span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20">
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
                alt="QR code — scan to open Invoice Pilot Pro at invoicepilotpro.app"
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
                SHARE WITH A FRIEND OR CLIENT
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Know someone who wants
              <br />
              to get paid faster?
            </h2>
            <p className="mt-3 text-base text-[var(--text-muted)]">
              Scan the QR code to instantly open{" "}
              <span className="text-[var(--text)]">invoicepilotpro.app</span>.
              Perfect for referrals, networking events, social media, and group
              chats.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-[var(--text-dim)]">
              <Clock className="h-4 w-4" />
              Setup takes under 5 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderStory() {
  return (
    <section className="relative border-t border-[var(--border)]">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-[var(--blue-highlight)]" />
          <p className="font-mono-data text-xs tracking-[0.22em] text-[var(--blue-highlight)]">
            OUR STORY
          </p>
        </div>
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-[40px]">
          Built by someone who
          <br />
          <span className="text-gradient-blue">lived the problem.</span>
        </h2>
        <div className="mt-7 space-y-5 text-base leading-relaxed text-[var(--text-muted)]">
          <p>
            Invoice Pilot Pro wasn&rsquo;t created inside a boardroom. It was
            built by a real service business owner after years of dealing with
            late payments, forgotten invoices, paperwork, and chasing customers
            for money.
          </p>
          <p>
            Every feature exists because it solves a real operational problem
            experienced in the field.
          </p>
          <p>
            Whether you&rsquo;re a contractor, freelancer, consultant, agency,
            or service business owner, Invoice Pilot Pro was designed to help
            you spend less time managing paperwork and more time growing your
            business.
          </p>
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
            <div
              key={label}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-3"
            >
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
            <a
              href="mailto:6starservice6@gmail.com"
              className="hover:text-[var(--text)]"
            >
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
        <TrustBadges />
        <TrustStrip />
        <VideoSection />
        <Features />
        <FounderExplainer />
        <Roadmap />
        <Pricing />
        <Faq />
        <QrSection />
        <FounderStory />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
