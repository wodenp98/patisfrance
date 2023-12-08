import { Separator } from "@/components/ui/separator";

export default function SettingsAppearancePage() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Cartes Corporates</h3>
        </div>
        <Separator />
        <div>
          <ul className="list-disc pl-5 space-y-8">
            <li>
              Afin de faciliter la gestion des frais professionnels,
              l’entreprise peut mettre à la disposition de la catégorie CADRE
              des membres de son personnel une carte de crédit de société dont
              elle prend en charge la cotisation annuelle. Cette attribution se
              fait sur demande du salarié, avec l’aval du manager,
            </li>
            <li>
              Le système des cartes corporates se substitue à celui des avances
              sur frais.
            </li>
            <li>
              La carte de crédit de société est une carte de paiement. Elle ne
              peut en aucun cas être utilisée pour des retraits d’espèces, ni à
              des fins privées.
            </li>
            <li>
              Le département Ressources Humaines doit être averti le plus tôt
              possible par l’intéressé de toute utilisation d’une carte de
              crédit de société «hors champ d’application habituelle», effectuée
              soit par erreur, soit en cas d’absolue nécessité («force majeure»)
              et les fonds correspondants à cette utilisation «hors champ»
              doivent être immédiatement remboursés. Après plusieurs rappels à
              l’ordre, la société pourra bloquer la carte de crédit du
              collaborateur qui ne respecte pas cette règle.
            </li>
            <li>
              La carte affaires concerne la population cadres de la société.
            </li>
            <li>
              Elle ne dispense pas de la procédure d’établissement de la note de
              frais.
            </li>
            <li>
              Les dossiers cartes corporates sont gérés par le département
              Ressources Humaines.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
