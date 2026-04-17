export default function TopperList() {
  const toppers = [
    {
      className: 'Class 5',
      students: [
        { name: 'Ananya Singh', percentage: '98.4%' },
        { name: 'Rohan Kumar', percentage: '97.8%' },
        { name: 'Mira Patel', percentage: '97.2%' },
      ],
    },
    {
      className: 'Class 8',
      students: [
        { name: 'Aditya Yadav', percentage: '96.9%' },
        { name: 'Sonal Verma', percentage: '96.5%' },
        { name: 'Priya Sharma', percentage: '96.2%' },
      ],
    },
    {
      className: 'Class 10',
      students: [
        { name: 'Nikhil Gupta', percentage: '99.0%' },
        { name: 'Aarti Mishra', percentage: '98.6%' },
        { name: 'Vikas Singh', percentage: '98.0%' },
      ],
    },
    {
      className: 'Class 12',
      students: [
        { name: 'Meera Tiwari', percentage: '99.3%' },
        { name: 'Ankit Kumar', percentage: '98.8%' },
        { name: 'Riya Patel', percentage: '98.4%' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🏅 Top Achievers
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900 font-poppins">Class Toppers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Celebrating the highest performers from each key class level at SRPSS.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {toppers.map((group) => (
            <div key={group.className} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-poppins">{group.className}</h3>
              <div className="space-y-4">
                {group.students.map((student) => (
                  <div key={student.name} className="rounded-3xl bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">{student.name}</p>
                    <p className="text-sm text-slate-600">{student.percentage} - Topper</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
