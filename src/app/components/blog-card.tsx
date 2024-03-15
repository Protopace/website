import { Author } from "@/api/interfaces/author";
import { Image } from "@/api/interfaces/image";
import Link from "next/link";

import { Avatar } from "@/components/ui/avatar";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter
} from "@/components/ui/card";

import ContentfulImage from "@/components/contentful-image";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function BlogCard({
	title,
	image,
	date,
	author,
	slug,
}: {
	title: string;
	image: Image;
	date: string;
	excerpt: string;
	author: any;
	slug: string;
}) {
	return (
		<Card className="w-[350px] h-[350px]">
			<Link href={`/blog/${slug}`}
				className="">
				<CardHeader>
					<ContentfulImage
						src={image.fields.file.url}
						width={300}
						height={300}
					/>
				</CardHeader>

				<CardContent>
					<CardTitle
						className="font-display text-lg">
							{title}
					</CardTitle>
				</CardContent>

				<CardFooter className="flex justify-between">
					<Avatar>
						<AvatarImage
							src={author.fields.picture.fields.file.url}
							alt={author.fields.name}>
						</AvatarImage>
					</Avatar>
				</CardFooter>
			</Link>
		</Card >
	);
}