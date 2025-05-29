const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-6">
              <img 
                src="/it-accurate-logo.svg" // Replace with your white logo
                alt="IT Accurate Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold">IT Accurate</span>
            </div>
            <p className="text-purple-200 mb-4">
              Empowering careers through quality IT education and training.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-purple-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Home</a></li>
              <li className="relative group">
                <a href="#" className="text-purple-200 hover:text-white transition-colors flex items-center">
                  Courses
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-purple-700 pb-2">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-purple-700 pb-2">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-purple-200">Email:</p>
                <a href="mailto:info@itaccurate.com" className="text-white hover:underline">info@itaccurate.com</a>
              </div>
              <div>
                <p className="text-purple-200">Phone:</p>
                <a href="tel:09175978889" className="text-white hover:underline">09175978889</a>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Offices</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-purple-300">Nagpur:</p>
                    <p className="text-purple-200 text-sm">607, 608 B-wing, Lokmat Bhavan, Lokmat Square, Ramdaspeth, Nagpur</p>
                    <p className="text-purple-200 text-sm">Ph.- 09175978889</p>
                  </div>
                  <div>
                    <p className="font-medium text-purple-300">Thane:</p>
                    <p className="text-purple-200 text-sm">Office No. 806, Paradise Tower, Naupada, Thane West</p>
                    <p className="text-purple-200 text-sm">Ph.- 07738277389</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us and Copyright */}
        <div className="border-t border-purple-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>
          <p className="text-purple-300 text-sm">
            &copy; {new Date().getFullYear()} IT Accurate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;