import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SceneNineFinal = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  // --- شعار الـ 30 عاماً (SVG مخصص) ---
  const AnniversaryLogo = () => (
    <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-56 md:h-56 drop-shadow-2xl">
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>
      
      {/* أكاليل الغار (Laurel Wreath) */}
      <path d="M100 180 Q40 160 20 100 Q10 60 40 40" fill="none" stroke="url(#goldGrad)" strokeWidth="4" strokeLinecap="round" />
      <path d="M100 180 Q160 160 180 100 Q190 60 160 40" fill="none" stroke="url(#goldGrad)" strokeWidth="4" strokeLinecap="round" />
      
      {/* الرقم 30 */}
      <text x="100" y="115" textAnchor="middle" fontSize="80" fontWeight="bold" fill="url(#goldGrad)" fontFamily="serif">30</text>
      
      {/* النصوص */}
      <text x="100" y="140" textAnchor="middle" fontSize="14" fill="#065f46" fontWeight="bold">عاماً من</text>
      <text x="100" y="158" textAnchor="middle" fontSize="14" fill="#065f46" fontWeight="bold">العلم والعطاء</text>

      {/* نجوم زخرفية */}
      <motion.circle cx="100" cy="30" r="4" fill="#D4AF37" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
      <circle cx="50" cy="50" r="2" fill="#D4AF37" />
      <circle cx="150" cy="50" r="2" fill="#D4AF37" />
    </svg>
  );

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden font-serif bg-gray-50" dir="rtl">
      
      {/* زر إعادة التشغيل (سيختفي عند التلاشي النهائي) */}
      <div className="absolute top-5 left-5 z-50">
          <button 
            onClick={handleReplay}
            className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-white transition-colors"
          >
            إعادة المشهد
          </button>
      </div>

      {/* خلفية */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#004D40 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div key={key} className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">

        {/* 1. شعار الذكرى 30 (يظهر أولاً ببطء) */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-4"
        >
            <AnniversaryLogo />
        </motion.div>

        {/* 2. النص الرئيسي */}
        <motion.h1
            className="text-2xl md:text-4xl font-extrabold text-emerald-900 tracking-wide text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 1 }}
        >
            ثلاثون عاماً من العلم والعطاء
        </motion.h1>
        
        <motion.div 
            className="w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
        />

        {/* 3. شريط الشعارات (Logos Strip) */}
        <motion.div 
            className="flex items-center justify-center gap-8 md:gap-16 mt-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.8 }}
        >
            {/* شعار جامعة الأحقاف (يمين) */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white p-2 rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                    {/* استبدل النص بالصورة إذا توفرت: <img src="/ahgaff-logo.png" ... /> */}
                    <span className="text-emerald-900 font-bold text-xs text-center">جامعة<br/>الأحقاف</span>
                </div>
            </div>

            {/* شعار المؤتمر (الوسط - أكبر قليلاً) */}
            <div className="flex flex-col items-center gap-2 relative -top-4">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white p-2 rounded-full shadow-2xl border-2 border-amber-400 flex items-center justify-center relative z-10">
                     <img 
                        src="/Untitled-1.png" 
                        onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
                        alt="Conference Logo" 
                        className="w-full h-full object-contain"
                    />
                    <span className="hidden text-amber-600 font-bold text-xs text-center">شعار<br/>المؤتمر</span>
                </div>
                <div className="w-full h-4 bg-black/10 blur-xl rounded-full absolute -bottom-2"></div>
            </div>

            {/* شعار معهد إسراء (يسار) */}
            <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white p-2 rounded-full shadow-lg border border-gray-100 flex items-center justify-center">
                    {/* استبدل النص بالصورة إذا توفرت */}
                    <span className="text-emerald-900 font-bold text-xs text-center">معهد<br/>إسراء</span>
                </div>
            </div>
        </motion.div>

        {/* 4. التلاشي النهائي (Fade Out to Black) */}
        {/* يبدأ بعد 5 ثواني من بداية المشهد */}
        <motion.div 
            className="absolute inset-0 bg-black z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5, duration: 1.5, ease: "easeInOut" }}
        />

      </div>
    </div>
  );
};

export default SceneNineFinal;