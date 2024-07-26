import React from "react";

export default function Content() {
  return (
    <div className="bg-white py-8 px-12 h-full w-full flex flex-col justify-between rounded-t-3xl overflow-hidden">
      <NavMenu />
      <TextScroll />
    </div>
  );
}

const NavMenu = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const TextScroll = ({ text, slider }) => {
  return (
    <div className="absolute bottom-0">
      <div className="scroll-text relative flex items-center gap-4 whitespace-nowrap">
        <img src="/logo-icon-black.svg" alt="" className="h-[75px] w-[75px]" />
        <h1 className=" relative m-0 text-[100px] tracking-tighter font-medium ">
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
          OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK OMUKK
        </h1>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex w-full">
      <div className="lg:w-1/3 flex flex-col gap-4">
        <h1 className="font-Inter text-3xl text-black tracking-tighter font-medium">
          SOCIALS
        </h1>
        <div className="flex gap-3">
          <a
            href="http://www.instagram.com/omukk.official"
            className="font-Inter text-md tracking-tight ring-2 ring-black hover:ring-white hover:text-white hover:bg-black rounded-full px-4 py-2 transition duration-300 ease-in-out"
          >
            Instagram
          </a>
          <a
            href="http://www.instagram.com/omukk.official"
            className="font-Inter text-md tracking-tight ring-2 ring-black hover:ring-white hover:text-white hover:bg-black rounded-full px-4 py-2 transition duration-300 ease-in-out"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="lg:w-1/3 flex flex-col gap-4">
        <h1 className="font-Inter text-3xl text-black tracking-tighter font-medium">
          CONTACTS
        </h1>
        <a
          href="mailto:contact@omukk.dev"
          className="font-Inter tracking-tight text-lg w-fit"
        >
          contact@omukk.dev
        </a>
      </div>
      <div className="lg:w-1/3 flex flex-col gap-4">
        <h1 className="font-Inter text-3xl text-black tracking-tighter font-medium">
          LOCATION
        </h1>
        <p className="font-Inter tracking-tight text-lg w-fit">
          Dhaka, Bangladesh
        </p>
      </div>
    </div>
  );
};
