type Props = {
  userName: string;
  userEmail: string;
};
export const ProfileHeader = ({ userName, userEmail }: Props) => {
  return (
    <div className="bg-card border border-border rounded-md p-6 shadow-sm flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-gray-200" />
      <div>
        <div className="font-semibold text-lg">{userName}</div>
        <div className="text-sm text-gray-500">{userEmail}</div>
      </div>
    </div>
  );
};
