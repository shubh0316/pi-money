import React from "react";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // initial state, hidden below and invisible
        animate={{ opacity: 1, y: 0 }} // animate to visible and position
        transition={{ duration: 1, delay: 0.2 }} // transition duration and delay
      >
        <h1 className="font-sans text-center text-5xl text-green-900 font-bold mt-20 space-x-2">
          Discover What We <span className="text-green-400">Offer</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // initial state, hidden below and invisible
        animate={{ opacity: 1, y: 0 }} // animate to visible and position
        transition={{ duration: 1, delay: 0.4 }} // transition duration and delay
      >
        <p className="font-sans text-2xl text-center text-green-900 mt-6 m-12 font-light ">
          Elevate your e-commerce experience with our powerful feature set
          <br />
          designed for unparalleled excellence.
        </p>
      </motion.div>
    </>
  );
};

export default Heading;