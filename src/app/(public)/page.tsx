import { LogoutButton, SigninButton } from "@/features/auth";

export default function Home() {
  return (
    <>
      <h1>Главная</h1>
      <SigninButton />
      <LogoutButton />
    </>
  );
}
