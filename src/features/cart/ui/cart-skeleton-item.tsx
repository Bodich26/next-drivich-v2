import { Skeleton } from "@/shared";

export const CartSkeletonItem = () => {
  return (
    <div className="flex gap-4 bg-card border border-border rounded-md p-4 shadow-sm">
      <Skeleton className="w-40 h-28 rounded-md shrink-0" />

      <div className="flex flex-col flex-1">
        <Skeleton className="w-[180px] h-6 mb-2" />
        <Skeleton className="w-[140px] h-4 mb-3" />

        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="w-[50px] h-4" />
          <Skeleton className="w-5 h-5 rounded-full" />
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="w-8 h-8 rounded-md" />
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-8 h-8 rounded-md" />
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <Skeleton className="w-[70px] h-6" />

        <div className="text-right">
          <Skeleton className="w-[40px] h-3 mb-2 ml-auto" />
          <Skeleton className="w-[100px] h-6 ml-auto" />
        </div>
      </div>
    </div>
  );
};
