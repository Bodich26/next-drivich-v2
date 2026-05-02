import { cn } from "../lib";
import { Badge } from "./badge";

type BadgeSalesProps = {
  discount?: number;
  className?: string;
  variant: "item" | "cart" | "page";
};

export const BadgeSales = ({
  discount,
  className,
  variant = "item",
}: BadgeSalesProps) => {
  if (!discount || discount <= 0) {
    return null;
  }

  return (
    <Badge
      className={cn(
        "px-1.5 py-px uppercase text-xs font-medium",
        variant === "cart" && "",
        variant === "page" && "",
        variant === "item" && "absolute z-10 right-3 top-3",
        className,
      )}
    >
      -{discount}%
    </Badge>
  );
};
