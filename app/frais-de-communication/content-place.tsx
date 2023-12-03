export function ContentPlace() {
  return (
    <div>
      <div>
        <h2 className="text-lg font-bold pb-8 underline">
          Frais de communication fixe et mobile
        </h2>
        <ul className="list-disc pl-5 space-y-8">
          <li>
            L’entreprise peut fournir aux membres du personnel un ou plusieurs
            appareils de communication fixe ou mobile. Ces appareils sont alors
            à usage strictement professionnel.
          </li>
          <li>
            Etant donné leur coût élevé, les appels passés par G.S.M. à partir
            de l’étranger ou
            <span className="underline font-bold ml-1">
              vers l’étranger doivent être limités autant que possible.
            </span>
          </li>
        </ul>
        <p className="my-4">
          Des applications, type whatsApp, permettent de donner des appels dans
          certains pays sans surcoût.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold py-8 underline">Cotisations</h2>
        <p>
          Les contributions personnelles à des organismes professionnels sont
          des dépenses privées, à moins que l’intéressé puisse démontrer
          qu’elles apportent une valeur ajoutée à la société.
        </p>
      </div>
    </div>
  );
}
