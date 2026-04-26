import { Button } from "@/shared";
import { useCart } from "../model/use-cart";

type ButtonQuantityProps = {
  productId: number;
  quantity: number;
};

export const ToggleQuantityBtn = ({
  productId,
  quantity,
}: ButtonQuantityProps) => {
  const { handelToggleFromCart } = useCart();

  return (
    <div className="flex items-center gap-3 mt-4">
      <Button
        variant={"secondary"}
        onClick={() => handelToggleFromCart(productId, quantity - 1)}
        className="px-3 py-1 border rounded-md cursor-pointer"
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        variant={"secondary"}
        onClick={() => handelToggleFromCart(productId, quantity + 1)}
        className="px-3 py-1 border rounded-md cursor-pointer"
      >
        +
      </Button>
    </div>
  );
};
