'use client';
import { useEffect, useState } from 'react';

export default function StudentDashboard() {
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('latestBooking');
    if (saved) {
      setBooking(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-emerald-400">لوحة تحكم الطالب 🎓</h1>
          <p className="text-xs text-slate-400 mt-1">مرحباً بك. متابعة حصصك القادمة ودروس الحفظ والمقامات.</p>
        </div>
        <a href="/student/book" className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-lg">
          + حجز حصة جديدة
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl space-y-4 shadow-xl">
          <h3 className="font-bold text-white text-sm border-b border-slate-700 pb-2">📅 حصتك القادمة المحجوزة</h3>
          {booking ? (
            <div className="space-y-2 text-xs text-slate-300">
              <p><strong className="text-emerald-400">المسار:</strong> {booking.track}</p>
              <p><strong className="text-emerald-400">المعلم:</strong> {booking.teacher}</p>
              <p><strong className="text-emerald-400">التاريخ:</strong> {booking.date}</p>
              <p><strong className="text-emerald-400">الوقت:</strong> {booking.time}</p>
            </div>
          ) : (
            <p className="text-xs text-slate-400">لا توجد حصص محجوزة حالياً.</p>
          )}
        </div>
      </div>
    </div>
  );
}