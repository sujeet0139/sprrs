'use client';

import { useState, useEffect } from 'react';

interface Birthday {
  id: number;
  name: string;
  date: string;
  class: string;
  image?: string;
}

export default function StudentBirthday() {
  const [birthdays, setBirthdays] = useState<Birthday[]>([]);
  const [upcomingBirthdays, setUpcomingBirthdays] = useState<Birthday[]>([]);

  useEffect(() => {
    // Sample birthday data - can be replaced with API call
    const birthdayData: Birthday[] = [
      { id: 1, name: 'Arjun Singh', date: '2024-04-18', class: '10-A', image: '👦' },
      { id: 2, name: 'Priya Sharma', date: '2024-04-20', class: '9-B', image: '👧' },
      { id: 3, name: 'Rahul Kumar', date: '2024-04-22', class: '8-C', image: '👦' },
      { id: 4, name: 'Anjali Singh', date: '2024-04-25', class: '11-A', image: '👧' },
      { id: 5, name: 'Vikram Patel', date: '2024-04-28', class: '7-B', image: '👦' },
      { id: 6, name: 'Neha Verma', date: '2024-05-02', class: '12-A', image: '👧' },
    ];

    setBirthdays(birthdayData);

    // Filter upcoming birthdays (next 30 days)
    const today = new Date();
    const next30Days = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);

    const upcoming = birthdayData.filter(bd => {
      const birthDate = new Date(bd.date);
      return birthDate >= today && birthDate <= next30Days;
    });

    setUpcomingBirthdays(upcoming);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              🎂 Celebrate Our Stars
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            Student Birthdays
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating the special days of our wonderful students 🎉
          </p>
        </div>

        {/* Upcoming Birthdays */}
        {upcomingBirthdays.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-poppins text-center">
              🌟 Upcoming Birthdays This Month
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingBirthdays.map((birthday, index) => (
                <div
                  key={birthday.id}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Card background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-amber-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  <div className="relative p-8">
                    {/* Birthday avatar */}
                    <div className="flex justify-center mb-4">
                      <div className="text-6xl animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                        {birthday.image || '🎈'}
                      </div>
                    </div>

                    {/* Birthday info */}
                    <h4 className="text-xl font-bold text-gray-900 text-center mb-2 font-poppins">
                      {birthday.name}
                    </h4>
                    <p className="text-gray-600 text-center mb-3">
                      Class {birthday.class}
                    </p>

                    {/* Birthday date */}
                    <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg p-3 text-center mb-4">
                      <p className="text-sm text-gray-500">Birthday Date</p>
                      <p className="text-lg font-bold text-blue-700">
                        {new Date(birthday.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>

                    {/* Birthday emoji decoration */}
                    <div className="flex justify-center gap-2 mb-4">
                      <span className="text-2xl">🎂</span>
                      <span className="text-2xl">🎉</span>
                      <span className="text-2xl">🎁</span>
                    </div>

                    {/* Birthday message */}
                    <p className="text-center text-sm text-gray-600 italic">
                      "Wishing you a fantastic birthday!"
                    </p>
                  </div>

                  {/* Right border accent */}
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-amber-500"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Birthdays Calendar View */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-poppins">
            📅 All Student Birthdays
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {birthdays.map((birthday) => (
              <div
                key={birthday.id}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl hover:from-blue-100 hover:to-amber-100 transition-all duration-300 border border-blue-100"
              >
                <div className="text-4xl flex-shrink-0">
                  {birthday.image || '👤'}
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900">{birthday.name}</h4>
                  <p className="text-sm text-gray-600">Class {birthday.class}</p>
                  <p className="text-xs text-blue-600 font-semibold mt-1">
                    {new Date(birthday.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Birthday wishes section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0">🎂</div>
            <div className="absolute top-4 right-10">🎉</div>
            <div className="absolute bottom-4 left-8">🎁</div>
            <div className="absolute bottom-0 right-8">⭐</div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 font-poppins">
              ✨ We Celebrate YOU! ✨
            </h3>
            <p className="text-lg mb-6 text-blue-100">
              Every student birthday is special at Shri Rama Prasad Singh Shiksha Sansthan. 
              We believe in celebrating each child's unique journey and achievements!
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn More About Our Culture
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
