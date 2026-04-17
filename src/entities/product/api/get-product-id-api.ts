import { API_ROUTES } from "@/../routes";
import { Product } from "@prisma/client";
import { notFound } from "next/navigation";

export interface ProductApiResponse {
  success: boolean;
  data: Product;
  message?: string;
  error?: string;
}

export async function getProductIdApi(productId: string): Promise<Product> {
  const PRODUCTS_URL = `${API_ROUTES.BASE_URL}/${API_ROUTES.BASE_API}/${API_ROUTES.PRODUCTS}/${productId}`;

  try {
    const res = await fetch(PRODUCTS_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) notFound();
      throw new Error(`HTTP error: ${res.status}`);
    }

    const responseData: ProductApiResponse = await res.json();
    return responseData.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
