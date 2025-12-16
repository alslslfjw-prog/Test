import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { CheckCircle, Calendar, Clock, CreditCard, User } from 'lucide-react';

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Get data from URL (sent by the Widget)
  const type = searchParams.get('type'); // 'doctors' or 'scans'
  const id = searchParams.get('id');
  const date = searchParams.get('date');
  const time = searchParams.get('time');

  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    if (id && type) fetchDetails();
  }, [id]);

  async function fetchDetails() {
    // Fetch the Doctor or Scan info to show the price/name
    const tableName = type === 'scans' ? 'scans' : 'doctors';
    const { data } = await supabase.from(tableName).select('*').eq('id', id).single();
    setItemDetails(data);
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    // 1. Insert into Supabase
    const { error } = await supabase.from('appointments').insert([
      {
        patient_name: formData.name,
        patient_phone: formData.phone,
        patient_email: formData.email,
        appointment_date: date,
        appointment_time: time,
        booking_type: type,
        resource_id: id,
        resource_name: itemDetails?.name, // Backup name
        status: 'pending'
      }
    ]);

    if (error) {
      alert('حدث خطأ أثناء الحجز: ' + error.message);
    } else {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg mx-auto">
          <div className="text-green-500 mb-4 flex justify-center">
            <CheckCircle size={64} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">تم الحجز بنجاح!</h2>
          <p className="text-gray-500 mb-6">سيتم التواصل معك قريباً لتأكيد الموعد.</p>
          <button onClick={() => navigate('/')} className="bg-primary text-white px-8 py-3 rounded-full font-bold">
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  if (loading) return <div className="text-center py-20">جاري تحميل تفاصيل الحجز...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-secondary mb-10">إتمام عملية الحجز</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Left Column: Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-fit">
          <h3 className="font-bold text-lg mb-4 border-b pb-2">ملخص الحجز</h3>
          
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={itemDetails?.image_url || 'https://via.placeholder.com/100'} 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-gray-800">{itemDetails?.name}</p>
              <p className="text-sm text-gray-500">{type === 'doctors' ? itemDetails?.specialty : 'فحص طبي'}</p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary"/>
              <span>التاريخ: {date || 'غير محدد'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary"/>
              <span>الوقت: {time || 'غير محدد'}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t flex justify-between items-center font-bold text-lg">
            <span>الإجمالي:</span>
            <span className="text-primary">{itemDetails?.price} ر.ي</span>
          </div>
        </div>

        {/* Right Column: Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 className="font-bold text-lg mb-4">بيانات المريض</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">الاسم الكامل</label>
              <input 
                required
                type="text" 
                className="w-full border border-gray-300 p-3 rounded-lg focus:border-primary focus:outline-none"
                placeholder="أدخل اسمك هنا"
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">رقم الهاتف</label>
              <input 
                required
                type="tel" 
                className="w-full border border-gray-300 p-3 rounded-lg focus:border-primary focus:outline-none"
                placeholder="05xxxxxxxx"
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            {/* Fake Payment Section */}
            <div className="pt-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">طريقة الدفع</label>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-primary bg-teal-50 text-primary p-3 rounded-lg flex items-center justify-center gap-2 font-bold cursor-pointer">
                  <CreditCard size={18}/> الدفع في المركز
                </div>
                <div className="border border-gray-200 text-gray-400 p-3 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed">
                  <CreditCard size={18}/> بطاقة ائتمان
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-secondary hover:bg-purple-800 text-white font-bold py-3 rounded-xl shadow-lg mt-4 transition">
              تأكيد الحجز الآن
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}