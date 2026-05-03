import type { Metadata } from 'next'
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Cursor from '@/components/Cursor'
import Loader from '@/components/Loader'
import Header from '@/components/Header'
import { getTenant } from '@/lib/tenant'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://esteban-dev.com'),
  title: {
    default: 'Casa Maiz - Restaurante mexicano',
    template: '%s / Casa Maiz',
  },
  description:
    'Demo multi-cliente para restaurantes mexicanos con reservas, carta, ambiente y datos adaptados por subdominio.',
  keywords: [
    'restaurante mexico',
    'restaurante mexicano',
    'reservas restaurante',
    'web para restaurantes',
    'taqueria mexico',
    'cocina mexicana',
  ],
  authors: [{ name: 'Esteban Dev' }],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Casa Maiz',
    title: 'Casa Maiz - Restaurante mexicano',
    description:
      'Una demo elegante para restaurantes mexicanos, lista para subdominios por cliente.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1200&q=80',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Maiz - Restaurante mexicano',
    description: 'Demo multi-cliente para restaurantes mexicanos.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: '/' },
}

const restaurantLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Casa Maiz',
  description: 'Cocina mexicana de barrio con reservas online.',
  url: 'https://casa-maiz.esteban-dev.com',
  telephone: '+52 55 1234 9876',
  email: 'reservas@casa-maiz.mx',
  priceRange: '$$',
  servesCuisine: 'Mexican',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Colima 184',
    addressLocality: 'Ciudad de Mexico',
    postalCode: '06700',
    addressCountry: 'MX',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '13:00',
      closes: '23:30',
    },
  ],
  acceptsReservations: 'True',
  image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1200&q=80',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const tenant = getTenant()

  return (
    <html lang="es-MX" className={`${interTight.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantLd) }}
        />
      </head>
      <body className="bg-bone text-ink antialiased">
        <Loader />
        <Cursor />
        <Header brandName={tenant.name} />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
