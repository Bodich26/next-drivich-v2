import { getErrorMessage, showToast, useCurrentUser } from "@/shared";
import { useFavoriteStore } from "./use-favorite-store";
import { getFavoriteProductsApi } from "../api/get-favorite-products-api";
import { removeFavoriteProductApi } from "../api/remove-favorite-product-api";
import { addFavoriteProductApi } from "../api/add-favorite-product-api";

export const useFavorites = () => {
  const currentUser = useCurrentUser();
  const store = useFavoriteStore();

  ///----
  const isFavorite = (productId: number) =>
    store.items.some((item) => item.id === productId);

  //---
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
          store.actions.setError(res.message || "Error remove to favorites");
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
          store.actions.setError(res.message || "Error adding to favorites");
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
      store.actions.setError(errorMessage || "Failed to change favorites");
    }
  };

  ///---
  const removeFavorite = async (productId: number) => {
    if (!currentUser) {
      showToast("auth", "favorites");
      return;
    }

    const productToRemove = store.items.find((item) => item.id === productId);
    if (!productToRemove) return;
    store.actions.removeFavorite(productId);

    try {
      const res = await removeFavoriteProductApi(productId);
      if (!res.success) {
        store.actions.setError(res.error);
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
      store.actions.setError(errorMessage || "Error remove to favorites");
    }
  };

  const loadFavorites = async () => {
    if (!currentUser) {
      return;
    }
    store.actions.setStatus("loading");

    try {
      const res = await getFavoriteProductsApi();
      if (res.success) {
        useFavoriteStore.setState({
          items: res.data || [],
          status: "success",
          error: null,
          message: res.message || "Favorites loaded successfully",
        });
      } else {
        useFavoriteStore.setState({
          items: [],
          status: "error",
          error: res.error || "Failed to load favorites",
        });
      }
    } catch (err: unknown) {
      useFavoriteStore.setState({
        items: [],
        status: "error",
        error: getErrorMessage(err),
      });
    }
  };

  const countFavorites = store.items.length;

  return {
    favorites: store.items,
    status: store.status,
    error: store.error,
    message: store.message,
    isFavorite,
    toggleFavorite,
    loadFavorites,
    removeFavorite,
    countFavorites,
  };
};
