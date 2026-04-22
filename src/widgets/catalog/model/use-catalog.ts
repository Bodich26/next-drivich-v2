"use client";
import React from "react";
import { useProducts } from "@/entities/product";
import { useChangeFilters } from "@/features/filters";
import { debounce } from "lodash";

export const useCatalog = () => {
  const { loadProducts, status, error, products } = useProducts();
  const {
    searchModel,
    priceMin,
    priceMax,
    engine,
    electro,
    powerRanges,
    sort,
  } = useChangeFilters();

  const filters = React.useMemo(
    () => ({
      searchModel: searchModel?.trim() || undefined,
      priceMin,
      priceMax,
      engine,
      electro,
      powerRanges,
      sort,
    }),
    [searchModel, priceMin, priceMax, engine, electro, powerRanges, sort],
  );

  const controllerRef = React.useRef<AbortController | null>(null);
  const loadRef = React.useRef(loadProducts);

  React.useEffect(() => {
    loadRef.current = loadProducts;
  }, [loadProducts]);

  const debouncedLoad = React.useMemo(
    () =>
      // eslint-disable-next-line react-hooks/refs
      debounce((filters) => {
        controllerRef.current?.abort();

        const controller = new AbortController();
        controllerRef.current = controller;

        loadRef.current(filters, controller.signal);
      }, 700),
    [],
  );

  React.useEffect(() => {
    debouncedLoad(filters);

    return () => {
      debouncedLoad.cancel();
    };
  }, [filters, debouncedLoad]);

  return {
    products,
    error,
    status,
    productsLength: products.length,
  };
};
