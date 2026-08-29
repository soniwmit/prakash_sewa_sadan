import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Heart, Award, Clock, Users, CheckCircle2, 
  MapPin, Phone, MessageSquare, Sparkles, Building, 
  ThermometerSnowflake, FileCheck, Stethoscope, ChevronRight 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHelmet } from '../components/SEOHelmet';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';

export const About: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const timelineEvents = [
    {
      year: "2018",
      title: "Foundation of PRAKASH SEWA SADAN",
      description: "Established on Sherpur Road, Karpi with a dedication to bringing genuine ethical medicines and reliable healthcare supplies to the local community."
    },
    {
      year: "2020",
      title: "Cold Chain & Continuous Power Backup",
      description: "Installed medical-grade refrigeration and invertor backup systems ensuring uncompromised storage for insulin, vaccines, and biologics."
    },
    {
      year: "2022",
      title: "Expanded Baby & Surgical Care",
      description: "Broadened inventory to include comprehensive mother-and-baby formulas, nebulizers, orthotic supports, and hospital-grade surgical dressings."
    },
    {
      year: "2024",
      title: "WhatsApp Smart Prescription Dispensing",
      description: "Pioneered direct WhatsApp prescription ordering and digitized inventory tracking for faster patient service across Karpi Panchayat."
    },
    {
      year: "Present",
      title: "Full PWA & Community Health Sewa",
      description: "Launched mobile web app stock checking and routine free Blood Pressure & Sugar screening camps for senior residents."
    }
  ];

  const values = [
    {
      title: "100% Genuine Authenticity",
      desc: "Zero tolerance for substandard or spurious drugs. Direct sourcing from authorized C&F agents of India's leading pharmaceutical innovators.",
      icon: ShieldCheck
    },
    {
      title: "Affordable Care & Transparency",
      desc: "Providing fair pricing, generic substitutes when clinically appropriate, and clear MRP billing without hidden markups.",
      icon: Heart
    },
    {
      title: "Patient Safety & Counseling",
      desc: "Dosage clarity, drug interaction vigilance, and supportive guidance for chronic cardiac, diabetes, and pediatric regimens.",
      icon: Stethoscope
    },
    {
      title: "Community Responsibility",
      desc: "Committed to the health and well-being of families across Karpi Panchayat and neighboring rural blocks in Bihar.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F4] dark:bg-[#141414] text-[#141414] dark:text-[#F5F5F4] pb-16">
      <SEOHelmet
        title="About Us - Pharmacy Story, Mission & Values"
        description="Learn about PRAKASH SEWA SADAN, your trusted community medical store in Sherpur Road, Karpi, Bihar. Discover our mission, cold-chain storage standards and patient counseling."
      />

      {/* Page Header */}
      <section className="border-b border-stone-300 dark:border-stone-800 bg-[#F5F5F4] dark:bg-[#141414] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-[10px] font-mono uppercase tracking-widest font-semibold border border-stone-300 dark:border-stone-700">
              <Building className="w-3 h-3 text-stone-500" />
              ARCHIVE // PROFILE & HERITAGE
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-[#141414] dark:text-[#F5F5F4] leading-tight">
              Rooted in Service, Committed to Authentic Healthcare
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed font-sans">
              Serving the families of Karpi Panchayat, Bihar with certified pharmaceutical excellence, genuine medicines, and compassionate health counseling.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Business Story & Overview */}
      <section className="py-16 bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider block">
                OUR HERITAGE & VISION
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#141414] dark:text-white">
                A Pillar of Trust in Karpi’s Healthcare Ecosystem
              </h2>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-sans">
                <strong>PRAKASH SEWA SADAN</strong> was founded with a singular, resolute purpose: to ensure that no patient in Karpi has to travel long distances or worry about the authenticity of their life-saving medications.
              </p>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-sans">
                Located conveniently on <strong>Sherpur Road, Karpi Panchayat</strong>, we have grown into the most trusted local medical destination. We bridge the gap between world-class pharmaceutical manufacturing and local doorstep availability.
              </p>
              <div className="p-4 rounded-sm bg-stone-100 dark:bg-stone-800 border-l-2 border-[#141414] dark:border-stone-400 text-xs font-mono text-stone-800 dark:text-stone-200 leading-relaxed">
                "Our motto 'Sewa' (Service) is not merely part of our name—it is our daily operating principle. Every prescription received is treated with utmost care, exact validation, and empathetic patient counseling."
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80"
                  alt="Organized medicine racks at PRAKASH SEWA SADAN"
                  className="rounded-sm object-cover h-48 w-full border border-stone-300 dark:border-stone-800 filter grayscale contrast-115 hover:grayscale-0 transition-all duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80"
                  alt="Dispensing counter and consultation"
                  className="rounded-sm object-cover h-48 w-full border border-stone-300 dark:border-stone-800 filter grayscale contrast-115 hover:grayscale-0 transition-all duration-300 mt-6"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Mission, Vision & Core Values */}
      <section className="py-16 bg-[#F5F5F4] dark:bg-[#141414] border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Mission */}
            <div className="p-8 rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-2xs">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-2">Statement I</span>
              <h3 className="text-xl font-serif font-bold text-[#141414] dark:text-white mb-2">Our Mission</h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                To deliver 100% authentic, temperature-preserved medications, surgical necessities, and mother-care essentials to the residents of Karpi with compassionate guidance, prompt WhatsApp ordering, and affordable pricing.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-2xs">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-2">Statement II</span>
              <h3 className="text-xl font-serif font-bold text-[#141414] dark:text-white mb-2">Our Vision</h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                To stand as Bihar’s benchmark rural and semi-urban community pharmacy, recognized for impeccable pharmaceutical standards, modern digital convenience, and relentless commitment to preventive public health.
              </p>
            </div>

          </div>

          {/* Core Values */}
          <div>
            <div className="mb-10 pb-4 border-b border-stone-300 dark:border-stone-800">
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">Principles</span>
              <h3 className="text-3xl font-serif font-bold text-[#141414] dark:text-white">Our Guiding Values</h3>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-1 font-sans">
                The ethical principles that guide every pill dispensed and every patient assisted.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
              {values.map((v, idx) => {
                return (
                  <div key={idx} className="p-6 rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-2xs">
                    <span className="text-stone-400 font-bold block mb-2">0{idx + 1}</span>
                    <h4 className="font-serif font-bold text-[#141414] dark:text-white text-base mb-1.5">{v.title}</h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Store Overview & Cold Chain Infrastructure */}
      <section className="py-16 bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
              <span className="font-mono text-xs text-stone-500 uppercase tracking-wider block">
                INFRASTRUCTURE & COLD STORAGE
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#141414] dark:text-white">
                Preserving Drug Potency Through Scientific Storage
              </h2>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-sans">
                Many critical medications like insulin, vaccines, eye drops, and probiotic formulations lose their therapeutic effect if exposed to elevated temperatures.
              </p>
              
              <div className="space-y-3 pt-2 font-mono text-xs">
                <div className="p-3.5 rounded-sm bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800">
                  <h4 className="font-bold text-[#141414] dark:text-white uppercase">Medical-Grade Cold Storage (2°C – 8°C)</h4>
                  <p className="text-stone-500 dark:text-stone-400 font-sans mt-0.5 text-xs">Continuous digital temperature monitoring with dual-battery inverter back-up for uninterrupted power.</p>
                </div>

                <div className="p-3.5 rounded-sm bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800">
                  <h4 className="font-bold text-[#141414] dark:text-white uppercase">Batch & Expiry Automation</h4>
                  <p className="text-stone-500 dark:text-stone-400 font-sans mt-0.5 text-xs">Automated inventory audits so no expired or near-expiry batch is ever dispensed to any patient.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
                alt="Cold Chain and Pharmaceutical Storage"
                className="rounded-sm object-cover h-80 w-full border border-stone-300 dark:border-stone-800 filter grayscale contrast-115 hover:grayscale-0 transition-all duration-500 shadow-xs"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Business Timeline & Milestones */}
      <section className="py-16 bg-[#F5F5F4] dark:bg-[#141414] border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 pb-4 border-b border-stone-300 dark:border-stone-800">
            <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">Chronology</span>
            <h2 className="text-3xl font-serif font-bold text-[#141414] dark:text-white">
              Our Journey & Milestones
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-xs sm:text-sm mt-1 font-sans">
              How PRAKASH SEWA SADAN developed into Karpi’s favorite medical dispensary.
            </p>
          </div>

          <div className="relative border-l border-stone-400 dark:border-stone-700 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8 font-mono">
            {timelineEvents.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#141414] dark:bg-stone-300 border-2 border-[#F5F5F4] dark:border-[#141414]"></div>
                <span className="text-xs font-bold text-stone-900 dark:text-stone-200 bg-stone-200 dark:bg-stone-800 px-2 py-0.5 rounded-sm border border-stone-300 dark:border-stone-700">
                  {item.year}
                </span>
                <h4 className="text-base font-serif font-bold text-[#141414] dark:text-white mt-2 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Pharmacist CTA Banner */}
      <section className="py-16 bg-white dark:bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-sm bg-[#141414] text-stone-100 border border-stone-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
                COMMUNITY HEALTH CONSULTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                Have questions about your prescription or dosage?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                Our licensed pharmacist is available at the counter or directly on WhatsApp to answer your questions and arrange rare medicines.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto font-mono text-xs uppercase tracking-wider">
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-stone-100 text-[#141414] hover:bg-white font-medium shadow-xs transition-all cursor-pointer"
              >
                Chat on WhatsApp (9931622496)
              </button>
              <Link
                to="/services"
                className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-stone-900 hover:bg-stone-800 text-stone-200 font-medium border border-stone-700 transition-all text-center"
              >
                Browse Services & Stock
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
};
