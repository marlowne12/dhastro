import React from 'react';

const features = [
  {
    title: 'Data-Driven Approach',
    description: 'Make informed decisions with comprehensive analytics and insights',
    icon: '📊'
  },
  {
    title: 'Mobile-First Design',
    description: 'Responsive solutions that work perfectly across all devices',
    icon: '📱'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance to help you succeed',
    icon: '🔧'
  }
];

function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Why Choose Us</h2>
          <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Discover the features that set us apart from the competition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;