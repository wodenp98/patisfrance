import { Separator } from "@/components/ui/separator";

export default function SettingsNotificationsPage() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Frais de déplacement</h3>
        </div>
        <Separator />
        <div>
          <p>
            Un déplacement professionnel est subordonné à une autorisation
            préalable d’un responsable hiérarchique.
          </p>
          <ul className="list-disc pl-5 space-y-8 mt-8">
            <li>
              Cette autorisation est:
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  Implicite, dans le cadre des missions permanentes d’une
                  fonction, (activité commerciale ou livraison)
                </li>
                <li>Spécifique, en cas de missions occasionnelles.</li>
              </ul>
            </li>
            <li>
              Le déplacement entre le domicile et le lieu de travail n’est pas
              considéré comme un déplacement professionnel.
            </li>
            <li>
              Cette procédure «frais de déplacement» s’applique exclusivement
              aux collaborateurs de la société; Il est rigoureusement interdit
              de souscrire un billet de transport pour le compte d’un tiers
              extérieur à la société.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
