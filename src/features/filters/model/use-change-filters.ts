import { useFiltersStore } from "./use-filters-store";

export const useChangeFilters = () => {
  const { setSearchModel, setPriceRange, resetFilters } = useFiltersStore(
    (state) => state.actions,
  );
  const { priceMin, priceMax, searchModel } = useFiltersStore((state) => state);

  const handleSearchModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchModel(e.target.value);
  };

  const handlePriceRangeChange = (values: [number, number]) => {
    setPriceRange(values[0], values[1]);
  };

  const priceRange: [number, number] = [priceMin ?? 0, priceMax ?? 900000];

  return {
    handleSearchModel,
    searchModel,
    handlePriceRangeChange,
    priceRange,
    priceMin,
    priceMax,
    resetFilters,
  };
};
