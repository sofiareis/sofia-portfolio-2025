import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/app.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sofia-portfolio",
  description: "Sofia's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="size-full">
          <div className="flex">
            <div className="flex h-screen min-w-0 grow flex-col overflow-auto">
              <Navbar />
              <ScrollToTop />
              <div id="layout-content" className="relative z-10">
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
