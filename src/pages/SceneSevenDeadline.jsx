import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SceneSevenDeadline = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  // --- Hourglass Icon & Animation ---
  const Hourglass = () => (
    <svg viewBox="0 0 100 100" className="w-40 h-40 drop-shadow-xl">
      {/* Glass Body */}
      <path 
        d="M25 10 L75 10 L60 45 L60 55 L75 90 L25 90 L40 55 L40 45 L25 10 Z" 
        fill="none" 
        stroke="#065f46" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Top Sand (Decreasing) */}
      <motion.path 
        d="M30 20 L70 20 L60 45 L40 45 Z" 
        fill="#D4AF37"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(100% 0% 0% 0%)" }}
        transition={{ duration: 5, ease: "linear", delay: 0.5 }}
      />

      {/* Sand Stream (Falling) */}
      <motion.rect 
        x="48" y="45" width="4" height="45" fill="#D4AF37"
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      />

      {/* Bottom Sand (Accumulating) */}
      <motion.path 
        d="M25 90 L75 90 L60 55 L40 55 Z" 
        fill="#D4AF37"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 5, ease: "linear", delay: 0.8 }}
      />

      {/* Reflections/Gloss */}
      <path d="M30 15 Q35 30 30 40" stroke="white" strokeWidth="2" opacity="0.5" fill="none" />
      <path d="M30 85 Q35 70 30 60" stroke="white" strokeWidth="2" opacity="0.5" fill="none" />
    </svg>
  );

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden font-serif bg-gray-50" dir="rtl">
      
      {/* زر إعادة التشغيل */}
      <button onClick={handleReplay} className="absolute top-5 left-5 z-50 px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-white transition-colors">
        إعادة المشهد
      </button>

      {/* خلفية */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#004D40 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div key={key} className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">

        {/* 1. العنوان التحذيري اللطيف */}
        <motion.div
            className="relative"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex items-center gap-3 bg-red-50 border border-red-100 px-6 py-2 rounded-full shadow-sm">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-900">
                    آخر موعد للملخصات
                </h2>
            </div>
        </motion.div>

        {/* 2. الساعة الرملية */}
        <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
            className="relative"
        >
            {/* دائرة توهج خلفية */}
            <motion.div 
                className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <Hourglass />
        </motion.div>

        {/* 3. التواريخ */}
        <div className="flex flex-col gap-4 w-full max-w-md px-6">
            
            {/* التاريخ الهجري */}
            <motion.div 
                className="bg-white border-r-4 border-emerald-600 rounded-lg p-4 shadow-md flex justify-between items-center"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-bold">التاريخ الهجري</span>
                    <span className="text-xl font-bold text-emerald-900">15 شعبان 1447 هـ</span>
                </div>
                <div className="text-emerald-100">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
                </div>
            </motion.div>

            {/* التاريخ الميلادي */}
            <motion.div 
                className="bg-white border-r-4 border-amber-500 rounded-lg p-4 shadow-md flex justify-between items-center"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
            >
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-bold">التاريخ الميلادي</span>
                    <span className="text-xl font-bold text-emerald-900">3 فبراير 2026 م</span>
                </div>
                <div className="text-amber-100">
                     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                </div>
            </motion.div>

        </div>

      </div>
    </div>
  );
};

export default SceneSevenDeadline;