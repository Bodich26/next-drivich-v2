import { API_ROUTES } from "@/../routes";
import { notFound } from "next/navigation";
import { OrderUI } from "../model/order-type";
import { cookies } from "next/headers";

export interface OrdersApiResponse {
  success: boolean;
  data: OrderUI[];
  message?: string;
  error?: string;
}

export async function getOrdersApi(): Promise<OrderUI[]> {
  const ORDERS_URL = `${API_ROUTES.BASE_URL}/${API_ROUTES.BASE_API}/${API_ROUTES.ORDERS}`;
  const cookieStore = await cookies();

  try {
    const res = await fetch(ORDERS_URL, {
      cache: "no-store",
      next: {
        tags: [`orders`],
      },
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    if (!res.ok) {
      if (res.status === 404) notFound();
      throw new Error(`HTTP error: ${res.status}`);
    }

    const responseData: OrdersApiResponse = await res.json();
    return responseData.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
