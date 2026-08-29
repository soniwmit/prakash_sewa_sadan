import React, { useState, useMemo } from 'react';
import { 
  Search, CheckCircle2, AlertTriangle, XCircle, 
  MessageSquare, RefreshCw, Filter, Pill, ArrowUpDown, 
  Sparkles, ShieldCheck 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { MedicineStockItem } from '../types';
import rawStockData from '../data/medicineStock.json';

interface MedicineStockCheckerProps {
  onSelectForOrder?: (medicineName: string) => void;
  className?: string;
  isCompact?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectForOrder,
  className = '',
  isCompact = false
}) => {
  const [stockList] = useState<MedicineStockItem[]>(rawStockData as MedicineStockItem[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(stockList.map(item => item.category)));
    return ['All', ...cats];
  }, [stockList]);

  // Filtered & Searched Medicines
  const filteredStock = useMemo(() => {
    return stockList.filter(item => {
      const matchesSearch = 
        item.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [stockList, searchTerm, selectedCategory, selectedStatus]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 400);
  };

  const getStatusBadge = (status: MedicineStockItem['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-700 text-[11px] font-mono uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800 text-[11px] font-mono uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Low Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-stone-200 dark:bg-stone-900 text-stone-500 dark:text-stone-400 border border-stone-300 dark:border-stone-800 text-[11px] font-mono uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
            Dispatched / Out
          </span>
        );
      default:
        return null;
    }
  };

  const handleDirectOrder = (item: MedicineStockItem) => {
    if (onSelectForOrder) {
      onSelectForOrder(item.medicineName);
    } else {
      const msg = `Hello ${SITE_CONFIG.businessName}, I would like to order: ${item.medicineName} (${item.brand}). Please confirm availability and prepare for pickup/delivery in Karpi.`;
      window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <div className={`bg-[#F5F5F4] dark:bg-[#1C1A18] rounded-sm p-6 sm:p-8 border border-stone-300 dark:border-stone-800 ${className}`}>
      
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-300/80 dark:border-stone-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-stone-200 dark:bg-stone-800 text-[#141414] dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-mono text-[10px] uppercase tracking-widest font-semibold mb-2">
            <Pill className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" />
            LIVE INVENTORY INDEX • VOL. 2026
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#141414] dark:text-[#F5F5F4] tracking-tight">
            Search Pharmaceutical Registry
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 font-sans">
            Verify real-time stock levels of genuine prescription and OTC medications at our Karpi apothecary.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className={`p-2.5 rounded-sm border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all ${isRefreshing ? 'animate-spin' : ''}`}
            title="Refresh inventory data"
            aria-label="Refresh stock data"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">
            {filteredStock.length} Records
          </span>
        </div>
      </div>

      {/* Search Input and Filter Bar */}
      <div className="pt-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Main Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              id="medicine-search-input"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by drug name or compound (e.g. Paracetamol, Augmentin, Telma, Pan-D, ORS)..."
              className="w-full pl-10 pr-4 py-3 rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-[#141414] dark:text-white text-xs font-mono focus:ring-1 focus:ring-[#141414] dark:focus:ring-stone-400 focus:border-[#141414] outline-hidden transition-all placeholder:text-stone-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3 text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 font-mono text-xs uppercase"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status Quick Filter */}
          <div className="sm:w-52 shrink-0">
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              aria-label="Filter by stock status"
              className="w-full px-3 py-3 rounded-sm bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-mono text-xs focus:ring-1 focus:ring-[#141414] outline-hidden"
            >
              <option value="All">All Statuses</option>
              <option value="Available">Available Only</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-mono">
          <span className="text-stone-500 font-medium shrink-0 flex items-center gap-1 uppercase tracking-wider text-[11px]">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-sm whitespace-nowrap uppercase tracking-wider transition-all text-[11px] ${
                selectedCategory === cat
                  ? 'bg-[#141414] dark:bg-stone-100 text-[#F5F5F4] dark:text-[#141414] font-bold'
                  : 'bg-stone-200/80 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stock Items Grid / Table */}
      <div className="mt-6">
        {filteredStock.length === 0 ? (
          <div className="py-12 text-center rounded-sm bg-stone-100 dark:bg-stone-900/60 border border-stone-300 dark:border-stone-800 p-6">
            <Pill className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h4 className="text-lg font-serif font-bold text-[#141414] dark:text-stone-200">
              No matching records in registry
            </h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 max-w-md mx-auto mt-1 mb-4 font-sans">
              Daily distributor supplies arrive every morning. Inquire via WhatsApp and our pharmacist will secure the medication for you.
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello ${SITE_CONFIG.businessName}, I am inquiring about medicine: "${searchTerm}". Can you arrange this for me?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] font-mono text-xs uppercase tracking-wider transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400 dark:text-emerald-700" />
              Inquire with Pharmacist
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredStock.map(item => (
              <div
                key={item.id}
                className="group relative p-5 rounded-sm bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800/80 border border-stone-300 dark:border-stone-800 shadow-2xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 block mb-0.5">
                        {item.category}
                      </span>
                      <h4 className="text-base font-serif font-bold text-[#141414] dark:text-[#F5F5F4] tracking-tight">
                        {item.medicineName}
                      </h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                        {item.brand} • {item.dosageForm}
                      </p>
                    </div>
                    <div>{getStatusBadge(item.status)}</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2.5 my-2.5 border-y border-stone-200 dark:border-stone-800 text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase tracking-wider">MRP</span>
                      <span className="font-bold text-[#141414] dark:text-stone-100">₹{item.mrp.toFixed(2)}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase tracking-wider">In-Stock</span>
                      <span className="font-semibold text-stone-700 dark:text-stone-300">
                        {item.availableQuantity > 0 ? `${item.availableQuantity} units` : '0 units'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase tracking-wider">Expiry</span>
                      <span className="text-stone-600 dark:text-stone-400">{item.expiry}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                    {item.prescriptionRequired ? (
                      <span className="text-amber-800 dark:text-amber-300 uppercase tracking-wider text-[10px] font-semibold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Rx Required
                      </span>
                    ) : (
                      <span className="text-stone-600 dark:text-stone-400 uppercase tracking-wider text-[10px]">
                        OTC Medicine
                      </span>
                    )}
                  </span>

                  <button
                    onClick={() => handleDirectOrder(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#141414] dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-white text-[#F5F5F4] dark:text-[#141414] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-700" />
                    Order / Hold
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stock Notice Footer */}
      <div className="mt-6 pt-4 border-t border-stone-300/80 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-500 gap-2">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          Certified Batch Verification • Temperature Monitored Storage
        </span>
        <span className="text-stone-400">
          Ref: 804419 • Sherpur Road Karpi
        </span>
      </div>
    </div>
  );
};
