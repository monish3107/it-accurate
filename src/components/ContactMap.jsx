import { useState } from 'react';

const ContactMap = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: ''
  });

  const courses = [
    'SAP',
    'Data Science',
    'AWS',
    'Python',
    'Full Stack Development',
    'DevOps',
    'Machine Learning',
    'Business Analytics'
  ];

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
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', phone: '', course: '' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="bg-gray-50 rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone No.:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone no."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="course" className="block text-gray-700 font-medium mb-2">Select Your Course:</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
                  required
                >
                  <option value="">-- Select a Course --</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
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
          
          {/* Right Column - Google Map */}
          <div className="rounded-xl shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7442.831790625116!2d79.079853!3d21.135841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf33b07e2643%3A0x1b45df16c0e6fa96!2sSapalogy%20Training-%20IT%20ACCURATE!5e0!3m2!1sen!2sin!4v1748547475566!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IT Accurate Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;