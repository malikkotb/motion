"use client";
import { motion } from "framer-motion";
export default function MotionFoundations() {
  return (
    <div className="grid place-content-center h-screen gap-3">
      <button className=" bg-purple-600 text-white text-lg rounded-lg border-none p-2 cursor-pointer">
        Show/Hide
      </button>

      {/* motion works on any native html elements */}
      {/* props that are added when using a motion. elemetn */}
      {/* which define the different states of our animations */}
      {/* these states are called variants */}
      {/* most important ones:
      initial
      animate
      */}
      {/* you can add normal CSS selectors inside the variants */}
      {/* x is a shorthand for translateX */}
      <motion.div
        initial={{ rotate: 0}}
        animate={{ rotate: 180 }}
        className=" w-40 h-40 bg-black"
      ></motion.div>
    </div>
  );
}
