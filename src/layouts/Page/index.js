import { motion, AnimatePresence } from "framer-motion";

const variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const box = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.2,
    },
  },
};

export function PageOne() {
  return (
    <div>
      <motion.div
        variants={variants}
        key="boxOne"
        initial="hidden"
        animate="show"
        exit="exit"
        className="w-screen h-screen flex gap-3 items-center justify-center"
      >
        <motion.div
          variants={box}
          className="bg-red-500 h-[8rem] w-[8rem] rounded-lg"
        />
        <motion.div
          variants={box}
          className="bg-red-500 h-[8rem] w-[8rem] rounded-lg"
        />
        <motion.div
          variants={box}
          className="bg-red-500 h-[8rem] w-[8rem] rounded-lg"
        />
      </motion.div>
    </div>
  );
}

export function PageTwo() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <motion.div
        variants={variants}
        key="boxTwo"
        initial="hidden"
        animate="show"
        exit="exit"
        className="w-screen h-screen flex gap-3 items-center justify-center"
      >
        <motion.div
          variants={box}
          className="bg-green-500 h-[8rem] w-[8rem] rounded-lg"
        />
      </motion.div>
    </div>
  );
}
