/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Véhicule de fonction</h3>
        </div>
        <Separator />
        <div>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Les collaborateurs qui se déplacent en permanence disposent d’une
              voiture de fonction.
            </li>
            <li>
              La voiture de fonction peut être utilisée, à titre personnel
              (week-end, vacances). Les frais de carburant, de parkings et de
              péages sont alors à la charge de l’utilisateur.
            </li>
            <li>
              Lorsque l’employeur met un véhicule à disposition de son salarié,
              son utilisation privée constitue un avantage en nature.
              L’estimation de cet avantage est évaluée forfaitairement ou peut
              être calculée, sur option de l’employeur, sur la base des dépenses
              réellement engagées.
            </li>
            <li>
              Par exception, les véhicules 2 places mis à disposition des
              membres de la force de vente, et les chauffeurs dans le cadre de
              leurs activités professionnelles terrain{" "}
              <span className="underline font-bold">
                ne peuvent être utilisées que pour un usage strictement
                professionnel (Cf développements ci-après sur le véhicule de
                service).
              </span>
            </li>
            <li>
              Le département Ressources Humaines s’assure chaque année auprès
              des collaborateurs concernés de la validité de leur permis de
              conduire.
            </li>
          </ul>
          <p className="mt-8 underline font-bold text-red-500">Attention :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="font-bold">
              Cet avantage ne peut être maintenu en l’espèce si le permis de
              conduire n’est pas en état de validité. Tout collaborateur
              s’engage donc à informer l’entreprise de la suspension ou du
              retrait de son permis de conduire.
            </li>
            <li>
              La réception par le représentant légal de la Société d’un avis de
              contravention relatif à une infraction commise au moyen du
              véhicule mis à disposition fera l’objet d’une révélation à
              l’autorité émettrice de l’avis de l’identité et de l’auteur de
              l’infraction conformément aux dispositions de l’article L.121-6 du
              Code de la route.
            </li>
            <li>
              Les collaborateurs doivent veiller au bon entretien courant du
              véhicule qui leur a été confié selon le calendrier préconisé par
              le{" "}
              <span className="underline font-bold">prestataire loueur.</span>
            </li>
            <li>
              Ils doivent signaler toute défectuosité et demander en temps
              opportun les réparations qu’exige l’état de la voiture.
            </li>
            <li>
              L’achat de tapis de sol voiture n’est pas considéré comme des
              frais engendrés dans le cadre de l‘activité professionnelle.
            </li>
            <li>
              Les lavages sont pris en compte chaque année à hauteur de 80 € par
              véhicule (équivalent 2 cartes lavages), sur présentation des
              justificatifs.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
