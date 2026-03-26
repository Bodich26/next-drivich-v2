import { CircleX } from "lucide-react";
import { useFavorites } from "../model/use-favorite";
export const RemoveFavoriteBtn = ({ productId }: { productId: number }) => {
  const { removeFavorite } = useFavorites();

  return (
    <CircleX
      onClick={() => removeFavorite(productId)}
      width={19}
      height={19}
      className=" absolute left-[7px] top-[5px] stroke-primary cursor-pointer"
    />
  );
};
