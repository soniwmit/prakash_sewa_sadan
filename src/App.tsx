import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Pill } from 'lucide-react';

// Lazy loaded page components as strictly mandated by Step 6
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));

// Scroll to top helper on route transitions
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Suspense loading fallback
function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-bounce">
        <Pill className="w-6 h-6" />
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide uppercase">
        Loading PRAKASH SEWA SADAN...
      </p>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Dynamic Page Router */}
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              {/* Fallback redirect */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Floating Actions (WhatsApp, Call, BackToTop) */}
        <FloatingActions />

        {/* Global Footer with Mandatory WMIT Tracking & Popup Trigger */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
