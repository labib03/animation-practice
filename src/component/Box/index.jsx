import React from "react";
import { motion } from "framer-motion";

const box = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.7,
    },
  },
};

function Box() {
  return (
    <div>
      <motion.div
        variants={box}
        className="bg-red-500 h-[8rem] w-[8rem] rounded-lg"
      />
    </div>
  );
}

export default Box;
