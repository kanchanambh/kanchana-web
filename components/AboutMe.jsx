import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const textAnimate = {
  offscreen: { y: -70, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.6, duration: 1, delay: 0.2 },
  },
};

function AboutMe() {
  return (
    <section
      className="flex flex-col
      ss:flex-col-reverse
     lg:flex-row  sm:p-10 xs:p-8 px-6 py-5"
    >
      <motion.div
        className="w-full
        lg:w-5/12 px-10 flex justify-center items-center"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.1 }}
        variants={textAnimate}
      >
        <div className="relative w-[400px] h-[400x] flex justify-center items-center">
          <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full z-0 ">
            <Image
              className="w-full h-auto p-0 m-0 servicescircle"
              width={400}
              height={400}
              src={"/mainrotate.svg"}
              alt="asdasd"
            />
          </div>
          <div className="w-auto h-auto flex justify-center items-center rounded-full overflow-hidden">
            <Image
              className="w-full h-full p-[16px] lg:p-[27px] m-0 z-10 rounded-full"
              width={400}
              height={400}
              src={"/Kanchana_Herath.png"}
              alt="Kanchana Herath - A Graphic Designer, Full Stack Developer"
            />
          </div>
        </div>
      </motion.div>
      <div
        className="w-full 
      lg:w-7/12 h-full lg:pr-10"
      >
        <motion.div
          className="flex flex-col justify-center p-2 items-center
          lg:justify-start lg:items-start
          "
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.1 }}
          variants={textAnimate}
        >
          <h1
            className="relative text-center text-3xl pt-10
            lg:text-4xl font-poppings uppercase font-medium text-gradient
             dark:text-gradient-dark pb-3 m-0 w-fit 
             lg:text-left
        after:content-['']
        after:absolute
        after:w-[50%]
        after:h-1
        after:text-gradient-ul
        after:bottom-1
        after:left-0
        after:translate-x-[50%]
        after:rounded-md
        background-animate
        after:background-animate
        "
          >
            About Me
          </h1>

          <p
            className="text-[15px]
          pt-5 pr-5 font-normal text-gray-700 lg:text-[18px] dark:text-dark_text"
          >
            I&apos;m Kanchana Herath, a Graphic Designer and Full-stack
            Developer with six years of enriching experience. My design journey
            is about crafting visually striking artworks, from logos to
            illustrations, leaving lasting impressions. On the tech side, I love
            building user-friendly web apps with coding prowess in various
            languages and frameworks.
          </p>
          <p
            className="text-[15px]
          pt-5 pr-5 font-normal text-gray-700 
          ss:pb-20
          sm:pb-4
          lg:text-[18px] dark:text-dark_text"
          >
            Collaborating with diverse teams has taught me the value of
            communication and teamwork. Constantly learning and staying updated
            allows me to offer cutting-edge solutions. I am always eager to take
            on new challenges and bring innovation to every project I undertake.
            Let&apos;s collaborate and bring your visions to life!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;
