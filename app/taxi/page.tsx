/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function SettingsNotificationsPage() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Déplacement en taxi</h3>
        </div>
        <Separator />
        <div>
          <ul className="list-disc pl-5 space-y-8">
            <li>
              Les frais de déplacement professionnel en taxi sont pris en charge
              par l’entreprise à la{" "}
              <span className="font-bold">
                condition que l’utilisation des transports publics ne soit pas
                adaptée
              </span>{" "}
              aux circonstances et sur présentation du reçu.
            </li>
            <li>
              (Pour certaines régions, il y a des concurrents comme les VTC qui
              coutent moins chers, donc à privilégier)
            </li>
            <li>
              Les pourboires sont à la charge du collaborateur et non de
              l’entreprise.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
