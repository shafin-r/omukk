import React from "react";
import Content from "./FooterContent";

export default function Footer() {
  return (
    <div
      className="relative lg:h-[200px] h-[440px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+440px)] lg:h-[calc(100vh+200px)] -top-[100vh]">
        <div className="lg:h-[200px] h-[440px] sticky lg:top-[calc(100vh-200px)] top-[calc(100vh-440px)] overflow-hidden">
          <Content />
        </div>
      </div>
    </div>
  );
}
