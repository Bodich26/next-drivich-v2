import { cn } from "@/shared";
import { FavoriteItem } from "./favorites-item";
import { FavoriteProduct } from "@/features/favorite";

type ProductListProps = {
  products: FavoriteProduct[];
  className?: string;
};

export const FavoritesList = ({ products, className }: ProductListProps) => {
  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>
      <div className="flex flex-col gap-6 ">
        {products.map((product) => {
          return <FavoriteItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
