"use client";

import { signIn } from "next-auth/react";
import { FaLock } from "react-icons/fa"; 

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <FaLock className="mx-auto text-4xl text-blue-600 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Giriş Yap</h1>
        <p className="text-sm text-gray-500 mb-6">
          Güvenli bir şekilde oturum açmak için butona tıklayın.
        </p>
        <button
          onClick={() => signIn("auth0")}
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Auth0 ile Giriş Yap
        </button>
      </div>
    </div>
  );
}