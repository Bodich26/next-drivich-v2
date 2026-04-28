import { OrderStatus } from "@prisma/client";

export const ORDER_STATUS_CONFIG: Record<
  OrderStatus,
  { label: string; color: string }
> = {
  COMPLETED: {
    label: "Completed",
    color: "bg-green-500",
  },
  PENDING: {
    label: "Pending",
    color: "bg-yellow-500",
  },
  CANCELLED: {
    label: "Cancelled",
    color: "bg-red-500",
  },
  PAID: {
    label: "Paid",
    color: "bg-blue-500",
  },
  SHIPPED: {
    label: "Shipped",
    color: "bg-pink-500",
  },
};
