import React, { useEffect, useState } from "react";

function useThemeSwitch() {
  const [darkMode, setdarkMode] = useState("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const usePref = window.localStorage.getItem("theme");
    let check = usePref === "dark" ? "dark" : "light";
    setdarkMode(check);
    if (check === "dark") {
      document.querySelector(".maindiv").classList.remove("main");
      document.querySelector(".gradientdiv").classList.remove("gradient");
      document.documentElement.classList.add("dark");
    } else if (check === "light") {
      document.querySelector(".maindiv").classList.add("main");
      document.querySelector(".gradientdiv").classList.add("gradient");
      document.documentElement.classList.remove("dark");
    } else {
      document.querySelector(".maindiv").classList.remove("main");
      document.querySelector(".gradientdiv").classList.remove("gradient");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.querySelector(".maindiv").classList.add("main");
      document.querySelector(".gradientdiv").classList.remove("gradient");
      document.querySelector(".gradientdiv").classList.toggle("gradient-dark");
      document.documentElement.classList.add("dark");
    }
    if (darkMode === "light") {
      window.localStorage.setItem("theme", "light");
      document.querySelector(".maindiv").classList.add("main");
      document.querySelector(".gradientdiv").classList.toggle("gradient");
      document.querySelector(".gradientdiv").classList.remove("gradient-dark");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return [darkMode, setdarkMode];
}

export default useThemeSwitch;
