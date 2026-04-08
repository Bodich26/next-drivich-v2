import { cn } from "@/shared";
import { useFilters } from "../model/use-filters";

export const FiltersList = () => {
  const { toggle, toggleFilters } = useFilters();
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
        Фильтр
      </aside>
    </>
  );
};
