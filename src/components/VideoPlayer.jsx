"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function VideoPlayer() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="mx-5 my-10 md:mx-40 md:my-20">
      <motion.div
        className="relative rounded-2xl overflow-hidden bg-black hidden md:block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          width: "100%",
          height: "500px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="absolute inset-0 flex"
          animate={{
            flexDirection: isHovered ? "row" : "column",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative"
            animate={{
              width: isHovered ? "80%" : "100%",
              height: "500px",
            }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              className="w-full h-[500px]"
              src={`https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=${
                isHovered ? 1 : 0
              }`}
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            {!isHovered && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30"
              >
                <div className="rounded-full bg-white/30 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-12 h-12 text-white"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="relative bg-custom_green_dark"
            animate={{
              width: isHovered ? "40%" : "100%",
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : 100,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8 text-white h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Sustainability is integral to the way we do business.
              </h2>
              <p className="text-white/90 mb-6">
                We see sustainability as more of an opportunity than an
                obligation. An opportunity to become more efficient, implement
                best practices in management and maintenance, contribute to a
                better quality of life in our communities and to help our
                partners meet their sustainability goals.
              </p>
              <button className="bg-white text-custom_green_dark hover:bg-white/90 px-4 py-2 rounded-md font-semibold transition-colors duration-200 w-fit">
                Learn More
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="block md:hidden">
        <div className="flex flex-col ">
          {" "}
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/gpUDSPPhf_M?autoplay=${
              isHovered ? 1 : 0
            }`}
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <div className="relative bg-custom_green_dark">
            <div className="p-8 text-white h-full flex flex-col justify-center">
              <h2 className="text-[22px] leading-[33px] font-bold font-poppins mb-4">
                Sustainability is integral to the way we do business.
              </h2>
              <p className="text-white text-sm leading-[21px] font-normal font-poppins mb-6">
                We see sustainability as more of an opportunity than an
                obligation. An opportunity to become more efficient, implement
                best practices in management and maintenance, contribute to a
                better quality of life in our communities and to help our
                partners meet their sustainability goals.
              </p>
              <button className="bg-white text-custom_green_dark hover:bg-white px-4 py-2 rounded-md font-semibold transition-colors duration-200 w-fit mx-auto md:mx-0">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
