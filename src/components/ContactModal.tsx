import { useState, useEffect } from 'react';
import { NannyProfile } from '../data/nannyData.ts';
import { CheckCircle2, MessageSquare, Phone, User, Mail, MapPin, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
  selectedNanny?: NannyProfile | null;
}

export function ContactModal({
  isOpen,
  onClose,
  preselectedServiceId,
  selectedNanny
}: ContactModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('Surco');
  const [service, setService] = useState(
    selectedNanny?.role ||
    (preselectedServiceId === 'cama-adentro' ? 'Niñera Cama Adentro (0-18 meses)' :
     preselectedServiceId === 'cama-afuera' ? 'Niñera Cama Afuera' :
     preselectedServiceId === 'adultos' ? 'Asistente de Adulto Mayor' :
     preselectedServiceId === 'neonatal' ? 'Técnica de Enfermería & Neonatal' : 'Niñera Especializada Moncada')
  );
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (selectedNanny) {
      setService(`Entrevista con ${selectedNanny.name} (${selectedNanny.role})`);
    }
  }, [selectedNanny]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) newErrors.fullName = 'Por favor ingresa tu nombre completo';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Ingresa un número telefónico o WhatsApp válido (mínimo 9 dígitos)';
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleSendToWhatsAppDirectly = () => {
    const text = `¡Hola Niñeras Moncada! Mi nombre es ${fullName || 'Familia'}.%0A` +
      `• Teléfono: ${phone}%0A` +
      `• Distrito: ${district}%0A` +
      `• Servicio de interés: ${service}%0A` +
      (notes ? `• Detalle: ${encodeURIComponent(notes)}%0A` : '') +
      `Quisiera coordinar la llamada de 15 minutos para atender mi pedido. ¡Muchas gracias!`;
    window.open(`https://wa.me/51970777090?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-stone-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-bold transition-colors"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-display text-stone-900">
              ¡Solicitud Recibida!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              Muchas gracias, <strong className="text-stone-900">{fullName}</strong>. En <strong className="text-amber-800">Niñeras Moncada</strong> nos comunicaremos contigo al teléfono <strong className="text-stone-900">{phone}</strong> para una llamada de ~15 minutos y entender todas tus expectativas.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleSendToWhatsAppDirectly}
                className="w-full py-3 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar también por WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E76F51] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Niñeras Moncada · Más de 65 años</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-stone-900">
                {selectedNanny ? `Entrevista con ${selectedNanny.name}` : 'Solicitar Personal Moncada'}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Personal formado en nuestro Centro Educativo Ocupacional y con verificación exhaustiva.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Familia Rodríguez"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8] font-medium"
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. 970 777 090"
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8] font-medium"
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8] font-medium"
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1">
                    Distrito en Lima
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8] font-medium"
                    >
                      <option value="Surco">Santiago de Surco</option>
                      <option value="Miraflores">Miraflores</option>
                      <option value="San Isidro">San Isidro</option>
                      <option value="San Borja">San Borja</option>
                      <option value="La Molina">La Molina</option>
                      <option value="Magdalena">Magdalena del Mar</option>
                      <option value="Jesús María">Jesús María</option>
                      <option value="Otro">Otro distrito</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1">
                    Servicio
                  </label>
                  <input
                    type="text"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8] font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1">
                  Detalles sobre el bebé o adulto mayor
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej. Bebé recién nacido, requerimos inicio en 6 semanas. Horario cama adentro."
                  className="w-full p-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0084C8] hover:bg-[#0073B0] active:scale-98 rounded-full shadow-md transition-all text-center"
                >
                  Solicitar Llamada con Asesora
                </button>
              </div>

              <p className="text-[11px] text-center text-stone-500">
                🔒 Tus datos están protegidos bajo estricta confidencialidad.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
