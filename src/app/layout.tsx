import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MailPickLogo from '@/image/Logo/MailPick_Logo.png'
import Image from "next/image";

export const metadata: Metadata = {
  title: "MailPick",
  description: "MailPick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        {children}
      </body>
    </html>
  );
}
