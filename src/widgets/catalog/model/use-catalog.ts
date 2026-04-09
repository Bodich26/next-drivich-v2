"use client";
import React from "react";
import { useProducts } from "@/entities/product";
import { useFilters } from "@/features/filters";
import { debounce } from "lodash";

export const useCatalog = () => {
  const { loadProducts, status, error, products } = useProducts();
  const { searchModel } = useFilters();

  const filters = React.useMemo(
    () => ({
      searchModel: searchModel || undefined,
    }),
    [searchModel],
  );

  const controllerRef = React.useRef<AbortController | null>(null);

  const debouncedLoad = React.useMemo(
    () =>
      debounce((filters) => {
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;
        loadProducts(filters, controller.signal);
      }, 700),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  React.useEffect(() => {
    debouncedLoad(filters);
  }, [filters, debouncedLoad]);

  return {
    products,
    error,
    status,
    productsLength: products.length,
  };
};
