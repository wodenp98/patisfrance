import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">
            Déplacement en transports collectifs
          </h3>
        </div>
        <Separator />

        <div>
          <ul className="list-disc pl-5 space-y-8">
            <li>
              Les déplacements professionnels sont à privilégier par voie
              ferrée. La réservation se fait via le site de voyages CAP5 mis à
              disposition du personnel.
            </li>
            <li>
              Tout déplacement international doit être autorisé par le supérieur
              hiérarchique, qui approuve la demande de voyage correspondante.
            </li>
            <li>
              Ces déplacements sont effectués en classe économique sauf
              dérogation validée par le supérieur hiérarchique.
            </li>
            <li>
              Les déplacements sont payés directement par facture CAP5 auprès du
              département finances. L’utilisation de la note de frais doit
              rester exceptionnelle,
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
