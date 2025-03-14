import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

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
      className={classes({
        variant: variant,
        size: size,
        className: className,
      })}
      {...rest}
    />
  );
}
