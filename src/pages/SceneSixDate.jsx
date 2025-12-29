import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SceneSixDate = () => {
  const [key, setKey] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(0); // للتحكم في حركة الشهور

  const handleReplay = () => {
    setKey((prev) => prev + 1);
    setCurrentMonth(0);
  };

  // قائمة الشهور للمحاكاة (تقليب الصفحات)
  const months = ["يناير", "فبراير", "مارس", "إبريل"];
  
  // تفعيل حركة تقليب الشهور
  useEffect(() => {
    if (currentMonth < months.length - 1) {
      const timer = setTimeout(() => {
        setCurrentMonth(prev => prev + 1);
      }, 250); // سرعة التقليب
      return () => clearTimeout(timer);
    }
  }, [currentMonth, key]);

  // إعداد شبكة أيام شهر إبريل 2026
  // يبدأ يوم الأربعاء 1 إبريل (افتراضياً لغرض التصميم سنبدأ الأسبوع بالسبت)
  // الأيام الفارغة في البداية: السبت، الأحد، الاثنين، الثلاثاء (4 أيام)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: 4 }, () => null); // إزاحة للأيام
  const allGridCells = [...emptyDays, ...days];

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

      <div key={key} className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">

        {/* 1. التقويم (Calendar Object) */}
        <motion.div 
            className="w-80 md:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
        >
            {/* رأس التقويم (الشهر) */}
            <div className="bg-emerald-800 p-6 flex justify-between items-center relative overflow-hidden">
                <div className="text-white text-3xl font-bold z-10 w-full text-center">
                    <AnimatePresence mode='wait'>
                        <motion.span
                            key={currentMonth}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                        >
                           {months[currentMonth]} 2026
                        </motion.span>
                    </AnimatePresence>
                </div>
                {/* تأثير لمعان خفيف في الرأس */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full skew-x-12"></div>
            </div>

            {/* جسم التقويم (الأيام) */}
            <div className="p-6">
                {/* أسماء الأيام */}
                <div className="grid grid-cols-7 gap-2 mb-4 text-center text-gray-400 text-xs font-bold">
                    <span>س</span><span>ح</span><span>ن</span><span>ث</span><span>ر</span><span>خ</span><span>ج</span>
                </div>

                {/* شبكة الأرقام */}
                <div className="grid grid-cols-7 gap-2 text-center">
                    {allGridCells.map((day, index) => {
                        const isTargetDay = day === 18 || day === 19 || day === 20;
                        
                        return (
                            <div key={index} className="relative h-8 md:h-10 flex items-center justify-center">
                                {day && (
                                    <>
                                        <span className={`text-sm md:text-base font-medium z-10 ${isTargetDay ? 'text-white' : 'text-gray-700'}`}>
                                            {day}
                                        </span>
                                        
                                        {/* دائرة التمييز للأيام المستهدفة */}
                                        {isTargetDay && currentMonth === 3 && (
                                            <motion.div 
                                                className="absolute inset-0 bg-amber-500 rounded-full shadow-lg -z-0"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ 
                                                    delay: 1.2 + (day - 18) * 0.2, // تتابع في الظهور (18 ثم 19 ثم 20)
                                                    type: "spring", stiffness: 200 
                                                }}
                                            >
                                                {/* حلقة ذهبية إضافية للجمالية */}
                                                <motion.div 
                                                    className="absolute inset-[-4px] border-2 border-amber-300 rounded-full"
                                                    initial={{ opacity: 0, scale: 1.2 }}
                                                    animate={{ opacity: [0, 1, 0], scale: 1.5 }}
                                                    transition={{ delay: 1.5, duration: 1, repeat: Infinity }}
                                                />
                                            </motion.div>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>

        {/* 2. النصوص التوضيحية (التاريخ الهجري والميلادي) */}
        <motion.div 
            className="bg-white/90 backdrop-blur-md border-r-4 border-emerald-600 rounded-xl p-6 shadow-xl w-[90%] max-w-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.8 }}
        >
            <div className="flex flex-col gap-4">
                
                {/* التاريخ الهجري */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                    </div>
                    <div>
                        <h4 className="text-xs text-gray-500 font-bold mb-1">الموعد الهجري</h4>
                        <p className="text-lg md:text-xl font-bold text-emerald-900">
                            1 - 3 ذي القعدة 1447 هـ
                        </p>
                    </div>
                </div>

                {/* فاصل */}
                <div className="w-full h-[1px] bg-gray-200"></div>

                {/* التاريخ الميلادي */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                        <h4 className="text-xs text-gray-500 font-bold mb-1">الموعد الميلادي</h4>
                        <p className="text-lg md:text-xl font-bold text-emerald-900">
                            18 - 20 إبريل 2026 م
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SceneSixDate;