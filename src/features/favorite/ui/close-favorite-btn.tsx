import { Button, cn } from "@/shared";

export const CloseFavoriteBtn = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      className={cn("font-medium text-base w-full", className)}
      size="sm"
      onClick={onClick}
    >
      Close Favorites
    </Button>
  );
};
