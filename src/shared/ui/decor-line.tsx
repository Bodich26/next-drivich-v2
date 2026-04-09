import { cn } from "../lib";

type Props = {
  className?: string;
};

export const DecorLine = ({ className }: Props) => {
  return (
    <span
      className={cn(
        "block max-w-[100%] h-[1px] rounded-md bg-accent",
        className,
      )}
    />
  );
};
