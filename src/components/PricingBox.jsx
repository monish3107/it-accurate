import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PricingBox = () => {
  const [showEmiPlans, setShowEmiPlans] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const courses = [
    { name: 'SAP', price: 38000 },
    { name: 'Data Science', price: 42000 },
    { name: 'AWS', price: 35000 },
    { name: 'Python', price: 28000 },
    { name: 'Full Stack Development', price: 45000 }
  ];

  const emiPlans = [
    { duration: '3 months', interestRate: 16, monthlyPayment: 13133.33 },
    { duration: '6 months', interestRate: 16, monthlyPayment: 6888.89 },
    { duration: '12 months', interestRate: 16, monthlyPayment: 3447.77 }
  ];

  const paymentLogos = [
  {
    name: 'Visa',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
  },
  {
    name: 'Mastercard',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'
  },
  {
    name: 'American Express',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg'
  },
  {
    name: 'HDFC Bank',
    logo: 'https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/b06f812a-b194-4ac4-ad7c-22ac2ce16b68/common/logo.svg'
  },
  {
    name: 'SBI',
    logo: 'https://www.onlinesbi.sbi/documents/37/198452/SBI-Logo.png'
  },
  {
    name: 'Bank of Baroda',
    logo: 'https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/home/logo.svg'
  }
];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Select Course</h3>
            
            {/* Course Selection Dropdown */}
            <div className="relative mb-6">
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              >
                <option value="">Select a course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course.name}>
                    {course.name} - ₹{course.price.toLocaleString('en-IN')}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={20} />
            </div>

            {/* Price Display */}
            {selectedCourse && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Price:</span>
                  <span className="text-xl font-bold text-purple-900">
                    ₹{courses.find(c => c.name === selectedCourse)?.price.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* EMI Plans Toggle */}
                <button
                  onClick={() => setShowEmiPlans(!showEmiPlans)}
                  className="w-full flex justify-between items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span className="font-medium">Select EMI Plan:</span>
                  <ChevronDown 
                    className={`transition-transform ${showEmiPlans ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>

                {/* EMI Plans Dropdown */}
                {showEmiPlans && (
                  <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Duration</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Interest Rate (%)</th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Monthly Payment (₹)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {emiPlans.map((plan, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 text-sm text-gray-700">{plan.duration}</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{plan.interestRate}%</td>
                            <td className="px-4 py-3 text-sm text-gray-700">{plan.monthlyPayment.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Payment Logos */}
            <div className="mt-6 pt-6 border-t border-gray-200">
  <p className="text-sm text-gray-500 mb-3">We accept all payment modes and cards.</p>
  <Slider
    dots={false}
    infinite={true}
    speed={500}
    slidesToShow={4}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={3000}
    responsive={[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]}
  >
    {paymentLogos.map((item, index) => (
      <div key={index} className="px-2">
        <div className="bg-white p-4 h-16 flex items-center justify-center">
          <img
            src={item.logo}
            alt={item.name}
            className="h-full object-contain"
          />
        </div>
      </div>
    ))}
  </Slider>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBox;