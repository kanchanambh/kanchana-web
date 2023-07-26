"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import BlogPostFrom from "@components/admin/BlogPostFrom";

const EditBlogPost = () => {
  const [productInfo, setProductInfo] = useState({
    id: "",
    title: "",
    slug: "",
    featured: false,
    description: "",
    bodyimages: [],
    category: "",
    seo_title: "",
    meta_description: "",
    images: [],
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);

  const [selectedFilesBodyImg, setSelectedFilesBodyImg] = useState([]);
  const [imageBodyImgURL, setImageBodyImgURL] = useState([]);
  const [uploadedImageURLS, setUploadedImageURLS] = useState([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  let updatedImages = [];
  let updatedBodyImages = [];

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchBlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function fetchBlogPost() {
    const response = await fetch("/api/blog?id=" + id);
    const data = await response.json();
    setProductInfo({
      id: data._id,
      title: data.title,
      slug: data.slug,
      featured: data.featured,
      description: data.description,
      bodyimages: data.bodyimages,
      category: data.category,
      seo_title: data.seo_title,
      meta_description: data.meta_description,
      images: data.images,
    });
  }

  const updateBlogPost = async (e) => {
    e.preventDefault();
    let ss = await imageHandleSubmit(e);
    updatedImages = [...productInfo.images, ...ss];
    updatedBodyImages = [...productInfo.bodyimages, ...uploadedImageURLS];
    const data = {
      id: productInfo.id,
      title: productInfo.title,
      slug: productInfo.slug,
      featured: productInfo.featured,
      description: productInfo.description,
      bodyimages: updatedBodyImages,
      category: productInfo.category,
      seo_title: productInfo.seo_title,
      meta_description: productInfo.meta_description,
      images: updatedImages,
    };

    try {
      const res = await fetch("/api/blog", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/admin/blogs");
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

      const response = await fetch("/api/imageUpload/blog", {
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

  const handleFileChangeBodyImg = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFilesBodyImg(files);

    for (let i = 0; i < files.length; i++) {
      const url = URL.createObjectURL(event.target.files[i]);
      setImageBodyImgURL((oldArray) => [...oldArray, url]);
    }
  };

  const handleSubmitBodyImg = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      selectedFilesBodyImg.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/imageUpload/blog", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadedImageURLS(await response.json());

        setImageBodyImgURL([]);
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

  async function imgDeleted(e, seledted, val) {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      if (val === "images") {
        const newImage = productInfo.images;
        const finalImge = newImage.filter((im) => im !== seledted);
        setProductInfo({ ...productInfo, images: finalImge });
        updatedImages = finalImge;
        const data = { seledted };
      } else {
        const newBodyImage = productInfo.bodyimages;
        const finalBodyImge = newBodyImage.filter((im) => im !== seledted);
        setProductInfo({ ...productInfo, bodyimages: finalBodyImge });
      }

      try {
        const response = await fetch("/api/imageUpload/blog?id=" + seledted, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "DELETE",
        });

        if (res.ok) {
          return new Response(JSON.stringify("Done"), { status: 200 });
        } else {
          return new Response(JSON.stringify("Error occured while logging"), {
            status: 201,
          });
        }
      } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 });
      }
    } else {
      return;
    }
  }

  return (
    <div className="p-10 dark:text-white w-[100%] m-auto">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-[22px] font-bold dark:text-white pb-10">
          Edit Portfolios
        </div>
        <div className="flex w-full items-end justify-start">
          <Link
            className="bg-green-700 px-2 py-1 rounded-lg shadow-md"
            href={"/admin/blogs"}
          >
            {"<< Portfolios"}
          </Link>
        </div>
        {
          <BlogPostFrom
            productInfo={productInfo}
            setProductInfo={setProductInfo}
            handleSubmit={updateBlogPost}
            selectedImage={selectedImage}
            handleFileChange={handleFileChange}
            imgDeleted={imgDeleted}
            handleSubmitBodyImg={handleSubmitBodyImg}
            handleFileChangeBodyImg={handleFileChangeBodyImg}
            selectedFilesBodyImg={selectedFilesBodyImg}
            setSelectedFilesBodyImg={setSelectedFilesBodyImg}
            imageBodyImgURL={imageBodyImgURL}
            setImageBodyImgURL={setImageBodyImgURL}
            uploadedImageURLS={uploadedImageURLS}
            setUploadedImageURLS={setUploadedImageURLS}
          />
        }
      </div>
    </div>
  );
};

export default EditBlogPost;
