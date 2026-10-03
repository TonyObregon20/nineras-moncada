import { useState } from 'react';
import { NANNY_PROFILES, NannyProfile } from '../data/nannyData.ts';
import { Star, ShieldCheck, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface NannyProfilesProps {
  onSelectNannyForInterview: (nanny: NannyProfile) => void;
}

export function NannyProfiles({ onSelectNannyForInterview }: NannyProfilesProps) {
  const [filter, setFilter] = useState<string>('all');
  const [activeProfileModal, setActiveProfileModal] = useState<NannyProfile | null>(null);

  const filteredProfiles = filter === 'all'
    ? NANNY_PROFILES
    : NANNY_PROFILES.filter((p) => p.category === filter);

  return (
    <section id="nineras" className="py-20 lg:py-28 bg-white border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E76F51] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Personal Seleccionado y Auditado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-display text-balance mb-4">
            Conoce a Nuestras Niñeras y Cuidadoras Destacadas
          </h2>
          <p className="text-base sm:text-lg text-stone-600 text-balance">
            Cada una de nuestras colaboradoras cuenta con expediente completo: certificados de antecedentes, examen psicológico, llamadas a ex-empleadores y capacitación continua.
          </p>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-100 rounded-full max-w-2xl mx-auto mb-12 border border-stone-200/80">
          {[
            { id: 'all', label: 'Todas' },
            { id: 'cama_adentro', label: 'Cama Adentro' },
            { id: 'cama_afuera', label: 'Cama Afuera' },
            { id: 'neonatal', label: 'Neonatal / Enfermera' },
            { id: 'por_horas', label: 'Por Horas' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#0084C8] ${
                filter === tab.id
                  ? 'bg-white text-stone-900 shadow-sm font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProfiles.map((nanny) => (
            <div
              key={nanny.id}
              className="bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Real Portrait Photo & Rating */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-stone-200 border-2 border-white shadow-md shrink-0">
                      <img
                        src={nanny.photoUrl}
                        alt={`Foto de ${nanny.name}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-stone-900 font-display group-hover:text-[#0084C8] transition-colors">
                        {nanny.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-stone-500">
                        <span>{nanny.age} años</span>
                        <span aria-hidden="true">·</span>
                        <span>{nanny.experienceYears} años de exp.</span>
                      </div>
                      <span className="text-[11px] text-stone-500 block truncate max-w-[170px]">
                        {nanny.education}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200/60 tabular-nums shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{nanny.rating}</span>
                  </div>
                </div>

                {/* Role title */}
                <div className="text-xs font-bold text-[#0084C8] uppercase tracking-wide mb-2">
                  {nanny.role}
                </div>

                {/* Clean unboxed verifications list */}
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 mb-3 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Antecedentes Limpios</span>
                  <span aria-hidden="true" className="text-stone-300">·</span>
                  <span>Test Psicológico OK</span>
                </div>

                {/* Bio */}
                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                  "{nanny.bio}"
                </p>

                {/* Specialties inline text */}
                <div className="mb-4 pt-3 border-t border-stone-200/60 text-xs text-stone-600">
                  <span className="font-semibold text-stone-800 block mb-1">Especialidades:</span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-stone-600">
                    {nanny.specialties.map((spec, i) => (
                      <span key={i} className="after:content-[',_'] last:after:content-['']">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-200/60 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveProfileModal(nanny)}
                  className="flex-1 py-2.5 px-3 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-200 rounded-xl transition-all text-center"
                >
                  Ver Ficha
                </button>
                <button
                  type="button"
                  onClick={() => onSelectNannyForInterview(nanny)}
                  className="py-2.5 px-3.5 text-xs font-bold text-white bg-[#0084C8] hover:bg-[#0073B0] rounded-xl transition-all flex items-center justify-center gap-1 shadow-sm"
                  title="Solicitar entrevista con esta niñera"
                >
                  <span>Entrevistar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-2xl mx-auto">
          ¿Buscas un perfil con requisitos específicos (ej. bilingüe, con permiso de conducir, o manejo de dietas especiales)?{' '}
          <a href="#contacto" className="text-[#0084C8] underline font-bold">
            Escríbenos directamente
          </a>{' '}
          y coordinamos de inmediato.
        </div>

      </div>

      {/* Profile Detail Modal */}
      {activeProfileModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-stone-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-18 h-18 rounded-2xl overflow-hidden bg-stone-200 border-2 border-stone-100 shadow-md shrink-0">
                  <img
                    src={activeProfileModal.photoUrl}
                    alt={`Foto de ${activeProfileModal.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 font-display">
                    {activeProfileModal.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#0084C8]">
                    {activeProfileModal.role}
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    {activeProfileModal.education}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveProfileModal(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600 mb-6">
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                <div className="font-semibold text-stone-900 mb-1">Acerca de {activeProfileModal.name}:</div>
                <p className="leading-relaxed">{activeProfileModal.bio}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
                  <span className="text-[11px] text-stone-400 block">Experiencia comprobada</span>
                  <span className="font-bold text-stone-800">{activeProfileModal.experienceYears} años en hogares</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60">
                  <span className="text-[11px] text-stone-400 block">Disponibilidad</span>
                  <span className="font-bold text-stone-800">{activeProfileModal.availability}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block mb-2">
                  Filtros de Seguridad Aprobados
                </span>
                <div className="space-y-1.5">
                  {activeProfileModal.badges.map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const nanny = activeProfileModal;
                  setActiveProfileModal(null);
                  onSelectNannyForInterview(nanny);
                }}
                className="w-full py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0084C8] hover:bg-[#0073B0] rounded-full shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar Entrevista con {activeProfileModal.name}</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
