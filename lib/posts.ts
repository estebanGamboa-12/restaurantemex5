export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: number
  category: string
  author: string
  cover: string
}

export const POSTS: Post[] = [
  {
    slug: 'noche-de-tacos-y-mezcal',
    title: 'Noche de tacos, mezcal y mesa larga',
    excerpt:
      'Este jueves abrimos una mesa para compartir: tacos al carbon, salsas tatemadas y mezcales servidos sin prisa.',
    date: '2026-05-07',
    readTime: 2,
    category: 'Agenda',
    author: 'Casa Maiz',
    cover: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=1600&q=80',
    content: `
      <p>La noche empieza con guacamole al centro, sigue con tacos al carbon y termina donde suelen terminar las buenas cenas: con mezcal, sal de gusano y sobremesa.</p>
      <p>No es una cata seria ni una cena de mantel blanco. Es una mesa larga para probar, repetir y encontrar una salsa favorita.</p>
      <h2>Que se sirve</h2>
      <p>Habra rib eye, hongos con queso, pollo adobado, tortillas calientes y tres mezcales seleccionados para acompanar la cena.</p>
    `,
  },
  {
    slug: 'salsa-macha-de-la-casa',
    title: 'La salsa macha que se acaba primero',
    excerpt:
      'Chile seco, aceite caliente, cacahuate y paciencia. La salsa de la casa ya tiene su propio grupo de fans.',
    date: '2026-05-12',
    readTime: 3,
    category: 'Cocina',
    author: 'Equipo de cocina',
    cover: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=1600&q=80',
    content: `
      <p>La salsa macha parece sencilla hasta que pruebas una buena. Tiene que picar, pero tambien tiene que dejar sabor: chile seco, ajo, cacahuate, ajonjoli y aceite a la temperatura correcta.</p>
      <p>La servimos con tacos, tostadas y hasta con el pollo a las brasas. Hay quien pide extra antes de mirar la carta.</p>
      <h2>Hecha para compartir</h2>
      <p>La idea no es esconderla en un plato. Va a la mesa, se queda ahi y cada quien decide cuanto fuego quiere.</p>
    `,
  },
  {
    slug: 'domingo-de-comida-lenta',
    title: 'Domingo de comida lenta',
    excerpt:
      'Caldo, tortillas, brasa suave y postre de cajeta para cerrar la semana sin correr.',
    date: '2026-05-17',
    readTime: 2,
    category: 'Domingo',
    author: 'Casa Maiz',
    cover: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600&q=80',
    content: `
      <p>El domingo no pide prisa. Por eso bajamos el ritmo: comida al centro, servicio relajado y una carta corta que sabe a sobremesa.</p>
      <p>Hay caldo, tortillas recien hechas, brasa suave, frijoles de olla y flan de cajeta quemada.</p>
      <h2>Reserva con calma</h2>
      <p>Recomendamos venir temprano, pedir al centro y dejar espacio para postre. El domingo se entiende mejor sin agenda.</p>
    `,
  },
]

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null
}

export function getAllPosts() {
  return POSTS
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
