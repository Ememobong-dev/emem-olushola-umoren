import { getArticleBySlug, getArticleSlugs, type ArticleData } from '@/src/lib/articles';
import { notFound } from 'next/navigation';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { Contact } from '@/src/components/Contact';
import { TagButton } from '@/src/components/buttons/TagButton';
import ShareButton from '@/src/components/buttons/ShareButton';
import { remark } from 'remark';
import html from 'remark-html';

interface PageProps {
  params: {
    slug: string;
  };
}

interface ArticleContentProps {
  article: ArticleData;
  htmlContent: string;
}

interface ArticleFooterProps {
  article: ArticleData;
}

export async function generateMetadata({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug);

  return {
    title: article?.title || 'Article',
    description: article?.description || 'Article description',
    ...(article?.cardImage && {
      openGraph: {
        images: [article.cardImage],
      },
    }),
  };
}

export default async function SingleArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const processedContent = await remark().use(html).process(article.content);
  const htmlContent = processedContent.toString();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ArticleContent article={article} htmlContent={htmlContent} />
      <div className="px-8 lg:px-14 3xl:px-28 py-28">
        <Contact />
      </div>
      <ShareButton title={article.title} />
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

function ArticleContent({ article, htmlContent }: ArticleContentProps) {
  return (
    <>
      <div className="flex-1 flex justify-center items-center py-16 lg:py-28 px-8 lg:px-14 3xl:px-28">
        <div className="flex flex-col max-w-[1350px] py-16 lg:py-28 w-full">
          <h1 className="text-4xl lg:text-5xl font-azeret-mono">{article.title}</h1>
          <div
            className="mt-14 prose prose-lg "
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <ArticleFooter article={article} />
        </div>
      </div>
    </>

  );
}

function ArticleFooter({ article }: ArticleFooterProps) {
  return (
    <div className="mt-28 flex flex-col lg:flex-row justify-between items-center gap-5">
      <div>
        <p className="font-azeret-mono text-lg">
          <span className="font-bold font-alro-reg">Author:</span> {article.author}
        </p>
        <p className="font-azeret-mono text-lg">
          <span className="font-bold font-alro-reg">Date:</span> {article.date}
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        {article.tags.map((tag) => (
          <TagButton key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
}