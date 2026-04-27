"use client";

import Image from "next/image";
import linkedin from "@/public/icons/linkedin-icon.svg";
import github from "@/public/icons/github-icon.svg";
import twitter from "@/public/icons/twitter.svg";
import shotsByPortable from "@/public/images/photography/photography1.png";
import ayocpa from "@/public/images/ayocpa.png";
import sapphire from "@/public/images/sapphire/sapphire2.png";
import AnimatedSection from "@/src/components/AnimatedSection";
import arrowIcon from "@/public/icons/arrow-line.svg";
import line from "@/public/icons/top-line.svg";
import Link from "next/link";
import { useTheme } from "@/src/context/ThemeContext";



export const PortfolioSection = () => {
    const { theme } = useTheme();

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
                                    alt="social_links"
                                    className={`cursor-pointer ${theme === "light" ? "filter invert" : ""}`}
                                />
                            </Link>
                            <Link href="https://github.com/Ememobong-dev" target="_blank">
                                <Image
                                    src={github}
                                    className={`cursor-pointer ${theme === "light" ? "filter invert" : ""}`}
                                    alt="social_links"
                                />
                            </Link>
                            <Link href="https://x.com/FTechbro" target="_blank">
                                <Image
                                    src={twitter}
                                    className={`cursor-pointer ${theme === "light" ? "filter invert" : ""}`}
                                    alt="social_links"
                                />
                            </Link>
                        </div>
                    </div>
                    {/* Desktop view */}
                    <div className="hidden lg:flex w-[30%] 3xl:w-[20%]  mt-5">
                        <p className="text-[15px] font-azeret-mono ">
                            Feel free to explore my portfolio and reach out😁😎
                        </p>
                    </div>
                    {/* Mobile view */}
                    <div className="lg:hidden mt-5">
                        <p className="text-[15px] font-azeret-mono ">
                            Feel free to explore my portfolio and reach out😁😎
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mt-8">
                    <div className="relative cursor-pointer group overflow-hidden border-8 rounded-4xl w-full h-[400px] bg-[#212121] border-[#212121]">
                        <Image
                            className="object-cover rounded-4xl h-full w-full"
                            src={shotsByPortable}
                            alt="shotsByPortable"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 w-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-start p-6 text-white rounded-4xl">
                            <h2 className="text-xl font-semibold font-alro-reg">
                                ShotByPortable, Canada
                            </h2>
                            <p className="text-[12px] mt-2 font-azeret-mono leading-relaxed">
                                ShotByPortable is a photography portfolio website designed to showcase the work of a professional photographer specializing in headshots, lifestyle, and branding photography. The site offers a seamless experience for visitors to explore galleries, review pricing and packages, and book personalized sessions. It also includes a robust admin dashboard for the client to manage content dynamically.
                            </p>
                            <p className="text-sm mt-2">
                                <span className="font-semibold">Tools:</span> NextJS,
                                TypeScript, TailwindCSS, Git
                            </p>
                            <div className="flex flex-wrap justify-between w-full items-center gap-4 mt-10">
                                <Link
                                    href="https://www.shotbyportable.com/"
                                    className="text-blue-400 italic underline text-sm"
                                >
                                    ShotByPortable Website
                                </Link>
                                <Link href="/portfolio/frontend/shot-by-portable" target="_blank">
                                    <button className="text-xs md:text-sm flex flex-wrap cursor-pointer items-center justify-center rounded-full py-2 px-8  border border-white bg-transparent text-white hover:text-cyan">
                                        View Case Study
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative cursor-pointer group overflow-hidden border-8 rounded-4xl w-full h-[400px] bg-[#212121] border-[#212121]">
                        <Image
                            className="object-cover rounded-4xl h-full w-full"
                            src={ayocpa}
                            alt="ayocpa"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 w-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-start p-6 text-white rounded-4xl">
                            <h2 className="text-xl font-semibold font-alro-reg">
                                AyoCPA, Canada
                            </h2>
                            <p className="text-[12px] mt-2 font-azeret-mono leading-relaxed">
                                AyoCPA is a Canada-based platform for trading goods, sharing
                                reviews, discussions, job postings, and free small business
                                listings, empowering users with informed choices.
                            </p>
                            <p className="text-sm mt-2">
                                <span className="font-semibold">Tools:</span> NextJS,
                                TypeScript, TailwindCSS, Git
                            </p>
                            <div className="flex flex-wrap justify-between w-full items-center gap-4 mt-10">
                                <Link
                                    href="https://www.ayocpa.ca/"
                                    className="text-blue-400 italic underline text-sm"
                                >
                                    AyoCPA Website
                                </Link>
                                <Link href="/portfolio/frontend/ayocpa" target="_blank">
                                    <button className="text-xs md:text-sm flex flex-wrap cursor-pointer items-center justify-center rounded-full py-2 px-8  border border-white bg-transparent text-white hover:text-cyan">
                                        View Case Study
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative cursor-pointer group overflow-hidden border-8 rounded-4xl w-full h-[400px] bg-[#212121] border-[#212121]">
                        <Image
                            className="object-cover rounded-4xl h-full w-full"
                            src={sapphire}
                            alt="sapphire"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 w-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-start p-6 text-white rounded-4xl">
                            <h2 className="text-xl font-semibold font-alro-reg">
                                Sapphire Virtual, Nigeria
                            </h2>
                            <p className="text-[12px] mt-2 font-azeret-mono leading-relaxed">
                                Sapphire Virtual Network Limited is a fintech-driven organization focused on device financing and recovery operations. As part of its internal digital transformation, the company required scalable frontend systems to support field agents, operational teams, and administrators. I contributed to the development of key internal tools, including a Recovery Portal and a unified 3.0 dashboard, designed to streamline operations, improve visibility, and support multi-level user interactions across the platform.
                            </p>
                            <p className="text-sm mt-2">
                                <span className="font-semibold">Tools:</span> NextJS,
                                TypeScript, TailwindCSS, Git
                            </p>
                            <div className="flex flex-wrap justify-between w-full items-center gap-4 mt-10">
                                <Link
                                    href="https://sapphirevirtual.com/"
                                    className="text-blue-400 italic underline text-sm"
                                >
                                    Wow Website
                                </Link>
                                <Link href="/portfolio/frontend/sapphire-virtual" target="_blank">
                                    <button className="text-xs md:text-sm flex flex-wrap cursor-pointer items-center justify-center rounded-full py-2 px-8  border border-white bg-transparent text-white hover:text-cyan">
                                        View Case Study
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-8 flex flex-col gap-2 items-center justify-center ">
                    <span>
                        <Image
                            src={line}
                            alt="line"
                            className={theme === "light" ? "filter invert" : ""} />
                    </span>
                    <Link
                        href={"/portfolio"}
                        className="flex  cursor-pointer gap-3 justify-center items-center group transition-all"
                    >
                        <p className="font-azeret-mono font-semibold  text-lg transform transition-transform duration-300 group-hover:translate-x-2">
                            Go to Portfolio
                        </p>
                        <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                            <Image src={arrowIcon} alt="arrow" className={theme === "light" ? "filter invert" : ""}
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </AnimatedSection>
    )
}