import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Invoice Pilot Pro",
  description:
    "Privacy Policy for Invoice Pilot Pro, a product of 6 Star Service.",
};

export default function PrivacyPage() {
  const updated = "June 20, 2026";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm text-text-muted hover:text-text">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-text-dim">Last updated: {updated}</p>

      <section className="prose prose-invert mt-10 space-y-6 text-text-muted">
        <p>
          Invoice Pilot Pro (&ldquo;Invoice Pilot Pro,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a product of 6 Star Service.
          This Privacy Policy explains how we collect, use, and protect
          information when you visit our website or use our services.
        </p>

        <h2 className="text-xl font-semibold text-text">Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you sign up for
          Founder Beta, contact us, or use Invoice Pilot Pro. This may include
          your name, email address, business information, customer records you
          create within the product, and invoice and payment data.
        </p>

        <h2 className="text-xl font-semibold text-text">Email Collection</h2>
        <p>
          When you sign up, subscribe, or contact us, we collect and store your
          email address. We use it to provide the service, send account-related
          messages, respond to inquiries, and share product updates. You may opt
          out of non-essential emails at any time by contacting us.
        </p>

        <h2 className="text-xl font-semibold text-text">
          Stripe Payment Processing
        </h2>
        <p>
          Subscription payments are processed by Stripe, Inc. We do not store
          your full payment card details on our servers. When you subscribe,
          your payment information is collected and processed directly by
          Stripe under their own terms and privacy policy
          (https://stripe.com/privacy). We receive limited information from
          Stripe such as transaction status, the last four digits of your card,
          card brand, and billing metadata necessary to manage your subscription.
        </p>

        <h2 className="text-xl font-semibold text-text">
          How We Use Your Information
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>To provide, operate, and improve Invoice Pilot Pro.</li>
          <li>To process subscription payments through Stripe.</li>
          <li>To communicate with you about your account or support requests.</li>
          <li>To comply with legal obligations and prevent fraud or abuse.</li>
        </ul>

        <h2 className="text-xl font-semibold text-text">
          Customer Data Protection
        </h2>
        <p>
          We take the protection of your customer data seriously. Data is
          transmitted over encrypted connections (HTTPS/TLS) and stored with
          reputable cloud providers using industry-standard security controls.
          Access to customer data is restricted to authorized personnel of 6
          Star Service who need it to operate the service. We do not sell your
          data or your end-customers&rsquo; data, and we do not share it with
          third parties except as required to provide the service (for example,
          our hosting and payment-processing providers) or as required by law.
        </p>

        <h2 className="text-xl font-semibold text-text">Data Retention</h2>
        <p>
          We retain account and customer data for as long as your account is
          active or as needed to provide the service. You may request deletion
          of your account and associated data by contacting us at the email
          below.
        </p>

        <h2 className="text-xl font-semibold text-text">Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          information at any time by emailing us. We will respond within a
          reasonable timeframe.
        </p>

        <h2 className="text-xl font-semibold text-text">
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes
          will be reflected by updating the &ldquo;Last updated&rdquo; date
          above.
        </p>

        <h2 className="text-xl font-semibold text-text">Contact</h2>
        <p>
          Questions about this Privacy Policy may be sent to 6 Star Service at{" "}
          <a
            href="mailto:6starservice6@gmail.com"
            className="text-blue-highlight hover:underline"
          >
            6starservice6@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
