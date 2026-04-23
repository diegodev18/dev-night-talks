/** Punto de la ficha de LATI en Google (coordenadas del lugar). */
const LATI_MAP_LAT = 17.9782354;
const LATI_MAP_LNG = -92.9432321;

/**
 * Enlace a la ficha oficial en Google Maps (abrir en pestaña nueva).
 * Google no permite incrustar muchas URLs `/place/` en iframes de terceros → “refused to connect”.
 */
const latiGoogleMapsPlaceUrl =
  'https://www.google.com/maps/place/LATI+-+Laboratorio+de+Arte,+Tecnolog%C3%ADa+e+Innovaci%C3%B3n/@17.9782405,-92.945807,17z/data=!3m2!4b1!5s0x85edd9d5a71b761d:0x58c7bec6386d1dee!4m6!3m5!1s0x85edd700ca2899cd:0xae5143e7ca2647f0!8m2!3d17.9782354!4d-92.9432321!16s%2Fg%2F11lm_scqs2?hl=es';

/** Mapa embebido (OpenStreetMap; sí permite iframe sin clave). */
const latiMapEmbedSrc = (() => {
  const dLon = 0.015;
  const dLat = 0.012;
  const minLon = LATI_MAP_LNG - dLon;
  const maxLon = LATI_MAP_LNG + dLon;
  const minLat = LATI_MAP_LAT - dLat;
  const maxLat = LATI_MAP_LAT + dLat;
  const marker = `${LATI_MAP_LAT}%2C${LATI_MAP_LNG}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${minLon},${minLat},${maxLon},${maxLat}&layer=mapnik&marker=${marker}`;
})();

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start" aria-labelledby="about-heading">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 id="about-heading" className="font-heading text-lg font-medium text-foreground sm:text-xl">
            Qué es Dev Night Talks
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Un espacio presencial en Villahermosa para charlas breves, intercambio de experiencias y conocer a quienes construyen producto y
            plataforma.
          </p>
        </div>
        <ul className="flex max-w-2xl flex-col gap-3 text-sm text-foreground">
          <li className="flex flex-col gap-1 border-l-2 border-primary/40 pl-4">
            <span className="font-medium">Formato ágil</span>
            <span className="text-muted-foreground">Presentaciones cortas y tiempo para preguntas.</span>
          </li>
          <li className="flex flex-col gap-1 border-l-2 border-primary/40 pl-4">
            <span className="font-medium">Para toda la comunidad tech</span>
            <span className="text-muted-foreground">Desarrollo, diseño, datos, DevOps y curiosidad por aprender.</span>
          </li>
          <li className="flex flex-col gap-1 border-l-2 border-primary/40 pl-4">
            <span className="font-medium">Networking real</span>
            <span className="text-muted-foreground">Conecta con personas que comparten tus mismos intereses.</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative aspect-4/3 min-h-64 w-full overflow-hidden ring-1 ring-foreground/10">
          <iframe
            title="Mapa del lugar del meetup — LATI (OpenStreetMap)"
            src={latiMapEmbedSrc}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          href={latiGoogleMapsPlaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          Abrir ubicación en Google Maps (LATI)
        </a>
      </div>
    </section>
  );
}
