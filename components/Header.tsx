import Link from "next/link";

import { cn } from "@/lib/utils";

import Image from "next/image";

export function Header() {
  return (
    <header className="sticky mb-10 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/patisfrance-logo.svg"
              alt="logo"
              width={80}
              height={60}
            />
            {/* <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span> */}
          </Link>
        </div>
      </div>
    </header>
  );
}
