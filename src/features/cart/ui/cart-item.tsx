import { CartItemProps } from "../model/cart-type";
import { BadgeSales, calculateItemTotal } from "@/shared";
import Image from "next/image";
import { RemoveFromCartBtn } from "./remove-from-cart-btn";
import { ToggleQuantityBtn } from "./toggle-quantity-btn";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/../routes";
import { PriceProduct } from "@/entities/product";

export const CartItem = ({
  id,
  imageSrc,
  model,
  price,
  color,
  quantity,
  discount,
}: CartItemProps) => {
  const itemTotal = calculateItemTotal(price, discount, quantity);
  const itemTotalFormatted = `$${itemTotal.toLocaleString("en-US")}`;

  return (
    <div className="flex gap-4 bg-card border border-border rounded-md p-4 shadow-sm">
      <div className="w-40 h-28 relative shrink-0">
        <Image
          src={imageSrc}
          alt={model}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-3">
          <Link
            href={`${PUBLIC_ROUTES.PRODUCT}/${id}`}
            className="font-semibold text-lg capitalize"
          >
            {model}
          </Link>
          <BadgeSales discount={discount} variant="cart" />
        </div>
        <div className="text-gray-500 text-sm">
          <PriceProduct price={price} discount={discount} view="cart" />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-500">Color:</span>
          <div
            className="w-5 h-5 rounded-full border"
            style={{ backgroundColor: color }}
          />
        </div>
        <ToggleQuantityBtn productId={id} quantity={quantity} />
      </div>
      <div className="flex flex-col justify-between items-end">
        <RemoveFromCartBtn productId={id} />
        <div className="text-right">
          <div className="text-xs text-gray-400">Total</div>
          <div className="font-semibold text-lg">{itemTotalFormatted}</div>
        </div>
      </div>
    </div>
  );
};
