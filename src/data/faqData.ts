export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Orders & Delivery" | "Medicines & Quality" | "Prescriptions" | "Store & Services";
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I order medicines on WhatsApp from PRAKASH SEWA SADAN?",
    answer: "Ordering via WhatsApp is fast and easy! Simply click our 'WhatsApp Order' button or message 9931622496 with your medicine names or a clear photo of your doctor's prescription. Our team verifies the stock, confirms the total amount, and prepares your order for quick pickup or local doorstep delivery in Karpi.",
    category: "Orders & Delivery"
  },
  {
    id: "faq-2",
    question: "Are all medicines 100% genuine and batch-certified?",
    answer: "Yes, absolutely. We source all pharmaceutical products directly from licensed pharmaceutical distributors and authorized corporate carrying agents (C&F) of top pharmaceutical brands like Cipla, Sun Pharma, Abbott, Alkem, GSK, and Mankind. Every batch is tracked with GST invoices and strict expiry controls.",
    category: "Medicines & Quality"
  },
  {
    id: "faq-3",
    question: "Do you require a valid doctor's prescription for scheduled drugs?",
    answer: "Yes. In strict compliance with the Drugs and Cosmetics Act of India, Schedule H and Schedule X prescription medications require a valid prescription signed by a registered medical practitioner (RMP). You can upload or WhatsApp your prescription directly to us.",
    category: "Prescriptions"
  },
  {
    id: "faq-4",
    question: "What are your store working hours in Karpi?",
    answer: "PRAKASH SEWA SADAN is open 7 days a week, Monday through Sunday, from 07:00 AM to 10:30 PM. For critical emergency medicine inquiries after hours, our helpline (9931622496) is available on-call.",
    category: "Store & Services"
  },
  {
    id: "faq-5",
    question: "Do you offer free Blood Pressure and Blood Sugar testing?",
    answer: "Yes! We provide complimentary blood pressure checkups and rapid blood glucose screening at our counter for senior citizens and local residents as part of our community health sewa mission.",
    category: "Store & Services"
  },
  {
    id: "faq-6",
    question: "Can you arrange medicines that are currently out of stock?",
    answer: "Yes. If a specialized medication, rare pediatric syrup, or oncology/specialty drug is not on our immediate shelf, we arrange it within 12 to 24 hours through our daily wholesale distributor replenishment network.",
    category: "Orders & Delivery"
  }
];
