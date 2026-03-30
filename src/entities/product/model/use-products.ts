import { productsStore } from "./products-store";
import { getProductsApi } from "../api/get-products-api";
import { getErrorMessage } from "@/shared";

export const useProducts = () => {
  const store = productsStore();

  const loadProducts = async () => {
    store.setLoading(true);
    store.setError(null);
    store.setMessage(null);

    try {
      const res = await getProductsApi();
      if (res.success) {
        store.setProducts(res.data || []);
        store.setMessage(res.message || "Products loaded successfully");
      } else {
        const errorMsg = res.error || "Failed to load products";
        store.setError(errorMsg);
        store.setProducts([]);
      }
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);
      store.setError(errorMessage);
      store.setProducts([]);
    } finally {
      store.setLoading(false);
    }
  };

  const productsLength = store.items.length;
  return {
    products: store.items,
    isLoading: store.isLoading,
    error: store.error,
    message: store.message,
    loadProducts,
    productsLength,
  };
};
