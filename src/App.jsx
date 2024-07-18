import { CgMouse } from "react-icons/cg";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [circlePos, setCirclePos] = useState({ top: "50%", left: "50%" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      const scale = 0.05; // Adjust this value to control the sensitivity
      const newLeft = centerX + distanceX * scale;
      const newTop = centerY + distanceY * scale;

      setCirclePos({
        left: `${newLeft}px`,
        top: `${newTop}px`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-6 lg:px-32 bg-[#0B0B0B] h-full">
      <div
        className="lg:block hidden px-4 fixed  opacity-10  m-auto rounded-full w-[600px] h-[600px] bg-gradient-to-t from-black to-[#B8BBFF]"
        style={{
          top: circlePos.top,
          left: circlePos.left,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <button
        onClick={toggleNav}
        className="fixed top-6 right-6 z-50 p-2 rounded"
      >
        <RiMenu4Fill size={30} className="text-white" />
      </button>
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-[#0b0d11] shadow-lg transform z-50 flex justify-center items-center px-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={toggleNav} className="absolute top-4 right-4 p-2">
          <RiCloseFill size={35} className="text-white" />
        </button>
        <ul className="text-white list-none flex flex-col gap-7 font-Inter tracking-tighter text-5xl font-semibold  w-full">
          <li className="">
            <a onClick={toggleNav} href="#">
              HOME
            </a>
          </li>
          <li className="">
            <a onClick={toggleNav} href="#about">
              ABOUT
            </a>
          </li>
          <li className="">
            <a onClick={toggleNav} href="#services">
              SERVICES
            </a>
          </li>
          <li className="">
            <a onClick={toggleNav} href="#works">
              WORKS
            </a>
          </li>
          <li>
            <a onClick={toggleNav} href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`${
          isOpen ? "-translate-x-80" : "translate-x-0"
        } transition-transform duration-300 ease-in-out`}
      >
        <section className="h-screen flex flex-col justify-center items-center gap-10">
          <img src="/logo-text-white.svg" alt="" className="lg:w-3/4" />
          <CgMouse size={40} className="text-white" />
        </section>
        <section
          className="h-screen flex flex-col lg:flex-row lg:justify-center gap-40 items-center "
          id="about"
        >
          <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-end lg:h-screen">
            <h1 className=" text-white text-7xl lg:text-[10rem] font-Inter font-semibold tracking-tighter">
              About
            </h1>
          </div>
          <div className="lg:w-1/2 lg:h-screen lg:flex lg:items-center">
            <p className="lg:w-3/4 text-white text-xl lg:text-2xl font-Inter tracking-tighter">
              Omukk is a Bangladesh-based technology solution team dedicated to
              help startups and businesses to grow their impacts. Besides
              contact-based works, Omukk has its own projects that are
              constantly tested and upgraded for better uses.
            </p>
          </div>
        </section>
        <section
          className="h-screen flex flex-col items-center justify-evenly"
          id="services"
        >
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-Inter font-medium tracking-tight text-white text-5xl">
              Web
            </h3>
            <h3 className="font-Inter font-medium tracking-tight text-white text-5xl">
              Mobile
            </h3>
            <h3 className="font-Inter font-medium tracking-tight text-white text-5xl">
              Desktop
            </h3>
            <h3 className="font-Inter font-medium tracking-tight text-white text-5xl">
              DevOps
            </h3>
          </div>
          <h1 className="text-white text-7xl font-Inter font-semibold tracking-tighter">
            Services
          </h1>
        </section>
        <section
          className="flex flex-col gap-10 items-center h-screen"
          id="works"
        >
          <h1 className="text-white font-Inter tracking-tighter text-6xl font-semibold">
            Works
          </h1>
          <div className="flex flex-col gap-10">
            <a
              href="https://rotaegypt.com"
              className="flex items-center flex-col gap-4"
            >
              <img src="/rota-egpyt.png" alt="" className="rounded-2xl" />
              <span className="font-Inter tracking-tighter text-white text-xl">
                Rota Egpyt
              </span>
            </a>
            <a
              href="https://rotagermany.com"
              className="flex items-center flex-col gap-4"
            >
              <img src="/rota-germany.png" alt="" className="rounded-2xl" />
              <span className="font-Inter tracking-tighter text-white text-xl">
                Rota Egpyt
              </span>
            </a>
          </div>
        </section>
        <section
          className="h-screen lg:h-auto flex flex-col gap-16"
          id="contact"
        >
          <div className="p-8 flex items-center justify-center">
            <img src="/logo-icon-white.svg" alt="" className="h-10 w-10" />
          </div>
          <div className=" flex flex-col items-center gap-6 mt-10">
            <h1 className="font-Inter text-5xl text-[#D9D9D9] font-semibold tracking-tighter text-center">
              WANT TO TALK <br /> WITH US?
            </h1>
            <button className="px-5 py-2 bg-white flex gap-2 items-center rounded-full">
              <HiArrowLongRight size={30} />
              <span className="font-Inter tracking-tighter text-xl">
                Send us an email
              </span>
            </button>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="font-Inter text-3xl text-white tracking-tighter font-medium">
                SOCIAL
              </h1>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/omukk.official/"
                  className="font-Inter font-light text-xl text-white px-3 py-2 ring-2 ring-white rounded-full tracking-tight"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/omukk/"
                  className="font-Inter font-light text-xl text-white px-3 py-2 ring-2 ring-white rounded-full tracking-tight"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-Inter text-3xl text-white tracking-tighter font-medium">
                CONTACTS
              </h1>
              <div className="">
                <a
                  href="mailto:contact@omukk.dev"
                  className="font-Inter text-xl text-white tracking-tight font-light"
                >
                  contact@omukk.dev
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-Inter text-3xl text-white tracking-tighter font-medium">
                LOCATION
              </h1>
              <div className="">
                <p className="font-Inter text-xl text-white tracking-tight font-light">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
