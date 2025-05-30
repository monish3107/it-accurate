import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const courses = [
    { name: "SAP", description: "Enterprise solutions" },
    { name: "Salesforce", description: "CRM Solutions" },
    { name: "Data Analytics", description: "Analyze Data" },
    { name: "Business Analytics", description: "Data Insights" },
    { name: "DevOps", description: "Accelerate Delivery" },
    { name: "HR TRAINING", description: "HR Management Solutions" },
    { name: "Full Stack Development", description: "End-to-End" },
    { name: "Python", description: "Future Coding" },
    { name: "Data Science AI & ML", description: "Intelligent Decisions" },
    { name: "ServiceNow Training", description: "IT Service Management" },
    { name: "AWS", description: "Cloud Power" },
    { name: "Share Market", description: "Learn Trading" },
    { name: "Data Engineering", description: "Manipulate Data" }
  ];

  // Handle click outside for mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsCourseOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle hover with delay for desktop
  useEffect(() => {
    const dropdown = dropdownRef.current;
    const button = buttonRef.current;

    if (dropdown && button) {
      let timeoutId;

      const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setIsCourseOpen(true);
      };

      const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
          setIsCourseOpen(false);
        }, 300); // 300ms delay before closing
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
      dropdown.addEventListener('mouseenter', handleMouseEnter);
      dropdown.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
        dropdown.removeEventListener('mouseenter', handleMouseEnter);
        dropdown.removeEventListener('mouseleave', handleMouseLeave);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <header className="fixed w-full bg-purple-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/it-accurate-logo.svg"
            alt="Logo" 
            className="h-8 sm:h-10 w-auto"
          />
          <span className="ml-2 text-white font-bold text-lg sm:text-xl">IT Accurate</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {/* Course Dropdown */}
          <div className="relative">
            <button 
              ref={buttonRef}
              className="text-white hover:text-purple-200 flex items-center"
              onClick={() => setIsCourseOpen(!isCourseOpen)}
            >
              Courses
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isCourseOpen && (
              <div 
                ref={dropdownRef}
                className="absolute left-0 mt-2 w-96 bg-purple-800/90 rounded-md shadow-lg py-3 z-50"
              >
                <div className="grid grid-cols-2 gap-2 px-4">
                  {courses.map((course, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="block py-2 text-white hover:bg-purple-700/50 rounded px-2 transition-colors"
                    >
                      <div className="font-medium">{course.name}</div>
                      <div className="text-xs text-purple-200">{course.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other Navigation Links */}
          <a href="#" className="text-white hover:text-purple-200">About</a>
          <a href="#" className="text-white hover:text-purple-200">Blog</a>
          <a href="#" className="text-white hover:text-purple-200">Placements</a>
          <a href="#" className="text-white hover:text-purple-200">Jobs</a>
          <a href="#" className="text-white hover:text-purple-200">Career</a>
          <a href="#" className="text-white hover:text-purple-200">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-900/95 backdrop-blur-md" ref={dropdownRef}>
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {/* Mobile Course Dropdown */}
            <div className="relative">
              <button 
                className="text-white hover:text-purple-200 flex items-center w-full justify-between py-2"
                onClick={() => setIsCourseOpen(!isCourseOpen)}
              >
                <span className="font-medium">Courses</span>
                <svg 
                  className={`ml-1 h-4 w-4 transform transition-transform ${isCourseOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCourseOpen && (
                <div className="mt-2">
                  <div className="grid grid-cols-2 gap-2">
                    {courses.map((course, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className="block py-2 px-3 text-white hover:bg-purple-700/50 rounded transition-colors"
                      >
                        <div className="font-medium text-sm">{course.name}</div>
                        <div className="text-xs text-purple-300">{course.description}</div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Mobile Navigation Links */}
            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="text-white hover:text-purple-200 py-2 px-3 rounded hover:bg-purple-700/50">About</a>
              <a href="#" className="text-white hover:text-purple-200 py-2 px-3 rounded hover:bg-purple-700/50">Blog</a>
              <a href="#" className="text-white hover:text-purple-200 py-2 px-3 rounded hover:bg-purple-700/50">Placements</a>
              <a href="#" className="text-white hover:text-purple-200 py-2 px-3 rounded hover:bg-purple-700/50">Jobs</a>
              <a href="#" className="text-white hover:text-purple-200 py-2 px-3 rounded hover:bg-purple-700/50">Career</a>
              <a href="#" className="text-white hover:text-purple-200 py-2 px-3 rounded hover:bg-purple-700/50">Contact</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;