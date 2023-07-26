"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
const slides = [
  {
    url: "/Graphic-Design.png",
    alt: "Graphic Design",
  },
  {
    url: "/web-design.png",
    alt: "Web Design & Development",
  },
  {
    url: "/Mobile-App-Development.png",
    alt: "Mobile App Development",
  },
  {
    url: "/Blockchain-Development.png",
    alt: "Blockchain Development",
  },
];
const variants = {
  initial: {
    y: 300,
    opacity: 0,
    rotate: -45,
  },
  animate: {
    y: 0,
    opacity: 1,
    rotate: 0,

    scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: {
    y: -200,
    opacity: 0,
  },
};

const imageAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const slidedd = [1, 2, 3, 4, 5];

function MainCarosel() {
  const [current, setcurrent] = useState(0);
  const { data: session } = useSession();

  const next = () => {
    setcurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const slideintervel = setInterval(next, 3000);
    return () => clearInterval(slideintervel);
  }, [current]);

  const goToSlide = (slideIndex) => {
    setcurrent(slideIndex);
  };

  return (
    <div
      className="w-full h-full  overflow-hidden 
      items-center px-3 lg:px-6 mx-auto space-y-0
    flex flex-col-reverse 
    ss:flex-col
    sm:flex-row sm:h-full
    md:h-[calc(100vh-60px)]"
    >
      <motion.div
        className="w-full pt-10 pb-5 px-2 pl-4 items-center h-full flex flex-col space-y-2 justify-center
          sm:w-8/12 sm:items-start sm:px-8 sm:pl-12

          md:pl-14
         lg:w-7/12 lg:items-start lg:pl-14
         md:px-12
         ss:w-10/12 ss:pt-20"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.2 }}
        variants={textAnimate}
      >
        <h1
          className="text-center text-3xl font-poppins font-medium text-gradient dark:text-gradient-dark background-animate
        ss:text-[45px]
        sm:text-4xl sm:text-left
        lg:text-4xl  "
        >
          Hello I&apos;m
        </h1>
        <h1
          className="text-[40px] leading-10 text-center font-poppins font-bold 
          ss:text-[65px] ss:leading-[4rem]
          sm:text-[40px] sm:leading-10 
          md:text-[50px]
        lg:text-6xl 
        text-lg-gradient dark:text-lg-gradient-dark background-animate
        "
        >
          Kanchana Herath
        </h1>
        <h1
          className="text-[24px] text-center font-medium text-gradient dark:text-gradient-dark
          background-animate
          ss:text-[30px]
          sm:text-[22px] sm:text-left
        md:text-[22px] 
        lg:text-[27px] 
        "
        >
          A Graphic Designer, Full Stack Developer
        </h1>

        <p
          className="w-full font-normal text-[14px] text-center py-2 dark:text-dark_text text-gray-700
          ss:text-[16px]
          sm:text-[14px] sm:text-left
        lg:w-[88%] lg:font-medium  md:text-[20px] lg:pr-10 lg:mr-3 "
        >
          Unleashing creativity through design and code. Transforming ideas into
          visually stunning experiences
        </p>
      </motion.div>
      <motion.div
        className="w-full pt-12
        sm:w-5/12
        lg:w-5/12  h-full flex space-y-12 space-x-2 justify-center lg:justify-between items-center"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        variants={imageAnimate}
      >
        <div
          className="relative w-[70%]
          sm:w-[75%]
        lg:w-[80%] flex overflow-hidden items-center justify-center"
        >
          <div className=" absolute top-0 left-0 w-full h-full z-0">
            <div
              className="relative w-full h-full flex items-center justify-center bg-cover servicescircle"
              style={{
                backgroundImage: `url("/mainrotate.png")`,
              }}
            >
              <div
                className="w-[40%] h-[40%] absolute bg-red-600 rounded-full m-auto p-0 circle opacity-0"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-[40%] h-[40%] absolute bg-red-600 rounded-full m-auto p-0 circle opacity-0"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="w-[40%] h-[40%] absolute bg-red-600 rounded-full m-auto p-0 circle opacity-0"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="w-[40%] h-[40%] absolute bg-red-600 rounded-full m-auto p-0 circle opacity-0"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>
          </div>
          <motion.div
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            alt="slides"
            custom={1}
            key={current}
            className={`w-full h-full overflow-hidden z-10`}
          >
            <Image
              id="imghe"
              className="w-full h-full "
              width={500}
              height={500}
              src={slides[current].url}
              alt={slides[current].alt}
            />
          </motion.div>
        </div>
        <div
          className="hidden xs:block xs:w-auto p-3 space-y-4 mr-5 ss:pl-14
        sm:pl-3"
        >
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-1 h-10  rounded-full cursor-pointer transition-transform ease-out duration-500 ${
                current === i ? "bg-red-600" : "bg-gray-400"
              } `}
            ></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default MainCarosel;
