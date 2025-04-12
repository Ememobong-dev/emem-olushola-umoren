"use client";

import { Progress } from "antd";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const SkillProgress = ({
  skill,
  percent,
}: {
  skill: string;
  percent: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [currentPercent, setCurrentPercent] = useState(0);

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
          strokeColor="#0DF0D6"
          trailColor="#505A5B"
          showInfo={false}
          strokeWidth={10}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-xs text-center font-mono px-8">
        {skill}
      </div>
    </div>
  );
};
