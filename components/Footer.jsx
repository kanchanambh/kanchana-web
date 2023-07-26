import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div
      className="bg-primary_red text-center flex flex-col justify-center items-center  overflow-hidden
      p-2
    sm:p-5 
    lg:p-10"
    >
      <div className="p-4">
        <Image
          id="imghe"
          className="sm:min-w-[150px] min-w-[100px] "
          width={100}
          height={100}
          src={"/logo-white.webp"}
          alt="gg"
        />
      </div>
      <div
        className="p-5 flex flex-row space-x-3
      sm:pt-8 sm:space-x-5
      md:pt-5 md:space-x-8
      lg:space-x-10
      "
      >
        <a target="_blank" href="https://www.behance.net/kanchanaherath">
          <Image
            id="imghe"
            className="cursor-pointer w-7 h-7
          sm:w-10 sm:h-10
          lg:w-10 lg:h-10"
            width={40}
            height={40}
            src={"/svg-icon/behance-Icon.svg"}
            alt="behance-Icon"
          />
        </a>

        <a target="_blank" href="https://dribbble.com/kanchanaherath">
          <Image
            id="imghe"
            className="cursor-pointer w-7 h-7
          sm:w-10 sm:h-10
          lg:w-10 lg:h-10"
            width={40}
            height={40}
            src={"/svg-icon/Dribbble-Icon.svg"}
            alt="Dribbble-Icon"
          />
        </a>

        <a target="_blank" href="https://www.pinterest.com/kanchanambherath">
          <Image
            id="imghe"
            className="cursor-pointer w-7 h-7
          sm:w-10 sm:h-10
          lg:w-10 lg:h-10"
            width={40}
            height={40}
            src={"/svg-icon/pinterest-Icon.svg"}
            alt="pinterest-Icon"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/kanchana-herath">
          <Image
            id="imghe"
            className="cursor-pointer w-7 h-7
          sm:w-10 sm:h-10
          lg:w-10 lg:h-10"
            width={40}
            height={40}
            src={"/svg-icon/linkedin-Icon.svg"}
            alt="linkedin-Icon"
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/kanchanambherath/?hl=en"
        >
          <Image
            id="imghe"
            className="cursor-pointer w-7 h-7
          sm:w-10 sm:h-10
          lg:w-10 lg:h-10"
            width={40}
            height={40}
            src={"/svg-icon/instagram-Icon.svg"}
            alt="instagram-Icon"
          />
        </a>
      </div>
      <div
        className="p-4 space-x-2
        sm:space-x-10
       lg:space-x-10"
      >
        <Link
          className="px-2 text-[14px]
          sm:text-[17px]
           md:text-[17px]
          lg:py-2 lg:px-3 lg:text-[17px]
           duration-500 text-white hover:text-black cursor-pointer"
          href="/"
        >
          Home
        </Link>
        <Link
          className="px-2 text-[14px]
          sm:text-[17px]
           md:text-[17px]
          lg:py-2 lg:px-3 lg:text-[17px]
           duration-500 text-white hover:text-black cursor-pointer"
          href="/services"
        >
          Services
        </Link>
        <Link
          className="
          px-2 text-[14px]
          sm:text-[17px]
           md:text-[17px]
          lg:py-2 lg:px-3 lg:text-[17px]
           duration-500 text-white hover:text-black cursor-pointer"
          href="/portfolios"
        >
          Portfolios
        </Link>
        <Link
          className="px-2 text-[14px]
          sm:text-[17px]
           md:text-[17px]
          lg:py-2 lg:px-3 lg:text-[17px]
          duration-500 text-white hover:text-black cursor-pointer"
          href="/blog"
        >
          Blog
        </Link>
      </div>
      <div
        className="p-4 space-x-2
        sm:space-x-10
       lg:space-x-10"
      >
        <Link
          className="px-2 text-[14px]
           sm:text-[17px]
           md:text-[17px]
          lg:py-2 lg:px-3 
          duration-500 text-white hover:text-black "
          href="/privacy-policy"
        >
          Privacy policy
        </Link>
        <Link
          className="px-2 text-[14px]
          sm:text-[17px]
          md:text-[17px]
          lg:py-2 lg:px-3 lg:text-[17px]
          duration-500 text-white hover:text-black "
          href="/terms-and-conditions"
        >
          Terms and conditions
        </Link>
      </div>

      <div>
        <p
          className="pt-5 text-white dark:text-white font-light text-[12px]
        lg:text-[14px] lg:font-normal"
        >
          Copyright © 2020 - 2023 All rights reserved | Kanchana Herath
        </p>
      </div>
    </div>
  );
}

export default Footer;
