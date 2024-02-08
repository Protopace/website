import "./globals.css";
import { client } from "@/src/app/api/client";
import { Metadata } from "next";
import { cn } from "@/src/lib/utils";
import { Quicksand } from "next/font/google";
import localFont from 'next/font/local';

import Footer from "@/src/app/components/footer";

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

/* Populate metadata on the layout page */


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(quicksand.className, gorditaRegular.variable)}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
