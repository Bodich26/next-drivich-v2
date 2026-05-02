import Image from "next/image";
import Link from "next/link";
import { BadgeSales, DecorLine } from "@/shared";
import { PriceProduct } from "./price-product";
import { ProductInfo } from "./product-info";
import { ProductEntities } from "../model/products-type";
import { PUBLIC_ROUTES } from "@/../routes";

type Props = {
  product: ProductEntities;
  favoriteSlot?: React.ReactNode;
  cartSlot?: React.ReactNode;
};

export const ProductItem = ({ product, favoriteSlot, cartSlot }: Props) => {
  return (
    <div className="group relative flex flex-col h-full rounded-md overflow-hidden bg-card shadow-sm">
      {/* IMAGE BLOCK */}
      <div className="relative w-full aspect-[4/2]">
        <BadgeSales discount={product.discount} variant="item" />
        {favoriteSlot}
        <Image
          src={product.imageSrc}
          alt={product.model}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-4">
        <Link
          className="text-xl font-bold uppercase mb-1"
          href={`${PUBLIC_ROUTES.PRODUCT}/${product.id}`}
        >
          {product.model}
        </Link>

        <DecorLine />

        <div className="flex flex-col gap-1 flex-1 mt-1">
          <ProductInfo label="Power" value={product.power} text="hp" />

          {product.speed !== undefined && (
            <ProductInfo label="Top speed" value={product.speed} text="km/h" />
          )}

          {product.acceleration !== undefined && (
            <ProductInfo
              label="0-100 km/h"
              value={product.acceleration}
              text="s"
            />
          )}
        </div>

        {/* FOOTER */}
        <div className="flex items-end justify-between mt-4">
          <PriceProduct
            price={product.price}
            discount={product.discount}
            view="catalog"
          />
          {cartSlot}
        </div>
      </div>
    </div>
  );
};
