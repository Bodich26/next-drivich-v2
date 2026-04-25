import { CartItemProps } from "../model/cart-type";
import { Button, PriceFormat } from "@/shared";
import Image from "next/image";

export const CartItem = ({
  id,
  imageSrc,
  model,
  price,
  color,
  quantity,
}: CartItemProps) => {
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
        <h2 className="font-semibold text-lg capitalize">{model}</h2>
        <div className="text-gray-500 text-sm">
          <PriceFormat price={price} /> / per item
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-500">Color:</span>
          <div
            className="w-5 h-5 rounded-full border"
            style={{ backgroundColor: color }}
          />
        </div>
        <div className="flex items-center gap-3 mt-4">
          <Button
            variant={"secondary"}
            onClick={() => console.log(id)}
            className="px-3 py-1 border rounded-md cursor-pointer"
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            variant={"secondary"}
            onClick={() => console.log(id)}
            className="px-3 py-1 border rounded-md cursor-pointer"
          >
            +
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <Button
          variant={"destructive"}
          onClick={() => console.log(id)}
          className="cursor-pointer"
        >
          Remove
        </Button>
        <div className="text-right">
          <div className="text-xs text-gray-400">Total</div>
          <div className="font-semibold text-lg">
            <PriceFormat price={price * quantity} />
          </div>
        </div>
      </div>
    </div>
  );
};
