"use client";

import React, { useState } from "react";
import Link from "next/link";
import PortfolioForm from "@components/admin/PortfolioForm";
import { useRouter } from "next/navigation";

const NewPorfolios = () => {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState({
    title: "",
    slug: "",
    featured: "",
    description: "",
    category: "",
    seo_title: "",
    meta_description: "",
    images: [],
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  const createPortfolio = async (e) => {
    e.preventDefault();
    let ss = await imageHandleSubmit(e);

    const data = {
      title: productInfo.title,
      slug: productInfo.slug,
      featured: productInfo.featured,
      description: productInfo.description,
      category: productInfo.category,
      seo_title: productInfo.seo_title,
      meta_description: productInfo.meta_description,
      images: ss,
    };

    try {
      const res = await fetch("/api/portfolios", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/admin/portfolios");
      } else {
        return new Response(JSON.stringify("Error occured while logging"), {
          status: 201,
        });
      }
    } catch (error) {
      return new Response(JSON.stringify(error.message), { status: 500 });
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
    for (let i = 0; i < files.length; i++) {
      const url = URL.createObjectURL(event.target.files[i]);
      setSelectedImage((oldArray) => [...oldArray, url]);
    }
  };

  const imageHandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/imageUpload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        return await response.json();

        setSelectedImage([]);
        // Do something with the success response
      } else {
        console.error("Error uploading files.");
        // Handle the error response
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      // Handle any network or server errors
    }
  };
  console.log(productInfo);
  return (
    <div className="p-10 dark:text-white w-[100%] m-auto">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-[22px] font-bold dark:text-white pb-10">
          New Portfolios
        </div>
        <div className="flex w-full items-end justify-start">
          <Link
            className="bg-green-700 px-2 py-1 rounded-lg shadow-md"
            href={"/admin/portfolios"}
          >
            {"<< Portfolios"}
          </Link>
        </div>
        <PortfolioForm
          productInfo={productInfo}
          setProductInfo={setProductInfo}
          handleSubmit={createPortfolio}
          selectedImage={selectedImage}
          handleFileChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default NewPorfolios;
