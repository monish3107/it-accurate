const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/50 py10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              LEARN WITH IT ACCURATE FOR BEST JOB OPPORTUNITY
            </h1>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Expert Instructors
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Project-based learning
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Internship Opportunities
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Certification programs
              </li>
            </ul>
            
            {/* <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition duration-300">
              Explore Courses
            </button> */}
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/90 backdrop-blur-sm ml-50 mr-20 p-8 rounded-xl shadow-xl">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">For Free Demo Enquiry Now!</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-purple-900 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-purple-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-900 mb-2">Your Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-purple-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-purple-900 mb-2">Select a Course</label>
                  <select className="w-full px-4 py-2 border border-purple-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>-- Select a Course --</option>
                    <option>Web Development</option>
                    <option>Data Science</option>
                    <option>Mobile Development</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-purple-900 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300"
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