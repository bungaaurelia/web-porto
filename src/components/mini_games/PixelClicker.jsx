"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PixelClicker() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 150);
  };

  const playSound = (src) => {
    const sound = new Audio(src);
    sound.play();
  };

  return (
    <div
      className="flex flex-col items-center mt-6 md:mt-10 mb-2"
      style={{ fontFamily: "'Press Start 2P', cursive" }}
    >
      <div className="text-pink-300 font-pixel text-sm md:text-lg mb-1 md:mb-2 text-center">
        💎 Crystal Collector 💎
      </div>

      <span className="text-[10px] md:text-xs pixel-font">Click Me!</span>

      <motion.button
        onClick={() => {
          handleClick();
          playSound("/sounds/collect_gems.mp3");
        }}
        whileTap={{ scale: 0.9 }}
        className="relative focus:outline-none"
      >
        {/* Crystal image */}
        <img
          src="/gems.png"
          alt="Crystal"
          className={`w-16 md:w-24 h-auto transition-transform duration-150 ${
            clicked ? "scale-110" : ""
          }`}
        />
      </motion.button>

      <p className="text-xs md:text-sm pixel-font text-center mt-1">
        Crystals collected: <span className="text-yellow-300">{count}</span>
      </p>
    </div>
  );
}
