import React from 'react';
import { X, Share, PlusSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#F5F5F4] dark:bg-stone-900 rounded-sm shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden font-mono"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ios-install-title"
      >
        {/* Top Header */}
        <div className="p-6 bg-[#141414] text-stone-100 relative border-b border-stone-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-sm hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close installation guide"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-stone-800 text-stone-100 flex items-center justify-center font-bold text-lg border border-stone-700">
              +
            </div>
            <div>
              <span className="text-[10px] text-stone-400 uppercase tracking-widest block">iOS Installation Protocol</span>
              <h3 id="ios-install-title" className="text-base font-serif font-bold text-white">Add {SITE_CONFIG.shortName} to Home Screen</h3>
            </div>
          </div>
        </div>

        {/* Step-by-step Visual Instructions */}
        <div className="p-6 space-y-4 text-stone-700 dark:text-stone-300 text-xs">
          <p className="text-stone-500 dark:text-stone-400 font-sans leading-relaxed">
            Install this website directly onto your home screen for quick offline access, 1-tap WhatsApp prescription orders, and instant medicine stock checking.
          </p>

          <div className="space-y-3">
            {/* Step 1 */}
            <div className="flex items-start gap-3.5 p-3 rounded-sm bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700">
              <div className="w-6 h-6 rounded-sm bg-[#141414] dark:bg-stone-200 text-stone-100 dark:text-[#141414] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#141414] dark:text-white flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
                  Tap the <Share className="w-3.5 h-3.5 text-stone-600" /> Share button
                </p>
                <p className="text-stone-500 font-sans mt-0.5">
                  Located in the Safari bottom toolbar (or top bar on iPad).
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3.5 p-3 rounded-sm bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700">
              <div className="w-6 h-6 rounded-sm bg-[#141414] dark:bg-stone-200 text-stone-100 dark:text-[#141414] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#141414] dark:text-white flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
                  Select <PlusSquare className="w-3.5 h-3.5 text-stone-600" /> "Add to Home Screen"
                </p>
                <p className="text-stone-500 font-sans mt-0.5">
                  Scroll down the share sheet menu to find this option.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3.5 p-3 rounded-sm bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700">
              <div className="w-6 h-6 rounded-sm bg-[#141414] dark:bg-stone-200 text-stone-100 dark:text-[#141414] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#141414] dark:text-white flex items-center gap-1.5 uppercase text-[11px] tracking-wider">
                  Tap "Add" in top-right
                </p>
                <p className="text-stone-500 font-sans mt-0.5">
                  The app icon will immediately appear on your Home Screen.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between uppercase text-[11px]">
            <span className="flex items-center gap-1.5 text-stone-600 dark:text-stone-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> No Store Download
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] rounded-sm font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
