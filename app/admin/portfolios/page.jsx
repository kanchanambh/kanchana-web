"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const PortfoliosPage = () => {
  const [getPortfolios, setGetPortfolios] = useState([]);

  useEffect(() => {
    getAllPortfolios();
  }, []);

  async function getAllPortfolios() {
    try {
      const allPrtfolio = await fetch("/api/portfolios");

      setGetPortfolios(await allPrtfolio.json());
    } catch (error) {
      return new Response(JSON.stringify(error.message), { status: 500 });
    }
  }

  const deletePortfolio = async (e, id) => {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      e.preventDefault();
      const data = {
        id: id,
      };
      try {
        const res = await fetch("/api/portfolios?id=" + id, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "DELETE",
        });

        getAllPortfolios();
      } catch (error) {
        return new Response(JSON.stringify(error.message), { status: 500 });
      }
    } else {
      return;
    }
  };

  return (
    <div className="p-10 dark:text-white w-[100%] m-auto">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-[22px] font-bold dark:text-white pb-10">
          Portfolios
        </div>
        <div className="flex w-full items-end justify-end">
          <Link
            className="bg-green-700 px-2 py-1 rounded-lg shadow-md"
            href={"/admin/portfolios/new"}
          >
            Add new product
          </Link>
        </div>
        <div className="pt-5">Portfolios</div>
      </div>
      <div className="flex flex-row justify-start items-start">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 ">
          <thead
            className="text-xs text-gray-700 uppercase bg-gray-50 
             border dark:bg-blue-800 dark:border-gray-500 dark:text-white"
          >
            <tr className=" ">
              <td className="p-2 ">Title</td>
              <td className="p-2 ">Description</td>
              <td className="p-2 ">Category</td>
              <td className="p-2 ">SEO Title </td>
              <td className="p-2 ">Meta Description </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {getPortfolios.length > 0 &&
              getPortfolios.map((portfolio) => (
                <tr
                  key={portfolio._id}
                  className="bg-white border dark:bg-gray-800 dark:border-gray-500"
                >
                  <td className="px-6 py-3">{portfolio.title}</td>
                  <td className="px-6 py-3">
                    {portfolio.description.substring(0, 15)}
                  </td>
                  <td className="px-6 py-3">{portfolio.category[0]?.name}</td>
                  <td className="px-6 py-3">
                    {" "}
                    <label className="relative inline-flex items-center cursor-not-allowed">
                      <input
                        type="checkbox"
                        checked={portfolio.featured}
                        className="sr-only peer"
                        disabled
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
                  </td>
                  <td className="px-6 py-3">
                    <img
                      className="w-auto h-12 object-cover"
                      src={portfolio.image ? portfolio.images[0] : undefined}
                    />
                  </td>

                  <td className="px-6 py-3 flex justify-end">
                    <Link
                      href={"/admin/portfolios/edit?id=" + portfolio._id}
                      className="bg-blue-600 text-white px-3 py-1 rounded-md
                      shadow-sm mx-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => deletePortfolio(e, portfolio._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md shadow-sm mx-1"
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

export default PortfoliosPage;
