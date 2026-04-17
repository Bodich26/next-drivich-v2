import { getProductIdApi } from "@/entities/product";
import { notFound } from "next/navigation";
import { Container } from "@/shared";
import {
  ProductGallery,
  ProductHero,
  ProductSidebar,
  ProductSpecs,
} from "@/widgets/product-page";

type Props = {
  params: { id: string };
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const {
    brand,
    model,
    engineType,
    id: productId,
    price,
    color,
    discount,
    speed,
    acceleration,
    power,
  } = await getProductIdApi(id);

  if (!productId) {
    notFound();
  }

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-10">
          <ProductHero
            brand={brand}
            model={model}
            engineType={engineType}
            id={productId}
          />
          <ProductGallery id={productId} model={model} />
          <ProductSpecs
            speed={speed}
            acceleration={acceleration}
            power={power}
          />
        </div>
        <ProductSidebar
          id={productId}
          color={color}
          price={price}
          discount={discount}
        />
      </div>
    </Container>
  );
}
