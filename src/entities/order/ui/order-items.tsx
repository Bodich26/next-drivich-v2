import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  cn,
  PriceFormat,
} from "@/shared";
import { OrderInfoItem } from "./order-item-info";
import { OrderProductList } from "./order-product-list";
import { getOrderStatus } from "../model/get-order-status";
import { OrderItemProps } from "../model/order-type";

export const OrderItems = ({ order }: OrderItemProps) => {
  const { color, label } = getOrderStatus(order.status);

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value={`order-${order.id}`}
        className="bg-card border border-border rounded-md px-4"
      >
        {/* HEADER */}
        <AccordionTrigger className="flex items-center gap-2 hover:no-underline">
          <div className="flex  w-full justify-between items-center">
            <div className="flex flex-col text-left">
              <span className="font-semibold text-lg">Order #{order.id}</span>
              <span className="text-sm text-gray-500">
                {order.createdAt.toLocaleDateString()}
              </span>
            </div>

            <div className="flex items-center gap-2 text-base">
              <span
                className={cn("w-3.5 h-3.5 rounded-full opacity-70", color)}
              />
              {label}
            </div>
          </div>
        </AccordionTrigger>

        {/* CONTENT */}
        <AccordionContent className="pb-4">
          <div className="flex gap-8 flex-col lg:flex-row">
            {/* LEFT: INFO */}
            <div className="flex-1">
              <dl className="flex flex-col gap-2 text-sm">
                <OrderInfoItem
                  label="Name"
                  value={`${order.firstName} ${order.lastName}`}
                />
                <OrderInfoItem label="Phone" value={`+${order.phoneNumber}`} />
                <OrderInfoItem
                  label="Location"
                  value={`${order.country}, ${order.city}`}
                />
                <OrderInfoItem label="Address" value={order.address} />
                <OrderInfoItem label="Payment" value={order.payment} />
              </dl>
            </div>

            {/* RIGHT: PRODUCTS */}
            <div className="flex-2">
              <div className="flex justify-between mb-3 text-sm">
                <span>
                  Total:{" "}
                  <b>
                    <PriceFormat price={order.totalPrice} />
                  </b>
                </span>
                <span className="text-gray-500">
                  {order.orderItems.length} items
                </span>
              </div>

              <OrderProductList orderProducts={order.orderItems} />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
