import { Skeleton } from "@/shared";

export const CartSkeletonSummary = () => {
  return (
    <div className="w-[300px] h-[387px] bg-card border border-border rounded-md p-6 shadow-sm flex flex-col gap-4">
      <Skeleton className="w-[100px] h-6" />
      <Skeleton className="w-[80px] h-4" />

      <div className="flex flex-col gap-3">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-full h-4" />
      </div>

      <Skeleton className="w-full h-px" />

      <Skeleton className="w-full h-6" />
      <Skeleton className="w-full h-12 rounded-xl mt-4" />

      <Skeleton className="w-[160px] h-3 mx-auto" />
      <Skeleton className="w-[140px] h-4 mx-auto" />
    </div>
  );
};
