"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import icon from "../../public/images/Icon.png";
import vector1 from "../../public/images/vector1.png";
import vector2 from "../../public/images/vector2.png";

export default function Hero() {
  return (
    <>
      <div className="relative">
        <div className="absolute -z-10 -top-60">
          <Image
            src={vector1}
            alt="vector"
            className="w-auto h-auto"
            width={200}
            height={200}
          />
        </div>
        <div className="absolute -z-10 bottom-0 right-0">
          <Image
            src={vector2}
            alt="vector"
            className="w-auto h-auto"
            width={200}
            height={200}
          />
        </div>
        <div className="mx-5 my-10 md:mx-40 md:my-20">
          <div className="hidden md:block">
            <div className="flex  ">
              <div className="-mt-6 -mr-1">
                <Image
                  src={icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className="w-auto h-auto md:w-[30.21px] md:h-[44.28px]"
                />
              </div>
              <p className=" text-[40px] leading-[48.41px] font-medium font-hind">
                স্বাগতম
              </p>
            </div>
          </div>
          <p className="text-[30px] leading-[45px] md:text-[45px] md:leading-[67.5px] font-extrabold font-poppins w-full md:w-10/12 pt-2 pb-10">
            We are a leading sustainability-inspired, 100% export-oriented
            readymade garments powerhouse
          </p>
          <motion.div className="my-auto" whileHover="hover">
            <motion.div
              className="overflow-hidden"
              variants={{
                hover: {
                  width: "auto",
                  transition: { duration: 0.3 },
                },
              }}
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-custom_green_dark px-6 py-3 text-base leading-[24px] font-medium text-white transition-all hover:bg-custom_green_dark"
              >
                <span>About Us</span>
                <motion.span
                  className="ml-2 overflow-hidden"
                  variants={{
                    hover: {
                      width: "20px",
                      opacity: 1,
                      transition: { duration: 0.3 },
                    },
                  }}
                  initial={{ width: 0, opacity: 0 }}
                >
                  <IoArrowForward className="h-5 w-5" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
