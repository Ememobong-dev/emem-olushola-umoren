"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";
import dataProjects from "@/src/projectData/analysisData.json";
import { Navbar } from "@/src/components/Navbar";
import { FloatingButton } from "@/src/components/buttons/FloatingButton";

const DataSinglePage = () => {
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
    </div>
  );
};

export default DataSinglePage;
