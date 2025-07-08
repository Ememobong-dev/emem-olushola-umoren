// pages/articles/[slug]/page.tsx
import { getCompiledArticleBySlug, getArticleSlugs } from '@/src/lib/articles';
import { notFound } from 'next/navigation';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { Contact } from '@/src/components/Contact';
import { TagButton } from '@/src/components/buttons/TagButton';
import ShareButton from '@/src/components/buttons/ShareButton';
import MdxRenderer from '@/src/components/MdxRenderer';

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function SingleArticlePage({ params }: { params: { slug: string } }) {
  const article = await getCompiledArticleBySlug(params.slug);
  if (!article) notFound();

  const { frontmatter, code } = article;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center py-16 lg:py-28 px-8 lg:px-14 3xl:px-28">
        <div className="flex flex-col max-w-[1350px] mt-10 w-full">
          <h1 className="text-4xl lg:text-5xl font-azeret-mono">{frontmatter.title}</h1>
          <div className="mt-14 prose prose-lg">
            <MdxRenderer code={code} />
          </div>
          <div className="mt-28 flex flex-col lg:flex-row justify-between items-center gap-5">
            <div>
              <p className="font-azeret-mono text-lg">
                <span className="font-bold font-alro-reg">Author:</span> {frontmatter.author}
              </p>
              <p className="font-azeret-mono text-lg">
                <span className="font-bold font-alro-reg">Date:</span> {frontmatter.date}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {frontmatter.tags?.map((tag: string) => (
                <TagButton key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-14 3xl:px-28 py-28">
        <Contact />
      </div>
      <ShareButton title={frontmatter.title} />
      <Footer />
    </div>
  );
}
