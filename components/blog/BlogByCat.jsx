"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogByCat = ({ blogPost, blogPostcat }) => {
  const [allBlogPost, setAllBlogPost] = useState(blogPost || []);
  const [allBlogCategory, setAllBlogCategory] = useState(blogPostcat || []);

  return (
    <div className="text-white flex items-center justify-center w-full">
      <div className="w-full">
        <div
          className="text-center text-gradient dark:text-gradient-dark flex items-center justify-center 
        space-x-4
        text-[18px] xs:text-[22px]"
        >
          {allBlogCategory &&
            allBlogCategory.map((cat, i) => (
              <Link
                key={i}
                href={`/blog/category/${cat.category
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                <p>{cat.category}</p>
              </Link>
            ))}
        </div>
        <div className="flex flex-wrap justify-center items-start">
          {allBlogPost.length > 0 &&
            allBlogPost.slice(0, 4).map((blog, i) => (
              <div
                key={i}
                className="w-[100%] m-1 pb-6
                        md:w-[47%] md:m-3
                        lg:w-[44%] lg:m-5 lg:pb-1"
              >
                <Link href={"/blog/" + blog.slug}>
                  <div
                    className="w-full h-full
                                md:h-[300px]
                               lg:h-[400px] overflow-hidden rounded-lg shadow-lg 
                               transition-all hover:scale-[1.02] duration-300
                               "
                  >
                    <Image
                      className="w-full h-full object-cover overflow-hidden"
                      width={500}
                      height={350}
                      alt={blog.title}
                      src={blog.images[0]}
                    />
                  </div>
                </Link>
                <div className="pt-5">
                  <div className="flex justify-between items-center pb-3">
                    <Link
                      href={`/blog/category/${blog.category?.category
                        .toLowerCase()
                        .replace(/\s/g, "-")}`}
                    >
                      <p className="text-gradient dark:text-gradient-dark text-[16px] lg:text-[18px] w-fit font-bold">
                        {blog.category?.category}
                      </p>
                    </Link>
                    <p
                      className="text-slate-900 dark:text-white text-[13px]
                                
                                  lg:text-[15px] w-fit font-light"
                    >
                      {blog.createdAt?.split("T")[0]}
                    </p>
                  </div>
                  <Link href={"/blog/" + blog.slug}>
                    <p className="text-[18px] xs:text-[20px] lg:text-[22px] text-primary_red">
                      {blog.title}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-wrap justify-center items-start">
          {allBlogPost.length > 0 &&
            allBlogPost.slice(4, 10).map((blog, i) => (
              <div
                key={i}
                className="w-full m-1 pb-6
                md:w-[47%] md:m-3
              lg:w-[30%]  lg:m-5"
              >
                <Link href={"/blog/" + blog.slug}>
                  <div
                    className="w-full h-full
                    md:h-[300px]
                    lg:h-[280px] overflow-hidden rounded-lg shadow-lg
                    transition-all hover:scale-[1.02] duration-300
                    "
                  >
                    <Image
                      className="w-full h-full object-cover overflow-hidden"
                      width={500}
                      height={350}
                      alt={blog.title}
                      src={blog.images[0]}
                    />
                  </div>
                </Link>
                <div className="pt-5">
                  <div className="flex justify-between items-center pb-3">
                    <Link href={"/blogcategory?name=" + blog.category.category}>
                      <p className="text-gradient dark:text-gradient-dark text-[16px] lg:text-[18px] w-fit font-bold">
                        {blog.category.category}
                      </p>
                    </Link>
                    <p className="text-slate-900 dark:text-white text-[13px] lg:text-[15px] w-fit font-light">
                      {blog.createdAt?.split("T")[0]}
                    </p>
                  </div>
                  <Link href={"/blog/" + blog.slug}>
                    <p className="text-[18px] xs:text-[20px] lg:text-[22px]">
                      {blog.title}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogByCat;
