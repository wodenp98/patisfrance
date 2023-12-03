export function DisplayForm() {
  return (
    <div>
      <div>
        <h2 className="text-lg font-bold pb-8 underline">
          Frais de repas «habituels»
        </h2>
        <p>
          Sont considérés comme frais de repas «habituels» au sens du présent
          règlement ceux qui correspondent à la prise d’un repas au moins hors
          du domicile du collaborateur, à l’occasion d’une journée de travail.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold py-8 underline">Barèmes</h2>
        <div>
          <p>
            Les frais de repas du midi dans le cadre de l’organisation
            habituelle du travail sont alors pris en charge par
            l’entreprise,comme suit :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Les salariés de la force de vente (VRP), bénéficient d’une prise
              en charge de leur frais de repas journalier au réel à concurrence
              de 15,80 € par repas du midi (*).
            </li>
            <li>
              Les chauffeurs livreurs bénéficient d’une indemnité de repas par
              jour travaillé en déplacement hors des locaux de l’entreprise, au
              regard des conditions particulières d’exécution du travail, à
              hauteur de 9,40 €, Ce mode d’indemnisation forfaitaire dispense de
              la production systématique de factures de restauration,
              conformément aux dispositions du BOSS.
            </li>
            <li>
              Pour les autres collaborateurs de la société, il y a attribution
              d’un titre restaurant repas compris dans l’horaire de travail
              habituel.
            </li>
          </ul>

          <p className="text-sm mt-4">
            (*) Ces prises en charge sont sous conditions que le salarié ait été
            contraint d’engager des frais et soit en mesure de produire les
            justificatifs de ces frais.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold py-8 underline">
          Mode d’attribution des titres restaurant
        </h2>
        <div>
          <ul className="list-disc space-y-2">
            <li>
              Le nombre de titres restaurant est calculé chaque mois, déduction
              faite du nombre de repas pris en charge par l’entreprise (réunion,
              formation, déplacement …) au cours du mois.
            </li>
            <li className="font-bold">
              Lors d’un repas mis sur note de frais, il faut alors
              <span className="text-red-500 pl-1">
                IMPERATIVEMENT LE DEDUIRE DE SMARTRH
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
