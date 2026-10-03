import { HISTORY_DATA } from '../data/nannyData.ts';
import { Award, GraduationCap, Heart, Users2, BookOpen, Quote } from 'lucide-react';
import { BabyLogo } from './NannyIllustrations.tsx';

export function HistorySection() {
  return (
    <section id="historia" className="py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0084C8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 mb-3 bg-white/5 py-1 px-4 rounded-full border border-white/10">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Más de {HISTORY_DATA.years} Años a su Servicio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white mb-3">
            Niñeras Moncada
          </h2>

          <p className="text-lg text-amber-200/90 font-medium">
            {HISTORY_DATA.subtitle} · Más de {HISTORY_DATA.years} años a su servicio
          </p>
        </div>

        {/* Founder & Core Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Founder Tribute Card */}
          <div className="lg:col-span-5">
            <div className="bg-stone-800/80 rounded-3xl p-8 border border-white/10 shadow-2xl relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <BabyLogo className="w-12 h-12" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                    Nuestra Fundadora
                  </span>
                  <h3 className="text-xl font-bold font-display text-white">
                    {HISTORY_DATA.founder}
                  </h3>
                  <span className="text-xs text-stone-400">
                    Pionera en el cuidado del hogar en el Perú
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
                <p>
                  Hace <strong>más de {HISTORY_DATA.years} años</strong>, la fundadora <strong className="text-white">{HISTORY_DATA.founder}</strong> abrió sus puertas para atender las necesidades de apoyo en el hogar de madres primerizas y de adultos mayores a través de mujeres de su absoluta confianza.
                </p>

                <p>
                  Nos satisface continuar trabajando con <strong>hijas, hermanas, sobrinas y demás familiares</strong> de nuestras primeras niñeras quienes en alguna etapa de sus vidas formaron parte de nuestra casa.
                </p>

                <p className="text-stone-400">
                  Nos esmeramos por ser más que una agencia: una familia donde nos queremos, respetamos y sobre todo compartimos la misma meta de superación mientras cumplimos con amor esta noble labor.
                </p>
              </div>

              {/* Founder quote badge */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3 text-xs text-amber-300/90 italic">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span>"La Casa de la Niñera Moncada: una segunda casa para aprender y trabajar honestamente".</span>
              </div>
            </div>
          </div>

          {/* Educational Institute Pillar & Milestones */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1994 CEO Milestone */}
            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                    Hito Histórico · 1994
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
                    Creación del Centro Educativo Ocupacional Moncada
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    En 1994 fundamos nuestro propio <strong>Centro Educativo Ocupacional</strong>, reforzando nuestro compromiso de apoyar a las mujeres más humildes del país. Gracias a su esfuerzo de estudiar en sus días libres y al apoyo de nuestras familias clientes, nuestras alumnas ejercen su derecho a la educación y son <strong>reconocidas por el Ministerio de Educación</strong> al graduarse como <em>Niñeras</em>, <em>Asistentes de Niños</em> y <em>Asistentes de Ancianos</em>.
                  </p>
                </div>
              </div>
            </div>

            {/* Generational Continuity */}
            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0084C8]/10 border border-[#0084C8]/30 flex items-center justify-center text-[#0084C8] shrink-0 mt-1">
                  <Users2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">
                    Vínculo Generacional
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold font-display text-white mb-2">
                    Crecimiento Personal y Profesional Compartido
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    Nuestro propósito siempre cuenta con apoyar el crecimiento de nuestras trabajadoras mientras aportan bienestar, salud y equilibrio de vida en cada uno de los hogares peruanos que nos abren sus puertas.
                  </p>
                </div>
              </div>
            </div>

            {/* Inspiration Quote */}
            <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-transparent p-6 rounded-2xl border-l-4 border-amber-400">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm sm:text-base text-stone-100 italic font-medium leading-relaxed">
                    "{HISTORY_DATA.quote}"
                  </p>
                  <span className="text-xs text-amber-300 font-bold mt-1 block">
                    — {HISTORY_DATA.quoteAuthor}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Pillars Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-center">
          <div className="p-4">
            <span className="text-3xl font-black font-display text-amber-400 block tabular-nums mb-1">
              +65 Años
            </span>
            <h5 className="text-sm font-bold text-white mb-1">Tradición y Seguridad</h5>
            <p className="text-xs text-stone-400">Atendiendo a generaciones de familias peruanas en Lima.</p>
          </div>

          <div className="p-4">
            <span className="text-3xl font-black font-display text-amber-400 block tabular-nums mb-1">
              Desde 1994
            </span>
            <h5 className="text-sm font-bold text-white mb-1">Centro Educativo Ocupacional</h5>
            <p className="text-xs text-stone-400">Titulaciones con respaldo del Ministerio de Educación.</p>
          </div>

          <div className="p-4">
            <span className="text-3xl font-black font-display text-amber-400 block tabular-nums mb-1">
              100% Vocación
            </span>
            <h5 className="text-sm font-bold text-white mb-1">Personal Propio y de Confianza</h5>
            <p className="text-xs text-stone-400">Formadas con ética, primeros auxilios y reglamento interno.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
