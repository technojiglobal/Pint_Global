import React from "react";

import HeroSection from "./sections/HeroSection";
import WhoWeAre from "./sections/WhoWeAre";
import ExecutedExports from "./sections/ExecutedExports";
import CoreTradeServices from "./sections/CoreTradeServices";
import ProductsPreview from "./sections/ProductsPreview";
import WhyChooseUs from "./sections/WhyChooseUs";
import GlobalPresence from "./sections/GlobalPresence";
import Certifications from "./sections/Certifications";
import StartTradeJourney from "./sections/StartTradeJourney";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are */}
      <WhoWeAre />

      {/* Professionally Executed Exports */}
       <ExecutedExports /> 

      {/* Core Trade Services */}
       <CoreTradeServices />

      {/* Products Preview */}
       <ProductsPreview /> 

      {/* Why Choose Us */}
       <WhyChooseUs /> 

      {/* Global Presence */}
       <GlobalPresence /> 

      {/* Certifications */}
       <Certifications /> 

      {/* Start Trade Journey */}
       <StartTradeJourney /> 

      {/* Footer */}
       <Footer />  
    </>
  );
};

export default Home;
