import React from 'react';
import { Smartphone, Check, Download } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'hero' | 'banner';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ 
  variant = 'nav',
  className = '' 
}) => {
  const { isInstallable, isInstalled, showIOSModal, setShowIOSModal, triggerInstall } = usePWAInstall();

  if (isInstalled) {
    if (variant === 'nav') return null;
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-mono">
        <Check className="w-3.5 h-3.5 text-stone-600" /> App Installed
      </div>
    );
  }

  // If not installable and not on a supported device, keep visible as install helper or subtle action
  const handleClick = async () => {
    await triggerInstall();
  };

  if (variant === 'hero') {
    return (
      <>
        <button
          onClick={handleClick}
          id="hero-add-to-home-btn"
          className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#141414] dark:bg-stone-200 text-stone-100 dark:text-[#141414] hover:bg-stone-800 dark:hover:bg-white text-xs font-mono uppercase tracking-wider font-semibold shadow-xs transition-all cursor-pointer ${className}`}
          aria-label="Add PRAKASH SEWA SADAN App to Home Screen"
        >
          <span className="text-sm">📲</span>
          <span>Add to Home</span>
        </button>
        <IOSInstallGuide isOpen={showIOSModal} onClose={() => setShowIOSModal(false)} />
      </>
    );
  }

  return (
    <>
      <button
        onClick={handleClick}
        id="nav-add-to-home-btn"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-stone-200 hover:bg-stone-300 text-stone-900 dark:bg-stone-800 dark:hover:bg-stone-700 dark:text-stone-100 border border-stone-300 dark:border-stone-700 text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer ${className}`}
        aria-label="Add to Home Screen"
        title="Install Progressive Web App on your device"
      >
        <span className="text-xs">📲</span>
        <span className="hidden sm:inline">Add to Home</span>
        <span className="sm:hidden">Install</span>
      </button>
      <IOSInstallGuide isOpen={showIOSModal} onClose={() => setShowIOSModal(false)} />
    </>
  );
};
