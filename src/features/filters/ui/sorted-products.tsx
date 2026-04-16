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
import { useChangeFilters } from "../model/use-change-filters";

export const SortedProducts = () => {
  const { handleSortedByPrice } = useChangeFilters();
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
