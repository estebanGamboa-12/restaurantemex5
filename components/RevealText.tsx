'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'span' | 'div'
}

/**
 * Slides children up from below a clip mask. Use on lines/words wrapped
 * inside a parent — multiple instances stagger naturally with `delay`.
 */
export default function RevealText({ children, delay = 0, className = '', as = 'span' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const Wrapper = as as 'div'

  return (
    <Wrapper ref={ref} className={`reveal-clip ${className}`}>
      <motion.span
        initial={{ y: '110%' }}
        animate={inView ? { y: 0 } : { y: '110%' }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 2.6 + delay }}
      >
        {children}
      </motion.span>
    </Wrapper>
  )
}
