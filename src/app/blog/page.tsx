import { client } from "@/api/client";
import { Post } from "@/api/interfaces/post";
import { Author } from "@/api/interfaces/author";
import Link from 'next/link';

import ContentfulImage from "@/components/contentful-image";
import Date from "@/components/date";
import {
  Avatar,
  AvatarImage 
} from "@/components/ui/avatar";

import HeroPost from "@/blog/hero-post";
import BlogCard from "@/components/blog-card";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter
} from "@/components/ui/card";

export default async function Page() {

  const response = await client.getEntries({
    content_type: "post",
  })

  const allPosts: Post[] = response.items ?? [];
  const heroPost = allPosts[0];
  const secondPost = allPosts[1];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">

        <Link className="w-[400px]" href={`/blog/${heroPost.fields.slug}`} >
          <Card className="hover:shadow-xl ease-in-out duration-500">
            <CardHeader>
              <CardTitle className="font-normal text-lg hover:underline">{heroPost.fields.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ContentfulImage
                alt={`${heroPost.fields.coverImage.fields.description}`}
                priority
                width={400}
                height={300}
                src={heroPost.fields.coverImage.fields.file.url}
              />
            </CardContent>

          </Card>
        </Link>

        </div>
      </div>
    </section>
  );
}
