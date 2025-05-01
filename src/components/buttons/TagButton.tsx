"use client";

import React from "react";

export const TagButton = ({ text, isActive, onClick }: { text: string; isActive: boolean; onClick: () => void }) => {

  const baseClasses =
    "rounded-full text-[12px] text-white border lg:border-0 opacity-25 font-azeret-mono cursor-pointer font-light  flex justify-center items-center bg-dark py-2 px-3 3xl:py-2 3xl:px-8 hover:text-white hover:opacity-100";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${
        isActive ? "border border-white text-white opacity-100" : ""
      }`}
    >
      <p>{text} </p>
    </button>
  );
};
