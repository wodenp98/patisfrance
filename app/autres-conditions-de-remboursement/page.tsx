/* eslint-disable react/no-unescaped-entities */
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="flex-1 lg:max-w-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">
            Autres conditions de remboursement
          </h3>
        </div>
        <Separator />
        <div>
          <ul className="list-disc pl-5 space-y-8 ">
            <li>
              Les frais réels demandés en remboursement sont consécutifs à des
              déplacements effectués à l’extérieur des sites de la société ou
              des invitations
            </li>
            <li>
              Les invitations sont justifiées par un caractère professionnel
              probant. Les notes de frais doivent obligatoirement et légalement,
              être datées et mentionner le nom de chaque invité et de sa
              société.
              <p className="mt-4">
                Les cadres attachés à un même site{" "}
                <span className="font-bold">
                  ne sont pas autorisés à « s’inviter » mutuellement.
                </span>
              </p>
            </li>
            <li>
              Tout frais entre collègues doit être approuvé par le supérieur
              hiérarchique présent à l’occasion de cette dépense.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
