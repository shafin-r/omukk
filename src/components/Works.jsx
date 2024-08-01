import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Works = () => {
  const workCountRef = useRef(null);
  const cursor = useRef(null);
  const [pointer, setPointer] = useState({ active: false });
  const { active } = pointer;

  useGSAP(() => {
    gsap.to(workCountRef.current, {
      scrollTrigger: {
        trigger: workCountRef.current,
        start: "top 20%",
        end: "+=1220px",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        pinSpacing: false,
      },
    });
  });
  return (
    <section
      className="h-auto flex flex-col lg:gap-32 gap-10 lg:px-[50px] px-8 py-10"
      id="works"
    >
      <section className="flex w-full">
        <div className=" text-[#d9d9d9]">
          <h1 className="font-helvetica  tracking-tighter lg:text-[160px] text-[55px] leading-[1.1em]">
            SELECTED WORKS /{" "}
            <span className="text-4xl lg:text-7xl tracking-widest">(2)</span>
          </h1>{" "}
        </div>
      </section>
      <section className="flex lg:flex-row flex-col w-full border-b-[1px] border-[#eee]/40 pb-10 ">
        <div className="lg:w-1/2 "></div>
        <div className="lg:w-1/2 flex lg:flex-row flex-col justify-evenly gap-4 lg:gap-0 ">
          <h3 className="font-jetbrain tracking-tighter lg:text-2xl text-xl text-[#d9d9d9]/60">
            (PROJECTS)
          </h3>
          <p className="font-helvetica tracking-tight lg:text-3xl text-xl text-[#d9d9d9] lg:w-1/2">
            Here are some of our projects where we have extolled our utmost
            passion and creativitiy onto.
          </p>
        </div>
      </section>
      <section className="flex my-6">
        <h1
          ref={workCountRef}
          className="hidden lg:block font-helvetica text-[450px] text-[#d9d9d9] leading-[10rem]"
        >
          01.
        </h1>
        <div className="lg:pl-10 flex flex-col gap-20 lg:w-[64vw] justify-center lg:items-center z-10">
          <section
            onMouseEnter={() => setPointer({ active: true })}
            onMouseLeave={() => setPointer({ active: false })}
            className="flex flex-col gap-6 cursor-pointer"
          >
            <div className="">
              <img src="/rota-egpyt.png" alt="" className="" />
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between lg:items-center">
              <h1 className="font-helvetica text-[#d9d9d9] tracking-tighter lg:text-6xl text-4xl">
                Rota Egypt
              </h1>
              <div className="flex gap-4">
                <h3 className="text-[#d9d9d9] font-jetbrain ring-2 ring-[#d9d9d9] px-4 py-1 rounded-full text-sm lg:text-lg">
                  DESIGN
                </h3>
                <h3 className="text-[#d9d9d9] font-jetbrain ring-2 ring-[#d9d9d9] px-4 py-1 rounded-full text-sm lg:text-lg">
                  DEVELOPMENT
                </h3>
                <h3 className="text-[#0b0b0b] bg-[#d9d9d9] font-jetbrain ring-2 ring-[#d9d9d9] px-4 py-1 rounded-full text-sm lg:text-lg">
                  2023
                </h3>
              </div>
            </div>
          </section>
          <section
            onMouseEnter={() => setPointer({ active: true })}
            onMouseLeave={() => setPointer({ active: false })}
            className="flex flex-col gap-6 cursor-pointer"
          >
            <div className="">
              <img src="/rota-germany.png" alt="" className="" />
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between lg:items-center">
              <h1 className="font-helvetica text-[#d9d9d9] tracking-tighter lg:text-6xl text-4xl">
                Rota Germany
              </h1>
              <div className="flex gap-4">
                <h3 className="text-[#d9d9d9] font-jetbrain ring-2 ring-[#d9d9d9] px-4 py-1 rounded-full text-sm lg:text-lg">
                  DESIGN
                </h3>
                <h3 className="text-[#d9d9d9] font-jetbrain ring-2 ring-[#d9d9d9] px-4 py-1 rounded-full text-sm lg:text-lg">
                  DEVELOPMENT
                </h3>
                <h3 className="text-[#0b0b0b] bg-[#d9d9d9] font-jetbrain ring-2 ring-[#d9d9d9] px-4 py-1 rounded-full text-sm lg:text-lg">
                  2022
                </h3>
              </div>
            </div>
          </section>
        </div>
      </section>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-12 w-28 bg-white text-black flex justify-center items-center rounded-2xl font-jetbrain cursor-pointer"
      >
        View
      </motion.div>
    </section>
  );
};

export default Works;
