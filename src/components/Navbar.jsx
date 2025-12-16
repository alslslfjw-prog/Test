import { Link } from 'react-router-dom';
import { Phone, User } from 'lucide-react';

export default function Navbar() {
  const logoUrl = "https://jwmcjqsdsibflzsaqeek.supabase.co/storage/v1/object/public/Brand/3d77322e-f0f1-4fe5-b801-1f8709f3148f.png";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-sans" dir="rtl">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo Section - Image Only */}
        <Link to="/" className="flex items-center hover:opacity-90 transition">
          <img 
            src={logoUrl} 
            alt="مركز المدينة الطبي" 
            className="h-16 w-auto object-contain" 
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 font-bold text-gray-600 text-sm">
          <Link to="/" className="hover:text-teal-600 transition">الرئيسية</Link>
          <Link to="/about" className="hover:text-teal-600 transition">عن المركز</Link>
          <Link to="/doctors" className="hover:text-teal-600 transition">ابحث عن طبيب</Link>
          <Link to="/scans" className="hover:text-teal-600 transition">المدينة سكان</Link>
          <Link to="/clinics" className="hover:text-teal-600 transition">العيادات</Link>
          <Link to="/examinations" className="hover:text-teal-600 transition">الفحوصات</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 items-center">
          <a href="tel:777552666" className="hidden lg:flex items-center gap-2 text-blue-900 font-bold hover:text-teal-600 transition" dir="ltr">
            <Phone size={18} className="text-teal-500" />
            <span>777 552 666</span>
          </a>
          
          <button className="bg-teal-500 text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-teal-600 transition shadow-lg shadow-teal-500/20 font-bold text-sm">
            <User size={18} />
            <span>تسجيل الدخول</span>
          </button>
        </div>

      </div>
    </nav>
  );
}