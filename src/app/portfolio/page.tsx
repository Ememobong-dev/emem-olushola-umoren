import { ArticlesCard } from "@/src/components/ArticlesCard";
import { Button } from "@/src/components/buttons/Button";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { Col, Row } from "antd";
import { getAllArticles } from "@/src/lib/articles";
import { TopSection } from "@/src/components/portfolio-sections/top-section";

export default async function Portfolio() {
  const articlesData = await getAllArticles();

  return (
    <div>
      <Navbar />
      <TopSection />

      {/* Latest Articles */}
      <div className="px-8 lg:px-14 3xl:px-28 py-28">
        <div className="flex items-center justify-between mb-8">
          <p className="font-alro-reg text-3xl">Latest Article</p>
          <Button variant="bordered" link="/articles" text="View All" />
        </div>
        <div>
          <Row gutter={[56, 56]}>
            {articlesData.map((article) => (
              <Col key={article.slug} xs={24} lg={12}>
                <ArticlesCard
                  articleDate={article.date}
                  articleDescription={article.description}
                  articleTagOne={article.tags?.[0] || ""}
                  articleTagTwo={article.tags?.[1] || ""}
                  articleTitle={article.title}
                  articleSlug={article.slug}
                />
              </Col>
            ))}

          </Row>
        </div>
      </div>

      {/* Contact */}
      <div className="px-8 lg:px-14 3xl:px-28 py-28">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

