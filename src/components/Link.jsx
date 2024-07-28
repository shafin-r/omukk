import { motion } from "framer-motion";
import { slide, scale } from "../anim/anim";

export default function Link({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center mt-3"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="w-[20px] h-[20px] bg-white rounded-full absolute left-0"
      ></motion.div>
      <motion.a
        animate={isActive ? "open" : "closed"}
        whileHover={{
          translateX: "30px",
        }}
        className="font-Inter font-bold tracking-tighter text-7xl"
        href={href}
      >
        {title}
      </motion.a>
    </motion.div>
  );
}
