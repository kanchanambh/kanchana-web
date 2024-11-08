"use client";
import { ReactSortable } from "react-sortablejs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function PortfolioForm({
  productInfo,
  setProductInfo,
  handleSubmit,
  selectedImage,
  handleFileChange,
  imgDeleted,
}) {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleAddCategory = (ev) => {
    const selectedCategory = ev.target.value;

    if (selectedCategory && !productInfo.category.includes(selectedCategory)) {
      setProductInfo({
        ...productInfo,
        category: [...productInfo.category, selectedCategory],
        selectedCategories: "",
        // Reset the select box after adding
      });
    }
  };
  // Function to remove a category
  const handleRemoveCategory = (categoryId) => {
    setProductInfo({
      ...productInfo,
      category: productInfo.category.filter((id) => id !== categoryId),
    });
  };

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

  function updateImagesOrder(ima) {
    setProductInfo({ ...productInfo, images: ima });
  }

  function featuredCheck(ev) {
    setIsChecked(ev.target.checked);
  }

  return (
    <div className="pt-5  w-[80%] ">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="">Portfolio Title</label>
          <input
            value={productInfo.title}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                title: e.target.value,
                slug: e.target.value.toLowerCase().replace(/\s/g, "-"),
              })
            }
            type="text"
            placeholder="Portfolio Name"
            className="flex-1 bg-slate-700 w-full font-light mb-0 focus:outline-none pl-1 p-[2px] rounded-md"
          />
          <input
            value={productInfo.slug}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                slug: e.target.value.toLowerCase().replace(/\s/g, "-"),
              })
            }
            type="text"
            placeholder="Slug"
            className="flex-1 bg-slate-700 w-full font-light mb-0 focus:outline-none pl-1 p-[2px] rounded-md"
          />
        </div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={productInfo.featured}
              checked={productInfo.featured}
              onChange={(e) =>
                setProductInfo({
                  ...productInfo,
                  featured: e.target.checked,
                })
              }
              className="sr-only peer"
            />
            <div
              className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
             peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer
              dark:bg-gray-700 peer-checked:after:translate-x-full 
              peer-checked:after:border-white after:content-[''] 
              after:absolute after:top-[2px] after:left-[2px] after:bg-white 
              after:border-gray-300 after:border after:rounded-full after:h-5 
              after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Featured
            </span>
          </label>
        </div>

        <div>
          <label htmlFor="">Descriprion</label>
          <textarea
            value={productInfo.description}
            onChange={(e) =>
              setProductInfo({ ...productInfo, description: e.target.value })
            }
            className="flex-1 bg-slate-700 w-full h-24 font-light mb-0 focus:outline-none pl-1 p-[2px] rounded-md"
            name="description"
            id=""
            placeholder="description"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Category</label>
          <select
            name="category"
            id="category"
            value={productInfo.category[0]}
            onChange={handleAddCategory}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-max p-[2px]
          dark:bg-gray-700 dark:border-gray-300 dark:placeholder-green-600-400 
          dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
          >
            <option value=""> Uncategorized</option>
            {categories.length > 0 &&
              categories.map((category) => {
                // if (category.parent) {
                return (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                );
                // }
              })}
          </select>

          <div className="mt-4">
            <h3>Selected Categories:</h3>
            <ul>
              {productInfo.category && productInfo.category.length > 0 ? (
                productInfo.category.map((categoryId, index) => (
                  <li key={index}>
                    {categories.find((cat) => cat._id === categoryId)?.name}
                    <button
                      onClick={() => handleRemoveCategory(categoryId)}
                      className="ml-2 bg-red-500 text-white px-2 py-1 my-2 rounded"
                    >
                      Remove
                    </button>
                  </li>
                ))
              ) : (
                <p>No categories added yet</p>
              )}
            </ul>
          </div>
        </div>
        <div>
          <label htmlFor="">SEO Title</label>
          <input
            value={productInfo.seo_title}
            onChange={(e) =>
              setProductInfo({ ...productInfo, seo_title: e.target.value })
            }
            type="text"
            placeholder="SEO Title"
            className="flex-1 bg-slate-700 w-full font-light mb-0 focus:outline-none pl-1 p-[2px] rounded-md"
          />
        </div>
        <div>
          <label htmlFor="">Meta Description</label>
          <textarea
            value={productInfo.meta_description}
            onChange={(e) =>
              setProductInfo({
                ...productInfo,
                meta_description: e.target.value,
              })
            }
            className="flex-1 bg-slate-700 w-full h-24 font-light mb-0 focus:outline-none pl-1 p-[2px] rounded-md"
            name="description"
            id=""
            placeholder="description"
          ></textarea>
        </div>
        <div>
          <h2>Upload Files</h2>
          <div className="flex pl-10  space-x-10">
            {selectedImage.length > 0 &&
              selectedImage.map((seledted, i) => (
                <div className="w-[120px] h-[100px]" key={i}>
                  <img className="w-full h-full object-cover" src={seledted} />
                </div>
              ))}
          </div>

          <input type="file" multiple onChange={handleFileChange} />
        </div>
        <div className="flex  space-x-10">
          <ReactSortable
            list={productInfo.images}
            className="flex flex-wrap gap-1"
            setList={updateImagesOrder}
          >
            {productInfo.images.length > 0 &&
              productInfo.images.map((seledted, i) => (
                <div className="w-[200px] h-[150px]" key={i}>
                  <img
                    className="w-full h-full object-cover"
                    src={seledted}
                    onClick={(e) => imgDeleted(e, seledted)}
                  />
                </div>
              ))}
          </ReactSortable>
        </div>
        <button
          type="submit"
          className="bg-blue-700 px-3 py-1 text-xl rounded-lg shadow-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default PortfolioForm;
