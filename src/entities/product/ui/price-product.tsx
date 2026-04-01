import { PriceFormat } from "@/shared";
import { PriceProductView, PriceProductProps } from "../model/products-type";
import { calcDiscountPrice } from "../model/calc-discount-price";

export const PriceProduct = ({ price, discount, view }: PriceProductProps) => {
  const hasDiscount = discount && discount > 0;
  const discountedPrice = calcDiscountPrice(price, discount);

  const currentPrice = (
    <span className="font-bold">
      <PriceFormat price={discountedPrice} />
    </span>
  );

  const oldPrice = hasDiscount ? (
    <span className="text-md line-through">
      <PriceFormat price={price} />
    </span>
  ) : null;

  const variants: Record<PriceProductView, React.ReactNode> = {
    main: (
      <div className="flex gap-3 items-end">
        <span className="text-3xl font-medium">{currentPrice}</span>
        {oldPrice}
      </div>
    ),

    catalog: (
      <div className="flex flex-col gap-0.5 ">
        <span className="text-xl font-bold">{currentPrice}</span>
        {oldPrice && <span className="opacity-70">{oldPrice}</span>}
      </div>
    ),

    cart: (
      <div className="flex flex-col relative">
        <span>{currentPrice}</span>
        {oldPrice && <span className="absolute -top-5">{oldPrice}</span>}
      </div>
    ),

    favorites: (
      <div className="flex flex-col gap-0.5 ">
        <span className="text-lg font-bold">{currentPrice}</span>
        {oldPrice && <span className="opacity-70">{oldPrice}</span>}
      </div>
    ),
  };

  return variants[view] || null;
};
