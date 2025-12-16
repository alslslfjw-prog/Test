import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ChevronDown, Activity, Stethoscope, User, Building } from 'lucide-react';

export default function AppointmentWidget() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('doctors'); // doctors, scans, clinics, city_scan
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [selectedId, setSelectedId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Fetch data when tab changes
  useEffect(() => {
    fetchList();
  }, [activeTab]);

  async function fetchList() {
    setLoading(true);
    let tableName = 'doctors';
    if (activeTab === 'scans') tableName = 'scans';
    if (activeTab === 'clinics') tableName = 'clinics';
    // 'city_scan' might share the scans table or be separate, sticking to scans for now

    const { data } = await supabase.from(tableName).select('id, name');
    if (data) setList(data);
    setLoading(false);
  }

  function handleSearch() {
    // Redirect to checkout with the data
    navigate(`/checkout?type=${activeTab}&id=${selectedId}&date=${date}&time=${time}`);
  }

  const tabs = [
    { id: 'scans', label: 'الفحوصات', icon: <Activity size={18} /> },
    { id: 'city_scan', label: 'المدينة سكان', icon: <Activity size={18} /> }, // Placeholder logic
    { id: 'doctors', label: 'الأطباء', icon: <User size={18} /> },
    { id: 'clinics', label: 'العيادات', icon: <Building size={18} /> },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 -mt-16 relative z-10 max-w-5xl mx-auto border border-gray-100">
      {/* Tabs */}
      <div className="flex justify-center mb-6 bg-gray-100 p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all flex-1 justify-center
              ${activeTab === tab.id 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-gray-500 hover:bg-gray-200'}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Dropdown (Dynamic) */}
        <div className="relative">
          <label className="text-xs text-gray-500 mb-1 block font-bold">
            {activeTab === 'doctors' ? 'اختر الطبيب' : activeTab === 'clinics' ? 'اختر العيادة' : 'اختر الفحص'}
          </label>
          <div className="relative">
            <select 
              className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg appearance-none text-gray-700 focus:outline-none focus:border-primary"
              onChange={(e) => setSelectedId(e.target.value)}
            >
              <option value="">اختر من القائمة...</option>
              {list.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-3.5 text-gray-400" size={16} />
          </div>
        </div>

        {/* Date & Time Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-gray-500 mb-1 block font-bold">التاريخ</label>
            <div className="relative">
              <input 
                type="date" 
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-primary"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div>
             <label className="text-xs text-gray-500 mb-1 block font-bold">الوقت</label>
             <div className="relative">
              <input 
                type="time" 
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-gray-700 focus:outline-none focus:border-primary"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button 
        onClick={handleSearch}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg transition transform active:scale-95 flex justify-center items-center gap-2"
      >
        <Calendar size={20} />
        <span>احجز الان</span>
      </button>
      
      <div className="mt-4 flex justify-between text-xs text-gray-500 px-2">
        <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span> فريق الدعم متاح الان</span>
        <span className="flex items-center gap-1"><Clock size={12}/> متاح 24/7</span>
        <span className="flex items-center gap-1">📞 777552666</span>
      </div>
    </div>
  );
}