import { LogoutButton } from "@/features/auth";
import { Asides, Button } from "@/shared";

type Props = {
  totalSpent: number | string;
  totalOrders: number;
};

export const ProfileOrderInfo = ({ totalSpent, totalOrders }: Props) => {
  return (
    <Asides id="account">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold mb-4">Account</h3>

          <div className="flex flex-col gap-3 text-sm">
            <dl className="flex justify-between">
              <dt>Orders</dt>
              <dd>{totalOrders}</dd>
            </dl>

            <dl className="flex justify-between">
              <dt>Total spent</dt>
              <dd>{totalSpent}</dd>
            </dl>

            <dl className="flex justify-between">
              <dt>Status</dt>
              <dd className="text-green-600">Active</dd>
            </dl>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Button className="w-full mt-5 cursor-pointer" size={"lg"}>
            Edit profile
          </Button>
          <LogoutButton variant="ghost" />
        </div>
      </div>
    </Asides>
  );
};
