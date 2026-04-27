"use client";

import { Col, Row } from "antd";
import { Button } from "@/src/components/buttons/Button";
import { useRef } from "react";
import LeftRevealAnimatedText from "@/src/components/animations/LeftRevealAnimation";
import RightRevealAnimatedText from "@/src/components/animations/RightRevealAnimation";
import { useTheme } from "@/src/context/ThemeContext";



export const AboutSection = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const { theme } = useTheme();
  return (
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
  )
}
