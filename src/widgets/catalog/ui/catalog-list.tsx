"use client";
import React from "react";
import { cn, Container, DisplayError, SkeletonProduct } from "@/shared";
import { ProductItem, useProducts } from "@/entities/product";
import { CatalogTop } from "./catalog-top";
import { ToggleFavoriteBtn } from "@/features/favorite";

export const CatalogList = () => {
  const { loadProducts, isLoading, error, products, productsLength } =
    useProducts();

  React.useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <section className="flex justify-between gap-8 flex-1 relative">
        {/* Левая колонка — фильтры */}
        <aside
          className=" border-1 w-75 border-amber-200 rounded-lg p-4 sticky top-4 max-h-[calc(100vh-12.5rem)] 
    overflow-y-auto"
        >
          {/* <ProductFilters /> */} Фильтр
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
          <div className="w-full h-16 bg-blue-900" />
        </aside>
        {/* Правая колонка — список товаров */}
        <div className="flex-1 min-w-0">
          <CatalogTop productsLength={productsLength} />

          {isLoading ? (
            <SkeletonProduct variant="catalog" />
          ) : error ? (
            <DisplayError error={error} title="Product Catalog" />
          ) : (
            <div
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
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
