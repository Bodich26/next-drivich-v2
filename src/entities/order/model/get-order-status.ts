import { OrderStatus } from "@prisma/client";
import { ORDER_STATUS_CONFIG } from "./order-status";

export const getOrderStatus = (status: OrderStatus) => {
  return ORDER_STATUS_CONFIG[status];
};
