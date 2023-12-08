/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Régimes de remboursement</h3>
        </div>
        <Separator />
        <div>
          <div>
            <h2 className="text-lg font-bold pb-8 underline">
              Les frais justifiés
            </h2>
            <p>
              Les frais de déplacement sont remboursés sur justificatifs si le
              collaborateur a été contraint, dans le cadre de son activité
              d’engager des frais et être en mesure de produire les
              justificatifs de ces frais.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold py-8 underline">
              Les voyages à l’étranger
            </h2>
            <ul className="list-disc pl-5 space-y-8 ">
              <li>
                Les déplacements se font dans la mesure du possible en semaine.
                du lundi au vendredi.
              </li>
              <li>
                Ainsi, tout départ ou retour pour un voyage d’affaires en Europe
                devra prioritairement s’effectuer en début de semaine le lundi
                matin tôt pour le départ et en fin de semaine le vendredi soir
                pour le retour.
              </li>
              <li>
                Dans le cas d’une prestation de week-end, la récupération est
                envisagée.
              </li>
              <li>
                Il est entendu que les personnes qui profitent d’un week-end à
                l’étranger sans travailler et/ou pour faire du tourisme ou se
                reposer, ne bénéficient d’aucune possibilité de récupération.
              </li>
              <li>
                La demande de récupération peut être faite à son responsable
                hiérarchique et mettre en copie le service RH en mentionnant
                obligatoirement les éléments suivants :
                <ul className="list-decimal pl-5 space-y-4 mt-4">
                  <li>Jour de la prestation</li>
                  <li>Nombre d'heures prestées</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
