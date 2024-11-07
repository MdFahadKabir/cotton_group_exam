"use client";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="relative  w-full my-10  md:my-20">
      <div className="absolute inset-0 footerbg  bg-cover bg-center" />
      <div className="relative flex  flex-col items-center justify-between p-5 md:p-20">
        <div className=" flex flex-col md:flex-row md:justify-between w-full text-start text-white">
          <div className="pb-5 md:pb-0">
            <p className="text-[27px] md:text-[30px] leading-[40.5px] md:leading-[45px] font-semibold ">
              Ready to talk further?
            </p>
            <p className="text-[27px] md:text-[30px] leading-[40.5px] md:leading-[45px] font-semibold">
              Let's see how we can create value, together.
            </p>
          </div>
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
                <span>Contact Us</span>
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

        <div className=" w-full  mt-28 ">
          <div className=" mx-auto flex flex-col-reverse md:flex-row md:justify-between   text-white ">
            <p className="text-sm opacity-80">
              Copyright © 2023 Cotton Group. All rights reserved.
            </p>

            <motion.div
              className="relative inline-block pb-5 md:pb-0"
              whileHover="hover"
            >
              <Link href="/" className="text-sm opacity-80 hover:opacity-100 ">
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
    </footer>
  );
}
