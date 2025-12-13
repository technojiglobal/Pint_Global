
import AboutIntro from "./sections/AboutIntro";
import PintMeaning from "./sections/PintMeaning";
import VisionSection from "./sections/VisionSection";
 import TradeOperations from "./sections/TradeOperations";
 import FounderSection from "./sections/FounderSection";
 import StartTrade from "./sections/StartTrade";
import Footer from "../../components/Footer";
export default function About() {
  return (
    <div className="w-full overflow-hidden">
       <AboutIntro />
       <PintMeaning />
       <VisionSection />
       <TradeOperations />
       <FounderSection />
        <StartTrade />
        <Footer />
    </div>
  );
}
