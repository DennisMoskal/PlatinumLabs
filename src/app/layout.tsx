import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlatinumLabs - Trade Smarter | Professional Crypto Trading Tools & AI Bots",
  description:
    "Professional crypto trading tools, AI-powered bots, and advanced analytics for DeFi traders. Discover CryptoPulse Pro, Telegram trading bots, and institutional-grade solutions for optimal trading performance.",
  keywords:
    "crypto trading, trading bots, DeFi, CryptoPulse Pro, Telegram bots, crypto analytics, trading tools, blockchain, cryptocurrency, AI trading, copy trading, sniping bots",
  authors: [{ name: "Dennis Moskal" }],
  creator: "PlatinumLabs",
  publisher: "PlatinumLabs",
  applicationName: "PlatinumLabs",
  metadataBase: new URL("https://platinumlabs.vercel.app"),
  alternates: {
    canonical: "https://platinumlabs.vercel.app/",
  },
  openGraph: {
    title: "PlatinumLabs - Trade Smarter",
    description:
      "Professional crypto trading tools, AI-powered bots, and advanced analytics for the modern DeFi trader.",
    url: "https://platinumlabs.vercel.app",
    siteName: "PlatinumLabs",
    images: [
      {
        url: "/og-image.jpg", // wird relativ zu metadataBase aufgelöst
        width: 1200,
        height: 630,
        alt: "PlatinumLabs - Professional Crypto Trading Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlatinumLabs - Trade Smarter",
    description:
      "Professional crypto trading tools, AI-powered bots, and advanced analytics for DeFi traders.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "gSAsxWmOFdGA-fzAf37lxqrJyMnFL-TiscNlX5FRriI",
  },

  /** 🔽 FAVICONS aus /public/images */
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },

  /** 🔽 PWA/Browser-UI */
  manifest: "/site.webmanifest",
  themeColor: "#0b0b10",

  /** 🔽 Mobile-SEO (Viewport) */
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Organization JSON-LD (deins bleibt, nur leicht formatiert) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PlatinumLabs",
              description:
                "Professional crypto trading tools and AI-powered solutions for the modern DeFi trader",
              url: "https://platinumlabs.vercel.app",
              logo: "https://platinumlabs.vercel.app/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+49-172-205-8855",
                contactType: "customer service",
                email: "dennismoskal@yahoo.com",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Westpreußenstraße 26",
                addressLocality: "Bonn",
                postalCode: "53119",
                addressCountry: "DE",
              },
              founder: {
                "@type": "Person",
                name: "Dennis Moskal",
              },
              sameAs: ["https://moskaldennis.gumroad.com/l/CryptoPulsePro"],
            }),
          }}
        />
        {/*
          OPTIONAL: SoftwareApplication/Product JSON-LD für dein Bot/Tool (SEO-Boost auf Produkt-Keywords).
          → Wenn du willst, ergänze ich das maßgeschneidert für "CryptoPulse Pro" & deine Bots.
        */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
