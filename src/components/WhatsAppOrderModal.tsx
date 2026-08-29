import React, { useState } from 'react';
import { 
  X, MessageSquare, Phone, Upload, Check, AlertCircle, 
  FileText, Clock, MapPin, User, Mail, Sparkles 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { WhatsAppOrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicineName = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: initialMedicineName,
    prescriptionAttached: 'No',
    preferredTime: 'Anytime Today',
    message: ''
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      setFormData(prev => ({ ...prev, prescriptionAttached: 'Yes' }));
      
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleRemoveFile = () => {
    setPrescriptionFile(null);
    setFilePreview(null);
    setFormData(prev => ({ ...prev, prescriptionAttached: 'No' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.customerName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.medicineName.trim() && !prescriptionFile) {
      setFormError('Please enter required medicine name or attach prescription.');
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message according to Step 5 instructions
    const whatsappMessage = `*Hello ${SITE_CONFIG.businessName} - Medicine Order*
----------------------------------
*Customer Name:* ${formData.customerName.trim()}
*Phone:* ${formData.mobileNumber.trim()}
*Email:* ${formData.email.trim() || 'N/A'}
*Medicine Required:* ${formData.medicineName.trim() || 'Refer to Prescription'}
*Delivery Address:* ${formData.address.trim() || 'Karpi Pickup / Direct Delivery'}
*Prescription Attached:* ${prescriptionFile ? 'Yes (Will send image in chat)' : formData.prescriptionAttached}
*Preferred Time:* ${formData.preferredTime}
*Message / Notes:* ${formData.message.trim() || 'None'}
----------------------------------
Sent from PRAKASH SEWA SADAN Web App`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#F5F5F4] dark:bg-[#1C1A18] rounded-sm shadow-2xl border border-stone-300 dark:border-stone-800 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-order-title"
      >
        {/* Modal Header */}
        <div className="bg-[#141414] dark:bg-stone-900 p-5 sm:p-6 text-stone-100 relative shrink-0 border-b border-stone-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-sm bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-stone-800 border border-stone-700 flex items-center justify-center font-serif text-lg font-bold">
              <MessageSquare className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 block mb-0.5">Direct Prescription Order</span>
              <h3 id="whatsapp-order-title" className="text-xl font-serif font-bold text-stone-100">Prescription Order Form</h3>
              <p className="text-stone-400 text-xs font-mono">Fast Dispensing & Counter Pickup in Karpi</p>
            </div>
          </div>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1 text-stone-900 dark:text-stone-200 text-xs font-mono">
          
          {formError && (
            <div className="p-3 rounded-sm bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.customerName}
                  onChange={e => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white text-xs focus:ring-1 focus:ring-[#141414] dark:focus:ring-stone-400 outline-hidden transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="10-digit phone number"
                  value={formData.mobileNumber}
                  onChange={e => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white text-xs focus:ring-1 focus:ring-[#141414] dark:focus:ring-stone-400 outline-hidden transition-all"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Email & Preferred Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Email Address (Optional)
              </label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                <input
                  type="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white text-xs focus:ring-1 focus:ring-[#141414] dark:focus:ring-stone-400 outline-hidden transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Preferred Schedule
              </label>
              <div className="relative">
                <Clock className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                <select
                  value={formData.preferredTime}
                  onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white text-xs focus:ring-1 focus:ring-[#141414] outline-hidden transition-all"
                >
                  <option value="Anytime Today">Anytime Today (Standard)</option>
                  <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                  <option value="Evening (04:00 PM - 09:00 PM)">Evening (04:00 PM - 09:00 PM)</option>
                  <option value="Urgent / Immediate (Within 1 Hour)">Urgent / Immediate (Within 1 Hour)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
              Delivery / Village & Landmark in Karpi
            </label>
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="e.g. Village / Landmark, Sherpur Road, Karpi"
                value={formData.address}
                onChange={e => setFormData({ ...formData, address: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white text-xs focus:ring-1 focus:ring-[#141414] outline-hidden transition-all"
              />
            </div>
          </div>

          {/* Medicine Name / Requirements */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
              Medicine Names & Required Quantities
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Paracetamol 650mg (1 strip), Pan-D (1 strip), ORS (2 packets)..."
              value={formData.medicineName}
              onChange={e => setFormData({ ...formData, medicineName: e.target.value })}
              className="w-full p-3 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white text-xs focus:ring-1 focus:ring-[#141414] outline-hidden transition-all resize-none"
            />
          </div>

          {/* Prescription Upload Box */}
          <div className="p-4 rounded-sm border border-dashed border-stone-400 dark:border-stone-700 bg-stone-100 dark:bg-stone-900/60">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs uppercase tracking-wider font-bold text-stone-900 dark:text-stone-200 flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" />
                Upload Doctor's Prescription
              </label>
              <span className="text-[10px] text-stone-500 uppercase">Image / PDF</span>
            </div>

            {prescriptionFile ? (
              <div className="flex items-center justify-between p-2.5 bg-white dark:bg-stone-900 rounded-sm border border-stone-300 dark:border-stone-700">
                <div className="flex items-center gap-2 overflow-hidden">
                  {filePreview ? (
                    <img src={filePreview} alt="Prescription preview" className="w-10 h-10 object-cover rounded-xs shrink-0 border" />
                  ) : (
                    <FileText className="w-5 h-5 text-stone-600 shrink-0" />
                  )}
                  <div className="truncate">
                    <p className="text-xs font-semibold text-stone-900 dark:text-white truncate">{prescriptionFile.name}</p>
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Ready to transmit in WhatsApp</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="p-1 rounded-sm text-stone-500 hover:text-rose-600"
                  aria-label="Remove prescription"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center p-3 rounded-sm cursor-pointer hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors">
                <span className="text-xs text-stone-700 dark:text-stone-300 font-medium">
                  Click to select file or snap photo of prescription
                </span>
                <span className="text-[10px] text-stone-400 mt-0.5">JPG, PNG, WEBP, PDF (Max 10MB)</span>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Notes / Message */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 dark:text-stone-300 mb-1">
              Special Instructions / Pharmacist Notes (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Call before dispatch, generic substitute acceptable"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white text-xs focus:ring-1 focus:ring-[#141414] outline-hidden transition-all"
            />
          </div>

          {/* Modal Footer Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 font-mono text-xs uppercase tracking-wider">
            <button
              type="submit"
              disabled={isSubmitting}
              id="submit-whatsapp-order-btn"
              className="w-full sm:flex-1 py-3 px-4 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 dark:text-emerald-700" />
              {isSubmitting ? 'Opening WhatsApp...' : 'Transmit via WhatsApp'}
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              id="call-now-order-btn"
              className="w-full sm:w-auto py-3 px-5 rounded-sm border border-stone-300 dark:border-stone-700 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-500" />
              Call Store
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
