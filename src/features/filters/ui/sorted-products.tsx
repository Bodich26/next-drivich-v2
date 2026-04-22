"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared";
import { SortProducts } from "@/entities/product";
import { useFiltersStore } from "../model/use-filters-store";

export const SortedProducts = () => {
  const handleSortedByPrice = useFiltersStore(
    (state) => state.actions.setSortByPrice,
  );
  return (
    <div className="flex items-center gap-2">
      <span>Sort by</span>
      <Select
        onValueChange={(value) => {
          handleSortedByPrice(value as SortProducts);
        }}
      >
        <SelectTrigger className="w-[136px] h-[32px] border border-black/15 cursor-pointer bg-card">
          <SelectValue placeholder="price" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="expensive">Expensive</SelectItem>
            <SelectItem value="cheap">Cheap</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
