import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";

import { GeistSans, GeistMono } from "geist/font";
import { cn } from "@/lib/utils";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Patisfrance",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            `min-h-screen bg-background  antialiased ${GeistSans.variable}`
          )}
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
