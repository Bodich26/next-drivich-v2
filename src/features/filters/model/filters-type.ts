import { ProductFilters, SortProducts } from "@/entities/product";
export interface FilterActions {
  setSearchModel: (value: string) => void;
  setPriceRange: (min?: number, max?: number) => void;
  setEngine: (value: boolean | undefined) => void;
  setElectro: (value: boolean | undefined) => void;
  setPowerRanges: (ranges: string[]) => void;
  setSortByPrice: (sort: SortProducts) => void;
  resetFilters: () => void;
}

export interface FiltersStore extends ProductFilters {
  actions: FilterActions;
}

//---------

export interface DisplayFilterState {
  isOpen: boolean;
}
export interface DisplayFilterActions {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export interface DisplayFilterStore extends DisplayFilterState {
  actions: DisplayFilterActions;
}
