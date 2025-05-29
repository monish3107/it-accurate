import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      logo: "Logo",
      title: "Career Advisors",
      description: "Consulting excellence at a global scale",
      stat: "More than 80% of graduates found employment within three months of completing the program.",
      cta: "Apply Now"
    },
    {
      logo: "Logo",
      title: "Industry Experts",
      description: "Learn from the best in the business",
      stat: "92% of students reported significant career growth within 6 months of course completion.",
      cta: "Enroll Today"
    },
    {
      logo: "Logo",
      title: "Global Certification",
      description: "Recognized credentials worldwide",
      stat: "Our certifications are accepted by 100+ Fortune 500 companies globally.",
      cta: "Get Certified"
    },
    {
      logo: "Logo",
      title: "Hands-on Training",
      description: "Real-world project experience",
      stat: "Students complete an average of 15+ practical projects during their training.",
      cta: "Start Learning"
    },
    {
      logo: "Logo",
      title: "24/7 Support",
      description: "Always here to help you",
      stat: "98% satisfaction rate with our student support and mentorship program.",
      cta: "Get Support"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-lg font-semibold text-purple-600 mb-2">
              {testimonials[currentIndex].logo}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {testimonials[currentIndex].title}
            </h3>
            <p className="text-gray-600 mb-4">
              {testimonials[currentIndex].description}
            </p>
            <p className="text-sm text-gray-500 italic mb-6">
              {testimonials[currentIndex].stat}
            </p>
            <button className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors">
              {testimonials[currentIndex].cta}
            </button>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-purple-900" size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-purple-900" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-purple-900' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;