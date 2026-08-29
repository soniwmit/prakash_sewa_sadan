import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp, Plus, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { WhatsAppOrderModal } from './WhatsAppOrderModal';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="pointer-events-auto p-2.5 rounded-sm bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 shadow-md hover:bg-stone-100 dark:hover:bg-stone-800 transition-all font-mono"
            aria-label="Back to top of page"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4 text-stone-900 dark:text-stone-100" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          id="floating-call-btn"
          className="pointer-events-auto flex items-center gap-2 px-3.5 py-2 rounded-sm bg-stone-900 dark:bg-stone-800 hover:bg-black text-stone-100 border border-stone-700 shadow-md transition-all text-xs font-mono uppercase tracking-wider"
          aria-label="Call PRAKASH SEWA SADAN"
          title="Click to Call 9931622496"
        >
          <Phone className="w-3.5 h-3.5 text-stone-300" />
          <span className="hidden sm:inline">Call Pharmacist</span>
        </a>

        {/* Floating WhatsApp Button */}
        <div className="pointer-events-auto flex items-center gap-2 group">
          <button
            onClick={() => setIsOrderModalOpen(true)}
            id="floating-whatsapp-btn"
            className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] shadow-xl border border-stone-800 dark:border-stone-300 transition-all text-xs font-mono uppercase tracking-wider font-semibold cursor-pointer"
            aria-label="Order Medicines on WhatsApp"
            title="Instant WhatsApp Medicine Order"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 dark:text-emerald-700" />
            <span>Order on WhatsApp</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Global WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </>
  );
};
