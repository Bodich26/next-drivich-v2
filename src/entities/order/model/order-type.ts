import { Order, OrderItem, Product } from "@prisma/client";

// --- Product ---
type ProductPreview = Pick<Product, "id" | "model" | "imageSrc">;

// --- OrderItem ---
type OrderItemUI = Pick<
  OrderItem,
  "id" | "productId" | "price" | "quantity"
> & {
  product: ProductPreview;
};

// --- Order ---
type OrderUI = Pick<
  Order,
  | "id"
  | "status"
  | "createdAt"
  | "totalPrice"
  | "firstName"
  | "lastName"
  | "phoneNumber"
  | "country"
  | "city"
  | "address"
  | "payment"
> & {
  orderItems: OrderItemUI[];
};

// --- Props ---
type OrderProps = {
  orders: OrderUI[];
};

type OrderItemProps = {
  order: OrderUI;
};

type OrderListProductsProps = {
  orderProducts: OrderItemUI[];
};

export type {
  OrderUI,
  OrderProps,
  OrderItemUI,
  OrderItemProps,
  OrderListProductsProps,
};
