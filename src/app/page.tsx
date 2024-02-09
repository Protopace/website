import Link from "next/link";
import { Metadata } from "next";

function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{" "}
        and Protopace.
      </h2>
    </section>
  );
}

export const metadata: Metadata = {
  title:"Protopace",
  description: "Smash your company's growth targets without breaking a sweat.",
  twitter: {
    card: "summary_large_image"
  }
}

export default function Page() {

  return (
    <div className="container mx-auto px-5">
      <Intro />
      <Link href={"/blog"}>Blog</Link>
    </div>
  );
}
