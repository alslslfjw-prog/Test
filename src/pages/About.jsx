import React from 'react';
import { 
  Quote, Target, Eye, Star, Heart, 
  UserCheck, Users, Shield, Briefcase 
} from 'lucide-react';

const About = () => {
  return (
    <div className="font-sans text-gray-800 bg-white" dir="rtl">

      {/* 1. Hero Section */}
      <header className="relative py-20 bg-gradient-to-r from-blue-900 to-teal-500 text-white text-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">من نحن</h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              مرحباً بكم في مركز "المدينة" الطبي! نعمل على إحداث فرق مدعومًا بالتطوير التكنولوجي، والتحول إلى السجل الطبي الإلكتروني لتحسين الخدمات الطبية المقدمة على مستوى المنطقة.
            </p>
        </div>
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </header>

      {/* 2. Who We Are (معلومات عنا) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-teal-600 font-bold text-xl mb-2">معلومات عنا</h2>
                <h3 className="text-3xl font-bold text-blue-900">نبذة عن مركز المدينة الطبي</h3>
            </div>

            <div className="relative p-8 md:p-12 bg-blue-50 rounded-3xl border border-blue-100 leading-loose text-gray-700 text-lg text-justify shadow-sm">
                <Quote className="absolute -top-6 right-8 text-blue-200 bg-white rounded-full p-2 w-12 h-12 shadow-sm" />

                <p className="mb-6">
                    "المدينة" هو مركز طبي رائد في مجال الخدمات الطبية بالمنطقة، كان له الأثر الأول في خلق نواة التنافس بين النظراء في مواكبة التقنيات الطبية الحديثة.
                </p>
                <p className="mb-6">
                    تأسس مركز "المدينة" في العام 2008، وبدأ رحلته بأحدث ما توصلت إليه التكنولوجيا والتقنيات الطبية مما ثبت نجاحه وفعاليته نظريًا وسريرياً. استقطب الكوادر الطبية المؤهلة، وفعل نظام الشراكة مع المنشآت والمختبرات الطبية الأخرى، فأحدث تغييرًا إيجابيًا ملحوظًا شق له الطريق نحو الريادة. ومنذ البداية يتزايد عدد الوافدين من المرضى والمتعاملين ليصبح مرجعية لكثير من الخدمات الطبية.
                </p>
                <p>
                    بعد نجاحه في حوسبة وأتمتة قسم مختبرات التشخيصية، يسعى مركز "المدينة" اليوم إلى تحويل وحدات المنشأة بأكملها إلى العمل بنظام "السجل الطبي الإلكتروني"، حيث يتحول نظام المواعيد والحجوزات وسجلات المرضى إلى ملفات رقمية لتقديم الخدمات الطبية السريعة والآمنة، وتوفير الوقت والجهد على الطبيب والمريض.
                </p>

                <Quote className="absolute -bottom-6 left-8 text-blue-200 bg-white rounded-full p-2 w-12 h-12 rotate-180 shadow-sm" />
            </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">

            {/* Vision */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-teal-50 rounded-br-[4rem] transition group-hover:bg-teal-500"></div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 group-hover:text-white transition duration-300">
                        <Eye size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        نسعى لإحداث فرق في جودة الخدمات الطبية المقدمة وفق المعايير والممارسات الدولية.
                    </p>
                </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[4rem] transition group-hover:bg-blue-600"></div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                        <Target size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">رسالتنا</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        صناعة نموذج فريد لخدمات طبية متميزة من خلال استقطاب الكوادر الطبية المؤهلة، وتوظيف التقنيات الحديثة، مع الالتزام المستمر بمعايير الجودة وسلامة المرضى.
                    </p>
                </div>
            </div>

        </div>
      </section>

      {/* 4. Values (قيمنا) */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-16">قيمنا الراسخة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* 1. Excellence */}
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-blue-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-blue-600 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                        <Star size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">التميز</h3>
                </div>

                {/* 2. Morals */}
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-teal-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-teal-500 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition">
                        <Heart size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">التحلي بمكارم الأخلاق</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">الصدق، الأمانة، التواضع، الاحترام، الصبر، والعدل.</p>
                </div>

                {/* 3. Self-Accountability */}
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-purple-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-purple-600 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                        <UserCheck size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">محاسبة النفس</h3>
                </div>

                {/* 4. Teamwork */}
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-orange-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-orange-500 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition">
                        <Users size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">العمل بروح الفريق</h3>
                </div>

                {/* 5. Safety */}
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-red-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-red-500 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition">
                        <Shield size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">السلامة</h3>
                    <p className="text-sm text-gray-500">الالتزام الدائم بالمحافظة على سلامة المرضى والبيئة.</p>
                </div>

                {/* 6. Responsibility */}
                <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-indigo-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-indigo-500 rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition">
                        <Briefcase size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">المسؤولية</h3>
                    <p className="text-sm text-gray-500">العمل الفعّال وتحمل المسؤولية المالية.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Goals (أهدافنا) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-blue-900">أهدافنا الاستراتيجية</h2>
                <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                
                {[
                    { title: "مركز متميز", desc: "إنشاء وتطوير مركز متميز في كفاءة وخدمات يشمل على كافة الأقسام والتخصصات والعيادات لتقديم خدمات طبية راقية وفق أحدث المبادئ العلمية." },
                    { title: "رضا المرضى", desc: "التركيز الدائم على رضا المرضى كمحور أساسي، وتقديم الخدمات في بيئة آمنة وبأسعار مناسبة لكافة فئات المجتمع، لاسيما الفقراء وذوي الاحتياج." },
                    { title: "التدريب والتأهيل", desc: "التركيز المتواصل على تدريب وتأهيل كوادر الطبية والتمريضية مع تشجيع البحث وتوفير البيئة المناسبة لذلك." },
                    { title: "خدمة 24 ساعة", desc: "تقديم الخدمات الطبية التشخيصية للمرضى على مدار الساعة، مع التعاون المثمر الطبي بمختلف التخصصات." },
                    { title: "فرص عمل", desc: "المساهمة في توفير فرص عمل للأطباء والمختبرين والعاملين في المجال الصحي ذوي الخبرات والكفاءات المتميزة." },
                    { title: "دعم الطلاب", desc: "العمل على توفير فرص تدريب لطلاب الجامعات المنتدبين لتنمية مهارات وقدرات الكوادر الطبية في كافة التخصصات، لا سيما علوم المختبرات." }
                ].map((goal, index) => (
                    <div key={index} className="flex items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition group border border-gray-100">
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-teal-500 ml-4 opacity-30 group-hover:opacity-50 transition min-w-[3rem]">
                            {`0${index + 1}`}
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-blue-900 mb-2">{goal.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{goal.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
      </section>

    </div>
  );
};

export default About;