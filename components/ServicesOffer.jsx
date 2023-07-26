import Image from "next/image";
import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const imagetes = [
  {
    id: 1,
    title: "Graphic Design",
    image: "/code_icon-graphic.svg",
    alt: " Graphic Design",
    description:
      "Graphic Design Services offer professional expertise in creating visually appealing and impactful designs for various purposes. From designing logos, brochures, and websites to creating eye-catching illustrations and branding materials, graphic designers combine artistic skills with technical knowledge to effectively communicate messages and enhance the visual identity of businesses and organizations",
    categoty: [
      "Ads Design",
      "Banner Design",
      "Books & Magazines",
      "Branding ",
      "Brochures & Flyers",
      "Business card",
      "Logo Design",
      "Posters",
      "Presentations",
    ],
  },
  {
    id: 2,
    title: "Web Design & Development",
    image: "/web-development.svg",
    alt: " Web Design & Development",
    description:
      "Web Design & Development Services combine creative expertise with technical prowess to deliver exceptional websites tailored to meet your specific business needs. We specialize in crafting visually appealing, user-friendly, and responsive websites that provide a seamless user experience across all devices.",
    categoty: [
      "PHP Development",
      "WordPress Development",
      "E-commerce Design",
      "CMS Based Design",
      "Shopify Development",
      "ReactJs",
      "AngularJs",
      "NextJs",
      "NodeJs",
      "Django",
      "UI/UX Design",
    ],
  },
  {
    id: 4,
    title: "Mobile App Development",
    image: "/Mobile-App-Development-icon-01.svg",
    alt: " Mobile App Development",
    description:
      " Looking to bring your innovative ideas to life through a cutting-edge mobile app? Mobile App Development Services are here to transform your vision into a stunning reality. creating high-quality, user-friendly mobile applications that cater to diverse platforms like iOS and Android.",
    categoty: [
      "Native App Development",
      "Hybrid App Development",
      "iOS Development",
      "Android Development",
      "API Integration",
      "React Native ",
      "Flutter ",
    ],
  },
  {
    id: 3,
    title: "Blockchain Development",
    image: "/Blockchain-Development-icon-01.svg",
    alt: " Blockchain Development",
    description:
      "Unlock the full potential of the decentralized web with our cutting-edge Web3 Development Services. My experienced and experts will help you build decentralized applications (DApps) and integrate blockchain technology into your existing platforms. Harness the power of smart contracts, decentralized finance (DeFi), non-fungible tokens (NFTs), and more to revolutionize your business and create immersive user experiences.",
    categoty: [
      "DApp Development",
      "Smart Contract Development",
      "DeFi Solutions",
      "NFT",
      "Solidity",
      "Python",
      "Web3Js",
    ],
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

function ServicesOffer() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center 
      px-3
      sm:p-10 
      xs:p-8 
      md;p-5
      lg:px-6 py-6"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.01 }}
      variants={SactionAnimate}
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
            Services Offer
          </h1>
        </div>
      </div>
      <div className="w-[97%] lg:w-[80%]">
        <p
          className="pt-5 pr-5 font-normal text-gray-700 
        text-[15px]
        lg:text-[18px] dark:text-dark_text text-center"
        >
          I provide a full spectrum of design and development solutions tailored
          to meet your business requirements. Whether you need captivating
          visual designs or smooth website development, I blend creativity with
          technical proficiency to deliver outstanding outcomes. My emphasis on
          quality, innovation, and client satisfaction drives me to create
          influential and user-centric solutions that make your business shine
          in the digital world.
        </p>
      </div>

      <div
        className="w-[100%]
      lg:w-[95%] pt-10 flex flex-wrap justify-center items-start"
      >
        {imagetes.map((val, i) => (
          <div
            key={val.id}
            className="w-full p-4
            lg:w-[45%] m-5 bg-white dark:bg-gray-800 border-[1px] border-solid border-slate-300 
            dark:border-slate-700 lg:p-10 rounded-2xl shadow-lg flex flex-col justify-center items-center
            hover:scale-[101%] transition-transform duration-300 cursor-pointer  hover:dark:border-gray-600
            md:w-[48%] md:p-5 md:m-2
            lg:m-5
            "
          >
            <div>
              <Image
                className="svg-color-dark w-20 lg:w-24"
                width={100}
                height={100}
                src={val.image}
                alt={val.alt}
              />
            </div>
            <h1 className="text-[25px] text-center font-bold text-gray-900 dark:text-white tracking-wide p-5">
              {val.title}
            </h1>
            <p
              className="text-gray-700 text-[14px] 
            lg:text-[16px] dark:text-dark_text text-center font-light mb-5"
            >
              {val.description}
            </p>
            <div className="flex flex-wrap justify-center items-center">
              {val.categoty.map((cat, index) => (
                <span key={index + 5655} className="svg-cat px-3">
                  <CheckBadgeIcon className="svg-cat-icon h-5 w-5  text-primary_red mr-1" />
                  {cat}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ServicesOffer;
