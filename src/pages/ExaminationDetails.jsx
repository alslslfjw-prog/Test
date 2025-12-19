import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { 
  ArrowRight, Activity, Microscope, Zap, Dna, Droplet, Shield, Bug, CheckCircle, Cpu 
} from 'lucide-react';

export default function ExaminationDetails() {
  const { id } = useParams();
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- STATIC DATA FROM YOUR IMAGES ---
  // This augments the basic DB data with the detailed device info from your photos.
  const detailedInfo = {
    "Parasitology": { // Must match 'title_en' or 'title' from your DB
      description: "يهتم القسم بكشف ومراقبة الطفيليات التي قد تؤثر على صحة المرضى، ويعني بتقديم تحليل شامل ومفصل للحالات المختلفة. يشمل القسم أيضاً تقديم تحليل شامل للسائل المنوي، مما يعزز قدرته على تقييم جودة الحيوانات المنوية بشكل دقيق.",
      devices: [
        { name: "MIRALAB SPERMOLYZER", desc: "لتحليل السائل المنوي وتحديد مشاكل الإنجاب بدقة عالية." },
        { name: "Advanced Microscopes", desc: "مجاهر ضوئية متقدمة لفحص العينات والكشف عن الطفيليات." }
      ]
    },
    "Autoimmune Department": {
      description: "يُعنى قسم المناعة الذاتية بتشخيص الاضطرابات الذاتية المناعية باستخدام تقنيات متقدمة. يشمل القسم تحليل مجموعة واسعة من الأجسام المضادة لتحديد المشكلات المناعية بدقة.",
      devices: [
        { name: "Snibe MAGLUMI 800", desc: "لتحليل الأجسام المضادة مثل ANA, ASMA, AMA, Anti-dsDNA." },
        { name: "YHLO iFlash 1800", desc: "يستخدم لاختبارات متعددة بتقنية CLIA لقياس تركيز الهرمونات والفيتامينات ودلائل الأورام." },
        { name: "OLYMPUS – BX43", desc: "مجهر ضوئي متقدم يتم استخدامه لفحص الأجسام المضادة الذاتية وغيرها من التحليلات المعقدة." }
      ]
    },
    "Immunology Department": {
      description: "يُعنى قسم المناعة بتقديم تشخيص دقيق وشامل للأمراض المعدية والفيروسية باستخدام أحدث الأجهزة والتقنيات. يركز القسم على تحليل مؤشرات حيوية أساسية لفهم الحالة الصحية للمريض بشكل أفضل وتحديد العلاج الأنسب.",
      devices: [
        { name: "Roche Cobas e411", desc: "جهاز متقدم لإجراء فحوصات دقيقة للأمراض المعدية مثل فيروس نقص المناعة (HIV) والتهاب الكبد الوبائي." },
        { name: "Abbott ARCHITECT i1000SR", desc: "جهاز متطور يوفر تحليلاً دقيقاً للأمراض المعدية والفيروسية، بما في ذلك مستويات الفيتامينات." },
        { name: "BECKMAN Access2", desc: "يستخدم لتحليل مؤشرات حيوية هامة تتعلق بالأمراض المعدية ومستويات الأجسام المضادة." }
      ]
    },
    "Molecular Biology Department": {
      description: "يُعنى القسم بإجراء فحوصات متقدمة تعتمد على تقنيات الـ PCR لتقديم تشخيص دقيق للأمراض الفيروسية والبكتيرية على المستوى الجيني.",
      devices: [
        { name: "Analytik Jena - qTOWER 3", desc: "جهاز متقدم لعمل تحليل دقيق للتعبير الجيني والحمض النووي." },
        { name: "Cepheid GeneXpert 4-2L", desc: "جهاز حديث يوفر نتائج دقيقة وسريعة لاختبارات الحمض النووي." },
        { name: "PCR Clean Rooms", desc: "غرف مجهزة بأحدث التقنيات لضمان أعلى مستويات الدقة والأمان ومنع التلوث." }
      ]
    },
    "Microbiology Department": {
      description: "يُعنى القسم بتشخيص الأمراض البكتيرية من خلال تقنيات متقدمة تساعد في تحديد الأنواع البكتيرية واختبار حساسيتها للأدوية والمضادات الحيوية.",
      devices: [
        { name: "BIOMERIEUX BACT/ALERT 3D 60", desc: "نظام متطور لتسريع عملية الزرع والكشف عن نمو البكتيريا في وقت قياسي." },
        { name: "BIOMERIEUX – VITEK 2", desc: "جهاز متقدم لزرع وتحديد البكتيريا وتحليل حساسيتها تجاه الأدوية بدقة عالية." },
        { name: "BSC-1100IIA2-X", desc: "كابينة أمان بيولوجي لحماية المستخدم والعينات والبيئة من التلوث." }
      ]
    },
    "Hematology Department": {
      description: "يُعنى قسم أمراض الدم بتقديم تشخيص شامل ودقيق لحالات الدم عبر استخدام تقنيات وأجهزة متطورة. يركز القسم على تحليل مؤشرات الدم المختلفة (CBC)، فحص وظائف التجلط، وتشخيص فقر الدم.",
      devices: [
        { name: "Beckman – DxH 520", desc: "جهاز يوفر نتائج دقيقة لتحليل خلايا الدم مع تمييز الأنواع المختلفة لخلايا الدم البيضاء." },
        { name: "Mindray BC-5800", desc: "جهاز تحليل الدم الآلي يستخدم لتقديم تحليل شامل لمكونات الدم (CBC)." },
        { name: "Helena – SAS 2", desc: "نظام أوتوماتيكي كامل لتحليل الجل (Electrophoresis)، يُستخدم في اختبار الهيموجلوبين والبروتينات." },
        { name: "Lifetronic – H8", desc: "جهاز متخصص يستخدم في تحليل هيموجلوبين الدم (HbA1c)." },
        { name: "DYMEX – GH-901", desc: "جهاز يوفر نتائج دقيقة لتحليل خلايا الدم." }
      ]
    },
    "Chemistry Department": {
      description: "يُعنى القسم بتقديم تحليل شامل ودقيق لمجموعة متنوعة من الفحوصات الكيميائية الحيوية. يركز القسم على تقييم الحالة الصحية العامة (وظائف الكلى، الكبد، السكر، الدهون) لتقديم نتائج دقيقة تدعم التشخيص.",
      devices: [
        { name: "ROCHE - COBAS INTEGRA 400 Plus", desc: "جهاز متقدم يقدم تحليلاً شاملاً للفحوصات الكيميائية بما في ذلك تقييم وظائف الكبد والكلى." },
        { name: "Biosystem BA200", desc: "لتحليل العينات البيوكيميائية مثل تحليل الإنزيمات والبروتينات." },
        { name: "Roche 9180", desc: "أداة مهمة في تشخيص ومراقبة التوازن الكهربائي والحمضي القاعدي في الجسم (Electrolytes)." },
        { name: "Erba – ec-90", desc: "جهاز تحليل كهربائي يستخدم لتحليل مكونات الدم والسوائل الجسدية (الصوديوم، البوتاسيوم)." }
      ]
    }
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('examinations')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) throw error;
        setSection(data);
      } catch (error) {
        console.error("Error fetching section:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-teal-600 font-bold">جاري تحميل البيانات...</div>;
  if (!section) return <div className="min-h-screen flex items-center justify-center text-red-500">القسم غير موجود</div>;

  // Merge DB data with our Static Image Data
  // We try to match by English Title first, then fall back to DB description
  const info = detailedInfo[section.title_en] || detailedInfo[section.title] || {
    description: section.description,
    devices: []
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen" dir="rtl">
      
      {/* 1. Hero Header */}
      <div className={`relative ${section.header_color || 'bg-blue-900'} text-white py-20 overflow-hidden`}>
        <div className="container mx-auto px-6 relative z-10">
            <Link to="/examinations" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition text-sm font-bold">
                <ArrowRight size={16} className="ml-2" />
                العودة لقائمة الفحوصات
            </Link>
            
            <div className="max-w-3xl">
                <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-mono mb-4 border border-white/20">
                    {section.title_en}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {section.title}
                </h1>
                <p className="text-lg text-white/90 leading-relaxed opacity-90">
                    {info.description}
                </p>
            </div>
        </div>
        {/* Background Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-20 pattern-grid-lg pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* 2. Main Content */}
      <div className="container mx-auto px-6 py-16">
        
        {/* Devices Section */}
        {info.devices && info.devices.length > 0 ? (
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center">
                        <Cpu size={28} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">التقنيات والأجهزة المستخدمة</h2>
                        <p className="text-gray-500 text-sm">نستخدم أحدث التقنيات العالمية لضمان دقة النتائج</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {info.devices.map((device, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg">
                                    <Microscope size={24} />
                                </div>
                                <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">DEVICE {idx + 1}</span>
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2 dir-ltr text-left" dir="ltr">
                                {device.name}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed text-right dir-rtl" dir="rtl">
                                {device.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <Activity size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">تفاصيل الأجهزة لهذا القسم قيد التحديث...</p>
            </div>
        )}

        {/* Quality Assurance Note */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
                <Shield size={48} className="mx-auto mb-6 text-teal-400" />
                <h3 className="text-2xl font-bold mb-4">معايير الجودة والسلامة</h3>
                <p className="text-blue-100 leading-relaxed mb-8">
                    نلتزم في مختبرات المدينة بأعلى معايير الجودة العالمية (ISO) ونطبق برامج صارمة لمراقبة الجودة الداخلية والخارجية لضمان دقة كل نتيجة تصدر عن مختبرنا.
                </p>
                <Link to="/checkout" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition">
                    حجز موعد للفحص
                </Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>

      </div>
    </div>
  );
}