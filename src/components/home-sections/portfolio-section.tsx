"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import linkedin from "@/public/icons/linkedin-icon.svg";
import github from "@/public/icons/github-icon.svg";
import twitter from "@/public/icons/twitter.svg";


import AnimatedSection from "@/src/components/AnimatedSection";
import arrowIcon from "@/public/icons/arrow-line.svg";
import line from "@/public/icons/top-line.svg";
import { useTheme } from "@/src/context/ThemeContext";
import frontendProjects from "@/src/projectData/frontendData.json"



export const PortfolioSection = () => {
  const { theme } = useTheme();
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);

  return (
    <AnimatedSection>
      <div>
        <div>
          <div className="flex gap-8 items-center justify-between lg:justify-normal">
            <h3 className="text-3xl font-alro-reg bg-linear-to-r from-cyan-400 to-blue-400 dark:from-cyan-400 dark:to-blue-400 light:from-cyan-600 light:to-blue-600 bg-clip-text text-transparent">
              My <span className="font-bold">Portfolio</span>
            </h3>

            <div className="flex gap-3 items-center">
              <Link
                href="https://www.linkedin.com/in/emem-olushola-umoren/"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  className={`cursor-pointer ${
                    theme === "light" ? "filter invert" : ""
                  }`}
                />
              </Link>

              <Link href="https://github.com/Ememobong-dev" target="_blank">
                <Image
                  src={github}
                  alt="github"
                  className={`cursor-pointer ${
                    theme === "light" ? "filter invert" : ""
                  }`}
                />
              </Link>

              <Link href="https://x.com/FTechbro" target="_blank">
                <Image
                  src={twitter}
                  alt="twitter"
                  className={`cursor-pointer ${
                    theme === "light" ? "filter invert" : ""
                  }`}
                />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex w-[30%] 3xl:w-[20%] mt-5">
            <p className="text-[15px] font-azeret-mono">
              Feel free to explore my portfolio and reach out😁😎
            </p>
          </div>

          <div className="lg:hidden mt-5">
            <p className="text-[15px] font-azeret-mono">
              Feel free to explore my portfolio and reach out😁😎
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mt-8">
          {frontendProjects.slice(0, 3).map((project) => {
            const isActive = activeMobileCard === project.slug;

            return (
              <div
                key={project.slug}
                onClick={() =>
                  setActiveMobileCard(isActive ? null : project.slug)
                }
                className="relative cursor-pointer group overflow-hidden border-8 rounded-4xl w-full h-[400px] bg-[#212121] border-[#212121]"
              >
                <Image
                  className="object-cover rounded-4xl h-full w-full"
                  src={project.gallery[0]}
                  alt={project.slug}
                  width={700}
                  height={700}
                  priority
                />

                <div
                  className={`
                    absolute inset-0 w-full bg-black/90 transition-opacity duration-300 text-cyan sm:text-white rounded-4xl
                    flex justify-center items-center
                    lg:flex-col lg:justify-center lg:items-start lg:p-6
                    ${
                      isActive
                        ? "opacity-90"
                        : "opacity-0 lg:group-hover:opacity-90"
                    }
                  `}
                >
                  <Link
                    href={`/frontend/${project.slug}`}
                    className="lg:hidden  text-lg font-semibold font-alro-reg"
                  >
                    View Project
                  </Link>

                  <div className="hidden lg:block">
                    <h2 className="text-xl font-semibold font-alro-reg">
                      {project.title}
                    </h2>

                    <p className="text-[12px] mt-2 font-azeret-mono leading-relaxed">
                      {project.shortOverview}
                    </p>

                    <p className="text-sm mt-2">
                      <span className="font-semibold">Tools:</span>{" "}
                      {project.technologies}
                    </p>

                    <div className="flex flex-wrap justify-between w-full items-center gap-4 mt-10">
                      <Link
                        href={project.liveDemo}
                        target="_blank"
                        className="text-blue-400 italic underline text-sm"
                      >
                        {project.title}
                      </Link>

                      <Link href={`/frontend/${project.slug}`} target="_blank">
                        <button className="text-xs md:text-sm flex flex-wrap cursor-pointer items-center justify-center rounded-full py-2 px-8 border border-white bg-transparent text-white hover:text-cyan">
                          View Case Study
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-2 items-center justify-center">
          <span>
            <Image
              src={line}
              alt="line"
              className={theme === "light" ? "filter invert" : ""}
            />
          </span>

          <Link
            href="/portfolio"
            className="flex cursor-pointer gap-3 justify-center items-center group transition-all"
          >
            <p className="font-azeret-mono font-semibold text-lg transform transition-transform duration-300 group-hover:translate-x-2">
              Go to Portfolio
            </p>

            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              <Image
                src={arrowIcon}
                alt="arrow"
                className={theme === "light" ? "filter invert" : ""}
              />
            </span>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};