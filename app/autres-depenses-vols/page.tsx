/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Autres depenses & vols</h3>
        </div>
        <Separator />
        <div>
          <div>
            {" "}
            <h2 className="text-lg font-bold pb-8 underline">
              Autres depenses
            </h2>
            <ul className="list-disc pl-5 space-y-8">
              <li>
                Les présents offerts aux collègues, les fleurs offertes à
                l’occasion de la journée des secrétaires de même que toute
                dépense similaire engagée à l’initiative du salarié lui-même
                sont des dépenses privées.
              </li>
              <li>
                D’ordinaire, les cadeaux faits aux collaborateurs qui quittent
                l’entreprise ou obtiennent une autre fonction au sein de la
                société comme du groupe ne constituent pas des dépenses
                professionnelles.
              </li>
              <li>
                A cet égard, des exceptions spéciales devront faire l’objet
                d’une autorisation préalable de la part du Département
                Ressources Humaines.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-bold pb-8 underline">Vols</h2>
            <ul className="list-disc pl-5 space-y-8">
              <li>
                En cas de perte de bagages au cours du voyage, l’intéressé
                introduira une réclamation auprès de la compagnie de transport
                (aérienne), détaillera le contenu du bagage perdu et conservera
                une copie des documents émis à cette occasion.
              </li>
              <li>L’argent liquide perdu ou volé n’est pas remboursé.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
