import { ProductSkeletonItem } from "@/entities/product";
import { SkeletonList } from "@/shared";

export const CatalogListSkeleton = () => {
  return (
    <SkeletonList
      className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      count={9}
      renderItem={(i) => <ProductSkeletonItem key={i} />}
    />
  );
};
