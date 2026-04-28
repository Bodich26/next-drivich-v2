"use client";
import { Asides, DecorLine, Field, FieldLabel, Input } from "@/shared";
import { useChangeFilters } from "../model/use-change-filters";
import { RangeSlider } from "./range-slider";
import { ResetFiltersBtn } from "./reset-filters-btn";
import { CheckboxGroup } from "./checkbox-group";

export const FiltersList = () => {
  const {
    handleSearchModel,
    searchModel,
    priceRange,
    handlePriceRangeChange,
    handleEngineTypeChange,
    electro,
    engine,
    powerRanges,
    handlePowerRangeChange,
    hasChanges,
  } = useChangeFilters();

  return (
    <Asides id={"filters"}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Filtration</h1>
        {hasChanges && <ResetFiltersBtn />}
      </div>
      <DecorLine className="my-3" />
      <div className="flex flex-col gap-5">
        <Field>
          <FieldLabel htmlFor="searchModel" className="font-medium text-lg">
            Search model
          </FieldLabel>
          <Input
            id="searchModel"
            className="border  bg-transparent"
            placeholder="Enter a car model"
            type="search"
            value={searchModel}
            onChange={handleSearchModel}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="priceRange" className="font-medium text-lg">
            Price range
          </FieldLabel>
          <RangeSlider
            min={0}
            max={900000}
            step={1000}
            value={priceRange}
            onValueChange={handlePriceRangeChange}
          />
        </Field>
        <CheckboxGroup
          title="Engine type"
          limit={2}
          selectedValues={[
            ...(engine === true ? ["engine"] : []),
            ...(electro === true ? ["electro"] : []),
          ]}
          onChange={handleEngineTypeChange}
          defaultItems={[
            { text: "Engine", value: "engine" },
            { text: "Electro", value: "electro" },
          ]}
          items={[
            {
              text: "Engine",
              value: "engine",
            },
            {
              text: "Electro",
              value: "electro",
            },
          ]}
        />
        <CheckboxGroup
          title="Power"
          limit={4}
          selectedValues={powerRanges}
          onChange={handlePowerRangeChange}
          defaultItems={[
            { text: "250-300 hp", value: "250-300" },
            { text: "300-400 hp", value: "300-400" },
            { text: "400-500 hp", value: "400-500" },
          ]}
          items={[
            { text: "250-300 hp", value: "250-300" },
            { text: "300-400 hp", value: "300-400" },
            { text: "400-500 hp", value: "400-500" },
            { text: "500-600 hp", value: "500-600" },
            { text: "600-700 hp", value: "600-700" },
            { text: "> 700 hp", value: ">700" },
          ]}
        />
      </div>
    </Asides>
  );
};
