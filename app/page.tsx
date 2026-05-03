import Hero from '@/components/sections/Hero'
import Manifesto from '@/components/sections/Manifesto'
import Dishes from '@/components/sections/Dishes'
import Gallery from '@/components/sections/Gallery'
import Chef from '@/components/sections/Chef'
import Journal from '@/components/sections/Journal'
import Reserve from '@/components/sections/Reserve'
import Footer from '@/components/sections/Footer'
import Marquee from '@/components/Marquee'
import { getAllPosts } from '@/lib/posts'
import { getTenant } from '@/lib/tenant'

export default function Home() {
  const posts = getAllPosts()
  const tenant = getTenant()

  return (
    <main>
      <Hero tenant={tenant} />

      <Marquee
        items={[
          `${tenant.name} - ${tenant.cuisine}`,
          `${tenant.city} / ${tenant.area}`,
          tenant.established,
          'Tortilla al comal',
          'Mezcal y sobremesa',
          'Menu para compartir',
          'Reservas abiertas',
        ]}
        className="border-y border-ink/15 bg-bone py-6 font-sans font-medium text-[clamp(28px,4vw,56px)] tracking-tight2"
      />

      <Manifesto tenant={tenant} />
      <Dishes />
      <Gallery tenant={tenant} />
      <Chef />

      <Marquee
        items={[
          'Reservas para hoy y esta semana',
          tenant.email,
          tenant.phone,
          tenant.hours,
        ]}
        className="border-y border-ink/15 bg-bone2 py-5 font-serif italic text-[clamp(24px,3.5vw,48px)]"
        separator="-"
      />

      <Journal posts={posts} />
      <Reserve tenant={tenant} />
      <Footer tenant={tenant} />
    </main>
  )
}
