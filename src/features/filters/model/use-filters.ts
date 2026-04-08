import { filtersStore } from "./filters-store";

export const useFilters = () => {
  const toggle = filtersStore((state) => state.toggle);
  const toggleFilters = filtersStore((state) => state.toggleFilters);

  return { toggle, toggleFilters };
};
