import { OrderUI } from "@/entities/order/model/order-type";
import { UserInfoBtn } from "@/entities/user";
import { Container, EmptyState } from "@/shared";
import {
  ProfileHeader,
  ProfileOrderInfo,
  ProfileOrderList,
} from "@/widgets/profile-page";
import { OrderStatus } from "@prisma/client";

const mockOrders: OrderUI[] = [
  {
    id: 1001,
    status: OrderStatus.PAID,
    createdAt: new Date(),

    firstName: "Bogdan",
    lastName: "Ivanov",
    phoneNumber: "380123456789",
    country: "Ukraine",
    city: "Kyiv",
    address: "Main street 12",
    payment: "Card",

    totalPrice: 1200,

    orderItems: [
      {
        id: 1,
        productId: 1,
        price: 1200,
        quantity: 1,

        product: {
          id: 1,
          model: "911 Turbo",
          imageSrc: "https://imgur.com/RFHxOwJ.png",
        },
      },
    ],
  },
];

export default function ProfilePage() {
  return (
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Profile</h1>
            <UserInfoBtn />
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-6 flex-1">
              <ProfileHeader />
              {mockOrders.length === 0 ? (
                <EmptyState
                  desc={"Start shopping to see your orders here."}
                  title="No orders yet"
                  icon="📦"
                />
              ) : (
                <ProfileOrderList myOrders={mockOrders} />
              )}
            </div>
            <ProfileOrderInfo totalSpent={4324} totalOrders={4} />
          </div>
        </div>
      </section>
    </Container>
  );
}
