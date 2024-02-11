import Link from "next/link";

import Avatar from "@/components/avatar";
import Date from "@/components/date";
import CoverImage from "../cover-image";

import { client } from "@/api/client";
import { Post } from "@/api/interfaces/post";

import RichText from "@/components/rich-text";

type Props = {
  params: {
    slug: string;
  };
};

export const dynamic ="auto",
  fetchCache = "auto",
  revalidate = 10;

export default async function PostPage({ params } : Props ) {

  const slug = params.slug;
  const response  = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
  })
  const post : Post = response.items[0];

  return (
    <div className="container mx-auto px-5">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <article>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {post.fields.title}
        </h1>
        <div className="hidden md:block md:mb-12">
          {post.fields.author.fields.name && (
            <Avatar name={post.fields.author.fields.name} picture={post.fields.author.fields.picture} />
          )}
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage
            title={post.fields.title}
            description={post.fields.coverImage.fields.description}
            url={post.fields.coverImage.fields.file.url}
            />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            {post.fields.author.fields.name && (
              <Avatar name={post.fields.author.fields.name} picture={post.fields.author.fields.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={post.fields.date} />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="prose">
            <RichText content={post.fields.content} />
          </div>
        </div>
      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
    </div>
  );
}
