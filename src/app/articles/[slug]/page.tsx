"use client";

import { Navbar } from "@/src/components/Navbar";
import { notFound, useParams } from "next/navigation";
import React from "react";
import articlesData from "@/src/projectData/articlesData.json";
import Image from "next/image";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import ShareButton from "@/src/components/buttons/ShareButton";
import { TagButton } from "@/src/components/buttons/TagButton";

const ArticleSinglePage = () => {
  const params = useParams();
  const slug = params?.slug;
  const selectedArticle = articlesData.find((p) => p.slug === slug);

  if (!selectedArticle) return notFound();
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center py-16 lg:py-28 px-8 lg:px-14 3xl:px-28">
        <div className="flex flex-col  max-w-[1350px] py-16 lg:py-28 ">
          <h2 className=" text-4xl lg:text-5xl lg:text-justify font-azeret-mono z-10">
            {selectedArticle?.title}
          </h2>
          <div className="mt-14 flex flex-col gap-10 text-justify">
            <div className="flex flex-col gap-5">
              <p className="font-azeret-mono">
                Infarena is a Canadian-based platform designed to facilitate
                seamless interactions among users. It serves as a hub for
                trading goods, sharing reviews, participating in discussions,
                and listing small businesses for free. Additionally, the
                platform supports job postings and property reviews, empowering
                users to make informed decisions.
              </p>
              <p className="font-azeret-mono">
                The primary challenge was to develop a user-friendly platform
                that could handle multiple functionalities—such as trading,
                reviewing, and business listings—while maintaining an engaging
                and intuitive interface. The goal was to ensure smooth
                interactions for users posting jobs, reviewing properties, and
                contributing to discussions, all within a single, cohesive
                platform.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-alro-reg text-3xl font-bold">Header 1</h2>
              <div className="flex flex-col gap-5">
                <p className="font-azeret-mono">
                  Infarena is a Canadian-based platform designed to facilitate
                  seamless interactions among users. It serves as a hub for
                  trading goods, sharing reviews, participating in discussions,
                  and listing small businesses for free. Additionally, the
                  platform supports job postings and property reviews,
                  empowering users to make informed decisions.
                </p>
                <p className="font-azeret-mono">
                  The primary challenge was to develop a user-friendly platform
                  that could handle multiple functionalities—such as trading,
                  reviewing, and business listings—while maintaining an engaging
                  and intuitive interface. The goal was to ensure smooth
                  interactions for users posting jobs, reviewing properties, and
                  contributing to discussions, all within a single, cohesive
                  platform.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-alro-reg text-3xl font-bold">Header 2</h2>
              <div className="flex flex-col gap-5">
                <p className="font-azeret-mono">
                  Infarena is a Canadian-based platform designed to facilitate
                  seamless interactions among users. It serves as a hub for
                  trading goods, sharing reviews, participating in discussions,
                  and listing small businesses for free. Additionally, the
                  platform supports job postings and property reviews,
                  empowering users to make informed decisions.
                </p>
                <p className="font-azeret-mono">
                  The primary challenge was to develop a user-friendly platform
                  that could handle multiple functionalities—such as trading,
                  reviewing, and business listings—while maintaining an engaging
                  and intuitive interface. The goal was to ensure smooth
                  interactions for users posting jobs, reviewing properties, and
                  contributing to discussions, all within a single, cohesive
                  platform.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full mt-14">
            <Image
              src={selectedArticle.gallery[0]}
              quality={90}
              width={800}
              height={300}
              className="w-full object-contain h-auto"
              alt="article image"
            />
          </div>
          <div className="mt-28 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center">
            <div>
              <p className="font-azeret-mono text-lg">
                {" "}
                <span className="font-bold font-alro-reg">Author:</span>{" "}
                {selectedArticle?.author}{" "}
              </p>
              <p className="font-azeret-mono text-lg">
                <span className="font-bold font-alro-reg">Date:</span>{" "}
                {selectedArticle?.date}{" "}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {selectedArticle.tags.map((tag, index) => (
                <TagButton text={tag} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8 lg:px-14 3xl:px-28 py-16 lg:py-28 flex flex-col gap-36 lg:gap-56">
        <Contact />
      </div>
      <ShareButton title={selectedArticle?.title} />

      <Footer />
    </div>
  );
};

export default ArticleSinglePage;
