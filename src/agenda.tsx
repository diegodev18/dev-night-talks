import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@/styles/index.css"
import { Layout } from "@/components/layout/Layout"

export function AgendaApp() {
  return (
    <Layout>
    <div className="flex min-h-[83vh] flex-col items-center justify-center gap-4 text-foreground">
      <h1 className="font-heading text-2xl font-medium">Agenda</h1>
      <p className="text-sm text-muted-foreground">Próximamente.</p>
      <a
        href="/"
        className="text-sm text-primary underline underline-offset-4 hover:underline"
      >
        Volver al inicio
      </a>
    </div>
    </Layout>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AgendaApp />
  </StrictMode>
)
