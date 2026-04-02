"use client";
import React from "react";
import {
  DecorLine,
  DisplayError,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SkeletonProduct,
} from "@/shared";
import { CloseFavoriteBtn } from "@/features/favorite";
import { FavoritesList } from "./favorites-list";
import { useFavorites } from "@/features/favorite";

export const FavoritesDrawer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { error, favorites, status, countFavorites } = useFavorites();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {children}
      <SheetContent className="w-[320px]! h-full flex flex-col p-4 justify-between sheet-bg">
        <SheetHeader>
          <SheetTitle className="font-bold text-2xl">Favorites</SheetTitle>
          <DecorLine />
        </SheetHeader>
        {status === "idle" || status === "loading" ? (
          <SkeletonProduct variant="favorites" />
        ) : error ? (
          <DisplayError title="An error has occurred" error={error} />
        ) : countFavorites === 0 ? (
          <DisplayError
            title="Favorite is empty"
            error={
              "There are no products in your favorites, please add a product."
            }
          />
        ) : (
          <FavoritesList className="px-2" products={favorites} />
        )}
        <div>
          <DecorLine />
          <CloseFavoriteBtn className="mt-1" onClick={() => setIsOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
