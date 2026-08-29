import React from 'react';
import { X, ExternalLink, Code2, Globe, ShieldCheck, PhoneCall, Mail } from 'lucide-react';

interface WMITModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WMITModal: React.FC<WMITModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#F5F5F4] dark:bg-stone-900 rounded-sm shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden font-mono"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wmit-modal-title"
      >
        {/* Header */}
        <div className="bg-[#141414] p-6 text-stone-100 relative border-b border-stone-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-sm hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-stone-800 rounded-sm border border-stone-700">
              <Code2 className="w-5 h-5 text-stone-300" />
            </div>
            <div>
              <span className="text-[10px] text-stone-400 uppercase tracking-widest block">Engineering Credit</span>
              <h3 id="wmit-modal-title" className="text-lg font-serif font-bold text-white">WebMaker IT Solutions</h3>
              <p className="text-stone-400 text-xs font-sans">Digital Architecture & Custom Software Engineering</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-stone-700 dark:text-stone-300 text-xs">
          <div className="p-4 bg-white dark:bg-stone-800 rounded-sm border border-stone-300 dark:border-stone-700 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-stone-700 dark:text-stone-300 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#141414] dark:text-white uppercase tracking-wider text-[11px]">Certified Healthcare Digital Solution</h4>
              <p className="text-stone-600 dark:text-stone-400 font-sans mt-1 leading-relaxed">
                Custom engineered for <strong>PRAKASH SEWA SADAN</strong> with high-performance Progressive Web App (PWA) architecture, real-time medicine stock checker, and WhatsApp order workflow.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-[#141414] dark:text-white text-[10px] uppercase tracking-widest">Solution Capabilities</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
                <span className="w-1.5 h-1.5 bg-[#141414] dark:bg-stone-300"></span>
                PWA Offline Caching
              </li>
              <li className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
                <span className="w-1.5 h-1.5 bg-[#141414] dark:bg-stone-300"></span>
                Instant WhatsApp Sync
              </li>
              <li className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
                <span className="w-1.5 h-1.5 bg-[#141414] dark:bg-stone-300"></span>
                Live Inventory Checker
              </li>
              <li className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400">
                <span className="w-1.5 h-1.5 bg-[#141414] dark:bg-stone-300"></span>
                Local SEO Schema Ready
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-stone-300 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 uppercase text-xs">
            <div className="flex items-center gap-3 text-stone-500">
              <span className="flex items-center gap-1 lowercase font-sans text-xs"><Mail className="w-3.5 h-3.5" /> info@webmakerit.com</span>
            </div>
            <a
              href="https://webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] rounded-sm font-medium transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              Visit Developer Portal
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
