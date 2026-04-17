import { cn } from "../lib";

type Props = {
  title: string;
  error: string;
  className?: string;
};
export const DisplayError = ({ error, title, className }: Props) => {
  return (
    <div
      className={cn(
        "text-center w-full bg-card p-4 rounded-md shadow-sm",
        className,
      )}
    >
      <span className="text-xl font-bold mb-4">{title}</span>
      <p className="text-base ">{error}</p>
    </div>
  );
};
