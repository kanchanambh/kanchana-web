"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Script from "next/script";

const SactionAnimate = {
  offscreen: { y: -50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.6, duration: 1, delay: 0.2 },
  },
};

function BlogPost() {
  const [getBlog, setGetBlog] = useState([]);

  async function getAllBlog() {
    try {
      const res = await fetch("/api/blog?featured=true");
      const blogPost = await res.json();
      setGetBlog(blogPost);
    } catch (error) {
      return new Response(JSON.stringify(error.message), { status: 500 });
    }
  }

  useEffect(() => {
    getAllBlog();
  }, []);

  function removeHTML(text) {
    var newtext = text.replace(/<[^>]+>/g, "");
    return newtext;
  }

  return (
    <motion.div
      className="flex flex-col justify-center items-center sm:p-3 xs:p-8 px-6 py-6
      "
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.01 }}
      variants={SactionAnimate}
    >
      <div className="">
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
 "
          >
            Latest Blog Post
          </h1>
        </div>
      </div>

      <div className=" w-full flex flex-wrap mx-auto mt-10 font-normal text-xl justify-center items-start">
        {getBlog.length > 0 &&
          getBlog.slice(0, 3).map((blog, i) => (
            <div
              key={i}
              className="product pb-1 flex flex-col w-[350px] 
            bg-primary_red dark:bg-slate-800 m-3 shadow-lg overflow-hidden
            sm:w-[330px]
            md:w-[380px] 
            "
            >
              <div className="w-full h-[220px]">
                <Image
                  className="h-full w-full  object-cover"
                  width={300}
                  height={350}
                  priority
                  src={blog.images[0]}
                  alt={blog.title}
                />
              </div>

              <div
                className="px-4 py-0 m-0 relative bg-primary_red dark:bg-slate-700 leading-6 flex
             flex-row justify-between space-x-3 dark:text-black text-black font-light text-[12px] "
              >
                <p className="flex-1 p-0 text-white">
                  {blog.category.category}
                </p>
                <span className="w-[1px] dark:bg-white"></span>
                <p className=" p-0 text-left text-white">
                  {blog.createdAt?.split("T")[0]}
                </p>
              </div>
              <div
                className="text-slate-800 
            bg-slate-100 dark:bg-slate-800 dark:text-slate-100 px-4 pt-4 overflow-hidden"
              >
                <p>{blog.title.substring(0, 60)}</p>
                <p className="text-[15px] leading-5 font-light dark:text-dark_text pt-3">
                  {removeHTML(blog.description).substring(0, 170)}
                </p>
                <div className="flex flex-row ">
                  <Link
                    className="bg-black text-white px-3 py-1 w-fit my-5 text-[16px] rounded-full cursor-pointer
                hover:after:translate-x-[0%] transition-colors duration-300 hover:text-white tracking-wide  mt-5 relative overflow-hidden
            after:content-['']
         after:absolute
         after:top-0
         after:bottom-0
         after:left-0
         after:w-[100%]
         after:text-gradient-ul
         after:translate-x-[-100%]
         after:z-0
         after:duration-300
         after:ease-in-out
         after:transition-transform"
                    href={"/blog/" + blog.slug}
                  >
                    <span className="z-20 relative">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
}

export default BlogPost;
