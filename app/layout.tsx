import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Pilot Pro — Get Paid Faster Without Chasing Customers",
  description:
    "Invoice Pilot Pro helps service businesses create professional invoices, track payments, and get paid faster — without the complexity of traditional accounting software. Founder Beta now open at $20/month.",
  metadataBase: new URL("https://invoicepilotpro.app"),
  applicationName: "Invoice Pilot Pro",
  authors: [{ name: "6 Star Service" }],
  creator: "6 Star Service",
  publisher: "6 Star Service",
  keywords: [
    "invoicing software for small business",
    "service business invoicing",
    "freelancer invoice app",
    "get paid faster",
    "invoice tracking",
    "small business payment tracking",
    "contractor invoicing",
    "professional invoice app",
  ],
  openGraph: {
    title: "Invoice Pilot Pro — Get Paid Faster Without Chasing Customers",
    description:
      "Founder Beta now open at $20/month. Professional invoices, customer management, and payment tracking for service businesses — not accountants.",
    url: "https://invoicepilotpro.app",
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
      "Founder Beta now open. Professional invoices & payment tracking for service businesses. $20/month locked while subscribed.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  alternates: {
    canonical: "https://invoicepilotpro.app",
  },
  other: {
    "theme-color": "#07111F",
    "msapplication-TileColor": "#07111F",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Invoice Pilot Pro",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Professional invoicing, customer management, and payment tracking for service businesses. Create invoices, track payments, and get paid faster without chasing customers.",
  url: "https://invoicepilotpro.app",
  image: "https://invoicepilotpro.app/og-image.png",
  author: {
    "@type": "Organization",
    name: "6 Star Service",
    url: "https://invoicepilotpro.app",
  },
  offers: {
    "@type": "Offer",
    price: "20",
    priceCurrency: "USD",
    description: "Founder Beta — $20/month locked while subscribed",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Invoice creation and editing",
    "Customer management",
    "Stripe payment integration",
    "Public invoice pages",
    "Payment status tracking",
    "PDF export",
    "Reminder engine",
    "Company branding and logo upload",
    "Invoice timeline",
    "Responsive dashboard",
    "Secure cloud storage",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
