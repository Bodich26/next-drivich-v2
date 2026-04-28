"use client";
import { cn, Container, DisplayError, EmptyState, Skeleton } from "@/shared";
import { ProductItem } from "@/entities/product";
import { CatalogSorted } from "./catalog-sorted";
import { ToggleFavoriteBtn } from "@/features/favorite";
import { FiltersList } from "@/features/filters";
import { useCatalog } from "../model/use-catalog";
import { AddToCartBtn } from "@/features/cart";
import { CatalogListSkeleton } from "./catalog-list-skeleton";

export const CatalogList = () => {
  const { products, productsLength, error, status } = useCatalog();

  return (
    <Container>
      <section className="flex justify-between gap-8 flex-1 relative">
        <FiltersList />
        <div className="flex-1 min-w-0">
          {status === "idle" || status === "loading" ? (
            <Skeleton className="w-full h-8 mb-6 mt-2" />
          ) : (
            <CatalogSorted productsLength={productsLength} />
          )}
          {status === "idle" || status === "loading" ? (
            <CatalogListSkeleton />
          ) : error ? (
            <DisplayError error={error} title="Product Catalog" />
          ) : productsLength === 0 ? (
            <EmptyState
              desc={
                "Looks like you haven’t added anything yet. Start exploring and find your dream car."
              }
              title="Product catalog is empty"
              icon="🛒"
            />
          ) : (
            <div
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
              )}
            >
              {products.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  favoriteSlot={
                    <ToggleFavoriteBtn variant="hover" productId={product.id} />
                  }
                  cartSlot={
                    <AddToCartBtn variant="button" productId={product.id} />
                  }
                ></ProductItem>
              ))}
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};
