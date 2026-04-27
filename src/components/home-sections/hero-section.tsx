"use client";

import { FloatingButton } from "@/src/components/buttons/FloatingButton";
import { useRef } from "react";
import { TypingText } from "@/src/components/animations/TypingTextAnimation";
import LeftRevealAnimatedText from "@/src/components/animations/LeftRevealAnimation";
import { useTheme } from "@/src/context/ThemeContext";
import { ArrowDownOutlined } from "@ant-design/icons";


export const HeroSection = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const { theme } = useTheme();
  
  
    const scrollDown = () => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
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
  )
}
