import { useState } from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { NannyPlayImage, HomeCareStaffImage, NurseNeonatalImage } from './NannyIllustrations.tsx';

interface HeroProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  const [heroImgError, setHeroImgError] = useState(false);
  const [card1Error, setCard1Error] = useState(false);
  const [card2Error, setCard2Error] = useState(false);
  const [card3Error, setCard3Error] = useState(false);

  return (
    <div className="relative pt-18 sm:pt-20">
      
      {/* Upper Panoramic Hero Banner with Real Photo Background (Matching Nana Mia Peru) */}
      <section className="relative h-[440px] sm:h-[480px] md:h-[520px] flex items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Real Panoramic Family Photograph */}
        {!heroImgError ? (
          <img
            src="/images/hero-family.jpg"
            alt="Familia feliz con niñera y abuelos en el hogar"
            loading="eager"
            referrerPolicy="no-referrer"
            onError={() => setHeroImgError(true)}
            className="absolute inset-0 w-full h-full object-cover object-center scale-102"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-stone-900 via-stone-800 to-stone-950" />
        )}

        {/* Sophisticated Dark Contrast Scrim matching Nana Mia screenshot */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/65 to-stone-950/90 pointer-events-none" />

        {/* Centered White Title & Value Proposition (matching Nana Mia Peru screenshot) */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 mt-[-30px]">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-300 mb-3 drop-shadow">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Agencia Especializada en Cuidado Infantil & Doméstico</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight drop-shadow-md mb-4 text-balance">
            Niñeras Moncada Perú
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow font-normal mb-8 text-balance">
            El cuidado profesional, responsable y con verdadera vocación que tus hijos merecen, con la tranquilidad que tú necesitas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal('cama-adentro')}
              className="px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0084C8] hover:bg-[#0073B0] active:scale-98 rounded-full shadow-lg shadow-[#0084C8]/35 transition-all"
            >
              Solicita tu Personal
            </button>
            <a
              href="#servicios"
              className="px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 bg-white hover:bg-stone-100 rounded-full shadow-lg transition-all"
            >
              Ver Servicios
            </a>
          </div>
        </div>

      </section>

      {/* OVERLAPPING 3 SERVICE CARDS (Exact photographic cards from user's screenshot) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-28 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Niñeras y Nanas (Real photo of nanny playing with kids and toys on the floor) */}
          <div className="bg-white rounded-2xl shadow-xl shadow-stone-900/10 border border-stone-200/80 overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-full h-56 sm:h-60 bg-stone-100 relative overflow-hidden">
              {!card1Error ? (
                <img
                  src="/images/nanny-play.jpg"
                  alt="Niñera jugando en el suelo con niños y juguetes"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={() => setCard1Error(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <NannyPlayImage className="w-full h-full object-cover" />
              )}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs py-1 px-3 rounded-full text-[11px] font-bold text-emerald-800 flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Verificadas</span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-display mb-2.5 group-hover:text-[#0084C8] transition-colors">
                  Niñeras y Nanas
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  Personal con verdadera vocación de servicio, amplia experiencia y amor por los bebés y niños. Cuidado integral en modalidades cama adentro, cama afuera y por horas.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Garantía de Reemplazo
                </span>
                <button
                  onClick={() => onOpenQuoteModal('cama-adentro')}
                  className="text-xs font-bold text-[#0084C8] hover:text-[#006ca4] flex items-center gap-1 transition-colors"
                >
                  <span>Solicitar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Personal de Limpieza (Real photo of professional cleaning staff in uniform) */}
          <div className="bg-white rounded-2xl shadow-xl shadow-stone-900/10 border border-stone-200/80 overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-full h-56 sm:h-60 bg-stone-100 relative overflow-hidden">
              {!card2Error ? (
                <img
                  src="/images/cleaning-staff.jpg"
                  alt="Personal de limpieza y aseo integral del hogar"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={() => setCard2Error(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <HomeCareStaffImage className="w-full h-full object-cover" />
              )}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs py-1 px-3 rounded-full text-[11px] font-bold text-sky-800 flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0084C8]" />
                <span>Hogar & Oficina</span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-display mb-2.5 group-hover:text-[#0084C8] transition-colors">
                  Personal de limpieza
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  Orientamos la búsqueda de personal que pueda resolver integralmente las labores del aseo ya sea de su casa, departamento, oficina o cuidado integral doméstico.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Antecedentes PNP OK
                </span>
                <button
                  onClick={() => onOpenQuoteModal('cama-afuera')}
                  className="text-xs font-bold text-[#0084C8] hover:text-[#006ca4] flex items-center gap-1 transition-colors"
                >
                  <span>Solicitar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Enfermeras Técnicas (Real photo of pediatric nurse caring for baby) */}
          <div className="bg-white rounded-2xl shadow-xl shadow-stone-900/10 border border-stone-200/80 overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-full h-56 sm:h-60 bg-stone-100 relative overflow-hidden">
              {!card3Error ? (
                <img
                  src="/images/nurse-baby.jpg"
                  alt="Enfermera técnica pediátrica con recién nacido"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={() => setCard3Error(true)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <NurseNeonatalImage className="w-full h-full object-cover" />
              )}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs py-1 px-3 rounded-full text-[11px] font-bold text-teal-800 flex items-center gap-1.5 shadow-sm">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>Cuidado Clínico</span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-bold text-stone-900 font-display mb-2.5 group-hover:text-teal-700 transition-colors">
                  Enfermeras Técnicas
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  Atención médica calificada para recién nacidos, turnos nocturnos, prematuros y adultos mayores. Personal titulado con conocimiento clínico y primeros auxilios.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-600 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  Turnos Noche & Día
                </span>
                <button
                  onClick={() => onOpenQuoteModal('neonatal')}
                  className="text-xs font-bold text-[#0084C8] hover:text-[#006ca4] flex items-center gap-1 transition-colors"
                >
                  <span>Solicitar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
