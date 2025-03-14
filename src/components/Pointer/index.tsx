import { twMerge } from "tailwind-merge";
import PointerIcon, { PointerIconProps } from "../Icons/PointerIcon";

interface PointerProps extends PointerIconProps {
  className?: string;
  name: string;
  color: "red" | "blue";
}

export const Pointer = (props: PointerProps) => {
  const { name, color } = props;
  return (
    <div className="relative w-fit">
      <PointerIcon {...props} />
      <div className="absolute left-full top-full">
        <div
          className={twMerge(
            "inline-flex rounded-full rounded-tl-none bg-blue-400 px-2 text-sm font-bold",
            color === "red" && "bg-red-400",
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
};
