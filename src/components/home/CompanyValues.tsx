import React from 'react';

const CompanyValues: React.FC = () => {
  return (
    <div className="bg-haka-primary bg-opacity-10 py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">UNSER VERSPRECHEN - Made in Germany. Since 1946.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-haka-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-center mb-3">WIRKSAM</h3>
            <p className="text-sm text-gray-600">
              Unsere Produkte enthalten nur, was wirklich wichtig ist. So entstehen Konzentrate mit hochwertigen Wirkstoffen.
              Schon ein kleiner Tropfen genügt, um mit hoher Reinigungskraft effektiv gegen jeden Schmutz, Fett und Kalk vorzugehen.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-haka-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="font-bold text-center mb-3">NACHHALTIG</h3>
            <p className="text-sm text-gray-600">
              Der beste Weg, unseren Planeten zu schützen, ist, weniger zu verbrauchen. Unsere Produkte sind darauf ausgelegt:
              Schon eine kleine Menge genügt, um Großes zu leisten. Das spart wertvolle Ressourcen und schont die Umwelt.
              Dabei setzen wir auf naturbasierte, vegane und biologisch abbaubar Inhaltstoffe.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-haka-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-center mb-3">HAUTVERTRÄGLICH</h3>
            <p className="text-sm text-gray-600">
              Unsere Produkte bieten mehr als nur Sauberkeit – sie sorgen für dein Wohlbefinden. Dank schonender Rezepturen
              ohne aggressive Chemikalien sind sie hautverträglich und unbedenklich für Mensch, Materialien und Umwelt,
              bei gleichzeitig höchster Effizienz.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-6">
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-haka-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium">Verbraucht weniger</span>
          </div>

          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-haka-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a2.5 2.5 0 015 0v6a2.5 2.5 0 01-5 0zm7 0V14m0-2.5v-6a2.5 2.5 0 015 0v6a2.5 2.5 0 01-5 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs font-medium">Schont Haut & Umwelt</span>
          </div>

          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-haka-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span className="text-xs font-medium">Vegan & biologisch abbaubar</span>
          </div>

          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-haka-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <span className="text-xs font-medium">Made in Germany</span>
          </div>

          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-haka-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
            </svg>
            <span className="text-xs font-medium">PETA-gelistet</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyValues;
