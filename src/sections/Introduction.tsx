"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, words.length - 1],
  );

  useEffect(() => {
    wordIndex.on("change", (value) => {
      setCurrentWord(value);
    });
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>

          <div className="mt-10 text-center text-4xl font-medium md:text-6xl lg:text-7xl">
            <span>Your creative process deserves better.</span>{" "}
            <span>
              {words.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    "text-white/15 transition duration-500",
                    index <= currentWord && "text-white",
                  )}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="block text-lime-400">
              That&apos;s why we built Layers.
            </span>
          </div>
        </div>

        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
