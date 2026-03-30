import { getErrorMessage, showToast, useCurrentUser } from "@/shared";
import { favoriteStore } from "./favorite-store";
import { getFavoriteProductsApi } from "../api/get-favorite-products-api";
import { removeFavoriteProductApi } from "../api/remove-favorite-product-api";
import { addFavoriteProductApi } from "../api/add-favorite-product-api";

export const useFavorites = () => {
  const currentUser = useCurrentUser();
  const store = favoriteStore();

  const isFavorite = (productId: number) =>
    store.items.some((item) => item.id === productId);

  const toggleFavorite = async (productId: number) => {
    if (!currentUser) {
      showToast("auth", "favorites");
      return;
    }

    const wasFavorite = isFavorite(productId);
    try {
      if (wasFavorite) {
        const res = await removeFavoriteProductApi(productId);
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
        const res = await addFavoriteProductApi(productId);
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
      await loadFavorites();
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);
      if (wasFavorite) loadFavorites();

      showToast(
        "error",
        "favorites",
        errorMessage || "Failed to change favorites",
      );
      store.setError(errorMessage || "Failed to change favorites");
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
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);
      showToast(
        "error",
        "favorites",
        errorMessage || "Failed to change favorites",
      );
      store.setError(errorMessage || "Error remove to favorites");
    }
  };

  const loadFavorites = async () => {
    store.setLoading(true);
    store.setError(null);
    store.setMessage(null);

    try {
      const res = await getFavoriteProductsApi();
      if (res.success) {
        store.setMessage(res.message);
        store.setFavorites(res.data || []);
      } else {
        const errorMsg = res.error || "Failed to load favorites";
        store.setError(errorMsg);
        store.setFavorites([]);
      }
    } catch (err: unknown) {
      const errorMessage = getErrorMessage(err);
      store.setError(errorMessage);
      store.setFavorites([]);
    } finally {
      store.setLoading(false);
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
