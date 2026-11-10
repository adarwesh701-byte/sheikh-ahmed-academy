'use client';
import { useState } from 'react';
import { ar } from '@/locales/ar';
import { en } from '@/locales/en';

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const t = lang === 'ar' ? ar : en;

  return (
    <div className={`min-h-screen bg-slate-900 text-slate-100 ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-slate-800 border-b border-emerald-500/30 sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-emerald-600/30">أ</div>
          <div>
            <h1 className="text-lg font-bold text-emerald-400">{t.brandTitle}</h1>
            <p className="text-xs text-slate-400">{t.brandSub}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-xl text-xs text-emerald-400 font-bold">
            {lang === 'ar' ? 'English 🇺🇸' : 'العربية 🇸🇦'}
          </button>
          <a href="#booking" className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-extrabold shadow-lg animate-pulse">
            {t.trialBtn}
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <div className="bg-gradient-to-br from-slate-800 to-slate-800/80 border border-slate-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl space-y-6">
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-500/30">
            مرحباً بكم في منصة الشيخ أحمد الخاصة
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight" dangerouslySetInnerHTML={{ __html: t.heroTitle }}></h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">{t.heroDesc}</p>
          <div className="pt-4">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition">
              {t.bookNow}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}