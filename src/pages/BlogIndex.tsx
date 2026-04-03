import { useEffect, useState } from "react"

import { DirectionalTransition } from "@/components/layout/DirectionalTransition"
import { Layout } from "@/components/layout/Layout"
import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import { TransitionLink } from "@/components/layout/TransitionLink"
import { PostCard } from "@/components/blog/PostCard"
import { getAllPosts, getAllTags } from "@/lib/blog"
import type { BlogPost } from "@/types/blog"

export default function BlogIndex() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [activeTag, setActiveTag] = useState<string | null>(null)

  useEffect(() => {
    void Promise.all([getAllPosts(), getAllTags()]).then(([p, t]) => {
      setPosts(p)
      setTags(t)
    })
  }, [])

  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts

  return (
    <Layout>
      <DirectionalTransition>
        <SiteHeader />
        <main className="flex flex-col gap-16">
          <section
            className="flex flex-col items-center gap-6 text-center"
            aria-labelledby="blog-hero-heading"
          >
            <h1
              id="blog-hero-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Blog
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
              Articulos, resúmenes de eventos, tutoriales y anuncios de la comunidad.
            </p>
          </section>

          {tags.length > 0 && (
            <section
              className="flex flex-col gap-4"
              aria-labelledby="filters-heading"
            >
              <h2 id="filters-heading" className="sr-only">
                Filtrar por tag
              </h2>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTag(null)}
                  className={`rounded-none border px-3 py-1.5 text-xs font-medium transition-colors ${
                    !activeTag
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  Todos
                </button>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                    className={`rounded-none border px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeTag === tag
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>
          )}

          <section aria-labelledby="posts-heading">
            <h2 id="posts-heading" className="sr-only">
              Publicaciones
            </h2>
            {filtered.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground">
                No hay publicaciones {activeTag ? `con el tag "${activeTag}"` : "aún"}.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </section>

          <section
            className="flex flex-col items-center gap-6 border-t border-border pt-16 text-center"
            aria-labelledby="blog-cta-heading"
          >
            <h2
              id="blog-cta-heading"
              className="font-heading text-xl font-medium text-foreground sm:text-2xl"
            >
              ¿Quieres escribir en el blog?
            </h2>
            <p className="max-w-lg text-sm text-muted-foreground sm:text-base">
              Crea un archivo Markdown en{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
                content/blog/
              </code>{" "}
              con tu contenido y abre un Pull Request. Los pasos son:
            </p>
            <ol className="max-w-md text-left text-sm text-muted-foreground sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 font-mono text-primary">1.</span>
                <span>Fork el repositorio y crea una rama <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">feature/blog-tu-post</code></span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-mono text-primary">2.</span>
                <span>Crea tu archivo <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground">content/blog/tu-post.md</code> con frontmatter y contenido</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 font-mono text-primary">3.</span>
                <span>Abre un PR siguiendo la{" "}
                  <a
                    href="https://github.com/diegodev18/dev-night-talks/blob/master/docs/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                  >
                    guia de contribucion
                  </a>
                </span>
              </li>
            </ol>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://github.com/diegodev18/dev-night-talks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Ver repositorio
              </a>
              <TransitionLink
                to="/"
                transitionType="nav-back"
                className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Volver al inicio
              </TransitionLink>
            </div>
          </section>
        </main>
        <SiteFooter />
      </DirectionalTransition>
    </Layout>
  )
}
