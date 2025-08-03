import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">
          Tebrikler, başarılı bir şekilde giriş yaptınız ve dashboard sayfasına erişim sağladınız!
        </p>
        <section className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Kullanıcı Bilgileri
          </h2>
          <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
            <div>
              <span className="font-bold">Ad:</span> {session?.user?.name}
            </div>
            <div>
              <span className="font-bold">E-posta:</span> {session?.user?.email}
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-4">
          <a
            href="/"
            className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Anasayfaya Dön
          </a>
        </div>
      </div>
    </main>
  );
}
