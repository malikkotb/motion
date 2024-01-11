"use client";
import { motion, MotionConfig } from "framer-motion";
export default function Gestures() {
  return (
    <div className="grid place-content-center h-screen gap-3">
      {/* Animations when some action happens (hovering or clicking a btn) */}

      {/* how to define transitions for multiple components
      => using MotionConfig */}
      <MotionConfig transition={{ duration: 0.55, ease: "easeInOut" }}>
        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: 5
            // transition: { duration: 0.55, ease: "easeInOut" },
          }}
          className="bg-purple-600 text-white text-lg rounded-lg border-none p-2 cursor-pointer"
        >
          Hover me!
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.4 }}
          className="bg-purple-600 text-white text-lg rounded-lg border-none p-2 cursor-pointer"
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}
