"use client";


import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export const articles = [
  {
    id: "1",
    title: "Building Scalable React Applications with Advanced Patterns",
    excerpt: "Explore compound components, render props, and custom hooks to create maintainable and reusable React code at scale.",
    date: "2026-04-15",
    readTime: "8 min read",
    category: "React",
    gradient: "from-blue-500 to-cyan-500",
    featured: true
  },
  {
    id: "2",
    title: "Mastering TypeScript: Advanced Type Patterns",
    excerpt: "Dive deep into conditional types, mapped types, and template literal types to level up your TypeScript skills.",
    date: "2026-04-08",
    readTime: "12 min read",
    category: "TypeScript",
    gradient: "from-blue-600 to-indigo-600",
    featured: true
  },
  {
    id: "3",
    title: "Performance Optimization in Modern Web Apps",
    excerpt: "Learn techniques for code splitting, lazy loading, and bundle optimization to create blazing-fast applications.",
    date: "2026-03-28",
    readTime: "10 min read",
    category: "Performance",
    gradient: "from-orange-500 to-red-500",
    featured: false
  },
  {
    id: "4",
    title: "CSS-in-JS vs Tailwind: A Deep Comparison",
    excerpt: "An honest comparison of different styling approaches based on real-world project experience.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "CSS",
    gradient: "from-pink-500 to-purple-500",
    featured: false
  },
  {
    id: "5",
    title: "State Management in 2026: What's Changed?",
    excerpt: "From Redux to Zustand, exploring the evolution of state management and what works best today.",
    date: "2026-03-12",
    readTime: "9 min read",
    category: "State Management",
    gradient: "from-purple-500 to-indigo-500",
    featured: false
  },
  {
    id: "6",
    title: "Accessibility First: Building Inclusive UIs",
    excerpt: "Practical tips for creating accessible web applications that everyone can use, including ARIA patterns and keyboard navigation.",
    date: "2026-03-05",
    readTime: "7 min read",
    category: "Accessibility",
    gradient: "from-green-500 to-teal-500",
    featured: false
  },
  {
    id: "7",
    title: "The Art of Component API Design",
    excerpt: "How to design intuitive and flexible component APIs that developers love to use.",
    date: "2026-02-22",
    readTime: "11 min read",
    category: "Design Patterns",
    gradient: "from-yellow-500 to-orange-500",
    featured: false
  },
  {
    id: "8",
    title: "Testing Strategies for Frontend Applications",
    excerpt: "A comprehensive guide to unit tests, integration tests, and E2E testing with modern tools.",
    date: "2026-02-14",
    readTime: "13 min read",
    category: "Testing",
    gradient: "from-teal-500 to-cyan-500",
    featured: false
  }
];

export default function Articles() {
  const featuredArticles = articles.filter(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen px-6 pt-32 pb-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400">Technical Writing</span>
          </div>

          <h1 className="md:text-6xl leading-relaxed font-bold mb-6 bg-linear-to-r from-white to-white/60 dark:from-white dark:to-white/60 light:from-slate-900 light:to-slate-600 bg-clip-text text-transparent">
            Articles & Insights
          </h1>
          <p className="md:text-xl text-white/60 dark:text-white/60 light:text-slate-600 max-w-3xl">
            Thoughts on frontend development, performance, architecture, and everything in between.
          </p>
        </motion.div>

        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-linear-to-b from-cyan-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 light:from-cyan-600 light:to-purple-600 rounded-full" />
              Featured
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/articles/${article.id}`}>
                    <article className="group relative bg-linear-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/5 light:from-white light:to-slate-50 border border-white/10 dark:border-white/10 light:border-slate-200 rounded-2xl p-8 hover:border-white/20 dark:hover:border-white/20 light:hover:border-slate-300 transition-all duration-300 overflow-hidden h-full">
                      <div className={`absolute inset-0 bg-linear-to-br ${article.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-10 light:group-hover:opacity-15 transition-opacity duration-300`} />

                      <div className="relative">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`px-3 py-1 bg-linear-to-r ${article.gradient} rounded-full text-xs text-white font-medium`}>
                            {article.category}
                          </span>
                          <div className="flex items-center gap-4 text-sm text-white/40 dark:text-white/40 light:text-slate-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
                </motion.div>
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
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/articles/${article.id}`}>
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
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
