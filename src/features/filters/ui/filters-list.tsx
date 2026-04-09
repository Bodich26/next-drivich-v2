import { cn, Input } from "@/shared";
import { useFilters } from "../model/use-filters";
import { CheckboxGroup } from "./checkbox-group";
import { RangeSlider } from "./range-slider";
import { CircleX } from "lucide-react";

export const FiltersList = () => {
  const { handleSearchModel, toggle, toggleFilters, searchModel } =
    useFilters();
  return (
    <>
      {toggle && (
        <div
          className="fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0"
          onClick={toggleFilters}
        />
      )}

      <aside
        className={cn(
          "bg-card border border-border p-4 rounded-md",

          // DESKTOP
          "w-75 sticky top-0 max-h-[calc(100vh-14rem)] overflow-y-auto",
          "max-[930px]:static", // убираем hidden

          // MOBILE
          "max-[930px]:fixed max-[930px]:top-0 max-[930px]:left-0 max-[930px]:bottom-0",
          "max-[930px]:max-h-full",
          "max-[930px]:z-50 max-[930px]:rounded-l-none",

          // АНИМАЦИЯ
          "transition-transform duration-300",
          toggle
            ? "max-[930px]:translate-x-0"
            : "max-[930px]:-translate-x-full",
        )}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Filter by</h1>
          <div
            className="flex items-center gap-1 text-primary cursor-pointer"
            onClick={() => window.location.reload()}
          >
            <CircleX width={17} height={17} className="stroke-primary" />
            reset All
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className=" font-medium text-lg">Search</span>
          <Input
            className="border border-black/15 h-[32px] bg-transparent"
            placeholder="enter the car name"
            type="search"
            value={searchModel}
            onChange={handleSearchModel}
          />
        </div>
        {/* <div className="flex flex-col gap-3">
          <span className=" font-medium text-lg">Price</span>
          <RangeSlider
            min={0}
            max={900000}
            step={1000}
            value={priceRange}
            onValueChange={setPriceRange}
          />
        </div> */}
        {/* <CheckboxGroup
          title="Engine type"
          limit={2}
          onChange={handleEngineTypeChange}
          defaultItems={[
            {
              text: "Engine",
              value: "1",
            },
            {
              text: "Electro",
              value: "2",
            },
          ]}
          items={[
            {
              text: "Engine",
              value: "1",
            },
            {
              text: "Electro",
              value: "2",
            },
          ]}
        />
        <CheckboxGroup
          title="Power"
          limit={3}
          onChange={handlePowerChange}
          defaultItems={[
            {
              text: "250-300 hp",
              value: "3",
            },
            {
              text: "300-400 hp",
              value: "4",
            },
            {
              text: "400-500 hp",
              value: "5",
            },
          ]}
          items={[
            {
              text: "250-300 hp",
              value: "3",
            },
            {
              text: "300-400 hp",
              value: "4",
            },
            {
              text: "400-500 hp",
              value: "5",
            },
            {
              text: "500-600 hp",
              value: "6",
            },
            {
              text: "600-700 hp",
              value: "7",
            },
            {
              text: "> 700 hp",
              value: "8",
            },
          ]}
        /> */}
      </aside>
    </>
  );
};
