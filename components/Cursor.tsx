'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.55 })
  const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.55 })

  const [hovered, setHovered] = useState(false)
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const onLeave = () => setVisible(false)

    const enter = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      setLabel(el.dataset.cursor ?? '')
      setHovered(true)
    }
    const leave = () => {
      setHovered(false)
      setLabel('')
    }

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)

    const bind = () => {
      document.querySelectorAll<HTMLElement>('a, button, [data-cursor]').forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }
    bind()
    const observer = new MutationObserver(bind)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      observer.disconnect()
    }
  }, [x, y, visible])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        className={`cursor-ring ${label ? 'is-text' : ''}`}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? (label ? 2.4 : 1.7) : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
      >
        <span>{label}</span>
      </motion.div>
    </>
  )
}
