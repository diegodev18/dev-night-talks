export function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col gap-6"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col gap-2">
        <h2
          id="about-heading"
          className="font-heading text-lg font-medium text-foreground sm:text-xl"
        >
          Qué es Dev Night Talks
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Un espacio presencial en Villahermosa para charlas breves, intercambio
          de experiencias y conocer a quienes construyen producto y plataforma.
        </p>
      </div>
      <ul className="flex max-w-2xl flex-col gap-3 text-sm text-foreground">
        <li className="flex flex-col gap-1 border-l-2 border-primary/40 pl-4">
          <span className="font-medium">Formato ágil</span>
          <span className="text-muted-foreground">
            Presentaciones cortas y tiempo para preguntas.
          </span>
        </li>
        <li className="flex flex-col gap-1 border-l-2 border-primary/40 pl-4">
          <span className="font-medium">Para toda la comunidad tech</span>
          <span className="text-muted-foreground">
            Desarrollo, diseño, datos, DevOps y curiosidad por aprender.
          </span>
        </li>
        <li className="flex flex-col gap-1 border-l-2 border-primary/40 pl-4">
          <span className="font-medium">Networking real</span>
          <span className="text-muted-foreground">
            Conecta con personas que comparten tus mismos intereses.
          </span>
        </li>
      </ul>
    </section>
  )
}
