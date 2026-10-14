import type { MetadataRoute } from 'next'
import { cityPages, services } from '@/lib/content'
import { BASE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entry = (path: string, priority: number, changeFrequency: 'monthly' | 'yearly' = 'monthly') => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  })
  return [
    entry('', 1),
    entry('/services', 0.9),
    ...services.map((s) => entry(`/services/${s.slug}`, s.slug === 'automatic-gates' ? 0.9 : 0.8)),
    ...cityPages.map((c) => entry(`/services/${c.slug}`, 0.8)),
    entry('/about', 0.6),
    entry('/gallery', 0.6),
    entry('/service-area', 0.6),
    entry('/contact', 0.7),
    entry('/privacy', 0.3, 'yearly'),
    entry('/accessibility', 0.3, 'yearly'),
  ]
}
