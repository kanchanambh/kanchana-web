import PageWrapper from "@components/PageWrapper";
import BlogByCat from "@components/blog/BlogByCat";
import React from "react";

export const metadata = {
  title: "Design and Code Insights: Blog Post",
  description:
    "Discover the creative world of a Graphic Designer and Full Stack Developer through insightful blog posts, design tips, coding techniques, and inspiring projects.",
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
    canonical: process.env.BASE_URL + "/blog",
  },
};

let blogpost = [1, 2, 3, 4];

const BlogPostPage = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/blog", {
    cache: "no-store",
  });
  const blogPost = await res.json();

  const rescat = await fetch(process.env.BASE_URL + "/api/blogCategories", {
    cache: "no-store",
  });
  const blogPostcat = await rescat.json();
  return (
    <PageWrapper>
      <div
        className="flex flex-col justify-center items-center p-3 pt-8
   xs:p-10 xs:pt-20
  "
      >
        <div
          className="w-[95%]
        lg:w-[75%]"
        >
          <h1
            className="font-poppins  text-[28px] text-center tracking-wide font-bold 
              dark:text-white 
              xs:text-[40px]
              pb-6 lg:pb-1
              "
          >
            Insights & Ideas:
            <span className="text-gradient dark:text-gradient-dark">
              {" "}
              The Blog Hub
            </span>
          </h1>
        </div>

        <BlogByCat blogPost={blogPost} blogPostcat={blogPostcat} />
      </div>
    </PageWrapper>
  );
};

export default BlogPostPage;

export const dynamic = "force-dynamic";
