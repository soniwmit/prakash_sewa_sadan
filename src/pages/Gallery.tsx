import React, { useState } from 'react';
import { 
  Camera, X, ZoomIn, MessageSquare, Filter, 
  MapPin, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { GALLERY_DATA, GalleryItem } from '../data/galleryData';
import { SEOHelmet } from '../components/SEOHelmet';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const categories = ['All', 'Storefront', 'Shelves', 'Medical Equipment', 'Wellness & Care'];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F5F4] dark:bg-[#141414] text-[#141414] dark:text-[#F5F5F4] pb-20">
      <SEOHelmet
        title="Pharmacy Gallery - Store Photos & Shelves"
        description="View photo gallery of PRAKASH SEWA SADAN in Sherpur Road, Karpi, Bihar: organized medicine shelves, cold storage, equipment display, and storefront."
      />

      {/* Page Header */}
      <section className="border-b border-stone-300 dark:border-stone-800 bg-[#F5F5F4] dark:bg-[#141414] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-[10px] font-mono uppercase tracking-widest font-semibold border border-stone-300 dark:border-stone-700">
              <Camera className="w-3 h-3 text-stone-500" />
              ARCHIVE // PHOTOGRAPHIC DOCUMENTATION
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-[#141414] dark:text-[#F5F5F4] leading-tight">
              A Glimpse Inside PRAKASH SEWA SADAN
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed font-sans">
              Explore our organized pharmaceutical inventory, specialized cold storage units, diagnostic equipment displays, and welcoming dispensing counter in Karpi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-14 bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none font-mono text-xs">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-sm whitespace-nowrap uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#141414] dark:bg-stone-200 text-stone-100 dark:text-[#141414] font-bold shadow-xs'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative rounded-sm overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 cursor-pointer shadow-2xs hover:border-[#141414] dark:hover:border-stone-400 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale contrast-115 group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 transition-opacity"></div>
                  
                  {/* Tag badge */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-sm bg-[#141414] text-stone-100 font-mono text-[9px] uppercase tracking-wider font-bold">
                    {item.tag}
                  </span>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-sm bg-black/60 text-white transition-all opacity-0 group-hover:opacity-100">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif font-bold text-base line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans text-stone-300 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* In-person Visit CTA */}
          <div className="mt-16 p-8 rounded-sm bg-[#F5F5F4] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block">VISIT IN PERSON</span>
            <h3 className="text-2xl font-serif font-bold text-[#141414] dark:text-white">
              Visit Our Pharmacy in Karpi Panchayat
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 font-sans">
              Conveniently located at <strong>Sherpur Road, Karpi, Bihar 804419</strong>. Open every day from 7:00 AM to 10:30 PM.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3 font-mono text-xs uppercase tracking-wider">
              <a
                href={SITE_CONFIG.googleMapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] font-medium shadow-xs transition-all"
              >
                <MapPin className="w-3.5 h-3.5" />
                Get Driving Directions
              </a>
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-[#141414] dark:text-stone-100 font-medium transition-colors cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp Medicine Inquiry
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* POPUP LIGHTBOX MODAL */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#141414] text-stone-100 rounded-sm overflow-hidden border border-stone-700 shadow-2xl">
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-sm bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeLightboxItem.imageUrl}
                alt={activeLightboxItem.title}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#141414] text-stone-100 space-y-3 font-mono">
              <div className="flex items-center justify-between text-xs">
                <span className="px-2 py-0.5 rounded-sm bg-stone-800 border border-stone-700 text-stone-200 uppercase tracking-widest text-[10px]">
                  {activeLightboxItem.tag}
                </span>
                <span className="text-stone-400">Sherpur Road, Karpi</span>
              </div>
              <h3 className="text-xl font-serif font-bold">{activeLightboxItem.title}</h3>
              <p className="text-xs font-sans text-stone-300 leading-relaxed">{activeLightboxItem.description}</p>
              
              <div className="pt-3 flex items-center justify-end gap-3 uppercase text-xs">
                <button
                  onClick={() => {
                    setActiveLightboxItem(null);
                    setIsOrderModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-stone-100 hover:bg-white text-[#141414] font-medium transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Order from this Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
};
