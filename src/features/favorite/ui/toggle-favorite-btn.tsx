import { Heart } from "lucide-react";
import { cn } from "@/shared";
import { useFavorites } from "../model/use-favorite";

type Props = {
  variant: "hover" | "static";
  productId: number;
};

export const ToggleFavoriteBtn = ({ variant, productId }: Props) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(productId);

  if (variant === "hover") {
    return (
      <Heart
        onClick={() => toggleFavorite(productId)}
        width={32}
        height={32}
        className={cn(
          "block stroke-primary absolute opacity-0 left-[12px] top-[12px] invisible group-hover:opacity-100 group-hover:visible cursor-pointer transition-all duration-300 ease-in-out",
          isFav ? "fill-primary visible opacity-100" : "fill-transparent",
        )}
      />
    );
  }
  if (variant === "static") {
    return (
      <Heart
        onClick={() => toggleFavorite(productId)}
        width={32}
        height={32}
        className={cn(
          "block stroke-primary hover:cursor-pointer transition-all duration-300 ease-in-out",
          isFav ? "fill-primary" : "fill-transparent",
        )}
      />
    );
  }

  return null;
};
