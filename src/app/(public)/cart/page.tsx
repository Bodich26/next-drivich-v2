"use client";
import { useCart } from "@/features/cart";
import { Container, EmptyState, DisplayError } from "@/shared";
import { CartList, CartSkeleton, CartSummary } from "@/widgets/cart-page";

export default function CartPage() {
  const { status, cartItems, cartCount, totalPrices, error } = useCart();

  return (
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12 space-y-10">
          {status === "idle" || status === "loading" ? (
            <CartSkeleton />
          ) : error ? (
            <DisplayError
              title={"Cart Error"}
              error={
                "There was an error loading your cart. Please try again later or refresh the page."
              }
            />
          ) : cartCount === 0 ? (
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
                <CartList cart={cartItems} />
                <CartSummary
                  isOpen={false}
                  totalPrice={totalPrices}
                  cartLength={cartCount}
                />
              </div>
            </>
          )}
        </div>
      </section>
    </Container>
  );
}
