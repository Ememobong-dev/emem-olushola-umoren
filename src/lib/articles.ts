import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

// Path to your articles folder (ensure it exists in root!)
const articlesDir = path.join(process.cwd(), "articles");

// Get all slugs (filenames without .md)
export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return [];
  return fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

// Get data for a specific article
export function getArticleBySlug(slug: string): ArticleData {
  const filePath = path.join(articlesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Article file not found: ${filePath}`);
  }

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(rawContent);

  return {
    ...(data as ArticleMeta),
    content,
    slug,
  };
}

// Get only metadata for all articles (e.g., for listing cards)
export function getAllArticles(): ArticleMeta[] {
  const slugs = getArticleSlugs();

  return slugs.map((slug) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content: _content, ...meta } = getArticleBySlug(slug);
    return meta;
  });
}
