import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase'; 
import { Link } from 'react-router-dom';
import AppointmentWidget from '../components/AppointmentWidget';

const Home = () => {
  const [doctors, setDoctors] = useState([]);

  // Fetch 4 doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data, error } = await supabase
          .from('doctors')
          .select('*')
          .limit(4);
        
        if (error) throw error;
        if (data) setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error.message);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-white" dir="rtl">
      
      {/* 1. Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-50 to-white pt-12 pb-32 md:pb-48 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right z-10 pt-8">
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 leading-tight mb-6">
              أفضل مركز طبي <br />
              <span className="text-teal-500">لعلاجك</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-lg">
              نقدم خدمات طبية متكاملة بأحدث التقنيات العالمية. فريقنا الطبي جاهز لرعايتك على مدار الساعة.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition transform hover:-translate-y-1">
              تواصل معنا
            </button>
          </div>
          <div className="relative z-10 hidden md:block">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500">
              <img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg flex flex-col items-center animate-bounce">
              <span className="text-teal-500 font-bold text-3xl">+500</span>
              <span className="text-xs text-gray-500">حالة شفاء</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/30 rounded-bl-[10rem] -z-0"></div>
      </header>

      {/* 2. Booking Widget */}
      <div className="container mx-auto px-6 relative -mt-32 z-30">
         <AppointmentWidget />
      </div>

      {/* 3. About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-600 font-bold tracking-wider bg-teal-50 px-3 py-1 rounded-full text-sm">عن مركزنا الطبي</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-4 mb-6">
              نحن نوفر رعاية طبية <span className="text-teal-500">شاملة</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              نحن في مركز المدينة الطبي نسعى لتقديم أفضل الخدمات الطبية وفق معايير الجودة العالمية.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-5 rounded-2xl text-center hover:bg-blue-100 transition">
                <div className="text-3xl font-bold text-blue-900">30</div>
                <div className="text-sm text-gray-500">عيادة تخصصية</div>
              </div>
              <div className="bg-teal-50 p-5 rounded-2xl text-center hover:bg-teal-100 transition">
                <div className="text-3xl font-bold text-teal-600">600</div>
                <div className="text-sm text-gray-500">مريض يومياً</div>
              </div>
              <div className="bg-purple-50 p-5 rounded-2xl text-center hover:bg-purple-100 transition">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-500">خدمة طوارئ</div>
              </div>
              <div className="bg-orange-50 p-5 rounded-2xl text-center hover:bg-orange-100 transition">
                <div className="text-3xl font-bold text-orange-600">60</div>
                <div className="text-sm text-gray-500">طبيب استشاري</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Hospital Reception" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform -rotate-3 hover:rotate-0 transition duration-500" 
            />
          </div>
        </div>
      </section>

      {/* 4. Our Doctors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">أخصائيونا المتميزون</h2>
          <p className="text-gray-500 mb-12">فريق من أفضل الأطباء في مختلف التخصصات</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition text-center border border-gray-100">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-teal-100 mb-4 group-hover:scale-110 transition duration-300">
                  <img 
                    src={doctor.image_url || "https://via.placeholder.com/150"} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                <p className="text-teal-600 text-sm mb-4">{doctor.specialty}</p>
                <div className="flex justify-center gap-3 text-gray-400 opacity-0 group-hover:opacity-100 transition">
                  <i className="fa-brands fa-twitter hover:text-blue-400 cursor-pointer"></i>
                  <i className="fa-brands fa-linkedin hover:text-blue-700 cursor-pointer"></i>
                </div>
              </div>
            ))}
          </div>
          <Link to="/doctors" className="inline-block mt-10 border border-teal-500 text-teal-600 px-8 py-2 rounded-full font-bold hover:bg-teal-500 hover:text-white transition">
            عرض كل الأطباء
          </Link>
        </div>
      </section>

      {/* --- 5. UPDATED: Medical Services Section (Fixed Icons & Text) --- */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-teal-500 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا الطبية</h2>
            <p className="text-blue-100 mb-16 max-w-2xl mx-auto">نقدم مجموعة شاملة من الخدمات الطبية المتخصصة</p>
            
            <div className="grid md:grid-cols-4 gap-6">
                
                {/* Service 1: Specialized Clinics (Building Icon) */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/20 transition duration-300 border border-white/10 group">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                        <i className="fa-solid fa-hospital text-3xl text-white"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">العيادات التخصصية</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">16 عيادة متخصصة لتلبية جميع احتياجاتك الصحية</p>
                </div>

                {/* Service 2: Specialized Doctors (Doctor Icon) */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/20 transition duration-300 border border-white/10 group">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                        {/* 'fa-user-md' is safer than 'fa-user-doctor' for older versions */}
                        <i className="fa-solid fa-user-md text-3xl text-white"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">أطباء متخصصون</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">نخبة من أفضل الأطباء في جميع التخصصات الطبية</p>
                </div>

                {/* Service 3: City Scan (Heartbeat Icon) */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/20 transition duration-300 border border-white/10 group">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                        {/* 'fa-heartbeat' is safer than 'fa-heart-pulse' */}
                        <i className="fa-solid fa-heartbeat text-3xl text-white"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">المدينة سكان</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">أحدث أجهزة التصوير والتشخيص الطبي المتقدم</p>
                </div>

                {/* Service 4: Lab Tests (Flask Icon) */}
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/20 transition duration-300 border border-white/10 group">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                        <i className="fa-solid fa-flask text-3xl text-white"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-3">الفحوصات المخبرية</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">فحوصات دقيقة وشاملة باستخدام أحدث المعدات المخبرية</p>
                </div>

            </div>
        </div>
      </section>

      {/* --- 6. Why Choose Us Section --- */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-16">لماذا تختار مركزنا؟</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm">
                        <i className="fa-solid fa-clock"></i>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">خدمة 24/7</h3>
                    <p className="text-sm text-gray-500">نحن هنا لخدمتكم في أي وقت</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm">
                        <i className="fa-solid fa-certificate"></i>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">جودة عالية</h3>
                    <p className="text-sm text-gray-500">حاصلون على شهادات الجودة</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm">
                        <i className="fa-solid fa-user-tie"></i>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">خبراء متخصصون</h3>
                    <p className="text-sm text-gray-500">أفضل الأطباء في المنطقة</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm">
                        <i className="fa-solid fa-microscope"></i>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">أحدث الأجهزة</h3>
                    <p className="text-sm text-gray-500">تكنولوجيا طبية متطورة</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- 7. Start Your Journey (CTA) --- */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6">ابدأ رحلتك الصحية الآن</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            المواعيد متاحة عبر الإنترنت أو الهاتف. تفضل بزيارة مركز المدينة الطبي للتشخيص والعلاج.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-gray-100 transition transform hover:-translate-y-1">
              حجز موعد جديد
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition">
              تواصل معنا
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>

    </div>
  );
};

export default Home;