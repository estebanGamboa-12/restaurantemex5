'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Tenant } from '@/lib/tenant'

export default function ReservePageClient({ tenant }: { tenant: Tenant }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="bg-bone min-h-screen pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <span className="label block mb-6">(00) Reservas</span>
          <h1 className="display text-[clamp(48px,9vw,150px)] mb-10">
            Reserva<br /><em>tu</em><br />mesa<span className="text-rust">.</span>
          </h1>
          <p className="text-base md:text-lg max-w-[40ch] leading-relaxed text-ink/75 mb-10">
            Formulario para {tenant.name}: fecha, invitados y notas. Despues se
            puede conectar con WhatsApp, email o un sistema de reservas real.
          </p>
          <div className="space-y-4 text-sm">
            <p><span className="label block mb-1">Telefono</span><a href={`tel:${tenant.phoneHref}`} className="font-serif italic text-2xl">{tenant.phone}</a></p>
            <p><span className="label block mb-1">Email</span><a href={`mailto:${tenant.email}`} className="font-serif italic text-2xl break-words">{tenant.email}</a></p>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-ink/15 p-8 md:p-10"
            >
              <span className="label block mb-4">Solicitud recibida</span>
              <h2 className="font-serif italic text-4xl md:text-5xl mb-4">Gracias.</h2>
              <p className="text-base text-ink/75">
                Confirmaremos la mesa por telefono o WhatsApp.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Nombre" name="name" required />
                <Field label="Telefono" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Fecha" name="date" type="date" required />
                <Field label="Personas" name="guests" type="number" min={1} max={12} defaultValue={2} required />
              </div>
              <div>
                <label className="label block mb-2">Notas</label>
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full bg-transparent border-b border-ink/30 py-3 text-base focus:outline-none focus:border-ink resize-none"
                />
              </div>
              <button type="submit" className="btn btn-dark text-ink mt-4" data-cursor="SEND">
                <span>Solicitar reserva</span>
                <span aria-hidden>-&gt;</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}

function Field({
  label,
  name,
  type = 'text',
  ...rest
}: {
  label: string
  name: string
  type?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="label block mb-2">{label}</label>
      <input
        name={name}
        type={type}
        {...rest}
        className="w-full bg-transparent border-b border-ink/30 py-3 text-base focus:outline-none focus:border-ink"
      />
    </div>
  )
}
