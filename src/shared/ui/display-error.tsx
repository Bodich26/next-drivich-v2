import { cn } from "../lib";

type Props = {
  title: string;
  error: string;
  className?: string;
};
export const DisplayError = ({ error, title, className }: Props) => {
  return (
    <div className={cn("text-center w-full", className)}>
      <span className="text-xl font-bold mb-4">{title}</span>
      <p className="text-base ">{error}</p>
    </div>
  );
};
