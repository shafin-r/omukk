import React from "react";
import Content from "./FooterContent";

export default function Footer() {
  const width = window.innerWidth

  if (width > 500) {
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
  else {
    return (
      <div
  className="relative h-[56vh]" // Set height to 56% of the viewport height
  style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
>
  <div className="relative h-[calc(156vh)] -top-[100vh]">
    <div className="h-[56vh] sticky top-[50vh] overflow-hidden">
      <Content />
    </div>
  </div>
</div>

    )
  }
}
