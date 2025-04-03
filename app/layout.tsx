import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import React from "react";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preap-Now",
  description: "An Ai-Powered Interview Mock-Up Platform",
  icons: {
    icon: "/Next.js.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.variable}   pattern`}
        data-new-gr-c-s-check-loaded="14.1229.0"
        data-gr-ext-installed=""
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
