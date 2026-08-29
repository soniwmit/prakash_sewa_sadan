export interface HealthTip {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  tips: string[];
  image: string;
}

export const HEALTH_TIPS_DATA: HealthTip[] = [
  {
    id: "tip-1",
    title: "5 Essential Tips for Managing Blood Pressure at Home",
    category: "Cardiovascular Health",
    date: "August 2026",
    readTime: "3 min read",
    summary: "Simple lifestyle modifications and proper digital monitor usage to keep your BP in the healthy target range.",
    tips: [
      "Measure BP at the same time daily, after 5 minutes of quiet resting.",
      "Reduce dietary sodium and avoid processed savory snacks.",
      "Never alter or skip prescribed hypertension medicine doses without consulting your doctor.",
      "Keep a written log or digital record to share with your physician."
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tip-2",
    title: "Safe Storage Guidelines: Why Cold Chain Matters for Insulin & Syrups",
    category: "Medicine Safety",
    date: "July 2026",
    readTime: "4 min read",
    summary: "How proper temperature storage prevents pharmaceutical degradation and maintains full drug potency during summer.",
    tips: [
      "Store unopened insulin vials in the refrigerator (2°C - 8°C), never in the freezer.",
      "Keep oral syrups and antibiotic suspensions away from direct sunlight and kitchen heat.",
      "Always check the expiry date and reconstituted suspension timeline (usually 7 days).",
      "Store all medicines safely out of reach of young children."
    ],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tip-3",
    title: "Monsoon & Seasonal Viral Flu: Preventive Home Care Kit",
    category: "Seasonal Wellness",
    date: "June 2026",
    readTime: "3 min read",
    summary: "Stay protected against water-borne infections, seasonal viral fevers, and vector-borne illnesses in Bihar.",
    tips: [
      "Drink boiled or filtered water and keep ORS electrolyte sachets at home.",
      "Use mosquito repellents and prevent stagnant water pooling around your home.",
      "Take Vitamin C and zinc for natural mucosal immunity.",
      "Seek medical advice if fever persists beyond 48 hours."
    ],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80"
  }
];
