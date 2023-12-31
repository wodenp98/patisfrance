import { Separator } from "@/components/ui/separator";

export default function SettingsNotificationsPage() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">
            Frais de repas entre membres du personnel
          </h3>
        </div>
        <Separator />
        <div>
          <ul className="list-disc pl-5 space-y-8">
            <li>
              L’entreprise ne prend pas en charge les frais de repas pris entre
              membres du personnel, sauf autorisation expresse exceptionnelle et
              déplacement professionnel conjoint (*).
            </li>
            <li>
              (*) Lorsque deux collaborateurs se déplacent dans le cadre de
              leurs activités à plus de 50 Kms de leurs secteurs, les frais de
              repas de ce déplacement sont pris en charge. C’est alors le
              collaborateur au niveau hiérarchique le plus haut qui fait la
              dépense.
            </li>
            <li>
              L’entreprise ne prend pas en charge les boissons pris dans les
              bars ou autres lieux (hôtels, aéroports, etc.).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
