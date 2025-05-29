import { useState } from 'react';

const JourneyToSuccess = () => {
  const [activeTab, setActiveTab] = useState('skill');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
          Your Journey to Professional Success
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 mb-8 max-w-2xl mx-auto">
          <TabButton 
            active={activeTab === 'skill'}
            onClick={() => setActiveTab('skill')}
            title="Skill Development"
            subtitle="Achieving Milestones"
          />
          <TabButton 
            active={activeTab === 'interview'}
            onClick={() => setActiveTab('interview')}
            title="Excelling in Interviews"
            subtitle="Readiness Strategies"
          />
          <TabButton 
            active={activeTab === 'placement'}
            onClick={() => setActiveTab('placement')}
            title="Placement Support"
            subtitle="Securing Your Job"
          />
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Skill Development Content */}
          {activeTab === 'skill' && (
            <div className="p-6 space-y-6">
              <FeatureItem 
                title="Hands-On Training with Internships"
                description="Participate in our internship opportunities to bridge the gap between theory and practice. Develop workplace-ready skills while working on tasks that mirror real-world scenarios."
              />
              <FeatureItem 
                title="Industry-Driven Project Experience"
                description="Engage in projects designed to meet market standards. Strengthen your portfolio with practical implementations that demonstrate your expertise and innovation."
              />
              <FeatureItem 
                title="Resume Writing Excellence"
                description="Create an impactful resume that highlights your strengths and achievements effectively. Impress employers with a professional and tailored profile."
              />
            </div>
          )}

          {/* Interview Content */}
          {activeTab === 'interview' && (
            <div className="p-6 space-y-6">
              <FeatureItem 
                title="Core Competency Development"
                description="Sharpen your technical and analytical abilities with targeted practice sessions. Gain the confidence to tackle interview challenges with ease."
              />
              <FeatureItem 
                title="Mock Interview Simulations"
                description="Participate in realistic interview exercises that mimic actual hiring processes. Get constructive feedback to refine your performance."
              />
              <FeatureItem 
                title="Dynamic Group Discussions"
                description="Enhance your communication and collaboration skills through interactive group sessions. Learn how to articulate your ideas effectively in a team setting."
              />
            </div>
          )}

          {/* Placement Content */}
          {activeTab === 'placement' && (
            <div className="p-6 space-y-6">
              <FeatureItem 
                title="Ongoing Career Support"
                description="Receive dedicated assistance throughout your job search until you secure a role with a leading organization. Benefit from personalized guidance at every step."
              />
              <FeatureItem 
                title="Exclusive Referral Opportunities"
                description="Leverage our extensive network for access to exclusive job openings. Open doors to exciting career paths through our referral program."
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Tab Button Component
const TabButton = ({ active, onClick, title, subtitle }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 text-center transition-colors rounded-lg ${active ? 'bg-purple-900 text-white' : 'bg-white text-purple-900 hover:bg-purple-100'}`}
    >
      <h3 className="font-bold">{title}</h3>
      <p className={`text-sm ${active ? 'text-purple-200' : 'text-purple-600'}`}>{subtitle}</p>
    </button>
  );
};

// Feature Item Component (same as before)
const FeatureItem = ({ title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1 mr-4">
        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
      </div>
      <div>
        <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default JourneyToSuccess;