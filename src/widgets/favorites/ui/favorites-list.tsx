import { cn } from "@/shared";
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
          <div className="w-full bg-color-white rounded-md text-center p-4 hover-shadow-block">
            <h1 className="text-xl font-bold mb-1">No products</h1>
            <p>Oops, looks like you&apos;re out of groceries!</p>
          </div>
        ) : (
          products.map((product) => {
            return <FavoriteItem key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};
