"use client";
import React from "react";
import PlusIcon from "../Icons/PlusIcon";
import { twMerge } from "tailwind-merge";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface AccordionItemProps {
  title: string;
  content: string;
  isSelected?: boolean;
}

export const AccordionItem = (props: AccordionItemProps) => {
  const { title, content, isSelected } = props;

  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="text-white/90">{title}</span>
        <div
          className={twMerge(
            "flex-shrink-0 text-lime-400 transition duration-300",
            isSelected && "rotate-45",
          )}
        >
          <PlusIcon />
        </div>
      </div>
      <div>
        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ height: 0, marginTop: 0 }}
              animate={{ height: "auto", marginTop: 24 }}
              exit={{ height: 0, marginTop: 0 }}
              className="overflow-hidden text-white/50"
            >
              <div>{content}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AccordionItem;
