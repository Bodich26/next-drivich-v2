import { getErrorMessage, useCurrentUser } from "@/shared";
import { useCartStore } from "./use-cart-store";
import { getCartApi } from "../api/get-cart-api";

export const useCart = () => {
  const currentUser = useCurrentUser();
  const store = useCartStore();

  //----
  const isCart = (productId: number) =>
    store.items.some((item) => item.id === productId);

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

  return {
    cartItems: store.items,
    status: store.status,
    error: store.error,
    message: store.message,
    isCart,
    loadCart,
  };
};
