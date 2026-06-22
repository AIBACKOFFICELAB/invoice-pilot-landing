"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Rocket, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "#live", label: "What's Live" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav({ ctaHref }: { ctaHref: string }) {
  const [open, setOpen] = useState(false);

  // Close menu on route change / hash navigation
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="nav-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo-nav.png"
            alt="Invoice Pilot Pro"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="text-[15px] font-semibold tracking-[0.18em] text-[var(--text)]">
            INVOICE PILOT <span className="text-[var(--blue-highlight)]">PRO</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-9 text-sm text-[var(--text-muted)] md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="btn-primary hidden items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-medium sm:inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-highlight)]"
          >
            Join Founder Beta — $20/month
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute inset-x-0 top-full border-t border-[var(--border)] bg-[var(--bg-primary)] px-6 pb-8 pt-6 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[var(--text-muted)] transition hover:bg-white/5 hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={ctaHref}
            className="btn-primary mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-[15px] font-medium"
            onClick={() => setOpen(false)}
          >
            <Rocket className="h-4 w-4" />
            Join Founder Beta — $20/month
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[var(--text-dim)]">
            Locked pricing · Limited spots
          </div>
        </div>
      )}
    </header>
  );
}
