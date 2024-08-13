import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_PROJECT_NAME,
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }, { locale: "fr" }, { locale: "hu" }, { locale: "ro" }];
}

export default function RootLayout({
  children,
  params: {locale},
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={locale}>
      <body className={`${inter.className} h-lvh`}>{children}</body>
    </html>
  );
}
