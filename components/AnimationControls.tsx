"use client";
import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  // Animation Controls
  // make one action fire another action
  
  // to make an action on one part of the page, to do something on another part of the page

  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip"); // pass in the variant as a string or pass CSS styling inline directly
  }

  return (
    <div className="grid place-content-center h-screen gap-3">
      <button onClick={handleClick} className=" bg-purple-600 text-white text-lg rounded-lg border-none p-2 cursor-pointer">
        Flip it!
      </button>
      <motion.div
        variants={{
          initial: {
            rotate: 0,
          },
          flip: {
            rotate: 360,
          },
          apple: {
            rotate: 720,
          },
        }}
        initial="initial"
        animate={controls}
        className="w-36 h-36 bg-black"
      ></motion.div>
    </div>
  );
}
