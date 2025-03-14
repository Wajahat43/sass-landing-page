import { twMerge } from "tailwind-merge";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const Tag = (props: TagProps) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={twMerge(
        "inline-flex items-center gap-2 rounded-full border border-lime-400 px-3 py-1 uppercase text-lime-400",
        className,
      )}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};

export default Tag;
