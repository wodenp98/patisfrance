/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">
            Appareils numériques, électroniques, bagages
          </h3>
        </div>
        <Separator />
        <div>
          <ul className="list-disc pl-5 space-y-8">
            <li>
              Les assistants numériques (« PDA »), appareils photo numériques,
              logiciels, livres et abonnements, GPS ne sont pas remboursables.
            </li>
            <li>
              Les calculatrices, téléphones cellulaires{" "}
              <span className="font-bold">ainsi que tout équipement</span> ou
              service similaire et à usage professionnel{" "}
              <span className="font-bold">
                doivent être commandés par les canaux traditionnels (en
                particulier par l’intermédiaire du département service généraux)
              </span>{" "}
              et faire l’objet d’une facture officielle, qui sera remise au
              département comptabilité et enregistrée par lui.
            </li>
            <li>
              De tels biens et services ne peuvent en aucun cas être achetés
              avec la carte de crédit de la société puis voir leur remboursement
              réclamé dans un état de dépenses (du fait, notamment, de
              l’impossibilité dans laquelle la compagnie pourrait se trouver
              d’obtenir le remboursement de la T.V.A.).
            </li>
            <li>
               Ce type d’équipement reste la propriété de la société. L’achat de
              tels articles à des fins privées ne peut en aucun cas être
              remboursé
            </li>
            <p>
               L’achat de piles pour les calculatrices destinées à un usage
              professionnel courant constitue une dépense remboursable.
            </p>
            <li>
              Les valises, sacs de voyages (destinés aux vêtements) sont en tout
              état de cause des dépenses privées.
            </li>
            <li>
              En fonction de votre profil, un package est remis par
              l’informatique lors de votre embauche.
            </li>
          </ul>
          <p className="mt-8 font-bold">
            (exemple : poste de bureau avec télétravail  PC, station d’accueil,
            Ecran, souris, sacoche d’ordinateur  et casque)
          </p>
        </div>
      </div>
    </div>
  );
}
