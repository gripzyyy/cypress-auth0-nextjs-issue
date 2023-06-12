import Image from "next/image";
import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      {user ? user.name : "No user"}
      <a href="/api/auth/login">Login</a>
    </>
  );
}
