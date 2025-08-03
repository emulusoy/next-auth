
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // dashboard kismina erisim engeli ekledim!
};