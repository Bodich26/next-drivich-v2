import Image from "next/image";
import Link from "next/link";
import { PriceFormat } from "@/shared";
import { OrderItemUI } from "../model/order-type";
import { PUBLIC_ROUTES } from "@/../routes";

type Props = {
  orderProducts: OrderItemUI[];
};

export const OrderProductList = ({ orderProducts }: Props) => {
  return (
    <div className="flex flex-col gap-3 h-[140px] overflow-y-auto pr-2">
      {orderProducts.map((item) => (
        <div key={item.id} className="flex gap-3 border rounded-md p-3 bg-card">
          {/* IMAGE */}
          <div className="w-[170px] h-[90px] relative shrink-0">
            <Image
              src={item.product.imageSrc}
              alt={item.product.model}
              fill
              className="object-contain rounded-md"
            />
          </div>

          {/* INFO */}
          <div className="flex flex-col flex-1">
            <Link
              href={`${PUBLIC_ROUTES.PRODUCT}/${item.productId}`}
              className="font-medium capitalize hover:underline"
            >
              {item.product.model}
            </Link>

            <div className="text-sm text-gray-500">
              <PriceFormat price={item.price} /> × {item.quantity}
            </div>
          </div>

          {/* TOTAL */}
          <div className="font-semibold text-sm">
            <PriceFormat price={item.price} />
          </div>
        </div>
      ))}
    </div>
  );
};
