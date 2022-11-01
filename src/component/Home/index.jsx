import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";
import {
  Background,
  GifOne,
  PizzaImageOne,
  PizzaImageThree,
  PizzaImageTwo,
} from "../../assets/img";
import ImageItem from "./components/ImageItem";
import Box from "../Box";

const letterContainer = {
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

function Home(props) {
  return (
    <div className="wrapper container mx-auto h-screen">
      {/* <motion.img
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.1 }}
        className="absolute -z-10"
        src={Background}
        alt=""
        srcset=""
      /> */}

      <motion.div variants={letterContainer} className="ml-10 mt-32">
        <div className="overflow-hidden -mb-6">
          <motion.h1
            variants={letterAnimation}
            className="text-8xl tracking-wider font-[poppins] font-bold uppercase z-10"
          >
            Pizzaaaruu
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            variants={letterAnimation}
            className="stroke-text text-8xl tracking-wider font-[poppins] font-bold uppercase z-10"
          >
            Pizzaaaruu
          </motion.h1>
        </div>
      </motion.div>

      {/* <div>
        <ImageItem
          src={PizzaImageOne}
          className="absolute -z-10 top-32 right-0 rounded-full"
        />
      </div> */}
    </div>
  );
}

export default Home;
