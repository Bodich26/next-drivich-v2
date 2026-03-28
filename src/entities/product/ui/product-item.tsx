import Image from "next/image";
import Link from "next/link";
import { BadgeSales, DecorLine } from "@/shared";
import { PriceProduct } from "./price-product";
import { ProductInfo } from "./product-info";
import { Products } from "../model/products-type";

type Props = {
  product: Products;
  children: React.ReactNode;
};

export const ProductItem = ({ product, children }: Props) => {
  return (
    <div className="group max-w-[300px] hover-shadow-block relative">
      <div>
        <BadgeSales discount={product.discount} />
        {children}
        <Image
          src={product.imageSrc}
          width={300}
          height={160}
          alt={product.model}
          className="rounded-t-md"
        />
      </div>
      <div className="pt-2 pb-4 pr-4 pl-4 bg-color-white rounded-b-md">
        <Link
          className="product-item-title uppercase"
          href={`/product/${product.id}`}
          passHref
        >
          {product.model}
        </Link>
        <DecorLine />
        <div className="flex flex-col gap-1">
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
          {product.engineType === "ENGINE" &&
            product.engineValue !== undefined && (
              <ProductInfo
                label="Engine"
                value={product.engineValue}
                text="L"
              />
            )}
          {product.engineType === "ELECTRO" &&
            product.batteryCapacity !== undefined && (
              <ProductInfo
                label="Battery"
                value={product.batteryCapacity}
                text="kw/h"
              />
            )}
        </div>
        <div className="flex items-end justify-between mt-4">
          {/* <ButtonAddToCart variant="button" productId={product.id} /> */}
          <PriceProduct
            price={product.price}
            discount={product.discount}
            view="catalog"
          />
        </div>
      </div>
    </div>
  );
};
