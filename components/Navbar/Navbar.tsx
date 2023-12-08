"use client";
import { sidebarNavItems } from "@/lib/helpers";
import { Separator } from "@radix-ui/react-separator";
import { SidebarNav } from "./sidebar-nav";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative">
      <section>
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <div className="space-y-6 p-10 pb-16">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight text-center">
                Frais professionnels
              </h2>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col items-center lg:items-start space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className="-mx-4 lg:w-1/5">
                <SidebarNav items={sidebarNavItems} />
              </aside>
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
