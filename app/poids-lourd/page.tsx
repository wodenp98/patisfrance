/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Véhicule poids lourd</h3>
        </div>
        <Separator />
        <div>
          <h2 className="text-lg font-bold pb-8 underline">
            Véhicule Poids lourd
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Un véhicule de type poids lourd peut être confié à un
              collaborateur doté d’un permis de conduire spécifique et en cours
              de validité.
            </li>
            <li>
              L’utilisation des véhicules de service est strictement limitée à
              l’utilisation professionnelle.
            </li>
            <li>
              Lors du retour de mission en fin de semaine, le véhicule sera
              stationné dans un endroit sûr ou au parking du site de
              rattachement, pour le weekend. Idem pour la période des congés
              payés. Le véhicule ne doit circuler que pendant les périodes
              d’activité.
            </li>
          </ul>
          <p className="mt-8 underline font-bold text-red-500">Attention :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="font-bold">
              L’utilisation de ce véhicule ne peut être maintenue en l’espèce si
              le permis de conduire n’est pas en état de validité. Tout
              collaborateur s’engage donc à informer l’entreprise de la
              suspension ou du retrait de son permis de conduire.
            </li>
            <li>
              La réception par le représentant légal de la Société d’un avis de
              contravention relatif à une infraction commise au moyen d’un
              véhicule de services fera l’objet d’une révélation à l’autorité
              émettrice de l’avis de l’identité et de l’auteur de l’infraction
              conformément aux dispositions de l’article L.121-6 du Code de la
              route.
            </li>
            <li>
              Les collaborateurs doivent veiller au bon entretien courant du
              véhicule qui leur a été confié selon le calendrier préconisé par
              le prestataire loueur.
            </li>
            <li>
              Ils doivent signaler toute défectuosité et demander en temps
              opportun les réparations qu’exige l’état de la voiture.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
