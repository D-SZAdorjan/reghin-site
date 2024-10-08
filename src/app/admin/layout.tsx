import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../[locale]//globals.css";
import ContentWrapper from '@/components/Admin/Wrappers/ContentWrapper';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if( error || !data?.user ){
    redirect('/auth/sign-in');
  }

  const user = data?.user;
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <ContentWrapper user={user}>
            {children}
          </ContentWrapper>
        </div>
      </body>
    </html>
  );
}
