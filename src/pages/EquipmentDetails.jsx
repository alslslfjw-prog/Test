import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function EquipmentDetails() {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const { data, error } = await supabase
          .from('equipments')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        setEquipment(data);
      } catch (error) {
        console.error('Error fetching equipment:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEquipment();
  }, [id]);

  if (loading) return <div className="text-center py-40 text-teal-600 font-bold">جارٍ تحميل التفاصيل...</div>;
  if (!equipment) return <div className="text-center py-40 text-red-500">لم يتم العثور على الجهاز المطلوب</div>;

  // قوائم البيانات (مع قيم افتراضية فارغة لتجنب الأخطاء)
  const techSpecs = equipment.tech_specs || [];
  const medicalBenefits = equipment.medical_benefits || [];
  const medicalUses = equipment.medical_uses || [];
  const advancedFeatures = equipment.features || [];

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-right" dir="rtl">
      
      {/* --- Header / Breadcrumb --- */}
      <div className="bg-white border-b border-gray-200 py-4 mb-8">
        <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <Link to="/" className="hover:text-teal-600 transition">الرئيسية</Link> 
                <i className="fas fa-chevron-left text-xs opacity-50"></i>
                <Link to="/scans" className="hover:text-teal-600 transition">الأجهزة الطبية</Link>
                <i className="fas fa-chevron-left text-xs opacity-50"></i>
                <span className="text-teal-600 font-bold">{equipment.name}</span>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20">
        
        {/* === TITLE HEADER === */}
        <div className="text-center mb-12">
            {equipment.badge && (
                <span className="bg-teal-50 text-teal-600 px-4 py-1 rounded-full text-sm font-bold inline-block mb-3 shadow-sm border border-teal-100">
                    {equipment.badge} Machine
                </span>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-2">{equipment.name}</h1>
            <p className="text-gray-400 font-mono text-sm dir-ltr" dir="ltr">{equipment.description}</p>
        </div>

        {/* === TOP SECTION (Overview & Image) === */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 mb-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Right: Overview & Specs */}
                <div>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                            <i className="far fa-file-alt text-teal-500"></i>
                            نظرة عامة
                        </h3>
                        <p className="text-gray-600 leading-loose text-lg text-justify">
                            {equipment.overview || "لا يوجد وصف متاح لهذا الجهاز حالياً."}
                        </p>
                    </div>

                    {techSpecs.length > 0 && (
                        <div>
                            <h4 className="text-lg font-bold text-blue-800 mb-4 opacity-90">المواصفات التقنية</h4>
                            <ul className="space-y-3">
                                {techSpecs.map((spec, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <i className="fas fa-check-circle text-teal-400 text-sm"></i>
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Left: Image & Trust Badges */}
                <div className="relative">
                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-6 group">
                        <img 
                            src={equipment.image_url} 
                            alt={equipment.name} 
                            className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                            <i className="fas fa-shield-alt"></i> معتمد من وزارة الصحة
                        </div>
                    </div>

                    {/* 3 Small Cards Below Image */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
                            <i className="fas fa-shield-alt text-teal-500 text-2xl mb-2"></i>
                            <h5 className="font-bold text-gray-800 text-sm">آمن</h5>
                            <span className="text-xs text-gray-400">معتمد</span>
                        </div>
                        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
                            <i className="fas fa-bolt text-teal-500 text-2xl mb-2"></i>
                            <h5 className="font-bold text-gray-800 text-sm">دقة</h5>
                            <span className="text-xs text-gray-400">عالية</span>
                        </div>
                        <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm text-center">
                            <i className="fas fa-info-circle text-teal-500 text-2xl mb-2"></i>
                            <h5 className="font-bold text-gray-800 text-sm">تقنية</h5>
                            <span className="text-xs text-gray-400">حديثة</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* === BOTTOM SECTION (Details Grid) === */}
        <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Card 1: Medical Benefits & Uses (Right) */}
            <div className="bg-blue-50/50 rounded-[2rem] p-8 md:p-10 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">الفوائد الطبية</h3>
                
                <ul className="space-y-4 mb-10">
                    {medicalBenefits.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs flex-shrink-0">
                                <i className="fas fa-check"></i>
                            </div>
                            <span className="text-gray-700 font-bold">{item}</span>
                        </li>
                    ))}
                </ul>

                <h4 className="text-lg font-bold text-blue-800 mb-6 text-center opacity-80">الاستخدامات الطبية</h4>
                <div className="flex flex-wrap justify-center gap-2">
                    {medicalUses.map((use, idx) => (
                        <span key={idx} className="bg-white text-blue-900 px-4 py-2 rounded-xl text-sm font-medium shadow-sm border border-blue-100 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                            {use}
                        </span>
                    ))}
                </div>
            </div>

            {/* Card 2: Technical Features (Left) */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">المميزات التقنية</h3>
                
                <ul className="space-y-5">
                    {advancedFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-end gap-3 text-right">
                             <span className="text-gray-600 font-medium">{feature}</span>
                             <i className="far fa-check-circle text-teal-500 text-lg flex-shrink-0"></i>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

        {/* === CTA Footer Banner === */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-teal-600 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">تعرف على المزيد من الأجهزة</h2>
                <p className="text-blue-100 mb-8">نوفر أحدث الأجهزة الطبية لتشخيص دقيق وآمن</p>
                <Link to="/scans" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
                    عرض جميع الأجهزة
                    <i className="fas fa-arrow-left"></i>
                </Link>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

      </div>
    </div>
  );
}