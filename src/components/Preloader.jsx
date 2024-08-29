import React, {useRef} from "react";
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

const Preloader = ({ loading, setShowPreloader }) => {
  const preloaderRef = useRef(null)
  const logoRef = useRef(null)
  const versionRef = useRef(null)
  const loadingRef = useRef(null)

  useGSAP(() => {
    gsap.to(preloaderRef.current, {
      opacity: 1,
      duration: 0.2,
    });
    gsap.to(logoRef.current, {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1
    })
    gsap.to(versionRef.current, {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1
    })
    gsap.to(loadingRef.current, {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1
    })
    if (!loading) {
      gsap.to(preloaderRef.current, {
        opacity: 1,
        duration: 0.2,
        onComplete: () => {
          setShowPreloader(false)
        },
      });
    }
  }, [loading, setShowPreloader])
  return (
    <div ref={preloaderRef} className="opacity-1 h-screen flex flex-col items-center justify-between p-6 bg-[#000000]">
      <div></div>
      <div className="flex flex-col gap-2 items-center font-Inter font-semibold text-7xl tracking-tighter">
        <h1 ref={logoRef} className="opacity-0 translate-y-10">
          <span className="text-[#d8d8d8]">omukk</span>{" "}
          <span className="text-[#c2c2c2]">&copy; Folio 2024</span>
        </h1>
      </div>
      <div className="flex justify-between w-full font-Inter tracking-tighter">
        <p ref={versionRef} className="text-[#d8d8d8] opacity-0 -translate-y-20">(Version 1.0)</p>
        <p ref={loadingRef} className="text-[#d8d8d8] opacity-0 -translate-y-20">loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
