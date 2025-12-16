import React from 'react';

const About = () => {
  return (
    <div className="font-sans text-gray-800 bg-white" dir="rtl">
      
      {/* 1. Hero Section (Gradient Background) */}
      <header className="relative py-20 bg-gradient-to-r from-blue-900 to-teal-500 text-white text-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">عن المركز</h1>
            <p className="text-blue-100 text-lg">نحن هنا لخدمتكم وتوفير أفضل رعاية صحية</p>
        </div>
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </header>

      {/* 2. Who We Are (من نحن) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-teal-600 font-bold text-xl mb-2">من نحن</h2>
            <h3 className="text-3xl font-bold text-blue-900 mb-8">نبذة عن مركز المدينة الطبي</h3>
            
            <div className="relative p-8 bg-blue-50 rounded-2xl border border-blue-100 leading-loose text-gray-600 text-lg">
                {/* Decorative Quotes */}
                <i className="fas fa-quote-right text-4xl text-blue-200 absolute -top-4 right-8 bg-blue-50 px-2"></i>
                
                <p>
                    تأسس مركز المدينة الطبي ليكون صرحاً طبياً متميزاً يقدم خدمات صحية متكاملة وفق أعلى معايير الجودة العالمية. 
                    نحن نؤمن بأن الصحة هي أغلى ما يملكه الإنسان، ولذلك سخرنا كافة إمكانياتنا من كوار طبية مؤهلة وأحدث الأجهزة التقنية 
                    لضمان رحلة علاجية آمنة ومريحة لمرضانا. هدفنا ليس فقط العلاج، بل تعزيز مفهوم الوقاية وجودة الحياة في مجتمعنا.
                </p>
                
                <i className="fas fa-quote-left text-4xl text-blue-200 absolute -bottom-4 left-8 bg-blue-50 px-2"></i>
            </div>
        </div>
      </section>

      {/* 3. Vision & Mission (رؤيتنا ورسالتنا) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden group border border-gray-100">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-[4rem] transition group-hover:bg-blue-600"></div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                        <i className="fas fa-bullseye"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">رسالتنا</h3>
                    <p className="text-gray-500 leading-relaxed">
                        تقديم خدمات طبية تشخيصية وعلاجية متميزة وآمنة، من خلال فريق طبي محترف وتقنيات حديثة، مع الالتزام بأخلاقيات المهنة ومراعاة حقوق المرضى.
                    </p>
                </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition duration-300 relative overflow-hidden group border border-gray-100">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-100 rounded-bl-[4rem] transition group-hover:bg-teal-500"></div>
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-teal-500 group-hover:text-white transition duration-300">
                        <i className="fas fa-eye"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
                    <p className="text-gray-500 leading-relaxed">
                        أن نكون المركز الطبي الرائد والخيار الأول للمرضى في المنطقة، من خلال التميز في الرعاية الصحية والتحسين المستمر لجودة الخدمات.
                    </p>
                </div>
            </div>

        </div>
      </section>

      {/* 4. Values (قيمنا) */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-16">قيمنا الراسخة</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Value 1 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-teal-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-teal-500 rounded-full shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-teal-500 group-hover:text-white transition">
                        <i className="fas fa-hand-holding-heart"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">الرعاية</h3>
                </div>
                {/* Value 2 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-blue-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-blue-600 rounded-full shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                        <i className="fas fa-star"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">التميز</h3>
                </div>
                {/* Value 3 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-purple-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-purple-600 rounded-full shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition">
                        <i className="fas fa-users"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">العمل الجماعي</h3>
                </div>
                {/* Value 4 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-orange-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-orange-500 rounded-full shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-orange-500 group-hover:text-white transition">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">النزاهة</h3>
                </div>
                {/* Value 5 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-red-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-red-500 rounded-full shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-red-500 group-hover:text-white transition">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">الأمان</h3>
                </div>
                {/* Value 6 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-indigo-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-indigo-500 rounded-full shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-indigo-500 group-hover:text-white transition">
                        <i className="fas fa-lightbulb"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">الابتكار</h3>
                </div>
                {/* Value 7 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-green-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-green-600 rounded-full shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-green-600 group-hover:text-white transition">
                        <i className="fas fa-leaf"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">الاستدامة</h3>
                </div>
                {/* Value 8 */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition border border-transparent hover:border-pink-100 group">
                    <div className="w-16 h-16 mx-auto bg-white text-pink-500 rounded-full shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-pink-500 group-hover:text-white transition">
                        <i className="fas fa-smile"></i>
                    </div>
                    <h3 className="font-bold text-gray-800">رضا المريض</h3>
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
                
                {/* Goal 1 */}
                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-teal-500 ml-6 opacity-30">01</div>
                    <div>
                        <h4 className="font-bold text-lg text-blue-900 mb-2">تطوير الخدمات الطبية</h4>
                        <p className="text-gray-500 text-sm">التحديث المستمر للأجهزة والتقنيات الطبية لمواكبة التطور العالمي.</p>
                    </div>
                </div>

                {/* Goal 2 */}
                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-teal-500 ml-6 opacity-30">02</div>
                    <div>
                        <h4 className="font-bold text-lg text-blue-900 mb-2">استقطاب الكفاءات</h4>
                        <p className="text-gray-500 text-sm">جذب أفضل الكوادر الطبية والفنية لضمان تقديم أفضل رعاية ممكنة.</p>
                    </div>
                </div>

                {/* Goal 3 */}
                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-teal-500 ml-6 opacity-30">03</div>
                    <div>
                        <h4 className="font-bold text-lg text-blue-900 mb-2">نشر الوعي الصحي</h4>
                        <p className="text-gray-500 text-sm">تثقيف المجتمع حول أهمية الوقاية والكشف المبكر عن الأمراض.</p>
                    </div>
                </div>

                {/* Goal 4 */}
                <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-teal-500 ml-6 opacity-30">04</div>
                    <div>
                        <h4 className="font-bold text-lg text-blue-900 mb-2">التحول الرقمي</h4>
                        <p className="text-gray-500 text-sm">تطبيق أحدث الأنظمة الإلكترونية لتسهيل إجراءات المرضى وحفظ بياناتهم.</p>
                    </div>
                </div>

                 {/* Goal 5 */}
                 <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-teal-500 ml-6 opacity-30">05</div>
                    <div>
                        <h4 className="font-bold text-lg text-blue-900 mb-2">الجودة والسلامة</h4>
                        <p className="text-gray-500 text-sm">تطبيق معايير الجودة العالمية لضمان سلامة المرضى والموظفين.</p>
                    </div>
                </div>

                 {/* Goal 6 */}
                 <div className="flex items-start bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-teal-500 ml-6 opacity-30">06</div>
                    <div>
                        <h4 className="font-bold text-lg text-blue-900 mb-2">الشراكة المجتمعية</h4>
                        <p className="text-gray-500 text-sm">بناء جسور التواصل مع المجتمع والمؤسسات لتعزيز الصحة العامة.</p>
                    </div>
                </div>

            </div>
        </div>
      </section>

    </div>
  );
};

export default About;