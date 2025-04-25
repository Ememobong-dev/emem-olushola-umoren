import React from "react";
import footer_logo from "../../public/icons/footer-logo.svg";
import Image from "next/image";
import {
  GithubFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="px-14 z-[1] 3xl:px-28 py-10  text-black bg-white flex flex-col gap-5 lg:flex-row justify-between items-center">
      <div className="flex flex-wrap justify-center lg:justify-normal font-alro-reg items-center gap-5">
        <p className="">Terms</p>
        <p>Privacy Policy</p>
        <Link href="/#skills">
          <p>Skills</p>
        </Link>
        <div className="flex gap-5 items-center justify-center p-4">
          <Link href="https://www.linkedin.com/in/ememobong-umoren-olushola/">
            <LinkedinFilled />
          </Link>
          <Link href="https://github.com/Ememobong-dev">
            <GithubFilled />
          </Link>
          <Link href="https://x.com/FTechbro">
            <TwitterCircleFilled />
          </Link>
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
