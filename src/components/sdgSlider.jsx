"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import icon from "../../public/images/Icon.png";
export default function SdgSlider() {
  const [expanded, setExpanded] = useState(null);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("/api/sdg")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        const apiData = data.data.sdgSegmentData.map((item) => ({
          id: item.no,
          color: item.colorCode,
          title: item.title,
          img: item.svg,
          number: item.no,
          description: item.details,
        }));
        setCardData(apiData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log("Card data:", cardData);
  return (
    <>
      <div className="mx-5 my-10 md:mx-40 md:my-20">
        <div className="relative  text-center mb-5">
          <div className="absolute md:inset-x-10 md:-mt-4">
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              className="w-auto h-auto md:w-[30.21px] md:h-[44.28px]"
            />
          </div>
          <p className=" text-[24px] leading-[40.5px] md:text-[40px] md:leading-[60px]  font-extrabold font-poppins">
            Through CottonCares™️, we strive to prioritize the <br></br>
            following SDGs
          </p>
        </div>

        <div className="hidden md:block ">
          <div className="flex h-[700px] w-full items-stretch overflow-hidden">
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                className="flex"
                animate={{
                  flex: expanded === index ? 1 : expanded === null ? 1 : "none",
                  width:
                    expanded === index
                      ? "auto"
                      : expanded === null
                      ? "auto"
                      : "96px",
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="relative flex h-full flex-col items-center justify-center text-white"
                  style={{ backgroundColor: card.color }}
                  animate={{
                    width: expanded === index ? "200px" : "171.3px",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="flex flex-col  items-center absolute top-0"
                    animate={{
                      scale: expanded === index ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className=" h-36">
                      <motion.div
                        className="my-auto"
                        animate={{
                          padding: expanded === index ? "16px" : "8px",
                          marginTop: expanded === index ? "20px" : "10px",
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Image
                          src={`/${card.img}`}
                          alt="image"
                          width={expanded === index ? 96 : 90}
                          height={expanded === index ? 86 : 60}
                          className="transition-all duration-500"
                        />
                      </motion.div>
                    </div>
                    <motion.span
                      className="font-bold transition-all duration-500 "
                      animate={{
                        fontSize: expanded === index ? "120px" : "50px",
                        lineHeight: expanded === index ? "180px" : "75px",
                      }}
                    >
                      {card.number}
                    </motion.span>
                  </motion.div>
                  {index === 0 && (
                    <motion.span
                      className="absolute bottom-[100px] left-0 right-0 whitespace-nowrap text-xs font-bold leading-[18px] text-white md:text-lg md:leading-[27px]"
                      style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                        opacity: expanded === 0 ? 0 : 1,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      HOVER TO LEARN MORE
                    </motion.span>
                  )}
                </motion.button>
                {expanded === index && (
                  <motion.div
                    className="flex-1 p-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundColor: "#FFF5F5" }}
                  >
                    <motion.h2
                      className="text-[40px] font-extrabold leading-[60px]"
                      style={{ color: card.color }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {card.title}
                    </motion.h2>
                    <motion.ul
                      className="mt-8 space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {Array.isArray(card.description) &&
                        card.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                          >
                            <GoDotFill
                              className="mr-2 my-auto md:text-xl flex-shrink-0"
                              style={{ color: card.color }}
                            />
                            <span className="text-[25px] leading-[53px] font-light">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                    </motion.ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="block md:hidden">
          <div className=" flex flex-col md:flex-row h-auto md:h-[700px] w-full items-stretch overflow-hidden">
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                className="flex flex-col md:flex-row"
                animate={{
                  flex: expanded === index ? 1 : expanded === null ? 1 : "none",
                  height: {
                    md: "auto",
                    base:
                      expanded === index
                        ? "auto"
                        : expanded === null
                        ? "auto"
                        : "96px",
                  },
                  width: {
                    md:
                      expanded === index
                        ? "auto"
                        : expanded === null
                        ? "auto"
                        : "96px",
                    base: "100%",
                  },
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="relative flex flex-row md:flex-col items-center justify-start md:justify-center text-white w-full md:w-auto h-24 md:h-full"
                  style={{ backgroundColor: card.color }}
                  animate={{
                    width: { md: expanded === index ? "200px" : "220px" },
                    height: {
                      base: expanded === index ? "auto" : "96px",
                      md: "auto",
                    },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="flex flex-row md:flex-col items-center md:absolute md:top-0"
                    animate={{
                      scale: expanded === index ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="my-auto"
                      animate={{
                        padding: expanded === index ? "16px" : "8px",
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={`/${card.img}`}
                        alt="image"
                        width={expanded === index ? 60 : 60}
                        height={expanded === index ? 60 : 60}
                        className="transition-all duration-500"
                      />
                    </motion.div>
                    <motion.span
                      className="font-bold transition-all duration-500"
                      animate={{
                        fontSize: expanded === index ? "60px" : "90px",
                        lineHeight: expanded === index ? "170px" : "75px",
                      }}
                    >
                      {card.number}
                    </motion.span>
                  </motion.div>
                  {index === 0 && (
                    <motion.span
                      className="hidden md:block absolute bottom-10 left-0 right-0 whitespace-nowrap text-xs font-bold leading-[18px] text-white md:text-lg md:leading-[27px]"
                      style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "center",
                        opacity: expanded === 0 ? 0 : 1,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      HOVER TO LEARN MORE
                    </motion.span>
                  )}
                </motion.button>
                {expanded === index && (
                  <motion.div
                    className="flex-1 p-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    style={{ backgroundColor: "#FFF5F5" }}
                  >
                    <motion.h2
                      className="text-[30px] leading-[30px] md:text-[40px] font-extrabold md:leading-[60px]"
                      style={{ color: card.color }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {card.title}
                    </motion.h2>
                    <motion.ul
                      className="mt-8 space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {Array.isArray(card.description) &&
                        card.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                          >
                            <GoDotFill
                              className="mr-2 my-auto text-xl flex-shrink-0"
                              style={{ color: card.color }}
                            />
                            <span className="text-lg  md:text-[25px] md:leading-[53px] font-light">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                    </motion.ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
