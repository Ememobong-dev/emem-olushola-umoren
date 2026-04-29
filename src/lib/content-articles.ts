// lib/articles.ts
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

export interface ArticleMeta {
  title: string;
  slug: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  cardImage: string;
  gallery: string[];
}

const articlesDir = path.join(process.cwd(), 'articles');

export async function getArticleSlugs(): Promise<string[]> {
  const files = await fs.readdir(articlesDir);
  return files
    .filter((file: string) => file.endsWith('.mdx'))
    .map((file: string) => file.replace(/\.mdx$/, ''));
}

export async function getCompiledArticleBySlug(slug: string) {
  const filePath = path.join(articlesDir, `${slug}.mdx`);
  const rawContent = await fs.readFile(filePath, 'utf8');

  const { content, data } = matter(rawContent);
  const result = await bundleMDX({ source: content });

  return {
    frontmatter: data as ArticleMeta,
    code: result.code,
  };
}

export async function getAllArticles(): Promise<ArticleMeta[]> {
  const slugs = await getArticleSlugs();

  const articles = await Promise.all(
    slugs.map(async (slug: string) => {
      const filePath = path.join(articlesDir, `${slug}.mdx`);
      const rawContent = await fs.readFile(filePath, 'utf8');
      const { data } = matter(rawContent);
      return {
        ...(data as ArticleMeta),
        slug,
      };
    })
  );

  return articles;
}
