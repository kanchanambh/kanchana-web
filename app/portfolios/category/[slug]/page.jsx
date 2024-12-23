import PageWrapper from "@/components/PageWrapper";
import PortfolioByCategory from "@components/PortfolioByCategory";
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
 
  var cat = params.slug.toString().replace(/-/g, " ");
  const Catres = await fetch(
    process.env.BASE_URL + "/api/categories?cat=" + cat
  );
  
  const repoCat = await Catres.json();
  const Portfolio = await fetch(process.env.BASE_URL + "/api/portfolios");
  const portAll = await Portfolio.json();
  let catList = {
    cat: repoCat[0].name,  
    parent: repoCat[0].parent?.name || null  
  }

  Object.keys(catList).forEach(key => {
    if(catList[key] != null){
    catList[key] = catList[key].toLowerCase().toString();
  }
  });

  var filterdPort = "";
  
  const filterPortfolios = (catList) => {
   
   
    if(catList.parent != null){
    const catRegex = new RegExp(catList.cat, "i");
    filterdPort = portAll.filter((curData) =>
          curData.category.some((category) => catRegex.test(category.name))
        );
      }else{
        // If  parent,
        const catRegex = new RegExp(catList.cat, "i");
        
        filterdPort = portAll.filter((curData) =>
          curData.category.some((category) =>
            catRegex.test(category.parent.name)
          )
        );
      }
  };

  filterPortfolios(catList);
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
            Showcasing Past Projects as{" "}
            <span className="text-gradient dark:text-gradient-dark background-animate">
              {repoCat.map((cat) => cat.name)}
            </span>
          </h1>
        </div>

        <div className="text-white text-3xl">
          <PortfolioByCategory repoPort={filterdPort} />
        </div>
      </div>
    </PageWrapper>
  );
};

export default CategotyPage;

export const dynamic = "force-dynamic";
