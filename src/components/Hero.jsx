import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="100">
            We help businesses grow through innovative digital solutions and strategic marketing approaches.
          </p>
          <div className="flex justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;