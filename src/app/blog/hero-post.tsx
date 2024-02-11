import Link from "next/link";

import Date from "@/components/date";
import CoverImage from "@/blog/cover-image";
import Avatar from "@/components/avatar";

export default function HeroPost({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
  }: {
    title: string;
    coverImage: any;
    date: string;
    excerpt: string;
    author: any;
    slug: string;
  }) {
    return (
      <section>
        <div className="mb-8 md:mb-16">
          <CoverImage
            title={title}
            description={coverImage.description}
            slug={slug}
            url={coverImage.fields.file.url}
          />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <Date dateString={date} />
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            {author.fields && <Avatar name={author.name} picture={author.fields.picture} />}
          </div>
        </div>
      </section>
    );
  }