import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function ModalComponent({ modal, works }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },

    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX - 130);
      yMoveContainer(pageY);
      xMoveCursor(pageX - 130);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX - 130);
      yMoveCursorLabel(pageY);
    });
    return () => {
      document.removeEventListener("mousemove", (e) => {
        const { pageX, pageY } = e;
        xMoveContainer(pageX);
        yMoveContainer(pageY);
        xMoveCursor(pageX);
        yMoveCursor(pageY);
        xMoveCursorLabel(pageX);
        yMoveCursorLabel(pageY);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? scaleAnimation.enter : scaleAnimation.closed}
        className="h-[315px] w-[400px] absolute overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="h-screen w-screen absolute transition duration-500 ease-in-out "
        >
          {works.map((work, index) => {
            const { src, color } = work;
            return (
              <div
                className={`h-1/3 w-screen flex items-center justify-center ]`}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img
                  className="h-auto"
                  src={`${src}`}
                  width={350}
                  height={0}
                  alt="image"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className="w-[80px] h-[80px] rounded-full bg-slate-400 text-white absolute z-2 flex justify-center items-center text-md font-Inter tracking-tighter pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? scaleAnimation.enter : scaleAnimation.closed}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="w-[80px] h-[80px] rounded-full bg-slate-400 text-white absolute z-2 flex justify-center items-center text-md font-Inter tracking-tighter pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? scaleAnimation.enter : scaleAnimation.closed}
      >
        View
      </motion.div>
    </>
  );
}
