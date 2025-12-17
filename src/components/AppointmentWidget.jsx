import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, Clock, ChevronDown, Phone, 
  Stethoscope, User, Activity, Microscope, CheckCircle
} from 'lucide-react';

export default function AppointmentWidget() {
  const navigate = useNavigate();
  
  // -- State Management --
  const [activeTab, setActiveTab] = useState('clinics');
  
  const [primaryOptions, setPrimaryOptions] = useState([]); 
  const [allDoctors, setAllDoctors] = useState([]); 
  const [secondaryOptions, setSecondaryOptions] = useState([]); 
  
  const [selectedPrimary, setSelectedPrimary] = useState(''); 
  const [selectedDoctor, setSelectedDoctor] = useState(null); 
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const tabs = [
    { id: 'clinics', label: 'العيادات', icon: <Stethoscope size={18} />, table: 'clinics', col: 'name' },
    { id: 'doctors', label: 'الأطباء', icon: <User size={18} />, table: 'doctors', col: 'name' },
    { id: 'scans', label: 'المدينة سكان', icon: <Activity size={18} />, table: 'scans', col: 'name' },
    { id: 'lab', label: 'الفحوصات', icon: <Microscope size={18} />, table: 'lab_tests_list', col: 'name' },
  ];

  // Shift Periods (For Doctors/Clinics)
  const shiftPeriods = [
    { label: 'الفترة الصباحية (9:00 ص - 1:00 م)', id: 'morning' },
    { label: 'الفترة المسائية (4:00 م - 8:00 م)', id: 'evening' },
  ];

  // Specific Time Slots (For Scans/Labs) - Generated 30min intervals
  const specificTimeSlots = [
    "08:00 صباحاً", "08:30 صباحاً", "09:00 صباحاً", "09:30 صباحاً",
    "10:00 صباحاً", "10:30 صباحاً", "11:00 صباحاً", "11:30 صباحاً",
    "12:00 ظهراً", "12:30 ظهراً", "01:00 ظهراً", 
    "04:00 عصراً", "04:30 عصراً", "05:00 عصراً", "05:30 عصراً",
    "06:00 مساءً", "06:30 مساءً", "07:00 مساءً", "07:30 مساءً",
    "08:00 مساءً", "08:30 مساءً", "09:00 مساءً"
  ];

  // Helper: Normalize Arabic Text
  const normalizeText = (text) => {
    if (!text) return "";
    return text
      .replace("عيادة", "") 
      .replace("قسم", "")   
      .replace(/ال/g, "")   
      .replace(/[ةه]/g, "") 
      .replace(/[أإآ]/g, "ا") 
      .replace(/\s/g, "")   
      .trim();
  };

  // 1. Fetch Primary Data
  useEffect(() => {
    const fetchPrimaryData = async () => {
      setLoading(true);
      setPrimaryOptions([]);
      setSelectedPrimary('');
      setSelectedDoctor(null);
      setSecondaryOptions([]);
      setTime('');
      setError('');

      try {
        const currentTab = tabs.find(t => t.id === activeTab);
        if (currentTab) {
          const { data: mainData, error: mainError } = await supabase
            .from(currentTab.table)
            .select(activeTab === 'doctors' ? '*' : currentTab.col);

          if (mainError) throw mainError;
          setPrimaryOptions(mainData || []);

          if (activeTab === 'clinics') {
            const { data: docsData, error: docsError } = await supabase
              .from('doctors')
              .select('*');
            if (!docsError) setAllDoctors(docsData || []);
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrimaryData();
  }, [activeTab]);

  // 2. Filter Doctors locally
  useEffect(() => {
    if (activeTab === 'clinics' && selectedPrimary && allDoctors.length > 0) {
      const clinicKey = normalizeText(selectedPrimary);
      const filtered = allDoctors.filter(doc => {
        if (!doc.category) return false;
        const docKey = normalizeText(doc.category);
        return docKey.includes(clinicKey) || clinicKey.includes(docKey);
      });
      setSecondaryOptions(filtered);
    }
  }, [activeTab, selectedPrimary, allDoctors]);

  // 3. Handle Doctor Selection
  const handleDoctorChange = (docName) => {
    let doc = null;
    if (activeTab === 'doctors') {
      doc = primaryOptions.find(d => d.name === docName);
    } else if (activeTab === 'clinics') {
      doc = secondaryOptions.find(d => d.name === docName);
    }
    setSelectedDoctor(doc);
    setTime('');
  };

  // 4. Time Selection Logic
  const renderTimeInput = () => {
    let options = [];
    let placeholder = "اختر الوقت...";

    // Case A: Scans & Labs -> Use Specific Time Slots
    if (activeTab === 'scans' || activeTab === 'lab') {
      options = specificTimeSlots.map(t => ({ label: t, value: t }));
    } 
    // Case B: Doctors & Clinics -> Use Shift Periods
    else {
      placeholder = "اختر الفترة...";
      let available = shiftPeriods;
      
      // Filter based on doctor's shift
      if (selectedDoctor && selectedDoctor.shift) {
          const shift = selectedDoctor.shift;
          const showMorning = shift.includes('صباح');
          const showEvening = shift.includes('عصر') || shift.includes('مساء') || shift.includes('م');
          
          if (showMorning && !showEvening) available = [shiftPeriods[0]];
          if (!showMorning && showEvening) available = [shiftPeriods[1]];
      }
      options = available.map(p => ({ label: p.label, value: p.label }));
    }

    return (
      <div className="relative">
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
           <Clock size={18} />
        </div>
        <select 
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-3.5 px-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white appearance-none transition cursor-pointer font-medium text-xs md:text-sm"
        >
          <option value="">{placeholder}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    );
  };

  // 5. Submit & Navigate
  const handleBookNow = () => {
    if (!selectedPrimary) {
      setError('يرجى اختيار ' + (activeTab === 'doctors' ? 'الطبيب' : 'العيادة/الخدمة'));
      return;
    }
    if (activeTab === 'clinics' && !selectedDoctor && secondaryOptions.length > 0) {
       setError('يرجى اختيار الطبيب من القائمة');
       return;
    }
    if (!date) {
      setError('يرجى اختيار التاريخ');
      return;
    }
    if (!time) {
      setError('يرجى اختيار الوقت');
      return;
    }

    const bookingData = {
      type: activeTab,
      primarySelection: selectedPrimary,
      doctor: selectedDoctor,
      date,
      time
    };

    navigate('/checkout', { state: bookingData });
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-xl p-5 md:p-8 w-full border border-gray-100 relative">
      
      {/* Tabs */}
      <div className="relative mb-8">
        <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar snap-x touch-pan-x">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-shrink-0 snap-start flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-200 ring-2 ring-teal-100 ring-offset-2' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100'}
              `}
            >
              {tab.icon}
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        
        {/* 1. Primary Dropdown */}
        <div className={`${activeTab === 'clinics' ? 'md:col-span-3' : 'md:col-span-4'}`}>
          <label className="block text-gray-700 font-bold mb-2 text-sm">
             {activeTab === 'doctors' ? 'اختر الطبيب' : 
              activeTab === 'clinics' ? 'اختر العيادة' : 
              activeTab === 'scans' ? 'اختر نوع الأشعة' : 'اختر الفحص'}
          </label>
          <div className="relative">
            <select 
              disabled={loading}
              value={selectedPrimary}
              onChange={(e) => {
                  setSelectedPrimary(e.target.value);
                  if (activeTab === 'doctors') handleDoctorChange(e.target.value);
              }}
              className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-3.5 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white appearance-none transition cursor-pointer font-medium disabled:opacity-50 text-sm"
            >
              <option value="">{loading ? "جاري التحميل..." : "اختر من القائمة..."}</option>
              {!loading && primaryOptions.map((item, index) => {
                 const val = activeTab === 'doctors' ? item.name : item.name || item.title || item;
                 return <option key={index} value={val}>{val}</option>
              })}
            </select>
            <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
          </div>
        </div>

        {/* 2. Secondary Dropdown (Doctors in Clinic) */}
        {activeTab === 'clinics' && (
            <div className="md:col-span-3">
            <label className="block text-gray-700 font-bold mb-2 text-sm">اختر الطبيب</label>
            <div className="relative">
                <select 
                disabled={!selectedPrimary || secondaryOptions.length === 0}
                onChange={(e) => handleDoctorChange(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-3.5 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white appearance-none transition cursor-pointer font-medium disabled:opacity-50 text-sm"
                >
                <option value="">
                    {!selectedPrimary ? "اختر العيادة أولاً" : 
                     secondaryOptions.length === 0 ? "لا يوجد أطباء متاحين" : "اختر الطبيب..."}
                </option>
                {secondaryOptions.map((doc, index) => (
                    <option key={index} value={doc.name}>{doc.name}</option>
                ))}
                </select>
                <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
            </div>
        )}

        {/* 3. Date Input */}
        <div className={`${activeTab === 'clinics' ? 'md:col-span-2' : 'md:col-span-3'}`}>
          <label className="block text-gray-700 font-bold mb-2 text-sm">التاريخ</label>
          <div className="relative">
            <input 
              type="date"
              min={new Date().toISOString().split('T')[0]} 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-700 py-3.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition font-medium text-sm"
            />
          </div>
        </div>

        {/* 4. Time Input (Dropdown) */}
        <div className={`${activeTab === 'clinics' ? 'md:col-span-2' : 'md:col-span-3'}`}>
          <label className="block text-gray-700 font-bold mb-2 text-sm">الوقت</label>
          {renderTimeInput()}
        </div>

        {/* 5. Submit Button */}
        <div className="md:col-span-2">
          <button 
            onClick={handleBookNow}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-200 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Calendar size={18} />
            <span>احجز الآن</span>
          </button>
        </div>

      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg font-bold flex items-center gap-2 animate-bounce">
            <CheckCircle size={16} className="rotate-45" />
            {error}
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm text-gray-500 border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          فريق الدعم متاح الان
        </div>
        <div className="flex items-center gap-4" dir="ltr">
          <span className="flex items-center gap-1"><Clock size={14}/> 24/7 متاح</span>
          <span className="flex items-center gap-1 text-teal-600 font-bold"><Phone size={14}/> 777552666</span>
        </div>
      </div>

    </div>
  );
}