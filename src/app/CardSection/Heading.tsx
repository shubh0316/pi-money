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
        <h1 className="text-center text-5xl text-[#002147] font-semibold md:leading-tight md:tracking-wider mt-10 md:mt-20 space-x-2">
          Discover What We <span className="text-[#0171DF]">Offer</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // initial state, hidden below and invisible
        animate={{ opacity: 1, y: 0 }} // animate to visible and position
        transition={{ duration: 1, delay: 0.4 }} // transition duration and delay
      >
        <p className=" text-[#334D6C] text-[20px] text-center md:mt-6 mt-4 md:m-12">
          Elevate your e-commerce experience with our powerful feature set
          <br />
          designed for unparalleled excellence.
        </p>
      </motion.div>
    </>
  );
};

export default Heading;