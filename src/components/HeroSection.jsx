const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/50"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              LEARN WITH IT ACCURATE FOR BEST JOB OPPORTUNITY
            </h1>
            
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Expert Instructors
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Project-based learning
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Internship Opportunities
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Certification programs
              </li>
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-sm mx-auto lg:mx-0 lg:ml-8 lg:mr-0 p-6 sm:p-8 rounded-xl shadow-xl max-w-md">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-900 mb-4 sm:mb-6">For Free Demo Enquiry Now!</h2>
              
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-purple-900 mb-1 sm:mb-2 text-sm sm:text-base">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-purple-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-900 mb-1 sm:mb-2 text-sm sm:text-base">Your Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-purple-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-900 mb-1 sm:mb-2 text-sm sm:text-base">Select a Course</label>
                  <select className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-purple-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>-- Select a Course --</option>
                    <option>Web Development</option>
                    <option>Data Science</option>
                    <option>Mobile Development</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-purple-900 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300 text-sm sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;