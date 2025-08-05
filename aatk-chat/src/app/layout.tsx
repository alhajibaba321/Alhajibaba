import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AATK Chat - Hausa Language Messaging App",
  description: "A modern chat application designed for Hausa language communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ha">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
