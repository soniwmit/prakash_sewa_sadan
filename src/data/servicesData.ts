export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  ctaText: string;
  badge?: string;
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines Dispensing",
    category: "Prescription Medicines",
    iconName: "Pill",
    badge: "Core Service",
    shortDescription: "100% genuine, licensed branded & generic prescription medications dispensed with accurate dosage counseling.",
    fullDescription: "At PRAKASH SEWA SADAN, our licensed pharmacists meticulously check prescriptions to provide exact brand and therapeutic generic equivalents from top certified pharmaceutical companies. We ensure temperature-controlled storage and safe handling.",
    features: [
      "Strict Batch & Expiry Verification",
      "Authentic Top Brands (Cipla, Sun, Abbott, Alkem, Mankind)",
      "Dosage & Interaction Guidance in Hindi & English",
      "Regular Refill Reminders for Chronic Patients"
    ],
    ctaText: "Order via WhatsApp",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "otc-medicines",
    title: "Over-The-Counter (OTC) Essentials",
    category: "OTC Medicines",
    iconName: "ShoppingBag",
    badge: "Instant Availability",
    shortDescription: "Immediate relief for common ailments like cold, cough, fever, headache, gastric acidity, and allergies.",
    fullDescription: "We stock a full spectrum of daily health remedies, pain-relieving sprays, digestion aids, immunity boosters, cough syrups, and throat lozenges for rapid relief without long waiting times.",
    features: [
      "Instant OTC Pain Relievers & Antacids",
      "Cough & Cold Formulas for Adults & Children",
      "Topical Pain Gels & Medicated Balms",
      "Electrolytes & Rehydration Solutions (ORS)"
    ],
    ctaText: "Check Stock",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "medical-equipment",
    title: "Health Devices & Medical Equipment",
    category: "Health Devices",
    iconName: "Activity",
    badge: "Certified Devices",
    shortDescription: "Accurate digital BP monitors, glucometers, nebulizers, pulse oximeters, and surgical supports.",
    fullDescription: "Equip your home with medical-grade monitoring tools. We guide you on device calibration, correct cuff sizes, testing strip usage, and warranty registration.",
    features: [
      "Digital BP Monitors (Omron, Dr. Morepen)",
      "Blood Glucose Monitoring Kits & Strips",
      "Compressor Nebulizers & Vaporizers",
      "Orthopedic Knee, Back & Ankle Belts"
    ],
    ctaText: "Inquire Devices",
    image: "https://images.unsplash.com/photo-1583912267550-d44d9b90c1f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "baby-mother-care",
    title: "Baby & Mother Care Essentials",
    category: "Baby Care",
    iconName: "HeartHandshake",
    badge: "Gentle Care",
    shortDescription: "Pediatric formulas, baby gripe waters, dermatologically tested wipes, diapers, and maternal nutrition.",
    fullDescription: "Caring for mothers and newborns with trusted products from Himalaya Baby, Sebamed, Pampers, Lactogen, and Similac. Safe, hygienic, and dermatologically tested.",
    features: [
      "Infant Formula & Weaning Foods",
      "Baby Skincare Lotions & Mild Shampoos",
      "Pediatric Thermometers & Nasal Aspirators",
      "Maternity Nutrition & Supplements"
    ],
    ctaText: "Browse Baby Care",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "surgical-first-aid",
    title: "Surgical Supplies & First Aid Care",
    category: "Home Care",
    iconName: "ShieldAlert",
    badge: "Sterilized",
    shortDescription: "Sterile gauze, crepe bandages, antiseptic ointments, surgical tapes, syringes, and wound dressings.",
    fullDescription: "Complete sterile wound care for home dressing and emergency preparedness. We maintain hospital-grade sterilized dressings, gloves, cotton rolls, and antiseptics.",
    features: [
      "Sterile Gauze Pads & Cotton Bandages",
      "Betadine & Hydrogen Peroxide Antiseptics",
      "Waterproof Band-Aids & Surgical Micropore",
      "Sterile Syringes, IV Sets & Cannula"
    ],
    ctaText: "Get First Aid Kit",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "free-vital-checkup",
    title: "Free BP & Blood Sugar Screening",
    category: "Free Wellness Service",
    iconName: "Stethoscope",
    badge: "Free In-Store",
    shortDescription: "Complimentary on-the-spot Blood Pressure check & quick blood glucose screening for all visitors.",
    fullDescription: "Community wellness is our commitment. Visit PRAKASH SEWA SADAN anytime during store hours for a quick, complimentary blood pressure measurement and vital recording in our health register.",
    features: [
      "Zero-Fee Blood Pressure Measurement",
      "Quick Glucometer Blood Sugar Test",
      "Health Parameter Tracking Card",
      "Lifestyle & Routine Advice"
    ],
    ctaText: "Visit Store Today",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ayurvedic-supplements",
    title: "Ayurvedic & Nutritional Supplements",
    category: "Supplements",
    iconName: "Sparkles",
    badge: "Holistic Health",
    shortDescription: "Herbal remedies, multivitamin complexes, protein powders, calcium, and immunity enhancers.",
    fullDescription: "Support holistic recovery and stamina with authentic herbal formulations (Dabur, Baidyanath, Himalaya) alongside modern pharmaceutical micronutrients and omega-3 supplements.",
    features: [
      "Chyawanprash & Herbal Immunity Boosters",
      "High-Absorption Calcium & Vitamin D3",
      "Daily Multivitamins & Zinc Formulations",
      "Joint Care Glucosamine & Herbal Oils"
    ],
    ctaText: "Explore Wellness",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "personal-care-hygiene",
    title: "Personal Care & Hygiene Products",
    category: "Personal Care",
    iconName: "Sparkle",
    badge: "Daily Essentials",
    shortDescription: "Dermatological soaps, medicated shampoos, sanitizers, oral care, and feminine hygiene products.",
    fullDescription: "Everyday grooming and clinical hygiene supplies to safeguard your family against infections. Includes antiseptic liquid concentrates, skin ointments, and oral care.",
    features: [
      "Medicated Anti-Dandruff & Anti-Fungal Shampoos",
      "Feminine Hygiene & Sanitary Pads",
      "Antibacterial Hand Soaps & Rubs",
      "Sensitive Toothpastes & Gum Gels"
    ],
    ctaText: "Order Essentials",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
  }
];
