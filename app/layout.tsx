"use client";
import "@/styles/globals.css";
import { Metadata } from "next";

import { GeistSans, GeistMono } from "geist/font";
import { cn } from "@/lib/utils";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar/Navbar";
import { SidebarNav } from "@/components/Navbar/sidebar-nav";
import { sidebarNavItems } from "@/lib/helpers";
import { Separator } from "@radix-ui/react-separator";

// export const metadata: Metadata = {
//   title: "Patisfrance",
// };

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn(`min-h-screen bg-background  antialiased }`)}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">
              <Navbar>{children}</Navbar>
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
