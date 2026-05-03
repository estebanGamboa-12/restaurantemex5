'use client'
import { ReactNode } from 'react'

type Props = {
  items: string[]
  className?: string
  separator?: ReactNode
}

export default function Marquee({ items, className = '', separator = '*' }: Props) {
  const repeated = [...items, ...items]
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-6">
            <span>{item}</span>
            <span className="opacity-40 font-serif italic">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
