import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, Activity, ShoppingBag, HeartHandshake, ShieldAlert, 
  Stethoscope, Sparkles, Sparkle, Check, ArrowRight, 
  MessageSquare, Phone, Search, ChevronRight, Star
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { SEOHelmet } from '../components/SEOHelmet';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';

export const Services: React.FC = () => {
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('All');
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderMedicineName, setOrderMedicineName] = useState('');

  const serviceCategories = ['All', 'Prescription Medicines', 'OTC Medicines', 'Health Devices', 'Baby Care', 'Home Care', 'Supplements', 'Personal Care', 'Free Wellness Service'];

  const filteredServices = selectedServiceCategory === 'All' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === selectedServiceCategory);

  const handleOrderSpecificMedicine = (medName: string) => {
    setOrderMedicineName(medName);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F4] dark:bg-[#141414] text-[#141414] dark:text-[#F5F5F4] pb-20">
      <SEOHelmet
        title="Services & Medicine Inventory - PRAKASH SEWA SADAN"
        description="Explore our full pharmacy services in Karpi, Bihar: prescription dispensing, OTC drugs, medical equipment, baby care, ayurvedic supplements & live stock checker."
      />

      {/* Hero / Header */}
      <section className="border-b border-stone-300 dark:border-stone-800 bg-[#F5F5F4] dark:bg-[#141414] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-[10px] font-mono uppercase tracking-widest font-semibold border border-stone-300 dark:border-stone-700">
              <Pill className="w-3 h-3 text-stone-500" />
              CATALOG // DISPENSARY & CARE
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-[#141414] dark:text-[#F5F5F4] leading-tight">
              Comprehensive Medicines & Healthcare Solutions
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed font-sans">
              We stock certified branded and generic formulations, specialized diagnostic equipment, mother-infant nutrition, and daily clinical essentials.
            </p>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
      <section id="stock-checker-section" className="py-12 bg-stone-100 dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-[10px] text-stone-600 dark:text-stone-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <Star className="w-3 h-3 fill-stone-500 text-stone-500" />
              ONLINE INVENTORY ARCHIVE
            </span>
          </div>

          <MedicineStockChecker
            onSelectForOrder={(medName) => handleOrderSpecificMedicine(medName)}
          />

        </div>
      </section>

      {/* CATEGORY-WISE SERVICES CATALOG */}
      <section className="py-16 bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 pb-4 border-b border-stone-300 dark:border-stone-800 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">Index</span>
              <h2 className="text-3xl font-serif font-bold text-[#141414] dark:text-white">
                Healthcare & Pharmacy Services
              </h2>
            </div>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm font-sans max-w-md">
              Filter detailed pharmaceutical dispensing and wellness categories below.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none font-mono text-xs">
            {serviceCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedServiceCategory(cat)}
                className={`px-3.5 py-1.5 rounded-sm whitespace-nowrap uppercase tracking-wider transition-all cursor-pointer ${
                  selectedServiceCategory === cat
                    ? 'bg-[#141414] dark:bg-stone-200 text-stone-100 dark:text-[#141414] font-bold shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="group rounded-sm bg-[#F5F5F4] dark:bg-stone-800/60 border border-stone-300 dark:border-stone-700 overflow-hidden shadow-2xs hover:border-[#141414] dark:hover:border-stone-400 transition-all duration-300 flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="md:w-5/12 relative h-48 md:h-auto overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale contrast-115 group-hover:grayscale-0 transition-all duration-500"
                  />
                  {service.badge && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-sm bg-[#141414] text-stone-100 font-mono text-[9px] uppercase tracking-wider font-bold">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#141414] dark:text-white group-hover:text-stone-950 dark:group-hover:text-stone-100 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mt-2 font-sans">
                      {service.fullDescription}
                    </p>

                    <div className="mt-4 pt-3 border-t border-stone-300 dark:border-stone-700 font-mono">
                      <h4 className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">
                        Key Inclusions:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300 font-sans">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#141414] dark:bg-stone-300 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between gap-3 font-mono text-xs">
                    <button
                      onClick={() => handleOrderSpecificMedicine(service.title)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#141414] dark:bg-stone-200 text-stone-100 dark:text-[#141414] hover:bg-stone-800 dark:hover:bg-white text-xs font-semibold shadow-2xs transition-all active:scale-95 cursor-pointer uppercase tracking-wider"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      {service.ctaText}
                    </button>

                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="p-2 rounded-sm bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 hover:text-black dark:hover:text-white text-xs font-semibold"
                      title="Call pharmacist for details"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quality Standards & Prescription Guidance */}
      <section className="py-14 bg-[#F5F5F4] dark:bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-sm bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block">Compliance</span>
              <h3 className="text-xl font-serif font-bold text-[#141414] dark:text-white">
                Prescription Dispensing Guidelines
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                As per Indian Pharmacy regulations, Schedule H and Schedule X prescription medicines will be dispensed only upon presenting a valid, registered doctor's prescription. You can upload it through our WhatsApp form for rapid verification.
              </p>
            </div>
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-5 py-3 rounded-sm bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] font-mono uppercase text-xs tracking-wider shadow-xs transition-all shrink-0 cursor-pointer"
            >
              Upload Prescription Now
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialMedicineName={orderMedicineName}
      />
    </div>
  );
};
