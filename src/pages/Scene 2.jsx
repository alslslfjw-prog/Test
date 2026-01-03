import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SceneTwoFixed = () => {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  const colors = {
    gold: "#D4AF37",
    greenDark: "#004D40",
  };

  // 1. Justice Icon
  const JusticeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-amber-500">
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1.256.75.75 0 01-.304 1.469c-1.06-.217-2.153-.379-3.273-.485l.724 3.984a3.75 3.75 0 01-2.922 4.317l-.135.033-.742 4.083A3 3 0 0113.5 20.25h-3a3 3 0 01-1.752-2.588l-.742-4.083-.135-.033a3.75 3.75 0 01-2.922-4.317l.724-3.984a38.45 38.45 0 01-3.273.485.75.75 0 01-.304-1.469 49.106 49.106 0 019.152-1.256V3a.75.75 0 01.75-.75zm-4.04 5.25h-.323a.75.75 0 00-.733.885l.34 1.867a2.25 2.25 0 001.486 1.757l.23.072.134-.736a.75.75 0 111.472.268l-.134.736 1.017.317a.75.75 0 11-.448 1.432l-1.017-.317-.344 1.896a1.5 1.5 0 00.647 1.597l.372.223a.75.75 0 11-.776 1.286l-.372-.223a3 3 0 01-1.293-3.193l.344-1.896-.23-.072a3.75 3.75 0 01-2.476-2.928l-.34-1.867a2.25 2.25 0 012.2-2.657h.323a.75.75 0 010 1.5zm8.08 0h-.323a.75.75 0 00-.733.885l.34 1.867a2.25 2.25 0 001.486 1.757l.23.072.134-.736a.75.75 0 111.472.268l-.134.736 1.017.317a.75.75 0 11-.448 1.432l-1.017-.317-.344 1.896a1.5 1.5 0 00.647 1.597l.372.223a.75.75 0 11-.776 1.286l-.372-.223a3 3 0 01-1.293-3.193l.344-1.896-.23-.072a3.75 3.75 0 01-2.476-2.928l-.34-1.867a2.25 2.25 0 012.2-2.657h.323a.75.75 0 010 1.5z" clipRule="evenodd" />
    </svg>
  );

  // 2. Finance Icon
  const FinanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-amber-500">
      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.324.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579 1.005 0 .319-.152.685-.579 1.005-.257.193-.574.336-.921.421z" />
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.72.756v2.975a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.72.756V21a.75.75 0 001.5 0v-.816a3.836 3.836 0 001.72-.756c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.113-2.178a3.836 3.836 0 00-1.72-.756v-2.975a3.836 3.836 0 001.72-.756c.712-.566 1.112-1.35 1.112-2.178 0-.829-.4-1.612-1.113-2.178a3.836 3.836 0 00-1.72-.756V6z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="relative w-full h-screen flex flex-col items-center overflow-hidden font-serif bg-gray-50">
      
      {/* Replay Button */}
      <button 
        onClick={handleReplay}
        className="absolute top-5 right-5 z-50 px-4 py-2 border border-gray-300 rounded text-sm text-gray-600 hover:bg-white transition-colors"
      >
        إعادة المشهد
      </button>

      {/* Light Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#004D40 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* =========================================================
          1. Top Section: Cards (Top 35% of Screen)
         ========================================================= */}
      <div className="relative w-full h-[35%] flex items-end justify-center z-20 pb-4 pt-10">
          
          <div className="flex items-start justify-center gap-6 md:gap-16">
            
            {/* --- Yemen Card --- */}
            <motion.div 
                className="relative bg-white/95 backdrop-blur-xl p-5 pb-2 rounded-2xl shadow-xl border-t-8 border-emerald-700 w-72 flex flex-col items-center justify-between min-h-[170px]"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.4 }}
            >
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 -mt-12 mb-3 bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-lg">
                        <span className="text-emerald-800 font-bold text-[10px]">Ahgaff</span>
                    </div>
                    <h3 className="text-lg font-bold text-emerald-900 font-sans text-center leading-tight">كلية الشريعة والقانون</h3>
                    <p className="text-xs text-emerald-600 font-medium mt-1">جامعة الأحقاف - اليمن</p>
                </div>
                {/* Icon */}
                <div className="mt-2 mb-2"><JusticeIcon /></div>
                <div className="w-16 h-1 bg-amber-400 rounded-full absolute bottom-2"></div>
            </motion.div>

            {/* --- X Icon --- */}
            <motion.div 
                className="w-10 h-10 mt-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xl shadow-lg z-30 ring-4 ring-white"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 2.2, type: "spring" }}
            >
                ✕
            </motion.div>

            {/* --- Malaysia Card --- */}
            <motion.div 
                className="relative bg-white/95 backdrop-blur-xl p-5 pb-2 rounded-2xl shadow-xl border-t-8 border-emerald-700 w-72 flex flex-col items-center justify-between min-h-[170px]"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.0, duration: 0.8, type: "spring", bounce: 0.4 }}
            >
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 -mt-12 mb-3 bg-white rounded-full flex items-center justify-center border-4 border-gray-50 shadow-lg">
                        <span className="text-emerald-800 font-bold text-[10px]">INCEIF</span>
                    </div>
                    <h3 className="text-lg font-bold text-emerald-900 font-sans text-center leading-tight">معهد إسراء (INCEIF)</h3>
                    <p className="text-xs text-emerald-600 font-medium mt-1">ماليزيا</p>
                </div>
                 {/* Icon */}
                 <div className="mt-2 mb-2"><FinanceIcon /></div>
                <div className="w-16 h-1 bg-amber-400 rounded-full absolute bottom-2"></div>
            </motion.div>
          </div>
      </div>

      {/* =========================================================
          2. Bottom Section: Map Image (Bottom 65%)
         ========================================================= */}
      <div className="relative w-full h-[65%] flex items-center justify-center z-10 p-4">
          
          <motion.div 
            className="w-full h-full flex items-center justify-center relative max-w-6xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
              <div className="relative w-full h-full">
                  
                  {/* --- A. The Map Image --- */}
                  {/* NOTE: Ensure you have a file named 'map.png' in your public folder */}
                  <img 
                    src="https://edfwxxagmsyzsbjtuvdu.supabase.co/storage/v1/object/public/Promo/World-map-01.png" 
                    alt="World Map" 
                    className="w-full h-full object-contain opacity-80"
                  />
                  
                  {/* --- B. The Overlay Animation (SVG) --- */}
                  {/* This sits exactly on top of the image container to draw lines/dots */}
                  {/* You may need to adjust viewBox or cx/cy values to match your specific map image */}
                  <div className="absolute inset-0">
                      <svg className="w-full h-full" viewBox="0 0 1000 450" preserveAspectRatio="xMidYMid meet">
                          <defs>
                              <filter id="glow"><feGaussianBlur stdDeviation="3" /><feMerge><feMergeNode /><feMergeNode in="SourceGraphic"/></feMerge></filter>
                              <linearGradient id="lineG" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#004D40" stopOpacity="0"/>
                                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="1"/>
                                  <stop offset="100%" stopColor="#004D40" stopOpacity="0"/>
                              </linearGradient>
                          </defs>

                          {/* IMPORTANT: 
                             Adjust these coordinates (cx, cy) to match Yemen and Malaysia 
                             locations on your specific uploaded map image.
                             Current: Yemen (560, 240), Malaysia (750, 300) based on standard 1000x450 map
                          */}

                          {/* Yemen Dot */}
                          <g>
                              <motion.circle cx="560" cy="240" r="30" stroke={colors.gold} strokeWidth="1" fill="none"
                                  initial={{ scale: 0, opacity: 0 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ delay: 0.5, duration: 2.5, repeat: Infinity }} />
                              <motion.circle cx="560" cy="240" r="6" fill={colors.greenDark} stroke="white" strokeWidth="2"
                                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.5, type: "spring" }} />
                              <motion.text x="560" y="220" textAnchor="middle" fill="#004D40" fontSize="14" fontWeight="bold" letterSpacing="2px"
                                  initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} transition={{delay: 0.8}}>YEMEN</motion.text>
                          </g>

                          {/* Malaysia Dot */}
                          <g>
                              <motion.circle cx="750" cy="300" r="30" stroke={colors.gold} strokeWidth="1" fill="none"
                                  initial={{ scale: 0, opacity: 0 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ delay: 3.0, duration: 2.5, repeat: Infinity }} />
                              <motion.circle cx="750" cy="300" r="6" fill={colors.greenDark} stroke="white" strokeWidth="2"
                                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3.0, duration: 0.5, type: "spring" }} />
                              <motion.text x="750" y="280" textAnchor="middle" fill="#004D40" fontSize="14" fontWeight="bold" letterSpacing="2px"
                                  initial={{opacity:0, y: 10}} animate={{opacity:1, y: 0}} transition={{delay: 3.2}}>MALAYSIA</motion.text>
                          </g>

                          {/* Connecting Line */}
                          <motion.path 
                              d="M 560 240 Q 655 120 750 300" 
                              fill="none" stroke="url(#lineG)" strokeWidth="4" strokeLinecap="round" filter="url(#glow)"
                              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.5, duration: 1.5, ease: "easeInOut" }}
                          />
                      </svg>
                  </div>
              </div>

          </motion.div>
      </div>

    </div>
  );
};

export default SceneTwoFixed;