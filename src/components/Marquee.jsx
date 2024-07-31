import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Marquee = () => {
  useGSAP(() => {
    let currentScroll = 0;
    let isScrollingDown = true;

    let tween = gsap
      .to("#marquee__part", {
        xPercent: -200,
        repeat: -1,
        duration: 5,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set("#marquee__inner", { xPercent: -50 });

    window.addEventListener("scroll", function () {
      if (this.window.scrollY > currentScroll) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }

      gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
      });

      currentScroll = window.scrollY;
    });
  });

  return (
    <section className="relative bg-[#d9d9d9]  overflow-hidden" id="marquee">
      <div className="flex w-fit flex-auto flex-row" id="marquee__inner">
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DESIGN
          <div>
            <img
              className="w-[60px] h-[80px] mx-[1em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEVELOP
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEPLOY
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DESIGN
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEVELOP
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEPLOY
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DESIGN
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEVELOP
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEPLOY
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DESIGN
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEVELOP
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEPLOY
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DESIGN
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEVELOP
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
        <div
          id="marquee__part"
          className="flex items-center shrink-0 font-helvetica tracking-tighter font-extrabold text-6xl text-[0b0b0b]"
        >
          DEPLOY
          <div>
            <img
              className="w-[60px] h-[80px] mx-[0.5em]"
              src="/logo-icon-black.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
