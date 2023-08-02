import React from "react";

import Image from "next/image";
import Link from "next/link";
const PortfoloSingel = ({ output }) => {
  return (
    <div className="w-[100%] lg:w-[85%] flex flex-col justify-center items-center">
      <h1
        className="w-[90%] font-poppins text-[32px] text-center tracking-wide font-bold 
        dark:text-white 
        xs:text-[48px]
        pb-0
        lg:w-[80%] lg:text-[48px] lg:pb-10
"
      >
        Showcasing My Creative Journey:{" "}
        <span className="text-gradient dark:text-gradient-dark background-animate">
          {output.title}
        </span>
      </h1>
      <p className="dark:text-slate-300 text-[14px] text-center lg:text-left lg:text-[18px] font-light p-5 lg:p-5">
        {output.description}
      </p>
      <div className="px-4 lg:px-0 w-full">
        {output.images &&
          output.images.map((image, index) => (
            <Image
              key={index}
              className="h-full w-full my-10 object-cover shadow-lg"
              width={1920}
              height={1200}
              priority
              src={image}
              alt={output.title}
            />
          ))}
      </div>
      <Link
        className="bg-black text-white px-6 py-[6px] w-fit mt-2 rounded-full cursor-pointer
                      ss:text-[18px] ss:px-3 ss:py-1
                      sm:text-[20px] sm:px-6 sm:py-[6px]
                    "
        href={"/portfolios"}
      >
        <span className="">Back to Portfolios</span>
      </Link>
    </div>
  );
};

export default PortfoloSingel;
