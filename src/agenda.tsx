import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@/styles/index.css"

export function AgendaApp() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background px-6 text-foreground">
      <h1 className="font-heading text-2xl font-medium">Agenda</h1>
      <p className="text-sm text-muted-foreground">Próximamente.</p>
      <a
        href="/"
        className="text-sm text-primary underline underline-offset-4 hover:underline"
      >
        Volver al inicio
      </a>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AgendaApp />
  </StrictMode>
)
