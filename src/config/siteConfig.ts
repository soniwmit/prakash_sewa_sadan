export interface BusinessConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  category: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  displayWhatsApp: string;
  emergencyPhone: string;
  email: string;
  address: {
    street: string;
    locality: string;
    panchayat: string;
    district: string;
    state: string;
    pincode: string;
    fullAddress: string;
    landmark: string;
  };
  timings: {
    days: string;
    hours: string;
    emergency: string;
  };
  googleMapEmbedUrl: string;
  googleMapDirectionsUrl: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
  usp: string[];
  theme: {
    primary: string;
    accent: string;
    darkBackground: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
}

export const SITE_CONFIG: BusinessConfig = {
  businessName: "PRAKASH SEWA SADAN",
  shortName: "Prakash Sewa",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy & Healthcare Store",
  phone: "+919931622496",
  displayPhone: "9931622496",
  whatsappNumber: "919931622496",
  displayWhatsApp: "+91 9931622496",
  emergencyPhone: "+919931622496",
  email: "prakashsewasadan.karpi@gmail.com",
  address: {
    street: "Sherpur Road",
    locality: "Karpi",
    panchayat: "Karpi Panchayat",
    district: "Arwal",
    state: "Bihar",
    pincode: "804419",
    fullAddress: "Sherpur Road, Karpi Panchayat, Bihar 804419",
    landmark: "Near Karpi Main Market & Sherpur Road Junction"
  },
  timings: {
    days: "Monday - Sunday (7 Days Open)",
    hours: "07:00 AM - 10:30 PM",
    emergency: "24/7 On-Call Emergency Service"
  },
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.425121406587!2d84.7042!3d25.1481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d3d639b97b0a7%3A0x6b876403d6d5ef67!2sKarpi%2C%20Bihar%20804419!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  googleMapDirectionsUrl: "https://maps.google.com/?q=Sherpur+Road+Karpi+Panchayat+Bihar+804419",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919931622496"
  },
  usp: [
    "100% Genuine & Batch-Verified Medicines",
    "Fast WhatsApp Prescription Ordering",
    "Affordable & Discounted Generic & Ethical Drugs",
    "Free BP & Blood Sugar Consultation",
    "Comprehensive Baby, Mother & Elderly Care Stock",
    "Trusted by Families across Karpi & Surrounding Villages"
  ],
  theme: {
    primary: "#0A8F6A",
    accent: "#0284C7",
    darkBackground: "#0F172A"
  },
  pwa: {
    enabled: true,
    appName: "PRAKASH SEWA SADAN - Pharmacy App",
    shortName: "Prakash Sewa",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone"
  }
};
