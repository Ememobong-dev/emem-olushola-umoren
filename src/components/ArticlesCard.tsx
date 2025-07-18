"use client";

import React from "react";
import { Button } from "./buttons/Button";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

interface ArticleCardProps {
  articleTitle: string;
  articleDescription?: string;
  articleTagOne?: string;
  articleTagTwo?: string;
  articleDate: string;
  imageSrc?: string;
  articleSlug?: string;
}

export const ArticlesCard: React.FC<ArticleCardProps> = ({
  articleTitle,
  articleDescription = "",
  articleTagOne = "",
  articleTagTwo = "",
  articleDate,
  imageSrc,
  articleSlug,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full h-full border ${theme === "light"
        ? "border-black/50 bg-white/25 text-black"
        : "border-white/50 bg-[#0A0A0C] text-white"
        } p-5 rounded-lg flex flex-col gap-4 3xl:gap-8 justify-between`}
    >
      {imageSrc && (
  
        <div className="relative w-full h-[223px]">
          <Image
            src={imageSrc}
            alt="article_img"
            className="object-cover rounded-lg"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={100}
          />
        </div>
      )}

      <Link
        href={`/articles/${articleSlug}`}
        className={`underline ${theme === "light" ? "hover:!text-blue-800" : "hover:!text-cyan"}  cursor-pointer text-white font-azeret-mono font-semibold text-lg`}
      >
        <h3>{articleTitle}</h3>
      </Link>

      <span>
        <p className="font-azeret-mono">
          {articleDescription.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </span>

      <div className="flex items-center flex-wrap gap-4 justify-between">
        <div className="flex gap-3 flex-wrap">
          {articleTagOne && <Button text={articleTagOne} variant="bordered" />}
          {articleTagTwo && <Button text={articleTagTwo} variant="bordered" />}
        </div>
        <div>
          <p className="articleDate font-azeret-mono font-semibold text-base">
            {articleDate}
          </p>
        </div>
      </div>
    </div>
  );
};
