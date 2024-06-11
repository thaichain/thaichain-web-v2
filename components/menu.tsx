"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from 'next/image'
import Link from 'next/link'

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex w-full justify-between items-center">
          <div className="flex space-x-4   items-center">
            <Link href="/">
              <Image src="./tch.png" alt="Icon"
                width={500}
                height={500} className="w-8 h-8" />
            </Link>
            <MenuItem setActive={setActive} active={active} item="Services">
              {/* <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div> */}
              <div className="text-sm grid  gap-10 p-4">
                <ProductItem
                  title="Service"
                  href="https://www.facebook.com/thaichain.io"
                  src="./tch-20.png"
                  description="ThaiShield the security audits service."
                />
                {/* <ProductItem
                  title="Product"
                  href="https://tailwindmasterkit.com"
                  src="./p-1.jpg"
                  description="Public Blockchain for all systems in Thailand."
                /> */}

              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid  gap-10 p-4">
                <ProductItem
                  title="Product"
                  href="https://www.facebook.com/thaichain.io"
                  src="./p-1.jpg"
                  description="Public Blockchain for all systems."
                />

              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Links">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="https://www.facebook.com/thaichain.io">Facebook</HoveredLink>
                <HoveredLink href="https://github.com/thaichain">Github</HoveredLink>

              </div>
            </MenuItem>
          </div>
          <div className="ml-auto">
            <w3m-button />
          </div>
        </div>
      </Menu>
    </div>
  );
}
