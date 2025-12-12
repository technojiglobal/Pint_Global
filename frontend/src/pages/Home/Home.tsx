import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./sections/HeroSection";
import WhoWeAre from "./sections/WhoWeAre";
import ExecutedExports from "./sections/ExecutedExports";
import CoreTradeServices from "./sections/CoreTradeServices";
import ProductsPreview from "../../components/ProductsPreview";
import WhyChooseUs from "./sections/WhyChooseUs";
import GlobalPresence from "./sections/GlobalPresence";
import Certifications from "./sections/Certifications";
import StartTradeJourney from "./sections/StartTradeJourney";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
const productData = [
  { title: "Green Coffee Beans", img: "/images/coffee.png", desc: "Premium quality, globally sourced." },
  { title: "Fruits", img: "/images/fruits.png", desc: "Fresh produce with assured quality." },
  { title: "Vegetables", img: "/images/vegetables.png", desc: "Farm-fresh, handpicked selection." },
  { title: "Rice & Grains", img: "/images/wheat.png", desc: "Pure grains from trusted farmers." },
  { title: "Processed Seafood", img: "/images/seafood.png", desc: "Hygienically processed seafood." },
  { title: "Minerals and Ores", img: "/images/minerals.png", desc: "Sustainably sourced raw materials." },
];

const Home: React.FC = () => {
const navigate=useNavigate();
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
       <ProductsPreview heading="Products Preview"
        subheading="Export-grade products responsibly sourced from verified Indian suppliers for global markets."
        products={productData} /> 
       
      <Button text="Explore Products" onClick={()=>navigate("/products")}/>
        
      
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
