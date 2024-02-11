import "./globals.css";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Quicksand } from "next/font/google";
import localFont from 'next/font/local';

import { cache } from "react"
import { client } from "@/api/client"
import { SiteConfig } from "@/api/interfaces/site-config"


import NavBar from "@/components/layout/navbar";
import Footer from "@/components/footer";

/* Import fonts to the main layout */

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

const gorditaRegular = localFont({ 
  src:'../../public/fonts/Gordita-Regular.woff2',
  variable: '--font-gordita',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://images.ctfassets.net/'),
}

const getSiteConfig = cache(async() => {
  const response = await client.getEntries({
    content_type: "siteConfig",
  })
  
  const siteConfig: SiteConfig = response.items[0];
  return siteConfig;
})

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const siteConfig = await getSiteConfig();

  return (
    <html lang="en-US" className={cn(quicksand.className, gorditaRegular.variable)}>
      <body>
          <NavBar
            siteConfig={siteConfig}
          />
            <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
