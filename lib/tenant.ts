import { headers } from 'next/headers'

export type Tenant = {
  slug: string
  name: string
  city: string
  area: string
  phone: string
  phoneHref: string
  email: string
  address: string
  hours: string
  cuisine: string
  established: string
}

const DEMO_TENANTS: Record<string, Partial<Tenant>> = {
  'casa-maiz': {
    name: 'Casa Maiz',
    area: 'Roma Norte',
    city: 'CDMX',
    phone: '+52 55 1234 9876',
    phoneHref: '+525512349876',
    email: 'reservas@casa-maiz.mx',
    address: 'Colima 184, Roma Norte, CDMX',
  },
  'taqueria-norte': {
    name: 'Taqueria Norte',
    area: 'San Pedro',
    city: 'Monterrey',
    phone: '+52 81 2244 1190',
    phoneHref: '+528122441190',
    email: 'hola@taquerianorte.mx',
    address: 'Calzada del Valle 320, Monterrey',
  },
}

const DEFAULT_TENANT: Tenant = {
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

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function getTenantFromHost(host?: string | null): Tenant {
  const cleanHost = (host ?? '').split(':')[0].toLowerCase()
  const slug =
    cleanHost.endsWith('.esteban-dev.com')
      ? cleanHost.replace('.esteban-dev.com', '')
      : DEFAULT_TENANT.slug

  const overrides = DEMO_TENANTS[slug] ?? {}

  return {
    ...DEFAULT_TENANT,
    slug,
    name: overrides.name ?? titleFromSlug(slug) ?? DEFAULT_TENANT.name,
    ...overrides,
  }
}

export function getTenant() {
  return getTenantFromHost(headers().get('host'))
}
