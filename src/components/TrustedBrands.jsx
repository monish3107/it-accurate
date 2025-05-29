const TrustedBrands = () => {
  const brands = [
  { name: "GoAbroad", rating: 4.5, logo: "/images/goabroad.webp" },
  { name: "UrbanPro", rating: 4.7, logo: "/images/urbanpro.jpeg" },
  { name: "GO Overseas", rating: 4.5, logo: "/images/GoOverseas.webp" },
  { name: "AmbitionBox", rating: 4.6, logo: "/images/ambitionbox.png" },
  { name: "Google", rating: 4.7, logo: "/images/google.webp" },
  { name: "Glassdoor", rating: 4.6, logo: "/images/glassdoor.png" },
  { name: "EduGorilla", rating: 4.5, logo: "/images/edugorilla.png" },
  { name: "MouthShut", rating: 4.6, logo: "/images/mouthshut.jpeg" }
];

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">
            We are one of the Most Trusted Brands!
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
          <div key={index} className="bg-gray-50 rounded-lg pl-20 pr-30 p-6 text-center hover:shadow-md transition-shadow">
  <div className="flex items-center justify-center space-x-4 mb-2">
    {brand.logo && (
      <img 
        src={brand.logo} 
        alt={brand.name} 
        className="w-20 h-20 object-contain rounded-md"
      />
    )}
    <div className="text-left">
      <h3 className="text-lg font-semibold text-gray-800">
        {brand.name}
      </h3>
      <div className="flex">
        {renderStars(brand.rating)}
      </div>
      <p className="text-purple-900 font-medium">
        {brand.rating.toFixed(1)}
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

export default TrustedBrands;