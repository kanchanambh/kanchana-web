"use client";
import React, { useEffect, useState } from "react";

const BlogCategories = () => {
  const [blogCategory, setblogCategory] = useState({
    category: "",
    parentCategory: "",
  });
  const [fetchedCategory, setFetchedCategory] = useState([]);
  const [editedCategory, setEditedCategory] = useState(null);

  useEffect(() => {
    fetchBlogCategories();
  }, []);

  async function saveBlogCategory(ev) {
    ev.preventDefault();
    const data = {
      category: blogCategory.category,
      parentCategory: blogCategory.parentCategory,
    };
    if (editedCategory) {
      data._id = editedCategory._id;
      try {
        const res = await fetch("/api/blogCategories", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(data),
        });
        setblogCategory({
          category: "",
          parentCategory: "",
        });
        fetchBlogCategories();
      } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 });
      }
    } else {
      try {
        const res = await fetch("/api/blogCategories", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        });
        setblogCategory({
          category: "",
          parentCategory: "",
        });
        fetchBlogCategories();
      } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 });
      }
    }
  }

  async function fetchBlogCategories() {
    try {
      const allCategory = await fetch("/api/blogCategories");

      setFetchedCategory(await allCategory.json());
    } catch (error) {
      return new Response(JSON.stringify(error.message), { status: 500 });
    }
  }

  function editBlogCategory(cat) {
    setEditedCategory(cat);
    setblogCategory({
      category: cat.category,
      parentCategory: cat.parent?._id,
    });
  }
  async function deleteBlogCategory(e, id) {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      e.preventDefault();

      try {
        const res = await fetch("/api/blogCategories?id=" + id, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "DELETE",
        });

        fetchBlogCategories();
      } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 });
      }
    } else {
      return;
    }
  }

  return (
    <div className="p-10 dark:text-white w-[60%] m-auto">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-[22px] font-bold dark:text-white pb-10">
          Blog Post Categories
        </div>
      </div>
      <div className="w-[100%] p-4 bg-slate-700 shadow-md rounded-lg">
        <label htmlFor="categoryname" className="p-4 text-[20px]">
          Create new category
        </label>
        <form
          onSubmit={saveBlogCategory}
          className="flex items-center justify-center space-x-5 pt-3"
        >
          <input
            className="flex-1 bg-slate-800 font-light mb-0 focus:outline-none pl-1 p-[2px]"
            type="text"
            value={blogCategory.category}
            placeholder={"Category Name"}
            onChange={(ev) =>
              setblogCategory({
                ...blogCategory,
                category: ev.target.value,
              })
            }
          />
          <select
            name=""
            id=""
            value={blogCategory.parentCategory}
            onChange={(ev) =>
              setblogCategory({
                ...blogCategory,
                parentCategory: ev.target.value,
              })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-max p-[2px]
              dark:bg-gray-700 dark:border-gray-300 dark:placeholder-green-600-400 
              dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
          >
            <option value="">No Parent Category</option>
            {fetchedCategory.length > 0 &&
              fetchedCategory.map((category) => {
                if (!category.parent) {
                  return (
                    <option key={category._id} value={category._id}>
                      {category.category}
                    </option>
                  );
                }
              })}
          </select>
          <button type="submit" className="bg-blue-800 px-5 py-1 rounded-lg">
            Save
          </button>
        </form>
      </div>
      <div className="flex flex-row justify-start items-start">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 ">
          <thead
            className="text-xs text-gray-700 uppercase bg-gray-50 
             border dark:bg-blue-800 dark:border-gray-500 dark:text-white"
          >
            <tr className=" ">
              <td className="p-2 ">Category Name</td>
              <td className="p-2 ">Parent Category </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {fetchedCategory.length > 0 &&
              fetchedCategory.map((cat) => (
                <tr
                  key={cat._id}
                  className="
                  bg-white border dark:bg-gray-800 dark:border-gray-500"
                >
                  <td className="px-6 py-3">{cat.category}</td>
                  <td className="px-6 py-3">{cat?.parent?.category}</td>
                  <td className="px-6 py-3 flex justify-end">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded-md shadow-sm mx-1"
                      onClick={() => editBlogCategory(cat)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded-md shadow-sm mx-1"
                      onClick={(e) => deleteBlogCategory(e, cat._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogCategories;
