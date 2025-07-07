import fs from "fs/promises";
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

const articlesDir = path.join(process.cwd(), "articles");

// ✅ Get all slugs (filenames without .md)
export async function getArticleSlugs(): Promise<string[]> {
  const files = await fs.readdir(articlesDir);
  return files
    .filter((file: string) => file.endsWith(".md"))
    .map((file: string) => file.replace(/\.md$/, ""));
}

// ✅ Get data for a specific article
export async function getArticleBySlug(slug: string): Promise<ArticleData | null> {
  const filePath = path.join(articlesDir, `${slug}.md`);
  try {
    await fs.access(filePath);
    const rawContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(rawContent);

    return {
      ...(data as ArticleMeta),
      content,
      slug,
    };
  } catch (error) {
    console.error(`Error loading article "${slug}":`, error);
    return null;
  }
}

// ✅ Get only metadata for all articles
export async function getAllArticles(): Promise<ArticleMeta[]> {
  const slugs = await getArticleSlugs();

  const articles = await Promise.all(
    slugs.map(async (slug: string) => {
      const article = await getArticleBySlug(slug);
      if (!article) return null;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...meta } = article;
      return meta;
    })
  );

  return articles.filter(Boolean) as ArticleMeta[];
}
