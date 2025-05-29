import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will reach out to you soon.');
    setFormData({ name: '', phone: '', course: '' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          
          <div className="bg-purple-50 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">
              Reach us now!
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone No.
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="course" className="block text-gray-700 font-medium mb-2">
                  Select Your Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="Salesforce">Salesforce</option>
                  <option value="SAP">SAP</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="DevOps">DevOps</option>
                  <option value="ML">ML</option>
                  <option value="AWS">AWS</option>
                  <option value="Python">Python</option>
                  <option value="Business Analytics">Business Analytics</option>
                  <option value="AI & ML">AI & ML</option>
                  <option value="Share Market">Share Market</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>


          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
              Why IT ACCURATE?
            </h2>
            <p className="text-lg text-gray-600">
              Be a part of our comprehensive training programs & start your journey towards becoming a Professional Developer today.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Start learning with us!
              </h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Become industry ready</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">24*7 support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Attend live webinars every week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Access to study material</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">Job placement assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;