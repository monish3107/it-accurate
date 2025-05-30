import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CompanyCarousel from './components/CompanyCarousel';
import CoursesSection from './components/CoursesSection.jsx';
import TrustedBrands from './components/TrustedBrands.jsx';
import DifferenceSection from './components/DifferenceSection.jsx';
import TestimonialCarousel from './components/TestimonialCarousel';
import ContactSection from './components/ContactSection.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';
import LearningOutcome from './components/LearningOutcome.jsx';
import AboutTrainer from './components/AboutTrainer.jsx';
import PricingBox from './components/PricingBox.jsx';
import ContactMap from './components/ContactMap.jsx';
import JourneyToSuccess from './components/JourneyToSuccess.jsx';
import Footer  from './components/Footer.jsx';
import FloatingButton from './components/FloatingButtons.jsx';

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden ">
      <Header />
      <HeroSection />
      <CompanyCarousel />
      <CoursesSection />
      <TrustedBrands />
      <DifferenceSection />
      <TestimonialCarousel />    
      <ContactSection />
      <TestimonialSlider />
      <LearningOutcome />
      <AboutTrainer />
      <CompanyCarousel />
      <PricingBox />
      <JourneyToSuccess />
      <ContactMap />
      <Footer />
      <FloatingButton />

    </div>
  );
};

export default App;
