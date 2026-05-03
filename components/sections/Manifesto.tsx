'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Tenant } from '@/lib/tenant'

export default function Manifesto({ tenant }: { tenant: Tenant }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section
      ref={ref}
      className="relative bg-ink text-bone py-28 md:py-48 overflow-hidden"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-28">
          <span className="label-light col-span-12 md:col-span-3">
            (01) Manifiesto
          </span>
          <span className="hidden md:inline-block label-light col-span-3 col-start-10 text-right">
            {tenant.slug}.esteban-dev.com
          </span>
        </div>

        <motion.h2
          style={{ y }}
          className="display text-[clamp(46px,9vw,160px)]"
        >
          No hacemos<br />
          ceremonia.<br />
          <em>Hacemos</em><br />
          <em>antojo</em><span className="text-rust">.</span>
        </motion.h2>

        <div className="grid grid-cols-12 gap-6 mt-16 md:mt-32">
          <p className="col-span-12 md:col-span-5 md:col-start-7 text-base md:text-lg leading-[1.6] text-bone/80">
            {tenant.name} mantiene el tono sobrio de una mesa especial, pero baja
            la tension: tortillas calientes, brasas, salsas vivas y servicio
            atento sin sentirse rigido. La web toma el nombre del subdominio para
            que cada cliente tenga su propia version sin perder esta direccion
            visual.
          </p>
        </div>
      </div>

      <span className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 vert-rl label-light tracking-[0.4em]">
        {tenant.city} / {tenant.area}
      </span>
    </section>
  )
}
