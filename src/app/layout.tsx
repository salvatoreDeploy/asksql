import "./globals.css";
import type { Metadata } from "next";
import { Inter, Ubuntu_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ubutuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${ubutuMono.variable}`}>
      <body className="bg-blueberry-900">{children}</body>
    </html>
  );
}
