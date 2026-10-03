/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { HistorySection } from './components/HistorySection.tsx';
import { SpecializedCareSection } from './components/SpecializedCareSection.tsx';
import { NannyProfiles } from './components/NannyProfiles.tsx';
import { MoncadaFaqSection } from './components/MoncadaFaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { NannyProfile } from './data/nannyData.ts';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [selectedNanny, setSelectedNanny] = useState<NannyProfile | null>(null);

  const handleOpenQuoteModal = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setSelectedNanny(null);
    setIsModalOpen(true);
  };

  const handleSelectNannyForInterview = (nanny: NannyProfile) => {
    setSelectedNanny(nanny);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Navigation Bar with Top Info Strip */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Area */}
      <main className="flex-grow pt-10 sm:pt-6">
        {/* Hero Section with Overlapping Real Photo Cards */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* History Section: La Casa de las Niñeras Moncada - Más de 65 años */}
        <HistorySection />

        {/* Specialized Care: Niñeras (0-18m) & Cuidado del Adulto Mayor */}
        <SpecializedCareSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Verified Personnel: Egresadas y Alumnas de Moncada */}
        <NannyProfiles onSelectNannyForInterview={handleSelectNannyForInterview} />

        {/* Complete Moncada FAQ (Preguntas Frecuentes con Enlaces Oficiales) */}
        <MoncadaFaqSection />

        {/* Direct Contact & Information Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Contact & Booking Request Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedServiceId={preselectedServiceId}
        selectedNanny={selectedNanny}
      />
    </div>
  );
}
