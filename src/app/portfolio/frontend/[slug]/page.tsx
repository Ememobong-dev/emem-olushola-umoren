"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";
import frontendProjects from "@/src/projectData/frontendData.json";
import { FloatingButton } from "@/src/components/buttons/FloatingButton";
import { Col, Row } from "antd";
import { Navbar } from "@/src/components/Navbar";
import Link from "next/link";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const FrontendSinglePage = () => {
  const params = useParams();
  const slug = params?.slug;

  const project = frontendProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div>
      <Navbar />
      <div className="h-dvh relative flex flex-col gap-2 justify-center items-center">
        {/* Floating Buttons Inside This Container */}
        {project?.technologies?.map((tech, index) => {
          const techColorMap: Record<string, string> = {
            TypeScript: "cyan",
            TailwindCSS: "red",
            Git: "blue",
            FramerMotion: "blue",
            NextJS: "yellow",
            antd: "yellow",
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
        <h2 className="text-5xl w-full text-white text-center lg:text-[150px] font-azeret-mono z-10">
          {project?.title}
        </h2>
        <h2 className="text-cyan text-3xl text-center lg:text-5xl font-azeret-mono z-10">
          {project?.location}
        </h2>
      </div>

      {/* OTHER SECTIONS */}
      <div className="mx-8 lg:px-14 3xl:px-28 py-16 lg:py-28 flex flex-col gap-36 lg:gap-56">
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
                <h3 className="font-alro-reg text-2xl mb-8">Overview</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                    {project.overview}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">Challenge</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                    {project.challenge}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">Solution</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                    {project.solution}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">Outcome</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                    {project.outcome}
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
      </div>
      <div className="ml-8 lg:pl-14 3xl:pl-28 py-16 lg:py-28">
        {/* Gallery Section */}
        <div>
          <h3 className="font-alro-reg text-3xl text-white font-bold mb-6">
            Gallery
          </h3>
          <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {project.gallery.map((item, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 rounded-2xl bg-gray-300 h-[350px] 
                 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 
                 overflow-hidden"
              >
                <Image
                  src={item}
                  width={800}
                  height={300}
                  alt={`project image ${index + 1}`}
                  className="object-cover w-full h-full rounded-2xl"
                  quality={90}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div> 
      <div className="mx-8 lg:px-14 3xl:px-28 py-16 lg:py-28">
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
          className="fixed bottom-6 right-6 z-[1000px] px-6 py-3 rounded-full bg-dark border border-white text-white font-azeret-mono text-sm hover:bg-white/20 transition-all duration-300"
        >
          View Live Website
        </motion.a>
      )}

      <Footer />
    </div>
  );
};

export default FrontendSinglePage;
