export interface MedicineStockItem {
  id: string;
  medicineName: string;
  brand: string;
  category: string;
  dosageForm: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: "Available" | "Limited Stock" | "Out of Stock";
  prescriptionRequired: boolean;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  prescriptionAttached: "Yes" | "No";
  preferredTime: string;
  message: string;
}

export interface QuickInquiryFormData {
  name: string;
  phone: string;
  medicineOrService: string;
  message: string;
}
