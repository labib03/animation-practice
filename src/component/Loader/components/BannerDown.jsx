import React from "react";
import { motion } from "framer-motion";

const variants = {
  exit: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.2,
      delay: 1,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const blob = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.4,
    },
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function BannerDown() {
  const TITLE = ["Welcome", "to", "Pizzaaaruu"];
  const colors = ["bg-slate-300", "bg-yellow-300", "bg-emerald-300"];
  const order = ["satu", "dua", "tiga"];
  return (
    <div>
      <motion.ul
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit"
        key="loader"
        className="flex gap-5 overflow-hidden uppercase relative banner-down"
      >
        {TITLE.map((title, index) => (
          <>
            <motion.li
              variants={letterAnimation}
              className={`relative text-7xl font-[poppins] font-semibold tracking-wider`}
            >
              <motion.span
                variants={blob}
                className={`-z-10 absolute ${colors[index]} ${order[index]}`}
              ></motion.span>
              {title}
            </motion.li>
          </>
        ))}
      </motion.ul>
    </div>
  );
}

export default BannerDown;
