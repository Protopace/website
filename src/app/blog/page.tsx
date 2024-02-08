import HeroPost from "@/src/app/blog/hero-post";
import { client } from "@/src/app/api/client";
import { Post } from "@/src/app/api/interfaces/post";

export default async function Page() {
  
  const response  = await client.getEntries({
    content_type: "post",
  })

  const allPosts: Post[]= response.items ?? [];
  const heroPost = allPosts[0];

  return (
    <div className="container mx-auto px-5">

      {heroPost && (
        <HeroPost
          title={heroPost.fields.title}
          coverImage={heroPost.fields.coverImage}
          date={heroPost.fields.date}
          author={heroPost.fields.author}
          slug={heroPost.fields.slug}
          excerpt={heroPost.fields.excerpt}
        />
      )}
    </div>
  );
}
