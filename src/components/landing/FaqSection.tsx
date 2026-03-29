import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Tiene costo asistir?",
    a: "El evento es gratuito para la comunidad. Cualquier cambio se anunciará en redes y en la agenda.",
  },
  {
    q: "¿Necesito registrarme?",
    a: "Por ahora puedes llegar directo al lugar. Si más adelante usamos registro o cupos, lo publicaremos con anticipación.",
  },
  {
    q: "¿Qué nivel técnico se espera?",
    a: "Hay espacio para distintos perfiles. Las charlas suelen ser accesibles con ganas de aprender; algunas pueden ir un poco más profundo.",
  },
  {
    q: "¿Puedo proponer una charla?",
    a: "Sí. Escríbenos por redes o habla con el equipo en el evento. Nos encanta dar visibilidad a la comunidad local.",
  },
  {
    q: "¿Hay código de conducta?",
    a: "Buscamos un ambiente respetuoso e inclusivo. Comportamientos hostiles no son bienvenidos; el equipo puede pedir a alguien que se retire si es necesario.",
  },
] as const

export function FaqSection() {
  return (
    <section
      id="faq"
      className="flex flex-col gap-6"
      aria-labelledby="faq-heading"
    >
      <div className="flex flex-col gap-2">
        <h2
          id="faq-heading"
          className="font-heading text-lg font-medium text-foreground sm:text-xl"
        >
          Preguntas frecuentes
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Respuestas rápidas; si te falta algo, pregunta en el próximo meetup o
          por mensaje en Instagram o TikTok.
        </p>
      </div>
      <Accordion type="single" collapsible className="max-w-2xl">
        {faqs.map((item, i) => (
          <AccordionItem key={item.q} value={`faq-${i}`}>
            <AccordionTrigger>{item.q}</AccordionTrigger>
            <AccordionContent>
              <p>{item.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
