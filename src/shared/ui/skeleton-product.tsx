import { cn } from "../lib";
import { Skeleton } from "./skeleton";

type Variant = "catalog" | "favorites" | "cart";

type Props = {
  variant: Variant;
  className?: string;
};

const itemsCount: Record<Variant, number> = {
  catalog: 9,
  favorites: 9,
  cart: 5,
};

const layoutByVariant: Record<Variant, string> = {
  catalog: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",

  favorites: "flex flex-col gap-6",

  cart: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
};

export const SkeletonProduct = ({ variant, className }: Props) => {
  const renderItem = (index: number) => {
    switch (variant) {
      case "catalog":
        return (
          <div
            key={index}
            className="group relative flex flex-col h-full rounded-md overflow-hidden bg-card"
          >
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

      case "favorites":
        return (
          <div key={index} className="w-[271px] h-[228px]">
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

      case "cart":
        return (
          <div key={index} className="w-full">
            <div className="flex justify-between p-[12px] bg-color-minimal-light-white rounded-md">
              <div className="flex flex-col gap-7">
                <Skeleton className="w-[35px] h-[19px] bg-color-white" />
                <Skeleton className="w-[210px] h-[30px] bg-color-white mb-[19px]" />
              </div>

              <div className="flex gap-6 basis-[65%] justify-end items-center">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-7">
                    <Skeleton className="w-[65px] h-[19px] bg-color-white" />
                    <Skeleton className="w-[120px] h-[30px] bg-color-white mb-[19px]" />
                  </div>
                ))}
              </div>

              <Skeleton className="w-[175px] h-[82px] bg-color-white" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>
      <div className={layoutByVariant[variant]}>
        {Array.from({ length: itemsCount[variant] }).map((_, index) =>
          renderItem(index),
        )}
      </div>
    </div>
  );
};
