import { ArticlesCard } from "@/src/components/ArticlesCard";
import { Col, Row } from "antd";
import React from "react";
import { getAllArticles } from "@/src/lib/articles";


export default async function Articles(){
  const articlesData = await getAllArticles();

  return (
    <div>
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
      </div>
    </div>
  );
};

