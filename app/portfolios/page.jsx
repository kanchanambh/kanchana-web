import PageWrapper from "@/components/PageWrapper";
import FeaturedProject from "@components/FeaturedProject";
import React from "react";

export const metadata = {
  title: "Portfolio: Graphic Design & Full Stack Development",
  description:
    "Discover the creative world of a versatile Graphic Designer and Full Stack Developer. Browse stunning designs and powerful web solutions for your business.",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "graphic design",
    "full stack development",
    "web design",
    "UI/UX",
    "branding",
    "front-end development",
    "back-end development",
    "responsive design",
    "portfolio",
    "creative solutions",
    "visual identity",
    "user experience",
    "programming",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  alternates: {
    canonical: process.env.BASE_URL + "/portfolios",
  },
};

const PortfolioPage = async () => {
  const Portres = await fetch(process.env.BASE_URL + "/api/portfolios");
  const repoPort = await Portres.json();

  const Catres = await fetch(process.env.BASE_URL + "/api/categories");
  const repoCat = await Catres.json();

  return (
    <PageWrapper>
      <div
        className="flex flex-col justify-center items-center p-3 pt-8
       xs:p-10 xs:pt-20
      "
      >
        <div className="w-[75%]">
          <h1
            className="font-poppins  text-[28px] text-center tracking-wide font-bold 
          dark:text-white 
          xs:text-[40px]
          "
          >
            Showcasing My Creative Journey: Past Projects as a{" "}
            <span className="text-gradient dark:text-gradient-dark background-animate">
              {" "}
              Graphic Designer & Full Stack Developer
            </span>
          </h1>
        </div>

        <div className="text-white text-3xl">
          <FeaturedProject repoPort={repoPort} repoCat={repoCat} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioPage;

export const dynamic = "force-dynamic";
