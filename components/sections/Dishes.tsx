'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const DISHES = [
  {
    n: '01',
    name: 'Taco de rib eye al carbon',
    sub: 'Tortilla azul / salsa tatemada / cebolla curtida',
    img: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1200&q=80',
    href: '/menu#taco-rib-eye',
  },
  {
    n: '02',
    name: 'Tostada de atun y chile morita',
    sub: 'Aguacate / ajonjoli / limon verde',
    img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=1200&q=80',
    href: '/menu#tostada-atun',
  },
  {
    n: '03',
    name: 'Aguachile de mercado',
    sub: 'Pepino / cilantro / aceite de chile',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&q=80',
    href: '/menu#aguachile-mercado',
  },
  {
    n: '04',
    name: 'Flan de cajeta quemada',
    sub: 'Sal de Colima / crema fresca / nuez',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&q=80',
    href: '/menu#flan-cajeta',
  },
]

const MotionLink = motion(Link)

export default function Dishes() {
  return (
    <section className="bg-bone py-24 md:py-40">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-24">
          <span className="label col-span-12 md:col-span-3">(02) Antojos</span>
          <h2 className="col-span-12 md:col-span-9 display text-[clamp(40px,7vw,128px)]">
            Platos para <em>pedir</em><br />al centro<span className="text-rust">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10">
          {DISHES.map((d, i) => {
            const span =
              i === 0 ? 'md:col-span-5 md:row-span-2 aspect-[3/4]' :
              i === 3 ? 'md:col-span-7 aspect-[16/10]' :
              'md:col-span-7 aspect-[16/9]'
            return (
              <MotionLink
                key={d.n}
                href={d.href}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: i * 0.06 }}
                className={`group relative block img-hover bg-ink2 min-h-[310px] ${span}`}
                data-cursor="VIEW"
                aria-label={`Ver ${d.name} en la carta`}
              >
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-8 text-bone">
                  <span className="label-light">{d.n}</span>
                  <div>
                    <h3 className="font-sans font-semibold text-2xl md:text-3xl tracking-tight2 leading-[1.05] mb-1.5">
                      {d.name}
                    </h3>
                    <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] md:tracking-[0.18em] text-bone/68">
                      {d.sub}
                    </p>
                  </div>
                </div>
              </MotionLink>
            )
          })}
        </div>

        <div className="mt-12 md:mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <p className="max-w-[42ch] text-base md:text-lg leading-relaxed text-ink/70">
            La carta cambia con temporada y mercado, pero siempre deja claro lo
            importante: maiz, fuego, salsas y platos que se comparten facil.
          </p>
          <Link href="/menu" className="btn btn-dark text-ink" data-cursor="VIEW">
            <span>Ver carta completa</span>
            <span aria-hidden>-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
