"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CallToAction() {
  const [scope, animate] = useAnimate();
  const animation = useRef<AnimationPlaybackControls>();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { repeat: Infinity, duration: 30, ease: "linear" },
    );
  }, []);

  return (
    <section className="py-24">
      <div className="flex overflow-x-clip p-4">
        <motion.div
          className="flex flex-none gap-16 font-medium"
          ref={scope}
          onMouseEnter={() =>
            animation.current && (animation.current.speed = 0.5)
          }
          onMouseLeave={() =>
            animation.current && (animation.current.speed = 1)
          }
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-16 pr-16 text-7xl md:text-8xl"
            >
              <span className="text-7xl text-lime-400">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
