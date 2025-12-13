// React import not required for new JSX transform
import Export from './Export'
import Certifications from '../Home/sections/Certifications'
import StartTrade from '../About/sections/StartTrade'
import About from './About'
import TradeValues from './TradeValues'
import Footer from '../../components/Footer'

const Service = () => {
  return (
    <div className="w-full overflow-hidden">
     
        <About />
        <Export />
        <TradeValues />
        <Certifications />
        <StartTrade />
        <Footer/>
      
    </div>
  );
};

export default Service