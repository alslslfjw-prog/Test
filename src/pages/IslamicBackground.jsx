import React from 'react';
import { motion } from 'framer-motion';

const IslamicBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#f8fafc] z-0 pointer-events-none">
      
      {/* 1. الطبقة الأساسية: تدرج لوني هادئ جداً */}
      <div 
        className="absolute inset-0 w-full h-full opacity-60"
        style={{
          background: 'radial-gradient(circle at center, #ffffff 0%, #f0fdf4 100%)'
        }}
      />

      {/* 2. الزخرفة الإسلامية الهندسية (Pattern) - تتحرك ببطء */}
      <motion.div
        className="absolute inset-[-50%] w-[200%] h-[200%] opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23064e3b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{ 
          rotate: 360, 
        }}
        transition={{ 
          rotate: { duration: 180, repeat: Infinity, ease: "linear" }, // دوران بطيء جداً
        }}
      />

      {/* 3. الشعار الفني في الزوايا (Art on Corners) */}
      
      {/* الزاوية العليا اليمنى */}
      <motion.img 
        src="/Untitled-1.png" // تأكد أن الصورة موجودة في مجلد public
        alt="Corner Art"
        className="absolute -top-20 -right-20 w-96 h-96 object-contain opacity-[0.08]"
        initial={{ rotate: -15, scale: 1 }}
        animate={{ 
          rotate: [-15, -10, -15], 
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* الزاوية السفلى اليسرى (معكوسة) */}
      <motion.img 
        src="/Untitled-1.png"
        alt="Corner Art"
        className="absolute -bottom-20 -left-20 w-96 h-96 object-contain opacity-[0.08]"
        initial={{ rotate: 165, scale: 1 }}
        animate={{ 
          rotate: [165, 170, 165], 
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 // تأخير بسيط لعدم التزامن التام
        }}
      />

      {/* 4. جزيئات ذهبية طافية (Dust Particles) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-amber-400/40 rounded-full blur-[1px]"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
          }}
          animate={{ 
            y: [null, Math.random() * -100 + "%"], // تطفو للأعلى
            opacity: [0, 0.6, 0],
          }}
          transition={{ 
            duration: Math.random() * 15 + 10, 
            repeat: Infinity,
            delay: Math.random() * 10
          }}
        />
      ))}
      
      {/* 5. طبقة ضبابية خفيفة في المنتصف للتركيز على المحتوى */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-white/60 pointer-events-none"></div>

    </div>
  );
};

export default IslamicBackground;