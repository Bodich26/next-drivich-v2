import { SortProducts } from "@/entities/product";
import { useFiltersStore } from "./use-filters-store";

export const useChangeFilters = () => {
  const actions = useFiltersStore((state) => state.actions);
  const {
    priceMin,
    priceMax,
    searchModel,
    electro,
    engine,
    powerRanges,
    sort,
    hasChanges,
  } = useFiltersStore((state) => state);

  const handleSearchModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    actions.setSearchModel(e.target.value);
  };

  const handlePriceRangeChange = (values: [number, number]) => {
    actions.setPriceRange(values[0], values[1]);
  };

  const priceRange: [number, number] = [priceMin ?? 0, priceMax ?? 900000];

  const handleEngineTypeChange = (values: string[]) => {
    actions.setEngine(values.includes("engine") ? true : undefined);
    actions.setElectro(values.includes("electro") ? true : undefined);
  };

  const handlePowerRangeChange = (selectedValues: string[]) => {
    actions.setPowerRanges(selectedValues);
  };

  const handleSortedByPrice = (sortedBy: SortProducts) => {
    actions.setSortByPrice(sortedBy);
  };

  return {
    handleSearchModel,
    searchModel,
    handlePriceRangeChange,
    priceRange,
    priceMin,
    priceMax,
    engine,
    electro,
    sort,
    powerRanges,
    resetFilters: actions.resetFilters,
    handleEngineTypeChange,
    handlePowerRangeChange,
    handleSortedByPrice,
    hasChanges,
  };
};
