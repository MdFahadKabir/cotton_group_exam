"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const links = ["home", "about us", "videos", "SDG's", "partners"];
  const socials = [
    { icon: FaFacebook, href: "#" },
    { icon: FaPhone, href: "tel:#" },
    { icon: FaEnvelope, href: "mailto:#" },
  ];

  return (
    <>
      <nav className=" lg:flex justify-between items-center p-5 bg-transparent mx-5 md:mx-20">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            {" "}
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
              className="w-[73px] h-[62px] md:w-[99px] md:h-[86px]"
            />
          </Link>

          <div className="hidden md:block">
            <ul className="  flex space-x-6 text-base font-semibold leading-[24px]">
              {links.map((link) => (
                <motion.li
                  key={link}
                  className={`relative px-4 py-2 rounded-lg cursor-pointer  ${
                    activeLink === link
                      ? "bg-custom_green_dark text-white pointer-events-none"
                      : "hover:text-custom_green_dark text-gray-600"
                  }`}
                  onClick={() => setActiveLink(link)}
                >
                  <AnimatePresence>
                    {activeLink !== link && (
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-custom_green_dark rounded-full opacity-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>

                  <motion.span
                    className="block "
                    initial={false}
                    animate={{
                      x: activeLink === link ? 0 : 8,
                      opacity: activeLink === link ? 1 : 0.7,
                    }}
                    whileHover={{ x: 12, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" lg:hidden  p-2   rounded-full"
          >
            {isOpen ? (
              <IoArrowForward
                size={24}
                className="fixed top-10 right-10 z-50 text-white"
              />
            ) : (
              <CgMenuRight size={24} className="text-custom_green_dark" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 lg:hidden bg-custom_green_dark z-40"
            style={{
              backgroundImage: `repeating-linear-gradient(
                to right,
                transparent,
                transparent 29px,
                rgba(255, 255, 255, 0.1) 29px,
                rgba(255, 255, 255, 0.1) 30px
              )`,
            }}
          >
            <nav className="h-full flex flex-col justify-between p-8">
              <ul className="space-y-6 mt-16">
                {links.map((link) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className={`cursor-pointer ${
                      activeLink === link ? "text-white" : "text-green-200"
                    }`}
                    onClick={() => {
                      setActiveLink(link);
                      setIsOpen(false);
                    }}
                  >
                    <span
                      className={activeLink === link ? "text-2xl" : "text-xl"}
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex space-x-6">
                {socials.map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-white hover:text-green-200 transition-colors"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
