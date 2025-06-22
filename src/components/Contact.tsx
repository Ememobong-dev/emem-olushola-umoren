"use client";


import { Col, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import linkedin from "@/public/icons/linkedin-icon.svg";
import github from "@/public/icons/github-icon.svg";
import twitter from "@/public/icons/twitter.svg";
import { Button } from "./buttons/Button";
import { TagButton } from "./buttons/TagButton";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

export const Contact = () => {
    const { theme } = useTheme();
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleSend = () => {
    const { name, email, project } = form;

    const newErrors = { name: "", email: "" };

    if (!name.trim()) newErrors.name = "Name is Required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Valid email is required";

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      const subject = encodeURIComponent("NEW PROJECT INQUIRY(FROM PORTFOLIO)");

      const body = [
        `Name: ${name}`,
        "",
        `Email: ${email}`,
        "",
        `Services: ${selectedServices.join(", ")}`,
        "",
        `Budget: ${selectedBudget}`,
        "",
        "Project Details:",
        project,
      ]
        .map(encodeURIComponent)
        .join("%0D%0A");

      window.location.href = `mailto:ememobongumoren2@gmail.com?subject=${subject}&body=${body}`;

      // Clear form after sending
      setForm({ name: "", email: "", project: "" });
      setSelectedBudget(null);
      setSelectedServices([]);
      setErrors({ name: "", email: "" });
    }
  };

  const serviceOptions = [
    "API Integration",
    "Web Development(UI/UX Implementation)",
    "Frontend Performance Optimization",
    "Data Dashboards",
    "Data Analysis",
    "Version Control & Collaboration",
  ];

  const toggleService = (text: string) => {
    setSelectedServices((prev) =>
      prev.includes(text)
        ? prev.filter((item) => item !== text)
        : [...prev, text]
    );
  };

  const budgetOptions = ["100k-250k", "250k-1m", "1m+"];

  return (
    <div id="contact">
      <Row gutter={[0, 56]}>
        <Col xs={24} lg={8}>
          <div>
            <h2 className="font-azeret-mono text-2xl">Contacts</h2>
            <div className="flex flex-col gap-4 mt-5">
              <p className="font-azeret-mono text-sm font-light text-white hover:text-white underline ">
                <a
                  className={`font-azeret-mono text-sm font-light ${theme === "dark" ? "!text-white hover:text-white" : "!text-black hover:text-black"} `}
                  href="mailto:ememobongumoren2@gmail.com"
                >
                  {" "}
                  ememobongumoren2@gmail.com
                </a>
              </p>
              <p className="font-azeret-mono text-sm font-light">
                <a
                  href="tel:+234 810 469 8415"
                  className={theme === "dark" ? "!text-white hover:text-white" : "!text-black hover:text-black"}
                >
                  +234 810 469 8415
                </a>
              </p>
            </div>
            <div className="mt-14">
              <p className="text-base font-azeret-mono">Follow</p>
              <div className="flex gap-3 items-start mt-8">
                <Link href="https://www.linkedin.com/in/ememobong-umoren-olushola/">
                  <Image
                    src={linkedin}
                    className={`cursor-pointer ${theme === "light" ? "filter invert" : ""}`}
                    alt="social_links"
                  />
                </Link>
                <Link href="https://github.com/Ememobong-dev">
                  <Image
                    src={github}
                    className={`cursor-pointer ${theme === "light" ? "filter invert" : ""}`}
                    alt="social_links"
                  />
                </Link>
                <Link href="https://x.com/FTechbro">
                  <Image
                    src={twitter}
                    className={`cursor-pointer ${theme === "light" ? "filter invert" : ""}`}
                    alt="social_links"
                  />
                </Link>
              </div>
            </div>
            <div className="mt-14 ">
              <Button
                variant="bordered"
                target
                link="https://calendly.com/ememobongumoren2/30min"
                text="Book a Session"
              />
            </div>
            <div className="mt-6">
              <Button
                link="/Ememobong-Umoren-Resume.pdf"
                target
                variant="fill"
                text="Download Resume"
                download
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
                  {serviceOptions.map((text) => (
                    <TagButton
                      key={text}
                      text={text}
                      isActive={selectedServices.includes(text)}
                      onClick={() => toggleService(text)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-azeret-mono">Budget</h3>
                <div className="flex flex-wrap gap-5 mt-3">
                  {budgetOptions.map((text) => (
                    <TagButton
                      key={text}
                      text={text}
                      isActive={selectedBudget === text}
                      onClick={() =>
                        setSelectedBudget((prev) =>
                          prev === text ? null : text
                        )
                      }
                    />
                  ))}
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
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={` ${theme === "dark" ? "border-white/60" : "border-black/60"} border-b font-azeret-mono py-3 focus:outline-0  w-full`}
                      />
                      {errors.name && (
                        <p className="text-pepper-red text-sm">{errors.name}</p>
                      )}
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
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={` ${theme === "dark" ? "border-white/60" : "border-black/60"} border-b font-azeret-mono py-3 focus:outline-0  w-full`}
                      />
                      {errors.email && (
                        <p className="text-pepper-red text-sm">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </Col>
                  <Col lg={24}>
                    <div>
                      <label htmlFor="project" className="font-azeret-mono">
                        Project Details (Optional)
                      </label>
                      <textarea
                        id="project"
                        value={form.project}
                        onChange={(e) =>
                          setForm({ ...form, project: e.target.value })
                        }
                        className={` ${theme === "dark" ? "border-white/60" : "border-black/60"} border-b font-azeret-mono py-3 focus:outline-0  w-full`}
                      />
                    </div>
                  </Col>
                </Row>
                <div className="mt-8">
                  <Button
                    variant="bordered"
                    text="Send Message"
                    onClick={handleSend}
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
