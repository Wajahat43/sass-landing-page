import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Avatar = (props: HTMLAttributes<HTMLDivElement>) => {
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
