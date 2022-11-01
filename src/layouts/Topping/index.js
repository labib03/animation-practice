import React from "react";
import { Header, Home } from "../../component";
import { motion, LayoutGroup } from "framer-motion";
import Box from "../../component/Box";

const variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.9,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Topping() {
  return (
    <div className="wrapper">
      <LayoutGroup>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="w-screen h-screen flex gap-3 items-center justify-center"
        >
          <div className="overflow-hidden">
            <Box />
          </div>
          <div className="overflow-hidden">
            <Box />
          </div>
          <div className="overflow-hidden">
            <Box />
          </div>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}

export default Topping;
