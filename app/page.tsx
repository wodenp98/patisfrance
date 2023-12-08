/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "../components/Navbar/sidebar-nav";
import { ProfileForm } from "./profile-form";
import { sidebarNavItems } from "@/lib/helpers";
export default function IndexPage() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Champ d'application</h3>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </div>
  );
}
