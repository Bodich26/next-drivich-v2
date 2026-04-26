"use client";
import React from "react";
import { FilterCheckbox } from "./filters-checkbox";
import { FilterCheckboxProps } from "../model/filters-type";

type Item = FilterCheckboxProps;

type Props = {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  className?: string;
  selectedValues?: string[];
  onChange: (values: string[]) => void;
};

export const CheckboxGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  className,
  selectedValues = [],
  onChange,
}: Props) => {
  const [showAll, setShowAll] = React.useState(false);

  const handleCheckedChange = (value: string) => {
    const current = [...selectedValues];

    if (current.includes(value)) {
      const newSelected = current.filter((v) => v !== value);
      onChange(newSelected);
    } else {
      const newSelected = [...current, value];
      onChange(newSelected);
    }
  };

  const displayedItems = showAll ? items : defaultItems || items;

  return (
    <div className={className}>
      <p className="font-medium text-lg mb-3">{title}</p>
      <div className="flex flex-col gap-2">
        {displayedItems.map((item) => (
          <FilterCheckbox
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            checked={selectedValues?.includes(String(item.value)) ?? false}
            onCheckedChange={() => handleCheckedChange(String(item.value))}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3 cursor-pointer"
          >
            {showAll ? "- Hide" : "+ Show All"}
          </button>
        </div>
      )}
    </div>
  );
};
