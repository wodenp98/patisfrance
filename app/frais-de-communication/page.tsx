/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";
import { ContentPlace } from "./content-place";
import { sidebarNavItems } from "@/lib/helpers";
import { SidebarNav } from "../components/sidebar-nav";

export default function SettingsNotificationsPage() {
  return (
    <div className="container relative">
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <div className="hidden space-y-6 p-10 pb-16 md:block">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight text-center">
                Frais professionnels
              </h2>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className="-mx-4 lg:w-1/5">
                <SidebarNav items={sidebarNavItems} />
              </aside>
              <div className="flex-1 lg:max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">
                      Frais de communication fixe et mobile & cotisations
                    </h3>
                  </div>
                  <Separator />
                  <ContentPlace />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
