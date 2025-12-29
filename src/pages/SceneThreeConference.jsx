import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SceneThreeFixed = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  // تعريف حركة اللمعان (Light Sweep)
  const shimmer = {
    initial: { x: "-100%", opacity: 0 },
    animate: { 
      x: "200%", 
      opacity: [0, 0.5, 0], // يلمع في المنتصف ويختفي في الأطراف
      transition: { 
        repeat: Infinity, 
        repeatDelay: 2.5, 
        duration: 1.5, 
        ease: "easeInOut" 
      } 
    }
  };

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

      <div key={key} className="relative w-full h-full flex flex-col items-center justify-center z-10">

        {/* 1. طبقة الانتقال (Transition Layer) - تنزلق للأعلى عند البداية */}
        <motion.div 
            className="absolute inset-0 bg-emerald-900 z-40 flex items-center justify-center"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // حركة انسيابية سريعة
        >
             {/* شعار مؤقت يظهر أثناء الانتقال */}
             <span className="text-white opacity-20 text-4xl font-bold">المؤتمر العلمي</span>
        </motion.div>


        {/* 2. حاوية الشعار (Logo Container) */}
        <motion.div 
            className="relative z-10 mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        >
            {/* الدائرة الخلفية */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white shadow-2xl flex items-center justify-center border-[6px] border-double border-amber-500/40 relative overflow-hidden group">
                
                {/* --- هام: استبدل الرابط أدناه بمسار صورتك في مجلد public --- */}
                {/* مثال: src="/Untitled-1.png" */}
                <img 
                    src="https://edfwxxagmsyzsbjtuvdu.supabase.co/storage/v1/object/public/Promo/Conference-Logo-2.png" 
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://via.placeholder.com/300?text=Logo+Missing"; // صورة بديلة في حال عدم وجود الملف
                    }}
                    alt="Conference Logo" 
                    className="w-[85%] h-[85%] object-contain z-10 drop-shadow-lg"
                />

                {/* تأثير اللمعان فوق الشعار */}
                <motion.div 
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 z-20 pointer-events-none"
                    variants={shimmer}
                    initial="initial"
                    animate="animate"
                />
            </div>
        </motion.div>

        {/* 3. النصوص (Texts) */}
        <div className="text-center z-10 relative px-4 max-w-4xl">
            
            {/* العنوان الفرعي */}
            <motion.h2
                className="text-xl md:text-3xl text-emerald-600 font-bold mb-3 tracking-wide"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                المؤتمر العلمي الدولي
            </motion.h2>

            {/* العنوان الرئيسي الكبير */}
            <div className="relative inline-block">
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold text-emerald-900 leading-tight drop-shadow-sm py-2"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
                >
                    قضايا مستجدة في بيوع الآجال
                </motion.h1>

                {/* تأثير اللمعان على النص */}
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent skew-x-[-20deg] pointer-events-none"
                    variants={shimmer}
                    initial="initial"
                    animate="animate"
                />
            </div>

            {/* زخرفة سفلية */}
            <motion.div 
                className="mt-8 flex items-center justify-center gap-4 opacity-80"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 0.8 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="h-[2px] w-1/4 bg-gradient-to-l from-amber-500 to-transparent"></div>
                <div className="w-3 h-3 rotate-45 bg-emerald-800"></div>
                <div className="h-[2px] w-1/4 bg-gradient-to-r from-amber-500 to-transparent"></div>
            </motion.div>

        </div>

      </div>
    </div>
  );
};

export default SceneThreeFixed;