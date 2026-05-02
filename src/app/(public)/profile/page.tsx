import { getOrdersApi } from "@/entities/order";
import { UserInfoBtn } from "@/entities/user";
import { Container, EmptyState } from "@/shared";
import {
  ProfileHeader,
  ProfileOrderInfo,
  ProfileOrderList,
} from "@/widgets/profile-page";

export default async function ProfilePage() {
  const ordersData = await getOrdersApi();
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
              {!ordersData || ordersData.length === 0 ? (
                <EmptyState
                  desc={"Start shopping to see your orders here."}
                  title="No orders yet"
                  icon="📦"
                />
              ) : (
                <ProfileOrderList myOrders={ordersData} />
              )}
            </div>
            <ProfileOrderInfo totalSpent={4324} totalOrders={4} />
          </div>
        </div>
      </section>
    </Container>
  );
}
