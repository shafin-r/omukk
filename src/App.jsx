import { CgMouse } from "react-icons/cg";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";
import Project from "./components/Project";
import ModalComponent from "./components/ModalComponent";
import NavBar from "./components/NavBar";
import { AnimatePresence } from "framer-motion";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [circlePos, setCirclePos] = useState({ top: "50%", left: "50%" });
  const [isActive, setIsActive] = useState(false);
  const h1Ref = useRef(null);

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

    createAnimation();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ReactLenis root>
      <div className="px-6 lg:px-32 bg-[#0B0B0B] h-full cursor-none">
        <Cursor />
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
        <div
          className={`${
            isOpen ? "lg:-translate-x-1/2 -translate-x-80" : "translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <section className="h-screen flex flex-col justify-center items-center gap-10 ">
            <img src="/logo-text-white.svg" alt="" className="lg:w-3/4" />
            <CgMouse ref={container} size={40} className="text-white" />
          </section>
          <section
            className="flex h-screen items-end justify-center mb-[25vh]"
            id="about"
          >
            <div className="flex flex-wrap ">{splitWords(about)}</div>
          </section>
          <section
            className="h-screen flex flex-col lg:flex-row-reverse items-center justify-evenly lg:gap-20"
            id="services"
          >
            <div className="lg:w-1/2">
              <h1
                ref={h1Ref}
                className="text-white text-7xl lg:text-[8rem] font-Inter font-semibold tracking-tighter "
              >
                Services
              </h1>
            </div>
            <div className="flex flex-col gap-4 items-center lg:items-end lg:w-1/2">
              <h3 className="font-Inter font-medium tracking-tight text-white text-5xl lg:text-7xl">
                Web
              </h3>
              <h3 className="font-Inter font-medium tracking-tight text-white text-5xl lg:text-7xl">
                Mobile
              </h3>
              <h3 className="font-Inter font-medium tracking-tight text-white text-5xl lg:text-7xl">
                Desktop
              </h3>
              <h3 className="font-Inter font-medium tracking-tight text-white text-5xl lg:text-7xl">
                DevOps
              </h3>
            </div>
          </section>
          <section
            className="flex flex-col gap-2 items-start h-screen mt-[20vh]"
            id="works"
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between w-full">
                <h1 className="text-white font-Inter tracking-tighter text-2xl font-semibold">
                  Featured Work
                </h1>
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
