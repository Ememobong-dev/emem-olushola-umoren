import { Col, Row } from "antd";
import { FloatingButton } from "../components/buttons/FloatingButton";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/buttons/Button";
import Image from "next/image";
import linkedin from "@/public/icons/linkedin-icon.svg";
import github from "@/public/icons/github-icon.svg";
import twitter from "@/public/icons/twitter.svg";
import infarena from "@/public/images/infarena.png";
import ayocpa from "@/public/images/ayocpa.png";
import wow from "@/public/images/wow.png";
import { Contact } from "../components/Contact";
import { SkillProgress } from "../components/SkillProgress";
import AnimatedSection from "../components/AnimatedSection";
import arrowIcon from "@/public/icons/arrow-line.svg";
import line from "@/public/icons/top-line.svg";

export default function Home() {
  const frontendSkills = [
    { skill: "React", percent: 90 },
    { skill: "Next.js", percent: 85 },
    { skill: "Tailwind CSS", percent: 88 },
    { skill: "Typescript", percent: 80 },
    { skill: "CSS", percent: 85 },
    { skill: "JavaScript", percent: 88 },
  ];

  const dataSkills = [
    { skill: "Data Cleaning", percent: 90 },
    { skill: "Data Creation", percent: 85 },
    { skill: "Data Modelling", percent: 88 },
    { skill: "Excel", percent: 80 },
    { skill: "SPSS", percent: 85 },
    { skill: "SQL", percent: 70 },
    { skill: "Python", percent: 75 },
    { skill: "PowerBI", percent: 75 },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <div className="landing_bg relative">
        <div className="lg:absolute lg:bottom-20 py-28 lg:py-0 px-14 3xl:px-28 w-full">
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:gap-0 lg:justify-between lg:items-end w-full">
            <div>
              <h2 className="text-4xl w-full text-center lg:text-left lg:text-8xl font-alro-reg">
                Umoren
              </h2>
              <h2 className="text-4xl w-full  text-center lg:text-left lg:text-8xl font-alro-reg">
                Emem Olushola
              </h2>
              <div className="flex justify-center lg:justify-normal">
                <p className=" w-full absolute bottom-[20%] lg:relative  lg:mt-10 lg:w-1/2 font-azeret-mono  text-center lg:text-left">
                  Self-taught Frontend Developer and Data Analyst skilled in{" "}
                  <span className="text-pepper-red">React</span>,{" "}
                  <span className="text-blue">Next.js</span>,{" "}
                  <span className="text-cyan">TypeScript</span>, and{" "}
                  <span className="text-sharp-yellow">TailwindCSS</span>.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-normal">
              <button className="rounded-full absolute bottom-[10%] lg:relative cursor-pointer border border-white w-32 py-2 px-3">
                Scroll down
              </button>
            </div>
          </div>
        </div>
        <div className="absolute hidden lg:flex top-[30%] left-[30%]">
          <FloatingButton variant="cyan">
            <p className="italic">
              Data <span className="font-bold not-italic ">Analyst</span>
            </p>
          </FloatingButton>
        </div>
        <div className="absolute hidden lg:flex bottom-[30%] right-[24%]">
          <FloatingButton variant="yellow">
            <p className="italic">
              Frontend <span className="font-bold not-italic ">Developer</span>
            </p>
          </FloatingButton>
        </div>
      </div>
      <div className="px-8 lg:px-14 3xl:px-28 py-28 flex flex-col gap-36 lg:gap-56">
        {/* Second Section */}
        <AnimatedSection>
          <div>
            <Row gutter={[56, 56]} className="flex items-stretch h-full">
              <Col lg={10}>
                <div className="h-full flex flex-col justify-between ">
                  <h3 className="font-alro-reg text-2xl lg:text-3xl">
                    Who is <span className="font-bold">Emem Olushola?</span>
                  </h3>
                  <div className="flex flex-col text-justify gap-3 mt-6 font-azeret-mono text-[11px] ">
                    <p>
                      I am a self-taught Frontend Developer and Data Analyst
                      with expertise in React, Next.js, TypeScript, and
                      TailwindCSS. My journey into tech has been fueled by
                      curiosity, continuous learning, and a passion for
                      problem-solving. Over the years, I have built
                      user-friendly, scalable, and impactful digital solutions
                      for global clients, including Infarena, a trade and review
                      platform; AyoCPA, a personalized accounting solution; and
                      WOW Gift Card, a secure platform for global gift card
                      trading.
                    </p>
                    <p>
                      Beyond development, I hold certifications from Google and
                      Women Techsters, solidifying my expertise in data
                      analytics and digital problem-solving. I previously served
                      as the Data Analytics Team Lead at GDSC, where I mentored
                      peers, led data-driven projects, and contributed to
                      fostering a community of aspiring analysts and developers.
                    </p>
                    <p>
                      My passion for learning drives me to stay ahead of
                      industry trends and continuously refine my skills. I
                      actively document my 100DaysOfCode journey on LinkedIn,
                      sharing insights, challenges, and progress while exploring
                      emerging technologies and innovations in frontend
                      development and data analytics.
                    </p>
                    <p>
                      With a deep appreciation for clean code, and data-driven
                      decision-making, I am always eager to collaborate, build
                      meaningful projects, and push the boundaries of
                      technology.
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <Button variant="bordered" text="View Portfolio" />
                    <Button variant="fill" text="Go To LinkedIn" />
                  </div>
                </div>
              </Col>
              <Col lg={14}>
                <div className="bg-dark-black w-full h-full rounded-2xl">
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
                        &quot;Built user-friendly platforms like Infarena and
                        Ayo CPA&quot;,{"\n"}
                        {"            "}
                        &quot;Developed WOW Gift Card, a secure global
                        platform&quot;,{"\n"}
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
              </Col>
            </Row>
          </div>
        </AnimatedSection>
        {/* THIRD SECTION */}
        <AnimatedSection>
          <div>
            <h2 className="font-alro-reg mb-8 text-center text-3xl">
              {" "}
              Notable <span className="font-bold">Skills</span>{" "}
            </h2>
            <div className="flex flex-col gap-14">
              <div>
                <p className="font-azeret-mono text-center text-xl">
                  <span className="text-deep-blue">Frontend</span> Development
                </p>
                <div className=" h-full flex justify-between flex-wrap gap-y-2 mt-10">
                  {frontendSkills.map(({ skill, percent }) => (
                    <SkillProgress
                      key={skill}
                      skill={skill}
                      percent={percent}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="font-azeret-mono text-center text-xl">
                  <span className="text-deep-blue">Data</span> Analysis
                </p>
                <div className=" h-full flex justify-between  lg:justify-center lg:gap-5 flex-wrap gap-y-2 mt-10">
                  {dataSkills.map(({ skill, percent }) => (
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
        {/* FOURTH SECTION */}
        <AnimatedSection>
          <div>
            <div>
              <div className="flex gap-8 items-center justify-between lg:justify-normal">
                <h3 className="text-2xl font-alro-reg">
                  My <span className="font-bold">Portfolio</span>
                </h3>
                <div className="flex gap-3 items-center">
                  <span>
                    <Image src={linkedin} alt="social_links" />
                  </span>
                  <span>
                    <Image src={github} alt="social_links" />
                  </span>
                  <span>
                    <Image src={twitter} alt="social_links" />
                  </span>
                </div>
              </div>
              {/* Mobile view */}
              <div className="hidden lg:flex w-[30%] 3xl:w-[20%]  mt-5">
                <p className="text-[15px] font-azeret-mono ">
                  Feel free to explore my portfolio and reach out ;-)
                </p>
              </div>
              {/* laptop view */}
              <div className="lg:hidden mt-5">
                <p className="text-[15px] font-azeret-mono ">
                  Feel free to explore my portfolio and reach out ;-)
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mt-8">
              <div className="relative cursor-pointer group overflow-hidden border-8 rounded-4xl w-full h-[400px] bg-[#212121] border-[#212121]">
                <Image
                  className="object-cover rounded-4xl h-full w-full"
                  src={infarena}
                  alt="infarena"
                />
                {/* Overlay */}
                <div className="absolute inset-0 w-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-start p-6 text-white rounded-4xl">
                  <h2 className="text-xl font-semibold font-alro-reg">
                    Infarena, Canada
                  </h2>
                  <p className="text-[12px] mt-2 font-azeret-mono leading-relaxed">
                    Infarena is a Canada-based platform for trading goods,
                    sharing reviews, discussions, job postings, and free small
                    business listings, empowering users with informed choices.
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold">Tools:</span> NextJS,
                    TypeScript, TailwindCSS, Git
                  </p>
                  <div className="flex justify-between w-full items-center gap-4 mt-10">
                    <a
                      href="#"
                      className="text-blue-400 italic underline text-sm"
                    >
                      Infarena Website
                    </a>
                    <Button variant="bordered" text="View Case Study" />
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
                  <div className="flex justify-between w-full items-center gap-4 mt-10">
                    <a
                      href="#"
                      className="text-blue-400 italic underline text-sm"
                    >
                      AyoCPA Website
                    </a>
                    <Button variant="bordered" text="View Case Study" />
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
                  <div className="flex justify-between w-full items-center gap-4 mt-10">
                    <a
                      href="#"
                      className="text-blue-400 italic underline text-sm"
                    >
                      WowGiftCard Website
                    </a>
                    <Button variant="bordered" text="View Case Study" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-8 flex flex-col gap-2 items-center justify-center ">
              <span>
                <Image src={line} alt="line" />
              </span>
              <div className="flex cursor-pointer gap-3 justify-center items-center group transition-all">
                <p className="font-azeret-mono font-semibold transform transition-transform duration-300 group-hover:translate-x-2">
                  Go to Portfolio
                </p>
                <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                  <Image src={arrowIcon} alt="arrow" />
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
}
