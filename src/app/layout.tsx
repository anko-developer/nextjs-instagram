import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import AuthContext from "@/context/AuthContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram",
  description: "Instagram App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b ">
            <Navbar />
          </header>

          <main>{children}</main>
        </AuthContext>
      </body>
    </html>
  );
}
