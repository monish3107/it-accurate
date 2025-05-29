const CoursesSection = () => {
  const courses = [
    {
      title: "SAP",
      description: "Start Learning SAP, And Land Your First Dream Job.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "SALESFORCE",
      description: "Master Salesforce by completing Our Training Career Advancement Program.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
      
    },
    {
      title: "DATA ANALYTICS",
      description: "Accelerate Your Career with Data Analytics Training and Certification program.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "DATA SCIENCE",
      description: "Become a Certified Data Scientist with Our Training courses.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "FULL STACK DEVELOPER",
      description: "Unlock limitless opportunities with Full Stack Development mastery.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "DEVOPS",
      description: "Master DevOps with AWS and Linux Training: Unlock Your Full Potential.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "ML",
      description: "Transform Your Future: Attain ML Certification through Our Training Courses.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "AWS",
      description: "Empower Your Expertise: AWS with Our Comprehensive Training Courses.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "PYTHON",
      description: "Empower Your Future with Python Training Excellence.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "BUSINESS ANALYTICS",
      description: "Unlock the Power of Data with Business Analytics Training courses.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "AI & ML",
      description: "Empower Your Future: Become a Certified AI and ML Expert with Our Training Courses.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    },
    {
      title: "SHARE MARKET",
      description: "Unlock the potential of your investments with expert market insights.",
      cta: "Know More",
      buttonText: "Enquire Now",
      image: "/images/sap-bg.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            OUR TRAINING COURSES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be certified by global certifications and increase your understanding
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group"
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                   style={{ backgroundImage: `url(${course.image})` }}
              ></div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-purple-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-5">{course.description}</p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href="#" 
                    className="text-purple-700 font-medium hover:text-purple-900 transition-colors"
                  >
                    {course.cta}
                  </a>
                  <button className="bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
                    {course.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;