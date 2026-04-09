import { filtersStore } from "./filters-store";

export const useChangeFilters = () => {
  const searchModel = filtersStore((state) => state.searchModel);
  const setSearchModel = filtersStore((state) => state.setSearchModel);
  const priceMin = filtersStore((state) => state.priceMin);
  const priceMax = filtersStore((state) => state.priceMax);
  const setPriceRange = filtersStore((state) => state.setPriceRange);

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
  };
};
