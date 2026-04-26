import axios from "axios";
import { apiClient } from "@/shared";
import { API_ROUTES } from "@/../routes";

export const toggleFromCartApi = async (
  productId: number,
  quantity: number,
) => {
  const CART_URL = `${API_ROUTES.CART}`;
  try {
    const res = await apiClient.put(CART_URL, {
      productId,
      quantity,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Server error occurred");
    }

    throw new Error("Unknown error");
  }
};
