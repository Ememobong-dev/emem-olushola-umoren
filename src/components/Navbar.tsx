"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import brandLogo from "@/public/icons/brand-logo.svg";
import arrowIcon from "@/public/icons/arrow-line.svg";
import Link from "next/link";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showNavLinks, setShowNavLinks] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsAtTop(currentY < 100);
      const goingDown = currentY > lastScrollY.current;
      setShowNavLinks(!goingDown || currentY < 100);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full px-8 lg:px-14 py-8 3xl:px-28 3xl:py-10">
      <div className="flex justify-between items-center w-full">
        {/* MOBILE */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <Image src={brandLogo} alt="brand-logo" />
          <button
            onClick={toggleDropdown}
            className="lg:hidden text-white cursor-pointer text-2xl"
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div
          className={`lg:flex gap-14  hidden 3xl:gap-16 items-center transition-all duration-300 ease-in-out ${
            showNavLinks
              ? "opacity-100 translate-y-0  rounded-full z-[1000px]"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <span>
            <Image src={brandLogo} alt="brand-logo" />
          </span>
          <div className="flex gap-8  3xl:gap-14 items-center font-alro-reg">
            <Link href="/" className="z-[1000px]">
              <p className={pathname === "/" ? "text-white" : "text-white/50"}>
                home
              </p>
            </Link>
            <Link
              className={`cursor-pointer z-[1000px] !text-white/50`}
              href="/#about"
            >
              <p onClick={() => setActiveSection("about")}>about</p>
            </Link>
            <Link
              className={`cursor-pointer z-[1000px] !text-white/50`}
              href="/#skills"
            >
              <p onClick={() => setActiveSection("skills")}>skills</p>
            </Link>
            <Link href="/portfolio">
              <p
                className={
                  pathname === "/portfolio" ? "text-white" : "text-white/50"
                }
              >
                portfolio
              </p>
            </Link>
            <Link href="/articles" className="z-[1000px]">
              <p
                className={
                  pathname === "/articles" ? "text-white" : "text-white/50"
                }
              >
                articles
              </p>
            </Link>
          </div>
        </div>

        {/* TALK TO ME BUTTON */}
        <div
          className={`${
            isAtTop
              ? "relative lg:flex hidden"
              : "fixed right-14 top-6 z-50 lg:flex hidden px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
          } items-center gap-2 transition-all `}
        >
          <Link className="font-alro-reg text-white" href="#contact">
            talk to me
          </Link>
          <Image src={arrowIcon} alt="arrow" />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4 px-4 py-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white font-alro-reg space-y-4">
          <Link href="/">
            <p
              className={
                pathname === "/" || activeSection === "home"
                  ? "text-white"
                  : "text-white/50"
              }
            >
              home
            </p>
          </Link>
          <Link
            className={`cursor-pointer z-[1000px] !text-white/50`}
            href="/#about"
          >
            <p onClick={() => setActiveSection("about")}>about</p>
          </Link>
          <Link
            className={`cursor-pointer z-[1000px] !text-white/50`}
            href="/#skills"
          >
            <p onClick={() => setActiveSection("skills")}>skills</p>
          </Link>
          <Link href="/portfolio">
            <p
              className={
                pathname === "/portfolio" ? "text-white" : "text-white/50"
              }
            >
              portfolio
            </p>
          </Link>
          <Link href="/articles">
            <p
              className={
                pathname === "/articles" ? "text-white" : "text-white/50"
              }
            >
              articles
            </p>
          </Link>

          <div className="flex gap-3 pt-4 border-t border-white/10 items-center">
            <Link className="cursor-pointer text-white" href="#contact">
              <p>talk to me </p>
            </Link>
            <Image src={arrowIcon} alt="arrow" />
          </div>
        </div>
      )}
    </div>
  );
};
