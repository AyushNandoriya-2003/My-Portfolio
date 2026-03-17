import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../css/card.scss";
import "../css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Ayush Nandoriya - Frontend Developer",
  description:
    "Ayush Nandoriya is a Frontend Developer specializing in React, Next.js, and TypeScript. Passionate about building modern web applications and learning new technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
