import type { Metadata } from "next";
import {Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Preap-Now",
  description: "An Ai-Powered Interview Mock-Up Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.variable}  antialiased pattern`}
        data-new-gr-c-s-check-loaded="14.1229.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}
