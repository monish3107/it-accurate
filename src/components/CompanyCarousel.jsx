import googleLogo from '/public/assets/google.svg';
import microsoftLogo from '/public/assets/microsoft.svg';
import amazonLogo from '/public/assets/amazon.svg';
import appleLogo from '/public/assets/apple.svg';
import metaLogo from '/public/assets/meta.svg';
import netflixLogo from '/public/assets/netflix.svg';
import teslaLogo from '/public/assets/tesla.svg';
import adobeLogo from '/public/assets/adobe.svg';

const CompanyCarousel = () => {
  const companyLogos = [
    { id: 1, name: 'Google', logo: googleLogo },
    { id: 2, name: 'Microsoft', logo: microsoftLogo },
    { id: 3, name: 'Amazon', logo: amazonLogo },
    { id: 4, name: 'Apple', logo: appleLogo },
    { id: 5, name: 'Meta', logo: metaLogo },
    { id: 6, name: 'Netflix', logo: netflixLogo },
    { id: 7, name: 'Tesla', logo: teslaLogo },
    { id: 8, name: 'Adobe', logo: adobeLogo },
  ];

  const doubleLogos = [...companyLogos, ...companyLogos];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="relative w-full">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Logo carousel container */}
          <div className="flex overflow-hidden">
            {/* Animated logos - using inline style for animation */}
            <div 
              className="flex py-2"
              style={{
                animation: 'infiniteScroll 20s linear infinite',
                whiteSpace: 'nowrap'
              }}
            >
              {doubleLogos.map((company, index) => (
                <div key={`${company.id}-${index}`} className="mx-8 flex-shrink-0">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Define animation keyframes inline */}
      <style jsx>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default CompanyCarousel;