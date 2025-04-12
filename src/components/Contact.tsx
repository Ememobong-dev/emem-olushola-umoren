import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import linkedin from "@/public/icons/linkedin-icon.svg";
import github from "@/public/icons/github-icon.svg";
import twitter from "@/public/icons/twitter.svg";
import { Button } from "./buttons/Button";
import { TagButton } from "./buttons/TagButton";

export const Contact = () => {
  return (
    <div>
      <Row>
        <Col lg={8}>
          <div>
            <h2 className="font-azeret-mono text-2xl">Contacts</h2>
            <div className="flex flex-col gap-4 mt-5">
              <p className="font-azeret-mono text-sm font-light underline">
                ememobongumoren2@gmail.com
              </p>
              <p className="font-azeret-mono text-sm font-light">
                +234 810 469 8415
              </p>
            </div>
            <div className="mt-20">
              <p className="text-base font-azeret-mono">Follow</p>
              <div className="flex gap-3 items-center mt-8">
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
            <div className="mt-14">
              <Button variant="bordered" text="Book a Session" />
            </div>
          </div>
        </Col>
        <Col lg={16}>
          <div>
            <h2 className="font-alro-reg text-3xl">
              A Project with Emem Olushola?
            </h2>
            <div className="flex flex-col gap-8 mt-5">
              <div>
                <h3 className="font-azeret-mono font-[12px]">Services</h3>
                <div className="flex flex-wrap gap-5 mt-3">
                  <TagButton text="API Integration" />
                  <TagButton text="Web Development(UI/UX Implementation" />
                  <TagButton text="Data Dashboards" />
                  <TagButton text="Frontend Performance Optimization" />
                  <TagButton text="Data Analysis" />
                  <TagButton text="Version Control & Collaboration" />
                </div>
              </div>
              <div>
                <h3 className="font-azeret-mono font-[12px]">Budget</h3>
                <div className="flex flex-wrap gap-5 mt-3">
                  <TagButton text="100k-250k" />
                  <TagButton text="250k-1m" />
                  <TagButton text="1m+" />
                </div>
              </div>
            </div>
            <div>
              <Row>
                <Col lg={12}>
                  <div>
                    <label htmlFor="name" className="text-xl">
                      Your Name
                    </label>
                    <input type="text" id="name" className="border w-full" />
                  </div>
                </Col>
                <Col lg={12}>
                  <div>
                    <label htmlFor="email" className="text-xl">
                      Your Email
                    </label>
                    <input type="text" id="email" className="border w-full" />
                  </div>
                </Col>
                <Col lg={24}>
                  <div>
                    <label htmlFor="project" className="text-xl">
                      Project Details (Optional)
                    </label>
                    <input type="text" id="project" className="border w-full" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
