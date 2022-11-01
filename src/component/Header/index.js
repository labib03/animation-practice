import React from "react";
import "./style.scss";
import { PizzaImage } from "../../assets/img";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    y: -100,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 1.6,
    },
  },
};

const imgVariants = {
  hidden: {
    scale: 0.2,
    opacity: 0,
    y: 100,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 1.6,
    },
  },
};

const titleVariants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    y: -100,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 1.7,
    },
  },
};

function Header() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="header-wrapper bg-white drop-shadow-xl rounded-2xl"
    >
      <Link to={"/"}>
        <div className="flex items-center gap-3">
          <motion.div className="overflow-hidden">
            <motion.img
              variants={imgVariants}
              className="w-8"
              src={PizzaImage}
              alt=""
              srcset=""
            />
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              variants={titleVariants}
              className="blob uppercase font-bold text-2xl tracking-widest bg-amber-300"
            >
              Pizzaaaru
            </motion.h1>
          </div>
        </div>
      </Link>
      <div className="overflow-hidden">
        <Link to={"/topping"}>
          <motion.p
            className="hover:cursor-pointer font-[joan] uppercase tracking-wider"
            variants={imgVariants}
          >
            Order
          </motion.p>
        </Link>
      </div>
    </motion.div>
  );
}

export default Header;
