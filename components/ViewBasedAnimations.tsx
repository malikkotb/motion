"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function ViewBasedAnimations() {

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true // animation will only fire one time
    // good for entrance animations
  })// returns a simple boolean value

  return (
    <>
      <div className="h-[150vh]"></div>
      {/* most basic view-based animation: whileInView prop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 2}}
        className="h-screen bg-black"
      ></motion.div>


      {/* using useInView and useRef hooks */}
      <div ref={ref} className={`h-screen ${isInView ? "bg-blue-500" : "bg-red-500"} transition duration-1000`}></div>
    </>
  );
}
