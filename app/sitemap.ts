import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://casa-maiz.esteban-dev.com'
  const now = new Date()

  const fixed = ['', '/menu', '/journal', '/reserve'].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const posts = getAllPosts().map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...fixed, ...posts]
}
