import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContentfulImage from "@/components/contentful-image";

export default function Hero() {

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="grid max-w-screen-xl px-4 py-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 className="max-w-2xl mb-4 text-4xl font-display tracking-tight leading-none text-center lg:text-left md:text-5xl xl:text-6xl">
						Smash your growth targets without breaking a sweat
					</h1>
					<div className="lg:py-6">
					<p className="max-w-2xl mb-6 font-light text-gray-500 text-center lg:text-left lg:mb-8 md:text-lg lg:text-xl">
						A newsletter for you to learn everything that has to go into building a successful growth team.
					</p>
					<div className="flex items-center justify-center lg:justify-start">
						<div className="flex w-full max-w-sm space-x-2">
							<Input
								className="flex"
								type="email" 
								placeholder="Email" />
							<Button
								className="flex text-lg px-6 mr-4"
								type="submit">
								Subscribe
							</Button>
						</div>
					</div>

					</div>


				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<ContentfulImage
						src="https://images.ctfassets.net/cnurwx923vw4/4d9AqONKDZyORrSB9TYeVX/5c84c0f322b501880803e7c4b789ee08/Hero.webp"
						alt="Protopace Logo"
						height={520}
						width={520}
						priority
					/>
				</div>
			</div>
		</section>
	);
};
