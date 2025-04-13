import { ArticlesCard } from "@/src/components/ArticlesCard";
import { Button } from "@/src/components/buttons/Button";
import { Navbar } from "@/src/components/Navbar";
import { Col, Row } from "antd";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <div className="h-dvh relative flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="font-alro-reg text-8xl text-center">Umoren</h2>
            <h2 className="font-bold font-alro-reg text-8xl  text-center">
              Emem Olushola
            </h2>
          </div>

          <div className="absolute bottom-[20%]">
            <button className="rounded-full  lg:relative cursor-pointer border border-white w-32 py-2 px-3">
              Scroll down
            </button>
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <div className="px-8 lg:px-14 3xl:px-28 py-28">
        <div className="flex items-center justify-between mb-8">
          <p>Latest Article</p>
          <Button variant="bordered" text="View All" />
        </div>
        <div>
          <Row gutter={[56, 56]}>
            <Col xs={24} lg={12}>
              <ArticlesCard
                articleDate="2025-05-15"
                articleDescription="A deep dive into React Hooks, focusing on useEffect and useState."
                articleTagOne="Frontend"
                articleTagTwo="React"
                articleTitle="React Hooks Explained: useEffect and useState"
              />
            </Col>
            <Col xs={24} lg={12}>
              <ArticlesCard
                articleDate="2025-05-15"
                articleDescription="A deep dive into React Hooks, focusing on useEffect and useState."
                articleTagOne="Data Analysis"
                articleTagTwo="Visualization"
                articleTitle="Creating Interactive Data Visualizations with D3.js"
              />
            </Col>
            <Col xs={24} lg={12}>
              <ArticlesCard
                articleDate="2025-05-15"
                articleDescription="A deep dive into React Hooks, focusing on useEffect and useState."
                articleTagOne="Frontend"
                articleTagTwo="React"
                articleTitle="React Hooks Explained: useEffect and useState"
              />
            </Col>
            <Col xs={24} lg={12}>
              <ArticlesCard
                articleDate="2025-05-15"
                articleDescription="A deep dive into React Hooks, focusing on useEffect and useState."
                 articleTagOne="Data Analysis"
                articleTagTwo="Visualization"
                articleTitle="Creating Interactive Data Visualizations with D3.js"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
