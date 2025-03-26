import React, { useState } from 'react';
import logoSrc from '../../assets/haka-logo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-haka-primary text-white text-sm py-1 px-4 text-center flex justify-center items-center">
        <div className="flex-1 text-left">550.000+ zufriedene Kund:innen ⭐ 4,86/5</div>
        <div className="flex-1 text-center">Schnelle Lieferung | 60 Tage Zufriedenheitsgarantie</div>
        <div className="flex-1 text-right">Nur für kurze Zeit: 15% bei Newsletter-Anmeldung</div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logoSrc} alt="HAKA Logo" className="h-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="nav-link font-medium py-2">PUTZEN</button>
              <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-b w-64 p-4 mt-1">
                <h3 className="font-bold mb-2">Topkategorien</h3>
                <ul className="space-y-2">
                  <li><a href="/collections/kueche" className="hover:text-haka-primary">Küche</a></li>
                  <li><a href="/collections/spuelen" className="hover:text-haka-primary">Spülen</a></li>
                  <li><a href="/collections/bad-wc" className="hover:text-haka-primary">Bad & WC</a></li>
                  <li><a href="/collections/neutralseife" className="hover:text-haka-primary">Neutralseife</a></li>
                  <li><a href="/collections/boden-wohnen" className="hover:text-haka-primary">Boden & Wohnen</a></li>
                  <li><a href="/collections/putzen" className="hover:text-haka-primary">Alle Produkte</a></li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="nav-link font-medium py-2">WASCHEN</button>
              <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-b w-64 p-4 mt-1">
                <h3 className="font-bold mb-2">Topkategorien</h3>
                <ul className="space-y-2">
                  <li><a href="/collections/vollwaschmittel" className="hover:text-haka-primary">Vollwaschmittel</a></li>
                  <li><a href="/collections/colorwaschmittel" className="hover:text-haka-primary">Colorwaschmittel</a></li>
                  <li><a href="/collections/spezialwaschmittel" className="hover:text-haka-primary">Spezialwaschmittel</a></li>
                  <li><a href="/collections/waschen" className="hover:text-haka-primary">Alle Produkte</a></li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="nav-link font-medium py-2">KÖRPER & PFLEGE</button>
              <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-b w-64 p-4 mt-1">
                <h3 className="font-bold mb-2">Topkategorien</h3>
                <ul className="space-y-2">
                  <li><a href="/collections/euterpflege-creme" className="hover:text-haka-primary">Euterpflege Creme</a></li>
                  <li><a href="/collections/haende" className="hover:text-haka-primary">Hände</a></li>
                  <li><a href="/collections/gesicht" className="hover:text-haka-primary">Gesicht</a></li>
                  <li><a href="/collections/koerper-pflege" className="hover:text-haka-primary">Alle Produkte</a></li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="nav-link font-medium py-2">ANGEBOTE</button>
              <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg rounded-b w-64 p-4 mt-1">
                <h3 className="font-bold mb-2">Topkategorien</h3>
                <ul className="space-y-2">
                  <li><a href="/collections/sets-specials" className="hover:text-haka-primary">Kennenlern-Sets</a></li>
                  <li><a href="/collections/bestseller" className="hover:text-haka-primary">Bestseller</a></li>
                  <li><a href="/collections/sale" className="hover:text-haka-primary">Sale %</a></li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Search, Account, Cart */}
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="container mx-auto py-4 px-6">
            <ul className="space-y-4">
              <li>
                <button className="font-medium w-full text-left py-2 flex justify-between items-center">
                  PUTZEN
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="font-medium w-full text-left py-2 flex justify-between items-center">
                  WASCHEN
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="font-medium w-full text-left py-2 flex justify-between items-center">
                  KÖRPER & PFLEGE
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="font-medium w-full text-left py-2 flex justify-between items-center">
                  ANGEBOTE
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Quick Links Bar */}
      <div className="bg-gray-100 py-2 px-6 hidden md:block">
        <div className="container mx-auto flex justify-center space-x-8">
          <a href="/collections/neutralseife" className="text-sm font-medium hover:text-haka-primary">NEUTRALSEIFE</a>
          <a href="/collections/euterpflege-creme" className="text-sm font-medium hover:text-haka-primary">EUTERPFLEGE CREME</a>
          <a href="/collections/bestseller" className="text-sm font-medium hover:text-haka-primary">BESTSELLER</a>
          <a href="/pages/fruehjahrsputz" className="text-sm font-medium hover:text-haka-primary">FRÜHJAHRSPUTZ</a>
          <a href="/collections/nachfuellen" className="text-sm font-medium hover:text-haka-primary">10% AUF ALLE NACHFÜLLER</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
