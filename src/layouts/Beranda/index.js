import React from "react";
import { Header, Home, Transition } from "../../component";
import { motion, LayoutGroup } from "framer-motion";

function Beranda() {
  return (
    <LayoutGroup>
      <motion.div
        layout
        initial="hidden"
        animate="show"
        exit="exit"
        className="h-screen"
      >
        <Home />
      </motion.div>
    </LayoutGroup>
  );
}

export default Beranda;
