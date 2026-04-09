import { filtersStore } from "./filters-store";

export const useControlFilters = () => {
  const toggle = filtersStore((state) => state.toggle);
  const toggleFilters = filtersStore((state) => state.toggleFilters);
  const resetFilters = filtersStore((state) => state.resetFilters);

  return {
    toggle,
    toggleFilters,
    resetFilters,
  };
};
