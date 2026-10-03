import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2, Send, Sparkles, AlertCircle } from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('Surco');
  const [service, setService] = useState('Niñera (0-18 meses)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `¡Hola Niñeras Moncada! Mi nombre es ${name || 'Familia'}.%0A` +
      `• Teléfono: ${phone}%0A` +
      `• Distrito: ${district}%0A` +
      `• Servicio de interés: ${service}%0A` +
      (message ? `• Detalle: ${encodeURIComponent(message)}%0A` : '') +
      `Quisiera coordinar una llamada para explicar mi requerimiento. ¡Muchas gracias!`;
    window.open(`https://wa.me/51970777090?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-stone-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E76F51] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Atención Personalizada Moncada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-stone-900 tracking-tight mb-4">
            Contáctanos
          </h2>
          <p className="text-base sm:text-lg text-stone-600 text-balance">
            Tomamos tu pedido por teléfono de manera personalizada. Te haremos preguntas sobre tu hogar, familia y expectativas para encontrar a la candidata idónea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">WhatsApp Oficial</h4>
                <p className="text-xs text-stone-500 mt-0.5 mb-2">
                  Atención directa para coordinaciones y consultas de servicio.
                </p>
                <a
                  href="https://wa.me/51970777090?text=Hola%20Niñeras%20Moncada,%20quisiera%20coordinar%20una%20llamada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>Chatear: +51 970 777 090</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 text-[#0084C8]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Correo Electrónico</h4>
                <p className="text-xs text-stone-500 mt-0.5 mb-1">
                  Recepción de solicitudes y documentación.
                </p>
                <a
                  href="mailto:ninerasmoncada@gmail.com"
                  className="text-xs font-bold text-stone-800 hover:text-[#0084C8]"
                >
                  ninerasmoncada@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-700">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Horario de Oficina</h4>
                <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                  Lunes a Viernes: 9:00 am - 2:00 pm<br />
                  <span className="text-[11px] text-stone-500 font-medium">Atención presencial en oficina previa cita coordinada.</span>
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0 text-purple-700">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Cobertura en Lima</h4>
                <p className="text-xs text-stone-600 mt-0.5">
                  Santiago de Surco, Miraflores, San Isidro, San Borja, La Molina, Magdalena y distritos aledaños.
                </p>
              </div>
            </div>

            {/* Bank Transfer Notice */}
            <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Importante:</strong> El pago se efectúa mediante transferencia bancaria (no se acepta efectivo). Siempre entregamos su boleta respectiva.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200/80 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-stone-900">
                  ¡Pedido Recibido con Éxito!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Muchas gracias por contactar a <strong className="text-stone-900">Niñeras Moncada</strong>. Nos comunicaremos contigo al teléfono <strong className="text-stone-900">{phone}</strong> para una llamada de ~15 minutos y entender todas tus expectativas.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir en WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-3 px-6 text-xs font-semibold text-stone-600 hover:text-stone-900"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold font-display text-stone-900">
                    Solicitud de Personal Moncada
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Indícanos tus requerimientos para iniciar la búsqueda con nuestro personal propio y calificado.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Familia Rodríguez"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. 970 777 090"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                        Distrito en Lima
                      </label>
                      <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8]"
                      >
                        <option value="Surco">Santiago de Surco / Chacarilla</option>
                        <option value="Miraflores">Miraflores</option>
                        <option value="San Isidro">San Isidro</option>
                        <option value="San Borja">San Borja</option>
                        <option value="La Molina">La Molina</option>
                        <option value="Magdalena">Magdalena del Mar</option>
                        <option value="Jesús María">Jesús María</option>
                        <option value="Otro">Otro distrito de Lima</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Servicio Solicitado
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8]"
                    >
                      <option value="Niñera (0-18 meses)">Niñera de Bebé (0-18 meses) - Cuidado Exclusivo</option>
                      <option value="Niñera Niños">Niñera para Niños / Estimulación</option>
                      <option value="Asistente de Adulto">Asistente de Adulto Mayor (Acompañamiento)</option>
                      <option value="Enfermera Técnica">Técnica de Enfermería a Domicilio</option>
                      <option value="Servicio Interno">Servicio Cama Adentro (Vivencial)</option>
                      <option value="Servicio Diario">Servicio Cama Afuera (Diario)</option>
                      <option value="Por Horas">Servicio Por Horas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Detalles de la familia, edad del bebé o adulto mayor
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ej. Buscamos niñera con 6 semanas de anticipación para recién nacido. Requerimos servicio cama adentro."
                      className="w-full p-3 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0084C8]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#0084C8] hover:bg-[#0073B0] active:scale-98 rounded-full shadow-md transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Solicitar Llamada Personalizada</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-stone-400">
                    🔒 Información 100% confidencial. Te responderemos en un plazo máximo de 24 horas.
                  </p>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
