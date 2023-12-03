/* eslint-disable react/no-unescaped-entities */

export function ContentPlace() {
  return (
    <div>
      <ul className="list-disc pl-5 space-y-8">
        <li>
          La société utilise généralement des hôtels 3*, LOGIS de France ou
          équivalent en fonction des coûts négociés. (Chiffre arrêté au 1er
          juillet 2023 = 120 € par nuit / 12 € par petit déjeuner) en annexe la
          liste des partenariat et lien sur SharePoint
          <span>
            De nombreux hôtels proposent des formules d’hébergement tous compris
            (chambre + repas + petit déjeuner) que la société préconise
            d’utiliser.
          </span>
        </li>
        <li>
          Les dépenses de mini bar, de blanchisserie (hormis pour les
          déplacements de plus de 7 jours) et d’appels téléphoniques personnels
          passés des hôtels ne sont pas pris en compte.
        </li>
        <li>
          Pour le groupe ACCOR HOTEL, une Offre Globale a bien été validée
          (Flexible et Non flexible). Vos codes d'accès à utiliser sur notre
          site de réservation:
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="font-bold">CODE CLIENT: SC381611755</p>
            <p className="font-bold">CODE D'ACCÈS : PA213FR375</p>
          </div>
        </li>
      </ul>
      <div className="mt-6">
        <p>
          <a
            className="underline pr-1"
            href="https://all.accor.com/france/index.fr.shtml"
          >
            Accor Hotels
          </a>
          ou à communiquer à l'hôtel lors de la réservation en direct :
        </p>
        <p>L'offre AHBO (Chain Offer) :</p>
        <ul className="list-disc pl-5 space-y-4">
          <li>Réduction de 5% dans les hôtels 2 et 3 étoiles</li>
          <li>Réduction de 9% dans les Ibis et Ibis Styles </li>
          <li>Réduction de 10% dans les hôtels 4 et 5 étoiles</li>
          <li>
            Offre disponible dans plus de 3500 hôtels en France et à l'étranger
          </li>
          <li>
            Réductions appliquées sur le Tarif Flexible (annulable le jour
            d'arrivé selon les conditions de l'hôtel)
          </li>
          <li>Réductions sur le Tarif Non-Flexible (à hauteur de 5%)</li>
        </ul>
      </div>
    </div>
  );
}
