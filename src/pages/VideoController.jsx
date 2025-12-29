import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- استيراد الخلفية الموحدة ---
import IslamicBackground from './IslamicBackground';

// --- استيراد المشاهد (تأكد من صحة المسارات) ---
// قم بفك التعليق عن الاستيراد عندما تكون ملفاتك جاهزة
// import SceneOneIntro from './SceneOneIntro';
// import SceneTwoFixed from './SceneTwoFixed';
// import SceneThreeFixed from './SceneThreeFixed';
// import SceneFourPlatform from './SceneFourPlatform';
// import SceneFiveFinal from './SceneFiveFinal';
// import SceneSixDateFixed from './SceneSixDateFixed';
// import SceneSevenDeadline from './SceneSevenDeadline';
// import SceneEightContact from './SceneEightContact';
// import SceneNineFinal from './SceneNineFinal';

// --- مكونات نائبة (Placeholders) للتجربة فقط ---
// (احذف هذه المكونات واستخدم الاستيراد أعلاه في مشروعك الحقيقي)
const Placeholder = ({ text, bg }) => <div className={`w-full h-full flex items-center justify-center text-4xl font-bold ${bg}`}>{text}</div>;
const SceneOneIntro = () => <Placeholder text="المشهد 1: المقدمة" bg="text-emerald-900" />;
const SceneTwoFixed = () => <Placeholder text="المشهد 2: الخريطة" bg="text-emerald-800" />;
const SceneThreeFixed = () => <Placeholder text="المشهد 3: العنوان" bg="text-emerald-700" />;
const SceneFourPlatform = () => <Placeholder text="المشهد 4: المحاور" bg="text-emerald-600" />;
const SceneFiveFinal = () => <Placeholder text="المشهد 5: الدعوة" bg="text-emerald-900" />;
const SceneSixDateFixed = () => <Placeholder text="المشهد 6: التقويم" bg="text-emerald-800" />;
const SceneSevenDeadline = () => <Placeholder text="المشهد 7: الموعد النهائي" bg="text-emerald-700" />;
const SceneEightContact = () => <Placeholder text="المشهد 8: التواصل" bg="text-emerald-600" />;
const SceneNineFinal = () => <Placeholder text="المشهد 9: الخاتمة" bg="text-black" />;


const VideoController = () => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  // قائمة المشاهد بالترتيب
  const scenes = [
    SceneOneIntro,          // 0
    SceneTwoFixed,          // 1
    SceneThreeFixed,        // 2
    SceneFourPlatform,      // 3
    SceneFiveFinal,         // 4
    SceneSixDateFixed,      // 5
    SceneSevenDeadline,     // 6
    SceneEightContact,      // 7
    SceneNineFinal          // 8
  ];

  // تحديد نوع الانتقال بناءً على رقم المشهد القادم
  const getTransitionType = (index) => {
    if (index === 1 || index === 2) return "curtain"; // ستارة (للبدايات)
    if (index === 3 || index === 4) return "slide";   // انزلاق (للمحتوى)
    if (index === 5 || index === 6) return "fade";    // تلاشي (للتواريخ)
    if (index === 7 || index === 8) return "zoom";    // تكبير (للخاتمة)
    return "fade";
  };

  // دالة للانتقال للمشهد التالي (للتجربة اليدوية)
  const nextScene = () => {
    setCurrentSceneIndex((prev) => (prev + 1) % scenes.length);
  };

  const prevScene = () => {
    setCurrentSceneIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  // --- تعريف حركات الانتقال (Variants) ---
  const variants = {
    // 1. الانتقال الستائري (Curtain)
    curtain: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.5 } }
    },
    // 2. الانتقال الانزلاقي (Slide)
    slide: {
      initial: { x: "100%", opacity: 1 },
      animate: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, damping: 20 } },
      exit: { x: "-50%", opacity: 0, transition: { duration: 0.5 } }
    },
    // 3. التلاشي (Fade & Blur)
    fade: {
      initial: { opacity: 0, filter: "blur(10px)" },
      animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8 } },
      exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.5 } }
    },
    // 4. التكبير (Zoom)
    zoom: {
      initial: { scale: 0.5, opacity: 0 },
      animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "circOut" } },
      exit: { scale: 1.5, opacity: 0, transition: { duration: 0.5 } }
    }
  };

  // مكون الستارة (يظهر فقط مع انتقال curtain)
  const CurtainTransition = () => (
    <motion.div
      className="absolute inset-0 z-50 flex"
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-1/2 h-full bg-emerald-900"></div>
      <div className="w-1/2 h-full bg-amber-500"></div>
    </motion.div>
  );

  const CurrentSceneComponent = scenes[currentSceneIndex];
  const transitionType = getTransitionType(currentSceneIndex);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-50">
      
      {/* 1. الخلفية الموحدة (ثابتة خلف كل شيء) */}
      <IslamicBackground />

      {/* 2. منطقة المشاهد المتحركة */}
      <AnimatePresence mode='wait' custom={currentSceneIndex}>
        <motion.div
          key={currentSceneIndex}
          className="absolute inset-0 w-full h-full z-10"
          variants={variants}
          initial={variants[transitionType].initial}
          animate={variants[transitionType].animate}
          exit={variants[transitionType].exit}
        >
          {/* عرض المشهد الحالي */}
          <CurrentSceneComponent />
          
        </motion.div>
      </AnimatePresence>

      {/* 3. تأثير الستارة الخاص (يظهر فوق كل شيء عند الحاجة) */}
      <AnimatePresence>
        {transitionType === 'curtain' && (
           <CurtainTransition key={`curtain-${currentSceneIndex}`} />
        )}
      </AnimatePresence>

      {/* --- أزرار تحكم للمطور (للتنقل بين المشاهد) --- */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
        <button onClick={prevScene} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">السابق</button>
        <span className="px-4 py-2 bg-white/80 rounded font-bold text-emerald-900">
           مشهد {currentSceneIndex + 1} / {scenes.length}
        </span>
        <button onClick={nextScene} className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-500">التالي</button>
      </div>

    </div>
  );
};

export default VideoController;