import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Jadavpur University',
      period: '2022 - 2026',
      side: 'left',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Gorabazar Iswar Chandra Institution',
      period: '2020 - 2022',
      side: 'right',
    },
    {
      degree: 'Secondary Education',
      institution: 'Gorabazar Iswar Chandra Institution',
      period: '2018 - 2020',
      side: 'left',
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-gray-800 via-black to-black" id="education">
      <h2 className="text-white text-6xl font-bold text-center mb-12">Education</h2>

      {/* Timeline container */}
      <div className="relative flex justify-center items-center w-full">
        {/* Vertical line */}
        <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mx-16">
          {educationData.map((education, index) => (
            <div
              key={index}
              className={`relative p-6 bg-white shadow-md rounded-lg w-full lg:w-3/4 ${
                education.side === 'left' ? 'lg:mr-auto text-right' : 'lg:ml-auto text-left'
              }`}
            >
              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{education.degree}</h3>
              <p className="text-gray-600 mb-2">{education.institution}</p>
              <p className="text-gray-500">{education.period}</p>

              {/* Dot connecting to vertical line */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full border-2 border-white ${
                  education.side === 'left' ? '-right-16' : '-left-16'
                }`}
              ></div>

              {/* Arrow */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 ${
                  education.side === 'left'
                    ? 'border-r-8 border-r-red-500 -right-8'
                    : 'border-l-8 border-l-red-500 -left-8'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
