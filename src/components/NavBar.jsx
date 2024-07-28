import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "../anim/anim";
import Link from "../components/Link";

const navItems = [
  {
    title: "HOME",
    href: "#",
  },
  {
    title: "ABOUT",
    href: "#about",
  },
  {
    title: "SERVICES",
    href: "#services",
  },
  {
    title: "WORKS",
    href: "#works",
  },
  {
    title: "CONTACT",
    href: "#contact",
  },
];

export default function NavBar() {
  const [selectedIndicator, setSelectedIndicator] = useState(
    window.location.pathname
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setSelectedIndicator(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-[#313131] fixed right-0 top-0 text-white -z-10"
    >
      <div className="fixed left-96 -top-32 -z-50 w-[500px] h-[500px] bg-[#5a5a5a] rounded-full"></div>
      <div className="fixed left-80 -top-52 -z-50 w-[500px] h-[500px] bg-[#b1b1b1] rounded-full"></div>
      <div className="box-border h-screen pr-60 pt-20 pb-10 pl-20 flex flex-col justify-between ">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(window.location.pathname);
          }}
          className="flex flex-col w-full"
        >
          <div className="text-[#ffffff] mb-[40px] border-b-2 border-white font-Inter text-lg tracking-tighter">
            <p>NAVIGATION</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>

        <div className="flex flex-col justify-between text-lg gap-8">
          <div>
            <h1 className="font-Inter font-bold tracking-tighter text-2xl text-[#9e9e9e]">
              EMAIL ADDRESS
            </h1>
            <motion.a
              initial="initial"
              whileHover="hovered"
              href="mailto:contact@omukk.dev"
              className="relative block overflow-hidden whitespace-nowrap text-sm font-Inter  tracking-tight w-fit leading-4"
            >
              <motion.div
                variants={{
                  initial: { y: 0 },
                  hovered: { y: "-100%" },
                }}
              >
                CONTACT@OMUKK.DEV
              </motion.div>
              <motion.div
                className="absolute inset-0"
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: "0" },
                }}
              >
                CONTACT@OMUKK.DEV
              </motion.div>
            </motion.a>
          </div>
          <div className="flex gap-4">
            <motion.div
              initial="initial"
              whileHover="hovered"
              className="relative block overflow-hidden whitespace-nowrap w-fit px-4 py-2 ring-2 rounded-full ring-white"
            >
              <motion.a
                initial="initial"
                whileHover="hovered"
                href="www.hello.com"
                className="relative block overflow-hidden whitespace-nowrap text-sm font-Inter tracking-tight w-fit leading-4"
              >
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%" },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  INSTAGRAM
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  INSTAGRAM
                </motion.div>
              </motion.a>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FCAF45] via-[#FD1D1D] to-[#405DE6] -z-10 rounded-full"
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
            <motion.div
              initial="initial"
              whileHover="hovered"
              className="relative block overflow-hidden whitespace-nowrap  w-fit px-4 py-2 ring-2 rounded-full ring-white"
            >
              <motion.a
                initial="initial"
                whileHover="hovered"
                href="www.hello.com"
                className="relative block overflow-hidden whitespace-nowrap text-sm font-Inter tracking-tight w-fit leading-4"
              >
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%" },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  LINKEDIN
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  LINKEDIN
                </motion.div>
              </motion.a>
              <motion.div
                className="absolute inset-0 bg-[#175792] -z-10 rounded-full"
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
            <motion.div
              initial="initial"
              whileHover="hovered"
              className="relative block overflow-hidden whitespace-nowrap  w-fit px-4 py-2 ring-2 rounded-full ring-white"
            >
              <motion.a
                initial="initial"
                whileHover="hovered"
                href="www.hello.com"
                className="relative block overflow-hidden whitespace-nowrap text-sm font-Inter tracking-tight w-fit leading-4"
              >
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    hovered: { y: "-100%" },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  GITHUB
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    initial: { y: "100%" },
                    hovered: { y: 0 },
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  GITHUB
                </motion.div>
              </motion.a>
              <motion.div
                className="absolute inset-0 bg-[#0B0B0B] -z-10 rounded-full"
                variants={{
                  initial: { y: "100%" },
                  hovered: { y: 0 },
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
