"use client";

import Image from "next/image";
import React, { useState } from "react";
import brandLogo from "@/public/icons/brand-logo.svg";
import arrowIcon from "@/public/icons/arrow-line.svg";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" fixed top-0 z-50 justify-center items-center px-8 lg:px-14 py-8  3xl:px-28 3xl:py-10 w-full">
      <div className="flex justify-between items-center w-full">
        {/* MOBILE */}
        <div className="lg:hidden flex items-center justify-between w-full lg:w-auto">
          <Image src={brandLogo} alt="brand-logo" />
          {/* Hamburger menu (mobile only) */}
          <button
            onClick={toggleDropdown}
            className="lg:hidden text-white text-2xl"
          >
            <MenuOutlined />
          </button>
        </div>

        {/* DESKTOP */}
        <div className="lg:flex gap-14 hidden 3xl:gap-16 items-center">
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
        <div className="gap-3 lg:flex hidden font-alro-reg">
          <p>talk to me </p>
          <Image src={arrowIcon} alt="arrow" />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4 px-4 py-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white font-alro-reg space-y-4">
          <Link href="/home">
            <p className="hover:text-white/80">home</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-white/80">about</p>
          </Link>
          <Link href="/skils">
            <p className="hover:text-white/80">skills</p>
          </Link>
          <Link href="/portfolio">
            <p className="hover:text-white/80">portfolio</p>
          </Link>
          <Link href="/articles">
            <p className="hover:text-white/80">articles</p>
          </Link>
          <div className="flex gap-3 pt-4 border-t border-white/10 items-center">
            <p>talk to me</p>
            <Image src={arrowIcon} alt="arrow" />
          </div>
        </div>
      )}
    </div>
  );
};
