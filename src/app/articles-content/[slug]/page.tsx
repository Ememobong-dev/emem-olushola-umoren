import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/src/lib/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const articles = getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getAllArticles()
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen px-6 pt-32 pb-10 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/articles-content"
          className="inline-flex items-center gap-2 text-white/60 light:text-slate-600 hover:text-cyan-400 light:hover:text-cyan-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`px-4 py-1.5 bg-linear-to-r ${article.gradient} rounded-full text-sm text-white font-medium`}
            >
              {article.category}
            </span>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/40 light:text-slate-500">
              <span className="flex items-center gap-1 text-sm text-white/40">
                <Calendar className="w-4 h-4" />
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>

              <span className="flex items-center gap-1 text-sm text-white/40">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-linear-to-r from-white to-white/70 light:from-slate-900 light:to-slate-600 bg-clip-text text-transparent leading-tight">
            {article.title}
          </h1>

          <p className=" text-sm md:text-xl text-white/60 light:text-slate-600 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <article className="prose prose-invert light:prose-slate prose-lg max-w-none">
          <div className="text-white/80 light:text-slate-700 leading-relaxed space-y-6">
            <MDXRemote source={article.content} />
          </div>
        </article>

        <div className="mt-16 pt-8">
          <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-6">
            Continue Reading
          </h3>

          <div className="flex flex-col md:flex-row gap-4">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                href={`/articles-content/${relatedArticle.slug}`}
              >
                <div className="group bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 rounded-xl p-6 hover:border-white/20 light:hover:border-slate-300 hover:bg-white/10 light:hover:bg-slate-200 transition-all">
                  <span className={`px-3 py-1 bg-linear-to-r ${relatedArticle.gradient} rounded-full text-xs text-white font-medium`}>
                    {relatedArticle.category}
                  </span>

                  <h4 className="text-lg font-bold text-white light:text-slate-900 mt-3 mb-2 group-hover:text-cyan-400 light:group-hover:text-cyan-600 transition-colors">
                    {relatedArticle.title}
                  </h4>

                  <p className="text-sm text-white/60 light:text-slate-600">
                    {relatedArticle.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}