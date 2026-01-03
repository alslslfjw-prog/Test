import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SceneEightProfessional = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  // --- الأيقونات (SVG Icons) - نفس الأيقونات السابقة ---
  const GlobeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a9.004 9.004 0 018.716-6.747M12 3a9.004 9.004 0 00-8.716 6.747M2.25 12h19.5M2.25 12a9 9 0 011.683-4.88m16.134 0a9 9 0 011.683 4.88M2.25 12a9 9 0 001.683 4.88m16.134 0a9 9 0 001.683-4.88" />
    </svg>
  );
  const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
  const WhatsappIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.77.46 3.48 1.33 5.01L2.01 22l5.1-1.33c1.48.81 3.16 1.24 4.894 1.24 5.523 0 10.004-4.48 10.004-10.004C22.008 6.48 17.527 2 12.004 2zm0 18.33c-1.54 0-3.05-.4-4.39-1.16l-.31-.18-3.26.85.87-3.16-.2-.32a8.306 8.306 0 01-1.27-4.42c0-4.58 3.73-8.33 8.33-8.33 4.58 0 8.33 3.73 8.33 8.33.001 4.58-3.749 8.33-8.33 8.33zm4.54-6.23c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.73-.65-1.22-1.45-1.36-1.7-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
    </svg>
  );

  // --- خطوط الربط المتحركة (Connecting Lines) ---
  const ConnectingLines = () => (
    <svg className="absolute top-[18%] inset-x-0 w-full h-40 pointer-events-none z-0 hidden md:block" viewBox="0 0 800 200">
        {/* خط للموقع */}
        <motion.path d="M 400 0 Q 400 50 200 150" stroke="url(#grad1)" strokeWidth="2" fill="none"
         initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ delay: 0.8, duration: 1.5 }} />
        {/* خط للبريد */}
        <motion.path d="M 400 0 Q 400 80 400 150" stroke="url(#grad2)" strokeWidth="2" fill="none"
         initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ delay: 1.1, duration: 1.5 }} />
        {/* خط للواتساب */}
        <motion.path d="M 400 0 Q 400 50 600 150" stroke="url(#grad3)" strokeWidth="2" fill="none"
         initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ delay: 1.4, duration: 1.5 }} />
        
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#065f46" stopOpacity="0" /><stop offset="100%" stopColor="#3b82f6" /></linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#065f46" stopOpacity="0" /><stop offset="100%" stopColor="#d97706" /></linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#065f46" stopOpacity="0" /><stop offset="100%" stopColor="#22c55e" /></linearGradient>
        </defs>
    </svg>
  );

  // --- المكون الجديد للوحدة الاحترافية (Professional Module) ---
  const ContactModule = ({ icon, title, info, delay, themeColor, borderColor }) => (
    <motion.div
      className={`relative group flex flex-col items-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border-2 ${borderColor} w-full md:w-64 transition-all duration-300`}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
    >
      {/* خلفية متوهجة خفيفة عند التحويم */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-${themeColor.split('-')[1]}-100`}></div>

      {/* حاوية الأيقونة */}
      <div className={`p-4 rounded-xl mb-4 ${themeColor.replace('text', 'bg')}/10 group-hover:${themeColor.replace('text', 'bg')}/20 transition-colors`}>
        <div className={themeColor}>
            {icon}
        </div>
      </div>
      
      {/* النصوص */}
      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{title}</h3>
      <p className="text-xl font-bold text-emerald-900 font-sans" style={{ direction: 'ltr' }}>
        {info}
      </p>

      {/* مؤشر سفلي ملون */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-t-full ${themeColor.replace('text', 'bg')}`}></div>
    </motion.div>
  );


  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-start pt-20 overflow-hidden font-serif bg-gray-50" dir="rtl">
      
      {/* زر إعادة التشغيل */}
      <button onClick={handleReplay} className="absolute top-5 left-5 z-50 px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-white transition-colors">
        إعادة المشهد
      </button>

      {/* خلفية هادئة */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#004D40 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div key={key} className="relative z-10 w-full h-full flex flex-col items-center gap-16 px-6">

        {/* 1. العنوان الرئيسي */}
        <motion.div
            className="text-center relative z-20"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-3 tracking-tight">
                انضموا إلينا
            </h2>
            <p className="text-xl text-emerald-700 font-medium">
                وكونوا جزءاً من الحدث العلمي الدولي
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* خطوط الربط خلف البطاقات */}
        <ConnectingLines />

        {/* 2. شبكة التواصل الاحترافية */}
        <div className="flex flex-col md:flex-row gap-6 z-10 w-full max-w-4xl justify-center items-stretch">
            
            {/* الموقع الإلكتروني */}
            <ContactModule 
                icon={<GlobeIcon />}
                title="الموقع الإلكتروني"
                info="www.ahgaff.edu"
                delay={0.6}
                themeColor="text-blue-600"
                borderColor="border-blue-100 group-hover:border-blue-400"
            />

            {/* البريد الإلكتروني */}
            <ContactModule 
                icon={<MailIcon />}
                title="البريد الإلكتروني"
                info="info@ahgaff.edu"
                delay={0.9}
                themeColor="text-amber-600"
                borderColor="border-amber-100 group-hover:border-amber-400"
            />

            {/* الواتساب */}
            <ContactModule 
                icon={<WhatsappIcon />}
                title="واتساب مباشر"
                info="+967 7X XXX"
                delay={1.2}
                themeColor="text-green-600"
                borderColor="border-green-100 group-hover:border-green-400"
            />

        </div>

      </div>
    </div>
  );
};

export default SceneEightProfessional;