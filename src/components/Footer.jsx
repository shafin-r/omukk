import React from "react";
import Content from "./FooterContent";

export default function Footer() {
  return (
    <div
      className="relative h-[200px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+200px)] -top-[100vh]">
        <div className="h-[200px] sticky top-[calc(100vh-200px)] overflow-hidden">
          <Content />
        </div>
      </div>
    </div>
  );
}
