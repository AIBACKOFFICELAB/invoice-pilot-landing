import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Pilot Pro — Get Paid Faster Without Chasing Customers",
  description:
    "Invoice Pilot Pro helps contractors, plumbers, HVAC companies, electricians, handymen, and freelancers create professional invoices, track payments, and stay organized — without the complexity of QuickBooks. Founder Beta now open.",
  metadataBase: new URL("https://invoicepilotpro.com"),
  openGraph: {
    title: "Invoice Pilot Pro — Get Paid Faster Without Chasing Customers",
    description:
      "Founder Beta now open. Professional invoices, customer management, and payment tracking built for contractors.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Pilot Pro",
    description: "Get paid faster without chasing customers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
