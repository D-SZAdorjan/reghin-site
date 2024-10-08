import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../[locale]/globals.css";
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Log In",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if( data?.user ){
    redirect('/admin/dashboard');
  }
  return (
    <html lang="en" className="h-full bg-[#0f172a]">
      <body className={`${inter.className} h-full dark`}>
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}