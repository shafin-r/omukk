import { CgMouse } from "react-icons/cg";
import { RiMenu4Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-6 bg-[#0B0B0B] h-full">
      <img
        src="/logo-icon-white.svg"
        alt="logo - white"
        className="px-4 fixed inset-0 opacity-10 m-auto"
      />
      <button
        onClick={toggleNav}
        className="fixed top-4 right-4 z-50 p-2 rounded"
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
          <img src="/logo-text-white.svg" alt="" />
          <CgMouse size={40} className="text-white" />
        </section>
        <section
          className="h-screen flex flex-col items-center gap-32"
          id="about"
        >
          <h1 className="text-white text-7xl font-Inter font-semibold tracking-tighter">
            About
          </h1>
          <p className="text-white text-xl font-Inter tracking-tight text-justify">
            Omukk is a Bangladesh-based technology solution team dedicated to
            help startups and businesses to grow their impacts. <br /> <br />
            Besides contact-based works, Omukk has its own projects that are
            constantly tested and upgraded for better uses.
          </p>
        </section>
        <section
          className="h-screen lg:h-auto flex flex-col items-center justify-evenly"
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
          className="flex flex-col gap-10 items-center h-auto"
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
          className="h-screen lg:h-auto border-r-2 border-l-2"
          id="contact"
        >
          <div className="p-8 border-t-2"></div>
          <div className="p-6 border-t-2 border-b-2 flex flex-col items-center gap-6">
            <img src="/logo-icon-white.svg" alt="" className="" />
            <h1 className="font-Inter text-3xl text-white font-semibold tracking-tighter">
              Want to talk with us?
            </h1>
          </div>
          <div className="flex justify-center items-center border-b-2 p-10">
            <a
              href="mailto:contact@omukk.dev"
              className="font-Inter text-3xl text-white font-medium tracking-tighter"
            >
              contact@omukk.dev
            </a>
          </div>
          <div className="flex justify-center items-center border-b-2">
            <h1 className="font-Inter text-2xl text-white tracking-tighter p-6">
              11:52 PM
            </h1>
          </div>
          <div className="flex justify-center items-center border-b-2">
            <h1 className="font-Inter text-2xl text-white tracking-tighter p-10 text-nowrap">
              Dhaka, Bangladesh
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
