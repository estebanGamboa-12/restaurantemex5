'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Post, formatDate } from '@/lib/posts'

export default function Journal({ posts }: { posts: Post[] }) {
  return (
    <section className="bg-bone py-24 md:py-40">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-24 items-end">
          <span className="label col-span-12 md:col-span-3">(05) Agenda</span>
          <h2 className="col-span-12 md:col-span-6 display text-[clamp(40px,8vw,140px)]">
            Lo que<br /><em>se cocina</em><span className="text-rust">.</span>
          </h2>
          <Link
            href="/journal"
            className="hidden md:flex col-span-3 justify-self-end items-center gap-2 label hover:text-ink transition-colors"
            data-cursor="READ"
          >
            Ver todas <span aria-hidden>-&gt;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1], delay: i * 0.08 }}
              className="group"
            >
              <Link href={`/journal/${p.slug}`} data-cursor="READ" className="block">
                <div className="relative aspect-[4/5] img-hover mb-5 overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 label-light bg-ink/55 backdrop-blur-sm px-2 py-1">
                    {p.category}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2 label">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <span>{p.readTime} min</span>
                </div>
                <h3 className="font-sans font-semibold text-xl md:text-2xl tracking-tight2 leading-[1.15] mb-2 group-hover:italic group-hover:font-serif group-hover:font-normal transition-all duration-300">
                  {p.title}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed line-clamp-3">{p.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="md:hidden mt-10 text-center">
          <Link href="/journal" className="btn btn-dark text-ink" data-cursor="READ">
            <span>Ver todas</span>
            <span aria-hidden>-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
