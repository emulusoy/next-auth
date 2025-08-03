"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">Ana Sayfa</span>
        </Link>
        <div className="flex items-center space-x-4">
          {status === "loading" && <div className="spinner">Yükleniyor...</div>}
          {status === "authenticated" && session && (
            <>
              <span className="hidden md:inline">Hoş geldin, {session.user?.name}</span>
              <Link href="/dashboard">
                <span className="text-blue-300 hover:text-blue-100 cursor-pointer">Dashboard</span>
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Çıkış Yap
              </button>
            </>
          )}
          {status === "unauthenticated" && (
            <button
              onClick={() => signIn("auth0")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Giriş Yap
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}