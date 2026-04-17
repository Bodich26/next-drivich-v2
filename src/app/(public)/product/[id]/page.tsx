import { getProductIdApi, PriceProduct } from "@/entities/product";
import { ToggleFavoriteBtn } from "@/features/favorite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Container,
  DecorLine,
} from "@/shared";
import { Star, Gauge, Zap, TrendingUp } from "lucide-react";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const currentProduct = await getProductIdApi(id);
  console.log(id);

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column - Images & Specs */}
        <div className="lg:col-span-8 space-y-10">
          {/* Title & Price */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold capitalize">
                {currentProduct.brand} {currentProduct.model}
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                {currentProduct.engineType === "ELECTRO"
                  ? "Electric • Full Electric"
                  : "Internal Combustion Engine"}
              </p>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative product-gradient aspect-[16/9] overflow-hidden rounded-md  shadow-xl">
            <Image
              src={`/gallery/${currentProduct.id}/main.png`}
              alt={`${currentProduct.brand} ${currentProduct.model}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Gallery */}
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {[1, 2, 3].map((index) => (
                <CarouselItem
                  key={index}
                  className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="aspect-square relative overflow-hidden rounded-md border border-border">
                    <Image
                      src={`/gallery/${currentProduct.id}/${index}.jpg`}
                      alt={`${currentProduct.model} view ${index}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2" />
            <CarouselNext className="-right-2" />
          </Carousel>

          {/* Key Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t">
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                <Gauge className="w-9 h-9 text-primary" />
              </div>
              <dt className="text-sm font-medium text-muted-foreground tracking-widest">
                TOP SPEED
              </dt>
              <dd className="text-5xl font-semibold mt-2">
                {currentProduct.speed} <span className="text-2xl">km/h</span>
              </dd>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-9 h-9 text-primary" />
              </div>
              <dt className="text-sm font-medium text-muted-foreground tracking-widest">
                0–100 KM/H
              </dt>
              <dd className="text-5xl font-semibold mt-2">
                {currentProduct.acceleration}s
              </dd>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-9 h-9 text-primary" />
              </div>
              <dt className="text-sm font-medium text-muted-foreground tracking-widest">
                POWER
              </dt>
              <dd className="text-5xl font-semibold mt-2">
                {currentProduct.power} <span className="text-2xl">hp</span>
              </dd>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
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
                <p className="text-sm text-muted-foreground">
                  4.98 • 142 reviews
                </p>
              </div>
              <ToggleFavoriteBtn
                variant="static"
                productId={currentProduct.id}
              />
            </div>

            <DecorLine />

            {/* Colors */}
            <div className="py-6">
              <h3 className="font-semibold text-lg mb-4">Available Colors</h3>
              <div className="flex flex-wrap gap-4">
                {currentProduct.color?.map((color: string, index: number) => (
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
                The Porsche 911 GT3 RS is a track-focused masterpiece that
                delivers exhilarating performance while remaining street-legal.
                With its naturally aspirated flat-six engine and advanced
                aerodynamics, it offers an unmatched driving experience.
              </p>
            </div>

            <DecorLine />

            {/* Purchase Section */}
            <div className="pt-6">
              <div className="text-sm text-muted-foreground mb-1">Price</div>
              <PriceProduct
                view="main"
                price={currentProduct.price}
                discount={currentProduct.discount}
              />

              <div className="mt-8 space-y-3">
                {/* <ButtonBuyNow productId={currentProduct.id} className="w-full py-6 text-lg" /> */}
                {/* <ButtonAddToCart productId={currentProduct.id} variant="outline" className="w-full" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
