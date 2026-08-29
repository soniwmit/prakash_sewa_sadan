import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  schemaType?: 'Pharmacy' | 'MedicalBusiness' | 'AboutPage' | 'ContactPage' | 'ItemPage';
}

export const SEOHelmet: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  keywords,
  schemaType = 'Pharmacy'
}) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | ${SITE_CONFIG.businessName}`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${title} | ${SITE_CONFIG.businessName}`);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Inject JSON-LD Schema
    const existingScript = document.getElementById('jsonld-schema');
    if (existingScript) existingScript.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": SITE_CONFIG.businessName,
      "alternateName": SITE_CONFIG.shortName,
      "description": SITE_CONFIG.tagline,
      "image": "https://prakashsewasadan.in/icons/icon-512.png",
      "telephone": SITE_CONFIG.phone,
      "email": SITE_CONFIG.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.street,
        "addressLocality": SITE_CONFIG.address.locality,
        "addressRegion": SITE_CONFIG.address.state,
        "postalCode": SITE_CONFIG.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.1481",
        "longitude": "84.7042"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "22:30"
        }
      ],
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, UPI, PhonePe, Google Pay, Paytm, Credit/Debit Card",
      "currenciesAccepted": "INR",
      "hasMap": SITE_CONFIG.googleMapDirectionsUrl
    };

    const script = document.createElement('script');
    script.id = 'jsonld-schema';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('jsonld-schema');
      if (el) el.remove();
    };
  }, [title, description, canonical, keywords, schemaType]);

  return null;
};
