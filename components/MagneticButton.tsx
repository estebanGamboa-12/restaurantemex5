'use client'
import { ReactNode, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Props = {
  children: ReactNode
  href?: string
  className?: string
  strength?: number
  cursorLabel?: string
  variant?: 'dark' | 'light'
  onClick?: () => void
}

export default function MagneticButton({
  children,
  href,
  className = '',
  strength = 0.35,
  cursorLabel,
  variant = 'dark',
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18 })
  const sy = useSpring(y, { stiffness: 200, damping: 18 })

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Comp: typeof motion.a = href ? motion.a : (motion.button as unknown as typeof motion.a)

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      data-cursor={cursorLabel}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </Comp>
  )
}
