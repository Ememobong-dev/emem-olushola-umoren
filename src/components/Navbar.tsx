"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import brandLogo from "@/public/icons/brand-logo.svg";
import brandLogoDark from "@/public/icons/footer-logo.svg";
import arrowIcon from "@/public/icons/arrow-line.svg";
import Link from "next/link";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { Switch } from "antd";
import { useTheme } from "../context/ThemeContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showNavLinks, setShowNavLinks] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to determine text color based on theme and active state
  const getTextColorClass = (isActive: boolean) => {
    if (theme === "dark") {
      return isActive ? "text-white" : "text-white/50";
    } else {
      return isActive ? "text-black" : "text-black/50";
    }
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
          <Link href={"/"}>
            <Image src={brandLogo} alt="brand-logo" />
          </Link>
          <button
            onClick={toggleDropdown}
            className={`lg:hidden cursor-pointer text-2xl ${theme === "dark" ? "text-white" : "text-black"
              }`}
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div
          className={`lg:flex gap-14 hidden 3xl:gap-16 items-center transition-all duration-300 ease-in-out ${showNavLinks
              ? "opacity-100 translate-y-0 rounded-full z-[1000px]"
              : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
        >
          <Link href={"/"}>
            <Image className="w-[20px] h-[18px]" src={theme === "dark" ? brandLogo : brandLogoDark} alt="brand-logo" />
          </Link>
          <div className="flex gap-8 3xl:gap-14 items-center font-alro-reg">
            <Link href="/" className="z-[1000px]">
              <p className={getTextColorClass(pathname === "/")}>home</p>
            </Link>
            <Link className="cursor-pointer z-[1000px]" href="/#about">
              <p
                className={getTextColorClass(activeSection === "about")}
                onClick={() => setActiveSection("about")}
              >
                about
              </p>
            </Link>
            <Link className="cursor-pointer z-[1000px]" href="/#skills">
              <p
                className={getTextColorClass(activeSection === "skills")}
                onClick={() => setActiveSection("skills")}
              >
                skills
              </p>
            </Link>
            <Link href="/portfolio">
              <p className={getTextColorClass(pathname === "/portfolio")}>
                portfolio
              </p>
            </Link>
            <Link href="/articles" className="z-[1000px]">
              <p className={getTextColorClass(pathname === "/articles")}>
                articles
              </p>
            </Link>
          </div>
        </div>

        {/* TALK TO ME BUTTON && Toggle*/}
        <div className="flex items-center gap-6">
          <Switch
            checked={theme === "light"}
            onChange={toggleTheme}
            checkedChildren="🌞"
            unCheckedChildren="🌙"
            className={`nav-switch ${showNavLinks
                ? "opacity-100 translate-y-0 rounded-full z-[1000px]"
                : "opacity-0 -translate-y-4 pointer-events-none"
              } 
              ${isAtTop
                ? "relative hidden lg:flex "
                : "fixed right-42  z-50 lg:flex hidden"
              }
              ${theme === "light" ? "bg-gray-400" : "bg-gray-600"
              }`}
          />

          {/* TALK TO ME BUTTON */}
          <div
            className={`${isAtTop
                ? "relative lg:flex hidden"
                : "fixed right-14 top-6 z-50 lg:flex hidden px-4 py-2 rounded-full backdrop-blur-md border transition-colors"
              } items-center gap-2`}
          >
            <Link
              className={`font-alro-reg ${theme === "dark" ? "text-white" : "text-black"
                }`}
              href="#contact"
            >
              talk to me
            </Link>
            <Image
              src={arrowIcon}
              alt="arrow"
              className={theme === "light" ? "filter invert" : ""}
            />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`lg:hidden mt-5 px-4 py-6 rounded-xl backdrop-blur-md border ${theme === "dark"
              ? "bg-white/5 border-white/10 text-white"
              : "bg-black/5 border-black/10 text-black"
            } font-alro-reg space-y-4`}
        >
          <Link href="/">
            <p className={getTextColorClass(pathname === "/" || activeSection === "home")}>
              home
            </p>
          </Link>
          <Link className="cursor-pointer z-[1000px]" href="/#about">
            <p
              className={getTextColorClass(activeSection === "about")}
              onClick={() => setActiveSection("about")}
            >
              about
            </p>
          </Link>
          <Link className="cursor-pointer z-[1000px]" href="/#skills">
            <p
              className={getTextColorClass(activeSection === "skills")}
              onClick={() => setActiveSection("skills")}
            >
              skills
            </p>
          </Link>
          <Link href="/portfolio">
            <p className={getTextColorClass(pathname === "/portfolio")}>
              portfolio
            </p>
          </Link>
          <Link href="/articles">
            <p className={getTextColorClass(pathname === "/articles")}>
              articles
            </p>
          </Link>

          <div className={`flex gap-3 pt-4 border-t items-center ${theme === "dark" ? "border-white/10" : "border-black/10"
            }`}>
            <Link
              className={`cursor-pointer ${theme === "dark" ? "text-white" : "text-black"
                }`}
              href="#contact"
            >
              <p>talk to me</p>
            </Link>
            <Image
              src={arrowIcon}
              alt="arrow"
              className={theme === "light" ? "filter invert" : ""}
            />
          </div>
        </div>
      )}
    </div>
  );
};