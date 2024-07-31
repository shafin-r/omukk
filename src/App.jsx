// SVG imports
import { CgMouse } from "react-icons/cg";
import { HiArrowLongRight, HiArrowLongDown } from "react-icons/hi2";
import { ImMap } from "react-icons/im";

// Third Party imports
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

// Custom Components
import Footer from "./components/Footer";
import Project from "./components/Project";
import ModalComponent from "./components/ModalComponent";
import NavBar from "./components/NavBar";
import Cursor from "./components/Cursor";
import Services from "./components/Services";

// GSAP Import
import gsap from "gsap";
import Marquee from "./components/Marquee";
import Works from "./components/Works";
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

  const about =
    "Omukk is a Bangladesh-based technology solution team dedicated to help startups and businesses to grow their impacts. Besides contact-based works, Omukk has its own projects that are constantly tested and upgraded for better uses.";

  const works = [
    {
      title: "Rota Egypt",
      src: "/rota-egpyt.png",
      contribution: "Design & Web Development",
      color: "#EFE8D3",
    },
    {
      title: "Rota Germany",
      src: "/rota-germany.png",
      contribution: "Design & Web Development",
      color: "#706D63",
    },
  ];
  const [modal, setModal] = useState({ active: false, index: 0 });
  let refs = useRef([]);
  const container = useRef(null);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `10%`,
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.5,
    });
  };
  useEffect(() => {
    createAnimation();
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

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: webRef.current,
      start: "top 20%",
      end: "+=2020px",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: desktopRef.current,
      start: "top 30%",
      end: "+=1515px",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: mobileRef.current,
      start: "top 40%",
      end: "+=1010px",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      pinSpacing: false,
    });
    ScrollTrigger.create({
      trigger: devopsRef.current,
      start: "top 50%",
      end: "+=505px",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      pinSpacing: false,
    });

    // gsap.to(logoRef.current, {
    //   scrollTrigger: {
    //     trigger: logoRef.current,
    //     start: "30% 50%",
    //     end: "+=400px",
    //     scrub: 1,
    //   },
    //   scale: 0.6,
    //   x: -160,
    //   y: 435,
    //   duration: 5,
    //   ease: "sine.inOut",
    // });
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "-400px 30%",
        end: "+=300px",
        scrub: 1,
      },
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
    });
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-[#0B0B0B] box-border h-full">
        <div
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
          className="scale-0 fixed right-2 lg:right-10 m-[20px] z-10 flex items-center justify-center"
        >
          <div className="w-[70px] h-[70px] bg-[#525252] rounded-full cursor-pointer">
            <div
              className={`w-full before:block before:h-[1px] before:w-[40%] before:m-auto before:bg-white before:relative before:transition before:duration-300 after:block after:h-[1px] after:w-[40%] after:m-auto after:bg-white after:relative after:transition after:duration-300 before:top-[30px] after:top-[35px] ${
                isActive
                  ? "after:rotate-45 after:top-[1px] before:-rotate-45 before:top-[37px] cursor-pointer rounded-full"
                  : ""
              }`}
            ></div>
          </div>
          <AnimatePresence mode="wait">
            {isActive && <NavBar />}
          </AnimatePresence>
        </div>
        <div>
          <section className="h-screen flex flex-col justify-between z-10 p-[30px]">
            <div className="flex lg:flex-row flex-col justify-between text-xl lg:text-md gap-2 lg:gap-0">
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
              <div className="flex lg:flex-row flex-col lg:w-1/3 justify-between gap-2 lg:gap-0">
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
            <div className="flex justify-end">
              <h1 className="font-helvetica text-[#d9d9d9] text-4xl tracking-tight">
                // A group of creative thinkers making things <br /> smarter,
                newer and more memorable.
              </h1>
            </div>
            <div className="flex gap-4 ">
              <h1
                ref={logoRef}
                className="font-helvetica text-[#d9d9d9] text-[100px] lg:text-[350px] tracking-tighter z-50 font-normal"
              >
                OMUKK
              </h1>
            </div>
          </section>
          <section className="h-screen" id="about">
            <div className="" ref={aboutRef}>
              <h1 className="font-helvetica tracking-tighter lg:text-[10vw] text-7xl text-[#d9d9d9]">
                OMUKK /
              </h1>
            </div>
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
          <section className="text-white h-[3100px] box-border lg:px-[40px] p-[20px]">
            <section className="flex flex-col pb-10">
              <div className="">
                <div className="lg:w-3/4 w-full">
                  <h1 className="lg:text-[140px] text-5xl font-Inter tracking-tighter font-bold lg:mr-20">
                    WHAT WE DO /
                  </h1>
                </div>
                <div className="w-1/4"></div>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2"></div>
                <div className="lg:w-1/2 flex flex-col lg:flex-row lg:gap-0 gap-6 justify-evenly">
                  <h3 className="lg:w-1/6 font-jetbrain tracking-tighter lg:text-2xl text-xl opacity-50">
                    (SERVICES)
                  </h3>
                  <p className="lg:w-1/2 font-Inter tracking-tight lg:text-2xl text-2xl">
                    We offer our expertise in many different fields with utmost
                    precision and elegant craftsmanship.
                  </p>
                </div>
              </div>
            </section>
            <section className="h-full box-border">
              <section
                ref={webRef}
                className="h-[600px] flex flex-col gap-6 border-t-[1px] border-[#eee]/40 w-full bg-[#0b0b0b] pt-4"
              >
                <div className="flex justify-between items-center">
                  <h1 className="font-Inter font-semibold tracking-tighter text-5xl">
                    Web
                  </h1>
                </div>
                <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full">
                  <div className="lg:w-1/2">
                    <p className="font-Inter text-xl tracking-tighter lg:w-2/3">
                      We design and create unique, custom-coded websites that
                      are tailored to your brand. We focus on scalability,
                      performance, accessibility, and engaging animations for a
                      memorable experience.
                    </p>
                  </div>
                  <div className="lg:w-1/2 flex flex-col gap-6">
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter lg:text-2xl">
                        01
                      </h2>
                      <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                        Web Development
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
                        SEO
                      </h1>
                    </div>
                  </div>
                </div>
              </section>
              <section
                ref={desktopRef}
                className="desktop-section h-[600px] flex flex-col gap-6 border-t-[1px] border-[#eee]/40 bg-[#0b0b0b] pt-4"
              >
                <div className="flex justify-between items-center">
                  <h1 className="font-Inter font-semibold tracking-tighter text-5xl">
                    Mobile
                  </h1>
                </div>
                <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full">
                  <div className="lg:w-1/2">
                    <p className="font-Inter text-xl tracking-tighter lg:w-2/3">
                      We design and create unique, custom-coded websites that
                      are tailored to your brand. We focus on scalability,
                      performance, accessibility, and engaging animations for a
                      memorable experience.
                    </p>
                  </div>
                  <div className="lg:w-1/2 flex flex-col gap-6">
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter lg:text-2xl">
                        01
                      </h2>
                      <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                        Web Development
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
                        SEO
                      </h1>
                    </div>
                  </div>
                </div>
              </section>
              <section
                ref={mobileRef}
                className="mobile-section h-[600px] flex flex-col gap-6 border-t-[1px] border-[#eee]/40 bg-[#0b0b0b] pt-4"
              >
                <div className="flex justify-between items-center">
                  <h1 className="font-Inter font-semibold tracking-tighter text-5xl">
                    Desktop
                  </h1>
                </div>
                <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full">
                  <div className="lg:w-1/2">
                    <p className="font-Inter text-xl tracking-tighter lg:w-2/3">
                      We design and create unique, custom-coded websites that
                      are tailored to your brand. We focus on scalability,
                      performance, accessibility, and engaging animations for a
                      memorable experience.
                    </p>
                  </div>
                  <div className="lg:w-1/2 flex flex-col gap-6">
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter lg:text-2xl">
                        01
                      </h2>
                      <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                        Web Development
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
                        SEO
                      </h1>
                    </div>
                  </div>
                </div>
              </section>
              <section
                ref={devopsRef}
                className="h-[600px] flex flex-col gap-6 border-t-[1px] border-[#eee]/40 bg-[#0b0b0b] pt-4"
              >
                <div className="flex justify-between items-center">
                  <h1 className="font-Inter font-semibold tracking-tighter text-5xl">
                    DevOps
                  </h1>
                </div>
                <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-full">
                  <div className="lg:w-1/2">
                    <p className="font-Inter text-xl tracking-tighter lg:w-2/3">
                      We design and create unique, custom-coded websites that
                      are tailored to your brand. We focus on scalability,
                      performance, accessibility, and engaging animations for a
                      memorable experience.
                    </p>
                  </div>
                  <div className="lg:w-1/2 flex flex-col gap-6">
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter lg:text-2xl">
                        01
                      </h2>
                      <h1 className="font-Inter tracking-tighter lg:text-4xl text-2xl font-semibold">
                        Web Development
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
                        SEO
                      </h1>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </section>
          <div id="works" className="">
            <Works />
          </div>
          <section
            className="h-screen relative flex flex-col gap-16 lg:gap-24 lg:px-[80px]"
            id="contact"
          >
            <div className="lg:h-3/4">
              <div className=" py-8 flex items-center justify-center lg:justify-start">
                <img src="/logo-icon-white.svg" alt="" className="h-10 w-10" />
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
    </ReactLenis>
  );
}

export default App;
