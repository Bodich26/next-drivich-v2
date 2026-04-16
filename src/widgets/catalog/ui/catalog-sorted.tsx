import { SortedProducts, ToggleFilterBtn } from "@/features/filters";

export const CatalogSorted = ({
  productsLength,
}: {
  productsLength: number;
}) => {
  return (
    <div className="flex items-center justify-between mb-6 mt-2">
      <span>{productsLength} result</span>
      <div className="flex items-center gap-3">
        <ToggleFilterBtn />
        <SortedProducts />
      </div>
    </div>
  );
};
