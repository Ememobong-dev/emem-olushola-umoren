"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import brandLogo from "@/public/images/colouredLogo.png";
import arrowIcon from "@/public/icons/arrow-line.svg";
import Link from "next/link";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { Switch } from "antd";
import { useTheme } from "@/src/context/ThemeContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showNavLinks, setShowNavLinks] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (section?: string) => {
    if (section) setActiveSection(section);
    closeMenu();
  };

  const getTextColorClass = (isActive: boolean) => {
    if (theme === "dark") {
      return isActive ? "text-white" : "text-white/50";
    }

    return isActive ? "text-black" : "text-black/50";
  };

  const isHomePage = pathname === "/";

  const isActive = (value: string) => {
    if (value === "home") {
      return isHomePage && activeSection === "home";
    }

    if (value === "about" || value === "skills" || value === "contact") {
      return isHomePage && activeSection === value;
    }

    if (value === "portfolio") {
      return pathname.startsWith("/portfolio");
    }

    if (value === "articles") {
      return pathname.startsWith("/articles");
    }

    return false;
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Tracks active section on the homepage.
   * Make sure your sections have:
   * id="about"
   * id="skills"
   * id="contact"
   */
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "about", "skills", "contact"];

    const handleSectionActiveState = () => {
      const scrollY = window.scrollY;

      if (scrollY < 300) {
        setActiveSection("home");
        return;
      }

      let currentSection = "home";

      sections.forEach((section) => {
        if (section === "home") return;

        const element = document.getElementById(section);

        if (element) {
          const sectionTop = element.offsetTop - 140;

          if (scrollY >= sectionTop) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleSectionActiveState();

    window.addEventListener("scroll", handleSectionActiveState);
    return () => window.removeEventListener("scroll", handleSectionActiveState);
  }, [pathname]);

  return (
    <div className="fixed top-0 z-50 w-full px-8 lg:px-14 py-8 3xl:px-28 3xl:py-10">
      <div className="flex justify-between items-center w-full">
        {/* MOBILE */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <Link href="/" onClick={() => handleNavClick("home")}>
            <Image width={48} height={48} src={brandLogo} alt="brand-logo" />
          </Link>

          <Switch
            checked={theme === "light"}
            onChange={toggleTheme}
            checkedChildren="🌞"
            unCheckedChildren="🌙"
            className={`nav-switch ${
              showNavLinks
                ? "opacity-100 translate-y-0 rounded-full z-[1000px]"
                : "opacity-0 -translate-y-4 pointer-events-none"
            } ${theme === "light" ? "bg-gray-400" : "bg-gray-600"}`}
          />

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`lg:hidden cursor-pointer text-2xl ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div
          className={`lg:flex gap-14 hidden 3xl:gap-16 items-center transition-all duration-300 ease-in-out ${
            showNavLinks
              ? "opacity-100 translate-y-0 rounded-full z-[1000px]"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <Link href="/" onClick={() => handleNavClick("home")}>
            <Image width={52} height={52} src={brandLogo} alt="brand-logo" />
          </Link>

          <div className="flex gap-8 3xl:gap-14 items-center font-alro-reg">
            <Link href="/" className="z-[1000px]" onClick={() => handleNavClick("home")}>
              <p className={getTextColorClass(isActive("home"))}>home</p>
            </Link>

            <Link href="/#about" className="cursor-pointer z-[1000px]" onClick={() => handleNavClick("about")}>
              <p className={getTextColorClass(isActive("about"))}>about</p>
            </Link>

            <Link href="/#skills" className="cursor-pointer z-[1000px]" onClick={() => handleNavClick("skills")}>
              <p className={getTextColorClass(isActive("skills"))}>skills</p>
            </Link>

            <Link href="/portfolio" onClick={closeMenu}>
              <p className={getTextColorClass(isActive("portfolio"))}>portfolio</p>
            </Link>

            <Link href="/articles" className="z-[1000px]" onClick={closeMenu}>
              <p className={getTextColorClass(isActive("articles"))}>articles</p>
            </Link>
          </div>
        </div>

        {/* TALK TO ME BUTTON && TOGGLE */}
        <div className="items-center gap-6 lg:flex hidden">
          <Switch
            checked={theme === "light"}
            onChange={toggleTheme}
            checkedChildren="🌞"
            unCheckedChildren="🌙"
            className={`nav-switch ${
              showNavLinks
                ? "opacity-100 translate-y-0 rounded-full z-[1000px]"
                : "opacity-0 -translate-y-4 pointer-events-none"
            } ${
              isAtTop
                ? "relative hidden lg:flex"
                : "fixed right-42 z-50 lg:flex hidden"
            } ${theme === "light" ? "bg-gray-400" : "bg-gray-600"}`}
          />

          <div
            className={`${
              isAtTop
                ? "relative lg:flex hidden"
                : "fixed right-14 top-6 z-50 lg:flex hidden px-4 py-2 rounded-full backdrop-blur-md border transition-colors"
            } items-center gap-2`}
          >
            <Link
              href="/#contact"
              onClick={() => handleNavClick("contact")}
              className={`font-alro-reg ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
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

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div
          className={`lg:hidden mt-5 px-4 py-6 rounded-xl backdrop-blur-md border ${
            theme === "dark"
              ? "bg-white/5 border-white/10 text-white"
              : "bg-black/5 border-black/10 text-black"
          } font-alro-reg space-y-4`}
        >
          <Link href="/" onClick={() => handleNavClick("home")}>
            <p className={getTextColorClass(isActive("home"))}>home</p>
          </Link>

          <Link href="/#about" onClick={() => handleNavClick("about")}>
            <p className={getTextColorClass(isActive("about"))}>about</p>
          </Link>

          <Link href="/#skills" onClick={() => handleNavClick("skills")}>
            <p className={getTextColorClass(isActive("skills"))}>skills</p>
          </Link>

          <Link href="/portfolio" onClick={closeMenu}>
            <p className={getTextColorClass(isActive("portfolio"))}>portfolio</p>
          </Link>

          <Link href="/articles" onClick={closeMenu}>
            <p className={getTextColorClass(isActive("articles"))}>articles</p>
          </Link>

          <div
            className={`flex gap-3 pt-4 border-t items-center ${
              theme === "dark" ? "border-white/10" : "border-black/10"
            }`}
          >
            <Link
              href="/#contact"
              onClick={() => handleNavClick("contact")}
              className={`cursor-pointer ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <p className={getTextColorClass(isActive("contact"))}>
                talk to me
              </p>
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