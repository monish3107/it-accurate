import { useRef, useEffect, useState } from 'react';

const TestimonialCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const topCarouselRef = useRef(null);

  const testimonials = [
    { 
      name: "Manasi", 
      company: "TCS", 
      linkedin: "LinkedInManasi",
      image: "/images/testimonials/manasi.jpg"
    },
    { 
      name: "Abhijeet", 
      company: "Transrail Lightning LTD", 
      linkedin: "LinkedInAbhijeet",
      image: "/images/testimonials/abhijeet.jpg"
    },
    { 
      name: "Mayuri", 
      company: "TCS", 
      linkedin: "LinkedInMayuri",
      image: "/images/testimonials/mayuri.jpg"
    },
    { 
      name: "Yogita", 
      company: "HCL", 
      linkedin: "LinkedInYogita",
      image: "/images/testimonials/yogita.jpg"
    },
    { 
      name: "Jasmine", 
      company: "Talentrise Technokrate Pvt Ltd.", 
      linkedin: "LinkedInJasmine",
      image: "/images/testimonials/jasmine.jpg"
    },
    { 
      name: "Yash", 
      company: "JBL", 
      linkedin: "LinkedInYash",
      image: "/images/testimonials/yash.jpg"
    },
    { 
      name: "Apurva", 
      company: "HCL", 
      linkedin: "LinkedInApurva",
      image: "/images/testimonials/apurva.jpg"
    },
    { 
      name: "Aishwarya", 
      company: "Lupin Pharma", 
      linkedin: "LinkedInAishwarya",
      image: "/images/testimonials/aishwarya.jpg"
    },
    { 
      name: "Anshul", 
      company: "TCS", 
      linkedin: "LinkedInAnshul",
      image: "/images/testimonials/anshul.jpg"
    },
    { 
      name: "Harshal", 
      company: "Transrail Lightning LTD", 
      linkedin: "LinkedInHarshal",
      image: "/images/testimonials/harshal.jpg"
    },
    { 
      name: "Hardik", 
      company: "TCS", 
      linkedin: "LinkedInHardik",
      image: "/images/testimonials/hardik.jpg"
    },
    { 
      name: "Rishabh", 
      company: "HCL", 
      linkedin: "LinkedInRishabh",
      image: "/images/testimonials/rishabh.jpg"
    },
    { 
      name: "Nikhil", 
      company: "Talentrise Technokrate Pvt Ltd.", 
      linkedin: "LinkedInNikhil",
      image: "/images/testimonials/nikhil.jpg"
    },
    { 
      name: "Shubham", 
      company: "JBL", 
      linkedin: "LinkedInShubham",
      image: "/images/testimonials/shubham.jpg"
    },
    { 
      name: "Mukul", 
      company: "HCL", 
      linkedin: "LinkedInMukul",
      image: "/images/testimonials/mukul.jpg"
    },
    { 
      name: "Varsha", 
      company: "Lupin Pharma", 
      linkedin: "LinkedInVarsha",
      image: "/images/testimonials/varsha.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (topCarouselRef.current) {
      observer.observe(topCarouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
          Have Cracked Their Dream Job in Top MNC Companies
        </h2>

        {/* Top Carousel */}
        <div ref={topCarouselRef} className="relative mb-8">
          <div className="flex overflow-hidden">
            <div className={`flex ${isVisible ? 'animate-carousel' : ''}`}>
              {testimonials.map((testimonial, index) => (
                <div key={`top-${index}`} className="mx-4 flex-shrink-0 bg-white p-6 rounded-lg shadow-md w-80">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-purple-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      <p className="text-purple-700 text-xs mt-2">{testimonial.linkedin}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name}'s portrait`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Only duplicate first few items instead of all */}
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div key={`top-dup-${index}`} className="mx-4 flex-shrink-0 bg-white p-6 rounded-lg shadow-md w-80">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-purple-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      <p className="text-purple-700 text-xs mt-2">{testimonial.linkedin}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name}'s portrait`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Carousel - Similar structure but reverse animation */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className={`flex ${isVisible ? 'animate-carousel-reverse' : ''}`}>
              {testimonials.map((testimonial, index) => (
                <div key={`bottom-${index}`} className="mx-4 flex-shrink-0 bg-white p-6 rounded-lg shadow-md w-80">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-purple-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      <p className="text-purple-700 text-xs mt-2">{testimonial.linkedin}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name}'s portrait`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* Only duplicate first few items instead of all */}
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div key={`bottom-dup-${index}`} className="mx-4 flex-shrink-0 bg-white p-6 rounded-lg shadow-md w-80">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-purple-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      <p className="text-purple-700 text-xs mt-2">{testimonial.linkedin}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name}'s portrait`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Buttons */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="relative group">
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 animate-float">
              <span className="relative z-10">Book Your Free Demo, Now!</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full mirror-shine"></span>
            </button>
          </div>
          
          <div className="relative group">
            <button className="bg-gradient-to-r from-purple-800 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 animate-float-delay">
              <span className="relative z-10">Get Our Placement Stats</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full mirror-shine"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-320px * ${testimonials.length})); }
        }
        @keyframes carousel-reverse {
          0% { transform: translateX(calc(-320px * ${testimonials.length})); }
          100% { transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-carousel {
          animation: carousel 40s linear infinite;
          animation-play-state: running;
        }
        .animate-carousel:hover {
          animation-play-state: paused;
        }
        .animate-carousel-reverse {
          animation: carousel-reverse 40s linear infinite;
          animation-play-state: running;
        }
        .animate-carousel-reverse:hover {
          animation-play-state: paused;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 3s ease-in-out 0.5s infinite;
        }
        .mirror-shine {
          mask-image: linear-gradient(
            -75deg,
            rgba(255,255,255,0.3) 30%,
            #fff 50%,
            rgba(255,255,255,0.3) 70%
          );
          mask-size: 200%;
          animation: shine 2s infinite;
        }
        @keyframes shine {
          from { mask-position: 150%; }
          to { mask-position: -50%; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;