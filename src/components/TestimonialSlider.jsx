import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { name: 'John Doe', company: 'Tech Innovators', quote: 'Digital Helper transformed our online presence. Our traffic has increased by 200% since working with them!' },
  { name: 'Jane Smith', company: 'Global Solutions', quote: 'The team at Digital Helper is incredibly knowledgeable and responsive. They've been instrumental in our digital growth.' },
  { name: 'Mike Johnson', company: 'E-commerce Experts', quote: 'We've seen a significant boost in our conversion rates thanks to Digital Helper's strategies.' },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.company}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;