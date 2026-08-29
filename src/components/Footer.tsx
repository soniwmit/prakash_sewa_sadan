import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, MessageSquare, Clock, ShieldCheck, 
  Heart, ArrowRight, ExternalLink, Mail, AlertCircle 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { WMITModal } from './WMITModal';

export default function Footer() {
  const [isWmitModalOpen, setIsWmitModalOpen] = useState(false);

  // Mandatory Global WMIT Tracking Hook (STEP 11)
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };
    sendInitPayload();
    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout | number;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer as number);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer as number);
    };
  }, []);

  const handleWmitClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWmitModalOpen(true);
  };

  return (
    <footer id="main-footer" className="bg-[#141414] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      {/* Top Banner / Emergency notice - Editorial Archive Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-stone-900 p-6 rounded-sm border border-stone-700/70 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-sm bg-stone-800 border border-stone-700 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block mb-0.5">Emergency Dispatch • Karpi</span>
              <h3 className="text-stone-100 font-serif font-bold text-lg">Need Emergency Medicines in Karpi?</h3>
              <p className="text-stone-400 text-xs mt-0.5">24/7 on-call helpline for critical life-saving & urgent prescription medications.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto font-mono text-xs uppercase tracking-wider">
            <a
              href={`tel:${SITE_CONFIG.emergencyPhone}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-stone-100 hover:bg-white text-[#141414] font-medium transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              Call 9931622496
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello PRAKASH SEWA SADAN, I need urgent emergency medicine.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 font-medium transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Emergency
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-stone-100 flex items-center justify-center text-[#141414] font-serif font-bold text-lg">
                +
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-stone-100 tracking-tight">
                  {SITE_CONFIG.businessName}
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Licensed Apothecary & Dispensary</p>
              </div>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              Serving the community of Karpi Panchayat, Bihar with 100% genuine pharmaceutical drugs, baby care, surgical products, and compassionate health counseling.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-stone-300 bg-stone-900/80 px-3 py-1.5 rounded-sm border border-stone-800 w-fit">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Govt. Licensed • Batch-Verified
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-stone-100 font-mono uppercase tracking-widest text-[11px] font-bold mb-4">
              Navigation Index
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link to="/" className="text-stone-400 hover:text-stone-100 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-stone-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-stone-100 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-stone-500" /> About Our Store
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-stone-400 hover:text-stone-100 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-stone-500" /> Medicine & Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-stone-400 hover:text-stone-100 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-stone-500" /> Pharmacy Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-stone-100 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-stone-500" /> Contact & Map
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-stone-400 hover:text-stone-100 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-stone-500" /> Patient / Store Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Hours & Address */}
          <div className="space-y-4">
            <h4 className="text-stone-100 font-mono uppercase tracking-widest text-[11px] font-bold">
              Dispatch & Location
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-mono text-stone-200">{SITE_CONFIG.timings.days}</p>
                  <p className="text-stone-400 font-mono text-[11px]">{SITE_CONFIG.timings.hours}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <p className="text-stone-400 text-xs leading-relaxed">
                  {SITE_CONFIG.address.fullAddress}
                  <br />
                  <span className="text-stone-500 font-mono text-[10px]">({SITE_CONFIG.address.landmark})</span>
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-stone-400 hover:text-stone-200 font-mono text-xs truncate">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: WhatsApp & Directions CTA */}
          <div className="space-y-4">
            <h4 className="text-stone-100 font-mono uppercase tracking-widest text-[11px] font-bold">
              Prescription Order
            </h4>
            <p className="text-xs text-stone-400">
              Send prescription photo via WhatsApp to <strong className="text-stone-200 font-mono">{SITE_CONFIG.displayPhone}</strong> for immediate verification and pickup.
            </p>
            <div className="space-y-2 font-mono text-xs uppercase tracking-wider">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello PRAKASH SEWA SADAN, I want to order medicines.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-100 hover:bg-white text-[#141414] rounded-sm font-medium transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                Order on WhatsApp
              </a>
              <a
                href={SITE_CONFIG.googleMapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 rounded-sm font-medium transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                Directions
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Policy Links */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono uppercase tracking-wider text-stone-500 border-b border-stone-800">
          <Link to="/contact" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
          <span>/</span>
          <Link to="/contact" className="hover:text-stone-300 transition-colors">Terms of Dispensing</Link>
          <span>/</span>
          <Link to="/contact" className="hover:text-stone-300 transition-colors">Drug Schedule Disclaimer</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone-300 transition-colors">Availability Policy</Link>
        </div>

        {/* Bottom Copyright & Mandatory WMIT Popup Trigger */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500 text-center md:text-left font-mono">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-stone-400">{SITE_CONFIG.businessName}</strong>. Karpi Panchayat, Bihar.
          </div>

          {/* EXACT MANDATORY REQUIREMENT: WMIT popup trigger */}
          <div className="text-center">
            <a 
              href="#" 
              onClick={handleWmitClick}
              className="wmit-popup-trigger inline-flex items-center gap-1.5 px-3 py-1 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white rounded-sm border border-stone-700 transition-all font-mono text-[11px] uppercase tracking-wider"
              title="Developed by WMIT - Click to view digital architecture"
            >
              Developed by WMIT
            </a>
          </div>

          <div className="text-stone-500 flex items-center justify-center gap-1 text-[11px]">
            PIN: 804419 • Sherpur Rd.
          </div>
        </div>
      </div>

      {/* WMIT Popup Dialog */}
      <WMITModal isOpen={isWmitModalOpen} onClose={() => setIsWmitModalOpen(false)} />
    </footer>
  );
}
