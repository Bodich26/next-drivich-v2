import { getErrorMessage, showToast, useCurrentUser } from "@/shared";
import { useCartStore } from "./use-cart-store";
import { getCartApi } from "../api/get-cart-api";
import { addToCartApi } from "../api/add-to-cart-api";
import { deleteFromCartApi } from "../api/delete-from-cart-api";
import { toggleFromCartApi } from "../api/toggle-from-cart-api";

export const useCart = () => {
  const currentUser = useCurrentUser();
  const store = useCartStore();

  //----
  const isCart = (productId: number) =>
    store.items.some((item) => item.id === productId);

  const handleAddToCart = async (productId: number) => {
    if (!currentUser) {
      showToast("auth", "cart");
      return;
    }
    const wasCart = isCart(productId);

    if (wasCart) {
      return;
    }

    try {
      const res = await addToCartApi(productId);
      if (!res.success) {
        showToast("error", "cart", res.message || "Failed adding to cart");
        store.actions.setError(res.message || "Error adding to cart");
        return;
      }

      showToast("add", "cart");
      await loadCart();
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);
      if (wasCart) loadCart();

      showToast("error", "cart", errorMessage || "Failed to change cart");
      store.actions.setError(errorMessage || "Failed to change cart");
    }
  };

  //-------
  const loadCart = async () => {
    if (!currentUser) {
      return;
    }

    store.actions.setStatus("loading");

    try {
      const res = await getCartApi();
      if (res.success) {
        useCartStore.setState({
          items: res.data || [],
          status: "success",
          error: null,
          message: res.message || "Cart loaded successfully",
        });
      } else {
        useCartStore.setState({
          items: [],
          status: "error",
          error: res.error || "Failed to load cart",
        });
      }
    } catch (err: unknown) {
      useCartStore.setState({
        items: [],
        status: "error",
        error: getErrorMessage(err),
      });
    }
  };
  //---

  const handelRemoveCart = async (productId: number) => {
    if (!currentUser) {
      showToast("auth", "cart");
      return;
    }

    const productToRemove = store.items.find((item) => item.id === productId);
    if (!productToRemove) return;
    store.actions.removeCart(productId);

    try {
      const res = await deleteFromCartApi(productId);
      if (!res.success) {
        store.actions.setError(res.error);
        showToast("error", "cart", res.message || "Failed to remove cart");
        return;
      }
      showToast("remove", "cart");
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);
      showToast("error", "cart", errorMessage || "Failed to change cart");
      store.actions.setError(errorMessage || "Error remove to cart");
    }
  };
  //---

  const handelToggleFromCart = async (productId: number, quantity: number) => {
    if (!currentUser) {
      showToast("auth", "cart");
      return;
    }

    if (quantity < 1 || quantity > 10) {
      return;
    }

    try {
      const res = await toggleFromCartApi(productId, quantity);
      if (!res.success) {
        store.actions.setError(res.error);
        showToast("error", "cart", res.message || "Failed add to cart");
        return;
      }
      showToast("add", "cart");
      store.actions.updateQuantity(productId, quantity);
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);
      showToast("error", "cart", errorMessage || "Failed to change cart");
      store.actions.setError(errorMessage || "Error add to cart");
    }
  };

  //----
  const totalPrice = store.items.reduce((sum, item) => {
    const discountedPrice = item.price * (1 - (item.discount || 0) / 100);
    return sum + discountedPrice * item.quantity!;
  }, 0);

  const totalPrices = totalPrice
    ? `$${totalPrice.toLocaleString("en-US")}`
    : "$ 0";

  const cartCount = store.items.length;

  return {
    cartItems: store.items,
    status: store.status,
    error: store.error,
    message: store.message,
    handleAddToCart,
    isCart,
    loadCart,
    totalPrices,
    cartCount,
    handelRemoveCart,
    handelToggleFromCart,
  };
};
