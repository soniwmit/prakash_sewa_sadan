export interface GalleryItem {
  id: string;
  title: string;
  category: "Storefront" | "Shelves" | "Medical Equipment" | "Wellness & Care";
  description: string;
  imageUrl: string;
  tag: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Storefront & Main Entrance",
    category: "Storefront",
    description: "PRAKASH SEWA SADAN main entrance on Sherpur Road, Karpi with bright signage and accessible ground-floor entry.",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1000&q=80",
    tag: "Front View"
  },
  {
    id: "gal-2",
    title: "Organized Prescription Medicine Shelves",
    category: "Shelves",
    description: "Systematically categorized pharmaceutical racks organized alphabetically with strict temperature regulation.",
    imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80",
    tag: "Medicine Shelves"
  },
  {
    id: "gal-3",
    title: "Diagnostic & Health Monitoring Devices",
    category: "Medical Equipment",
    description: "Omron BP monitors, digital glucometers, vaporizers, and pulse oximeters on dedicated display.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    tag: "Medical Equipment"
  },
  {
    id: "gal-4",
    title: "Baby Care & Maternal Nutrition Section",
    category: "Wellness & Care",
    description: "Complete array of infant formulas, gentle baby soaps, diapers, lotions, and feeding accessories.",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80",
    tag: "Baby Care"
  },
  {
    id: "gal-5",
    title: "Dispensing & Prescription Verification Counter",
    category: "Storefront",
    description: "Clean dispensing counter where patient prescriptions are verified and dosage instructions explained clearly.",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80",
    tag: "Dispensing Counter"
  },
  {
    id: "gal-6",
    title: "Ayurvedic & Immunity Herbal Racks",
    category: "Wellness & Care",
    description: "Herbal tonics, organic chyawanprash, turmeric extracts, and certified natural supplements.",
    imageUrl: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=1000&q=80",
    tag: "Ayurveda & Vitamins"
  },
  {
    id: "gal-7",
    title: "Surgical & First Aid Essentials",
    category: "Medical Equipment",
    description: "Bandages, surgical cotton, antiseptics, orthotic knee supports, and sterile disposable syringes.",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1000&q=80",
    tag: "First Aid & Surgical"
  },
  {
    id: "gal-8",
    title: "Cold Chain Storage & Refrigerated Formulations",
    category: "Shelves",
    description: "Medical-grade refrigeration preserving insulin, vaccines, eye drops, and probiotic stability.",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
    tag: "Cold Chain Unit"
  }
];
