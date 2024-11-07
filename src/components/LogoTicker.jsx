"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import icon from "../../public/images/Icon.png";
import logo1 from "../../public/images/logo1.png";
import logo2 from "../../public/images/logo2.png";
import logo3 from "../../public/images/logo3.png";
import logo4 from "../../public/images/logo4.png";
import logo5 from "../../public/images/logo5.png";
import logo6 from "../../public/images/logo6.png";
import logo7 from "../../public/images/logo7.png";
import logo8 from "../../public/images/logo8.png";
import logo9 from "../../public/images/logo9.png";
import logo10 from "../../public/images/logo10.png";

const logos = [
  { src: logo1, alt: "Logo1" },
  { src: logo2, alt: "Logo2" },
  { src: logo3, alt: "Logo3" },
  { src: logo4, alt: "Logo4" },
  { src: logo5, alt: "Logo5" },
  { src: logo6, alt: "Logo6" },
  { src: logo7, alt: "Logo7" },
  { src: logo8, alt: "Logo8" },
  { src: logo9, alt: "Logo9" },
  { src: logo10, alt: "Logo10" },
];

export default function LogoTicker() {
  const [direction, setDirection] = useState("left");

  return (
    <div className="overflow-hidden bg-transparent my-10  md:my-20 w-full">
      <div className="flex items-center justify-center text-center mb-5">
        <div className="-mt-8">
          <Image
            src={icon}
            alt="icon"
            width={100}
            height={100}
            className="w-auto h-auto md:w-[30.21px] md:h-[44.28px]"
          />
        </div>
        <p className="text-[24px] leading-[40.5px] md:text-[40px] md:leading-[60px] font-extrabold font-poppins">
          Our Partners
        </p>
      </div>
      <motion.div
        className="flex"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...Array(3)].map((_, setIndex) => (
          <div key={`set-${setIndex}`} className="flex">
            {logos.map((logo, index) => (
              <div
                key={`logo-${setIndex}-${index}`}
                className="w-20 sm:w-72 md:w-80 flex-none mx-4 my-auto"
              >
                <Image
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  width={300}
                  height={150}
                  className="md:w-auto md:h-auto w-20"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
