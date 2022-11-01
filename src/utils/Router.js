import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Beranda from "../layouts/Beranda";
import { PageOne, PageTwo } from "../layouts/Page";
import Topping from "../layouts/Topping";
function Router() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Beranda />} />
        <Route path="/topping" element={<Topping />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Router;
