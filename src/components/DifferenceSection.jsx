const DifferenceSection = () => {
  const features = [
    {
      title: "INTERVIEW GUIDANCE",
      description: "Master interview techniques with our expert-led mock sessions",
      bgImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')",
      hoverImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
    },
    {
      title: "GUARANTEED CERTIFICATION",
      description: "Earn recognized certifications that validate your skills",
      bgImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1522&q=80')",
      hoverImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')"
    },
    {
      title: "JOB READY",
      description: "Get industry-ready with practical, real-world training",
      bgImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
      hoverImage: "url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
    },
    {
      title: "ONLINE+OFFLINE SESSIONS",
      description: "Flexible learning options to suit your schedule",
      bgImage: "url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')",
      hoverImage: "url('https://images.unsplash.com/photo-1581094794329-c811e6aef410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 col mt-30 justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
              WHAT MAKES IT ACCURATE DIFFERENT?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Training programs at IT Accurate act as a foundation for students who are willing to become distinguished & expert IT professionals.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment & focus towards empowering the students with cutting edge industry practices & Salesforce expertise has resulted in exceptional learning experiences.
            </p>
            <p className="text-lg text-gray-600">
              This approach has helped students seize the right career opportunities.
            </p>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="relative h-64 rounded-xl overflow-hidden shadow-lg group transition-all duration-500 hover:scale-105 hover:shadow-xl"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-0"
                    style={{ backgroundImage: feature.bgImage }}
                  ></div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:opacity-100"
                    style={{ backgroundImage: feature.hoverImage }}
                  ></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-purple-900/50 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;