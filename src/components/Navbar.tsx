import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { BabyLogo } from './NannyIllustrations.tsx';

interface NavbarProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Contact Strip (Matching original Moncada site screenshot) */}
      <div className="bg-stone-900 text-stone-300 text-[11px] py-1.5 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:ninerasmoncada@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>ninerasmoncada@gmail.com</span>
            </a>
            <a
              href="https://wa.me/51970777090"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>+51 970 777 090</span>
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-stone-400">
            <span className="text-[10px] uppercase font-semibold tracking-wider text-amber-400">
              Más de 65 años a su servicio
            </span>
            <span className="text-stone-700">|</span>
            <div className="flex items-center gap-2">
              <span className="hover:text-white cursor-pointer"><Facebook className="w-3 h-3" /></span>
              <span className="hover:text-white cursor-pointer"><Instagram className="w-3 h-3" /></span>
              <span className="hover:text-white cursor-pointer"><Linkedin className="w-3 h-3" /></span>
              <span className="hover:text-white cursor-pointer"><Twitter className="w-3 h-3" /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white py-3.5 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Slogan (Matching original Moncada site: "Más de 65 años a su servicio") */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <BabyLogo className="w-10 h-10 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 uppercase font-display leading-none">
                  Niñeras Moncada
                </span>
                <span className="text-[10px] font-bold text-amber-700 tracking-wider uppercase mt-1">
                  Más de 65 años a su servicio
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-700">
              <a
                href="#"
                className="text-[#E76F51] hover:text-[#D65D3E] transition-colors"
              >
                Inicio
              </a>
              
              <a
                href="#historia"
                className="hover:text-[#E76F51] transition-colors"
              >
                Historia
              </a>

              <a
                href="#servicios-especializados"
                className="hover:text-[#E76F51] transition-colors"
              >
                Niñeras
              </a>

              <a
                href="#servicios-especializados"
                className="hover:text-[#E76F51] transition-colors"
              >
                Adultos
              </a>

              <a
                href="#faq"
                className="hover:text-[#E76F51] transition-colors"
              >
                FAQ
              </a>

              <a
                href="#contacto"
                className="hover:text-[#E76F51] transition-colors"
              >
                Contacto
              </a>
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0084C8] hover:bg-[#0073B0] active:scale-98 rounded-full shadow-md shadow-[#0084C8]/25 transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#0084C8]"
              >
                Solicita tu Personal
              </button>
            </div>

            {/* Mobile hamburger menu */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#0084C8] rounded-full uppercase tracking-wider"
              >
                Solicitar
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-stone-700 hover:text-stone-900 rounded-lg"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-3 pt-4 border-t border-stone-100 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex flex-col gap-3 font-semibold text-stone-700 text-sm">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-[#E76F51] hover:bg-amber-50 rounded-xl"
                >
                  Inicio
                </a>
                <a
                  href="#historia"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 hover:bg-stone-50 rounded-xl"
                >
                  Historia (65 Años)
                </a>
                <a
                  href="#servicios-especializados"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 hover:bg-stone-50 rounded-xl"
                >
                  Niñeras (0-18 meses)
                </a>
                <a
                  href="#servicios-especializados"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 hover:bg-stone-50 rounded-xl"
                >
                  Cuidado del Adulto Mayor
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 hover:bg-stone-50 rounded-xl"
                >
                  Preguntas Frecuentes (FAQ)
                </a>
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 hover:bg-stone-50 rounded-xl"
                >
                  Contacto
                </a>
                <div className="pt-2 border-t border-stone-100">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenQuoteModal();
                    }}
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0084C8] rounded-full shadow"
                  >
                    Solicita tu Personal
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
