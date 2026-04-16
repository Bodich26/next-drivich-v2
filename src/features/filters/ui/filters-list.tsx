import { cn, DecorLine, Field, FieldLabel, Input } from "@/shared";
import { useChangeFilters } from "../model/use-change-filters";
import { useDisplayFilterStore } from "../model/use-display-filter-store";
import { RangeSlider } from "./range-slider";
import { ResetFiltersBtn } from "./reset-filters-btn";
import { CheckboxGroup } from "./checkbox-group";

export const FiltersList = () => {
  const { isOpen, actions } = useDisplayFilterStore();
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
  } = useChangeFilters();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
          onClick={actions.toggle}
        />
      )}

      <aside
        className={cn(
          "bg-card border border-border p-4 rounded-md",

          // DESKTOP
          "w-75 sticky top-0 max-h-[calc(100vh-14rem)] overflow-y-auto",
          "max-[930px]:static",

          // MOBILE
          "max-[930px]:fixed max-[930px]:top-0 max-[930px]:left-0 max-[930px]:bottom-0",
          "max-[930px]:max-h-full",
          "max-[930px]:z-50 max-[930px]:rounded-l-none",

          // АНИМАЦИЯ
          "transition-transform duration-300",
          isOpen
            ? "max-[930px]:translate-x-0"
            : "max-[930px]:-translate-x-full",
        )}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Product Filtration</h1>
          <ResetFiltersBtn />
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
      </aside>
    </>
  );
};
