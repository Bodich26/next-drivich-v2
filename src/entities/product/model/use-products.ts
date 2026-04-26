import { productsStore } from "./products-store";
import { getProductsApi } from "../api/get-products-api";
import { getErrorMessage, ProductFilters } from "@/shared";

export const useProducts = () => {
  const store = productsStore();

  const loadProducts = async (
    filters: ProductFilters = {},
    signal?: AbortSignal,
  ) => {
    const { setStatus } = store.actions;
    setStatus("loading");

    try {
      const res = await getProductsApi(filters, signal);
      if (!res) return;

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

  return {
    products: store.items,
    error: store.error,
    message: store.message,
    loadProducts,
    status: store.status,
  };
};
