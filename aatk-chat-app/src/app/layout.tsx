import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AATK Chat App",
  description: "A modern chat application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
