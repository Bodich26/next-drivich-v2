import { OrderItems } from "@/entities/order";
import { OrderUI } from "@/entities/order";

type Props = {
  myOrders: OrderUI[];
};

export const ProfileOrderList = ({ myOrders }: Props) => {
  return (
    <div className="bg-card border border-border rounded-md p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">My orders</h2>
      <div className="flex flex-col gap-4">
        {myOrders.map((order) => (
          <OrderItems key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};
