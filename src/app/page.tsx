import Link from "next/link";
import { client } from "@/src/app/api/client";``
import { Metadata } from "next";
import { SiteConfig } from "./api/interfaces/site-config";

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

export async function generateMetadata(): Promise<Metadata> {

  const response = await client.getEntries({
    content_type: "siteConfig",
  })

  const siteConfig: SiteConfig = response.items[0];
  console.log(siteConfig.sys.locale);

  var ogImageUrl = siteConfig.fields.seoMetadata.fields.ogImage.fields.file.url;
  var ogImageUrlStripped = ogImageUrl.split('/').slice(3).join('/');

  return {
    title: siteConfig.fields.seoMetadata.fields.seoTitle,
    description: siteConfig.fields.seoMetadata.fields.seoDescription,
    openGraph: {
      title: siteConfig.fields.seoMetadata.fields.seoTitle,
      description: siteConfig.fields.seoMetadata.fields.seoDescription,
      url: siteConfig.fields.seoMetadata.fields.canonicalUrl,
      siteName: siteConfig.fields.seoMetadata.fields.seoTitle,
      images: [
        {
          url: ogImageUrlStripped,
          width: siteConfig.fields.seoMetadata.fields.ogImage.fields.file.details.image.width,
          height: siteConfig.fields.seoMetadata.fields.ogImage.fields.file.details.image.height,
          alt: siteConfig.fields.seoMetadata.fields.ogImage.fields.description,
        }
      ],
      locale: siteConfig.sys.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.fields.seoMetadata.fields.seoTitle,
      description: siteConfig.fields.seoMetadata.fields.seoDescription,
      creator: '@protopace',
      images: [ogImageUrlStripped],
    },
    verification: {
      google: siteConfig.fields.googleVerification,
      yandex: siteConfig.fields.baiduVerification,
      other: {
        baidu: siteConfig.fields.yandexVerification,
        bing: siteConfig.fields.bingVerification,
      },
    },
    robots: {
      index: !siteConfig.fields.seoMetadata.fields.noIndex,
      follow: !siteConfig.fields.seoMetadata.fields.noFollow,
    }
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
