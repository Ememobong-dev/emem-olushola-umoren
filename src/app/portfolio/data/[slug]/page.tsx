"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";
import dataProjects from "@/src/projectData/analysisData.json";
import { Navbar } from "@/src/components/Navbar";
import { FloatingButton } from "@/src/components/buttons/FloatingButton";
import { Contact } from "@/src/components/Contact";
import { Col, Row } from "antd";
import { Footer } from "@/src/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import cert1 from "@/public/images/cert1.png";
import cert2 from "@/public/images/cert2.png";
import { useTheme } from "@/src/context/ThemeContext";
import InfiniteScrollGallery from "@/src/components/infinite-scroll/infinite-gallery-scroll";

const DataSinglePage = () => {
  const { theme } = useTheme();

  const params = useParams();
  const slug = params?.slug;

  const project = dataProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div>
      <Navbar />
      {/* header */}
      <div className="h-dvh relative flex flex-col gap-2 justify-center items-center">
        {/* Floating Buttons Inside This Container */}
        {project?.technologies?.map((tech, index) => {
          const techColorMap: Record<string, string> = {
            MSExcel: "cyan",
            MSWord: "red",
            EDA: "red",
            Dashboard: "blue",
            Powerpoint: "yellow",
            MSSQL: "yellow",
            MySql: "yellow",
            DataCleaning: "cyan",
            Git: "red",
            GoogleSheet: "red",
            DataAssessment: "blue",
            JupyterNotebook: "sharp-yellow",
            AzureDataStudio: "deepBlue",
          };

          // Scatter styles — feel free to tweak!
          const scatterPositions = [
            "top-[10%] left-[15%]",
            "top-[25%] right-[20%]",
            "bottom-[25%] left-[25%]",
            "bottom-[15%] right-[15%]",
          ];
          const position = scatterPositions[index % scatterPositions.length];

          return (
            <div key={tech} className={`absolute ${position}`}>
              <FloatingButton variant={techColorMap[tech] || "white"}>
                <p className="italic font-bold">{tech}</p>
              </FloatingButton>
            </div>
          );
        })}

        {/* Title */}
        <h2 className={`text-5xl w-full ${theme === "light" ? "text-black" : "text-white"}  text-center lg:text-[150px] font-azeret-mono z-10`}>
          {project?.title}
        </h2>
      </div>

      {/* OTHER SECTIONS */}
      <div className="mx-8 lg:px-14 3xl:px-28 py-16 lg:pb-28 flex flex-col gap-36 lg:gap-56">
        {/* Second Section */}
        <div className="w-full">
          <Row
            gutter={[
              { xs: 8, sm: 16, md: 24, lg: 32 }, // horizontal gutter
              { xs: 32, sm: 32, md: 32, lg: 32 }, // vertical gutter
            ]}
            className="items-strech h-full w-full"
          >
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">1. Objective</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                    {project.objective}
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">3. Key Findings</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                    {project.key_findings_or_process}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">
                  2. Tasks/Questions
                </h3>
                <div className="flex flex-col gap-2">
                  {project.tasks_or_questions.map((task, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <span className="w-3 h-3 max-w-2 max-h-2 bg-sharp-yellow rounded-full"></span>
                      <p className="text-justify font-azeret-mono font-light">
                        {" "}
                        {task}{" "}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">4. Conclusion</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                    {project.conclusion}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-28">
            <h3 className="font-alro-reg text-2xl">Technologies Used:</h3>
            <span className="flex gap-2 mt-5 mb-8">
              <p className="font-azeret-mono font-light text-[12px]">
                {project.technologies.join(", ") + "."}
              </p>
            </span>
            <h3 className="font-alro-reg text-xl ">
              Live Demo:{" "}
              <Link
                className="font-azeret-mono italic text-base text-deep-blue underline"
                href={project.liveDemo}
              >
                {" "}
                {project.title} Website
              </Link>{" "}
            </h3>
          </div>
        </div>

        {/* Gallery Section */}
        {project.gallery.length > 0 ? (
          <div>
            <h3 className="font-alro-reg text-3xl font-bold mb-4">
              Gallery
            </h3>
            <InfiniteScrollGallery images={project.gallery} />
          </div>
        ) : (
          ""
        )}
        <div>
          <h3 className="font-alro-reg text-3xl font-bold mb-4">
            Certifications
          </h3>
          <div className="flex items-end gap-4 w-full">
            <span>
              <Image src={cert1} className="w-full" alt="" />
            </span>
            <span>
              <Image src={cert2} className="w-full" alt="" />
            </span>
          </div>
        </div>

        {/* Contact */}
        <Contact />
      </div>
      {project.liveDemo && (
        <motion.a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className={`${theme === "light" ? "!text-white hover:bg-black/75 text-black" : " hover:bg-white/20"} fixed bottom-6 right-6 z-[1000px] px-6 py-3 rounded-full border border-white bg-dark text-white font-azeret-mono text-sm  transition-all duration-300`}
        >
          View Live Website
        </motion.a>
      )}

      <Footer />
    </div>
  );
};

export default DataSinglePage;
