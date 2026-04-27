"use client";

import { SkillProgress } from "@/src/components/SkillProgress";
import AnimatedSection from "@/src/components/AnimatedSection";


export const SkillSection = () => {

    const frontendSkills = [
      { skill: "React", percent: 90 },
      { skill: "Next.js", percent: 85 },
      { skill: "Tailwind CSS", percent: 88 },
      { skill: "Typescript", percent: 75 },
      { skill: "CSS", percent: 85 },
      { skill: "JavaScript", percent: 88 },
    ];
  return (
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
  )
}
