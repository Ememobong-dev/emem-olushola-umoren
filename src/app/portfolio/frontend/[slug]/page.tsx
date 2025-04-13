"use client";

import { notFound, useParams } from "next/navigation";
import React from "react";
import frontendProjects from "@/src/projectData/frontendData.json";
import { FloatingButton } from "@/src/components/buttons/FloatingButton";
import { Col, Row } from "antd";
import { Navbar } from "@/src/components/Navbar";
import Link from "next/link";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import Image from "next/image";

const FrontendSinglePage = () => {
  const params = useParams();
  const slug = params?.slug;

  console.log("I am slug", slug);

  const project = frontendProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div>
      <Navbar />
      <div className="">
        <div className="h-dvh flex flex-col gap-2 justify-center items-center">
          <h2 className="text-5xl w-full text-white text-center lg:text-[150px] tracking-widest font-azeret-mono">
            {project?.title}
          </h2>
          <h2 className="text-cyan text-3xl  text-center lg:text-5xl font-azeret-mono">
            {project?.location}{" "}
          </h2>
        </div>
        <div className="">
          <div className="absolute hidden lg:flex top-[30%] left-[30%]">
            <FloatingButton variant="cyan">
              <p className="italic">
                Data <span className="font-bold not-italic ">Analyst</span>
              </p>
            </FloatingButton>
          </div>
          <div className="absolute hidden lg:flex bottom-[30%] right-[24%]">
            <FloatingButton variant="yellow">
              <p className="italic">
                Frontend{" "}
                <span className="font-bold not-italic ">Developer</span>
              </p>
            </FloatingButton>
          </div>
          <div className="absolute hidden lg:flex top-[30%] right-[30%]">
            <FloatingButton variant="cyan">
              <p className="italic">
                Data <span className="font-bold not-italic ">Analyst</span>
              </p>
            </FloatingButton>
          </div>
          <div className="absolute hidden lg:flex bottom-[30%] left-[24%]">
            <FloatingButton variant="yellow">
              <p className="italic">
                Frontend{" "}
                <span className="font-bold not-italic ">Developer</span>
              </p>
            </FloatingButton>
          </div>
        </div>
      </div>
      {/* OTHER SECTIONS */}
      <div className="mx-8 lg:px-14 3xl:px-28 py-16 flex flex-col gap-36 lg:gap-56">
        {/* Second Section */}
        <div className="w-full">
          <Row
            gutter={[
              { xs: 8, sm: 16, md: 24, lg: 32 }, // horizontal gutter
              { xs: 32, sm: 32, md: 32, lg: 32 }, // vertical gutter
            ]}
            className="items-strech h-full w-full"
          >
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">Overview</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                    {
                      project.overview
                    }
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">Challenge</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                   {
                    project.challenge
                   }
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">Solution</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                    {
                      project.solution
                    }
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="w-full h-full">
                <h3 className="font-alro-reg text-2xl mb-8">Outcome</h3>
                <div>
                  <p className="text-justify font-azeret-mono font-light">
                   {project.outcome}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mt-28">
            <h3 className="font-alro-reg text-2xl">Technologies Used:</h3>
            <span className="flex gap-2 mt-5 mb-8">
              {project.technologies.map((item, index) => (
                <p
                  key={index}
                  className="font-azeret-mono font-light text-[12px]"
                >
                  {" "}
                  {item},{" "}
                </p>
              ))}
            </span>
            <h3 className="font-alro-reg text-xl ">
              Live Demo:{" "}
              <Link
                className="font-azeret-mono italic text-base text-deep-blue underline"
                href={project.liveDemo}
              >
                {" "}
                {project.title} Website
              </Link>{" "}
            </h3>
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="font-alro-reg text-3xl text-white font-bold mb-4">
            Gallery
          </h3>
          <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {project.gallery.map((item, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 rounded-2xl bg-gray-300 h-[300px] 
                 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] 
                 overflow-hidden"
              >
                <Image
                  src={item}
                  width={800}
                  height={300}
                  alt={`project image ${index + 1}`}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default FrontendSinglePage;
