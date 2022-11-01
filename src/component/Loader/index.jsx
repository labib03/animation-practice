import React, { useState, useEffect } from "react";
import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";
import BannerTop from "./components/BannerTop";
import BannerDown from "./components/BannerDown";

const transitionContainer = {
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 3.5,
    },
  },
};

const transition = {
  hidden: {
    // opacity: 1,
    y: 1000,
  },
  show: {
    // opacity: 0,
    y: -800,
    transition: {
      ease: [0.6, 0.01, -0.05, 1],
      duration: 2.5,
    },
  },
};

function Modal(props) {
  const [showBannerTop, setShowBannerTop] = useState(true);
  const [showBannerDown, setShowBannerDown] = useState(false);
  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setShowBannerDown(true);
        setShowBannerTop(false);
        setTimeout(() => {
          setShowBannerDown(false);
        }, 2000);
      }, 1500);
    };

    timer();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      className="loader bg-white"
    >
      <AnimatePresence>
        {showBannerTop && <BannerTop title="HELLO" />}
      </AnimatePresence>
      <AnimatePresence>{showBannerDown && <BannerDown />}</AnimatePresence>
      <motion.div
        variants={transitionContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={transition} className="fixed inset-0 bg-white" />

        <motion.div
          variants={transition}
          className="fixed inset-0 bg-yellow-300"
        />

        <motion.div
          variants={transition}
          className="fixed inset-0 bg-yellow-200"
        />

        <motion.div
          variants={transition}
          className="fixed inset-0 bg-amber-300"
        />
      </motion.div>
    </motion.div>
  );
}

export default Modal;
