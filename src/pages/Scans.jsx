import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

const Scans = () => {
  const [scansList, setScansList] = useState([]);
  const [equipmentsList, setEquipmentsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 1. Fetch Scans
        const { data: scansData, error: scansError } = await supabase
          .from('scans')
          .select('*')
          .order('id', { ascending: true });
        
        if (scansError) throw scansError;
        if (scansData) setScansList(scansData);

        // 2. Fetch Equipments
        const { data: equipmentsData, error: equipError } = await supabase
          .from('equipments')
          .select('*')
          .order('id', { ascending: true });

        if (equipError) throw equipError;
        if (equipmentsData) setEquipmentsList(equipmentsData);

      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white" dir="rtl">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Text Side (Right) */}
            <div className="lg:w-1/2 text-center lg:text-right z-10 order-2 lg:order-1">
               <span className="inline-block py-1.5 px-4 rounded-full bg-teal-100 text-teal-700 text-sm font-bold mb-6 shadow-sm">
                  <i className="fas fa-hospital-alt ml-2"></i>
                  مركز المدينة الطبي التخصصي
               </span>
               <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight mb-6">
                  الجيل الجديد <br/> <span className="text-teal-500">للرعاية الصحية</span>
               </h1>
               <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  نقدم أحدث تقنيات التصوير الطبي والتشخيص بأعلى معايير الجودة والدقة لضمان صحتك وراحتك، مع نخبة من أفضل الأطباء والاستشاريين.
               </p>
               
               <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <button className="bg-blue-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    احجز موعد الآن
                  </button>
                  <button className="bg-white text-blue-900 border-2 border-blue-100 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition">
                    تعرف علينا
                  </button>
               </div>
            </div>

            {/* Image Side (Left) - CT Scan Image */}
            <div className="lg:w-1/2 relative order-1 lg:order-2">
               <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  {/* CT Scan Image */}
                  <img
                    src="https://jwmcjqsdsibflzsaqeek.supabase.co/storage/v1/object/public/equipment-images/ct-scan.jpg.png"
                    alt="CT Scan Machine"
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>

                  {/* Floating Stats Bar */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg flex justify-between items-center text-center border border-gray-100">
                     <div className="flex-1">
                        <span className="block text-2xl md:text-3xl font-bold text-blue-900">+1400</span>
                        <span className="text-xs text-gray-500 font-bold">مريض سعيد</span>
                     </div>
                     <div className="w-px h-10 bg-gray-200"></div>
                     <div className="flex-1">
                        <span className="block text-2xl md:text-3xl font-bold text-teal-500">+120</span>
                        <span className="text-xs text-gray-500 font-bold">طبيب متخصص</span>
                     </div>
                     <div className="w-px h-10 bg-gray-200"></div>
                     <div className="flex-1">
                        <span className="block text-2xl md:text-3xl font-bold text-blue-900">120</span>
                        <span className="text-xs text-gray-500 font-bold">غرفة مجهزة</span>
                     </div>
                  </div>
               </div>
               
               {/* Decorative Background Blob */}
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-100/50 rounded-full blur-3xl opacity-50"></div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICES / SCANS SECTION --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-3">خدمات التشخيص المتقدمة</h2>
            <p className="text-gray-500">نوفر مجموعة واسعة من خدمات الفحص الطبي بأعلى معايير الجودة</p>
          </div>

          {loading ? (
            <div className="text-center py-10">جارٍ تحميل الخدمات...</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {scansList.map((scan) => (
                <Link to={`/scans/${scan.id}`} key={scan.id} className="block">
                    <div className="flex flex-col items-center justify-center p-8 bg-blue-50 rounded-2xl hover:bg-blue-100 hover:shadow-md transition-all duration-300 cursor-pointer group h-full">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                        <i className={scan.icon_class || "fa-solid fa-heart-pulse"}></i>
                    </div>
                    <h3 className="font-bold text-lg text-blue-900 text-center">{scan.name}</h3>
                    <span className="text-xs text-teal-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                        عرض التفاصيل &larr;
                    </span>
                    </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- EQUIPMENTS SECTION --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-3">المعدات الطبية</h2>
            <p className="text-gray-500">أحدث الأجهزة الطبية لتشخيص دقيق وآمن</p>
          </div>

          {loading ? (
             <div className="text-center py-10">جارٍ تحميل المعدات...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipmentsList.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group flex flex-col">
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img 
                      src={item.image_url || "https://via.placeholder.com/400x300"} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-4 right-4 bg-teal-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm tracking-wider uppercase">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4 text-right">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-gray-400 text-sm font-medium dir-ltr" dir="ltr">
                            {item.description}
                        </p>
                    </div>
                    
                    <div className="mt-auto flex justify-end">
                        {/* --- CHANGED: Using Link instead of Button here --- */}
                        <Link 
                            to={`/equipments/${item.id}`} 
                            className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-teal-200 shadow-lg"
                        >
                            عرض التفاصيل 
                            <i className="fas fa-arrow-left text-xs mt-1"></i>
                        </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Scans;