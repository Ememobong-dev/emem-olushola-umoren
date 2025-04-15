import React from "react";
import linkedin from "@/public/icons/black-linkedin.svg";
import github from "@/public/icons/black-github.svg";
import twitter from "@/public/icons/black-twitter.svg";
import footer_logo from "../../public/icons/footer-logo.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="px-14 3xl:px-28 py-10  text-black bg-white flex flex-col gap-5 lg:flex-row justify-between items-center">
      <div className="flex flex-wrap justify-center lg:justify-normal font-alro-reg items-center gap-5">
        <p className="">Terms</p>
        <p>Privacy Policy</p>
        <p>Skills</p>
        <div className="flex gap-5 items-center justify-center p-4">
          <span>
            <Image src={linkedin} alt="social_links" />
          </span>
          <span>
            <Image src={github} alt="social_links" />
          </span>
          <span>
            <Image src={twitter} alt="social_links" />
          </span>
        </div>
      </div>
      <div>
        <span>
          <Image src={footer_logo} alt="logo" />
        </span>
      </div>
      <div>
        <p className="font-azeret-mono text-sm text-center lg:text-left">
          © 2025 Ememobong. All rights Reserved
        </p>
      </div>
    </div>
  );
};
