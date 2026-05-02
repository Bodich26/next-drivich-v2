import Image from "next/image";
import Link from "next/link";
import { PriceProduct } from "@/entities/product";
import { RemoveFavoriteBtn } from "@/features/favorite";
import { FavoriteProduct } from "@/features/favorite";
import { BadgeSales, DecorLine } from "@/shared";
import { PUBLIC_ROUTES } from "@/../routes";
import { AddToCartBtn } from "@/features/cart";

export const FavoriteItem = ({ product }: { product: FavoriteProduct }) => {
  return (
    <div className="group relative flex flex-col h-full rounded-md bg-card">
      {/* IMAGE BLOCK */}
      <div className="relative w-full aspect-[4/2]">
        <RemoveFavoriteBtn productId={product.id} />
        <BadgeSales discount={product.discount} variant="item" />
        <Image
          src={product.imageSrc}
          alt={product.model}
          fill
          className="object-cover rounded-t-md"
        />
      </div>

      {/* CONTENT */}
      <div className="pt-2 pb-4 pr-4 pl-4 bg-card rounded-b-md">
        <Link
          className="text-xl font-bold uppercase mb-1 block"
          href={`${PUBLIC_ROUTES.PRODUCT}/${product.id}`}
        >
          {product.model}
        </Link>

        <DecorLine />

        <div className="flex flex-row justify-between mt-[8px] mt-1">
          <PriceProduct
            price={product.price}
            discount={product.discount}
            view="favorites"
          />
          <AddToCartBtn variant="icon" productId={product.id} />
        </div>
      </div>
    </div>
  );
};
