export interface ReviewItem {
  id: string;
  reviewerName: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  badge: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    reviewerName: "Ramesh Kumar Singh",
    location: "Karpi Main Market",
    rating: 5,
    date: "Verified Local Customer",
    comment: "Very dependable medical store in Karpi. I always get all prescribed blood pressure and diabetes medicines on time. Genuine medicines at fair prices with polite behavior.",
    badge: "Regular Customer"
  },
  {
    id: "rev-2",
    reviewerName: "Dr. A. K. Verma",
    location: "Sherpur Road, Karpi",
    rating: 5,
    date: "Local Practitioner Reference",
    comment: "Prakash Sewa Sadan maintains authentic pharmaceutical stocks and proper cold storage for injections and insulin. A trustworthy pharmacy for all our patients in Karpi Panchayat.",
    badge: "Healthcare Associate"
  },
  {
    id: "rev-3",
    reviewerName: "Sunita Devi",
    location: "Karpi Panchayat, Arwal",
    rating: 5,
    date: "Verified Family Care Customer",
    comment: "The WhatsApp order service is very convenient. Sent prescription photo and got my baby's medicine ready immediately without waiting in queue. Thank you!",
    badge: "WhatsApp User"
  },
  {
    id: "rev-4",
    reviewerName: "Manoj Sharma",
    location: "Karpi Village",
    rating: 5,
    date: "Verified Visitor",
    comment: "Appreciate their free Blood Pressure checkup counter and honest guidance on generic versus branded medicine alternatives.",
    badge: "Store Visitor"
  }
];
