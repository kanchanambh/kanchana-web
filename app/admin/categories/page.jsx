"use client";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [name, setName] = useState("");
  const [editedCategory, setEditedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [parentCategory, setParentCategory] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);
  async function fetchCategories() {
    try {
      const allCategory = await fetch("/api/categories");

      setCategories(await allCategory.json());
    } catch (error) {
      return new Response(JSON.stringify(error.message), { status: 500 });
    }
  }

  async function saveCategory(ev) {
    ev.preventDefault();
    const data = { name: name, parentCategory: parentCategory };
    if (editedCategory) {
      data._id = editedCategory._id;
      try {
        const res = await fetch("/api/categories", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(data),
        });
        setEditedCategory(null);
        setName("");
        fetchCategories();
      } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 });
      }
    } else {
      try {
        const res = await fetch("/api/categories", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        });
        setName("");
        fetchCategories();
      } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 });
      }
    }
  }

  function editCategory(category) {
    setEditedCategory(category);
    setName(category.name);
    setParentCategory(category.parent?._id);
  }

  async function deleteCategory(e, id) {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      e.preventDefault();

      try {
        const res = await fetch("/api/categories?id=" + id, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "DELETE",
        });

        fetchCategories();
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
          Categories
        </div>
        <div className="w-[100%] p-4 bg-slate-700 shadow-md rounded-lg">
          <label htmlFor="categoryname" className="p-4 text-[20px]">
            {editedCategory
              ? `Edit category ${editedCategory.name}`
              : "Create new category"}
          </label>
          <form
            onSubmit={saveCategory}
            className="flex items-center justify-center space-x-5 pt-3"
          >
            <input
              className="flex-1 bg-slate-800 font-light mb-0 focus:outline-none pl-1 p-[2px]"
              type="text"
              value={name}
              placeholder={"Category Name"}
              onChange={(ev) => setName(ev.target.value)}
            />
            <select
              name=""
              id=""
              value={parentCategory}
              onChange={(ev) => setParentCategory(ev.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-max p-[2px]
              dark:bg-gray-700 dark:border-gray-300 dark:placeholder-green-600-400 
              dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            >
              <option value="">No Parent Category</option>
              {categories.length > 0 &&
                categories.map((category) => {
                  if (!category.parent) {
                    return (
                      <option key={category._id} value={category._id}>
                        {category.name}
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
            {categories.length > 0 &&
              categories.map((category) => (
                <tr
                  key={category._id}
                  className="
                  bg-white border dark:bg-gray-800 dark:border-gray-500"
                >
                  <td className="px-6 py-3">{category.name}</td>
                  <td className="px-6 py-3">{category?.parent?.name}</td>
                  <td className="px-6 py-3 flex justify-end">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded-md shadow-sm mx-1"
                      onClick={() => editCategory(category)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded-md shadow-sm mx-1"
                      onClick={(e) => deleteCategory(e, category._id)}
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

export default Categories;
