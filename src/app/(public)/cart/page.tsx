"use client";
import { useState } from "react";
import { Container, Asides, EmptyState, Button, DisplayError } from "@/shared";
import { CartItem } from "@/features/cart";

type CartItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
  color: string;
};

const mockData: CartItem[] = [
  {
    id: 1,
    title: "fdsfs",
    price: 3123,
    imageUrl: "sdfsdf",
    quantity: 1,
    color: "#333",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(mockData);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12 space-y-10">
          {!cart && (
            <DisplayError
              title={"Cart Error"}
              error={
                "There was an error loading your cart. Please try again later or refresh the page."
              }
            />
          )}
          {cart.length === 0 ? (
            <EmptyState
              desc={
                "Looks like you haven’t added anything yet. Start exploring and find your dream car."
              }
              title="Your cart is empty"
              icon="🛒"
            />
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">Cart</h1>
              <div className="flex gap-8">
                {/* LEFT: ITEMS */}
                <div className="flex flex-col gap-8 flex-1">
                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      imageUrl={item.imageUrl}
                      quantity={item.quantity}
                      color={item.color}
                    />
                  ))}
                </div>

                {/* RIGHT: SUMMARY */}
                <Asides isOpen={isOpen} toggle={() => console.log()}>
                  <div className="flex justify-between flex-col h-full">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Summary</h3>

                      <div className="text-sm text-gray-500 mb-4">
                        {cart.length} items
                      </div>

                      <div className="flex flex-col gap-2 text-sm">
                        <dl className="flex justify-between">
                          <dt>Subtotal</dt>
                          <dd>${totalPrice}</dd>
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
                          <dd>${totalPrice}</dd>
                        </dl>
                      </div>
                    </div>

                    <div>
                      <Button
                        className="w-full mt-5 cursor-pointer"
                        size={"lg"}
                      >
                        Proceed to Checkout
                      </Button>

                      <div className="text-xs text-gray-400 mt-3 text-center">
                        Secure checkout • 256-bit SSL
                      </div>

                      <div className="text-sm text-green-600 mt-2 text-center">
                        Free delivery included
                      </div>
                    </div>
                  </div>
                </Asides>
              </div>
            </>
          )}
        </div>
      </section>
    </Container>
  );
}
