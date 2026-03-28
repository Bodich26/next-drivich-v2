import { productsStore } from "./products-store";
import { getProductsApi } from "../api/get-products-api";

export const useProducts = () => {
  const store = productsStore();

  const loadProducts = async () => {
    store.setLoading(true);
    store.setError(null);
    try {
      const res = await getProductsApi();
      if (!res.success) {
        store.setLoading(false);
        store.setError(res.error);
        store.setProducts([]);
      }

      console.log(res);
      store.setProducts(res.data || []);
      store.setMessage(res.message);
      store.setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Failed to load products:", err);
      store.setError(err.message || "Failed to load products");
      store.setLoading(false);
      store.setProducts([]);
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
