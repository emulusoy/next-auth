
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h1 className="text-4xl font-bold mb-4">Hoş Geldiniz!</h1>
      <p className="text-lg text-gray-600 text-center">
        Bu sayfa, Auth0 ve NextAuth ile oluşturulmuş yetkilendirme sisteminin ana sayfasıdır. Giriş yapmak için yukarıdaki butonu kullanın.
      </p>
    </div>
  );
}