import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '@/components/sections/Footer'
import Link from 'next/link'
import { getTenant } from '@/lib/tenant'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Carta mexicana para compartir: tacos, tostadas, brasas, salsas y postres de casa.',
  alternates: { canonical: '/menu' },
}

const COURSES = [
  {
    id: 'guacamole-temporada',
    n: '01',
    name: 'Guacamole de temporada',
    sub: 'Totopos / chile serrano / aceite de cilantro',
    price: '$145',
    img: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=900&q=80',
  },
  {
    id: 'tostada-atun',
    n: '02',
    name: 'Tostada de atun y morita',
    sub: 'Aguacate / ajonjoli / limon verde',
    price: '$185',
    img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=900&q=80',
  },
  {
    id: 'aguachile-mercado',
    n: '03',
    name: 'Aguachile de mercado',
    sub: 'Pepino / cebolla morada / chile chiltepin',
    price: '$210',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&q=80',
  },
  {
    id: 'taco-rib-eye',
    n: '04',
    name: 'Taco de rib eye al carbon',
    sub: 'Tortilla azul / salsa tatemada',
    price: '$95',
    img: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=900&q=80',
  },
  {
    id: 'costra-hongos',
    n: '05',
    name: 'Costra de queso y hongos',
    sub: 'Epazote / cebolla asada / salsa roja',
    price: '$175',
    img: 'https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=900&q=80',
  },
  {
    id: 'pollo-adobado',
    n: '06',
    name: 'Pollo adobado a las brasas',
    sub: 'Frijoles / ensalada de hierbas / tortillas',
    price: '$280',
    img: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&q=80',
  },
  {
    id: 'flan-cajeta',
    n: '07',
    name: 'Flan de cajeta quemada',
    sub: 'Sal de Colima / nuez / crema fresca',
    price: '$120',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=80',
  },
]

export default function MenuPage() {
  const tenant = getTenant()
  const featured = COURSES.slice(1, 4)

  return (
    <>
      <main className="bg-ink text-bone min-h-screen">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=1800&q=85"
              alt="Mesa mexicana con tacos, salsas y platos para compartir"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,9,8,0.95),rgba(10,9,8,0.72)_54%,rgba(10,9,8,0.35))]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
          </div>

          <div className="container-x relative grid min-h-[82svh] grid-cols-1 content-end gap-10 pb-14 pt-36 md:grid-cols-12 md:pb-20 md:pt-44">
            <div className="md:col-span-7">
              <span className="label-light block mb-8">(00) Carta actual / {tenant.city}</span>
              <h1 className="display max-w-[9ch] text-[clamp(58px,12vw,188px)]">
                Menu<br /><em>con</em><br />antojo<span className="text-rust">.</span>
              </h1>
            </div>

            <div className="md:col-span-4 md:col-start-9 md:self-end">
              <p className="max-w-[38ch] text-base leading-relaxed text-bone/78 md:text-lg">
                Una carta flexible para {tenant.name}: platos que se entienden
                rapido, fotos que venden hambre y una estructura que no se siente
                como restaurante de premio.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/reserve" className="btn btn-light border-bone text-bone" data-cursor="BOOK">
                  <span>Reservar mesa</span>
                  <span aria-hidden>-&gt;</span>
                </Link>
                <a href={`tel:${tenant.phoneHref}`} className="btn btn-light border-bone text-bone" data-cursor="CALL">
                  <span>Llamar</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container-x py-16 md:py-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
            {featured.map((item) => (
              <article key={item.n} id={`featured-${item.id}`} className="group scroll-mt-28">
                <div className="img-hover relative mb-5 aspect-[4/5] overflow-hidden bg-bone/5">
                  <Image src={item.img} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <span className="label-light">{item.n}</span>
                    <span className="font-serif text-3xl italic">{item.price}</span>
                  </div>
                </div>
                <h2 className="font-sans text-2xl font-semibold leading-[1.05] tracking-tight2 md:text-3xl">
                  {item.name}
                </h2>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/55">
                  {item.sub}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-x pb-24 md:pb-32">
          <div className="mb-8 grid grid-cols-12 gap-6">
            <span className="label-light col-span-12 md:col-span-3">(01) Toda la carta</span>
            <h2 className="display col-span-12 text-[clamp(38px,6vw,96px)] md:col-span-7">
              Pedir facil,<br /><em>compartir</em> mejor<span className="text-rust">.</span>
            </h2>
          </div>

          <ul className="border-t border-bone/15">
            {COURSES.map((c) => (
              <li
                key={c.n}
                id={c.id}
                className="group grid grid-cols-[72px_1fr] gap-x-4 gap-y-5 border-b border-bone/15 py-6 transition-colors duration-300 hover:bg-bone/5 md:grid-cols-12 md:gap-8 md:py-8"
              >
                <span className="label-light pt-1">{c.n}</span>
                <div className="relative aspect-[5/4] overflow-hidden bg-bone/5 md:col-span-2 md:col-start-2 md:aspect-[4/3]">
                  <Image src={c.img} alt={c.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 30vw, 16vw" />
                </div>
                <div className="col-span-2 md:col-span-5">
                  <h3 className="font-sans text-2xl font-semibold leading-[1.08] tracking-tight2 md:text-4xl">
                    {c.name}
                  </h3>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-bone/55 md:hidden">
                    {c.sub}
                  </p>
                </div>
                <p className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-bone/55 md:col-span-3 md:block md:self-center">
                  {c.sub}
                </p>
                <span className="col-span-2 font-serif text-3xl italic text-bone md:col-span-1 md:self-center md:justify-self-end">
                  {c.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 md:mt-16 flex flex-col md:flex-row gap-6 md:items-center justify-between">
            <p className="max-w-[42ch] text-bone/65 text-sm leading-relaxed">
              El precio y los platos son demo, pero la estructura ya sirve para
              vender a restaurantes: visual, clara, mobile y con llamada directa
              a reservar.
            </p>
            <Link href="/reserve" className="btn btn-light text-bone border-bone" data-cursor="BOOK">
              <span>Reservar mesa</span>
              <span aria-hidden>-&gt;</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer tenant={tenant} />
    </>
  )
}
