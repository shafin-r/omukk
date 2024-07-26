import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "../anim/anim";
import Link from "../components/Link";

const navItems = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Works",
    href: "#works",
  },
  {
    title: "Contact",
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
      className="h-screen bg-[#424242] fixed right-0 top-0 text-white z-50"
    >
      <div className="box-border h-screen p-[100px] flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(window.location.pathname);
          }}
          className="flex flex-col gap-[12px] mt-[80px]"
        >
          <div className="text-[#ffffff] mb-[40px] border-b-2 w-full border-white font-Inter text-lg tracking-tighter">
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
        <div className="flex w-full justify-between text-lg gap-[40px]">
          <a className="text-white font-Inter tracking-tighter">Instagram</a>
          <a className="text-white font-Inter tracking-tighter">LinkedIn</a>
          <a className="text-white font-Inter tracking-tighter">GitHub</a>
          <a className="text-white font-Inter tracking-tighter">Demos</a>
        </div>
      </div>
    </motion.div>
  );
}
