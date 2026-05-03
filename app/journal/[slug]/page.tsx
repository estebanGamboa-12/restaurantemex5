import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPost, formatDate } from '@/lib/posts'
import Footer from '@/components/sections/Footer'
import { getTenant } from '@/lib/tenant'

type Params = { slug: string }

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover, width: 1600, height: 900, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  }
}

export default function PostPage({ params }: { params: Params }) {
  const post = getPost(params.slug)
  const tenant = getTenant()
  if (!post) notFound()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: tenant.name },
    mainEntityOfPage: `https://${tenant.slug}.esteban-dev.com/journal/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <main className="bg-bone min-h-screen">
        <article>
          <header className="container-x pt-32 md:pt-40 pb-12">
            <Link href="/journal" className="label inline-flex items-center gap-2 mb-10" data-cursor="BACK">
              <span aria-hidden>&lt;-</span> Volver a historias
            </Link>
            <span className="label block mb-6">{post.category}</span>
            <h1 className="display text-[clamp(40px,7.5vw,124px)] mb-10 max-w-[18ch]">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-x-10 gap-y-2 label">
              <span>Por {post.author}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>{post.readTime} min</span>
            </div>
          </header>

          <div className="relative aspect-[16/9] md:aspect-[16/7] mb-16 md:mb-24">
            <Image src={post.cover} alt={post.title} fill priority className="object-cover" sizes="100vw" />
          </div>

          <div
            className="container-x prose-noir max-w-3xl mx-auto pb-24 md:pb-32"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer tenant={tenant} />

      <style>{`
        .prose-noir h2 {
          font-family: var(--font-inter-tight), system-ui, sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
          font-size: clamp(28px, 3.5vw, 44px);
          line-height: 1.1;
          margin-top: 3rem;
          margin-bottom: 1.25rem;
        }
        .prose-noir p {
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 1.5rem;
          color: rgba(10,9,8,0.78);
        }
        .prose-noir p:first-of-type::first-line {
          font-variant: small-caps;
          letter-spacing: 0.04em;
        }
      `}</style>
    </>
  )
}
