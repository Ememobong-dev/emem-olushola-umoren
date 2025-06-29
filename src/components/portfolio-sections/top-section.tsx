"use client";


import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/src/components/buttons/Button";
import { FloatingButton } from "@/src/components/buttons/FloatingButton";
import Link from "next/link";
import frontendProjects from "@/src/projectData/frontendData.json";
import dataProjects from "@/src/projectData/analysisData.json";
import { useTheme } from "@/src/context/ThemeContext";



export const TopSection = () => {
    const [activeTab, setActiveTab] = useState("frontend");
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(1);
    const projectRefs = useRef<(HTMLElement | null)[]>([]);
    const { theme } = useTheme();


    const handleScrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const projectDynamicList =
        activeTab === "frontend" ? frontendProjects : dataProjects;

    const totalProjects = projectDynamicList.length;

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        projectRefs.current.forEach((ref, idx) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setCurrentIndex(idx + 1);
                        }
                    });
                },
                {
                    root: scrollRef.current,
                    threshold: 0.6,
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [projectDynamicList]);

    // 🔁 Reset scroll position and index on tab change
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
        }
        setCurrentIndex(1);
    }, [activeTab]);
    return (
        <>
            <div className="h-dvh relative flex justify-center items-center">
                {/* Floating Tech Tags */}
                <div className="absolute top-[15%] left-[10%]">
                    <FloatingButton variant="cyan">
                        Frontend <span className="font-bold">Development</span>{" "}
                    </FloatingButton>
                </div>
                <div className="absolute top-[20%] right-[15%]">
                    <FloatingButton variant="blue">
                        React <span className="font-bold">Developer</span>
                    </FloatingButton>
                </div>
                <div className="absolute bottom-[30%] left-[15%]">
                    <FloatingButton variant="red">
                        Google <span className="font-bold">Bigquery</span>{" "}
                    </FloatingButton>
                </div>
                <div className="absolute bottom-[20%] right-[20%]">
                    <FloatingButton variant="yellow">
                        Data <span className="font-bold">Analysis</span>{" "}
                    </FloatingButton>
                </div>

                {/* Name */}
                <div className="text-center">
                    <h2 className=" font-alro-reg text-5xl text-center lg:text-8xl">Emem Olushola</h2>
                    <h2 className="font-bold font-alro-reg text-center text-5xl lg:text-8xl">Umoren.</h2>
                </div>

                {/* Scroll Button */}
                <div className="absolute flex justify-center  bottom-[10%]">
                    <button
                        onClick={handleScrollDown}
                        // className="rounded-full cursor-pointer border border-white py-2 px-3"
                        className={` ${theme === "light" ? "border-black" : "border-white"} w-32 md:w-auto h-10 rounded-full absolute bottom-[10%] lg:relative cursor-pointer border font-normal font-alro-reg  py-2 md:px-3`}
                    >
                        Scroll down
                    </button>
                </div>
            </div>

            {/* Portfolio Scroll */}
            <div
                ref={scrollRef}
                className="max-h-[700px] relative md:max-h-[80vh] flex flex-col mx-4 lg:mx-14 3xl:mx-28 border overflow-y-scroll snap-y snap-mandatory custom-scrollbar scroll-smooth"
            >
                {/* Sticky Counter */}
                <div className="sticky right-0 top-2 z-20 bg-black bg-opacity-50 px-2 py-1 rounded text-white text-sm w-fit ml-auto md:mr-4">
                    {currentIndex}/{totalProjects}
                </div>
                {/* Tabs */}
                <div className="flex gap-8 lg:gap-28 justify-center py-6 sticky top-0  z-10">
                    <p
                        className={`cursor-pointer
            ${theme === "light" ? "!text-black" : "text-white"}
             ${activeTab === "frontend"
                                ? "border-b-4 border-cyan"
                                : "lg:opacity-25 opacity-50"
                            }`}
                        onClick={() => setActiveTab("frontend")}
                    >
                        Frontend Developer
                    </p>
                    <p
                        className={`cursor-pointer
              ${theme === "light" ? "!text-black" : "text-white"}
               ${activeTab === "data"
                                ? "border-b-4 border-cyan"
                                : "lg:opacity-25 opacity-50"
                            }`}
                        onClick={() => setActiveTab("data")}
                    >
                        Data Analyst
                    </p>
                </div>

                {/* Scrollable Project Area */}
                <div>
                    {projectDynamicList.map((proj, idx) => (
                        <div
                            key={idx}
                            ref={(el) => {
                                projectRefs.current[idx] = el;
                            }}
                            className="snap-start  min-h-[600px] md:min-h-[80vh] flex flex-col gap-3 md:gap-8 justify-center items-center"
                        >
                            <Link
                                className=" w-full flex items-center justify-center mt-28 lg:mt-0"
                                href={`/portfolio/${activeTab}/${proj.slug} `}
                            >
                                <h3 className="font-azeret-mono lg:w-[80%]  cursor-pointer text-center text-4xl lg:text-8xl">
                                    {proj.title}
                                </h3>
                            </Link>

                            {activeTab === "frontend" && (
                                <h5 className="font-azeret-mono text-3xl lg:text-6xl text-cyan">
                                    {proj.location}
                                </h5>
                            )}

                            <div className="flex flex-col mx-5 sm:mx-0 lg:flex-row gap-8 md:gap-4 justify-center items-center ">
                                <p className="lg:w-1/2 lg:text-left text-center">
                                    {proj.overview}
                                </p>
                                <Button
                                    variant="bordered"
                                    target
                                    link={`/portfolio/${activeTab}/${proj.slug} `}
                                    text="Open Project"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {/*  */}
            </div>
        </>
    )
}
