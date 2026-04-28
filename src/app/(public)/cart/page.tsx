"use client";
import { ToggleSummaryBtn, useCart } from "@/features/cart";
import { Container, EmptyState, DisplayError } from "@/shared";
import { CartList, CartSkeleton, CartSummary } from "@/widgets/cart-page";

export default function CartPage() {
  const { status, cartItems, totalCountCart, totalPrices, error } = useCart();

  return (
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12">
          {status === "idle" || status === "loading" ? (
            <CartSkeleton />
          ) : error ? (
            <DisplayError
              title={"Cart Error"}
              error={
                "There was an error loading your cart. Please try again later or refresh the page."
              }
            />
          ) : totalCountCart === 0 ? (
            <EmptyState
              desc={
                "Looks like you haven’t added anything yet. Start exploring and find your dream car."
              }
              title="Your cart is empty"
              icon="🛒"
            />
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Cart</h1>
                <ToggleSummaryBtn />
              </div>
              <div className="flex gap-8">
                <CartList cart={cartItems} />
                <CartSummary
                  totalPrice={totalPrices}
                  cartLength={totalCountCart}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </Container>
  );
}
