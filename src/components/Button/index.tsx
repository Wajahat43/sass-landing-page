import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 border-lime-400 text-neutral-950",
      secondary: "bg-transparent border-white text-white ",
    },
    size: {
      sm: "h-10",
    },
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size?: "sm";
}

export default function Button(props: ButtonProps) {
  const { variant, className, size, ...rest } = props;
  return (
    <button
      className={twMerge(
        classes({
          variant,
          size,
        }),
        "duration-200 hover:scale-105",
        className,
      )}
      {...rest}
    />
  );
}
