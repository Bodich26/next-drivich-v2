/**
 * ============================
 * 🌍 API ENDPOINTS
 * ============================
 * Серверные маршруты (используются для запросов)
 */
export const API_ROUTES = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  BASE_API: "/api",
  AUTH: "/auth",
  AUTH_LOGIN: "/login",
  AUTH_REGISTER: "/register",
  CART: "/cart",
  FAVORITES: "/favorites",
  ORDERS: "/orders",
  PRODUCTS: "/products",
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
