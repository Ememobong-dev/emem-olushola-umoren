"use client";

import { ArticlesCard } from "@/src/components/ArticlesCard";
import { Navbar } from "@/src/components/Navbar";
import { Col, Row } from "antd";
import React, { useState } from "react";
import rectangleImg from "@/public/icons/rectangle.svg";
import articlesData from "@/src/projectData/articlesData.json";

const options = [
  "React",
  "Data Visualization",
  "Data Cleaning",
  "Next JS",
  "Google Bi query",
];

const Articles = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    console.log("Selected:", e.target.value); // Optional: log or do something with it
  };
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
                    articleTagOne={article.tags[0]}
                    articleTagTwo={article.tags[1]}
                    articleDate={article.date}
                    articleSlug={article.slug}
                    imageSrc={article.cardImage}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div className="px-8 lg:px-14 3xl:px-28 py-32 flex flex-col gap-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-azeret-mono text-3xl">Older Gems</h3>
            <div className="">
              <select
                id="filter"
                value={selected}
                onChange={handleChange}
                className="block w-full px-4 py-2 text-dark font-bold bg-progress-cyan border border-progress-cyan rounded-lg shadow-sm 
                   focus:outline-none cursor-pointer focus:ring-0 focus:border-progress-cyan"
              >
                <option value="">-- Filter By --</option>
                {options.map((option) => (
                  <option key={option} value={option} className="text-gray-800">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <Row gutter={[56, 56]}>
              <Col xs={24} md={12} xl={8}>
                <ArticlesCard
                  imageSrc={rectangleImg}
                  articleDate="2025-05-15"
                  articleDescription="A deep dive into React Hooks, focusing on useEffect and useState."
                  articleTagOne="Frontend"
                  articleTagTwo="React"
                  articleTitle="React Hooks Explained: useEffect and useState"
                />
              </Col>
              <Col xs={24} md={12} xl={8}>
                <ArticlesCard
                  imageSrc={rectangleImg}
                  articleDate="2025-05-15"
                  articleDescription="A deep dive into React Hooks, focusing on useEffect and useState.A deep dive into React Hooks, focusing on useEffect and useState"
                  articleTagOne="Data Analysis"
                  articleTagTwo="Visualization"
                  articleTitle="Creating Interactive Data Visualizations with D3.js"
                />
              </Col>
              <Col xs={24} md={12} xl={8}>
                <ArticlesCard
                  imageSrc={rectangleImg}
                  articleDate="2025-05-15"
                  articleDescription="A deep dive into React Hooks, focusing on useEffect and useState."
                  articleTagOne="Frontend"
                  articleTagTwo="React"
                  articleTitle="React Hooks Explained: useEffect and useState"
                />
              </Col>
              <Col xs={24} md={12} xl={8}>
                <ArticlesCard
                  imageSrc={rectangleImg}
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
    </div>
  );
};

export default Articles;
