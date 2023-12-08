/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function IndexPage() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Champ d'application</h3>
        </div>
        <Separator />
        <div>
          <p>
            Le présent règlement relatif au remboursement des frais s’applique
            aux personnes liées à l’entreprise par un contrat individuel de
            travail.
          </p>

          <h2 className="text-lg font-bold py-8 underline">
            Principe du remboursement de frais
          </h2>
          <div>
            <ul className="list-disc pl-5 space-y-8 ">
              <li>
                Sont admis à remboursement, les frais encourus par les membres
                du personnel dans l’exécution de leur travail, dans la mesure où
                ils ont été engagés et documentés conformément aux dispositions
                de la présente procédure.
              </li>
              <li>
                Les dépenses professionnelles personnelles sont les dépenses
                encourues par les managers et les employés de la société dans la
                conduite des affaires de celles-ci. Elles sont remboursées par
                la société pour autant qu’elles soient raisonnables et qu’elles
                s’inscrivent dans les limites de toutes les procédures
                existantes en son sein.
              </li>
              <li>
                Leur remboursement doit être conforme à toutes les lois et à
                tous les règlements fiscaux en vigueur. Les dépenses privées ne
                sont pas remboursées.
              </li>
              <li>
                Ils sont remboursés une fois par mois, sur présentation d’une
                note de frais informatisée, approuvée par le responsable
                hiérarchique et accompagnée des justificatifs.
              </li>
              <li>
                Les frais de nature privée restent à la charge du membre du
                personnel qui les a engagés.
              </li>
              <li>
                Il est par ailleurs rappelé que les notes de frais doivent
                concerner des dépenses personnelles engagées dans le cadre de
                l’activité professionnelle et non des dépenses société qui
                répondent à une procédure comptable interne.
              </li>
              <li>
                Chaque paiement pour une dépense société doit être fait via une
                facture envoyée à destination de la comptabilité fournisseur. Le
                fournisseur doit être créé dans notre système informatique.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
