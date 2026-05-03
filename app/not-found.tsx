import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-ink text-bone min-h-screen flex flex-col items-center justify-center container-x text-center">
      <span className="label-light mb-6">(404)</span>
      <h1 className="display text-[clamp(60px,15vw,260px)] mb-8">
        Fuera<br /><em>de carta</em><span className="text-rust">.</span>
      </h1>
      <p className="max-w-[40ch] text-bone/70 mb-10">
        Esta pagina no esta disponible. Puedes volver al inicio o revisar las
        historias del proyecto.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn btn-light text-bone border-bone" data-cursor="HOME">
          <span>Inicio</span>
        </Link>
        <Link href="/journal" className="btn btn-light text-bone border-bone" data-cursor="READ">
          <span>Historias</span>
        </Link>
      </div>
    </main>
  )
}
