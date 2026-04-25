import { CartSkeletonItem, CartSkeletonSummary } from "@/features/cart";
import { Skeleton, SkeletonList } from "@/shared";

export const CartSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="w-[120px] h-8" />

      <div className="flex gap-8">
        {/* LEFT */}
        <div className="flex flex-col gap-6 flex-1">
          <SkeletonList
            className="flex flex-col gap-8"
            count={3}
            renderItem={(i) => <CartSkeletonItem key={i} />}
          />
        </div>

        {/* RIGHT */}
        <CartSkeletonSummary />
      </div>
    </div>
  );
};
