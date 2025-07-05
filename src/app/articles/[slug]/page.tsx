import { getArticleBySlug, getArticleSlugs } from '@/src/lib/articles';
import { notFound } from 'next/navigation';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { Contact } from '@/src/components/Contact';
import { TagButton } from '@/src/components/buttons/TagButton';
import ShareButton from '@/src/components/buttons/ShareButton';
import { remark } from 'remark';
import html from 'remark-html';

import type { Metadata } from 'next';

// ✅ Only use inline typing here
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  const processed = remark().use(html).processSync(article.content);
  const contentHtml = processed.toString();

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center py-16 lg:py-28 px-8 lg:px-14 3xl:px-28">
        <div className="flex flex-col max-w-[1350px] py-16 lg:py-28">
          <h2 className="text-4xl lg:text-5xl lg:text-justify font-azeret-mono z-10">
            {article.title}
          </h2>
          <div
            className="mt-14 flex flex-col gap-10 text-justify font-azeret-mono prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <div className="mt-28 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
            <div>
              <p className="font-azeret-mono text-lg">
                <span className="font-bold font-alro-reg">Author:</span> {article.author}
              </p>
              <p className="font-azeret-mono text-lg">
                <span className="font-bold font-alro-reg">Date:</span> {article.date}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {article.tags.map((tag, index) => (
                <TagButton key={index} text={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8 lg:px-14 3xl:px-28 py-16 lg:py-28 flex flex-col gap-36 lg:gap-56">
        <Contact />
      </div>
      <ShareButton title={article.title} />
      <Footer />
    </div>
  );
}

// ✅ Correct return shape: [{ params: { slug } }]
export function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({
    params: { slug },
  }));
}
