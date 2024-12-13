import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const samuraiShadow = localFont({
  src: "../fonts/samuraishadow.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gululu  Token",
  description: "Gululu Token",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${samuraiShadow.variable} antialiased`}
      >
        <div className="max-w-[1920px] w-full mx-auto relative">
          <div className="absolute w-full">
            <Navbar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
