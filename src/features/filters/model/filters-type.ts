import { ProductFilters, SortProducts } from "@/shared";

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
  hasChanges: boolean;
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

export type FilterCheckboxProps = {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
};

export type FilterSliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: [number, number];
  onValueChange?: (values: [number, number]) => void;
};
