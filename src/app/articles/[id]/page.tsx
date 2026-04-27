"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { articles } from "../page";

export default function ArticleDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 transition-colors duration-500">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white light:text-slate-900 mb-4">
            Article Not Found
          </h1>

          <Link
            href="/articles"
            className="text-cyan-400 light:text-cyan-600 hover:text-cyan-300 light:hover:text-cyan-700 flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-32 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/articles"
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

              <div className="flex items-center gap-4 text-sm text-white/40 light:text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>

                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-white to-white/70 light:from-slate-900 light:to-slate-600 bg-clip-text text-transparent leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-white/60 light:text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between py-6 mb-12 border-y border-white/10 light:border-slate-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-400 to-purple-600 light:from-cyan-600 light:to-purple-600 rounded-full" />

              <div>
                <p className="text-white light:text-slate-900 font-medium">
                  Frontend Developer
                </p>
                <p className="text-sm text-white/60 light:text-slate-600">
                  Building the web, one component at a time
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-300 rounded-lg text-white/70 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/10 light:hover:bg-slate-200 transition-all">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          <article className="prose prose-invert light:prose-slate prose-lg max-w-none">
            <div className="text-white/80 light:text-slate-700 leading-relaxed space-y-6">
              <p>
                In modern web development, building scalable and maintainable
                applications requires more than just understanding the basics.
                It demands deep knowledge of advanced patterns, architectural
                decisions, and best practices.
              </p>

              <h2 className="text-3xl font-bold text-white light:text-slate-900 mt-12 mb-6">
                Understanding the Problem
              </h2>

              <p>
                As applications grow, managing state, components, and data flow
                becomes increasingly complex. Traditional approaches often lead
                to prop drilling, tight coupling, and code that is difficult to
                test and maintain.
              </p>

              <div className="bg-linear-to-br from-cyan-500/10 to-purple-500/10 light:from-cyan-100 light:to-purple-100 border border-cyan-500/20 light:border-cyan-300 rounded-xl p-6 my-8">
                <p className="text-cyan-400 light:text-cyan-700 font-medium mb-2">
                  Key Takeaway
                </p>
                <p className="text-white/90 light:text-slate-700">
                  The goal is not to use every pattern available, but to
                  understand when and why each pattern provides value.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-white light:text-slate-900 mt-12 mb-6">
                Compound Components
              </h2>

              <p>
                Compound components share state implicitly, creating a flexible
                API for components like tabs, accordions, and dropdown menus.
              </p>

              <div className="bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 rounded-xl p-6 my-8 font-mono text-sm overflow-x-auto">
                <pre className="text-cyan-400 light:text-cyan-700">
                    {`<Tabs defaultValue="overview">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="details">Details</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                        Overview content...
                    </TabsContent>
                    </Tabs>`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold text-white light:text-slate-900 mt-12 mb-6">
                Custom Hooks
              </h2>

              <p>
                Custom hooks are the modern way to share stateful logic in
                React. They are composable, testable, and reusable.
              </p>
            </div>
          </article>

          <div className="mt-16 pt-8 border-t border-white/10 light:border-slate-200">
            <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-6">
              Continue Reading
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {articles
                .filter((a) => a.id !== id)
                .slice(0, 2)
                .map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/articles/${relatedArticle.id}`}
                  >
                    <div className="group bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 rounded-xl p-6 hover:border-white/20 light:hover:border-slate-300 hover:bg-white/10 light:hover:bg-slate-200 transition-all">
                      <span
                        className={`px-3 py-1 bg-linear-to-r ${relatedArticle.gradient} rounded-full text-xs text-white font-medium`}
                      >
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
        </motion.div>
      </div>
    </div>
  );
}