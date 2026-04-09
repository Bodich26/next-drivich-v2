"use client";
import { cn, Container, DisplayError, SkeletonProduct } from "@/shared";
import { ProductItem } from "@/entities/product";
import { CatalogTop } from "./catalog-top";
import { ToggleFavoriteBtn } from "@/features/favorite";
import { FiltersList } from "@/features/filters";
import { useCatalog } from "../model/use-catalog";

export const CatalogList = () => {
  const { products, productsLength, error, status } = useCatalog();

  return (
    <Container>
      <section className="flex justify-between gap-8 flex-1 relative">
        <FiltersList />
        <div className="flex-1 min-w-0">
          <CatalogTop productsLength={productsLength} />
          {status === "idle" || status === "loading" ? (
            <SkeletonProduct variant="catalog" />
          ) : error ? (
            <DisplayError error={error} title="Product Catalog" />
          ) : productsLength === 0 ? (
            <DisplayError
              error={"Such products do not exist"}
              title="Product Catalog"
            />
          ) : (
            <div
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
              )}
            >
              {products.map((product) => (
                <ProductItem key={product.id} product={product}>
                  <ToggleFavoriteBtn variant="hover" productId={product.id} />
                </ProductItem>
              ))}
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};
