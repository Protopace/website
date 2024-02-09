import Link from "next/link";
import { cache } from "react";
import { client } from "@/src/app/api/client";``
import { Metadata } from "next";
import { SiteConfig } from "./api/interfaces/site-config";
import StructuredData from "@/src/app/components/structured-data";
import { Organization, WithContext } from "schema-dts";

const getSiteConfig = cache(async() => {
  const response = await client.getEntries({
    content_type: "siteConfig",
  })
  
  const siteConfig: SiteConfig = response.items[0];
  console.log(siteConfig.sys.locale);

  return siteConfig;
})

const generateOrganizationJsonLd = (siteConfig:SiteConfig):WithContext<Organization> => {

  const schema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.fields.name,
  }

  return schema;
}

export async function generateMetadata(): Promise<Metadata> {

  const params:SiteConfig = await getSiteConfig();

  var ogImageUrl = params.fields.seoMetadata.fields.ogImage.fields.file.url;
  var ogImageUrlStripped = ogImageUrl.split('/').slice(3).join('/');

  return {
    title: params.fields.seoMetadata.fields.seoTitle,
    description: params.fields.seoMetadata.fields.seoDescription,
    openGraph: {
      title: params.fields.seoMetadata.fields.seoTitle,
      description: params.fields.seoMetadata.fields.seoDescription,
      url: params.fields.seoMetadata.fields.canonicalUrl,
      siteName: params.fields.seoMetadata.fields.seoTitle,
      images: [
        {
          url: ogImageUrlStripped,
          width: params.fields.seoMetadata.fields.ogImage.fields.file.details.image.width,
          height: params.fields.seoMetadata.fields.ogImage.fields.file.details.image.height,
          alt: params.fields.seoMetadata.fields.ogImage.fields.description,
        }
      ],
      locale: params.sys.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: params.fields.seoMetadata.fields.seoTitle,
      description: params.fields.seoMetadata.fields.seoDescription,
      creator: '@protopace',
      images: [ogImageUrlStripped],
    },
    verification: {
      google: params.fields.googleVerification,
      yandex: params.fields.baiduVerification,
      other: {
        baidu: params.fields.yandexVerification,
        bing: params.fields.bingVerification,
      },
    },
    robots: {
      index: !params.fields.seoMetadata.fields.noIndex,
      follow: !params.fields.seoMetadata.fields.noFollow,
    }
  }
}

export default async function Page() {

  const siteConfig:SiteConfig = await getSiteConfig();
  console.log(siteConfig);

  return (
    <>
    <StructuredData data={generateOrganizationJsonLd(siteConfig)}></StructuredData>
    <div className="container mx-auto px-5">
      <Link href={"/blog"}>Blog</Link>
    </div>
    </>
  );
}
