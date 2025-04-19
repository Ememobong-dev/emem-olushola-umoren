"use client";

import { ArticlesCard } from "@/src/components/ArticlesCard";
import { Button } from "@/src/components/buttons/Button";
import { FloatingButton } from "@/src/components/buttons/FloatingButton";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import { Navbar } from "@/src/components/Navbar";
import { Col, Row } from "antd";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      role: "frontend",
      title: "Infarena",
      location: "Canada",
      singlePageLink: "/portfolio/frontend/infarena",
      description:
        "Infarena is a Canadian-based platform designed to facilitate seamless interactions among users. It serves as a hub for trading goods, sharing reviews, participating in discussions, and listing small businesses for free.",
    },
    {
      role: "frontend",
      title: "Ayo CPA",
      location: "Canada",
      singlePageLink: "/portfolio/frontend/ayocpa",
      description:
        "AyoCPA is an accounting firm committed to redefining the financial experience. AyoCPA combines personalized services with cutting-edge technology to help clients achieve their financial goals, delivering a customer-focused and family-like experience in Canada.",
    },
    {
      role: "data",
      title: "GDSC",
      location: "Nigeria",
      singlePageLink: "/portfolio/frontend/infarena",
      description:
        "GDSC is a Canadian-based platform designed to facilitate seamless interactions among users. It serves as a hub for trading goods, sharing reviews, participating in discussions, and listing small businesses for free.",
    },
    {
      role: "data",
      title: "Infarena Joblisting",
      location: "Canada",
      singlePageLink: "/portfolio/frontend/infarena",
      description:
        "Infarena is a Canadian-based platform designed to facilitate seamless interactions among users. It serves as a hub for trading goods, sharing reviews, participating in discussions, and listing small businesses for free.",
    },
    {
      role: "frontend",
      title: "Wow",
      location: "China",
      singlePageLink: "/portfolio/frontend/wow",
      description:
        "Wow Gift Card is a leading gift card exchange platform based in China, offering a secure and efficient system for trading gift cards. With competitive rates, instant payouts, and top-tier customer service, the platform prioritizes user security and satisfaction, serving a global audience.",
    },
    {
      role: "data",
      title: "Pizza Sales Analysis",
      location: "US",
      singlePageLink: "/portfolio/frontend/infarena",
      description:
        "Pizza Sales is a Canadian-based platform designed to facilitate seamless interactions among users. It serves as a hub for trading goods, sharing reviews, participating in discussions, and listing small businesses for free.",
    },
  ];

  return (
    <div>
      <Navbar />
      {/* <div className="h-dvh relative flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="font-alro-reg text-8xl text-center">Umoren</h2>
            <h2 className="font-bold font-alro-reg text-8xl  text-center">
              Emem Olushola
            </h2>
          </div>

          <div className="absolute bottom-[20%]">
            <button
              onClick={handleScrollDown}
              className="rounded-full lg:relative cursor-pointer border border-white w-32 py-2 px-3"
            >
              Scroll down
            </button>
          </div>
        </div>
      </div> */}

      <div className="h-dvh relative flex justify-center items-center">
        {/* Floating Tech Tags */}
        <div className="absolute top-[15%] left-[10%]">
          <FloatingButton variant="cyan">TypeScript</FloatingButton>
        </div>
        <div className="absolute top-[20%] right-[15%]">
          <FloatingButton variant="blue">Git</FloatingButton>
        </div>
        <div className="absolute bottom-[30%] left-[15%]">
          <FloatingButton variant="red">TailwindCSS</FloatingButton>
        </div>
        <div className="absolute bottom-[20%] right-[20%]">
          <FloatingButton variant="yellow">NextJS</FloatingButton>
        </div>

        {/* Name */}
        <div className="text-center">
          <h2 className="font-alro-reg text-8xl">Umoren</h2>
          <h2 className="font-bold font-alro-reg text-8xl">Emem Olushola</h2>
        </div>

        {/* Scroll Button */}
        <div className="absolute bottom-[10%]">
          <button
            onClick={handleScrollDown}
            className="rounded-full cursor-pointer border border-white w-32 py-2 px-3"
          >
            Scroll down
          </button>
        </div>
      </div>

      {/* Portfolio Scroll */}
      <div
        ref={scrollRef}
        className="max-h-[700px] md:max-h-[80vh] flex flex-col mx-8 lg:mx-14 3xl:mx-28 border"
      >
        {/* Tabs */}
        <div className="flex gap-8 lg:gap-28 justify-center py-6 sticky top-0 bg-[#0A0A0C] z-10">
          <p
            className={`cursor-pointer ${
              activeTab === "frontend"
                ? "text-white border-b-2 border-cyan"
                : "lg:opacity-25 opacity-50"
            }`}
            onClick={() => setActiveTab("frontend")}
          >
            Frontend Developer
          </p>
          <p
            className={`cursor-pointer ${
              activeTab === "data"
                ? "text-white border-b-2 border-cyan"
                : "lg:opacity-25 opacity-50"
            }`}
            onClick={() => setActiveTab("data")}
          >
            Data Analyst
          </p>
        </div>

        {/* Scrollable Project Area */}
        <div className="overflow-y-scroll snap-y snap-mandatory custom-scrollbar">
          {projects
            .filter((proj) => proj.role === activeTab)
            .map((proj, idx) => (
              <div
                key={idx}
                className="snap-start min-h-[600px] md:min-h-[80vh] flex flex-col gap-8 justify-center items-center"
              >
                <Link href={proj.singlePageLink}>
                  <h3 className="font-azeret-mono cursor-pointer text-center text-4xl lg:text-8xl hover:text-sharp-yellow">
                    {proj.title}
                  </h3>
                </Link>

                <h5 className="font-azeret-mono text-3xl lg:text-6xl text-cyan">
                  {proj.location}
                </h5>
                <div className="flex flex-col lg:flex-row gap-4 justify-center items-center ">
                  <p className="lg:w-1/2 lg:text-left text-center">
                    {proj.description}
                  </p>
                  <Button
                    variant="bordered"
                    target
                    link={proj.singlePageLink}
                    text="Open Project"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Latest Articles */}
      <div className="px-8 lg:px-14 3xl:px-28 py-28">
        <div className="flex items-center justify-between mb-8">
          <p className="font-alro-reg text-3xl">Latest Article</p>
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
      {/* Contact */}
      <div className="px-8 lg:px-14 3xl:px-28 py-28">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
