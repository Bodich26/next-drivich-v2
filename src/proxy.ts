import NextAuth from "next-auth";
import authConfig from "../auth.config";
import { NextResponse } from "next/server";
import { PUBLIC_ROUTES } from "../routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const userRole = req.auth?.user?.role;
  const isAdminRoute = nextUrl.pathname.startsWith(PUBLIC_ROUTES.ADMIN);

  const protectedRoutes = [
    `${PUBLIC_ROUTES.PRODUCT}`,
    `${PUBLIC_ROUTES.PROFILE}`,
    `${PUBLIC_ROUTES.CART}`,
    `${PUBLIC_ROUTES.ADMIN}`,
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  );
  const isAuthPage = nextUrl.pathname.startsWith(`${PUBLIC_ROUTES.AUTH}`);

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(
      new URL(
        `${PUBLIC_ROUTES.AUTH}?callbackUrl=${encodeURIComponent(nextUrl.pathname)}`,
        nextUrl,
      ),
    );
  }

  if (isAdminRoute && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL(`${PUBLIC_ROUTES.HOME}`, nextUrl));
  }

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL(`${PUBLIC_ROUTES.HOME}`, nextUrl));
  }

  return NextResponse.next();
});
export const config = {
  matcher: [
    "/auth",
    "/:path*",
    "/profile/:path*",
    "/product/:path*",
    "/admin/:path*",
  ],
};
