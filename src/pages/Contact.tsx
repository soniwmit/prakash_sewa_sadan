import React, { useState } from 'react';
import { 
  MapPin, Phone, MessageSquare, Clock, Mail, 
  Send, CheckCircle2, AlertCircle, ExternalLink, 
  ShieldCheck, HeartPulse, Navigation 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SEOHelmet } from '../components/SEOHelmet';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Medicine Availability Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const msg = `*Contact Form Message - ${SITE_CONFIG.businessName}*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Medicine Availability Inquiry',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F4] dark:bg-[#141414] text-[#141414] dark:text-[#F5F5F4] pb-20">
      <SEOHelmet
        title="Contact Us & Google Map - PRAKASH SEWA SADAN"
        description="Contact PRAKASH SEWA SADAN pharmacy on Sherpur Road, Karpi, Bihar 804419. Call: 9931622496, WhatsApp order, store timings, and Google Maps directions."
      />

      {/* Header */}
      <section className="border-b border-stone-300 dark:border-stone-800 bg-[#F5F5F4] dark:bg-[#141414] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-[10px] font-mono uppercase tracking-widest font-semibold border border-stone-300 dark:border-stone-700">
              <MapPin className="w-3 h-3 text-stone-500" />
              DIRECTORY // LOCATION & CHANNELS
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-[#141414] dark:text-[#F5F5F4] leading-tight">
              Get in Touch with Our Pharmacy
            </h1>
            <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed font-sans">
              We are located right on Sherpur Road in Karpi Panchayat. Visit us for counter consultations, call our pharmacist, or send a quick WhatsApp message.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Cards, Form, Map */}
      <section className="py-14 bg-white dark:bg-stone-900 border-b border-stone-300 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top 3 Direct Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Phone Call Card */}
            <div className="p-6 rounded-sm bg-[#F5F5F4] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block">Voice Hotline</span>
                <h3 className="text-xl font-serif font-bold text-[#141414] dark:text-white">Call Pharmacist</h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  Instant verbal consultation for drug availability, dosage queries, and emergency stock.
                </p>
                <p className="text-base font-mono font-bold text-[#141414] dark:text-stone-200">
                  +91 {SITE_CONFIG.displayPhone}
                </p>
              </div>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                id="contact-call-btn"
                className="w-full py-2.5 px-4 rounded-sm bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xs transition-all text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                Click to Call Now
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-sm bg-[#F5F5F4] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block">Direct Messaging</span>
                <h3 className="text-xl font-serif font-bold text-[#141414] dark:text-white">WhatsApp Order</h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  Send prescription photos or required medicine lists directly to our WhatsApp chat.
                </p>
                <p className="text-base font-mono font-bold text-[#141414] dark:text-stone-200">
                  +91 {SITE_CONFIG.displayPhone}
                </p>
              </div>
              <button
                onClick={() => setIsOrderModalOpen(true)}
                id="contact-whatsapp-btn"
                className="w-full py-2.5 px-4 rounded-sm bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Open WhatsApp Form
              </button>
            </div>

            {/* Store Location Card */}
            <div className="p-6 rounded-sm bg-[#F5F5F4] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block">Panchayat Hub</span>
                <h3 className="text-xl font-serif font-bold text-[#141414] dark:text-white">Store Location</h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                  {SITE_CONFIG.address.fullAddress}
                  <br />
                  <span className="text-stone-500">({SITE_CONFIG.address.landmark})</span>
                </p>
                <p className="text-xs font-mono font-semibold text-stone-800 dark:text-stone-300">
                  Open 7 Days: 7:00 AM – 10:30 PM
                </p>
              </div>
              <a
                href={SITE_CONFIG.googleMapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-directions-btn"
                className="w-full py-2.5 px-4 rounded-sm bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 text-[#141414] dark:text-stone-100 text-xs font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all text-center"
              >
                <Navigation className="w-3.5 h-3.5 text-stone-700 dark:text-stone-200" />
                Get Driving Route
              </a>
            </div>

          </div>

          {/* Form and Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Form (lg:col-span-6) */}
            <div className="lg:col-span-6 p-7 sm:p-8 rounded-sm bg-[#F5F5F4] dark:bg-stone-800/60 border border-stone-300 dark:border-stone-700 shadow-2xs">
              <div className="mb-6 pb-3 border-b border-stone-300 dark:border-stone-700">
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 block mb-1">Dispatch Message</span>
                <h3 className="text-2xl font-serif font-bold text-[#141414] dark:text-white">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-sans">
                  Fill in your details below. We reply swiftly through WhatsApp or phone call.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-6 rounded-sm bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-center space-y-3 font-mono">
                  <CheckCircle2 className="w-10 h-10 text-stone-800 dark:text-stone-200 mx-auto" />
                  <h4 className="font-serif font-bold text-[#141414] dark:text-white text-base">Inquiry Forwarded Successfully!</h4>
                  <p className="text-xs font-sans text-stone-600 dark:text-stone-300">
                    Our pharmacist has received your message on WhatsApp and will assist you immediately.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-4 py-2 bg-[#141414] dark:bg-stone-200 text-stone-100 dark:text-[#141414] text-xs font-bold rounded-sm uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono text-stone-800 dark:text-stone-200">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-stone-600 dark:text-stone-400 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-[#141414] dark:text-white text-xs outline-hidden focus:border-[#141414] dark:focus:border-stone-300"
                      />
                    </div>

                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-stone-600 dark:text-stone-400 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-sm border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-[#141414] dark:text-white text-xs outline-hidden focus:border-[#141414] dark:focus:border-stone-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-stone-600 dark:text-stone-400 mb-1">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-[#141414] dark:text-white text-xs outline-hidden focus:border-[#141414] dark:focus:border-stone-300"
                    />
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-stone-600 dark:text-stone-400 mb-1">Subject / Inquiry Type</label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-[#141414] dark:text-white text-xs outline-hidden focus:border-[#141414] dark:focus:border-stone-300"
                    >
                      <option value="Medicine Availability Inquiry">Medicine Availability Inquiry</option>
                      <option value="Prescription Order Verification">Prescription Order Verification</option>
                      <option value="Medical Device / BP Monitor Inquiry">Medical Device / BP Monitor Inquiry</option>
                      <option value="Baby Care & Mother Products">Baby Care & Mother Products</option>
                      <option value="Free BP / Sugar Checkup Timing">Free BP / Sugar Checkup Timing</option>
                      <option value="Emergency Medicine Request">Emergency Medicine Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-stone-600 dark:text-stone-400 mb-1">Message / Medicine List *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Write your medicine names, dosage strengths, or queries..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 rounded-sm border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-900 text-[#141414] dark:text-white text-xs outline-hidden focus:border-[#141414] dark:focus:border-stone-300 resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-sm bg-[#141414] dark:bg-stone-200 hover:bg-stone-800 dark:hover:bg-white text-stone-100 dark:text-[#141414] font-semibold text-xs uppercase tracking-wider shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {isSubmitting ? 'Sending...' : 'Send Message to Pharmacist'}
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps & Schedule (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Map Embed Card */}
              <div className="rounded-sm overflow-hidden border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-2xs">
                <div className="p-4 bg-stone-100 dark:bg-stone-900 border-b border-stone-300 dark:border-stone-700 flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-stone-600" />
                    <span className="font-bold text-[#141414] dark:text-white uppercase tracking-wider text-[11px]">
                      Karpi Panchayat Cartography
                    </span>
                  </div>
                  <a
                    href={SITE_CONFIG.googleMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-semibold text-stone-600 dark:text-stone-300 hover:underline flex items-center gap-1 uppercase"
                  >
                    Open in Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                
                {/* Embedded Map iframe */}
                <div className="h-64 sm:h-72 w-full bg-stone-200 dark:bg-stone-700">
                  <iframe
                    title="PRAKASH SEWA SADAN Google Map Location"
                    src={SITE_CONFIG.googleMapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="p-4 text-xs font-mono text-stone-600 dark:text-stone-400 border-t border-stone-300 dark:border-stone-700">
                  <strong>Landmark:</strong> {SITE_CONFIG.address.landmark}, Sherpur Road, Karpi Panchayat, Bihar 804419.
                </div>
              </div>

              {/* Working Hours Schedule Card */}
              <div className="p-6 rounded-sm bg-[#F5F5F4] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 space-y-3 font-mono text-xs shadow-2xs">
                <h4 className="font-serif font-bold text-[#141414] dark:text-white text-base flex items-center gap-2">
                  <Clock className="w-4 h-4 text-stone-500" />
                  Store Timings & Emergency Window
                </h4>
                
                <div className="space-y-2 text-stone-700 dark:text-stone-300">
                  <div className="flex items-center justify-between py-1.5 border-b border-stone-300 dark:border-stone-700">
                    <span>Monday – Saturday</span>
                    <strong className="text-[#141414] dark:text-white font-bold">07:00 AM – 10:30 PM</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-stone-300 dark:border-stone-700">
                    <span>Sunday</span>
                    <strong className="text-[#141414] dark:text-white font-bold">07:00 AM – 10:30 PM (Open)</strong>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-stone-900 dark:text-stone-200 font-bold">
                    <span>Emergency Life-Saving Meds</span>
                    <span>24/7 On-Call (9931622496)</span>
                  </div>
                </div>
              </div>

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
