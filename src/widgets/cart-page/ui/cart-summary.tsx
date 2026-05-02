import { CheckoutAlertDialog } from "@/features/checkout";
import { Asides } from "@/shared";

type Props = {
  totalPrice: number | string;
  cartLength: number;
};

export const CartSummary = ({ totalPrice, cartLength }: Props) => {
  return (
    <Asides id={"cart"}>
      <div className="flex justify-between flex-col h-full">
        <div>
          <h3 className="text-xl font-semibold mb-2">Summary</h3>
          <div className="text-sm text-gray-500 mb-4">{cartLength} items</div>
          <div className="flex flex-col gap-2 text-sm">
            <dl className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>{totalPrice}</dd>
            </dl>
            <dl className="flex justify-between text-gray-500">
              <dt>Delivery</dt>
              <dd>Free</dd>
            </dl>
            <dl className="flex justify-between text-gray-500">
              <dt>Tax</dt>
              <dd>—</dd>
            </dl>
            <div className="h-px bg-gray-200 my-2" />
            <dl className="flex justify-between text-lg font-semibold">
              <dt>Total</dt>
              <dd>{totalPrice}</dd>
            </dl>
          </div>
        </div>
        <div>
          <CheckoutAlertDialog />
          <div className="text-xs text-gray-400 mt-3 text-center">
            Secure checkout • 256-bit SSL
          </div>
          <div className="text-sm text-green-600 mt-2 text-center">
            Free delivery included
          </div>
        </div>
      </div>
    </Asides>
  );
};
