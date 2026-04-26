import { Button } from "@/shared";
import { useCart } from "../model/use-cart";

type Props = {
  productId: number;
};

export const RemoveFromCartBtn = ({ productId }: Props) => {
  const { handelRemoveCart } = useCart();
  return (
    <Button
      variant={"destructive"}
      onClick={() => handelRemoveCart(productId)}
      className="cursor-pointer"
    >
      Remove
    </Button>
  );
};
