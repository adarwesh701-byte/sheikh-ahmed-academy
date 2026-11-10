'use client';
import { useState } from 'react';

export default function TeacherDashboard() {
  const [availableSlots, setAvailableSlots] = useState([
    '10:00 AM - 11:00 AM',
    '04:00 PM - 05:00 PM'
  ]);
  const [newSlot, setNewSlot] = useState('');

  const handleAddSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSlot && !availableSlots.includes(newSlot)) {
      setAvailableSlots([...availableSlots, newSlot]);
      setNewSlot('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4 border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-amber-400">لوحة تحكم المعلم 📖</h1>
          <p className="text-xs text-slate-400 mt-1">مرحباً بك فضيلة الشيخ. يمكنك هنا إدارة جدول مواعيدك وتقييم الطلاب.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* إضافة مواعيد جديدة */}
        <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl space-y-4 shadow-xl">
          <h3 className="font-bold text-white text-sm border-b border-slate-700 pb-2">⏰ إدارة الأوقات المتاحة للحجز</h3>
          <form onSubmit={handleAddSlot} className="flex gap-2">
            <input 
              type="text" 
              placeholder="مثال: 06:00 PM - 07:00 PM"
              value={newSlot}
              onChange={(e) => setNewSlot(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
            />
            <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition">
              إضافة موعد
            </button>
          </form>

          <div className="space-y-2 pt-2">
            <p className="text-xs text-slate-400">المواعيد المعروضة حالياً للطلاب:</p>
            <div className="flex flex-wrap gap-2">
              {availableSlots.map((slot, index) => (
                <span key={index} className="bg-slate-900 border border-slate-700 text-amber-400 px-3 py-1.5 rounded-lg text-xs font-mono">
                  {slot}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* الحصص القادمة للشيخ */}
        <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl space-y-4 shadow-xl">
          <h3 className="font-bold text-white text-sm border-b border-slate-700 pb-2">👥 الطلاب المسجلون بحصصك</h3>
          <div className="space-y-3 text-xs">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 flex justify-between items-center">
              <div>
                <div className="font-bold text-white">الطالب: محمد أحمد</div>
                <div className="text-slate-400 text-[11px]">مسار: المقامات والتجويد</div>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded-md font-bold">اليوم 04:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}