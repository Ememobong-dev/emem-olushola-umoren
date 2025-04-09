import Image from "next/image";
import React from "react";
import brandLogo from "@/public/icons/brand-logo.svg";
import arrowIcon from "@/public/icons/arrow-line.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex fixed top-0 justify-center items-center px-14 py-8  3xl:px-28 3xl:py-10 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-14 3xl:gap-16 items-center">
          <span>
            <Image src={brandLogo} alt="brand-logo" />
          </span>
          <div className="flex gap-8 3xl:gap-10 items-center">
            <Link href="/home">
              <p>Home</p>
            </Link>
            <Link href="/about">
              <p>About</p>
            </Link>
            <Link href="/skils">
              <p>Skills</p>
            </Link>
            <Link href="/portfolio">
              <p>Portfolio</p>
            </Link>
            <Link href="/articles">
              <p>Articles</p>
            </Link>
          </div>
        </div>
        <div className="flex gap-3">
            <p>Talk to me </p>
            <Image src={arrowIcon} alt="arrow" />
            
            
        </div>
      </div>
    </div>
  );
};
