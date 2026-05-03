'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Tenant } from '@/lib/tenant'

const easeOut = [0.19, 1, 0.22, 1] as const
const heroImage = 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1800&q=85'

const fadeUp = {
  hidden: { y: '110%' },
  shown: { y: 0, transition: { duration: 1.05, ease: easeOut } },
}

export default function Hero({ tenant }: { tenant: Tenant }) {
  return (
    <section className="relative min-h-[100svh] pt-28 md:pt-40 pb-10 md:pb-16 container-x flex flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt="Mesa mexicana con tacos, salsas y platillos para compartir"
          fill
          priority
          sizes="100vw"
          className="object-cover motion-safe:animate-[heroDrift_18s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,241,236,0.92),rgba(244,241,236,0.72)_48%,rgba(10,9,8,0.18))]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bone to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex items-start justify-between mb-10 md:mb-20"
      >
        <span className="label">
          {tenant.cuisine} / {tenant.city} / {tenant.established}
        </span>
        <span className="label hidden md:inline-block max-w-[28ch] text-right">
          Comal abierto / mesa tranquila / reserva flexible
        </span>
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="shown"
        transition={{ staggerChildren: 0.06, delayChildren: 1.35 }}
        className="display max-w-[11ch] text-[clamp(54px,11vw,188px)]"
      >
        <div className="reveal-clip block">
          <motion.span variants={fadeUp} className="block">
            {tenant.name}
          </motion.span>
        </div>
        <div className="reveal-clip block">
          <motion.span variants={fadeUp} className="block">
            comida <em>con</em>
          </motion.span>
        </div>
        <div className="reveal-clip block">
          <motion.span variants={fadeUp} className="block">
            antojo<span className="text-rust">.</span>
          </motion.span>
        </div>
      </motion.h1>

      <div className="mt-auto pt-12 md:pt-24 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.9, ease: easeOut }}
          className="md:col-span-4 text-sm md:text-base leading-relaxed max-w-[38ch] text-ink/78"
        >
          Una mesa de barrio con luz baja, maiz caliente y platos para compartir.
          La experiencia se siente cuidada, pero sigue siendo cercana: buena
          comida, buena bebida y sobremesa sin prisa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.15, duration: 0.9, ease: easeOut }}
          className="hidden md:flex md:col-span-3 items-end gap-2 label"
        >
          <span className="block w-8 h-[1px] bg-current" /> {tenant.area}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.9, ease: easeOut }}
          className="md:col-span-5 md:justify-self-end flex flex-col sm:flex-row items-stretch sm:items-end gap-3"
        >
          <a href="/reserve" className="btn btn-dark text-ink" data-cursor="BOOK">
            <span>Reservar mesa</span>
            <span aria-hidden>-&gt;</span>
          </a>
          <a href="/menu" className="btn btn-dark text-ink" data-cursor="VIEW">
            <span>Ver menu</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.45, duration: 0.7 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="label">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-6 bg-ink/40"
        />
      </motion.div>
    </section>
  )
}
