import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared";
import { Product } from "@prisma/client";
import Image from "next/image";

type Props = Pick<Product, "model" | "id">;

export const ProductGallery = ({ model, id }: Props) => {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-3">
        {[1, 2, 3].map((index) => (
          <CarouselItem
            key={index}
            className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <div className="aspect-square relative overflow-hidden rounded-md border border-border">
              <Image
                src={`/gallery/${id}/${index}.jpg`}
                alt={`${model} view ${index}`}
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
  );
};
