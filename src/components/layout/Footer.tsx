import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      {/* Newsletter Section */}
      <div className="container mx-auto mb-10">
        <div className="bg-haka-teal bg-opacity-20 py-8 px-6 rounded">
          <h2 className="text-center text-2xl font-bold mb-4">ZUM NEWSLETTER ANMELDEN</h2>
          <p className="text-center mb-6 max-w-2xl mx-auto">
            Bleibe immer top informiert, erhalte die besten Angebote und sichere dir einen 15% Gutschein auf deine nächste Bestellung.
          </p>

          <form className="max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-haka-primary"
                required
              />
              <input
                type="text"
                placeholder="Vorname"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-haka-primary"
              />
            </div>

            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                id="newsletter-consent"
                className="mt-1 mr-2"
                required
              />
              <label htmlFor="newsletter-consent" className="text-sm">
                Ich möchte per Newsletter sowie über individuelle Werbeanzeigen informiert werden.
                Hierzu darf HAKA meine Email-Adresse verwenden. Abmeldung jederzeit möglich.
                Informationen zum Datenschutz <a href="/pages/datenschutz" className="text-haka-primary underline">hier</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-haka-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-all"
            >
              ANMELDEN
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div>
          <h3 className="font-bold mb-4">Service</h3>
          <ul className="space-y-2">
            <li><a href="/pages/gutscheine-aktionen" className="text-sm hover:text-haka-primary">Gutscheine & Aktionen</a></li>
            <li><a href="/pages/newsletter" className="text-sm hover:text-haka-primary">Newsletter</a></li>
            <li><a href="/pages/versand-retoure" className="text-sm hover:text-haka-primary">Versand & Retoure</a></li>
            <li><a href="/pages/faqs" className="text-sm hover:text-haka-primary">FAQs</a></li>
            <li><a href="/pages/contact" className="text-sm hover:text-haka-primary">Kontakt</a></li>
            <li><a href="/pages/datenschutz" className="text-sm hover:text-haka-primary">Datenschutz</a></li>
            <li><a href="/pages/agb" className="text-sm hover:text-haka-primary">AGB</a></li>
            <li><a href="/pages/impressum" className="text-sm hover:text-haka-primary">Impressum</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Produkte</h3>
          <ul className="space-y-2">
            <li><a href="/collections/putzen" className="text-sm hover:text-haka-primary">Putzen</a></li>
            <li><a href="/collections/waschen" className="text-sm hover:text-haka-primary">Waschen</a></li>
            <li><a href="/collections/koerper-pflege" className="text-sm hover:text-haka-primary">Körper & Pflege</a></li>
            <li><a href="/collections/sets-specials" className="text-sm hover:text-haka-primary">Specials</a></li>
            <li><a href="/collections/shopaktuell" className="text-sm hover:text-haka-primary">Shop Aktuell</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Unternehmen HAKA</h3>
          <ul className="space-y-2">
            <li><a href="/pages/unternehmen" className="text-sm hover:text-haka-primary">Über uns</a></li>
            <li><a href="/pages/nachhaltigkeit" className="text-sm hover:text-haka-primary">Nachhaltigkeit</a></li>
            <li><a href="/pages/karriere" className="text-sm hover:text-haka-primary">Karriere</a></li>
            <li><a href="/pages/business" className="text-sm hover:text-haka-primary">Business</a></li>
            <li><a href="/pages/presse-kooperation" className="text-sm hover:text-haka-primary">Presse</a></li>
            <li><a href="/pages/werde-haka-influencer" className="text-sm hover:text-haka-primary">Werde HAKA Influencer</a></li>
            <li><a href="/pages/wenigeristmehr" className="text-sm hover:text-haka-primary">Weniger ist Mehr</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Deine Vorteile</h3>
          <ul className="space-y-4">
            <li className="text-sm">
              <strong>Kostenfreier Versand</strong>
              <p>Bei Bestellungen ab 55€ (DE)</p>
              <p>Bei Bestellungen ab 60€ (AT, LU, FR, IT, NL, BE)</p>
            </li>
            <li className="text-sm">
              <strong>60 Tage kostenfreie Retoure</strong>
            </li>
            <li className="text-sm">
              <strong>CO2-neutraler Versand mit DHL GoGreen</strong>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            <a href="https://www.facebook.com/hakaoriginal" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-haka-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.instagram.com/haka_original/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-haka-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@haka8779" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-haka-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="container mx-auto border-t border-gray-200 pt-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">© 2025, HAKA Onlineshop.</div>

          <div className="flex space-x-3">
            <span className="text-gray-400">
              <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="24" rx="4" fill="#F3F4F6"/>
                <path d="M25.5 15h-11c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h11c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5z" fill="#5F6368"/>
                <path d="M22.8 13.2c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.5-1.2-1.2zm-4 0c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.5-1.2-1.2zm-4 0c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2-.7 0-1.2-.5-1.2-1.2z" fill="#FFF"/>
              </svg>
            </span>
            <span className="text-gray-400">
              <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="24" rx="4" fill="#F3F4F6"/>
                <path d="M30 12c0 4.4-3.6 8-8 8H10V4h12c4.4 0 8 3.6 8 8z" fill="#FF5F00"/>
                <path d="M22 20c-4.4 0-8-3.6-8-8s3.6-8 8-8c1.8 0 3.5.6 4.9 1.7-1.7-1.9-4.1-3-6.8-3-5 0-9 4-9 9s4 9 9 9c2.7 0 5.2-1.2 6.8-3.1-1.4 1-3 1.4-4.9 1.4z" fill="#EB001B"/>
                <path d="M32.9 15.5c.7-1.1 1.1-2.4 1.1-3.8 0-4-3.3-7.2-7.3-7.2-2 0-3.9.8-5.3 2.2 1.7-1.5 4-2.4 6.4-2.4 5.5 0 10 4.5 10 10 0 3.8-2.1 7.1-5.3 8.8.2-.2.3-.4.4-.6z" fill="#F79E1B"/>
              </svg>
            </span>
            <span className="text-gray-400">
              <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="24" rx="4" fill="#F3F4F6"/>
                <path d="M14 9.5h-2.5c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5H14c1.4 0 2.5-1.1 2.5-2.5S15.4 9.5 14 9.5z" fill="#3C58BF"/>
                <path d="M14 9.5h-2c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h2c1.4 0 2.5-1.1 2.5-2.5S15.4 9.5 14 9.5z" fill="#293688"/>
                <path d="M29 9.5h-2.5c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5H29c1.4 0 2.5-1.1 2.5-2.5S30.4 9.5 29 9.5z" fill="#3C58BF"/>
                <path d="M29 9.5h-2c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h2c1.4 0 2.5-1.1 2.5-2.5S30.4 9.5 29 9.5z" fill="#293688"/>
                <path d="M21.5 9.5h-3c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h3c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z" fill="#3C58BF"/>
                <path d="M21.5 9.5h-2.5c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5h2.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5z" fill="#293688"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
