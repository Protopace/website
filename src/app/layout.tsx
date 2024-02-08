import "./globals.css";
import { cn } from "@/src/lib/utils";
import { Quicksand } from "next/font/google";
import localFont from 'next/font/local';

import Footer from "@/src/app/components/footer";

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

export const metadata = {
  title: `Protopac`,
  description: `This is a blog built with Next.js and Contentful`,
};

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
