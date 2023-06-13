import Image from "next/image";
import { Inter } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <div>{user ? user.name : "No user"}</div>
      {user && <a href="/api/auth/logout">Logout</a>}
      {!user && <a href="/api/auth/login">Login</a>}
    </>
  );
}
