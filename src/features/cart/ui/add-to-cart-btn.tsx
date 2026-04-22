import { Button, cn } from "@/shared";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../model/use-cart";

type ButtonAddToCartProps = {
  variant: "button" | "icon";
  className?: string;
  productId: number;
};

export const AddToCartBtn = ({
  variant = "button",
  className,
  productId,
}: ButtonAddToCartProps) => {
  const { isCart, handleAddToCart } = useCart();
  const wasCart = isCart(productId);

  const variants = {
    button: (
      <Button
        className={cn(
          "font-medium text-base w-[128px] px-2 cursor-pointer",
          className,
          wasCart && "opacity-50 cursor-not-allowed",
        )}
        size="lg"
        onClick={() => handleAddToCart(productId)}
      >
        {wasCart ? "In Cart" : "Add to Cart"}
      </Button>
    ),
    icon: (
      <ShoppingBag
        width={32}
        height={32}
        className={cn(
          "stroke-primary cursor-pointer",
          className,
          wasCart && "opacity-50 cursor-not-allowed",
        )}
        onClick={() => handleAddToCart(productId)}
      />
    ),
  };

  return variants[variant] || null;
};
