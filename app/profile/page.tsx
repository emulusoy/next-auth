import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Profilim
        </h1>

        {session?.user?.image && (
          <div className="flex justify-center">
            <img
              src={session.user.image}
              alt="Profil Resmi"
              className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-md"
            />
          </div>
        )}

        <div className="text-center text-gray-800 dark:text-gray-200 space-y-2">
          <p className="text-lg">
            <span className="font-semibold">Ad:</span> {session?.user?.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">E-posta:</span> {session?.user?.email}
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="/dashboard"
            className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Dashboard'a Git
          </a>
        </div>
      </div>
    </main>
  );
}
