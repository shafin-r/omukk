import React, { useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(useGSAP);

const Works = () => {
  useGSAP(() => {
    const timeline = document.querySelector("#timeline");
    const scroller = document.querySelector("#scroller");
    const container = document.querySelector("#gallery__container");
    const timelineWidth = timeline.offsetWidth;
    const scrollerWidth = scroller.offsetWidth;
    const gap = parseInt(window.getComputedStyle(document.body).fontSize);

    const maxDragX = timelineWidth - scrollerWidth - 2 * gap;

    for (let i = 0; i < 15; i++) {
      const marker = document.createElement("div");
      marker.classList.add("marker");
      timeline.appendChild(marker);
    }

    Draggable.create(scroller, {
      type: "x",
      bounds: {
        minX: gap,
        maxX: timelineWidth - scrollerWidth - gap,
      },
      onDrag: function () {
        let progress = (this.x - gap) / maxDragX;
        let containerX = -400 * (timelineWidth / 100) * progress;
        gsap.to(container, {
          x: containerX,
          duration: 1,
          ease: "power2.out",
        });
      },
    });
  });

  return (
    <section
      className="relative flex flex-col items-start h-screen px-[60px] overflow-hidden"
      id="works"
    >
      <div className="flex w-full">
        <h1 className="font-helvetica tracking-tighter text-[100px] text-[#d9d9d9] ">
          SELECTED WORKS /
        </h1>
      </div>
      <div className="flex w-full ">
        <div className="w-1/2 "></div>
        <div className="w-1/2 flex justify-evenly ">
          <h3 className="font-jetbrain tracking-tighter text-xl text-[#d9d9d9]">
            (PROJECTS)
          </h3>
          <p className="font-helvetica tracking-tight text-xl text-[#d9d9d9] w-1/2">
            Here are some of our projects where we have extolled our utmost
            passion and creativitiy onto.
          </p>
        </div>
      </div>
      <div className="w-full h-[67vh] flex gap-20 py-6" id="gallery__container">
        <section className="flex gap-20">
          <section className="relative h-full flex gap-[2rem]" id="project1">
            <h1 className="font-helvetica text-[#d9d9d9] tracking-tighter text-7xl text-nowrap">
              Rota Egypt
            </h1>
          </section>
          <section id="img1" className="relative w-[60vw] ">
            <img
              src="/rota-egpyt.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </section>
        </section>
        <section className="flex gap-20">
          <section className="relative h-full flex gap-[2rem]" id="project1">
            <h1 className="font-helvetica text-[#d9d9d9] tracking-tighter text-7xl text-nowrap">
              Rota Germany
            </h1>
          </section>
          <section id="img1" className="relative w-[60vw] ">
            <img
              src="/rota-germany.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </section>
        </section>
      </div>
      <div
        id="timeline"
        className="absolute bottom-10 left-0 w-full flex justify-around px-10"
      >
        <div className="marker"></div>
        <div
          id="scroller"
          className="absolute top-[50%] left-0 translate-x-[0%] -translate-y-[50%] cursor-pointer flex items-center "
        >
          <p className="group text-[#d9d9d9] font-jetbrain flex items-center bg-[#0b0b0b] text-xl">
            <span className="group-hover:-translate-x-2 group-hover:scale-110 transition duration-300 ease-in-out">
              [
            </span>
            <span className="font-jetbrain tracking-tighter text-[#d9d9d9] py-0 px-[2rem] ">
              Drag
            </span>
            <span className="group-hover:translate-x-2 group-hover:scale-110  transition duration-300 ease-in-out">
              ]
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
