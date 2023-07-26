import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const feedback = [
  {
    id: 1,
    name: "Daniel Christopher",
    company: "Apex Ventures",
    description:
      "\u0022Thanks to Kanchana Herath's expertise, our web application now functions flawlessly and has received rave reviews from our users. Kanchana Herath played a pivotal role in turning our vision into reality, and we couldn't be happier with the outcome.\u0022",
  },
  {
    id: 2,
    name: "Nicholas",
    company: "SwiftTech",
    description:
      "\u0022Working with Kanchana Herath was a breeze. He is highly professional, proactive, and a great communicator. He kept us informed about the progress, welcomed our feedback, and collaborated effectively with our team. His dedication to meeting deadlines and delivering exceptional results was evident throughout the project.\u0022",
  },
  {
    id: 3,
    name: "James William",
    company: "Optima Innovations",
    description:
      "\u0022What truly sets Mr. Kanchana Herath apart is their commitment to delivering high-quality code and robust solutions. He meticulously tested every feature, ensuring that our application was stable, secure, and optimized for performance. His attention to detail and ability to handle complex tasks with ease were truly commendable.\u0022",
  },
  {
    id: 4,
    name: "Alexander",
    company: "Echelon Enterprises",
    description:
      "\u0022Thanks to Kanchana Herath's exceptional design skills, our marketing materials have gained a new level of sophistication and captivated our target audience. The positive feedback we've received from clients and stakeholders is a testament to the impact of their work.\u0022",
  },
  {
    id: 5,
    name: "Benjamin",
    company: "Evolve",
    description:
      "\u0022Exceptional graphic designer! Their creativity and attention to detail impressed us. Delivered outstanding work on time. Highly recommended\u0022",
  },
  {
    id: 6,
    name: "Matthew Samuel",
    company: "Synergy",
    description:
      "\u0022From the initial concept discussions to the final delivery, Mr. Kanchana Herath demonstrated a deep understanding of our brand and vision. He listened attentively to our requirements and translated them into stunning visuals that perfectly captured the essence of our company.\u0022",
  },
];
const SactionAnimate = {
  offscreen: { y: -50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.6, duration: 1, delay: 0.2 },
  },
};
function ClientsFeedBack() {
  const [divWidth, setdivWidth] = useState();
  const [current, setcurrent] = useState(0);

  useEffect(() => {
    const slideintervel = setInterval(next, 10000);
    return () => clearInterval(slideintervel);
  }, [current]);

  const next = () => {
    setcurrent((current) =>
      current === feedback.length - 1 ? 0 : current + 1
    );
  };
  const prev = () => {
    setcurrent((current) =>
      current === 0 ? feedback.length - 1 : current - 1
    );
  };

  const textAnimate = {
    offscreen: { y: -70, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.6, duration: 1, delay: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center sm:p-10 xs:p-8 px-6 py-6"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.3 }}
      variants={textAnimate}
    >
      <div className="">
        <div>
          <h1
            className="relative text-[36px]
            lg:text-[44px] pt-3 pb-3 font-poppings  font-bold text-primary_red tracking-wide
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
     "
          >
            Client&apos;s Feedback
          </h1>
        </div>
      </div>
      <div
        className="w-full
      lg:w-[90%] relative"
      >
        <ChevronRightIcon
          className="w-10 h-10
          lg:h-14 lg:w-14 dark:text-white text-black
          absolute top-[50%] right-3 cursor-pointer z-20 translate-y-[-30%]
          sm:right-0:
          md:right-3"
          onClick={() => next()}
        />
        <ChevronLeftIcon
          className="w-10 h-10
          lg:h-14 lg:w-14 dark:text-white  text-black
          absolute top-[50%] left-3 cursor-pointer z-20 translate-y-[-30%]
          sm:left-0:
          md:left-3"
          onClick={() => prev()}
        />
        <div className="overflow-hidden bg-slate-200 dark:bg-slate-800 rounded-xl pb-5">
          <div
            id="feedbackDiv"
            className="flex flex-row transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {feedback.map((val, i) => (
              <div
                key={val.id}
                className="w-full min-w-full flex flex-col justify-center items-center
                            px-3
                            lg:px-10 "
              >
                <div
                  className="w-full 
                                p-3
                                lg:p-5 relative text-center "
                >
                  <h1
                    className="font-bold 
                                text-[22px]
                                lg:text-[25px] text-gradient dark:text-gradient-dark pt-5"
                  >
                    {val.name}
                  </h1>
                  <h2
                    className="font-normal italic text-gradient dark:text-gradient-dark 
                                text-[18px]
                                lg:text-[20px]"
                  >
                    {val.company}
                  </h2>
                  <p
                    className="p-2 
                                mx-3
                                sm:px-10
                                lg:mx-10 font-light text-black text-[16px] italic dark:text-dark_text text-center"
                  >
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[95%] pt-10 flex flex-wrap justify-center items-center"></div>
    </motion.div>
  );
}

export default ClientsFeedBack;
