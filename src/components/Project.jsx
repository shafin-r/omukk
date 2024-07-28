import React from "react";

export default function Project({ index, title, contribution, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="group flex w-full justify-between items-center px-20 py-20 cursor-pointer transition-all 0.2s border-b-2 last-of-type:border-white  hover:opacity-50"
    >
      <h2 className="group-hover:-translate-x-[10px] text-[60px] tracking-tighter font-Inter transition-all duration-300 text-white">
        {title}
      </h2>
      <p className="group-hover:translate-x-[10px] transition-all duration-300 font-Inter tracking-tighter text-white">
        {contribution}
      </p>
    </div>
  );
}
