import { Skeleton } from "@/shared";

export const ProductSkeletonItem = () => {
  return (
    <div className="group relative flex flex-col h-full rounded-md overflow-hidden bg-card shadow-sm">
      <Skeleton className="h-[141px] rounded-t-md" />

      <div className="pt-2 pb-4 px-4 bg-card">
        <Skeleton className="w-full h-[32px] mb-[18px] mt-[3px]" />

        <div className="flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="w-full h-[18px]" />
          ))}
        </div>

        <div className="flex items-end justify-between mt-4 gap-[30px]">
          <Skeleton className="w-[180px] h-[37px]" />
          <Skeleton className="w-[160px] h-[27px]" />
        </div>
      </div>
    </div>
  );
};
