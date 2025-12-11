import React from 'react'
import About from './About'
import Certifications from '../Home/sections/Certifications'
import Coffebeans from './Coffebeans'
import ProductsPreview from '../../components/ProductsPreview'
import Productsreview from './Productsreview'
import Footer from '../../components/Footer'
const productData1 = [
  { title: "Pomegranate", img: "/images/pomegranate.png", desc: "Naturally grown, export-grade pomegranates with rich color and freshness." },
  { title: "Banana", img: "/images/banana.png", desc: "Fresh Indian bananas known for natural sweetness and long shelf life." },
  { title: "Mango", img: "/images/mango.png", desc: "Premium Indian mangoes exported at peak ripeness and quality." },
  { title: "Watermelon", img: "/images/Watermelon.png", desc: "Premium-quality watermelons sourced fresh from certified Indian farms." },
  { title: "Muskmelon", img: "/images/muskmelon.png", desc: "Sweet, ripe muskmelons packed with assured export-grade freshness." },
  { title: "Papaya", img: "/images/papaya.png", desc: "Farm-fresh papayas harvested and selected for global supply." },
];
const productData2 = [
  { title: "Red Pumpkin", img: "/images/pumpkin.png", desc: "Naturally harvested pumpkins with superior freshness and long storage stability." },
  { title: "Drumsticks", img: "/images/drumsticks.png", desc: "Fresh drumsticks sourced from reliable growers with assured quality." },
  { title: "Turmeric", img: "/images/turmeric.png", desc: "High-curcumin fresh turmeric roots sourced from trusted Indian farms." },
  { title: "Ginger", img: "/images/ginger.png", desc: "Fresh, aromatic Indian ginger sourced from trusted agricultural regions." },
  { title: "Raw Papaya", img: "/images/raw-papaya.png", desc: "High-quality raw papaya ideal for culinary and processing requirements." },
  { title: "Onions", img: "/images/onions.png", desc: "Farm-fresh Indian onions known for strong flavor and long shelf life." },
];
const productData3 = [
  { title: "Fish", img: "/images/fish.png", desc: "Sustainably sourced fish processed under strict hygiene standards." },
  { title: "Prawns", img: "/images/prawns.png", desc: "High-quality prawns prepared and packed for international markets." },
  { title: "Crab", img: "/images/crab.png", desc: "Fresh and frozen crabs exported with premium-grade quality assurance." },
];
const productData4 = [
  { 
    title: "Rice",
    img: "/images/rice.png",
    desc: "High-quality Indian rice varieties processed and packed for global export."
  },
  { 
    title: "Grains",
    img: "/images/grains.png",
    desc: "Clean, export-ready grains sourced from reliable agricultural hubs."
  }
];
const productData5 = [
  { 
    title: "Mineral",
    img: "/images/mineral.png",
    desc: "Industrial minerals sourced from certified mining regions for export-ready supply."
  },
  { 
    title: "Ore",
    img: "/images/ore.png",
    desc: "Clean, quality-tested metal ores processed and prepared for global markets."
  }
];
const Product = () => {
  return (
    <div className="w-full overflow-hidden">
        <About/>
        <Coffebeans/>
        <ProductsPreview heading="Fruits"
        subheading="Fresh, handpicked Indian fruits packed with export-grade quality and freshness."
        products={productData1}/>
        <ProductsPreview heading="Vegetables"
        subheading="Farm-grown vegetables sourced from certified producers and prepared for global supply."
        products={productData2}/>
       
        <Productsreview  heading="Rice and Grains"
  subheading="High-quality Indian rice and grains processed and packed to meet international export standards."
   products={productData4}/>
  <ProductsPreview heading="Sea foods"
        subheading="Fresh and frozen seafood sourced from certified coastal suppliers and processed for global markets."
        products={productData3} />
        <Productsreview  heading="Minerals and Ores"
  subheading="Industrial-grade minerals and metal ores responsibly sourced and prepared for international export."
  products={productData5}
  />
        <Certifications/>
        <Footer/>
    </div>
  )
}

export default Product