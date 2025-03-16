"use client";
import React from "react";
import PlusIcon from "../Icons/PlusIcon";
import { twMerge } from "tailwind-merge";

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
        <div className="flex-shrink-0 text-lime-400">
          <PlusIcon />
        </div>
      </div>
      <div>
        <div className={twMerge("mt-6 text-white/50", !isSelected && "hidden")}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
