import { FavoriteSkeletonItem } from "@/features/favorite";
import { SkeletonList } from "@/shared";

export const FavoritesListSkeleton = () => {
  return (
    <SkeletonList
      className="flex flex-col gap-6"
      count={4}
      renderItem={(i) => <FavoriteSkeletonItem key={i} />}
    />
  );
};
