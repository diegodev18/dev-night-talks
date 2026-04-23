import { ArrowLeftIcon, ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DirectionalTransition } from '@/components/layout/DirectionalTransition';
import { Layout } from '@/components/layout/Layout';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { TransitionLink } from '@/components/layout/TransitionLink';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { cn } from '@/lib/utils';
import type { BlogPost } from '@/types/blog';

function formatDate(date: string): string {
  return new Date(date + 'T00:00:00').toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    void Promise.all([getPostBySlug(slug), getAllPosts()]).then(([p, posts]) => {
      if (!p) {
        setNotFound(true);
        return;
      }
      setPost(p);
      setAllPosts(posts);
    });
  }, [slug]);

  if (notFound) {
    return (
      <Layout>
        <DirectionalTransition>
          <SiteHeader />
          <main className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground">404</h1>
            <p className="max-w-md text-sm text-muted-foreground sm:text-base">No se encontro la publicacion que buscas.</p>
            <Button asChild>
              <TransitionLink to="/blog">
                <HugeiconsIcon icon={ArrowLeftIcon} data-icon="inline-start" strokeWidth={2} />
                Volver al blog
              </TransitionLink>
            </Button>
          </main>
          <SiteFooter />
        </DirectionalTransition>
      </Layout>
    );
  }

  if (!post) return null;

  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <Layout>
      <DirectionalTransition>
        <SiteHeader />
        <main className="flex flex-col gap-12">
          <TransitionLink
            to="/blog"
            transitionType="nav-back"
            className="flex items-center gap-2 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            <HugeiconsIcon icon={ArrowLeftIcon} className="size-4" strokeWidth={2} aria-hidden />
            Volver al blog
          </TransitionLink>

          <article aria-labelledby="post-title">
            {post.coverImage && (
              <div className="mb-8 overflow-hidden">
                <img
                  src={post.coverImage}
                  alt=""
                  className="w-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}

            <header className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[0.65rem]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 id="post-title" className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-xs text-muted-foreground sm:text-sm">
                <span>{post.author}</span>
                <span aria-hidden>&middot;</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </header>

            <div className="prose mt-8">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSlug]}
                components={{
                  code({ className, children, ...props }) {
                    const isBlock = /language-(\w+)/.test(className || '');
                    return isBlock ? (
                      <pre className="overflow-x-auto rounded bg-card p-4 text-xs ring-1 ring-foreground/10">
                        <code {...props} className={className}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code {...props} className={cn('rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground', className)}>
                        {children}
                      </code>
                    );
                  },
                  pre({ children }) {
                    return <>{children}</>;
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>

          {(prevPost || nextPost) && (
            <nav
              className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:gap-6"
              aria-label="Navegacion entre publicaciones"
            >
              {prevPost ? (
                <TransitionLink
                  to={`/blog/${prevPost.slug}`}
                  className="group flex flex-1 flex-col gap-1 rounded border border-border p-4 transition-colors hover:bg-muted"
                >
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <HugeiconsIcon icon={ArrowLeftIcon} className="size-3.5" strokeWidth={2} aria-hidden />
                    Anterior
                  </span>
                  <span className="font-heading text-sm font-medium text-foreground group-hover:text-primary">{prevPost.title}</span>
                </TransitionLink>
              ) : (
                <div className="hidden flex-1 sm:block" />
              )}
              {nextPost ? (
                <TransitionLink
                  to={`/blog/${nextPost.slug}`}
                  className="group flex flex-1 flex-col items-end gap-1 rounded border border-border p-4 text-right transition-colors hover:bg-muted"
                >
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    Siguiente
                    <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="font-heading text-sm font-medium text-foreground group-hover:text-primary">{nextPost.title}</span>
                </TransitionLink>
              ) : null}
            </nav>
          )}
        </main>
        <SiteFooter />
      </DirectionalTransition>
    </Layout>
  );
}
