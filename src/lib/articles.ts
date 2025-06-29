import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

export interface ArticleData extends ArticleMeta {
  content: string;
}

const articlesDir = path.join(process.cwd(), 'articles');

export function getArticleSlugs(): string[] {
  return fs.readdirSync(articlesDir).map(file => file.replace(/\.md$/, ''));
}

export function getArticleBySlug(slug: string): ArticleData {
  const filePath = path.join(articlesDir, `${slug}.md`);
  const rawContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(rawContent);

  return {
    ...(data as ArticleMeta),
    content,
    slug,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => {
    const { content, ...meta } = getArticleBySlug(slug);
    return meta;
  });
}
