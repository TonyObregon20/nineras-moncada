import { useState } from 'react';
import { MONCADA_FAQ_DATA } from '../data/nannyData.ts';
import { HelpCircle, ChevronDown, ExternalLink, Search } from 'lucide-react';

export function MoncadaFaqSection() {
  const [openIds, setOpenIds] = useState<string[]>(['personal', 'proceso', 'inversion']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = MONCADA_FAQ_DATA.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
    );
  });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-stone-200/60 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E76F51] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Transparencia & Compromiso Total</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-stone-900 tracking-tight mb-6">
            Preguntas Frecuentes
          </h2>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/80 shadow-sm text-stone-600 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto">
            <p>
              <strong className="text-stone-900 font-semibold">Niñeras Moncada</strong> tiene como objetivo servir al cliente satisfactoriamente y contribuir a la armonía en su hogar. Es muy importante para nosotros ser una empresa transparente con nuestro personal y nuestros clientes por lo que hemos compilado una lista de preguntas más frecuentes que esperamos ayuden en tu toma de decisión. No dudes en contactarnos si tienes alguna pregunta adicional.
            </p>
          </div>
        </div>

        {/* Quick Search in FAQs */}
        <div className="relative max-w-md mx-auto mb-10">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar en preguntas frecuentes (ej. sueldos, descanso, prueba)..."
            className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-full border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8] shadow-xs"
          />
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-amber-300 shadow-md ring-1 ring-amber-100'
                    : 'bg-white/80 border-stone-200/80 hover:bg-white hover:border-stone-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#0084C8] rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-stone-900 font-display">
                    {faq.title}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0084C8] text-white' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 animate-in fade-in duration-150">
                    <p className="whitespace-pre-line mb-4 font-normal">
                      {faq.content}
                    </p>

                    {faq.links && faq.links.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
                        <span className="text-xs font-bold text-stone-900 block">
                          Enlaces oficiales de interés:
                        </span>
                        {faq.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[#0084C8] hover:text-[#006ca4] font-semibold underline mr-4"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for remaining questions */}
        <div className="mt-12 text-center p-6 bg-white rounded-3xl border border-stone-200 shadow-sm max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-stone-700 font-medium mb-3">
            ¿Tienes alguna consulta adicional antes de solicitar tu personal?
          </p>
          <a
            href="https://wa.me/51970777090?text=Hola%20Niñeras%20Moncada,%20tengo%20una%20consulta%20adicional%20sobre%20el%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-full shadow transition-all"
          >
            <span>Preguntar por WhatsApp: +51 970 777 090</span>
          </a>
        </div>

      </div>
    </section>
  );
}
