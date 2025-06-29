import { ArticlesCard } from "@/src/components/ArticlesCard";
import { Navbar } from "@/src/components/Navbar";
import { Col, Row } from "antd";
import React from "react";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import { getAllArticles } from "@/src/lib/articles";


const Articles = () => {
  const articlesData = getAllArticles();

  return (
    <div>
      <Navbar />
      <div>
        <div className="px-8 lg:px-14 3xl:px-28 py-32 flex flex-col gap-14">
          <h3 className="font-azeret-mono text-3xl">Latest Articles</h3>
          <div>
            <Row gutter={[56, 56]}>
              {articlesData.map((article) => (
                <Col key={article.slug} xs={24} md={12} xl={8}>
                  <ArticlesCard
                    articleTitle={article.title}
                    articleDescription={article.description}
                    articleTagOne={article.tags?.[0] || ""}
                    articleTagTwo={article.tags?.[1] || ""}
                    articleDate={article.date}
                    articleSlug={article.slug}
                    imageSrc={article.cardImage}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="mx-8 lg:px-14 3xl:px-28 py-16 lg:py-28 flex flex-col gap-36 lg:gap-56">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;

