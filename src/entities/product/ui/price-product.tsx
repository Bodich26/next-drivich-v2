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
    <span className="text-black/50 line-through">
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
      <div className="flex flex-col relative">
        <span className="text-2xl font-bold">{currentPrice}</span>
        {oldPrice && <span className="absolute -top-5">{oldPrice}</span>}
      </div>
    ),

    cart: (
      <div className="flex flex-col relative">
        <span>{currentPrice}</span>
        {oldPrice && <span className="absolute -top-5">{oldPrice}</span>}
      </div>
    ),

    favorites: (
      <div>
        <dl className="flex items-center gap-2">
          <dt className="text-black-opacity75 text-base">Price: </dt>
          <dd className="text-base">{currentPrice}</dd>
        </dl>
        {oldPrice}
      </div>
    ),
  };

  return variants[view] || null;
};
