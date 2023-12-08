/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Déplacement en véhicule privé</h3>
        </div>
        <Separator />

        <div>
          <p>
            Est considéré comme véhicule privé, le véhicule détenu par un membre
            du personnel de l’entreprise et dont ce dernier assume l’essentiel
            des frais. Les déplacements professionnels effectués à l’aide d’un
            véhicule privé sont pris en charge par l’entreprise, en fonction du
            barème d’indemnités kilomètriques annuellement publié par
            l'administration fiscale,
          </p>
          <div className="space-y-4 mt-8">
            <p>
              Cette indemnisation est réalisée après fourniture des informations
              suivantes :
            </p>
            <ul className="list-decimal pl-5 space-y-2">
              <li>du motif du déplacement</li>
              <li>du lieu précis du déplacement</li>
              <li>
                de la puissance fiscale du véhicule (prise en charge maxi 7 CV)
              </li>
            </ul>
          </div>
          <div className="space-y-4 mt-8">
            <p>Il est rappelé les points suivants :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Dans une démarche de sécurité, le déplacement en véhicule privé
                doit rester exceptionnel et lorsque l’utilisation des transports
                publics n’est pas adaptée.
              </li>
              <li>
                la société n’indemnise que les seuls kilomètres effectués en
                plus de ceux habituellement parcourus entre le domicile et le
                lieu de travail habituel.»
              </li>
            </ul>
            <p>
              En effet, seuls les salariés contraints d’utiliser leur véhicule
              personnel à des fins professionnelles peuvent bénéficier de
              l’exemption de l’assiette de cotisations et contributions sociales
              applicable aux indemnités kilométriques.
            </p>
          </div>
          <p className="mt-8">
            Les amendes d’ordre personnel et les contraventions encourues à
            l’occasion d’un déplacement professionnel ne sont pas remboursées
            par l’entreprise.
          </p>
        </div>
      </div>
    </div>
  );
}
