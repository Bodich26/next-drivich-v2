import { Product } from "@prisma/client";
import Image from "next/image";

type Props = Pick<Product, "brand" | "model" | "engineType" | "id">;

export const ProductHero = ({ brand, model, engineType, id }: Props) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold capitalize">
            {brand} {model}
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            {engineType === "ELECTRO"
              ? "Electric • Full Electric"
              : "Internal Combustion Engine"}
          </p>
        </div>
      </div>
      <div className="relative product-gradient aspect-[16/9] overflow-hidden rounded-md  shadow-xl">
        <Image
          src={`/gallery/${id}/main.png`}
          alt={`${brand} ${model}`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
};
