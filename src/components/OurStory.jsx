"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function OurStory() {
  return (
    <>
      <div className="mx-5 my-10  md:mx-20 md:my-20 ">
        <div className="relative  w-full  block md:hidden ">
          <div className="absolute inset-0 storybg  bg-cover bg-center" />
          <div className="relative flex  flex-col items-center justify-between px-5 py-20 md:p-20">
            <div className=" text-center w-full  text-white">
              <p className="text-[27px] md:text-[40px] leading-[40.5px] md:leading-[60px] font-semibold font-poppins ">
                We've been here since 1991, here's our story
              </p>
              <motion.div
                className="relative inline-block pt-5 md:pb-0"
                whileHover="hover"
              >
                <Link
                  href="/"
                  className="text-sm opacity-80 hover:opacity-100 "
                >
                  Privacy Policy
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] w-0 bg-white"
                  initial={{ width: "0%" }}
                  variants={{
                    hover: {
                      width: "100%",
                      transition: { duration: 0.3 },
                    },
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
