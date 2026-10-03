import { BabyLogo } from './NannyIllustrations.tsx';
import { Phone, Mail, Clock, MapPin, Award } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export function Footer({ onOpenQuoteModal }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <BabyLogo className="w-10 h-10" />
              <div>
                <span className="text-xl font-black font-display text-white uppercase block leading-none">
                  Niñeras Moncada
                </span>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mt-1 block">
                  Más de 65 años a su servicio
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6">
              Negocio familiar fundado por la Sra. Yodalia Alvarez de Moncada. Brindamos servicios de bienestar, salud y cuidado para bebés, niños y adultos mayores con personal formado en nuestro propio Centro Educativo Ocupacional.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-amber-300 bg-white/5 py-1 px-3 rounded-lg border border-white/10">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Centro Educativo Ocupacional desde 1994</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Servicios Principales
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#servicios-especializados" className="hover:text-amber-400 transition-colors">
                  Niñeras para Bebés (0 - 18 meses)
                </a>
              </li>
              <li>
                <a href="#servicios-especializados" className="hover:text-amber-400 transition-colors">
                  Niñeras para Niños y Estimulación
                </a>
              </li>
              <li>
                <a href="#servicios-especializados" className="hover:text-amber-400 transition-colors">
                  Asistente de Adulto Mayor
                </a>
              </li>
              <li>
                <a href="#servicios-especializados" className="hover:text-amber-400 transition-colors">
                  Técnicas de Enfermería a Domicilio
                </a>
              </li>
              <li>
                <a href="#servicios-especializados" className="hover:text-amber-400 transition-colors">
                  Servicio Interno (Cama Adentro)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Secciones
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a href="#historia" className="hover:text-amber-400 transition-colors">
                  Nuestra Historia (65 Años)
                </a>
              </li>
              <li>
                <a href="#servicios-especializados" className="hover:text-amber-400 transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-amber-400 transition-colors">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Schedule */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Atención y Citas
            </h4>
            <div className="space-y-3 text-xs text-stone-400 mb-5">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">+51 970 777 090</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ninerasmoncada@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lun - Vie: 9:00 am - 2:00 pm (previa cita)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lima Metropolitana, Perú</span>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0084C8] hover:bg-[#0073B0] rounded-full transition-all text-center"
            >
              Solicitar Personal Ahora
            </button>
          </div>

        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Niñeras Moncada. Más de 65 años a su servicio. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-400 cursor-pointer">Términos de Servicio</span>
            <span className="hover:text-stone-400 cursor-pointer">Régimen Trabajador del Hogar</span>
            <span className="hover:text-stone-400 cursor-pointer">Libro de Reclamaciones</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
