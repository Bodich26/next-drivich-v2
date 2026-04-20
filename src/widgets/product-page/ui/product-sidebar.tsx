import { PriceProduct } from "@/entities/product";
import { ToggleFavoriteBtn } from "@/features/favorite";
import { DecorLine } from "@/shared";
import { Product } from "@prisma/client";
import { Star } from "lucide-react";

type Props = Pick<Product, "price" | "discount" | "color" | "id">;
export const ProductSidebar = ({ price, discount, color, id }: Props) => {
  return (
    <div className="lg:col-span-4">
      <div className="sticky top-8 bg-card border border-border rounded-md p-8 shadow-sm">
        {/* Rating + Favorite */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">4.98 • 142 reviews</p>
          </div>
          <ToggleFavoriteBtn variant="static" productId={id} />
        </div>

        <DecorLine />

        {/* Colors */}
        <div className="py-6">
          <h3 className="font-semibold text-lg mb-4">Available Colors</h3>
          <div className="flex flex-wrap gap-4">
            {color?.map((color: string, index: number) => (
              <div
                key={index}
                className="w-10 h-10 rounded-2xl border-2 border-white shadow-md ring-1 ring-black/10 hover:scale-110 transition-transform cursor-pointer"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        <DecorLine />

        {/* Description */}
        <div className="py-6">
          <h3 className="font-semibold text-lg mb-4">Description</h3>
          <p className="text-muted-foreground leading-relaxed">
            The Porsche 911 GT3 RS is a track-focused masterpiece that delivers
            exhilarating performance while remaining street-legal. With its
            naturally aspirated flat-six engine and advanced aerodynamics, it
            offers an unmatched driving experience.
          </p>
        </div>

        <DecorLine />

        {/* Purchase Section */}
        <div className="pt-6">
          <span className="text-sm text-muted-foreground mb-1">
            Price {discount ? " - SALE" : ""}
          </span>
          <PriceProduct view="main" price={price} discount={discount} />

          <div className="mt-8 space-y-3">
            {/* <ButtonBuyNow productId={currentProduct.id} className="w-full py-6 text-lg" /> */}
            {/* <ButtonAddToCart productId={currentProduct.id} variant="outline" className="w-full" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
