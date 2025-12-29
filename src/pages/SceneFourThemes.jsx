import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SceneFourPlatform = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  // --- الأيقونات (SVG Icons) ---

  // 1. أيقونة الفقه
  const FiqhIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-amber-500">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  );

  // 2. أيقونة القانون
  const LawIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-amber-500">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
    </svg>
  );

  // 3. أيقونة الاقتصاد
  const EconIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-amber-500">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );

  // 4. أيقونة التمويل
  const FinanceIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 text-amber-500">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  // البيانات
  const fields = [
    { id: 1, title: "الفقهية", icon: <FiqhIcon /> },
    { id: 2, title: "القانونية", icon: <LawIcon /> },
    { id: 3, title: "الاقتصادية", icon: <EconIcon /> },
    { id: 4, title: "التمويلية المعاصرة", icon: <FinanceIcon /> },
  ];

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden font-serif bg-gray-50" dir="rtl">
      
      {/* زر إعادة التشغيل */}
      <button 
        onClick={handleReplay}
        className="absolute top-5 left-5 z-50 px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-white transition-colors"
      >
        إعادة المشهد
      </button>

      {/* خلفية زخرفية */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#004D40 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div key={key} className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">
        
        {/* العنوان الرئيسي */}
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center"
        >
            <div className="inline-block px-6 py-2 bg-emerald-100 rounded-full mb-3">
                <span className="text-emerald-800 font-bold tracking-wider">رؤية شاملة</span>
            </div>
            
            {/* العنوان الكبير */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-2">
                منصة علمية متكاملة
            </h2>
            
            {/* العنوان الفرعي (الإضافة الجديدة) */}
            <p className="text-xl md:text-2xl text-emerald-700 font-medium">
                لمناقشة المستجدات
            </p>
        </motion.div>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {fields.map((field, index) => (
                <motion.div
                    key={field.id}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                        delay: 0.5 + (index * 0.3),
                        type: "spring", 
                        stiffness: 60 
                    }}
                    className="relative group cursor-pointer"
                >
                    {/* البطاقة */}
                    <div className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                        
                        {/* دائرة الأيقونة المتوهجة */}
                        <div className="w-20 h-20 mb-4 bg-gradient-to-br from-emerald-50 to-white rounded-full flex items-center justify-center border border-emerald-100 shadow-inner group-hover:scale-110 transition-transform duration-300">
                            {field.icon}
                        </div>
                        
                        {/* العنوان */}
                        <h3 className="text-xl font-bold text-emerald-900 mb-2">
                            {field.title}
                        </h3>
                        
                        {/* خط زخرفي صغير */}
                        <div className="w-0 group-hover:w-12 h-1 bg-amber-400 rounded-full transition-all duration-300"></div>
                    </div>

                    {/* تأثير خلفي عند الظهور */}
                    <motion.div 
                        className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ delay: 0.8 + (index * 0.3), duration: 0.5 }}
                    />
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default SceneFourPlatform;