'use client';

import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image?: string;
  excerpt: string;
  content?: string;
}

export default function NewsUpdates() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: 'Annual Sports Day 2024 - Spectacular Success',
      date: '2024-04-15',
      category: 'Events',
      image: '🏃',
      excerpt: 'Our annual sports day was a grand success with 500+ students participating in various athletic events.',
      content: 'Our annual sports day was a grand success with 500+ students participating in various athletic events. The event showcased the talents and athletic abilities of our students. Congratulations to all participants and winners!'
    },
    {
      id: 2,
      title: 'Science Exhibition Winners Announced',
      date: '2024-04-10',
      category: 'Academic',
      image: '🔬',
      excerpt: 'Brilliant innovative projects showcased by our science students in the annual science exhibition.',
      content: 'Brilliant innovative projects showcased by our science students in the annual science exhibition. Several projects earned state-level recognition and appreciation.'
    },
    {
      id: 3,
      title: 'Board Exam Results - Outstanding Performance',
      date: '2024-04-05',
      category: 'Academics',
      image: '📊',
      excerpt: '95% pass rate achieved in board exams with 120+ students scoring above 90%.',
      content: '95% pass rate achieved in board exams with 120+ students scoring above 90%. Our students have shown exceptional dedication and hard work this year.'
    },
    {
      id: 4,
      title: 'Cultural Program - Colors of India',
      date: '2024-03-28',
      category: 'Culture',
      image: '🎭',
      excerpt: 'A spectacular cultural program celebrating Indian traditions and diversity.',
      content: 'A spectacular cultural program celebrating Indian traditions and diversity. Students performed classical dances, songs, and skits showcasing our rich cultural heritage.'
    },
    {
      id: 5,
      title: 'New Computer Lab Inaugurated',
      date: '2024-03-20',
      category: 'Infrastructure',
      image: '💻',
      excerpt: 'State-of-the-art computer lab with 50 latest computers inaugurated for coding and programming.',
      content: 'State-of-the-art computer lab with 50 latest computers inaugurated for coding and programming. The lab is equipped with the latest software for development and learning.'
    },
    {
      id: 6,
      title: 'Student Scholarship Program - 50 Recipients',
      date: '2024-03-15',
      category: 'Scholarships',
      image: '🎓',
      excerpt: '50 deserving students received scholarships based on merit and financial need this year.',
      content: '50 deserving students received scholarships based on merit and financial need this year. This initiative aims to support talented students to pursue their dreams.'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              📰 Latest Updates
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            School News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about our latest achievements, events, and announcements 📢
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {newsData.map((news, index) => (
            <div
              key={news.id}
              onClick={() => setSelectedNews(news)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              {/* News image/icon area */}
              <div className="bg-gradient-to-br from-blue-400 to-amber-300 h-40 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>
                </div>
                <div className="text-6xl relative z-10 group-hover:scale-110 transition-transform">{news.image}</div>
              </div>

              {/* News content */}
              <div className="p-6">
                {/* Category badge */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {news.category}
                  </span>
                </div>

                {/* Date */}
                <p className="text-xs text-gray-500 mb-3">
                  {new Date(news.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors font-poppins">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {news.excerpt}
                </p>

                {/* Read more link */}
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  <span>Read More</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for news details */}
        {selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-96 overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-amber-500 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white font-poppins">{selectedNews.title}</h2>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-all"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedNews.category}
                  </span>
                  <p className="text-gray-500 text-sm">
                    {new Date(selectedNews.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {selectedNews.content || selectedNews.excerpt}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* All News Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">More News Coming Soon</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to get the latest updates from SRPSS directly to your inbox.
          </p>
          <form className="flex gap-4 max-w-medium mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-600"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
