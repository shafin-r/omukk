import React from "react";

const Preloader = () => {
  return (
    <div className="h-screen text- flex flex-col items-center justify-between p-6 bg-[#0B0B0B]">
      <div></div>
      <div className="flex flex-col gap-2 items-center font-Inter font-semibold text-7xl tracking-tighter">
        <h1>
          <span className="text-[#d8d8d8]">omukk</span>{" "}
          <span className="text-[#c2c2c2]">&copy; Folio 2024</span>
        </h1>
      </div>
      <div className="flex justify-between w-full font-Inter tracking-tighter">
        <p className="text-[#d8d8d8]">(Version 1.0)</p>
        <p className="text-[#d8d8d8]">loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
