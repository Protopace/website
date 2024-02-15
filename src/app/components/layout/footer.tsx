import Link from "next/link";
import ContentfulImage from "@/components/contentful-image";
import { SiteConfig } from "@/api/interfaces/site-config"
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";



export default function Footer({
  siteConfig
}: {
  siteConfig: SiteConfig
}) {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="md:flex md:justify-between">
          <div className="flex mb-6 md:mb-0 justify-center position:relative">
            <Link href="/" className="flex py-6 items-center">
              <ContentfulImage
                src={`https:${siteConfig.fields.logo.fields.file.url}`}
                alt={siteConfig.fields.logo.fields.description}
                width={100}
                height={51}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">Blog</Link>
                </li>
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">Contact us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:justify-between">
          <span className="flex text-sm text-gray-500 sm:text-center dark:text-gray-400 justify-center">
            © 2024&nbsp;<Link href="/" className="hover:underline">Protopace™</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
            <Link href="https://www.linkedin.com/company/protopace/" target="_blank" className="text-gray-500 hover:text-gray-900">
              <Linkedin></Linkedin>
            </Link>
            <Link href="https://www.facebook.com/protopace/" target="_blank" className="text-gray-500 hover:text-gray-900">
              <Facebook></Facebook>
            </Link>
            <Link href="https://www.instagram.com/protopace/" target="_blank" className="text-gray-500 hover:text-gray-900">
              <Instagram></Instagram>
            </Link>
            <Link href="https://twitter.com/protopace" target="_blank" className="text-gray-500 hover:text-gray-900">
              <Twitter></Twitter>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}