import { useEffect } from "react";
import { useState } from "react";
import { Header, Loader, Transition } from "./component";
import Router from "./utils/Router";
import { AnimatePresence, motion } from "framer-motion";

const transition = {
  hidden: {
    // opacity: 0,
    y: 0,
  },
  show: {
    // opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5200);
    };

    timer();

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <div>
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <Header />
          <Router />
        </>
      )}
    </div>
    // <div>
    //   <AnimatePresence>
    //     <Header />
    //     <Router />
    //   </AnimatePresence>
    // </div>
  );
}

export default App;
