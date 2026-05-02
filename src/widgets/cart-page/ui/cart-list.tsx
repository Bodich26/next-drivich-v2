import { CartItem, ProductInCart } from "@/features/cart";

type Props = {
  cart: ProductInCart[];
};
export const CartList = ({ cart }: Props) => {
  return (
    <div className="flex flex-col gap-8 flex-1">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          model={item.model}
          price={item.price}
          imageSrc={item.imageSrc}
          quantity={item.quantity}
          color={item.color}
          discount={item.discount}
        />
      ))}
    </div>
  );
};
