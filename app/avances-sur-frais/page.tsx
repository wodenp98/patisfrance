import { Separator } from "@/components/ui/separator";
import { AccountForm } from "@/app/avances-sur-frais/account-form";
import { SidebarNav } from "../components/sidebar-nav";
import { sidebarNavItems } from "@/lib/helpers";

export default function SettingsAccountPage() {
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
                    <h3 className="text-lg font-medium">Avances sur frais</h3>
                  </div>
                  <Separator />
                  <AccountForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
