import React from 'react';

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Transform Your Digital Presence?
          </h2>
          <p 
            className="text-xl mb-8 opacity-90"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join hundreds of successful businesses that have already taken their digital journey to the next level.
          </p>
          <button 
            className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;