import { Separator } from "@/components/ui/separator";

export default function SettingsNotificationsPage() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">
            Frais de repas lors de déplacements professionnels
          </h3>
        </div>
        <Separator />
        <div>
          <ul className="list-disc pl-5 space-y-8">
            <li>
              Est réputé en déplacement professionnel, le salarié empêché de
              regagner sa résidence ou son lieu habituel de travail pour y
              prendre son déjeuner.
            </li>
            <li>
              Est réputé en grand déplacement professionnel, le salarié empêché
              de regagner chaque jour sa résidence habituelle.
            </li>
            <li>
              Les frais de repas du midi
              <span className="font-bold px-1">
                encourus à l’occasion d’un déplacement professionnel hors sites
                Puratos France
              </span>
              sont pris en charge par l’entreprise dans la limite de 20 € et sur
              présentation de justificatifs. Ceux du soir le sont dans la limite
              de 30 €.
            </li>
            <li className="font-bold">
              L’alcool n’est pas pris en charge par l’entreprise.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
