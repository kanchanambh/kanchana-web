"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
const SactionAnimate = {
  offscreen: { y: -50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.6, duration: 1, delay: 0.2 },
  },
};

function FeaturedProject({ repoPort, repoCat }) {
  const [searchText, setSearchText] = useState("");

  const [getPortfolios, setGetPortfolios] = useState(repoPort);
  const [categories, setCategories] = useState(repoCat);
  const [savedPortfolios, setsavedPortfolios] = useState(repoPort);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedIdtem] = useState([]);
 

  const filterPortfolios = (cat, parent) => {
    if (cat === "all") {
      setGetPortfolios(savedPortfolios);
    } else {
      const regex = new RegExp(cat, "i");

      let result;
      if (parent) {
        // If  category
        const catRegex = new RegExp(cat, "i");
        result = savedPortfolios.filter((curData) =>
          curData.category.some((category) => catRegex.test(category.name))
        );
      } else {
        // If  parent,
        const catRegex = new RegExp(cat, "i");
        result = savedPortfolios.filter((curData) =>
          curData.category.some((category) =>
            catRegex.test(category.parent.name)
          )
        );
      }

      setGetPortfolios(result);
    }
  };

  return (
    <motion.section
      className="flex flex-col justify-center items-center py-5 px-6
      ss:px-0 ss:mt-8
      sm:p-3 
      md;p-10
      xs:p-8  
      lg:py-12"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.01 }}
      variants={SactionAnimate}
    >
      <div
        className="
          flex flex-wrap text-black dark:text-white font-medium justify-center items-center
          w-[97%] ss:mt-3
        
          lg:w-[88%] tracking-wide"
      >
        <button className="svg-cat " onClick={() => filterPortfolios("all")}>
          <CheckBadgeIcon
            className="svg-cat-icon h-4 w-4 py-0
             md:h-5 lg:w-5 text-primary_red mr-1"
          />
          All
        </button>
        {categories.length > 0 &&
          categories.map((cat, i) => (
            <button
              key={cat._id}
              className="svg-cat "
              onClick={() =>
                filterPortfolios(cat.name, cat.parent?.name || null)
              }
            >
              <CheckBadgeIcon
                className="svg-cat-icon h-4 w-4 py-0
             md:h-5 lg:w-5 text-primary_red mr-1"
              />

              {cat.name}
            </button>
          ))}
      </div>
      <div
        className="w-[85%] pt-5
          xs:w-[40%]
          ss:w-[85%]"
      ></div>
      <div className="">
        <div
          className=" w-full flex flex-wrap mx-auto mt-10 text-primary_red 
         font-normal text-xl justify-center items-center
         ss:m-0
         "
        >
          {getPortfolios.length > 0 &&
            getPortfolios.map((portfolio, i) => (
              <motion.div
                key={portfolio._id}
                layoutId={portfolio._id}
                onClick={() => {
                  setSelectedId(portfolio._id);
                  setSelectedIdtem(portfolio);
                }}
                className="product flex flex-col w-[340px]  transition-all duration-500
              ss:w-[380px] ss:mx-2-1 ss:mt-8
              sm:w-[400px]
              md:w-[400px] bg-primary_red dark:bg-slate-800 m-2  shadow-xl overflow-hidden"
              >
                {portfolio.images && (
                  <div
                    className=" w-full h-[280px]
              ss:h-[280px]
              lg:h-[270px]
              "
                  >
                    <Image
                      className="h-full w-full  object-cover"
                      width={500}
                      height={350}
                      priority
                      src={portfolio.images[0]}
                      alt={portfolio.title}
                    />
                  </div>
                )}
                <div className="relative ">
                  <div
                    className="product-card pt-0 absolute h-fit pb-3 bottom-0-0 left-0 right-0 bg-primary_red  transition-transform ease-out duration-300  
                translate-y-[0%] 
                ss:translate-y-[0%]
                sm:translate-y-[0%]  "
                  >
                    <div className="px-3 pt-2  flex flex-col justify-center items-center ">
                      <p
                        className="dark:text-white text-white pb-2 font-bold text-[18px] leading-6 text-center tracking-widest
                          ss:text-[18px]
                          sm:text-[20px]
                    "
                      >
                        {portfolio.title}
                      </p>
                      <p
                        className="dark:text-white text-black leading-4 font-normal text-[16px] text-center uppercase tracking-widest
                    ss:text-[14px]
                    sm:text-[16px]
                    "
                      >
                        {portfolio.category?.name}
                      </p>

                      <Link
                        className="bg-black text-white px-6 py-[6px] w-fit mt-2 rounded-full cursor-pointer
                      ss:text-[18px] ss:px-3 ss:py-1
                      sm:text-[20px] sm:px-6 sm:py-[6px]
                    "
                        href={"/portfolios/" + portfolio.slug}
                      >
                        <span className="">View</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturedProject;
