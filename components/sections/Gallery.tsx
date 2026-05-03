'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Tenant } from '@/lib/tenant'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1400&q=80', cap: 'Salon con luz baja', span: 'md:col-span-7 aspect-[16/10]' },
  { src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1000&q=80', cap: 'Mesa servida', span: 'md:col-span-5 aspect-[4/5]' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=80', cap: 'Cocina abierta', span: 'md:col-span-5 aspect-[4/5]' },
  { src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1400&q=80', cap: 'Brasa y humo', span: 'md:col-span-7 aspect-[16/10]' },
]

export default function Gallery({ tenant }: { tenant: Tenant }) {
  return (
    <section className="bg-bone2 py-24 md:py-40 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20 items-end">
          <span className="label col-span-12 md:col-span-3">(03) Ambiente</span>
          <h2 className="col-span-12 md:col-span-6 display text-[clamp(36px,6vw,104px)]">
            Sobrio, calido,<br />
            <em>con hambre</em><span className="text-rust">.</span>
          </h2>
          <p className="hidden md:block col-span-3 text-sm leading-relaxed text-ink/65">
            La misma direccion visual sirve para cada subdominio, pero el nombre,
            ciudad y datos del cliente cambian con la URL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
          {IMAGES.map((im, i) => (
            <motion.figure
              key={im.cap}
              initial={{ opacity: 0, y: 60, clipPath: 'inset(50% 0 50% 0)' }}
              whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1], delay: i * 0.07 }}
              className={`relative img-hover min-h-[300px] ${im.span}`}
              data-cursor="LOOK"
            >
              <Image src={im.src} alt={`${tenant.name}: ${im.cap}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
              <figcaption className="absolute bottom-4 left-4 label-light bg-ink/45 backdrop-blur-sm px-2 py-1">
                {im.cap}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
