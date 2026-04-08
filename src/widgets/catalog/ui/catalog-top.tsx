import { ToggleFilterBtn } from "@/features/filters";

export const CatalogTop = ({ productsLength }: { productsLength: number }) => {
  return (
    <div className="flex items-center justify-between mb-6 mt-2">
      <span>{productsLength} result</span>
      <div className="flex items-center gap-3">
        <ToggleFilterBtn />
        Сортировка
        {/* <SortedProducts setSortOrder={setSortOrder} /> */}
      </div>
    </div>
  );
};
