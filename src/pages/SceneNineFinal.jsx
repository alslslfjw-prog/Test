import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SceneNineFinal = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  // --- شعار الـ 30 عاماً المحدث (Simplified Gold Heart Design) ---
  const ProfessionalEmblem = () => (
    <svg viewBox="0 0 300 300" className="w-64 h-64 md:w-80 md:h-80 drop-shadow-xl">
      <defs>
        {/* تدرج ذهبي بسيط وأنيق */}
        <linearGradient id="simpleGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        {/* فلتر ظل خفيف */}
        <filter id="softShadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" /></filter>
      </defs>

      {/* 1. الإطار القلبي الذهبي (Golden Heart Shape Outline) */}
      {/* رسم خطين منحنيين يشكلان قلباً مفتوحاً من الأعلى قليلاً */}
      <g fill="none" stroke="url(#simpleGold)" strokeWidth="3" strokeLinecap="round">
          {/* الجانب الأيسر */}
          <path d="M 150 260 C 100 220, 40 160, 40 110 C 40 60, 80 40, 110 40" />
          {/* الجانب الأيمن */}
          <path d="M 150 260 C 200 220, 260 160, 260 110 C 260 60, 220 40, 190 40" />
          
          {/* نقاط زخرفية في نهايات القلب العلوية */}
          <circle cx="110" cy="40" r="3" fill="#D4AF37" stroke="none" />
          <circle cx="190" cy="40" r="3" fill="#D4AF37" stroke="none" />
          
          {/* نقطة علوية مركزية */}
          <circle cx="150" cy="30" r="4" fill="#D4AF37" stroke="none" opacity="0.8" />
      </g>

      {/* 2. النصوص الداخلية */}
      <g transform="translate(150, 130)" filter="url(#softShadow)">
          
          {/* النص العلوي (تم نقله من الأسفل) */}
          <text x="0" y="-40" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#065f46" fontFamily="sans-serif">
              عاماً من العلم والعطاء
          </text>

          {/* الرقم 30 الكبير */}
          <text x="0" y="30" textAnchor="middle" fontSize="100" fontWeight="bold" fill="url(#simpleGold)" fontFamily="serif">
              30
          </text>
      </g>

      {/* 3. بريق/نجوم متحركة بسيطة (Sparkles) */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
         <motion.path d="M 100 80 L 105 80 M 102.5 77.5 L 102.5 82.5" stroke="#FCD34D" strokeWidth="2" 
            animate={{ scale: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
         <motion.path d="M 200 80 L 205 80 M 202.5 77.5 L 202.5 82.5" stroke="#FCD34D" strokeWidth="2" 
            animate={{ scale: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
      </motion.g>

    </svg>
  );

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden font-serif bg-gray-50" dir="rtl">
      
      {/* زر إعادة التشغيل */}
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

      <div key={key} className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-2">

        {/* 1. الشعار الاحترافي الجديد (Simplified) */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-20"
        >
            <ProfessionalEmblem />
        </motion.div>

        {/* 2. العنوان النصي الكبير (ثلاثون عاماً...) */}
        <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-emerald-900 tracking-wide text-center mt-[-20px] mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
        >
            ثلاثون عاماً من العلم والعطاء
        </motion.h1>
        
        {/* فاصل ذهبي */}
        <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
        />

        {/* 3. شريط الشعارات (Logos) */}
        <motion.div 
            className="flex items-center justify-center gap-10 md:gap-20 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
        >
            {/* جامعة الأحقاف */}
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-2 border border-gray-100">
                <span className="text-emerald-900 font-bold text-xs text-center">جامعة<br/>الأحقاف</span>
            </div>

            {/* شعار المؤتمر (الوسط) */}
            <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center p-2 border-2 border-amber-400 relative -top-6">
                 <img 
                    src="/Untitled-1.png" 
                    onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
                    alt="Conference Logo" 
                    className="w-full h-full object-contain"
                />
                <span className="hidden text-amber-600 font-bold text-xs text-center">شعار<br/>المؤتمر</span>
            </div>

            {/* معهد إسراء */}
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-2 border border-gray-100">
                <span className="text-emerald-900 font-bold text-xs text-center">معهد<br/>إسراء</span>
            </div>
        </motion.div>

        {/* 4. التلاشي النهائي */}
        <motion.div 
            className="absolute inset-0 bg-black z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6.0, duration: 2.0, ease: "easeInOut" }}
        />

      </div>
    </div>
  );
};

export default SceneNineFinal;