import { useState } from 'react';
import { Baby, Heart, Clock, ShieldCheck, Check, ArrowRight, Pill, UserCheck } from 'lucide-react';

interface SpecializedCareSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
}

export function SpecializedCareSection({ onOpenQuoteModal }: SpecializedCareSectionProps) {
  const [activeTab, setActiveTab] = useState<'nineras' | 'adultos'>('nineras');

  return (
    <section id="servicios-especializados" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-stone-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E76F51] mb-3">
            <span>Especialidades Moncada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-stone-900 tracking-tight mb-4">
            Expertos en el Cuidado de Bebés y Adultos Mayores
          </h2>
          <p className="text-base sm:text-lg text-stone-600 text-balance">
            En nuestra Casa el objetivo es ofrecer servicios de bienestar, salud y cuidado que permitan a nuestros clientes alcanzar un equilibrio de vida para gozar de su familia gracias al apoyo de nuestro personal.
          </p>
        </div>

        {/* Big Category Tabs: NIÑERAS vs ADULTOS */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 bg-stone-200/70 rounded-full border border-stone-300/60 max-w-md w-full">
            <button
              onClick={() => setActiveTab('nineras')}
              className={`flex-1 py-3 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === 'nineras'
                  ? 'bg-white text-stone-900 shadow-md ring-1 ring-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Baby className="w-4 h-4 text-amber-600" />
              <span>Niñeras (0-18 meses)</span>
            </button>
            <button
              onClick={() => setActiveTab('adultos')}
              className={`flex-1 py-3 px-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                activeTab === 'adultos'
                  ? 'bg-white text-stone-900 shadow-md ring-1 ring-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Heart className="w-4 h-4 text-rose-600" />
              <span>Cuidado del Adulto Mayor</span>
            </button>
          </div>
        </div>

        {/* Tab 1: NIÑERAS */}
        {activeTab === 'nineras' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-stone-200/90 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6">
                <div className="inline-block bg-amber-50 text-amber-900 text-xs font-bold py-1 px-3 rounded-full mb-3 border border-amber-200">
                  0 - 18 MESES Y NIÑOS
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-stone-900 mb-4">
                  Niñeras Autosuficientes & Con Vocación
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  Nuestro personal vela por el bienestar del bebé y los niños. Contamos con <strong>niñeras expertas, alumnas de niñera y nanas</strong> para servicio interno, externo y temporal. Todas cuentan como mínimo con conocimientos de primeros auxilios y cuidado del recién nacido.
                </p>

                <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-200/70 mb-6">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1">
                    Atención Exclusiva para el Bebé:
                  </h4>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Dada la delicadeza de un recién nacido, las niñeras brindan apoyo en casa <u>exclusivamente para el bebé</u> incluyendo la preparación de sus alimentos, aseo integral y su lavandería propia.
                  </p>
                </div>

                <div className="space-y-2.5 mb-8">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Estimulación temprana, rutinas de sueño y lactancia</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Preparación higiénica de biberones y papillas</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Servicio interno (cama adentro), diario o por horas</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuoteModal('cama-adentro')}
                  className="px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0084C8] hover:bg-[#0073B0] rounded-full shadow-md transition-all flex items-center gap-2"
                >
                  <span>Solicitar Niñera para Bebé</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200 aspect-4/3 sm:aspect-16/10">
                  <img
                    src="/images/nanny-play.jpg"
                    alt="Niñera Moncada cuidando con ternura a un bebé"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white py-2.5 px-4 rounded-2xl shadow-lg border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Alumnas y Egresadas Centro Moncada</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: ADULTOS MAYORES */}
        {activeTab === 'adultos' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-stone-200/90 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6">
                <div className="inline-block bg-rose-50 text-rose-900 text-xs font-bold py-1 px-3 rounded-full mb-3 border border-rose-200">
                  CUIDADO DEL ADULTO MAYOR
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-stone-900 mb-4">
                  Asistente de Adulto & Técnicas de Enfermería
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                  En <strong>Niñeras Moncada</strong> queremos ayudar a cada cliente a vivir con calidad y de manera saludable. Ofrecemos acompañantes y técnicas de enfermería para brindar atención en casa a pacientes y adultos mayores.
                </p>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  Este servicio es para adultos mayores que caminan, están alertas y orientados en tiempo, espacio y persona, pero que necesitan compañía responsable, supervisión y asistencia diaria.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <Check className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Acompañamiento a citas con el médico y paseos seguros</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <Pill className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Administración de medicinas orales (excluye inyecciones)</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <Check className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Preparación de comidas nutritivas y mantenimiento ligero del hogar</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>Ayuda con aseo personal, asistencia al caminar y prevención de caídas</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenQuoteModal('adultos')}
                    className="px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0084C8] hover:bg-[#0073B0] rounded-full shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Solicitar Asistente de Adulto</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-stone-500">
                    Modalidades: Interna, Externa o Por Horas
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-200 aspect-4/3 sm:aspect-16/10">
                  <img
                    src="/images/about-care.jpg"
                    alt="Acompañante de adulto mayor en Niñeras Moncada"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white py-2.5 px-4 rounded-2xl shadow-lg border border-stone-200 text-xs font-bold text-stone-800 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-rose-600" />
                  <span>Trato Digno, Saludable y Cercano</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
