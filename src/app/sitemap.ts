// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ||
  'https://platinumlabs.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString()

  // Liste deiner statischen Seiten
  const routes: Array<MetadataRoute.Sitemap[0]> = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1 },

    // Rechtliches
    { url: `${baseUrl}/legal/cookies`,    lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/impressum`,  lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/privacy`,    lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/terms`,      lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  return routes
}
