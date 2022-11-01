import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  hidden: { x: 300, y: 300 },
  show: {
    y: 0,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
  exit: {
    x: -300,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function BannerTop({ title }) {
  return (
    <motion.div
      variants={variants}
      key="quickly"
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex absolute top-[50%] -translate-y-[50%] overflow-hidden letter"
    >
      {/* <motion.h1
        variants={letterAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        key="quickly"
        className="text-7xl font-[poppins] font-semibold "
      >
        Hello
      </motion.h1> */}

      {[...title].map((item) => (
        <motion.span
          variants={letterAnimation}
          className="text-7xl font-[poppins] font-semibold"
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default BannerTop;
