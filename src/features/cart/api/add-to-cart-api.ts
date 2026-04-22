import axios from "axios";
import { apiClient } from "@/shared";
import { API_ROUTES } from "@/../routes";

export const addToCartApi = async (productId: number) => {
  const CART_URL = `${API_ROUTES.CART}`;
  try {
    const res = await apiClient.post(CART_URL, {
      productId,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Server error occurred");
    }

    throw new Error("Unknown error");
  }
};
