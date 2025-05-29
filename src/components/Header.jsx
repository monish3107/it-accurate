import { useState } from 'react';

const Header = () => {
  const [isCourseOpen, setIsCourseOpen] = useState(false);

  return (
    <header className="fixed w-full bg-purple-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/it-accurate-logo.svg"
            alt="Logo" 
            className="h-10 w-auto"
          />
          <span className="ml-2 text-white font-bold text-xl">IT Accurate</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Course Dropdown */}
          <div className="relative">
            <button 
              className="text-white hover:text-purple-200 flex items-center"
              onMouseEnter={() => setIsCourseOpen(true)}
              onMouseLeave={() => setIsCourseOpen(false)}
            >
              Courses
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isCourseOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-purple-800/90 rounded-md shadow-lg py-1 z-50"
                onMouseEnter={() => setIsCourseOpen(true)}
                onMouseLeave={() => setIsCourseOpen(false)}
              >
                <a href="#" className="block px-4 py-2 text-white hover:bg-purple-700">Web Development</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-purple-700">Data Science</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-purple-700">Mobile Development</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-purple-700">UI/UX Design</a>
              </div>
            )}
          </div>

          {/* Other Navigation Links */}
          <a href="#" className="text-white hover:text-purple-200">About</a>
          <a href="#" className="text-white hover:text-purple-200">Blog</a>
          <a href="#" className="text-white hover:text-purple-200">Documentation</a>
          <a href="#" className="text-white hover:text-purple-200">Career</a>
        </nav>

        {/* Mobile Menu Button (optional) */}
        <button className="md:hidden text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;