import { Order, OrderItem, Product } from "@prisma/client";

export type ProductPreview = Pick<
  Product,
  "id" | "brand" | "model" | "imageSrc" | "price" | "discount"
>;

export type OrderItemUI = Pick<
  OrderItem,
  "id" | "productId" | "quantity" | "price"
> & {
  product: ProductPreview;
};

export type OrderUI = Pick<
  Order,
  | "id"
  | "userId"
  | "firstName"
  | "lastName"
  | "phoneNumber"
  | "country"
  | "city"
  | "address"
  | "payment"
  | "status"
  | "totalPrice"
  | "createdAt"
  | "updatedAt"
  | "completedAt"
> & {
  orderItems: OrderItemUI[];
};
