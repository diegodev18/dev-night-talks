import { CalendarsIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TransitionLink } from '@/components/layout/TransitionLink';
import type { BlogPost } from '@/types/blog';

type PostCardProps = {
  post: BlogPost;
};

function formatDate(date: string): string {
  return new Date(date + 'T00:00:00').toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function PostCard({ post }: PostCardProps) {
  return (
    <TransitionLink to={`/blog/${post.slug}`} className="group no-underline">
      <Card className="h-full transition-colors hover:bg-card/80">
        {post.coverImage && (
          <div className="overflow-hidden">
            <img
              src={post.coverImage}
              alt=""
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
        <CardHeader className="gap-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <HugeiconsIcon icon={CalendarsIcon} className="size-3.5" strokeWidth={2} aria-hidden />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <CardTitle className="font-heading text-base tracking-tight text-foreground group-hover:text-primary sm:text-lg">
            {post.title}
          </CardTitle>
          <CardDescription className="text-xs/relaxed sm:text-sm">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardContent className="px-4 pb-2">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[0.65rem]">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </TransitionLink>
  );
}
