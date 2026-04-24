import { Button } from "@/shared";

type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
  color: string;
};
export const CartItem = ({
  id,
  title,
  price,
  imageUrl,
  quantity,
  color,
}: CartItem) => {
  return (
    <div
      key={id}
      className="flex gap-4 bg-card border border-border rounded-md p-4 shadow-sm"
    >
      {/* IMAGE */}
      <img
        src={imageUrl}
        alt={title}
        className="w-24 h-24 object-cover rounded-md"
      />

      {/* CENTER */}
      <div className="flex flex-col flex-1">
        {/* TITLE */}
        <h2 className="font-semibold text-lg">{title}</h2>

        {/* PRICE PER ITEM */}
        <div className="text-gray-500 text-sm">${price} / per item</div>

        {/* COLOR */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-500">Color:</span>

          <div
            className="w-5 h-5 rounded-full border"
            style={{ backgroundColor: color }}
          />
        </div>

        {/* CONTROLS */}
        <div className="flex items-center gap-3 mt-4">
          <Button
            variant={"secondary"}
            onClick={() => console.log(id)}
            className="px-3 py-1 border rounded-md"
          >
            -
          </Button>

          <span>{quantity}</span>

          <Button
            variant={"secondary"}
            onClick={() => console.log(id)}
            className="px-3 py-1 border rounded-md"
          >
            +
          </Button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-between items-end">
        <Button
          variant={"destructive"}
          onClick={() => console.log(id)}
          className="cursor-pointer"
        >
          Remove
        </Button>

        {/* TOTAL PRICE */}
        <div className="text-right">
          <div className="text-xs text-gray-400">Total</div>
          <div className="font-semibold text-lg">${price * quantity}</div>
        </div>
      </div>
    </div>
  );
};
