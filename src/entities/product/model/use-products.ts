import { productsStore } from "./products-store";
import { getProductsApi } from "../api/get-products-api";
import { getErrorMessage } from "@/shared";

export const useProducts = () => {
  const store = productsStore();

  const loadProducts = async () => {
    store.setStatus("loading");

    try {
      const res = await getProductsApi();

      if (res.success) {
        productsStore.setState({
          items: res.data || [],
          status: "success",
          error: null,
          message: res.message || "Products loaded successfully",
        });
      } else {
        productsStore.setState({
          items: [],
          status: "error",
          error: res.error || "Failed to load products",
        });
      }
    } catch (err: unknown) {
      productsStore.setState({
        items: [],
        status: "error",
        error: getErrorMessage(err),
      });
    }
  };

  const productsLength = store.items.length;
  return {
    products: store.items,
    error: store.error,
    message: store.message,
    loadProducts,
    productsLength,
    status: store.status,
  };
};
