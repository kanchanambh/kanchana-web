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
