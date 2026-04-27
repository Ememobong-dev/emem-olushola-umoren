"use client";

import { Col, Row } from "antd";
import { FloatingButton } from "../components/buttons/FloatingButton";
import { Button } from "../components/buttons/Button";
import Image from "next/image";
import linkedin from "@/public/icons/linkedin-icon.svg";
import github from "@/public/icons/github-icon.svg";
import twitter from "@/public/icons/twitter.svg";
import shotsByPortable from "@/public/images/photography/photography1.png";
import ayocpa from "@/public/images/ayocpa.png";
import wow from "@/public/images/wow.png";
import { SkillProgress } from "../components/SkillProgress";
import AnimatedSection from "../components/AnimatedSection";
import arrowIcon from "@/public/icons/arrow-line.svg";
import line from "@/public/icons/top-line.svg";
import { useRef } from "react";
import Link from "next/link";
import { TypingText } from "../components/animations/TypingTextAnimation";
import LeftRevealAnimatedText from "../components/animations/LeftRevealAnimation";
import RightRevealAnimatedText from "../components/animations/RightRevealAnimation";
import { useTheme } from "../context/ThemeContext";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Experience } from "../components/Experience";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();


  const scrollDown = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const frontendSkills = [
    { skill: "React", percent: 90 },
    { skill: "Next.js", percent: 85 },
    { skill: "Tailwind CSS", percent: 88 },
    { skill: "Typescript", percent: 75 },
    { skill: "CSS", percent: 85 },
    { skill: "JavaScript", percent: 88 },
  ];


  return (
    <div>
      <div className={`landing_bg ${theme}-theme relative`}>
        <div className="lg:absolute lg:bottom-20 py-28 lg:py-0 px-14 w-full">
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-0 lg:justify-between lg:items-end w-full">
            <div>
              <TypingText
                text="Emem Olushola"
                className="text-4xl w-full text-center lg:text-left lg:text-8xl font-alro-reg bg-linear-to-r from-cyan-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 light:from-cyan-600 light:to-purple-600 bg-clip-text text-transparent"
              />
              <TypingText
                text="Umoren."
                className="text-4xl w-full font-bold text-center  lg:text-left lg:text-8xl font-alro-reg"
              />
              <LeftRevealAnimatedText>
                <div className="flex justify-center lg:justify-normal">
                  <p className=" w-full px-8 lg:px-0 absolute bottom-[20%] lg:relative  lg:mt-10 lg:w-[60%] font-azeret-mono  text-center lg:text-left">
                    A Frontend Developer skilled in{" "}
                    <span className="text-pepper-red">React.js</span>,{" "}
                    <span className="text-cyan">Next.js</span>,{" "}
                    <span className="text-blue">TypeScript</span>,{" "}
                    <span className="text-sharp-yellow">TailwindCSS</span>,{" "}
                    <span className="text-sharp-yellow">SQL</span>,{" "} and
                    <span className="text-sharp-yellow"> Python</span>.{" "}
                  </p>
                </div>
              </LeftRevealAnimatedText>
            </div>
            <div className="flex justify-center lg:justify-normal lg:absolute lg:bottom-5 lg:right-14">
              <button
                onClick={scrollDown}
                className={` ${theme === "light" ? "border-black" : "border-white"} rounded-full absolute bottom-[10%] lg:relative cursor-pointer border font-normal font-alro-reg py-2 px-3`}
              >
                Scroll down
                <ArrowDownOutlined className="w-4 h-4 ml-2 animate-bounce" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute hidden lg:flex top-[30%] left-[30%]">
          <FloatingButton variant="cyan">
            <p className="italic">
              Creative <span className="font-bold not-italic ">Thinker</span>
            </p>
          </FloatingButton>
        </div>
        <div className="absolute hidden lg:flex bottom-[18%] right-[24%]">
          <FloatingButton variant="yellow">
            <p className="italic">
              Frontend <span className="font-bold not-italic ">Developer</span>
            </p>
          </FloatingButton>
        </div>
      </div>
      <div className="px-8 lg:px-14 3xl:px-28 py-28 flex flex-col gap-36 lg:gap-56 ">
        {/* Second Section */}
        <div ref={aboutRef} id="about">
          <Row
            gutter={[56, 56]}
            className="flex items-stretch overflow-hidden h-full"
          >
            <Col xs={24} lg={14} className="">
              <LeftRevealAnimatedText>
                <div className="h-full overflow-hidden">
                  <h3 className="font-alro-reg text-center sm:text-left text-2xl lg:text-3xl">
                    Who is <span className="font-bold bg-linear-to-r from-cyan-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 light:from-cyan-600 light:to-purple-600 bg-clip-text text-transparent">Emem Olushola?</span>
                  </h3>
                  <div className="flex flex-col sm:text-base text-center sm:text-justify gap-4 mt-6 font-alro-reg">
                    <p className="sm:tracking-widest leading-relaxed">
                      I am a Frontend Engineer with expertise in React, Next.js, TypeScript, and modern frontend tooling. With over{" "}
                      <span className={`font-bold ${theme === "light" ? "text-blue-800" : "text-progress-cyan"}`}>
                        four years
                      </span>{" "}
                      of experience, I build scalable, high-performance web applications with a strong focus on clean architecture, performance, and accessibility.
                    </p>

                    <p className="sm:tracking-widest leading-relaxed">
                      At <span className="font-bold text-sharp-yellow">Sapphire Virtual Network Limited</span>, I led frontend development of a Recovery Portal used by field agents to log visitations, manage customer interactions, and track recovery operations. I also built secure, role-based dashboards as part of the company’s unified platform, improving workflow efficiency across business units.
                    </p>

                    <p className="sm:tracking-widest leading-relaxed">
                      I have delivered production-ready frontend solutions across multiple industries, including a photography platform with a custom admin dashboard for{" "}
                      <span className="font-bold text-cyan">ShotByPortable</span>, a corporate website and client portal for{" "}
                      <span className="font-bold text-pepper-red">AyoCPA</span>, and a scalable company platform at{" "}
                      <span className="font-bold text-sharp-yellow">Siryoung Technologies</span>.
                    </p>

                    <p className="sm:tracking-widest leading-relaxed">
                      I focus on building intuitive user experiences, writing maintainable code, and developing frontend systems that scale efficiently. I am always eager to collaborate and contribute to meaningful, high-impact products.
                    </p>
                  </div>
                  <div className="flex gap-8 items-center mt-8">
                    <Button
                      link="/portfolio"
                      variant="bordered"
                      text="View Portfolio"
                    />
                    <Button
                      link="/Ememobong-Umoren-Resume.pdf"
                      target
                      variant="coloured"
                      text="Download Resume"
                      download
                      
                    />
                  </div>
                </div>
              </LeftRevealAnimatedText>
            </Col>
            <Col xs={24} lg={10} className="">
              <RightRevealAnimatedText>
                <div className="bg-dark-black overflow-hidden w-full h-full rounded-2xl">
                  <div className="text-white font-azeret-mono rounded-t-2xl bg-grey py-3 px-6">
                    My achievements
                  </div>
                  <div className="px-8 py-3">
                    <pre className="text-white font-azeret-mono text-sm whitespace-pre-wrap break-words leading-relaxed">
                      <code className="text-cyan font-azeret-mono text-[11px]">
                        <span className="text-[#03A9F4]">class</span>{" "}
                        <span className="text-pepper-red">TechCareer</span>:
                        {"\n"}
                        {"    "}
                        <span className="text-[#03A9F4]">def</span>{" "}
                        <span className="text-pepper-red">__init__</span>
                        <span className="text-white">(self):</span>
                        {"\n"}
                        {"        "}
                        <span className="text-white">
                          self.data_analysis = [{" "}
                        </span>{" "}
                        {"\n"}
                        {"            "}
                        &quot;Women Techsters Data Science Bootcamp
                        Certification&quot;,{"\n"}
                        {"            "}
                        &quot;Google Professional Data Analytics
                        Certificate&quot;,{"\n"}
                        {"            "}
                        &quot;Data Analytics Team Lead at GDSC&quot;,{"\n"}
                        {"            "}
                        &quot;IEEE SPAC Event Speaker&quot;{"\n"}
                        {"        "}
                        <span className="text-white">]</span>
                        {"\n"}
                        {"        "}
                        <span className="text-white">
                          self.frontend_development = [{" "}
                        </span>{" "}
                        {"\n"}
                        {"            "}
                        &quot;Built user-friendly platforms like ShotByPortable and
                        Ayo CPA&quot;,{"\n"}
                        {"            "}
                        &quot;Developed Admin and User Portals, companies management tools&quot;,{"\n"}
                        {"            "}
                        &quot;Led frontend projects at Reed Tech&quot;{"\n"}
                        {"        "}
                        <span className="text-white">]</span>
                        {"\n"}
                        {"    "}
                        <span className="text-[#03A9F4]">def</span>{" "}
                        <span className="text-pepper-red">show_highlights</span>
                        <span className="text-white">(self):</span>
                        {"\n"}
                        {"        "}
                        <span className="text-sharp-yellow">print</span>(
                        <span className="text-yellow-100">
                          &quot;Data Analysis Achievements:&quot;
                        </span>
                        ){"\n"}
                        {"        "}
                        <span className="text-[#03A9F4]">for</span>
                        <span className="text-white"> achievement </span>
                        <span className="text-[#03A9F4]">in</span>{" "}
                        <span className="text-white">self.data_analysis:</span>
                        {"\n"}
                        {"            "}
                        <span className="text-sharp-yellow">print</span>(
                        <span className="text-yellow-100">
                          f&quot;- &#123;achievement&#125;&quot;
                        </span>
                        ){"\n"}
                        {"        "}
                        <span className="text-sharp-yellow">print</span>(
                        <span className="text-yellow-100">
                          &quot;\nFrontend Development Projects:&quot;
                        </span>
                        ){"\n"}
                        {"        "}
                        <span className="text-[#03A9F4]">for</span>
                        <span className="text-white"> project </span>
                        <span className="text-[#03A9F4]">in</span>{" "}
                        <span className="text-white">
                          self.frontend_development:
                        </span>
                        {"\n"}
                        {"            "}
                        <span className="text-sharp-yellow">print</span>(
                        <span className="text-yellow-100">
                          f&quot;- &#123;project&#125;&quot;
                        </span>
                        ){"\n\n"}
                        <span className="text-[#7F7F7F]">
                          # Instantiate and display highlights
                        </span>
                        {"\n"}
                        <span className="text-white">
                          my_career = TechCareer(){" "}
                        </span>
                        {"\n"}
                        <span className="text-white">
                          my_career.show_highlights(){" "}
                        </span>
                      </code>
                    </pre>
                  </div>
                </div>
              </RightRevealAnimatedText>
            </Col>
          </Row>
        </div>
        {/* THIRD SECTION */}
        <AnimatedSection>
          <div id="skills">
            <h2 className="font-alro-reg mb-8 text-center text-3xl bg-linear-to-r from-cyan-400 to-purple-400 dark:from-cyan-400 dark:to-purple-400 light:from-cyan-600 light:to-purple-600 bg-clip-text text-transparent font-bold">
              {" "}
              Skills & Expertise
            </h2>
            <div className="flex flex-col gap-14">
              <div>
                <p className="font-azeret-mono text-center text-xl">
                  Technologies and tools I use to bring ideas to life
                </p>
                <div className=" h-full flex justify-center gap-5 flex-wrap gap-y-2 mt-10">
                  {frontendSkills.map(({ skill, percent }) => (
                    <SkillProgress
                      key={skill}
                      skill={skill}
                      percent={percent}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
        {/* EXPERIENCE SECTION */}
        <Experience />
        {/* FOURTH SECTION */}
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
                  src={wow}
                  alt="wow"
                />
                {/* Overlay */}
                <div className="absolute inset-0 w-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-start p-6 text-white rounded-4xl">
                  <h2 className="text-xl font-semibold font-alro-reg">
                    WowGiftCard, China
                  </h2>
                  <p className="text-[12px] mt-2 font-azeret-mono leading-relaxed">
                    WowGiftCard is a China-based platform for trading goods,
                    sharing reviews, discussions, job postings, and free small
                    business listings, empowering users with informed choices.
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold">Tools:</span> NextJS,
                    TypeScript, TailwindCSS, Git
                  </p>
                  <div className="flex flex-wrap justify-between w-full items-center gap-4 mt-10">
                    <Link
                      href="https://www.wowgiftcard.net/"
                      className="text-blue-400 italic underline text-sm"
                    >
                      Wow Website
                    </Link>
                    <Link href="/portfolio/frontend/wow" target="_blank">
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
      </div>
    </div>
  );
}
