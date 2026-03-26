import { cn, DisplayError } from "@/shared";
import { FavoriteItem } from "./favorites-item";
import { FavoriteProduct } from "@/features/favorite/model/favorite-type";

type ProductListProps = {
  products: FavoriteProduct[];
  className?: string;
};

export const FavoritesList = ({ products, className }: ProductListProps) => {
  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>
      <div className="flex flex-wrap gap-6 ">
        {!products || products.length === 0 ? (
          <DisplayError
            error={
              " There are no products in your favorites, please add a product."
            }
            title={"Favorite is empty"}
          />
        ) : (
          products.map((product) => {
            return <FavoriteItem key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};
