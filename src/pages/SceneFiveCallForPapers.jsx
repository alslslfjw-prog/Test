import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SceneFiveFinal = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  // --- 1. الرسومات المركزية (Central Graphics) ---

  // الملف المركزي
  const FolderGraphic = () => (
    <svg viewBox="0 0 100 100" className="w-40 h-40 drop-shadow-2xl">
      <path d="M10 30 L35 30 L45 40 L90 40 L90 80 L10 80 Z" fill="#065f46" />
      <path d="M10 40 L90 40 L90 80 L10 80 Z" fill="#047857" />
      <rect x="25" y="50" width="50" height="5" rx="2" fill="#D4AF37" />
      {/* ورقة تظهر للكتابة عليها */}
      <motion.rect 
        x="20" y="35" width="60" height="40" fill="white" rx="1" 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: -5, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      />
      {/* خربشة الكتابة */}
      <motion.path 
        d="M25 45 H75 M25 55 H65 M25 65 H55" 
        stroke="#333" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 100"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 2.8, duration: 2, ease: "linear" }}
      />
    </svg>
  );

  // ورقة بحثية متطايرة
  const FlyingPaper = ({ startX, startY, delay }) => (
    <motion.div
      className="absolute w-6 h-8 bg-white border border-gray-200 shadow-sm"
      initial={{ x: startX, y: startY, opacity: 0, scale: 0.5, rotate: Math.random() * 360 }}
      animate={{ 
        x: 0, y: 20, opacity: [0, 1, 1, 0], scale: 0.8, rotate: 0 
      }}
      transition={{ 
        delay: delay, duration: 1.5, ease: "easeInOut", times: [0, 0.2, 0.8, 1]
      }}
    >
      <div className="w-4 h-0.5 bg-gray-300 mt-2 mx-auto"></div>
      <div className="w-4 h-0.5 bg-gray-300 mt-1 mx-auto"></div>
    </motion.div>
  );

  // أيقونة القلم
  const PenIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-amber-500 drop-shadow-lg">
      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
    </svg>
  );

  // --- 2. شخصيات الفيكتور (Standalone SVGs for Bottom) ---

  // العالم (Scientist)
  const ScientistAvatar = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
       {/* Body */}
       <path d="M20 70 Q50 120 80 70 L80 100 H20 Z" fill="#059669" />
       {/* Head */}
       <circle cx="50" cy="40" r="25" fill="#1F2937" />
       {/* Glasses */}
       <g stroke="white" strokeWidth="2" fill="none">
         <circle cx="40" cy="40" r="8" />
         <circle cx="60" cy="40" r="8" />
         <line x1="48" y1="40" x2="52" y2="40" />
       </g>
    </svg>
  );

  // الباحث (Researcher)
  const ResearcherAvatar = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
       {/* Body */}
       <path d="M20 70 Q50 120 80 70 L80 100 H20 Z" fill="#10B981" />
       {/* Head */}
       <circle cx="50" cy="40" r="25" fill="#1F2937" />
       {/* Magnifying Glass Icon Floating */}
       <circle cx="75" cy="30" r="10" stroke="#F59E0B" strokeWidth="3" fill="none" />
       <line x1="82" y1="37" x2="90" y2="45" stroke="#F59E0B" strokeWidth="3" />
    </svg>
  );

  // الخبير (Expert)
  const ExpertAvatar = () => (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
       {/* Body */}
       <path d="M20 70 Q50 120 80 70 L80 100 H20 Z" fill="#047857" />
       {/* Head */}
       <circle cx="50" cy="40" r="25" fill="#1F2937" />
       {/* Tie */}
       <path d="M50 65 L40 90 L50 100 L60 90 Z" fill="#D4AF37" />
    </svg>
  );


  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between overflow-hidden font-serif bg-gray-50 py-10" dir="rtl">
      
      {/* زر إعادة التشغيل */}
      <button onClick={handleReplay} className="absolute top-5 left-5 z-50 px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-white transition-colors">
        إعادة المشهد
      </button>

      {/* خلفية */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#004D40 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div key={key} className="relative z-10 w-full h-full flex flex-col items-center justify-start">

        {/* 1. العنوان */}
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center z-20 mt-8 mb-8"
        >
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-2 drop-shadow-sm">دعوة للكتابة والبحث</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* 2. منطقة الرسم المركزي (بدون الفيكتور الخلفي) */}
        <div className="relative w-full max-w-2xl h-64 flex items-center justify-center mb-4">
            
            {/* أوراق تتطاير */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <FlyingPaper startX={-150} startY={-100} delay={1.8} />
                <FlyingPaper startX={150} startY={-80} delay={2.0} />
                <FlyingPaper startX={-120} startY={80} delay={2.2} />
                <FlyingPaper startX={120} startY={100} delay={2.4} />
                <FlyingPaper startX={0} startY={-150} delay={2.6} />
                <FlyingPaper startX={-180} startY={0} delay={2.8} />
            </div>

            {/* الملف المركزي */}
            <motion.div 
                className="relative z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                <FolderGraphic />
            </motion.div>

            {/* القلم المتحرك */}
            <motion.div
                className="absolute z-30"
                style={{ top: '10%', left: '52%', transformOrigin: 'bottom left' }}
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ 
                    opacity: 1,
                    x: [0, 10, 0, 8, 0], 
                    y: [0, 5, 2, 4, 0], 
                    rotate: [0, -5, 0, -5, 0] 
                }}
                transition={{ 
                    delay: 2.8, 
                    opacity: { duration: 0.5 },
                    default: { repeat: 4, duration: 0.4, ease: "linear" }
                }}
            >
                <PenIcon />
            </motion.div>
        </div>

        {/* 3. القسم السفلي: النصوص تحتها الشخصيات */}
        <div className="flex gap-8 md:gap-24 items-end justify-center mt-auto mb-10">
            
            {/* مجموعة: علماء */}
            <div className="flex flex-col items-center gap-2">
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 3.2 }}
                >
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-xl md:text-2xl font-bold text-emerald-900">علماء</span>
                </motion.div>
                {/* الفيكتور يظهر تحت النص */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 3.4, type: "spring" }}
                >
                    <ScientistAvatar />
                </motion.div>
            </div>

            {/* مجموعة: باحثين */}
            <div className="flex flex-col items-center gap-2">
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 3.6 }}
                >
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-xl md:text-2xl font-bold text-emerald-900">باحثين</span>
                </motion.div>
                 {/* الفيكتور يظهر تحت النص */}
                 <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 3.8, type: "spring" }}
                >
                    <ResearcherAvatar />
                </motion.div>
            </div>

            {/* مجموعة: خبراء */}
            <div className="flex flex-col items-center gap-2">
                <motion.div
                    className="flex flex-col items-center gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 4.0 }}
                >
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-xl md:text-2xl font-bold text-emerald-900">خبراء</span>
                </motion.div>
                 {/* الفيكتور يظهر تحت النص */}
                 <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 4.2, type: "spring" }}
                >
                    <ExpertAvatar />
                </motion.div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default SceneFiveFinal;