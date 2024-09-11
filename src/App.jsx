// SVG imports
import { HiArrowLongRight, HiGlobeAmericas } from "react-icons/hi2";
import { HiTerminal } from "react-icons/hi";

// Third Party imports
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";

// Custom Components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Works from "./components/Works";
import Preloader from "./components/Preloader";

// GSAP Import
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdMonitor } from "react-icons/md";
import { BiMobile } from "react-icons/bi";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [circlePos, setCirclePos] = useState({ top: "50%", left: "50%" });
  const [isActive, setIsActive] = useState(null);
  const webRef = useRef(null);
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const devopsRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const aboutRef = useRef(null);
  const mm = gsap.matchMedia();

  const about =
    "Omukk is a Bangladesh-based technology solution team dedicated to help startups and businesses to grow their impacts. Besides contact-based works, Omukk has its own projects that are constantly tested and upgraded for better uses.";

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    const scale = 0.05; // Adjust this value to control the sensitivity
    const newLeft = centerX - distanceX * scale;
    const newTop = centerY - distanceY * scale;

    setCirclePos({
      left: `${newLeft}px`,
      top: `${newTop}px`,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const circleRef = useRef(null);
  useGSAP(() => {
    mm.add("(min-width: 480px", () => {
      ScrollTrigger.create({
        trigger: webRef.current,
        start: "top 20%",
        end: () => {
          const screenHeight = window.innerHeight;
          return `+=${screenHeight * 2.19}px`; // For example, half of the screen height
        },
        scrub: true,
        pin: true,
        markers: true,
        anticipatePin: 1,
        pinSpacing: false,
      });
      ScrollTrigger.create({
        trigger: desktopRef.current,
        start: "top 30%",
        end: () => {
          const screenHeight = window.innerHeight;
          return `+=${screenHeight * 1.64}px`; // For example, half of the screen height
        },
        scrub: true,
        pin: true,
        markers: true,
        anticipatePin: 1,
        pinSpacing: false,
      });
      ScrollTrigger.create({
        trigger: mobileRef.current,
        start: "top 40%",
        end: () => {
          const screenHeight = window.innerHeight;
          return `+=${screenHeight * 1.09}px`; // For example, half of the screen height
        },
        scrub: true,
        markers: true,
        pin: true,
        anticipatePin: 1,
        pinSpacing: false,
      });
      ScrollTrigger.create({
        trigger: devopsRef.current,
        start: "top 50%",
        end: () => {
          const screenHeight = window.innerHeight;
          return `+=${screenHeight * 0.54}px`; // For example, half of the screen height
        },
        scrub: true,
        markers: true,
        pin: true,
        anticipatePin: 1,
        pinSpacing: false,
      });
    });

    mm.add("(max-width: 479px)", () => {
      gsap.to(logoRef.current, {
        scrollTrigger: {
          trigger: logoRef.current,
          start: "30% 50%",
          end: () => {
            // Calculate the end value based on screen size
            const screenHeight = window.innerHeight;
            return `+=${screenHeight * 0.9}px`; // For example, half of the screen height
          },
          scrub: 1,
        },
        y: () => {
          const screenHeight = window.innerHeight;
          if (screenHeight < 900) {
            return screenHeight * 0.5;
          } else {
            return screenHeight * 0.5;
          }
        },
        x: -10,
        duration: 5,
        ease: "sine.inOut",
      });
    });
    mm.add("(min-width: 480px", () => {
      gsap.to(logoRef.current, {
        scrollTrigger: {
          trigger: logoRef.current,
          start: "30% 50%",
          end: "+=400px",
          scrub: 1,
        },
        scale: 0.6,
        x: -160,
        y: 435,
        duration: 5,
        ease: "sine.inOut",
      });
    });
    mm.add("(min-width: 480px", () => {
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "700px 30%",
          end: "+=300px",
          scrub: 1,
        },
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    });

    gsap.to(circleRef.current, {
      left: `${circlePos.left}`,
      top: `${circlePos.top}`,
      duration: 2, // Adjust this value to control the lag effect
      ease: "power3.out",
    });
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-[#0B0B0B] box-border h-full">
        <div>
          <div
            ref={circleRef}
            className="lg:block hidden px-4 fixed opacity-10  m-auto rounded-full w-[600px] h-[600px] bg-gradient-to-t from-[#0B0B0B] to-[#B8BBFF]"
            style={{
              top: circlePos.top,
              left: circlePos.left,
              transform: "translate(-50%, -50%)",
            }}
          ></div>
          <div
            ref={navRef}
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="lg:scale-0 fixed right-0 top-0 lg:right-10 m-[20px] z-[10000] flex items-center justify-center"
          >
            <div className="w-[80px] h-[80px] bg-[#525252] rounded-full cursor-pointer">
              <div
                className={`w-full before:block before:h-[2px] before:w-[60%] before:m-auto before:bg-white before:relative before:transition before:duration-300 after:block after:h-[2px] after:w-[60%] after:m-auto after:bg-white after:relative after:transition after:duration-300 before:top-[35px] after:top-[40px] ${
                  isActive
                    ? "after:rotate-45 before:-rotate-45 before:left-0 before:top-9 after:left-0 after:top-9 cursor-pointer"
                    : ""
                }`}
              ></div>
            </div>
            <AnimatePresence mode="wait">
              {isActive && <NavBar />}
            </AnimatePresence>
          </div>
          <div>
            <section className="h-screen flex flex-col lg:justify-between justify-center items-center lg:items-stretch z-10 lg:p-[40px] p-8">
              <div className="flex flex-row items-center lg:items-start lg:justify-between justify-center text-xl lg:text-md gap-2 lg:gap-0 w-full">
                <div className=" lg:hidden block">
                  <img
                    src="/logo/logo-icon-white.svg"
                    alt=""
                    className="lg:h-20 lg:w-20 h-80 w-80"
                  />
                </div>
                <div className="hidden lg:flex lg:flex-row flex-col items-end lg:items-start justify-between text-xl lg:text-md gap-2 lg:gap-0 w-full">
                  <div>
                    <motion.a
                      initial="initial"
                      whileHover="hovered"
                      href="#about"
                      className="relative block overflow-hidden whitespace-nowrap font-jetbrain  w-fit leading-4 text-[#d9d9d9]"
                    >
                      <motion.div
                        variants={{
                          initial: { y: 0 },
                          hovered: { y: "-100%" },
                        }}
                      >
                        ABOUT
                      </motion.div>
                      <motion.div
                        className="absolute inset-0"
                        variants={{
                          initial: { y: "100%" },
                          hovered: { y: "0" },
                        }}
                      >
                        ABOUT
                      </motion.div>
                    </motion.a>
                  </div>
                  <div className="flex lg:flex-row flex-col lg:w-1/3 items-end lg:items-start justify-between gap-2 lg:gap-0">
                    <motion.a
                      initial="initial"
                      whileHover="hovered"
                      href="#services"
                      className="relative block overflow-hidden whitespace-nowrap font-jetbrain  w-fit leading-4 text-[#d9d9d9]"
                    >
                      <motion.div
                        variants={{
                          initial: { y: 0 },
                          hovered: { y: "-100%" },
                        }}
                      >
                        SERVICES
                      </motion.div>
                      <motion.div
                        className="absolute inset-0"
                        variants={{
                          initial: { y: "100%" },
                          hovered: { y: "0" },
                        }}
                      >
                        SERVICES
                      </motion.div>
                    </motion.a>
                    <motion.a
                      initial="initial"
                      whileHover="hovered"
                      href="#works"
                      className="relative block overflow-hidden whitespace-nowrap font-jetbrain  w-fit leading-4 text-[#d9d9d9]"
                    >
                      <motion.div
                        variants={{
                          initial: { y: 0 },
                          hovered: { y: "-100%" },
                        }}
                      >
                        SELECTED WORKS
                      </motion.div>
                      <motion.div
                        className="absolute inset-0"
                        variants={{
                          initial: { y: "100%" },
                          hovered: { y: "0" },
                        }}
                      >
                        SELECTED WORKS
                      </motion.div>
                    </motion.a>
                  </div>
                  <div>
                    <motion.a
                      initial="initial"
                      whileHover="hovered"
                      href="#contact"
                      className="relative block overflow-hidden whitespace-nowrap font-jetbrain  w-fit leading-4 text-[#d9d9d9]"
                    >
                      <motion.div
                        variants={{
                          initial: { y: 0 },
                          hovered: { y: "-100%" },
                        }}
                      >
                        CONTACT
                      </motion.div>
                      <motion.div
                        className="absolute inset-0"
                        variants={{
                          initial: { y: "100%" },
                          hovered: { y: "0" },
                        }}
                      >
                        CONTACT
                      </motion.div>
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <h1 className="lg:block hidden font-helvetica text-[#d9d9d9] text-4xl tracking-tight lg:w-1/3">
                  // A group of creative thinkers making things smarter, newer
                  and more memorable.
                </h1>
              </div>
              <div className="flex gap-4 ">
                <h1
                  ref={logoRef}
                  className="font-Inter text-[#d9d9d9] text-[5em] lg:text-[350px] tracking-tighter z-50"
                >
                  OMUKK
                </h1>
              </div>
            </section>
            <section className="h-screen" id="about">
              <div className="w-full h-1/4"></div>
              <div className="flex flex-col lg:flex-row justify-center px-6 lg:px-0">
                <div className="lg:w-1/2 lg:h-auto h-10 w-1/2"></div>
                <div className="lg:w-1/2 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-evenly">
                  <h3 className="lg:w-1/6 font-jetbrain tracking-tighter text-2xl text-[#d9d9d9]">
                    (ABOUT)
                  </h3>
                  <p className="font-helvetica tracking-tighter text-3xl lg:w-1/2 w-full text-[#d9d9d9]">
                    {about}
                  </p>
                </div>
              </div>
            </section>
            <section
              id="services"
              className="text-white h-[220em] lg:h-[200em] box-border lg:px-[40px] lg:p-[40px] px-8"
            >
              <section className="flex flex-col pb-10">
                <div className="">
                  <div className="lg:w-3/4 w-full">
                    <h1 className="lg:text-[160px] text-[#d9d9d9] text-5xl font-helvetica tracking-tighter lg:mr-20">
                      WHAT WE DO /
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-0 gap-10">
                  <div className="lg:w-1/2"></div>
                  <div className="lg:w-1/2 flex flex-col lg:flex-row lg:gap-0 gap-6 justify-evenly">
                    <div className="flex flex-col lg:flex-row lg:gap-32 gap-4">
                      <h3 className="lg:w-1/6 font-jetbrain tracking-tighter lg:text-2xl text-xl opacity-50">
                        (SERVICES)
                      </h3>
                      <p className="lg:w-1/2 font-Inter tracking-tight lg:text-2xl text-2xl">
                        We offer our expertise in many different fields with
                        utmost precision and elegant craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="h-full box-border">
                <section
                  ref={webRef}
                  className="h-[50em] lg:h-[600px] flex flex-col gap-6 border-t-[1px] border-[#eee]/40 w-full bg-[#0b0b0b] pt-4"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="w-full flex justify-between font-Inter font-semibold tracking-tighter text-5xl">
                      Web
                      <HiGlobeAmericas />
                    </h1>
                  </div>
                  <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full">
                    <div className="lg:w-1/2">
                      <p className="font-Inter text-xl tracking-tighter lg:w-2/3">
                        At Omukk, we transform your digital vision into reality
                        with our cutting-edge web wdevelopment services. From
                        sleek, responsive websites to powerful web aplpications,
                        our team crafts seamless user experiences that cpativate
                        and convert.
                      </p>
                    </div>
                    <div className="lg:w-1/2 flex flex-col gap-6">
                      <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          01
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          Web Application Development
                        </h1>
                      </div>
                      <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          02
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          Web Design
                        </h1>
                      </div>
                      <div className="flex gap-10 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          03
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          E-Commerce Solutions
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  ref={desktopRef}
                  className="desktop-section h-[50em] lg:h-[600px] flex flex-col gap-6 border-t-[1px] border-[#eee]/40 bg-[#0b0b0b] pt-4"
                >
                  <div className="flex justify-between items-center">
                    <h1 className=" flex w-full justify-between font-Inter font-semibold tracking-tighter text-5xl">
                      Desktop
                      <MdMonitor />
                    </h1>
                  </div>
                  <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full">
                    <div className="lg:w-1/2">
                      <p className="font-Inter text-xl tracking-tighter lg:w-2/3">
                        Experience the power of custom desktop applications with
                        Omukk. We specialize in developing robust,
                        high-performance desktop solutions that meet your unique
                        business needs. Our desktop applications are designed
                        for efficiency and ease of use, helping you streamline
                        processes and achieve your goals with precision.
                      </p>
                    </div>
                    <div className="lg:w-1/2 flex flex-col gap-6">
                      <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          01
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          Windows Application Development
                        </h1>
                      </div>
                      <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          02
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          MacOS Application Development
                        </h1>
                      </div>
                      <div className="flex gap-10 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          03
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          Cross-Platform Desktop Applications
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  ref={mobileRef}
                  className="mobile-section h-[50em] lg:h-[600px] flex flex-col gap-6 border-t-[1px] border-[#eee]/40 bg-[#0b0b0b] pt-4"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="w-full flex justify-between font-Inter font-semibold tracking-tighter text-5xl">
                      Mobile
                      <BiMobile />
                    </h1>
                  </div>
                  <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full">
                    <div className="lg:w-1/2">
                      <p className="font-Inter text-xl tracking-tighter lg:w-2/3">
                        Elevate your brand’s presence with our bespoke mobile
                        development services. At Omukk, we design and develop
                        intuitive and feature-rich mobile applications tailored
                        to both iOS and Android platforms. Our solutions ensure
                        that your app stands out in the crowded marketplace,
                        providing users with exceptional functionality and a
                        delightful experience.
                      </p>
                    </div>
                    <div className="lg:w-1/2 flex flex-col gap-6">
                      <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          01
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          iOS App Development
                        </h1>
                      </div>
                      <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          02
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          Android App Development
                        </h1>
                      </div>
                      <div className="flex gap-10 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          03
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          Cross-Platform Mobile Apps
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  ref={devopsRef}
                  className="h-[50em] lg:h-[600px] flex flex-col gap-6 border-t-[1px] border-[#eee]/40 bg-[#0b0b0b] pt-4"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="w-full flex justify-between font-Inter font-semibold tracking-tighter text-5xl">
                      DevOps
                      <HiTerminal />
                    </h1>
                  </div>
                  <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full">
                    <div className="lg:w-1/2">
                      <p className="font-Inter text-xl tracking-tighter lg:w-2/3">
                        Streamline your operations and accelerate your
                        deployment cycles with our expert DevOps services. At
                        Omukk, we integrate development and operations to create
                        a seamless workflow, enhancing collaboration and
                        optimizing performance.
                      </p>
                    </div>
                    <div className="lg:w-1/2 flex flex-col gap-6">
                      <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          01
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-3xl text-2xl font-semibold">
                          Continuous Integration and Continuous Deployment
                          (CI/CD)
                        </h1>
                      </div>
                      <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          02
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          Infrastructure Automation
                        </h1>
                      </div>
                      <div className="flex gap-10 pb-4">
                        <h2 className="font-Inter tracking-tighter lg:text-2xl">
                          03
                        </h2>
                        <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                          Cloud Services and Management
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </section>
            <Works id="works" />
            <section
              className="h-screen relative flex flex-col gap-16 lg:gap-24 lg:px-[80px]"
              id="contact"
            >
              <div className="lg:h-3/4">
                <div className=" py-8 flex items-center justify-center lg:justify-start">
                  <img
                    src="/logo/logo-icon-white.svg"
                    alt=""
                    className="h-10 w-10"
                  />
                </div>
                <div className=" flex flex-col items-center gap-6 mt-32">
                  <h1 className="font-Inter text-5xl lg:text-[7rem] text-[#D9D9D9] font-semibold tracking-tighter text-center">
                    WANT TO TALK <br /> WITH US?
                  </h1>
                  <button className="px-5 py-2 bg-white flex gap-2 items-center rounded-full hover:bg-black hover:ring-1 hover:text-white hover:ring-white transition duration-300 ease-in-out font-Inter tracking-tighter text-xl lg:text-2xl ">
                    <HiArrowLongRight size={30} className="" />
                    Send us an email
                  </button>
                </div>
              </div>
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
