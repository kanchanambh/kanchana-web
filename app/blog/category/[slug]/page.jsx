import PageWrapper from "@/components/PageWrapper";
import BlogByCat from "@components/blog/BlogByCat";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: "Category: Graphic Design & Full Stack Development",
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
      canonical: ` ${
        process.env.BASE_URL
      }/portfolios/category/${params.slug.toString()}`,
    },
  };
}

const CategotyPage = async ({ params, searchParams }) => {
  var cat = params.slug.toString().replace("-", " ");
  const Catres = await fetch(
    process.env.BASE_URL + "/api/blogCategories?cat=" + cat
  );
  const repoCat = await Catres.json();
  const BlogPostfetch = await fetch(
    process.env.BASE_URL + "/api/blog?catID=" + repoCat[0]._id
  );
  const blogPost = await BlogPostfetch.json();
  console.log(blogPost);
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
            The Blog Category -{" "}
            <span className="text-gradient dark:text-gradient-dark">
              {repoCat[0].category}
            </span>
          </h1>
        </div>

        <BlogByCat blogPost={blogPost} />
      </div>
    </PageWrapper>
  );
};

export default CategotyPage;

export const dynamic = "force-dynamic";
