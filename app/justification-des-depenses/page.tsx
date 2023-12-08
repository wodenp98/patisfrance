/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Justification des dépenses</h3>
        </div>
        <Separator />
        <div className="space-y-8">
          <p>
            Les dépenses professionnelles doivent être justifiées par des
            documents probants qui précisent le montant, la date, le lieu, la
            nature et la raison des dépenses.
          </p>
          <p>
            Si l’intéressé a pourvu aux dépenses de clients, de visiteurs ou de
            collègues, le nom de ceux-ci doit être précisé sur le bon de l’état
            des dépenses. Les reçus doivent être des originaux, pas des
            photocopies.
          </p>
          <p>
            Dans les rares cas où aucun reçu n’aura pu être obtenu, une note
            écrite sur laquelle seront précisées l’information requise et la
            raison de l’absence de reçu, sera jointe au dossier.
          </p>
          <p>
            Les reçus doivent être conformes aux exigences de l’administration
            fiscale en la matière (par exemple, la législation relative à la
            T.V.A.) si elles existent. Les reçus de cartes de crédit ne
            constituent pas un justificatif valable.
          </p>
          <p>
            Les états de dépenses insuffisamment justifiés ou incomplets seront
            retournés par le département en charge de leur vérification ou par
            le département Ressources Humaines.
          </p>
          <p>
            Les frais y afférents ne pourront être remboursés aussi longtemps
            que le document dûment corrigé n’aura pas été produit.
          </p>
        </div>
      </div>
    </div>
  );
}
