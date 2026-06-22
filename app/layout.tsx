import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Pilot Pro — Get Paid Faster Without Chasing Customers",
  description:
    "Invoice Pilot Pro helps contractors, plumbers, HVAC companies, electricians, handymen, and service businesses create professional invoices, track payments, and stay organized — without the complexity of QuickBooks. Founder Beta now open at $20/month.",
  metadataBase: new URL("https://invoicepilotpro.com"),
  applicationName: "Invoice Pilot Pro",
  authors: [{ name: "6 Star Service" }],
  creator: "6 Star Service",
  publisher: "6 Star Service",
  keywords: [
    "contractor invoicing software",
    "invoice app for contractors",
    "plumber invoicing",
    "HVAC invoicing",
    "electrician invoice app",
    "get paid faster",
    "invoice tracking",
    "contractor business management",
  ],
  openGraph: {
    title: "Invoice Pilot Pro — Get Paid Faster Without Chasing Customers",
    description:
      "Founder Beta now open at $20/month. Professional invoices, customer management, and payment tracking built for contractors — not accountants.",
    url: "https://invoicepilotpro.com",
    siteName: "Invoice Pilot Pro",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Invoice Pilot Pro — Get Paid Faster Without Chasing Customers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Pilot Pro — Get Paid Faster Without Chasing Customers",
    description:
      "Founder Beta now open. Professional invoices & payment tracking built for contractors. $20/month locked while subscribed.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  other: {
    "theme-color": "#07111F",
    "msapplication-TileColor": "#07111F",
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
