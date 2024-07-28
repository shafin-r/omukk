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
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [circlePos, setCirclePos] = useState({ top: "50%", left: "50%" });
  const [isActive, setIsActive] = useState(false);
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 0.6, 1], [20, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const webRef = useRef(null);
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const devopsRef = useRef(null);

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

  const splitWords = (phrase) => {
    let body = [];

    phrase.split("  ").forEach((word, i) => {
      const letters = splitLetters(word);

      body.push(
        <p
          className="text-white lg:text-[3.5vw] font-Inter tracking-tighter font-semibold"
          key={word + "_" + i}
        >
          {letters}
        </p>
      );
    });

    return body;
  };

  const splitLetters = (word) => {
    let letters = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-20"
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });

    return letters;
  };

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
  }, []);

  return (
    <ReactLenis root>
      <div className="bg-[#0B0B0B] px-32 box-border h-full">
        <div
          className="lg:block hidden px-4 fixed  opacity-10  m-auto rounded-full w-[600px] h-[600px] bg-gradient-to-t from-[#0B0B0B] to-[#B8BBFF]"
          style={{
            top: circlePos.top,
            left: circlePos.left,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="fixed right-10 m-[20px] z-10 flex items-center justify-center"
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
          <section className="h-screen flex flex-col justify-center items-center gap-10 ">
            <img src="/logo-text-white.svg" alt="" className="lg:w-3/4" />

            <CgMouse size={40} className="text-white" />
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              <HiArrowLongDown size={30} className="text-white" />
            </motion.div>
          </section>
          <section className="flex h-screen  justify-center" id="about">
            <div className="flex flex-wrap ">{splitWords(about)}</div>
          </section>
          <section className="text-white h-[3200px] box-border">
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
                <div className="flex w-full">
                  <div className="w-1/2">
                    <p className="font-Inter text-xl tracking-tighter w-2/3">
                      We design and create unique, custom-coded websites that
                      are tailored to your brand. We focus on scalability,
                      performance, accessibility, and engaging animations for a
                      memorable experience.
                    </p>
                  </div>
                  <div className="w-1/2 flex flex-col gap-6">
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        01
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Web Development
                      </h1>
                    </div>
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        02
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Web Design
                      </h1>
                    </div>
                    <div className="flex gap-10 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        03
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Search Engine Opimitization
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
                    Desktop
                  </h1>
                </div>
                <div className="flex w-full">
                  <div className="w-1/2">
                    <p className="font-Inter text-xl tracking-tighter w-2/3">
                      We design and create unique, custom-coded websites that
                      are tailored to your brand. We focus on scalability,
                      performance, accessibility, and engaging animations for a
                      memorable experience.
                    </p>
                  </div>
                  <div className="w-1/2 flex flex-col gap-6">
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        01
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Application Design
                      </h1>
                    </div>
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        02
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Web Design
                      </h1>
                    </div>
                    <div className="flex gap-10 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        03
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Search Engine Opimitization
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
                    Mobile
                  </h1>
                </div>
                <div className="flex w-full">
                  <div className="w-1/2">
                    <p className="font-Inter text-xl tracking-tighter w-2/3">
                      We design and create unique, custom-coded websites that
                      are tailored to your brand. We focus on scalability,
                      performance, accessibility, and engaging animations for a
                      memorable experience.
                    </p>
                  </div>
                  <div className="w-1/2 flex flex-col gap-6">
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        01
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Web Development
                      </h1>
                    </div>
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        02
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Web Design
                      </h1>
                    </div>
                    <div className="flex gap-10 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        03
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Search Engine Opimitization
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
                <div className="flex w-full">
                  <div className="w-1/2">
                    <p className="font-Inter text-xl tracking-tighter w-2/3">
                      We design and create unique, custom-coded websites that
                      are tailored to your brand. We focus on scalability,
                      performance, accessibility, and engaging animations for a
                      memorable experience.
                    </p>
                  </div>
                  <div className="w-1/2 flex flex-col gap-6">
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        01
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Web Development
                      </h1>
                    </div>
                    <div className="flex gap-10 border-b-[1px] border-[#eee]/40 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        02
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Web Design
                      </h1>
                    </div>
                    <div className="flex gap-10 pb-4">
                      <h2 className="font-Inter tracking-tighter text-2xl">
                        03
                      </h2>
                      <h1 className="font-Inter tracking-tighter text-4xl font-semibold">
                        Search Engine Opimitization
                      </h1>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </section>
          <section
            className="flex flex-col gap-2 items-start h-screen mt-[20vh]"
            id="works"
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between w-full">
                <motion.h1
                  style={{
                    translateY,
                    opacity,
                  }}
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-white font-Inter tracking-tighter text-2xl font-semibold"
                >
                  Featured Work
                </motion.h1>
                <p className="text-white font-Inter tracking-tighter text-lg opacity-30">
                  /works/featured
                </p>
              </div>
              <div className="bg-white h-0.5 w-full rounded-full"></div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              {works.map((work, index) => {
                return (
                  <Project
                    index={index}
                    title={work.title}
                    contribution={work.contribution}
                    setModal={setModal}
                    key={index}
                  />
                );
              })}
            </div>
            <ModalComponent modal={modal} works={works} />
          </section>
          <section
            className="h-screen relative flex flex-col gap-16 lg:gap-24"
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
