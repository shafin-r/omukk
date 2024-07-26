import { motion } from "framer-motion";
import { slide, scale } from "../anim/anim";

export default function Link({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
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
        className="w-[10px] h-[10px] bg-white rounded-full absolute -left-[30px]"
      ></motion.div>
      <a className="font-Inter tracking-tighter text-7xl" href={href}>
        {title}
      </a>
    </motion.div>
  );
}
