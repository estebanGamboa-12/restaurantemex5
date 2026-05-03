import Link from 'next/link'
import type { Tenant } from '@/lib/tenant'

const fallbackTenant: Tenant = {
  slug: 'casa-maiz',
  name: 'Casa Maiz',
  city: 'CDMX',
  area: 'Roma Norte',
  phone: '+52 55 1234 9876',
  phoneHref: '+525512349876',
  email: 'reservas@casa-maiz.mx',
  address: 'Colima 184, Roma Norte, CDMX',
  hours: 'Mar - Dom / 13:00 - 23:30',
  cuisine: 'Cocina mexicana de barrio',
  established: 'Est. 2021',
}

export default function Footer({ tenant = fallbackTenant }: { tenant?: Tenant }) {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-bone pt-16 md:pt-20 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="md:col-span-5">
            <Link href="/" className="font-sans font-bold text-3xl tracking-tight2">
              {tenant.name}<span className="font-serif italic font-normal text-rust">.</span>
            </Link>
            <p className="mt-6 max-w-[34ch] text-sm text-bone/60 leading-relaxed">
              {tenant.cuisine} en {tenant.area}. Una web lista para mostrarse en
              {` ${tenant.slug}.esteban-dev.com`}.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <span className="label-light block mb-4">Visitar</span>
            <ul className="space-y-2 text-sm text-bone/85">
              <li><Link href="/menu" data-cursor="VIEW">Menu</Link></li>
              <li><Link href="/journal" data-cursor="READ">Historias</Link></li>
              <li><Link href="/reserve" data-cursor="BOOK">Reservar</Link></li>
              <li><a href="#chef" data-cursor="MEET">Cocina</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="label-light block mb-4">Social</span>
            <ul className="space-y-2 text-sm text-bone/85">
              <li><a href="#" data-cursor="GO">Instagram</a></li>
              <li><a href="#" data-cursor="GO">WhatsApp</a></li>
              <li><a href="#" data-cursor="GO">Maps</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <span className="label-light block mb-4">Contacto</span>
            <ul className="space-y-2 text-sm text-bone/85 break-words">
              <li><a href={`tel:${tenant.phoneHref}`}>{tenant.phone}</a></li>
              <li><a href={`mailto:${tenant.email}`}>{tenant.email}</a></li>
              <li>{tenant.address}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-bone/15 flex flex-col md:flex-row gap-4 md:items-end justify-between">
          <p className="font-serif italic text-[clamp(56px,12vw,180px)] leading-[0.85] text-bone/95 break-words">
            {tenant.name.toLowerCase()}<span className="text-rust">.</span>
          </p>
          <div className="flex flex-col md:items-end gap-1 label-light">
            <span>{year} {tenant.name} / {tenant.city}</span>
            <span>Demo multi-cliente / esteban-dev.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
