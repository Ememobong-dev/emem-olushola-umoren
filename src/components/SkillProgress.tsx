"use client";

import { Progress } from "antd";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/ThemeContext";

export const SkillProgress = ({
  skill,
  percent,
}: {
  skill: string;
  percent: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [currentPercent, setCurrentPercent] = useState(0);
    const { theme } = useTheme();
  

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        if (start > percent) {
          clearInterval(interval);
        } else {
          setCurrentPercent(start);
        }
      }, 10); // speed of animation
    }
  }, [inView, percent]);

  return (
    <div className="relative" ref={ref}>
      <div className="transform rotate-180">
        <Progress
          type="circle"
          percent={currentPercent}
          strokeColor={theme === "dark" ? "#0DF0D6" : "#0DF0D688"}
          trailColor="#505A5B"
          showInfo={false}
          strokeWidth={10}
        />
      </div>
      <div className={` ${theme === "light" ? "!text-black" : "text-white"} absolute inset-0 flex items-center justify-center text-xs text-center font-mono px-8`}>
        {skill}
      </div>
    </div>
  );
};
