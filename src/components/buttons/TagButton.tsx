"use client";

import React, { useState } from "react";


export const TagButton = ({ text }: { text: string }) => {
  const [active, setActive] = useState(false);

  const baseClasses =
    "rounded-full text-sm text-white border lg:border-0 opacity-25 font-azeret-mono cursor-pointer font-light  flex justify-center items-center bg-dark py-2 px-3 3xl:py-2 3xl:px-8 hover:text-white hover:opacity-100";

  return <button onClick={() => setActive(!active)} className={`${baseClasses} ${active ? "border border-white text-white opacity-100" : ""}`}>{text}</button>;
};
