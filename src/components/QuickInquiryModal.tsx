import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { QuickInquiryFormData } from '../types';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<QuickInquiryFormData>({
    name: '',
    phone: '',
    medicineOrService: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please fill in your name and phone number.');
      return;
    }

    const msg = `*Quick Inquiry - ${SITE_CONFIG.businessName}*\nName: ${formData.name}\nPhone: ${formData.phone}\nInquiring About: ${formData.medicineOrService || 'General Medicine/Health Inquiry'}\nMessage: ${formData.message || 'Please call back with availability details.'}`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#F5F5F4] dark:bg-[#1C1A18] rounded-sm shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-inquiry-title"
      >
        <div className="bg-[#141414] dark:bg-stone-900 p-5 text-stone-100 relative border-b border-stone-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-sm bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block mb-0.5">Quick Assistance</span>
          <h3 id="quick-inquiry-title" className="text-lg font-serif font-bold text-stone-100">Direct Medicine Inquiry</h3>
          <p className="text-stone-400 text-xs font-mono mt-0.5">Pharmacist on-duty will reply directly via WhatsApp.</p>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-3 font-mono">
            <div className="w-12 h-12 rounded-sm bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-900 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
            <h4 className="text-base font-serif font-bold text-[#141414] dark:text-stone-100">Inquiry Dispatched</h4>
            <p className="text-xs text-stone-500 dark:text-stone-400">Opening WhatsApp chat with our pharmacist...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs font-mono text-stone-800 dark:text-stone-200">
            {error && (
              <div className="p-2.5 rounded-sm bg-rose-50 dark:bg-rose-950/60 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <div>
              <label className="block uppercase tracking-wider font-semibold mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs outline-hidden focus:ring-1 focus:ring-[#141414]"
              />
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold mb-1">Mobile Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit mobile number"
                className="w-full px-3 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs outline-hidden focus:ring-1 focus:ring-[#141414]"
              />
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold mb-1">Medicine Name / Healthcare Requirement</label>
              <input
                type="text"
                value={formData.medicineOrService}
                onChange={e => setFormData({ ...formData, medicineOrService: e.target.value })}
                placeholder="e.g. BP Monitor, Insulin, Pediatric Syrup"
                className="w-full px-3 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs outline-hidden focus:ring-1 focus:ring-[#141414]"
              />
            </div>

            <div>
              <label className="block uppercase tracking-wider font-semibold mb-1">Message (Optional)</label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Any special requirements..."
                className="w-full p-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-xs outline-hidden focus:ring-1 focus:ring-[#141414] resize-none"
              />
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                type="submit"
                className="flex-1 py-3 bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] font-medium font-mono text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                Submit to Pharmacist
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
