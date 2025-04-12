"use client";

import React from "react";
import { motion } from "framer-motion";

export const FloatingButton = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: string;
}) => {
  const nestedVariantCondition =
    variant === "red"
      ? "bg-pepper-red text-white"
      : variant === "yellow"
      ? "bg-sharp-yellow text-black"
      : variant === "blue"
      ? "bg-blue text-white"
      : variant === "cyan"
      ? "bg-cyan text-black"
      : "bg-transparent";

  return (
    <motion.button
      className={`rounded-full cursor-pointer font-azeret-mono py-1 px-3 3xl:py-2 3xl:px-8 ${nestedVariantCondition}`}
      animate={{
        x: [0, 5, -3, 4, -6, 0],
        y: [0, -4, 3, -2, 5, 0],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      {children}
    </motion.button>
  );
};
