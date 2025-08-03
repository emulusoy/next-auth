Proje Detaylari ve Resimleri asagidadir!

Proje Başlığı: Auth0 Yetkilendirme Sistemi Geliştirme
Bu proje, Next.js 14+ (App Router), NextAuth.js ve Auth0 kullanarak modern ve güvenli bir kimlik doğrulama ve yetkilendirme sistemi geliştirmek amacıyla oluşturulmuştur. Proje, SOLID prensiplerine ve 12Factor ilkelerine uygun olarak tasarlanmıştır.

Proje Amacı
Projenin temel amacı, Auth0 üzerinden kullanıcı girişinin yapıldığı, JSON Web Token (JWT) tabanlı oturum kontrolü ile belirli sayfalara erişimin kısıtlandığı bir yapı kurmaktır. Bu sistem, hem güvenli hem de ölçeklenebilir bir mimariye sahip olup, modern web uygulamalarının yetkilendirme ihtiyaçlarını karşılamaktadır.

Kullanılan Teknolojiler
Next.js 14+ (App Router): Uygulamanın temel çatısı olarak kullanılmıştır.

Auth0 (OAuth Provider): Kimlik doğrulama ve kullanıcı yönetimi için yetkili üçüncü taraf servis olarak entegre edilmiştir.

NextAuth.js: Next.js içinde OAuth entegrasyonunu kolaylaştıran kütüphanedir.

JWT (JSON Web Token): Oturum bilgilerinin güvenli bir şekilde aktarılması için kullanılmıştır.

TypeScript: Kod kalitesini ve tip güvenliğini artırmak için kullanılmıştır.

TailwindCSS: Giriş sayfası tasarımı ve arayüz bileşenleri için tercih edilmiştir.

.env: 12Factor App ilkelerine uygun olarak, yapılandırma bilgileri koddan ayrıştırılarak çevre değişkenleri aracılığıyla yönetilmiştir.

Git/GitHub: Versiyon kontrol ve iş birliği için kullanılmıştır.

Projenin Özellikleri
Güvenli Kimlik Doğrulama: Auth0'un Universal Login sayfasını kullanarak kullanıcı bilgilerinin güvenli bir şekilde toplanmasını sağlar.

Middleware ile Sayfa Koruma: Next.js Middleware kullanılarak, oturum açmamış kullanıcıların korumalı sayfalara (örneğin, /dashboard ve /profile) erişimi engellenir ve özel login sayfasına yönlendirilir.

Otomatik Oturum Yönetimi: NextAuth.js, Auth0'dan gelen JWT token'ını otomatik olarak yöneterek oturum durumunun kolayca kontrol edilmesini sağlar. (Kendi Tokenimi Urettigim Baska Bir proje daha var!)

Çevre Değişkeni Yönetimi: .env.local dosyası ile hassas bilgilerin (Client ID, Client Secret, Secret) koddan izole edilmesi sağlanmıştır.

<img width="1920" height="1080" alt="Screenshot 2025-08-03 133534" src="https://github.com/user-attachments/assets/af437922-a456-4f37-8121-e695ddab934b" />

<img width="1920" height="1080" alt="Screenshot 2025-08-03 133521" src="https://github.com/user-attachments/assets/6c124f74-09a3-4fb9-8fea-066e06576f2f" />

<img width="1920" height="1080" alt="Screenshot 2025-08-03 133555" src="https://github.com/user-attachments/assets/214f5d7a-81f9-4879-bb0f-85062d7fd6eb" />

<img width="1920" height="1080" alt="Screenshot 2025-08-03 134253" src="https://github.com/user-attachments/assets/d8bbc0b5-8f24-4822-875f-bcd1c6c31776" />


<img width="1920" height="1080" alt="Screenshot 2025-08-03 133605" src="https://github.com/user-attachments/assets/57c33966-c44a-4549-a8be-004de0953cd6" />



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
