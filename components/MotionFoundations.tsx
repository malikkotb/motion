"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function MotionFoundations() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="grid place-content-center h-screen gap-3">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className=" bg-purple-600 text-white text-lg rounded-lg border-none p-2 cursor-pointer"
        layout
      >
        Show/Hide
      </motion.button>

      {/* anytime you want to use the exit prop to add unmount animations,
      you have to wrap the component with the AnimatePresence prop
         
         
      there are different modes for AnimatePresence: popLayout, sync, wait

         */}

      {/* motion works on any native html elements */}
      {/* props that are added when using a motion. elemetn */}
      {/* which define the different states of our animations */}
      {/* these states are called variants */}
      {/* most important variants:
      initial
      animate
      */}
      {/* you can add normal CSS selectors inside the variants */}
      {/* x is a shorthand for translateX */}
      {/* transition prop, to control transitions */}
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: 0, scale: 0, y: 0 }}
            // adding keyframes of your animations to an aniamtion,  to the translateY (y) animation

            animate={{ rotate: 180, scale: 1, y: [0, 150, -150, -150, 0]  }}
            exit={{ rotate: 0, scale: 0, y: 0  }}
            transition={{
              duration: 1,
              // type: 'spring'
              ease: "backInOut",
            // adding times to keyframes using times prop
            // width of times array needs to be same as keyframes array
            // values are between 0 and 1 (second)
            times: [0, 0.25, 0.5, 0.85, 1]
            }}
            className=" w-40 h-40 bg-black"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
