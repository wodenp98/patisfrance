/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Carburant et carte total</h3>
        </div>
        <Separator />
        <div>
          <h2 className="text-lg font-bold pb-8 underline">Carburant</h2>
          <ul className="list-disc pl-5 space-y-8">
            <li>
              Certains collaborateurs disposent d’une carte carburant TOTAL
              associée à un véhicule (poids lourds oui VL), mis à disposition
              dans le cadre des missions.
            </li>
            <li>
              Cette carte permet de régler le carburant dans les stations
              (TOTAL, TOTAL ACCESS et ELAN sur tout le territoire Français) du
              même nom et les péages d’autoroute lors des déplacements
              professionnels, Les personnes concernées doivent indiquer leurs
              kilométrages lors de chaque utilisation de cette carte.
            </li>
            <li>
              Cette carte est à usage uniquement professionnel{" "}
              <span className="font-bold">
                (pas d’utilisation en dehors des périodes d’activité)
              </span>
              . Elle ne peut pas être utilisée pour des services en station
              autre que du carburant (lavage…etc.), ni pour les achats en
              boutique TOTAL.
            </li>
            <li>
              Un code conducteur et un code confidentiel sont transmis
              individuellement à chaque collaborateur lors de la remise de la
              carte.
            </li>
            <li>
              Ils ne doivent en aucun cas être communiqués, car ils sont
              individuels et non cessibles. Ils servent à sécuriser nos
              transactions avec les cartes TOTAL et permettent le suivi des
              consommations et des kilomètres des différents véhicules de la
              flotte.
            </li>
            <li>
              Lors de l’utilisation de cette carte en station, vous devrez
              indiquer en premier votre code confidentiel, ensuite votre code
              chauffeur et enfin le kilométrage exacte du véhicule concerné.
            </li>
            <li>
              Le carburant à utiliser est du gasoil classique ou essence SP-95
              ou 98, en cas d’absolue nécessité il est possible de mettre de
              l’EXCELLIUM.
            </li>
            <li>
              En cas d’utilisation de la carte le week-end pour des besoins
              professionnels, veuillez en informer votre N+1 et le gestionnaire
              du parc.
            </li>
            <li>
              Dans les cas exceptionnels de déplacements hors zone, la prise de
              carburant dans des enseignes TOTAL et les enseignes autres que
              TOTAL sera autorisée et remboursée sur note de frais.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
