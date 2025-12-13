
import AboutIntro from "./AboutIntro";
import Certifications from "../Home/sections/Certifications";
import StartTrade from "../About/sections/StartTrade";
import Contactinfo from "./Contactinfo";
import Footer from "../../components/Footer";
export default function Contact(){
  return(
    <div className="w-full overflow-hidden">
        <AboutIntro/>
        <Contactinfo/>
        <Certifications/>
        <StartTrade/>
        <Footer/>
    </div>
  )
}