import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageSquare, MapPin, ArrowRight, ShieldCheck, 
  CheckCircle2, Star, Clock, ChevronDown, ChevronUp, 
  Pill, Sparkles, HeartPulse, Stethoscope, ShoppingBag, 
  Activity, Users, Award, Send, Check
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { FAQ_DATA } from '../data/faqData';
import { HEALTH_TIPS_DATA } from '../data/healthTipsData';
import { REVIEWS_DATA } from '../data/reviewsData';
import { SEOHelmet } from '../components/SEOHelmet';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';
import { PWAInstallButton } from '../components/PWAInstallButton';
import { QuickInquiryModal } from '../components/QuickInquiryModal';

export const Home: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const featuredServices = SERVICES_DATA.slice(0, 6);
  const previewFaqs = FAQ_DATA.slice(0, 4);
  const previewTips = HEALTH_TIPS_DATA.slice(0, 3);
  const previewReviews = REVIEWS_DATA.slice(0, 3);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterSuccess(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F4] dark:bg-[#141414] text-[#141414] dark:text-[#F5F5F4]">
      <SEOHelmet
        title="Home - Trusted Pharmacy in Karpi, Bihar"
        description="PRAKASH SEWA SADAN is your trusted medical store in Sherpur Road, Karpi for 100% genuine medicines, surgical supplies, healthcare products and fast WhatsApp delivery."
      />

      {/* 1. HERO EDITORIAL COVER SECTION */}
      <section className="relative border-b border-stone-300 dark:border-stone-800 bg-[#F5F5F4] dark:bg-[#141414] pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Editorial Top Eyebrow Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-8 border-b border-stone-300 dark:border-stone-800 text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              Karpi Apothecary & Dispensary • Vol. 2026
            </span>
            <span className="hidden sm:inline">Registered Lic. Drug Dispensation</span>
            <span>Bihar State Registry: 804419</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 text-[11px] font-mono uppercase tracking-widest font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-600 dark:text-stone-300" />
                <span>Genuine Medicines & Clinical Healthcare</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#141414] dark:text-[#F5F5F4] leading-[1.08]">
                Your Trusted Medical Store for <span className="italic font-normal">Genuine Medicines</span> & Community Care.
              </h1>

              <p className="text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices in Karpi.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs uppercase tracking-wider">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  id="hero-call-now-btn"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] font-medium transition-all shadow-xs cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Store: 9931622496
                </a>

                <button
                  onClick={() => setIsOrderModalOpen(true)}
                  id="hero-whatsapp-order-btn"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm border border-stone-400 dark:border-stone-700 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-[#141414] dark:text-stone-100 font-medium transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  Order on WhatsApp
                </button>

                <a
                  href={SITE_CONFIG.googleMapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-directions-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-stone-300 dark:border-stone-800 bg-stone-100 dark:bg-stone-900/50 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Directions
                </a>
              </div>

              {/* Editorial Highlights Row */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-stone-300 dark:border-stone-800 text-xs font-mono">
                <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#141414] dark:bg-stone-300"></span>
                  <span>Licensed Pharmacist</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#141414] dark:bg-stone-300"></span>
                  <span>Free BP & Glucose Test</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#141414] dark:bg-stone-300"></span>
                  <span>Insulin Cold-Storage</span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Dispatch Box */}
            <div className="lg:col-span-5">
              <div className="rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-0.5">Dispensary Desk</span>
                    <h3 className="font-serif font-bold text-lg text-[#141414] dark:text-[#F5F5F4]">Karpi Pharmacy Counter</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-sm bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-700 text-[10px] font-mono uppercase tracking-wider font-semibold">
                    Open Daily
                  </span>
                </div>

                <div className="py-5 space-y-3 text-xs font-mono">
                  <div className="p-3.5 rounded-sm bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 flex items-center justify-between">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Operational Hours</span>
                      <strong className="text-stone-900 dark:text-stone-100 text-xs">07:00 AM – 10:30 PM (7 Days)</strong>
                    </div>
                    <Clock className="w-4 h-4 text-stone-500" />
                  </div>

                  <div className="p-3.5 rounded-sm bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 flex items-center justify-between">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Helpline & Dispatch</span>
                      <strong className="text-[#141414] dark:text-stone-100 text-xs">Tel: +91 9931622496</strong>
                    </div>
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                  </div>

                  <div className="p-3.5 rounded-sm bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 flex items-center justify-between">
                    <div>
                      <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Inventory Archive</span>
                      <strong className="text-stone-900 dark:text-stone-100 text-xs">1,500+ Verified Compounds</strong>
                    </div>
                    <Pill className="w-4 h-4 text-stone-500" />
                  </div>
                </div>

                <div className="space-y-2 pt-2 font-mono text-xs uppercase tracking-wider">
                  <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="w-full py-3 px-4 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-700" />
                    Transmit Prescription via WhatsApp
                  </button>
                  <Link
                    to="/services"
                    className="w-full py-2.5 px-4 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-medium flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    <Pill className="w-3.5 h-3.5 text-stone-500" />
                    Search Live Stock Registry
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. ARCHIVAL ABOUT PREVIEW */}
      <section className="py-16 bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="rounded-sm overflow-hidden border border-stone-300 dark:border-stone-800 shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
                  alt="PRAKASH SEWA SADAN Karpi Storefront"
                  className="w-full h-80 object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
                <div className="p-4 bg-stone-100 dark:bg-stone-800 border-t border-stone-300 dark:border-stone-700 flex items-center justify-between text-xs font-mono">
                  <div>
                    <p className="font-bold text-[#141414] dark:text-white uppercase">{SITE_CONFIG.businessName}</p>
                    <p className="text-stone-500 dark:text-stone-400 text-[11px]">Sherpur Road, Karpi Panchayat, Bihar</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-sm bg-[#141414] text-white text-[10px] uppercase font-bold">
                    Lic. Verified
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-mono text-[10px] uppercase tracking-widest font-semibold">
                <Sparkles className="w-3 h-3 text-stone-500" />
                SECTION 01 // STORE PROFILE
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#141414] dark:text-white tracking-tight">
                Dedicated to Community Healthcare & Authentic Medicines in Karpi
              </h2>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-sans">
                Established with a vision to make quality healthcare accessible to every family in Karpi Panchayat and surrounding villages, <strong>PRAKASH SEWA SADAN</strong> is a premier licensed pharmacy upholding strict drug storage standards, transparent pricing, and trusted patient guidance.
              </p>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-sans">
                Whether you need everyday over-the-counter pain relief, critical cardiac and diabetes medications, infant care essentials, or surgical home supplies, our knowledgeable team is here with genuine care.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] font-medium transition-all"
                >
                  <span>Read Store Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 font-medium transition-colors"
                >
                  Quick Inquiry
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="py-16 bg-[#F5F5F4] dark:bg-[#141414] border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-10 border-b border-stone-300 dark:border-stone-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-mono text-[10px] uppercase tracking-widest font-semibold mb-2">
                <Pill className="w-3 h-3 text-stone-500" />
                SECTION 02 // SERVICES
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#141414] dark:text-white tracking-tight">
                Pharmaceutical Services & Dispensation
              </h2>
              <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm mt-1 font-sans">
                Professional dispensing, temperature-controlled drug logistics, and vital screening.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-stone-900 dark:text-stone-100 font-mono text-xs uppercase tracking-wider hover:opacity-75 group"
            >
              <span>Full Services Index</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => (
              <div
                key={service.id}
                className="group relative rounded-sm bg-white dark:bg-stone-900 p-6 border border-stone-300 dark:border-stone-800 shadow-2xs hover:border-[#141414] dark:hover:border-stone-500 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200 dark:border-stone-800 font-mono text-xs">
                    <span className="text-stone-400 font-bold">0{idx + 1}</span>
                    {service.badge && (
                      <span className="px-2 py-0.5 rounded-sm bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-[10px] uppercase tracking-wider font-semibold border border-stone-300 dark:border-stone-700">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#141414] dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-4 font-sans">
                    {service.shortDescription}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs font-mono text-stone-600 dark:text-stone-400">
                    {service.features.slice(0, 2).map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-1.5">
                        <span className="text-stone-400">/</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between font-mono text-xs uppercase tracking-wider">
                  <Link
                    to="/services"
                    className="text-stone-800 dark:text-stone-300 hover:text-black dark:hover:text-white inline-flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>

                  <button
                    onClick={() => setIsOrderModalOpen(true)}
                    className="px-3 py-1.5 rounded-sm bg-[#141414] hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-[#141414] text-[11px] font-medium transition-all cursor-pointer"
                  >
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] font-mono text-xs uppercase tracking-wider transition-all"
            >
              <span>Open Complete Service Index & Live Stock Checker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US - EDITORIAL STANDARDS */}
      <section className="py-16 bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 pb-6 border-b border-stone-200 dark:border-stone-800">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-mono text-[10px] uppercase tracking-widest font-semibold mb-2">
              <Award className="w-3 h-3 text-stone-500" />
              SECTION 03 // STANDARDS OF CARE
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#141414] dark:text-white tracking-tight">
              Why Karpi Entrusts Their Healthcare to Us
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm mt-1 font-sans">
              Strict drug storage protocols, certified batch supply chain, and personalized clinical guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800">
              <span className="font-mono text-xs text-stone-400 block mb-2 font-bold">CRITERIA I</span>
              <h3 className="text-base font-serif font-bold text-[#141414] dark:text-white mb-2">
                100% Genuine & Batch-Verified
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Direct procurement from authorized pharmaceutical distributors. Strict zero-counterfeit policy with verifiable GST invoicing.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800">
              <span className="font-mono text-xs text-stone-400 block mb-2 font-bold">CRITERIA II</span>
              <h3 className="text-base font-serif font-bold text-[#141414] dark:text-white mb-2">
                Cold Chain Storage (2°C – 8°C)
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Continuous temperature-regulated refrigeration preserving the therapeutic potency of insulin, vaccines, and biologics.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800">
              <span className="font-mono text-xs text-stone-400 block mb-2 font-bold">CRITERIA III</span>
              <h3 className="text-base font-serif font-bold text-[#141414] dark:text-white mb-2">
                Direct WhatsApp Prescription Order
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Send prescription photos or item lists to 9931622496. We prepare your package in advance for zero-wait pickup or local drop.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800">
              <span className="font-mono text-xs text-stone-400 block mb-2 font-bold">CRITERIA IV</span>
              <h3 className="text-base font-serif font-bold text-[#141414] dark:text-white mb-2">
                Free Vital Monitoring Checks
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Complimentary digital blood pressure measurement and rapid blood glucose screening to support chronic condition tracking.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800">
              <span className="font-mono text-xs text-stone-400 block mb-2 font-bold">CRITERIA V</span>
              <h3 className="text-base font-serif font-bold text-[#141414] dark:text-white mb-2">
                Professional Dosage Counseling
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Clear verbal and written dosage explanations in Hindi and English. Advice on meal timings and drug interactions.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800">
              <span className="font-mono text-xs text-stone-400 block mb-2 font-bold">CRITERIA VI</span>
              <h3 className="text-base font-serif font-bold text-[#141414] dark:text-white mb-2">
                Deep Community Roots in Karpi
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                Proudly rooted in Karpi Panchayat, Bihar. Transparent fair MRP pricing with discounts on chronic repeat medications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS / STOCK PREVIEW */}
      <section className="py-16 bg-[#F5F5F4] dark:bg-[#141414] border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-stone-300 dark:border-stone-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-mono text-[10px] uppercase tracking-widest font-semibold mb-2">
                <Pill className="w-3 h-3 text-stone-500" />
                SECTION 04 // INVENTORY SAMPLES
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#141414] dark:text-white tracking-tight">
                Common Pharmacy Compounds & Essentials
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-stone-900 dark:text-stone-100 font-mono text-xs uppercase tracking-wider"
            >
              <span>Live Stock Checker</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-2xs">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">
                Pain & Fever
              </span>
              <h4 className="font-serif font-bold text-[#141414] dark:text-white text-base">Paracetamol 650mg (Dolo / Calpol)</h4>
              <p className="text-xs font-mono text-stone-500 mt-1">Micro Labs / GSK • Tablet (1x15)</p>
              <div className="mt-3 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#141414] dark:text-white">MRP: ₹32.50</span>
                <span className="text-[11px] text-emerald-600 font-semibold uppercase">In Stock</span>
              </div>
            </div>

            <div className="p-5 rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-2xs">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">
                Gastro Care
              </span>
              <h4 className="font-serif font-bold text-[#141414] dark:text-white text-base">Pantoprazole + Domperidone (Pan-D)</h4>
              <p className="text-xs font-mono text-stone-500 mt-1">Alkem Laboratories • Capsule (1x15)</p>
              <div className="mt-3 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#141414] dark:text-white">MRP: ₹198.00</span>
                <span className="text-[11px] text-emerald-600 font-semibold uppercase">In Stock</span>
              </div>
            </div>

            <div className="p-5 rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-2xs">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">
                Medical Device
              </span>
              <h4 className="font-serif font-bold text-[#141414] dark:text-white text-base">Digital BP Monitor (Omron / Dr. Morepen)</h4>
              <p className="text-xs font-mono text-stone-500 mt-1">Omron Healthcare • 3 Yr Warranty</p>
              <div className="mt-3 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#141414] dark:text-white">MRP: ₹2,150.00</span>
                <span className="text-[11px] text-amber-600 font-semibold uppercase">Limited</span>
              </div>
            </div>

            <div className="p-5 rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-2xs">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">
                Baby Care
              </span>
              <h4 className="font-serif font-bold text-[#141414] dark:text-white text-base">Infant Gripe Water & Colic Drops</h4>
              <p className="text-xs font-mono text-stone-500 mt-1">Woodward's / Himalaya • 30ml</p>
              <div className="mt-3 pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#141414] dark:text-white">MRP: ₹75.00</span>
                <span className="text-[11px] text-emerald-600 font-semibold uppercase">In Stock</span>
              </div>
            </div>

          </div>

          <div className="mt-6 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#141414] dark:bg-stone-100 text-[#F5F5F4] dark:text-[#141414] font-mono text-xs uppercase tracking-wider"
            >
              <span>Search Full Live Inventory Registry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL ARCHIVES */}
      <section className="py-16 bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-mono text-[10px] uppercase tracking-widest font-semibold mb-2">
              <Star className="w-3 h-3 text-stone-500" />
              SECTION 05 // PATIENT TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#141414] dark:text-white tracking-tight">
              Community Voices & Trust Index
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm mt-1 font-sans">
              Verified feedback from patients and families throughout Karpi Panchayat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewReviews.map((review, idx) => (
              <div
                key={review.id}
                className="p-6 rounded-sm bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-200 dark:border-stone-700/60 font-mono text-xs text-stone-400">
                    <span>RECORD 0{idx + 1}</span>
                    <span>★ {review.rating}.0 / 5.0</span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 italic font-serif leading-relaxed mb-4">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 dark:border-stone-700/60 flex items-center justify-between font-mono text-xs">
                  <div>
                    <h4 className="font-bold text-[#141414] dark:text-white">{review.reviewerName}</h4>
                    <p className="text-[10px] text-stone-400">{review.location}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-sm bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-[10px] uppercase font-semibold">
                    {review.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center font-mono text-xs">
            <Link
              to="/about"
              className="text-stone-800 dark:text-stone-300 hover:text-black dark:hover:text-white uppercase tracking-wider"
            >
              Read full store history & community healthcare commitment &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="py-16 bg-[#F5F5F4] dark:bg-[#141414] border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 pb-4 border-b border-stone-300 dark:border-stone-800">
            <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">Index 06 // Q&A</span>
            <h2 className="text-3xl font-serif font-bold text-[#141414] dark:text-white tracking-tight">
              Frequently Inquired Matters
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm mt-1 font-sans">
              Quick answers about ordering, prescription regulations, and store operational schedules.
            </p>
          </div>

          <div className="space-y-3 font-mono">
            {previewFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#141414] dark:text-white hover:opacity-80 transition-opacity"
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-4 sm:px-5 pb-5 text-xs font-sans text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-200 dark:border-stone-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center font-mono text-xs uppercase tracking-wider">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-stone-800 dark:text-stone-300 hover:text-black dark:hover:text-white"
            >
              <span>Have another question? Inquire directly with pharmacist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS */}
      <section className="py-16 bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-stone-200 dark:border-stone-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-mono text-[10px] uppercase tracking-widest font-semibold mb-2">
                <HeartPulse className="w-3 h-3 text-stone-500" />
                SECTION 07 // CLINICAL BULLETINS
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#141414] dark:text-white tracking-tight">
                Health & Medication Advisories
              </h2>
            </div>
            <Link
              to="/about"
              className="font-mono text-xs uppercase tracking-wider text-stone-800 dark:text-stone-300 hover:text-black dark:hover:text-white inline-flex items-center gap-1"
            >
              <span>View Advisory Index</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewTips.map(tip => (
              <div
                key={tip.id}
                className="group rounded-sm bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 overflow-hidden shadow-2xs"
              >
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-44 object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-stone-400">
                    <span className="font-semibold text-stone-700 dark:text-stone-300">{tip.category}</span>
                    <span>{tip.readTime}</span>
                  </div>
                  <h3 className="font-serif font-bold text-[#141414] dark:text-white text-base line-clamp-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed font-sans">
                    {tip.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA BANNER - EDITORIAL INK */}
      <section className="py-14 bg-[#141414] text-stone-100 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block">Dispatch Desk • Karpi Panchayat</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold max-w-2xl mx-auto tracking-tight">
            Need Medicines Prepared in Advance in Karpi?
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed font-sans">
            WhatsApp your prescription photo now to <strong className="font-mono text-white">{SITE_CONFIG.displayPhone}</strong> or call our pharmacy counter for instant assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono text-xs uppercase tracking-wider">
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-6 py-3.5 rounded-sm bg-stone-100 text-[#141414] hover:bg-white font-medium shadow-xs transition-all cursor-pointer"
            >
              Transcribe Prescription on WhatsApp
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-6 py-3.5 rounded-sm bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-medium transition-all"
            >
              Call 9931622496
            </a>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER SECTION */}
      <section className="py-12 bg-stone-200/60 dark:bg-stone-950 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block">Health Bulletin Archive</span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#141414] dark:text-white">
            Seasonal Health Bulletins & Pharmacy Bulletins
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-400 max-w-md mx-auto font-sans">
            Receive seasonal illness precautions, new medicine arrivals, and free health camp notifications in Karpi.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2 font-mono text-xs">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={e => setNewsletterEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white text-xs outline-hidden focus:ring-1 focus:ring-[#141414]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] text-xs font-mono uppercase tracking-wider font-medium transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Subscribe
            </button>
          </form>

          {newsletterSuccess && (
            <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold animate-in fade-in">
              Subscription registered. You will receive official bulletins.
            </p>
          )}
        </div>
      </section>

      {/* WhatsApp Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      {/* Quick Inquiry Modal */}
      <QuickInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
      />
    </div>
  );
};
