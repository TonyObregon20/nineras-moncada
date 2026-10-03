import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="relative mb-2 bg-white text-stone-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-stone-200/90 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 hidden sm:flex items-center gap-2">
          <div className="flex-1">
            <span className="font-bold text-emerald-800 block text-[11px]">Niñeras Moncada</span>
            <span className="text-stone-600 text-[11px]">Escríbenos y coordinamos tu llamada personalizada.</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 p-0.5"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/51970777090?text=Hola%20Niñeras%20Moncada,%20quisiera%20asesoría%20sobre%20el%20servicio%20para%20mi%20hogar"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Contactar por WhatsApp a Niñeras Moncada"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 border-2 border-emerald-500 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 border-2 border-emerald-500 rounded-full" />
        </div>
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          WhatsApp: 970 777 090
        </span>
      </a>
    </div>
  );
}
