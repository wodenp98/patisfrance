/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Dispositions administratives</h3>
        </div>
        <Separator />
        <div>
          <div>
            <h2 className="text-lg font-bold pb-8 underline">Process</h2>
            <p>
              Les membres du personnel peuvent obtenir le remboursement des
              frais visés par le présent règlement à condition de respecter la
              procédure suivante :
            </p>
            <ul className="list-disc pl-5 space-y-8">
              <li>
                 Pour tous les collaborateurs ayant un téléphone ou une tablette
                professionnelle, alors il est IMPERATIF d’utiliser{" "}
                <span className="font-bold">SPENDCATCHER</span>
              </li>
              <li>
                Pour les autres il faudra utiliser{" "}
                <span className="font-bold">Mobilexpens</span> et IMPORTER
                OBLIGATOIREMENT tous les tickets en PDF.
              </li>
              <li>Vérifier que les PDF soient entiers et lisibles.</li>
              <li>
                La note de frais doit être établie mensuellement via le système
                intranet actuellement en vigueur dans l’entreprise. La Note de
                frais éditée doit être accompagnée des justificatifs, précisant
                le montant, la date, le lieu, la nature et la raison des
                dépenses.
              </li>
              <li>
                La note de frais présentée au remboursement doit être détaillée
                et ventilée par nature.
              </li>
              <li>
                La note de frais doit être soumise au supérieur hiérarchique. Il
                vérifie à cette occasion le respect des limites prévues dans les
                annexes de la présente procédure.
              </li>
              <li>
                La note de frais accompagnée des justificatifs,{" "}
                <span className="underline">
                  classés pour faciliter le traitement
                </span>
                , est ensuite transmise au département Ressources Humaines qui
                vérifie :
                <ul className="list-decimal pl-5 space-y-8">
                  <li>L’exactitude arithmétique</li>
                  <li>Le respect de la procédure ci-dessus</li>
                </ul>
              </li>
              <li>
                En cas de conformité avec les dispositions ci-dessus, le
                département Ressources Humaines procède au remboursement de la
                note de frais par virement.
              </li>
              <li>Les notes non conformes ne sont pas remboursées. </li>
              <li>
                En cas de dépassement des limites prévues aux annexes, le
                département Ressources Humaines devra en référer à la personne
                ayant contresigné la note de frais afin d’obtenir une
                instruction écrite et motivée permettant de procéder au
                remboursement demandé.
              </li>
              <li>Celle-ci devra être annexée à la note de frais</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold py-8 underline">
              Rappels concernant les notes de frais :
            </h2>
            <ul className="list-disc pl-5 space-y-8">
              <li>
                {" "}
                Les notes de frais doivent obligatoirement être faites au mois
                le mois.
              </li>
              <li>
                Pour un mois concerné, un salarié ne doit effectuer{" "}
                <span className="font-bold">qu’une seule note de frais</span>{" "}
                (possibilité sur MobileXpenses et spendcatcher de l’enregistrer
                en brouillon tant qu’elle n’est pas terminée et avant de
                l’envoyer pour validation).
              </li>
              <li>
                Pour que votre déjeuner soit pris en charge, vous devez être
                dans l’impossibilité de rentrer déjeuner à votre domicile ou au
                sein de votre lieu de travail habituel .(dans un périmètre de 15
                km ou 20 minutes)
              </li>
              <li>
                Le déjeuner du midi peut comporter une entrée, un plat, un
                dessert ainsi qu’une boisson non alcoolisée.{" "}
                <span className="font-bold">
                  (fiche sans détail ou divers seront refusés)
                </span>
              </li>
              <li>
                Les tickets proforma, justificatifs « non valable pour
                encaissement » ou « duplicata » doivent être accompagnés d’un
                justificatif de paiement.
              </li>
              <li>
                Les factures sous forme Hexacompta ne sont valables
                qu’accompagnées d’un justificatif de paiement.{" "}
              </li>
              <li>
                Les achats effectués en grandes quantités en boulangerie (Pains,
                viennoiseries, tarte familiale et…) et / ou en supermarché
                lesquels sont non consommables dans l’immédiat ne vous seront
                plus remboursés.
              </li>
              <li>
                Les notes de frais réglées en tickets ou carte restaurant vous
                seront refusées.
              </li>
              <li>
                Les factures doivent impérativement être au nom du salarié et
                non d’un tiers
              </li>
              <li>
                Les invitations et déplacements doivent comporter le maximum
                d’informations : personnes concernées, nom de l’entreprise,
                objet de l’invitation/déplacement
              </li>
              <li>
                L’ensemble des justificatifs doivent être transmis au service RH
                (la réception des pièces conditionne le paiement){" "}
                <span className="font-bold">numérotés et classés.</span>
              </li>
              <li className="font-bold">
                {" "}
                Les notes de frais reçues après le 05 (cachet de la poste
                faisant foi) ne seront traitées que le mois suivant.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
