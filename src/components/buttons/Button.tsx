"use client";

import { useTheme } from "@/src/context/ThemeContext";
import Link from "next/link";
import React from "react";

type Variant = "bordered" | "fill" | "coloured";

interface ButtonProps {
  text: string;
  variant: Variant;
  link?: string;
  target?: boolean;
  download?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, variant, link, target, download, onClick }) => {
  const { theme } = useTheme();

  const variantClasses =
    variant === "bordered"
      ? "border border-white bg-transparent text-white" : 
      variant === "coloured" ? "inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-600 dark:from-cyan-500 dark:to-purple-600 light:from-cyan-600 light:to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-cyan-500/50 light:hover:shadow-cyan-600/50 transition-all duration-300 transform hover:scale-105"
      : `${theme === "light" ? "!bg-black !text-white hover:!text-white" : "!bg-white text-black"} hover:border hover:bg-transparent hover:border-white `;

  return (
    <button
      onClick={onClick}
      className={`${theme === "light" ? "!border-black !text-black" : "!border-white"} text-xs md:text-sm flex flex-wrap cursor-pointer items-center justify-center rounded-full py-2 px-8  ${variantClasses} `}
    >
      {link ? <Link download={download} 
      className={`
        hover:font-semibold 
        ${theme === "dark" ? `${variant === "bordered" ? "hover:!text-cyan" : "hover:!text-blue-800"}`
            : `${variant === "bordered" ? "hover:!text-blue-800" : "hover:!text-cyan"}`}
        }
      `}


        target={target ? "_blank" : ""} href={link}> {text} </Link> : <p>{text}</p>}
    </button>
  );
};
