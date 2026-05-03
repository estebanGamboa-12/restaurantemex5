import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, formatDate } from '@/lib/posts'
import Footer from '@/components/sections/Footer'
import { getTenant } from '@/lib/tenant'

export const metadata: Metadata = {
  title: 'Historias',
  description:
    'Agenda, cocina y novedades de Casa Maiz.',
  alternates: { canonical: '/journal' },
  openGraph: {
    title: 'Historias / Casa Maiz',
    description:
      'Agenda, cocina y novedades de Casa Maiz.',
  },
}

export default function JournalPage() {
  const posts = getAllPosts()
  const tenant = getTenant()

  return (
    <>
      <main className="bg-bone min-h-screen">
        <section className="container-x pt-32 md:pt-40 pb-16">
          <span className="label block mb-8">(00) Historias</span>
          <h1 className="display text-[clamp(56px,12vw,200px)]">
            Lo que<br /><em>se cocina</em><span className="text-rust">.</span>
          </h1>
          <p className="mt-10 max-w-[52ch] text-base md:text-lg leading-relaxed text-ink/70">
            Noches especiales, platos que vuelven, salsas de temporada y planes
            para sentarse sin prisa.
          </p>
        </section>

        <section className="container-x pb-24 md:pb-32">
          <ul className="border-t border-ink/15">
            {posts.map((p) => (
              <li key={p.slug} className="border-b border-ink/15">
                <Link
                  href={`/journal/${p.slug}`}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center py-10 md:py-12 group"
                  data-cursor="READ"
                >
                  <span className="md:col-span-1 label">{p.category}</span>
                  <h2 className="md:col-span-6 font-sans font-semibold text-2xl md:text-4xl tracking-tight2 leading-[1.1] group-hover:italic group-hover:font-serif group-hover:font-normal group-hover:text-rust transition-all duration-500">
                    {p.title}
                  </h2>
                  <time dateTime={p.date} className="md:col-span-2 label">
                    {formatDate(p.date)}
                  </time>
                  <div className="md:col-span-2 relative aspect-[4/3] img-hover">
                    <Image src={p.cover} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 20vw" />
                  </div>
                  <span className="md:col-span-1 justify-self-end label group-hover:text-rust transition-colors">-&gt;</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer tenant={tenant} />
    </>
  )
}
