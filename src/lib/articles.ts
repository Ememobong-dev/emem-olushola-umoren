import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  gradient: string;
  featured: boolean;
  content: string;
};

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(articlesDirectory);

  const articles = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      gradient: data.gradient ?? "from-cyan-500 to-blue-500",
      featured: data.featured ?? false,
      content,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}