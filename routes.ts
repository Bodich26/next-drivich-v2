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
} as const;

/**
 * ============================
 * 🌐 PUBLIC ROUTES
 * ============================
 * Основные публичные страницы (фронтенд)
 */
export const PUBLIC_ROUTES = {
  HOME: "/",
} as const;
