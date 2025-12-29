import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SceneOneTimeline = () => {
  const [key, setKey] = useState(0);
  const [year, setYear] = useState(1995); // سنة البداية المفترضة
  const [showFinal, setShowFinal] = useState(false);

  // دالة لإعادة تشغيل المشهد
  const handleReplay = () => {
    setKey((prev) => prev + 1);
    setYear(1995);
    setShowFinal(false);
  };

  // عداد السنوات (Timeline Animation)
  useEffect(() => {
    if (showFinal) return;
    
    // تسريع العداد كلما اقتربنا من النهاية
    const interval = setInterval(() => {
      setYear((prev) => {
        if (prev >= 2025) {
          clearInterval(interval);
          setShowFinal(true); // تفعيل المشهد النهائي
          return 2025;
        }
        return prev + 1;
      });
    }, 50); // سرعة العد (كل 50 ملي ثانية سنة)

    return () => clearInterval(interval);
  }, [key, showFinal]);

  const colors = {
    gold: "#D4AF37",
    greenDark: "#004D40",
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden font-serif bg-gray-50">
      
      {/* زر إعادة التشغيل */}
      <button 
        onClick={handleReplay}
        className="absolute top-5 right-5 z-50 px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-white transition-colors"
      >
        إعادة المشهد
      </button>

      {/* 1. شعار الجامعة في الخلفية (Watermark Background) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          {/* استبدل الرابط أدناه برابط شعار جامعة الأحقاف الرسمي الشفاف (PNG) */}
          <img 
            src="https://via.placeholder.com/500x500.png?text=Ahgaff+Logo" 
            alt="Ahgaff University Logo" 
            className="w-[600px] h-[600px] object-contain opacity-[0.03] grayscale"
          />
      </div>

      {/* خلفية زخرفية إضافية */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
         <svg width="100%" height="100%"><rect width="100%" height="100%" fill="#004D40" mask="url(#dots)"/></svg>
      </div>

      <div key={key} className="relative z-10 flex flex-col items-center justify-center w-full">

        {/* --- المرحلة 1: الخط الزمني (The Timeline) --- */}
        <AnimatePresence>
            {!showFinal && (
                <motion.div 
                    className="absolute flex flex-col items-center justify-center"
                    exit={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                >
                    {/* الخط الرأسي */}
                    <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: 200 }} 
                        className="w-[2px] bg-amber-500/50 mb-4 relative"
                    >
                         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-amber-500 rounded-full shadow-glow"></div>
                    </motion.div>
                    
                    {/* عداد السنوات */}
                    <h2 className="text-6xl font-bold text-emerald-900/20 tracking-widest font-mono">
                        {year}
                    </h2>
                </motion.div>
            )}
        </AnimatePresence>

        {/* --- المرحلة 2: المشهد النهائي (The Final Badge) --- */}
        {showFinal && (
            <div className="relative w-[460px] h-[460px] flex items-center justify-center">
                
                {/* 1. الإطار الإسلامي الزخرفي */}
                <motion.div className="absolute inset-0 flex items-center justify-center"
                    initial={{ rotate: -180, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
                >
                    <svg width="460" height="460" viewBox="0 0 460 460" className="drop-shadow-2xl">
                        <defs>
                            <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#D4AF37" />
                                <stop offset="50%" stopColor="#FDD835" />
                                <stop offset="100%" stopColor="#B8860B" />
                            </linearGradient>
                        </defs>
                        <g transform="translate(230, 230)">
                            <rect x="-160" y="-160" width="320" height="320" rx="4" fill="white" stroke={colors.greenDark} strokeWidth="3" transform="rotate(0)" />
                            <rect x="-160" y="-160" width="320" height="320" rx="4" fill="white" stroke={colors.greenDark} strokeWidth="3" transform="rotate(45)" />
                            <rect x="-152" y="-152" width="304" height="304" rx="2" fill="none" stroke="url(#goldGradient2)" strokeWidth="2" transform="rotate(0)" />
                            <rect x="-152" y="-152" width="304" height="304" rx="2" fill="none" stroke="url(#goldGradient2)" strokeWidth="2" transform="rotate(45)" />
                            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                                <g key={i} transform={`rotate(${angle}) translate(0, -226)`}>
                                    <circle r="6" fill={colors.greenDark} stroke="white" strokeWidth="2" />
                                    <circle r="3" fill={colors.gold} />
                                </g>
                            ))}
                        </g>
                    </svg>
                </motion.div>

                {/* 2. المحتوى الداخلي */}
                <motion.div 
                    className="relative z-20 flex flex-col items-center justify-center text-center mt-4" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {/* صورة المبنى */}
                    <motion.img 
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        src="https://edfwxxagmsyzsbjtuvdu.supabase.co/storage/v1/object/public/Promo/LawCollege.png" 
                        alt="College Building" 
                        className="w-56 h-auto object-contain drop-shadow-lg mb-[-20px] relative z-10" 
                    />

                    {/* الرقم 30 */}
                    <motion.h1 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, type: "spring", stiffness: 100 }}
                        className="text-[90px] font-bold leading-none relative z-20"
                        style={{ 
                            fontFamily: "'Times New Roman', serif",
                            background: `linear-gradient(to bottom, ${colors.gold}, #B8860B)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            filter: "drop-shadow(0px 2px 0px rgba(0,0,0,0.1))"
                        }}
                    >
                        30
                    </motion.h1>

                    {/* النصوص */}
                    <motion.div 
                        className="flex flex-col items-center mt-[-5px]"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <h2 className="text-xl font-bold text-emerald-900 tracking-wide">
                            عاماً من العلم والعطاء
                        </h2>
                        
                        <div className="w-16 h-[1px] bg-amber-500/50 my-1"></div>

                        <p className="text-emerald-700 text-xs font-medium tracking-wider">
                            وتميز يتجدد
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        )}

      </div>

      {/* الحقوق */}
      <div className="absolute bottom-6 text-[10px] text-gray-400">
        جامعة الأحقاف - كلية الشريعة والقانون
      </div>
    </div>
  );
};

export default SceneOneTimeline;