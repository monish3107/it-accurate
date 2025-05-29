import { useState } from 'react';

const LearningOutcome = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Industry Curriculum",
      subtitle: "Experience real-world projects and gain practical skills with our comprehensive training programs. Our hands-on approach ensures that you'll be ready to tackle any challenge in your field.",
      image: "/images/industry-curriculum.webp"
    },
    {
      id: 2,
      title: "Global Certification Guidance",
      subtitle: "Get expert guidance to earn globally recognized certifications that validate your skills and enhance your career prospects in the international job market.",
      image: "/images/certification.webp"
    },
    {
      id: 3,
      title: "Projects",
      subtitle: "Work on real client projects during your training to build a professional portfolio that showcases your capabilities to potential employers.",
      image: "/images/projects.webp"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
          LEARNING OUTCOME
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image with hover effect */}
              <div className="h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredCard === card.id ? '' : 'grayscale'
                  }`}
                />
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                
                {/* Subtitle that appears on hover */}
                <div className={`overflow-hidden transition-all duration-300 ${hoveredCard === card.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/90 text-sm mt-2">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcome;