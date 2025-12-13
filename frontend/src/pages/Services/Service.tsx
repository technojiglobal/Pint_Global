// React import not required for new JSX transform
import React from "react";
import Export from './Export'
import Certifications from '../Home/sections/Certifications'
import StartTrade from '../About/sections/StartTrade'
import About from './About'
import TradeValues from './TradeValues'
import Footer from '../../components/Footer'
import GlobalSourcing from "./GlobalSourcing";
import Presence from "./Presence";

const Service = () => {
  return (
    <div className="w-full overflow-hidden">
     
        <About />
        <GlobalSourcing/>
        
        <Export />
        <TradeValues />
        <Certifications />
        <Presence/>
        <StartTrade />
        <Footer/>
      
    </div>
  );
};

export default Service;