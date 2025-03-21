import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acme Rockets",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // sm:scroll-smooth: scroll happens smoothly than jerky immediate.
    <html lang="en" className="sm:scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
        min-h-screen bg-slate-50 dark:bg-black dark:text-white`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
