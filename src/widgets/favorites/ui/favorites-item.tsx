import { PriceProduct } from "@/entities/product";
// import { AddToCartBtn } from "@/features/cart";
import { RemoveFavoriteBtn } from "@/features/favorite";
import { FavoriteProduct } from "@/features/favorite/model/favorite-type";
import { BadgeSales, DecorLine } from "@/shared";
import Image from "next/image";
import Link from "next/link";
import { PUBLIC_ROUTES } from "@/../routes";

export const FavoriteItem = ({ product }: { product: FavoriteProduct }) => {
  return (
    <div className="max-w-[300px] relative">
      <RemoveFavoriteBtn productId={product.id} />
      <div>
        <BadgeSales className="top-2 right-2" discount={product.discount} />
        <Image
          src={product.imageSrc}
          width={300}
          height={160}
          alt={product.model}
          className="rounded-t-md"
        />
      </div>
      <div className=" pt-2 pb-4 pr-4 pl-4 bg-color-minimal-light-white rounded-b-md">
        <Link
          className="product-item-title uppercase"
          href={`${PUBLIC_ROUTES.PRODUCT}/${product.id}`}
        >
          {product.model}
        </Link>
        <DecorLine />
        <div className="flex flex-row justify-between mt-[8px]">
          <PriceProduct
            price={product.price}
            discount={product.discount}
            view="favorites"
          />
          {/* <AddToCartBtn variant="icon" productId={product.id} /> */}
        </div>
      </div>
    </div>
  );
};
