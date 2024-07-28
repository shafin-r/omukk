import React from "react";
import HoverBar from "./HoverBar";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <div className="bg-white py-8 px-12 h-full w-full flex flex-col justify-between rounded-t-3xl overflow-hidden">
      <NavMenu />
    </div>
  );
}

const NavMenu = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const TextScroll = ({ text, slider }) => {
  return (
    <div className="absolute bottom-0">
      <div className="scroll-text relative flex items-center gap-4 whitespace-nowrap">
        <img src="/logo-icon-black.svg" alt="" className="h-[75px] w-[75px]" />
        <h1 className=" relative m-0 text-[100px] tracking-tighter font-medium ">
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
        </h1>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex w-full">
      <div className="lg:w-1/3 flex flex-col gap-4">
        <h1 className="font-Inter text-3xl text-black tracking-tighter font-medium">
          SOCIALS
        </h1>
        <div className="flex gap-3 z-10">
          <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden whitespace-nowrap w-fit px-4 py-2 ring-2 rounded-full ring-black"
          >
            <motion.a
              initial="initial"
              whileHover="hovered"
              href="www.hello.com"
              className="relative block overflow-hidden whitespace-nowrap text-sm font-Inter tracking-tight w-fit leading-4"
            >
              <motion.div
                variants={{
                  initial: { y: 0, color: "black" },
                  hovered: { y: "-100%", color: "white" },
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
                  initial: { y: "100%", color: "white" },
                  hovered: { y: 0, color: "white" },
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
            className="relative block overflow-hidden whitespace-nowrap  w-fit px-4 py-2 ring-2 rounded-full ring-black"
          >
            <motion.a
              initial="initial"
              whileHover="hovered"
              href="www.hello.com"
              className="relative block overflow-hidden whitespace-nowrap text-sm font-Inter tracking-tight w-fit leading-4"
            >
              <motion.div
                variants={{
                  initial: { y: 0, color: "black" },
                  hovered: { y: "-100%", color: "white" },
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
                  initial: { y: "100%", color: "white" },
                  hovered: { y: 0, color: "white" },
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
            className="relative block overflow-hidden whitespace-nowrap  w-fit px-4 py-2 ring-2 rounded-full ring-black"
          >
            <motion.a
              initial="initial"
              whileHover="hovered"
              href="www.hello.com"
              className="relative block overflow-hidden whitespace-nowrap text-sm font-Inter tracking-tight w-fit leading-4"
            >
              <motion.div
                variants={{
                  initial: { y: 0, color: "black" },
                  hovered: { y: "-100%", color: "white" },
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
                  initial: { y: "100%", color: "white" },
                  hovered: { y: 0, color: "white" },
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
      <div className="lg:w-1/3 flex flex-col gap-4">
        <h1 className="font-Inter text-3xl text-black tracking-tighter font-medium">
          CONTACTS
        </h1>
        <motion.a
          initial="initial"
          whileHover="hovered"
          href="mailto:contact@omukk.dev"
          className="relative block overflow-hidden whitespace-nowrap text-lg font-Inter tracking-tight w-fit leading-5"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
          >
            contact@omukk.dev
          </motion.div>
          <motion.div
            className="absolute inset-0"
            variants={{
              initial: { y: "100%" },
              hovered: { y: "0" },
            }}
          >
            contact@omukk.dev
          </motion.div>
        </motion.a>
      </div>
      <div className="lg:w-1/3 flex flex-col gap-4">
        <h1 className="font-Inter text-3xl text-black tracking-tighter font-medium">
          LOCATION
        </h1>
        <p className="font-Inter tracking-tight text-lg w-fit">
          Dhaka, Bangladesh
        </p>
      </div>
    </div>
  );
};
