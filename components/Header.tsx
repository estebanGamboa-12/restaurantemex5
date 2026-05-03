'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const darkRoutes = ['/menu']

export default function Header({ brandName = 'Casa Maiz' }: { brandName?: string }) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isDarkPage = darkRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))
  const onLightSurface = scrolled || !isDarkPage

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-bone/90 text-ink shadow-[0_1px_0_rgba(10,9,8,0.08)] backdrop-blur-md' : isDarkPage ? 'text-bone' : 'text-ink'
      }`}
    >
      <nav className="container-x grid w-full max-w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3 overflow-hidden py-4 md:flex md:flex-nowrap md:justify-between md:gap-8 md:overflow-visible md:py-5">
        <Link
          href="/"
          className="min-w-0 truncate font-sans text-[16px] font-bold tracking-tight2 md:max-w-none"
          data-cursor="HOME"
        >
          {brandName}<span className="font-serif italic font-normal text-rust">.</span>
        </Link>

        <Link
          href="/reserve"
          className={`btn shrink-0 justify-self-end !min-h-0 !px-3 !py-3 !text-[9px] !tracking-[0.14em] md:order-3 md:!px-6 md:!py-4 md:!text-[10px] md:!tracking-[0.18em] ${
            onLightSurface ? 'btn-dark text-ink' : 'btn-light border-bone text-bone'
          }`}
          data-cursor="BOOK"
        >
          <span>Reservar</span>
          <span aria-hidden className="hidden sm:inline">-&gt;</span>
        </Link>

        <ul className={`col-span-2 grid min-w-0 grid-cols-4 items-center rounded-full border px-2 py-2 text-center font-mono text-[8px] uppercase tracking-[0.1em] sm:text-[9px] sm:tracking-[0.14em] md:col-span-1 md:flex md:w-auto md:justify-center md:gap-8 md:border-0 md:px-0 md:py-0 md:text-[10px] md:tracking-[0.22em] ${
          onLightSurface ? 'border-ink/12 bg-bone/70 text-ink/65' : 'border-bone/18 bg-ink/30 text-bone/72'
        }`}
        >
          <li className="min-w-0"><Link className="block truncate px-1 py-1" href="/menu" data-cursor="VIEW">Menu</Link></li>
          <li className="min-w-0"><Link className="block truncate px-1 py-1" href="/journal" data-cursor="READ">Historias</Link></li>
          <li className="min-w-0"><Link className="block truncate px-1 py-1" href="/#chef" data-cursor="MEET">Cocina</Link></li>
          <li className="min-w-0"><Link className="block truncate px-1 py-1" href="/#contact" data-cursor="HELLO">Contacto</Link></li>
        </ul>
      </nav>
    </motion.header>
  )
}
