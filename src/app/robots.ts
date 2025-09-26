// src/app/robots.ts
import type { MetadataRoute } from "next"

const baseUrl = "https://platinumlabs.vercel.app"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",       // interne API-Routen
          "/_next/",     // Next.js Build-Dateien
          "/assets/",    // optionale statische Assets, falls vorhanden
          "/private/",   // Platzhalter für geschützte Bereiche
        ],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl,
  }
}
