import type { BlogPost } from '@/types/blog';

const postFiles = import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default' });

function parseFrontmatter(raw: string): { frontmatter: Record<string, string | string[]>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content: raw };

  const fmRaw = match[1];
  const content = match[2].trim();
  const frontmatter: Record<string, string | string[]> = {};

  for (const line of fmRaw.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    // Remove surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('"') && value.endsWith('"'))) {
      value = value.slice(1, -1);
    }

    // Parse array: ["a", "b"]
    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1);
      frontmatter[key] = inner
        .split(',')
        .map((s) => s.trim().replace(/^"|"$/g, ''))
        .filter(Boolean);
    } else {
      frontmatter[key] = value;
    }
  }

  return { frontmatter, content };
}

function slugFromFilename(filepath: string): string {
  const filename = filepath.split('/').pop() || '';
  return filename.replace(/^\d+-/, '').replace(/\.md$/, '');
}

async function loadPost(filepath: string): Promise<BlogPost> {
  const raw = (await postFiles[filepath]()) as string;
  const { frontmatter, content } = parseFrontmatter(raw);

  return {
    slug: slugFromFilename(filepath),
    title: (frontmatter.title as string) || '',
    excerpt: (frontmatter.excerpt as string) || '',
    date: (frontmatter.date as string) || '',
    author: (frontmatter.author as string) || '',
    tags: (frontmatter.tags as string[]) || [],
    coverImage: frontmatter.coverImage as string | undefined,
    content,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await Promise.all(Object.keys(postFiles).map(loadPost));
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  for (const post of posts) {
    for (const tag of post.tags) {
      tags.add(tag);
    }
  }
  return Array.from(tags).sort();
}
