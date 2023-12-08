/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">
            Exonération sociale et fiscale
          </h3>
        </div>
        <Separator />
        <div>
          <p>
            Les indemnités ou remboursements de frais professionnels sont
            exonérés des cotisations de sécurité sociale à la double condition
            qu’ils aient pour objet de couvrir de véritables frais
            professionnels et qu’ils correspondent aux frais réellement exposés
            par les salariés.
          </p>
        </div>
      </div>
    </div>
  );
}
