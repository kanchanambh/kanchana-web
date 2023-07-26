"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useThemeSwitch from "@/app/hooks/useThemeSwitch";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [darkMode, setdarkMode] = useThemeSwitch();

  let togglebtn = darkMode === "dark" ? true : false;

  const hamburgerBtn = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");
    const navlink = document.getElementById("menulink");
    btn.classList.toggle("open");
    nav.classList.toggle("top-[11%]");
    navlink.classList.toggle("flex");
  };

  return (
    <nav className="h-[60px] flex-nowrap bg-white shadow-md dark:bg-gray-900 items-center m-auto z-30">
      <div className="flex h-[60px] px-2 py-1 justify-between mx-1 items-center">
        <Link href={"/"}>
          <Image
            src={togglebtn === true ? "/logo-white.webp" : "/logo.webp"}
            width={180}
            height={40}
            className="cursor-pointer object-contain px-3 w-[130px] xs:w-[150px] ss:w-[160px] sm:w-[180px]"
            alt="logo-kanchanaherath"
            priority
          />
        </Link>

        <div className=" duration-500 flex">
          {/* Deskyop Nave*/}
          <div className="hidden md:flex space-x-4">
            <Link
              className=" hover:bg-blue-500 py-2 px-3 rounded-full duration-500 hover:text-white dark:text-white "
              href="/"
            >
              Home
            </Link>
            <Link
              className=" hover:bg-blue-500 py-2 px-3 rounded-full duration-500 hover:text-white dark:text-white "
              href="/services"
            >
              Services
            </Link>
            <Link
              className=" hover:bg-blue-500 py-2 px-3 rounded-full duration-500 hover:text-white dark:text-white"
              href="/portfolios"
            >
              Portfolios
            </Link>
            <Link
              className=" hover:bg-blue-500 py-2 px-3 rounded-full duration-500 hover:text-white dark:text-white"
              href="/blog"
            >
              Blog
            </Link>
          </div>

          {/** Mobile */}
          <div
            id="menu"
            className="absolute duration-300 flex-col left-0 bg-white h-full w-full top-[-100%] z-50 drop-shadow-md ease-in-out"
          >
            <div id="menulink" className="flex-col items-center p-10 space-y-7">
              <Link href="/" onClick={hamburgerBtn}>
                Home
              </Link>
              <Link href="/services" onClick={hamburgerBtn}>
                Services
              </Link>
              <Link href="/portfolios" onClick={hamburgerBtn}>
                Portfolios
              </Link>
              <Link href="/blog" onClick={hamburgerBtn}>
                Blog
              </Link>
            </div>
          </div>

          <div className="ml-0 flex items-center space-x-2 sm:space-x-4">
            <label htmlFor="toggle_checkbox" className=" flex space-x-1">
              <input
                id="toggle_checkbox"
                type="checkbox"
                className="peer hidden"
                onClick={() => {
                  setdarkMode(darkMode === "light" ? "dark" : "light");
                }}
              />
              <div
                className={`relative bg-gray-900 w-9 sm:w-11 h-5 sm:h-6 rounded-full my-auto 
                  after:content-['']
                  after:absolute
                  after:w-4
                  after:h-4
                  after:sm:w-5
                  after:sm:h-5
                  after:bg-white
                  after:rounded-full
                  after:top-[2px]
                  after:left-[2px]
                  after:duration-300
                  ${togglebtn && "after:translate-x-full"}
                  ${togglebtn && "peer-checked:after:translate-x-full"}
                  `}
              ></div>

              {togglebtn === true ? (
                <MoonIcon className=" w-5 h-5 sm:h-6 sm:w-6 text-blue-500 duration-300 transition-all" />
              ) : (
                <SunIcon className="w-5 h-5  sm:h-6 sm:w-6 text-blue-500 duration-300" />
              )}
            </label>
            <div>
              <div className="flex items-center mb-2">
                <button
                  id="menu-btn"
                  className="block relative items-center hamburger md:hidden focus:outline-none px-3 ss:px-5"
                  onClick={hamburgerBtn}
                >
                  <span
                    className={`hamburger-top ${
                      togglebtn === true ? "bg-white" : "bg-black"
                    } `}
                  ></span>
                  <span
                    className={`hamburger-middle ${
                      togglebtn === true ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                  <span
                    className={`hamburger-bottom ${
                      togglebtn === true ? "bg-white" : "bg-black"
                    } `}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
