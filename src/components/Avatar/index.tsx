import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {}

export const Avatar = (props: AvatarProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={twMerge(
        "size-20 overflow-hidden rounded-full border-4 border-blue-500 bg-neutral-900 p-1",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Avatar;
