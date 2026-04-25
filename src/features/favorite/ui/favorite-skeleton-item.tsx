import { Skeleton } from "@/shared";

export const FavoriteSkeletonItem = () => {
  return (
    <div className="w-[271px] h-[228px]">
      <Skeleton className="h-[135px] rounded-t-md! rounded-b-none" />

      <div className="pt-2 pb-4 px-4 bg-card rounded-b-md! ">
        <Skeleton className="w-full h-[32px] mb-[18px] mt-[3px]" />

        <div className="flex justify-between mt-[8px] ">
          <div className="flex gap-3">
            <Skeleton className="w-[44px] h-[22px]" />
            <Skeleton className="w-[100px] h-[22px]" />
          </div>

          <Skeleton className="w-[22px] h-[22px]" />
        </div>
      </div>
    </div>
  );
};
