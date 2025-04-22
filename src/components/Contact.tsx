import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import linkedin from "@/public/icons/linkedin-icon.svg";
import github from "@/public/icons/github-icon.svg";
import twitter from "@/public/icons/twitter.svg";
import { Button } from "./buttons/Button";
import { TagButton } from "./buttons/TagButton";
import Link from "next/link";

export const Contact = () => {
  return (
    <div id="contact">
      <Row gutter={[0, 56]}>
        <Col xs={24} lg={8}>
          <div>
            <h2 className="font-azeret-mono text-2xl">Contacts</h2>
            <div className="flex flex-col gap-4 mt-5">
              <p className="font-azeret-mono text-sm font-light text-white hover:text-white underline">
                <a  className="font-azeret-mono text-sm font-light !text-white hover:text-white" href="mailto:ememobongumoren2@gmail.com">
                  {" "}
                  ememobongumoren2@gmail.com
                </a>
              </p>
              <p className="font-azeret-mono text-sm font-light">
                <a href="tel:+234 810 469 8415" className="!text-white hover:text-white">+234 810 469 8415</a>
              </p>
            </div>
            <div className="mt-14">
              <p className="text-base font-azeret-mono">Follow</p>
              <div className="flex gap-3 items-start mt-8">
                <Link href="https://www.linkedin.com/in/ememobong-umoren-olushola/">
                  <Image
                    src={linkedin}
                    className="cursor-pointer"
                    alt="social_links"
                  />
                </Link>
                <Link href="https://github.com/Ememobong-dev">
                  <Image
                    src={github}
                    className="cursor-pointer"
                    alt="social_links"
                  />
                </Link>
                <Link href="https://x.com/FTechbro">
                  <Image
                    src={twitter}
                    className="cursor-pointer"
                    alt="social_links"
                  />
                </Link>
              </div>
            </div>
            <div className="mt-14">
              <Button
                variant="bordered"
                target
                link="https://calendly.com/ememobongumoren2/30min"
                text="Book a Session"
              />
            </div>
          </div>
        </Col>
        <Col xs={24} lg={16}>
          <div>
            <h2 className="font-alro-reg font-bold text-3xl">
              A Project with Emem Olushola?
            </h2>
            <div className="flex flex-col gap-8 mt-5">
              <div>
                <h3 className="font-azeret-mono">Services</h3>
                <div className="flex flex-wrap gap-5 mt-3">
                  <TagButton text="API Integration" />
                  <TagButton text="Web Development(UI/UX Implementation)" />
                  <TagButton text="Frontend Performance Optimization" />
                  <TagButton text="Data Dashboards" />
                  <TagButton text="Data Analysis" />
                  <TagButton text="Version Control & Collaboration" />
                </div>
              </div>
              <div>
                <h3 className="font-azeret-mono">Budget</h3>
                <div className="flex flex-wrap gap-5 mt-3">
                  <TagButton text="100k-250k" />
                  <TagButton text="250k-1m" />
                  <TagButton text="1m+" />
                </div>
              </div>
              <div>
                <Row gutter={[56, 16]}>
                  <Col xs={24} lg={12}>
                    <div>
                      <label htmlFor="name" className="font-azeret-mono ">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="border-b font-azeret-mono py-3 focus:outline-0 border-white/60 w-full"
                      />
                    </div>
                  </Col>
                  <Col xs={24} lg={12}>
                    <div>
                      <label htmlFor="email" className="font-azeret-mono">
                        Your Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        className="border-b font-azeret-mono py-3 focus:outline-0 border-white/60 w-full"
                      />
                    </div>
                  </Col>
                  <Col lg={24}>
                    <div>
                      <label htmlFor="project" className="font-azeret-mono">
                        Project Details (Optional)
                      </label>
                      <textarea
                        id="project"
                        className="border-b font-azeret-mono py-3 focus:outline-0 border-white/60 w-full"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="mt-8">
                  <Button variant="bordered" text="Send Message" />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
