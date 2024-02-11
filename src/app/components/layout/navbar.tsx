"use client"

import Link from "next/link"
import { useState } from "react"

import { SiteConfig } from "@/api/interfaces/site-config"

import ContentfulImage from "@/components/contentful-image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

function HamburguerMenu({
  menuOpen
}:{
  menuOpen: boolean
  }) {

  return (

    <>
      <span className={`bg-[#001d66] block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
        }`} />

      <span className={`bg-[#001d66] block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm my-0.5 ${menuOpen ? 'opacity-0' : 'opacity-100'
        }`} />

      <span className={`bg-[#001d66] block transition-all duration-300 ease-out
                      h-0.5 w-5 rounded-sm ${menuOpen ?
          '-rotate-45 -translate-y-1' : 'translate-y-0.5'
        }`} />
    </>

  )}

export default function NavBar({
  siteConfig
}: {
  siteConfig: SiteConfig
}) {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="fixed w-full h-24 border-b-2 bg-white">
      <div className="flex container justify-between items-center h-full w-full">

        <span onClick={() => setMenuOpen(false)}>
          <Link href="/">
            <ContentfulImage
              src={`https:${siteConfig.fields.logo.fields.file.url}`}
              alt={siteConfig.fields.logo.fields.description}
              width={120}
              height={100}
            />
          </Link>
        </span>

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
          <HamburguerMenu 
            menuOpen = {menuOpen}
          >
          </HamburguerMenu>
        </div>
      </div>

      <div className={`fixed top-24 w-[100%] h-screen sm:hidden bg-white ease-in duration-300 ${menuOpen ? "right-0" : "right-[-100%]"
        }`}>
        
          <div className="sm:flex">
            <ul className="flex flex-col">

              <li className="flex border-b-2 h-24" onClick={() => setMenuOpen(false)}>
                <div className="flex container items-center">
                    <Link href="/blog" className="text-[hsl(var(--primary))]">
                      Blog
                    </Link>
                </div>
              </li>

              <li className="flex border-b-2 h-24" onClick={() => setMenuOpen(false)}>
                <div className="flex container items-center">
                    <Link href="/blog" className="font-bold text-[hsl(var(--primary))]">
                      Contact Us
                    </Link>
                </div>
              </li>

            </ul>
          </div>

      </div>
    </nav>
  );
}