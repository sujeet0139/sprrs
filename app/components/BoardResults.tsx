'use client';

import { useState } from 'react';

type ThemeColors = 'amber' | 'slate' | 'orange' | 'blue';

const themeMap: Record<ThemeColors, { bg: string; text: string; border: string; gradient: string }> = {
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', gradient: 'from-amber-400 to-amber-500' },
  slate: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-200', gradient: 'from-slate-400 to-slate-500' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', gradient: 'from-orange-400 to-orange-500' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
};

const class10Toppers = [
  { name: 'Aarav Kumar', initials: 'AK', classInfo: 'Class 10 · Science', score: '97.2%', rank: 'District Rank #1', medal: '🥇', medalText: 'School Topper', theme: 'amber' as ThemeColors },
  { name: 'Priya Singh', initials: 'PS', classInfo: 'Class 10 · Commerce', score: '95.8%', rank: 'State Merit List', medal: '🥈', medalText: '2nd Place', theme: 'slate' as ThemeColors },
  { name: 'Rohan Verma', initials: 'RV', classInfo: 'Class 10 · Humanities', score: '94.6%', rank: 'School Merit', medal: '🥉', medalText: '3rd Place', theme: 'orange' as ThemeColors },
  { name: 'Sneha Mishra', initials: 'SM', classInfo: 'Class 10 · Science', score: '93.4%', rank: 'School Merit', medal: '⭐', medalText: 'Top 5', theme: 'blue' as ThemeColors },
];

const class12Toppers = [
  { name: 'Kabir Sharma', initials: 'KS', classInfo: 'Class 12 · PCM', score: '98.1%', rank: 'State Rank #5', medal: '🥇', medalText: 'School Topper', theme: 'amber' as ThemeColors },
  { name: 'Ananya Patel', initials: 'AP', classInfo: 'Class 12 · PCB', score: '96.5%', rank: 'District Merit', medal: '🥈', medalText: '2nd Place', theme: 'slate' as ThemeColors },
  { name: 'Vikram Singh', initials: 'VS', classInfo: 'Class 12 · Commerce', score: '95.2%', rank: 'School Merit', medal: '🥉', medalText: '3rd Place', theme: 'orange' as ThemeColors },
  { name: 'Neha Gupta', initials: 'NG', classInfo: 'Class 12 · Humanities', score: '94.8%', rank: 'School Merit', medal: '⭐', medalText: 'Top 5', theme: 'blue' as ThemeColors },
];

export default function BoardResults() {
  const [activeTab, setActiveTab] = useState<'class10' | 'class12'>('class10');
  const currentToppers = activeTab === 'class10' ? class10Toppers : class12Toppers;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 relative z-10">
          <p className="text-blue-700 font-semibold uppercase tracking-wider text-sm">Academic Excellence</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-poppins text-slate-900">Board Results & Toppers 2024–25</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            Celebrating outstanding achievements across Class 10 and Class 12
          </p>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 relative z-10">
          {[
            { label: 'Class 10 Pass Rate', value: '98%' },
            { label: 'Class 12 Pass Rate', value: '95%' },
            { label: 'Students scored 90%+', value: '42' },
            { label: 'District Rank Holders', value: '8' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-lg shadow-blue-900/5 text-center border border-slate-100 transform transition-transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 relative z-10">
          <div className="inline-flex bg-white rounded-full p-1.5 shadow-md border border-slate-200">
            <button 
              onClick={() => setActiveTab('class10')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'class10' ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'}`}
            >
              Class 10 Toppers
            </button>
            <button 
              onClick={() => setActiveTab('class12')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === 'class12' ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'}`}
            >
              Class 12 Toppers
            </button>
          </div>
        </div>

        {/* Toppers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {currentToppers.map((topper, idx) => {
            const theme = themeMap[topper.theme];
            return (
            <div key={idx} className="group relative bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              
              {/* Medal Header */}
              <div className={`px-6 py-3 border-b ${theme.border} ${theme.bg} flex items-center justify-center gap-2`}>
                <span className="text-xl">{topper.medal}</span>
                <span className={`font-bold text-sm uppercase tracking-wide ${theme.text}`}>{topper.medalText}</span>
              </div>

              <div className="p-8 text-center">
                {/* Initials Avatar */}
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${theme.gradient} text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-6 ring-4 ring-white`}>
                  {topper.initials}
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-poppins">{topper.name}</h3>
                <p className="text-slate-500 font-medium text-sm mt-1 mb-4">{topper.classInfo}</p>
                
                <div className="text-3xl font-extrabold text-slate-900 mb-2">
                  {topper.score}
                </div>
                <p className={`text-sm font-semibold ${theme.text}`}>{topper.rank}</p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}