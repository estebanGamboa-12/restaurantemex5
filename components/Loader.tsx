'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let raf: number
    const start = performance.now()
    const total = 1400

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total)
      const eased = 1 - Math.pow(1 - t, 3)
      setPct(Math.round(eased * 100))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 220)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100000] bg-ink text-bone flex flex-col"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex-1 flex items-center justify-between px-6 md:px-10 lg:px-16">
            <span className="font-serif italic text-[clamp(96px,18vw,260px)] leading-none">
              {pct}
            </span>
            <span className="hidden md:flex flex-col items-end gap-2">
              <span className="label-light">Preparando mesa</span>
              <span className="font-serif italic text-2xl">al comal</span>
            </span>
          </div>

          <div className="w-full h-[1px] bg-bone/15 relative">
            <motion.div
              className="absolute inset-y-0 left-0 bg-bone"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="flex justify-between px-6 md:px-10 lg:px-16 py-5">
            <span className="label-light">Mexico / Reservas</span>
            <span className="label-light">Abriendo cocina</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
