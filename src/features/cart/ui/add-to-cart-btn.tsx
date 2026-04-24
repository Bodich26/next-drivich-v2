"use client";
import { Button, cn } from "@/shared";
import { Check, ShoppingBag } from "lucide-react";
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
          wasCart ? "bg-green-100 text-green-600" : "",
        )}
        size="lg"
        onClick={() => handleAddToCart(productId)}
      >
        {wasCart ? "In Cart" : "Add to Cart"}
      </Button>
    ),
    icon: (
      <Button
        size={"lg"}
        onClick={() => handleAddToCart(productId)}
        disabled={wasCart}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl transition",
          wasCart ? "bg-green-100 text-green-600" : "",
        )}
      >
        {wasCart ? (
          <>
            <Check size={16} />
            Added
          </>
        ) : (
          <>
            <ShoppingBag size={16} />
            Add to cart
          </>
        )}
      </Button>
    ),
  };

  return variants[variant] || null;
};
