import React from "react";
import { twMerge } from "tailwind-merge";

interface KeyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Key = (props: KeyProps) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={twMerge(
        "inline-flex size-14 items-center justify-center rounded-2xl bg-white/80 p-4 px-5 text-lg font-semibold text-neutral-950",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
