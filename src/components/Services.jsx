import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ImMap } from "react-icons/im";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  ScrollTrigger.create({
    trigger: ".web-section",
    start: "top 20%",
    end: "+=200px",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    pinSpacing: false,
  });
  ScrollTrigger.create({
    trigger: ".desktop-section",
    start: "top 32%",
    end: "+=1800px",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    pinSpacing: false,
  });
  ScrollTrigger.create({
    trigger: ".mobile-section",
    start: "top 44%",
    end: "+=1200px",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    pinSpacing: false,
  });
  ScrollTrigger.create({
    trigger: ".devops-section",
    start: "top 56%",
    end: "+=600px",
    scrub: true,
    pin: true,
    anticipatePin: 1,
    pinSpacing: false,
  });

  return (
    <div className="text-white py-10 start-point h-[3200px]">
      <section className="flex flex-col pb-10">
        <div>
          <div className="w-1/2 text-[6vw] font-Inter tracking-tighter font-bold">
            <h1>WHAT WE DO /</h1>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="flex">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex">
            <h3 className="w-1/6 font-Inter tracking-tighter text-2xl opacity-50">
              (SERVICES)
            </h3>
            <p className="w-3/4 font-Inter tracking-tight text-2xl px-10">
              We offer our expertise in many different fields with utmost
              precision and elegant craftsmanship.
            </p>
          </div>
        </div>
        <div className="starting-pointer"></div>
      </section>
      <section className="">
        <section
          className="web-section h-[600px] pt-4 flex flex-col gap-6 border-t-[1px] border-[#eee]/40 pb-60 mb-10"
          id="web-section"
        >
          <div className="flex justify-between items-center">
            <h1 className="font-Inter font-semibold tracking-tighter text-5xl">
              Web
            </h1>
            <ImMap size={30} className="text-[#eee]/40" />
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <p className="font-Inter text-xl tracking-tighter w-2/3">
                We design and create unique, custom-coded websites that are
                tailored to your brand. We focus on scalability, performance,
                accessibility, and engaging animations for a memorable
                experience.
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
              <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">01</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Web Development
                </h1>
              </div>
              <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">02</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Web Design
                </h1>
              </div>
              <div className="flex gap-10 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">03</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Search Engine Opimitization
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section
          className="desktop-section h-[600px] pt-4 flex flex-col gap-6 border-t-[1px] border-[#eee]/40 pb-60 mb-10 z-10 bg-[#0b0b0b]"
          id="desktop-section"
        >
          <div className="flex justify-between items-center">
            <h1 className="font-Inter font-semibold tracking-tighter text-5xl">
              Desktop
            </h1>
            <ImMap size={30} className="text-[#eee]/40" />
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <p className="font-Inter text-xl tracking-tighter w-2/3">
                We design and create unique, custom-coded websites that are
                tailored to your brand. We focus on scalability, performance,
                accessibility, and engaging animations for a memorable
                experience.
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
              <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">01</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Web Development
                </h1>
              </div>
              <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">02</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Web Design
                </h1>
              </div>
              <div className="flex gap-10 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">03</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold mobile-section">
                  Search Engine Opimitization
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section
          className="mobile-section h-[600px] pt-4 flex flex-col gap-6 border-t-[1px] border-[#eee]/40 pb-60 mb-10 z-20 bg-[#0b0b0b]"
          id="mobile-section"
        >
          <div className="flex justify-between items-center">
            <h1 className="font-Inter font-semibold tracking-tighter text-5xl">
              Mobile
            </h1>
            <ImMap size={30} className="text-[#eee]/40" />
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <p className="font-Inter text-xl tracking-tighter w-2/3">
                We design and create unique, custom-coded websites that are
                tailored to your brand. We focus on scalability, performance,
                accessibility, and engaging animations for a memorable
                experience.
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
              <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">01</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Web Development
                </h1>
              </div>
              <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">02</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Web Design
                </h1>
              </div>
              <div className="flex gap-10 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">03</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Search Engine Opimitization
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section
          className="devops-section h-[600px] pt-4 flex flex-col gap-6 border-t-[1px] border-[#eee]/40 pb-60 mb-10 z-30 bg-[#0b0b0b]"
          id="devops-section"
        >
          <div className="flex justify-between items-center">
            <h1 className="font-Inter font-semibold tracking-tighter text-5xl">
              DevOps
            </h1>
            <ImMap size={30} className="text-[#eee]/40" />
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <p className="font-Inter text-xl tracking-tighter w-2/3">
                We design and create unique, custom-coded websites that are
                tailored to your brand. We focus on scalability, performance,
                accessibility, and engaging animations for a memorable
                experience.
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
              <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">01</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Web Development
                </h1>
              </div>
              <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">02</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Web Design
                </h1>
              </div>
              <div className="flex gap-10 pb-4">
                <h2 className="font-Inter tracking-tighter text-2xl">03</h2>
                <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                  Search Engine Opimitization
                </h1>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
