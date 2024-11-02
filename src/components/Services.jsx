import React from 'react';

const services = [
  {
    title: 'Digital Strategy',
    description: 'Custom-tailored digital strategies to achieve your business goals',
    icon: '🎯'
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive websites that convert visitors into customers',
    icon: '💻'
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search rankings and drive organic traffic',
    icon: '📈'
  },
  {
    title: 'Content Marketing',
    description: 'Engaging content that resonates with your target audience',
    icon: '✍️'
  }
];

function Services() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Our Services</h2>
          <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Comprehensive digital solutions for your business growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;