import { showToast, useCurrentUser } from "@/shared";
import { favoriteStore } from "./favorite-store";
import { getFavoriteProductsApi } from "../api/get-favorite-products-api";
import { FavoriteProduct } from "./favorite-type";
import { removeFavoriteProductApi } from "../api/remove-favorite-product-api";
import { addFavoriteProductApi } from "../api/add-favorite-product-api";

export const useFavorites = () => {
  const currentUser = useCurrentUser();
  const store = favoriteStore();

  const isFavorite = (productId: number) =>
    store.items.some((item) => item.id === productId);

  const toggleFavorite = async (product: FavoriteProduct) => {
    if (!currentUser) {
      showToast("auth", "favorites");
      return;
    }

    const wasFavorite = isFavorite(product.id);

    if (wasFavorite) {
      store.removeFavorite(product.id);
    } else {
      store.addFavorite(product);
    }

    try {
      if (wasFavorite) {
        const res = await removeFavoriteProductApi(product.id);
        if (!res.success) {
          showToast(
            "error",
            "favorites",
            res.message || "Error remove to favorites",
          );
          store.setError(res.message || "Error remove to favorites");
          return;
        }
      } else {
        const res = await addFavoriteProductApi(product.id);
        if (!res.success) {
          showToast(
            "error",
            "favorites",
            res.message || "Error adding to favorites",
          );
          store.setError(res.message || "Error adding to favorites");
          return;
        }
      }
      showToast(wasFavorite ? "remove" : "add", "favorites");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (wasFavorite) {
        store.addFavorite(product);
      } else {
        store.removeFavorite(product.id);
      }

      showToast(
        "error",
        "favorites",
        err.message || "Failed to change favorites",
      );
      store.setError(err.message || "Failed to change favorites");
    }
  };

  const removeFavorite = async (productId: number) => {
    if (!currentUser) {
      showToast("auth", "favorites");
      return;
    }

    const productToRemove = store.items.find((item) => item.id === productId);
    if (!productToRemove) return;

    store.removeFavorite(productId);

    try {
      const res = await removeFavoriteProductApi(productId);
      if (!res.success) {
        store.setError(res.error);
        showToast(
          "error",
          "favorites",
          res.message || "Failed to remove favorites",
        );
        return;
      }
      showToast("remove", "favorites");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showToast(
        "error",
        "favorites",
        error.message || "Failed to change favorites",
      );
      store.setError(error.message || "Error remove to favorites");
    }
  };

  const loadFavorites = async () => {
    store.setLoading(true);
    store.setError(null);

    try {
      const res = await getFavoriteProductsApi();
      if (!res.success) {
        store.setLoading(false);
        store.setError(res.error);
        store.setFavorites([]);
      }

      console.log(res);

      store.setFavorites(res.data || []);
      store.setMessage(res.message);
      store.setLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Failed to load favorites:", err);
      store.setError(err.message || "Failed to load favorites");
      store.setLoading(false);
      store.setFavorites([]);
    }
  };

  const countFavorites = store.items.length;

  return {
    favorites: store.items,
    isLoading: store.isLoading,
    error: store.error,
    message: store.message,
    isFavorite,
    toggleFavorite,
    loadFavorites,
    removeFavorite,
    countFavorites,
  };
};
