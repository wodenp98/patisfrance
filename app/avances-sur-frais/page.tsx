import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SettingsAccountPage() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Avances sur frais</h3>
        </div>
        <Separator />
        <div>
          <div>
            <h2 className="text-lg font-bold pb-8 underline">
              Avance sur frais exceptionnelle
            </h2>
            <p>
              En cas de déplacements exceptionnels, une avance sur le paiement
              des frais de déplacements temporaires peut être consentie aux
              collaborateurs qui en font la demande, après autorisation de leur
              supérieur hiérarchique. L’avance est versée au vu de la
              présentation d’un état de frais provisoire accompagné de l’ordre
              de mission.
            </p>
            <p className="py-4">
              Annexe:{" "}
              <Link
                href="/pdf/demande-acompte-avance.pdf"
                className="underline"
              >
                Demande d’avance/acompte
              </Link>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold py-8 underline">
              Avance sur frais permanente
            </h2>
            <p>
              Les fonctions impliquant des déplacements fréquents et réguliers
              peuvent bénéficier d’une avance permanente. L’avance permanente ne
              se cumule pas avec la détention d’une carte corporates.
            </p>
            <p className="py-4">
              Annexe:{" "}
              <Link
                href="/pdf/demande-avance-permanente.pdf"
                className="underline"
              >
                Demande d’avance permanente
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
