import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, MessageSquare, Sun, Moon, 
  MapPin, Clock, ShieldCheck, ChevronRight, User, Pill
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useTheme } from '../hooks/useTheme';
import { PWAInstallButton } from './PWAInstallButton';
import { WhatsAppOrderModal } from './WhatsAppOrderModal';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Notification / Emergency & Timing Ribbon - Editorial Style */}
      <div className="bg-[#141414] text-stone-300 text-[11px] py-2 px-4 border-b border-stone-800 font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-stone-200">
              <MapPin className="w-3 h-3 text-stone-400" />
              Sherpur Road, Karpi, Bihar 804419
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3 h-3 text-stone-500" />
              Store Timings: 7:00 AM – 10:30 PM (Daily)
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 text-stone-200 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-stone-400" />
              <span>Tel: {SITE_CONFIG.displayPhone}</span>
            </a>
            <span className="text-stone-700">/</span>
            <span className="text-stone-300 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" /> Genuine Lic.
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F5F5F4]/95 dark:bg-[#141414]/95 backdrop-blur-md shadow-xs py-3 border-b border-stone-300/80 dark:border-stone-800'
            : 'bg-[#F5F5F4] dark:bg-[#141414] py-4 border-b border-stone-200 dark:border-stone-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-3.5 shrink-0 group">
              <div className="w-10 h-10 rounded-sm bg-[#141414] dark:bg-stone-100 text-stone-100 dark:text-[#141414] border border-stone-800 dark:border-stone-300 flex items-center justify-center font-serif text-xl font-bold transition-transform">
                <span>+</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-serif font-bold text-[#141414] dark:text-[#F5F5F4] tracking-tight group-hover:opacity-80 transition-opacity">
                    {SITE_CONFIG.businessName}
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 truncate max-w-[200px] sm:max-w-none">
                  Apothecary & Healthcare • Karpi Archive
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-medium tracking-wide uppercase font-mono transition-all ${
                    isActive(link.path)
                      ? 'text-[#141414] dark:text-[#F5F5F4] bg-stone-200/80 dark:bg-stone-800 font-semibold border-b-2 border-[#141414] dark:border-stone-200'
                      : 'text-stone-600 dark:text-stone-400 hover:text-[#141414] dark:hover:text-stone-200 hover:bg-stone-200/40 dark:hover:bg-stone-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* PWA Add to Home Button */}
              <PWAInstallButton variant="nav" />

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                id="theme-toggle-btn"
                className="p-2 rounded-sm text-stone-600 dark:text-stone-400 border border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4 text-stone-200" />
                )}
              </button>

              {/* WhatsApp Order Button */}
              <button
                onClick={() => setIsOrderModalOpen(true)}
                id="nav-whatsapp-order-btn"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-stone-200 text-[#F5F5F4] dark:text-[#141414] text-xs font-medium font-mono uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Order</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                className="lg:hidden p-2 rounded-sm text-[#141414] dark:text-stone-200 border border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-[#F5F5F4] dark:bg-[#141414] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-lg">
            
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all ${
                    isActive(link.path)
                      ? 'text-[#141414] dark:text-[#F5F5F4] bg-stone-200 dark:bg-stone-800 font-bold'
                      : 'text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800/60'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsOrderModalOpen(true);
                }}
                className="w-full py-2.5 px-4 rounded-sm bg-[#141414] dark:bg-stone-100 text-[#F5F5F4] dark:text-[#141414] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Medicine Order
              </button>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full py-2.5 px-4 rounded-sm border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-stone-500" />
                Call Helpline: {SITE_CONFIG.displayPhone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </>
  );
};
