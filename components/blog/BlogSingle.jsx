"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const BlogSingle = ({ output }) => {
  const containerRef = useRef(null);
  let htmlContent = output.description;
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = htmlContent;
    }
  }, [htmlContent]);

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
        <span className="text-gradient dark:text-gradient-dark">
          {output.title}
        </span>
      </h1>

      <div className="px-4 lg:px-0 w-full">
        {output.images &&
          output.images.map((image, index) => (
            <Image
              key={index}
              className="h-full w-full my-10 object-cover shadow-lg"
              width={1000}
              height={500}
              priority
              src={image}
              alt={output.title}
            />
          ))}
      </div>
      <div
        className="dark:text-slate-300 text-[14px] text-center lg:text-left lg:text-[18px] font-light space-y-3 sm:space-y-5 "
        ref={containerRef}
      />

      <Link
        className="bg-black text-white px-6 py-[6px] w-fit mt-2 rounded-full cursor-pointer
                  ss:text-[18px] ss:px-3 ss:py-1
                  sm:text-[20px] sm:px-6 sm:py-[6px]
                "
        href={"/blog"}
      >
        <span className="">Back</span>
      </Link>
    </div>
  );
};

export default BlogSingle;
