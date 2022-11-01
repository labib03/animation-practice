import React from "react";
import { motion } from "framer-motion";

const imgVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function ImageItem(props) {
  const { src, className } = props;

  return (
    <>
      <motion.img variants={imgVariants} src={src} className={className} />
    </>
  );
}

export default ImageItem;
