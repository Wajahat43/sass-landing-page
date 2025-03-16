import React from "react";
import { twMerge } from "tailwind-merge";

const MenuIcon = (props: any) => {
  const { isOpen, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-menu"
      {...rest}
    >
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        className={twMerge(
          "origin-left transition duration-300",
          isOpen && "-translate-y-1 rotate-45",
        )}
      />
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        className={twMerge("transition duration-300", isOpen && "opacity-0")}
      />
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        className={twMerge(
          "origin-left transition duration-300",
          isOpen && "translate-y-1 -rotate-45",
        )}
      />
    </svg>
  );
};

export default MenuIcon;
