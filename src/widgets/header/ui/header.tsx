"use client";
import React from "react";
import { UserDropdown } from "@/entities/user";
import { SigninButton } from "@/features/auth";
// import { CartBtn } from "@/features/cart";
import { OpenFavoriteBtn } from "@/features/favorite";
import { Container, useCurrentUser } from "@/shared";
import { FavoritesDrawer } from "@/widgets/favorites";
import { Logo } from "@/shared";
import { useFavorites } from "@/features/favorite";

export const Header = () => {
  const user = useCurrentUser();
  const { loadFavorites } = useFavorites();

  React.useEffect(() => {
    loadFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="border-b border-[#D2D2D9] bg-color-white mb-4">
      <Container>
        <nav className="flex items-center justify-between pt-[8px] pb-[8px]">
          <Logo />
          <div className="flex gap-[15px] items-center">
            {user ? (
              <>
                <FavoritesDrawer>
                  <OpenFavoriteBtn />
                </FavoritesDrawer>
                {/* <CartBtn /> */}
                <UserDropdown />
              </>
            ) : (
              <SigninButton />
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
};
