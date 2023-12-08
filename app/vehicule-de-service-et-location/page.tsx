/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">
            Véhicule de service et voiture de location
          </h3>
        </div>
        <Separator />

        <div>
          <h2 className="text-lg font-bold pb-8 underline">
            Véhicule de service
          </h2>
          <div className="space-y-4">
            <p>
              L’entreprise peut confier à un de ses salariés un véhicule de
              service, pour les besoins de son activité professionnelle,
              L’utilisation des véhicules de service est strictement limitée à
              l’utilisation professionnelle.
            </p>
            <p>
              Lors du retour de mission en fin de semaine, le véhicule sera
              stationné dans un endroit sûr ou au parking du site de
              rattachement, pour le weekend. Idem pour la période des congés
              payés. Le véhicule ne doit circuler que pendant les périodes
              d’activité.
            </p>
          </div>

          <h2 className="text-lg font-bold py-8 underline">
            Voiture de location
          </h2>
          <div>
            <p>
              Dans le cadre de déplacements exceptionnels, les collaborateurs
              autorisés par leur hiérarchie, peuvent utiliser une voiture de
              location, en respectant les principes suivants liés au partenariat
              avec des prestataires donnés :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Via l’outil KDS (CAP5/KDS)</li>
              <li>
                A l’extérieur (gares, aéroports, etc.) : Utiliser les services
                de la Société de location agréée par PatisFrance – Puratos et{" "}
                <span className="font-bold">
                  choisir un véhicule catégorie A
                </span>
                <ul className="list-decimal pl-5 space-y-2">
                  <li>Nom du conducteur</li>
                  <li>Date de prise et de retour du véhicule</li>
                  <li>Heures de prise et de retour du véhicule</li>
                </ul>
              </li>
            </ul>
            <p>
              Ne pas oublier votre permis de conduire lors de cette opération
              (document valide nécessaire et indispensable).
            </p>
          </div>
          <h2 className="text-lg font-bold py-8 underline">
            Recommandations :
          </h2>
          <div>
            <p>
              La facturation du véhicule de location est déclenchée toutes les
              24 heures. Gardez cette information en mémoire quand vous
              planifiez votre voyage. Il serait dommage de payer la location
              d’une nouvelle journée, pour une restitution avec deux heures de
              retard.
            </p>
            <p>
              Il est par ailleurs recommandé de retourner le véhicule de
              location, le réservoir plein, pour éviter les surcoûts de taxes du
              prestataire.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
