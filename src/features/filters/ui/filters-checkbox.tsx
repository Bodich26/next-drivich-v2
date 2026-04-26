"use client";
import { Checkbox } from "@/shared";
import { FilterCheckboxProps } from "../model/filters-type";

export const FilterCheckbox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}: FilterCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6 border border-black/15 cursor-pointer"
        id={`checkbox-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
