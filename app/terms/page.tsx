import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Invoice Pilot Pro",
  description:
    "Terms of Service for Invoice Pilot Pro, a product of 6 Star Service.",
};

export default function TermsPage() {
  const updated = "June 20, 2026";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" className="text-sm text-text-muted hover:text-text">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-text-dim">Last updated: {updated}</p>

      <section className="prose prose-invert mt-10 space-y-6 text-text-muted">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
          use of Invoice Pilot Pro (the &ldquo;Service&rdquo;), a product of 6
          Star Service (&ldquo;6 Star Service,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By creating an account,
          subscribing, or using the Service, you agree to these Terms.
        </p>

        <h2 className="text-xl font-semibold text-text">
          Beta Software Disclaimer
        </h2>
        <p>
          Invoice Pilot Pro is currently offered as beta software. This means
          features are still under active development, may change without notice,
          and may contain bugs, errors, or inaccuracies. The Service is provided
          on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. You
          should not rely on the Service as your sole system of record and are
          responsible for maintaining your own backups and books.
        </p>

        <h2 className="text-xl font-semibold text-text">
          Accounts and Eligibility
        </h2>
        <p>
          You must be at least 18 years old and capable of forming a binding
          contract to use the Service. You are responsible for maintaining the
          confidentiality of your account credentials and for all activity that
          occurs under your account.
        </p>

        <h2 className="text-xl font-semibold text-text">Payment Terms</h2>
        <p>
          Subscription fees are billed in advance on a recurring basis (monthly
          unless otherwise stated) and are processed by Stripe, Inc. By
          subscribing, you authorize us and Stripe to charge your payment method
          for the applicable subscription fees, taxes, and any other charges you
          may incur. All fees are stated in U.S. dollars and are non-refundable
          except where required by law.
        </p>

        <h2 className="text-xl font-semibold text-text">Subscription</h2>
        <p>
          Your subscription renews automatically at the end of each billing
          period at the then-applicable rate, unless you cancel before the
          renewal date. Founder Beta subscribers retain their locked
          subscription price for as long as their subscription remains active
          and uninterrupted; if a subscription is canceled and later resumed, it
          will resume at the then-current standard rate. You may cancel at any
          time, effective at the end of the current billing period. We may
          modify, suspend, or discontinue the Service or any feature at any
          time, with or without notice.
        </p>

        <h2 className="text-xl font-semibold text-text">Acceptable Use</h2>
        <p>
          You agree not to misuse the Service, including by attempting to access
          it through unauthorized means, interfering with its operation, using
          it to transmit unlawful content, or using it in violation of
          applicable laws or third-party rights.
        </p>

        <h2 className="text-xl font-semibold text-text">
          Disclaimer of Warranties
        </h2>
        <p>
          To the maximum extent permitted by law, the Service is provided
          without warranties of any kind, whether express or implied, including
          but not limited to implied warranties of merchantability, fitness for
          a particular purpose, and non-infringement. We do not warrant that
          the Service will be uninterrupted, error-free, or fully secure.
        </p>

        <h2 className="text-xl font-semibold text-text">
          Limitation of Liability
        </h2>
        <p>
          To the maximum extent permitted by applicable law, in no event shall 6
          Star Service, its owners, employees, or affiliates be liable for any
          indirect, incidental, special, consequential, exemplary, or punitive
          damages, or for any loss of profits, revenue, data, or goodwill,
          arising out of or in connection with your use of, or inability to use,
          the Service, even if advised of the possibility of such damages. Our
          aggregate liability for any claim arising out of or relating to these
          Terms or the Service shall not exceed the greater of (a) the amount
          you paid us for the Service in the twelve (12) months preceding the
          event giving rise to the claim, or (b) one hundred U.S. dollars
          ($100).
        </p>

        <h2 className="text-xl font-semibold text-text">Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless 6 Star Service and its
          affiliates from any claims, damages, liabilities, and expenses arising
          out of your use of the Service, your violation of these Terms, or
          your violation of any rights of a third party.
        </p>

        <h2 className="text-xl font-semibold text-text">
          Governing Law and Venue
        </h2>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of the State of Florida, without regard to its conflict of laws
          principles. Any dispute arising out of or relating to these Terms or
          the Service shall be brought exclusively in the state or federal
          courts located in the State of Florida, and you consent to the
          personal jurisdiction of those courts.
        </p>

        <h2 className="text-xl font-semibold text-text">Changes to the Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will be
          reflected by updating the &ldquo;Last updated&rdquo; date above.
          Continued use of the Service after changes take effect constitutes
          acceptance of the revised Terms.
        </p>

        <h2 className="text-xl font-semibold text-text">Contact</h2>
        <p>
          Questions about these Terms may be sent to 6 Star Service at{" "}
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
