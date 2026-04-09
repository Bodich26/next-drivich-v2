import { filtersStore } from "./filters-store";

export const useFilters = () => {
  const searchModel = filtersStore((state) => state.searchModel);
  const setSearchModel = filtersStore((state) => state.setSearchModel);

  const toggle = filtersStore((state) => state.toggle);
  const toggleFilters = filtersStore((state) => state.toggleFilters);

  const handleSearchModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchModel(e.target.value);
  };

  return { toggle, toggleFilters, handleSearchModel, searchModel };
};
