"use client";
import React from "react";
import { UserDropdown } from "@/entities/user";
import { SigninButton } from "@/features/auth";
import { OpenFavoriteBtn } from "@/features/favorite";
import { Container, DarkMode, useCurrentUser } from "@/shared";
import { FavoritesDrawer } from "@/widgets/favorites";
import { Logo } from "@/shared";
import { useFavorites } from "@/features/favorite";
import { CartBtn, useCart } from "@/features/cart";

export const Header = () => {
  const user = useCurrentUser();
  const { loadFavorites } = useFavorites();
  const { loadCart } = useCart();

  React.useEffect(() => {
    loadFavorites();
    loadCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="border border-border bg-card fixed left-0 right-0 z-10">
      <Container>
        <nav className="flex items-center justify-between pt-[8px] pb-[8px]">
          <Logo />
          <div className="flex gap-[15px] items-center">
            {user ? (
              <>
                <FavoritesDrawer>
                  <OpenFavoriteBtn />
                </FavoritesDrawer>
                <CartBtn />
                <UserDropdown />
              </>
            ) : (
              <SigninButton />
            )}
            <DarkMode />
          </div>
        </nav>
      </Container>
    </header>
  );
};
