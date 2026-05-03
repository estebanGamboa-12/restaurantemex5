'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import type { Tenant } from '@/lib/tenant'

export default function Reserve({ tenant }: { tenant: Tenant }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-rust text-bone py-24 md:py-48 overflow-hidden"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <span className="label-light col-span-12 md:col-span-3">(06) Reservas</span>
          <span className="label-light col-span-12 md:col-span-3 md:col-start-10 md:text-right">
            {tenant.hours}
          </span>
        </div>

        <motion.h2 style={{ y }} className="display text-[clamp(48px,12vw,220px)]">
          Reserva<br /><em>tu</em> mesa<span className="text-bone">.</span>
        </motion.h2>

        <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-end">
          <div className="md:col-span-4 space-y-6">
            <div>
              <span className="label-light block mb-1">Telefono</span>
              <a href={`tel:${tenant.phoneHref}`} className="font-serif italic text-3xl md:text-4xl break-words">
                {tenant.phone}
              </a>
            </div>
            <div>
              <span className="label-light block mb-1">Email</span>
              <a href={`mailto:${tenant.email}`} className="font-serif italic text-2xl md:text-4xl break-words">
                {tenant.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-6 space-y-6">
            <div>
              <span className="label-light block mb-1">Direccion</span>
              <p className="text-base leading-relaxed">
                {tenant.address}
              </p>
            </div>
            <div>
              <span className="label-light block mb-1">Horario</span>
              <p className="text-base leading-relaxed">
                {tenant.hours}<br />Comida, cena y sobremesa.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-10 justify-self-start md:justify-self-end">
            <Link
              href="/reserve"
              className="btn btn-light text-bone border-bone"
              data-cursor="BOOK"
            >
              <span>Reservar ahora</span>
              <span aria-hidden>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>

      <span className="pointer-events-none select-none absolute -bottom-6 right-2 md:right-10 font-serif italic text-[18vw] leading-none text-bone/10">
        {tenant.name.toLowerCase()}
      </span>
    </section>
  )
}
