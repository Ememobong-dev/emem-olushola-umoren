import { getAllArticles } from "@/src/lib/articles";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArticlesIntro } from "@/src/components/ArticlesIntro";
import { MotionWrapper } from "@/src/components/MotionWrapper";


export default function Articles() {
  const articles = getAllArticles();

  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen px-6 pt-32 pb-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <ArticlesIntro />

        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-cyan-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 light:from-cyan-600 light:to-purple-600 rounded-full" />
              Featured
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Link key={article.slug} href={`/articles-content/${article.slug}`}>
                  <article className="group relative bg-linear-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/5 light:from-white light:to-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 rounded-2xl p-8 hover:border-white/20 dark:hover:border-white/20 light:hover:border-slate-300 transition-all duration-300 overflow-hidden h-full">
                    <div className={`absolute inset-0 bg-linear-to-br ${article.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-10 light:group-hover:opacity-15 transition-opacity duration-300`} />

                    <div className="relative">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`px-3 py-1 bg-linear-to-r ${article.gradient} rounded-full text-xs text-white font-medium`}>
                          {article.category}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-white/40 dark:text-white/40 light:text-slate-500">
                          <span className="flex items-center gap-1 text-sm text-white/40">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(article.date).toLocaleDateString("en-US")}
                          </span>

                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      <h3 className="md:text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-3 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 light:group-hover:text-cyan-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-sm text-white/60 dark:text-white/60 light:text-slate-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-cyan-400 dark:text-cyan-400 light:text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-linear-to-b from-purple-400 to-pink-400 dark:from-purple-400 dark:to-pink-400 light:from-purple-600 light:to-pink-600 rounded-full" />
            All Articles
          </h2>

          <div className="space-y-4">
            {regularArticles.map((article, index) => (
              <MotionWrapper
                key={article.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link key={article.slug} href={`/articles-content/${article.slug}`}>
                  <article className="group relative bg-linear-to-r from-white/5 to-transparent dark:from-white/5 dark:to-transparent light:from-white light:to-transparent border border-white/10 dark:border-white/10 light:border-slate-200 rounded-xl p-6 hover:border-white/20 dark:hover:border-white/20 light:hover:border-slate-300 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-50 transition-all duration-300">


                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className={`px-3 py-1 bg-linear-to-r ${article.gradient} rounded-full text-xs text-white font-medium`}>
                            {article.category}
                          </span>

                          <div className="flex items-center gap-4 text-sm text-white/40 dark:text-white/40 light:text-slate-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white/40 dark:text-white/40 light:text-slate-400 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 light:group-hover:text-cyan-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                    </div>

                    <div className="mt-3">
                      <h3 className="md:text-xl font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 light:group-hover:text-cyan-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className=" text-white/60 dark:text-white/60 light:text-slate-600 text-sm">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* <h3 className="md:text-xl font-bold text-white mt-3 mb-2 group-hover:text-cyan-400">
                    {article.title}
                  </h3>

                  <p className="text-white/60 text-sm">
                    {article.excerpt}
                  </p> */}




                  </article>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </section>
      </div>
    </div >
  );
}