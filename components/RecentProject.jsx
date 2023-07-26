import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { BeatLoader } from "react-spinners";

const SactionAnimate = {
  offscreen: { y: -50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.6, duration: 1, delay: 0.2 },
  },
};

function RecentProject() {
  const [getPortfolios, setGetPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedPortfolios, setsavedPortfolios] = useState([]);

  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedIdtem] = useState([]);

  useEffect(() => {
    getAllFetch();
  }, []);
  async function getAllFetch() {
    await getAllPortfolios();
  }

  async function getAllPortfolios() {
    setLoading(true);
    try {
      const allPrtfolio = await fetch("/api/portfolios?featured=true");

      const allData = await allPrtfolio.json();

      setGetPortfolios(allData);
      setsavedPortfolios(allData);
    } catch (error) {
      return new Response(JSON.stringify(error.message), { status: 500 });
    }
    setLoading(false);
  }

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
      <div>
        <h1
          className="text-[36px] text-center leading-snug pt-0
          relative lg:text-[44px]  lg:pt-3 pb-3 font-poppings  font-bold text-primary_red tracking-wide
          mb-5
         after:content-['']
         after:absolute
         after:w-[40%]
         after:h-1
         after:text-gradient-ul
         after:bottom-1
         after:left-0
         after:mt-5
         after:rounded-md
         after:translate-x-[80%]
         after:background-animate
         "
        >
          Recently Done Projects
        </h1>
      </div>
      {loading === true ? (
        <>
          <BeatLoader color="#36d7b7" />
        </>
      ) : (
        <>
          <div>
            <div
              className=" w-full flex flex-wrap mx-auto mt-10 text-primary_red 
         font-normal text-xl justify-center items-center
         ss:m-0
         "
            >
              {getPortfolios?.map((portfolio, i) => (
                <motion.div
                  key={portfolio._id}
                  layoutId={portfolio._id}
                  onClick={() => {
                    setSelectedId(portfolio._id);
                    setSelectedIdtem(portfolio);
                  }}
                  className="product flex flex-col w-[340px]  transition-all duration-500
            ss:w-[340px] ss:mx-2-1 ss:mt-8
            sm:w-[380px]
            md:w-[380px] bg-primary_red dark:bg-slate-800 m-3  shadow-xl overflow-hidden"
                >
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
            <div className="flex flex-row items-center justify-center mt-10">
              <Link
                className="bg-primary_blue 
            text-[18px] px-5
            font-medium lg:text-[22px] text-white hover:after:translate-x-[0%] transition-colors duration-300 
            hover:text-black tracking-wide lg:px-10 py-2 w-fit mt-5 rounded-full relative overflow-hidden
            after:content-['']
         after:absolute
         after:top-0
         after:bottom-0
         after:left-0
         after:w-[100%]
         after:bg-primary_red
         after:translate-x-[-100%]
         after:z-0
         after:duration-300
         after:ease-in-out
         after:transition-transform

         "
                href={"/portfolios"}
              >
                <span className="z-20 relative">Portfolios</span>
              </Link>
            </div>
          </div>
        </>
      )}
      <AnimatePresence>
        {selectedId && (
          <div
            id="myModal"
            className="fixed z-50 top-1/2 left-1/2 pt-[80px] xs:pt-[120px] ss:pt-[150px] md:pt-[100px] w-full h-screen -translate-x-1/2 -translate-y-1/2 modal "
          >
            <motion.div
              layoutId={selectedId}
              className="relative m-auto w-[85%] h-fit
              md:w-[800px] md:h-[520px] shadow-lg rounded-xl 
              border dark:border-gray-500 
              dark:text-white dark:bg-slate-950 overflow-hidden
              "
            >
              <button
                type="button"
                className="absolute lg:top-4 lg:right-5 
                md:top-3 md:right-5 
                top-7 right-7
                z-50
                inline-flex items-center justify-center  p-1 rounded-full
                 dark:bg-[#191919f8] dark:text-gray-200 dark:hover:text-gray-300 
                focus:outline-none focus:ring-2 focus:ring-inset 
                focus:ring-red-500"
                onClick={() => {
                  setSelectedId(null);
                }}
              >
                <span className="sr-only">Close menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative w-full h-full">
                <div
                  className="bg-black w-full h-full
                absolute top-0 left-0 right-0 bottom-0 opacity-70
                "
                >
                  <img
                    className="w-full h-full object-cover"
                    src={selectedItem?.images[0]}
                    alt=""
                  />
                </div>
                <div className="relative w-full h-full z-40 flex items-center justify-center">
                  <div className="px-5 pt-4  flex flex-col justify-center items-center ">
                    <div className="relative  border rounded-xl py-6 px-4 mb-4 md:mb-1 overflow-hidden ">
                      <div className="absolute top-0 left-0 bottom-0 right-0 bg-primary_red opacity-70"></div>
                      <div
                        className="relative z-40 flex flex-col justify-center items-center
                      pt-6
                      md:pt-0
                      "
                      >
                        <p
                          className="dark:text-white text-white font-bold text-[23px] text-center uppercase tracking-widest
                    ss:text-[20px]
                    sm:text-[28px]
                    "
                        >
                          {selectedItem.title}
                        </p>
                        <p
                          className="dark:text-white text-black font-normal text-[18px] text-center uppercase tracking-widest
                    ss:text-[16px]
                    sm:text-[18px]
                    "
                        >
                          {selectedItem.category?.name}
                        </p>
                        <p
                          className="product_detail  text-white  p-2 text-[16px] leading-tight
                    ss:text-[13px] ss:p-1
                    sm:text-[16px] sm:p-2
                    "
                        >
                          {selectedItem.description.substring(0, 300) + "..."}
                        </p>
                        <Link
                          className="bg-black
                          text-[16px] px-5
                          font-medium lg:text-[20px] text-white hover:after:translate-x-[0%] transition-colors duration-300 
                          hover:text-white tracking-wide lg:px-4 py-1 w-fit mt-5 rounded-full relative overflow-hidden
                          after:content-['']
                       after:absolute
                       after:top-0
                       after:bottom-0
                       after:left-0
                       after:w-[100%]
                       after:bg-primary_blue
                       after:translate-x-[-100%]
                       after:z-0
                       after:duration-300
                       after:ease-in-out
                       after:transition-transform
                    "
                          href={"/portfolios/" + selectedItem.slug}
                        >
                          <span className="z-20 relative">
                            View Full Portfolio
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default RecentProject;
