import { Separator } from "@/components/ui/separator";
import { NotificationsForm } from "@/app/notifications/notifications-form";
import { sidebarNavItems } from "@/lib/helpers";
import { SidebarNav } from "../components/sidebar-nav";

export default function SettingsNotificationsPage() {
  return (
    <div className="container relative">
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <div className="hidden space-y-6 p-10 pb-16 md:block">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
              <p className="text-muted-foreground">
                Manage your account settings and set e-mail preferences.
              </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className="-mx-4 lg:w-1/5">
                <SidebarNav items={sidebarNavItems} />
              </aside>
              <div className="flex-1 lg:max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure how you receive notifications.
                    </p>
                  </div>
                  <Separator />
                  <NotificationsForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
