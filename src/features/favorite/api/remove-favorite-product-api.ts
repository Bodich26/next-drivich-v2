import { apiClient } from "@/shared";
import { API_ROUTES } from "@/../routes";
import axios from "axios";

export async function removeFavoriteProductApi(productId: number) {
  const FAVORITES_URL = `${API_ROUTES.FAVORITES}`;
  try {
    const res = await apiClient.delete(FAVORITES_URL, {
      data: { productId },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Server error occurred");
    }

    throw new Error("Unknown error");
  }
}
