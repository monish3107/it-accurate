const AboutTrainer = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading with separator */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              About Our Trainer
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
          </div>
          
          {/* Bullet points section */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                </div>
                <p className="text-gray-700">
                  Our training programs are delivered by certified IT ACCURATE trainers with over 7 years of expertise in their respective domains. They are currently working with top MNCs, ensuring real-world insights.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                </div>
                <p className="text-gray-700">
                  Our trainers actively work on live projects and incorporate these into training sessions, making the learning experience practical and industry-relevant.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                </div>
                <p className="text-gray-700">
                  They bring their expertise from leading companies like Cognizant, Dell, Infosys, IBM, L&T InfoTech, TCS, and HCL Technologies.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                </div>
                <p className="text-gray-700">
                  Beyond training, our trainers help candidates secure placements through employee referrals and internal hiring opportunities at their organizations.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                </div>
                <p className="text-gray-700">
                  Passionate about education, our trainers are industry experts dedicated to providing exceptional training tailored to each student's career growth.
                </p>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                </div>
                <p className="text-gray-700">
                  IT ACCURATE is honored to have received multiple awards for training excellence from esteemed IT organizations, reflecting our commitment to quality education.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainer;