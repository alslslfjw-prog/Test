import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { 
  Activity, Microscope, Zap, Dna, Droplet, Shield, Bug 
} from 'lucide-react';

// Map icon strings from DB to Lucide Components
const iconMap = {
  'Activity': <Activity size={28} />,
  'Microscope': <Microscope size={28} />,
  'Zap': <Zap size={28} />,
  'Dna': <Dna size={28} />,
  'Droplet': <Droplet size={28} />,
  'Shield': <Shield size={28} />,
  'Bug': <Microscope size={28} />, // Using Microscope for Parasitology as alt
  'default': <Activity size={28} />
};

export default function Examinations() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExaminations = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('examinations')
          .select('*')
          .order('id');
        
        if (error) throw error;
        if (data) setTests(data);
      } catch (error) {
        console.error('Error fetching examinations:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExaminations();
  }, []);

  // Hidden classes for Tailwind JIT compiler to see
  // bg-red-600 bg-teal-600 bg-orange-500 bg-green-600 bg-teal-500 bg-purple-600 bg-blue-600

  return (
    <div className="font-sans text-gray-800 bg-gray-50" dir="rtl">
      
      {/* Hero Section */}
      <section className="relative bg-white py-16 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
             <span className="inline-block text-teal-600 font-bold bg-teal-50 px-4 py-1.5 rounded-full text-sm mb-6 border border-teal-100">
                خدمات المختبر والتحاليل
             </span>
             <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6 leading-tight">
                دقة في التحليل.. <span className="text-teal-500">ثقة في النتائج</span>
             </h1>
             <p className="text-gray-500 text-lg mb-10 max-w-2xl leading-relaxed">
               نفتخر في مركز المدينة بامتلاكنا واحداً من أكثر المختبرات تطوراً، حيث نجمع بين الخبرة الطبية العريقة وأحدث التقنيات العالمية لضمان سلامتك.
             </p>
        </div>
      </section>

      {/* Dynamic Examinations Grid */}
      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {loading ? (
            <div className="text-center py-20">
               <i className="fas fa-spinner fa-spin text-4xl text-teal-600 mb-4"></i>
               <p className="text-gray-500">جارٍ تحميل أقسام المختبر...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {tests.map((test) => {
                const Icon = iconMap[test.icon_class] || iconMap['default'];
                
                return (
                  <div key={test.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group flex flex-col h-full">
                    
                    {/* 1. Header (Colored) */}
                    <div className={`${test.header_color || 'bg-blue-600'} p-5 flex justify-between items-center text-white relative overflow-hidden`}>
                      <div>
                          <h3 className="font-bold text-xl mb-1">{test.title}</h3>
                          <p className="text-xs text-white/80 font-mono tracking-wider uppercase">{test.title_en}</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner">
                         {Icon}
                      </div>
                      {/* Decoration circle */}
                      <div className="absolute -left-4 -bottom-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                    </div>
                    
                    {/* 2. Image */}
                    <div className="h-56 overflow-hidden bg-gray-100 relative">
                        <img 
                          src={test.image_url} 
                          alt={test.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                    </div>

                    {/* 3. Description Body */}
                    <div className="p-8 flex-grow">
                        <p className="text-gray-600 leading-loose text-justify text-sm md:text-base">
                          {test.description}
                        </p>
                    </div>

                    {/* 4. Devices Footer (Gray Box) */}
                    <div className="px-8 pb-8">
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="text-teal-600 font-bold text-sm mb-2 flex items-center gap-2">
                                <i className="fas fa-microchip"></i>
                                الأجهزة المستخدمة:
                            </h4>
                            <p className="text-gray-500 text-xs font-mono dir-ltr leading-relaxed" dir="ltr">
                                {test.devices || "أحدث الأجهزة العالمية"}
                            </p>
                        </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};