import { SortProducts } from "@/entities/product";
import { useFiltersStore } from "./use-filters-store";

export const useChangeFilters = () => {
  const {
    setSearchModel,
    setPriceRange,
    resetFilters,
    setElectro,
    setEngine,
    setPowerRanges,
    setSortByPrice,
  } = useFiltersStore((state) => state.actions);
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
    setSearchModel(e.target.value);
  };

  const handlePriceRangeChange = (values: [number, number]) => {
    setPriceRange(values[0], values[1]);
  };

  const priceRange: [number, number] = [priceMin ?? 0, priceMax ?? 900000];

  const handleEngineTypeChange = (values: string[]) => {
    setEngine(values.includes("engine") ? true : undefined);
    setElectro(values.includes("electro") ? true : undefined);
  };

  const handlePowerRangeChange = (selectedValues: string[]) => {
    setPowerRanges(selectedValues);
  };

  const handleSortedByPrice = (sortedBy: SortProducts) => {
    setSortByPrice(sortedBy);
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
    resetFilters,
    handleEngineTypeChange,
    handlePowerRangeChange,
    handleSortedByPrice,
    hasChanges,
  };
};
