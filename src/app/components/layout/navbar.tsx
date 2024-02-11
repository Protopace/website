"use client"

import Link from "next/link"
import { useState } from "react"

import { SiteConfig } from "@/api/interfaces/site-config"

import ContentfulImage from "@/components/contentful-image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NavBar({
  siteConfig
}: {
  siteConfig: SiteConfig
}) {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex container justify-between items-center h-full w-full">

        <Link href="/">
          <ContentfulImage
            src={`https:${siteConfig.fields.logo.fields.file.url}`}
            alt={siteConfig.fields.logo.fields.description}
            width={120}
            height={100}
          />
        </Link>

        <div className="hidden sm:flex">
          <ul className="flex flex-row items-center gap-x-6">
            <li>
              <Button
                asChild
                variant="ghost">
                <Link href="/blog" className="font-bold">
                  Blog
                </Link>
              </Button>
            </li>

            <li>
              <Button
                asChild>
                <Link href="/blog" className="font-bold">
                  Contact us
                </Link>
              </Button>
            </li>
          </ul>
        </div>

        <div onClick={toggleNavbar} className="sm:hidden cursor-pointer pl-24">
          <Menu color={"#001d66"}>
          </Menu>
        </div>
      </div>

      <div className={`fixed container top-0 w-[100%] h-screen sm:hidden bg-white ease-in duration-300 ${menuOpen ? "right-0" : "right-[-100%]"
        }`}>
        
        <div className="flex flex-row w-full h-24">
          <div className="flex justify-between items-center h-full w-full">
            <Link href="/">
              <ContentfulImage
                src={`https:${siteConfig.fields.logo.fields.file.url}`}
                alt={siteConfig.fields.logo.fields.description}
                width={120}
                height={100}
              />
            </Link>

            <div className="flex items-center justify-end">
              <div onClick={toggleNavbar} className="cursor-pointer">
                <X color={"#001d66"}></X>
              </div>
            </div>
          </div>

        </div>


        <div className="sm:flex">
          <ul className="flex flex-col items-left gap-y-6">
            <li>
              <Button
                asChild
                variant="ghost">
                <Link href="/blog" className="font-bold">
                  Blog
                </Link>
              </Button>
            </li>

            <li>
              <Button
                asChild>
                <Link href="/blog" className="font-bold">
                  Contact us
                </Link>
              </Button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}