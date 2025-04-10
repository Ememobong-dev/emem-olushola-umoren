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
          <div className="flex gap-8 3xl:gap-14 items-center font-alro-reg">
            <Link className={`text-white`} href="/home">
              <p>home</p>
            </Link>
            <Link className={`text-white/50`} href="/about">
              <p>about</p>
            </Link>
            <Link className={`text-white/50`} href="/skils">
              <p>skills</p>
            </Link>
            <Link className={`text-white/50`} href="/portfolio">
              <p>portfolio</p>
            </Link>
            <Link className={`text-white/50`} href="/articles">
              <p>articles</p>
            </Link>
          </div>
        </div>
        <div className="flex gap-3 font-alro-reg">
            <p>talk to me </p>
            <Image src={arrowIcon} alt="arrow" />
            
            
        </div>
      </div>
    </div>
  );
};
