'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Chef() {
  return (
    <section id="chef" className="bg-ink text-bone py-24 md:py-40 overflow-hidden">
      <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
        <motion.div
          initial={{ opacity: 0, y: 60, clipPath: 'inset(50% 0 50% 0)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
          className="md:col-span-5 relative aspect-[4/5] img-hover"
          data-cursor="MEET"
        >
          <Image
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80"
            alt="Chef preparando servicio"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </motion.div>

        <div className="md:col-span-7 md:col-start-7">
          <span className="label-light block mb-8">(04) Cocina</span>
          <h2 className="display text-[clamp(48px,9vw,150px)] mb-10">
            Equipo<br /><em>de casa</em><span className="text-rust">.</span>
          </h2>

          <p className="max-w-[48ch] text-base md:text-lg leading-[1.7] text-bone/80 mb-10">
            El relato baja de pedestal: no hace falta vender premios para que el
            sitio se sienta especial. La cocina habla de origen, producto,
            tecnica y hospitalidad, con un tono mas humano para negocios reales
            en Mexico.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {[
              ['01', 'Maiz nixtamalizado', 'Diario'],
              ['02', 'Salsas de casa', 'Tatemadas'],
              ['03', 'Servicio cercano', 'Sin rigidez'],
            ].map(([sym, label, year]) => (
              <div key={label} className="border-t border-bone/15 pt-4">
                <span className="label-light">{sym} {label}</span>
                <p className="font-serif italic text-2xl mt-2">{year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
