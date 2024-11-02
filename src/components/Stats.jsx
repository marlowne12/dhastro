import React from 'react';

const stats = [
  { number: '500+', label: 'Clients Served' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '150%', label: 'Average ROI' },
  { number: '24/7', label: 'Support Available' }
];

function Stats() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;