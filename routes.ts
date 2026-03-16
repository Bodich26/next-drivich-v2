/**
 * ============================
 * 🌍 API ENDPOINTS
 * ============================
 * Серверные маршруты (используются для запросов)
 */
export const API_ROUTES = {
  BASE_URL: process.env.NEXT_BASE_URL!,
  BASE_API: "/api",
  AUTH: "/auth",
  CART: "/cart",
  FAVORITES: "/favorites",
  ORDERS: "/orders",
} as const;

/**
 * ============================
 * 🌐 PUBLIC ROUTES
 * ============================
 * Основные публичные страницы (фронтенд)
 */
export const PUBLIC_ROUTES = {
  HOME: "/",
  CART: "/cart",
  PRODUCT: "/product",
  PROFILE: "/profile",
  AUTH: "/auth",
  ADMIN: "/admin",
} as const;
