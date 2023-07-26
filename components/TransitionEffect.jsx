"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useThemeSwitch from "@/app/hooks/useThemeSwitch";

function TransitionEffect() {
  const [darkMode, setdarkMode] = useThemeSwitch();

  let togglebtn = darkMode === "dark" ? true : false;

  return (
    <>
      <motion.div
        className={`fixed top-0 bottom-0 right-full w-screen h-screen z-50  ${
          togglebtn ? "bg-gray-900" : "bg-white"
        }`}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: "100%", width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-primary_red"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary_blue"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className={`fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gray-800 ${
          togglebtn ? "bg-white" : "bg-gray-900"
        }`}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}

export default TransitionEffect;
