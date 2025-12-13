
// import React, { useState } from "react";

// const CoreTradeServices = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const exportServices = [
//     "Verified Product Sourcing",
//     "Quality Inspection & Compliance",
//     "Export-Grade Packaging",
//     "Freight & Logistics Coordination",
//     "Complete Documentation & Customs Handling",
//     "Real-Time Shipment Updates"
//   ];
//   const globalSourcingServices = [
//   "Supplier Identification & Verification",
//   "Market Research & Price Comparison",
//   "Product Customization & Specifications",
//   "Volume-Based Pricing Negotiations",
//   "Multi-Country Sourcing Strategies",
//   "Quality Control & Factory Audits"
// ];

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <h3 className="text-3xl md:text-4xl font-bold text-[#0F6EB3] text-center">
//           Our Core Trade Services
//         </h3>
//         <p className="text-center mt-3 text-gray-700 max-w-3xl mx-auto text-lg">
//           Comprehensive export solutions for sourcing, compliance, and global shipping.
//         </p>

//         <div className="mt-12 grid md:grid-cols-2 gap-8">

//           {/* LEFT CARD - Export Services with Image & Hover Animation */}
//           <div
//             className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] cursor-pointer"
//             onMouseEnter={() => setHoveredCard('export')}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* Background Image */}
//             <div
//               className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                 hoveredCard === 'export' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
//               }`}
//             >
//               <img
//                src="/images/OurCoreImg.png"
//                 alt="Export Services"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EB3] via-[#0F6EB3]/40 to-transparent" />
              
//               {/* Title on Image */}
//               <div className="absolute bottom-8 left-8 right-8">
//                 <h4 className="font-bold text-white text-2xl drop-shadow-lg">
//                   Export Services – End-to-End Execution
//                 </h4>
//                 <p className="text-white/90 text-sm mt-2 drop-shadow">
//                   Tailor-made global sourcing solutions based on buyer specifications, volume, and destination markets.
//                 </p>
//               </div>
//             </div>

//             {/* Text Content - Slides up on hover */}
//             <div
//               className={`absolute inset-0 bg-[#0F6EB3] p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${
//                 hoveredCard === 'export' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//               }`}
//             >
//               <h4 className="font-bold text-white text-2xl mb-6">
//                 Export Services – End-to-End Execution
//               </h4>
//               <ul className="space-y-3">
//                 {exportServices.map((service, index) => (
//                   <li
//                     key={index}
//                     className={`text-white text-base flex items-start transition-all duration-500 ${
//                       hoveredCard === 'export'
//                         ? 'translate-y-0 opacity-100'
//                         : 'translate-y-8 opacity-0'
//                     }`}
//                     style={{
//                       transitionDelay: hoveredCard === 'export' ? `${index * 100}ms` : '0ms'
//                     }}
//                   >
//                     <span className="mr-3">•</span>
//                     <span>{service}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* RIGHT CARD - Global Sourcing with Image & Hover Animation */}
//           <div
//             className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] cursor-pointer"
//             onMouseEnter={() => setHoveredCard('sourcing')}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* Background Image */}
//             <div
//               className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                 hoveredCard === 'sourcing' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
//               }`}
//             >
//               <img
//                 src="/images/trade.png"  
//                 alt="Global Sourcing"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#2e6e9c] via-[#2e6e9c]/40 to-transparent" />
              
//               {/* Title on Image */}
//               <div className="absolute bottom-8 left-8 right-8">
//                 <h4 className="font-bold text-white text-2xl drop-shadow-lg">
//                   Global Sourcing
//                 </h4>
//                 <p className="text-white/90 text-sm mt-2 drop-shadow">
//                   Tailor-made global sourcing solutions based on buyer specifications, volume, and destination markets.
//                 </p>
//               </div>
//             </div>

//             {/* Text Content - Slides up on hover */}
//             <div
//               className={`absolute inset-0 bg-[#0F6EB3] p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${
//                 hoveredCard === 'sourcing' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//               }`}
//             >
//               <h4 className="font-bold text-white text-2xl mb-6">
//                 Global Sourcing
//               </h4>
//   <ul className="space-y-3">
//   {globalSourcingServices.map((service, index) => (
//     <li
//       key={index}
//       className={`text-white text-base flex items-start transition-all duration-500 ${
//         hoveredCard === 'sourcing'
//           ? 'translate-y-0 opacity-100'
//           : 'translate-y-8 opacity-0'
//       }`}
//       style={{
//         transitionDelay: hoveredCard === 'sourcing' ? `${index * 100}ms` : '0ms'
//       }}
//     >
//       <span className="mr-3">•</span>
//       <span>{service}</span>
//     </li>
//   ))}
// </ul>
//             </div>
//           </div>

//         </div>

//         {/* View All Services Button */}
//         <div className="flex justify-center mt-10">
//           <button className="bg-[#0F6EB3] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#0d5a93] transition-all duration-300 flex items-center gap-2">
//             View All Services
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreTradeServices;









//option - 2

import React, { useState } from "react";

const CoreTradeServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const exportServices = [
    "Verified Product Sourcing",
    "Quality Inspection & Compliance",
    "Export-Grade Packaging",
    "Freight & Logistics Coordination",
    "Complete Documentation & Customs Handling",
    "Real-Time Shipment Updates"
  ];
  
  const globalSourcingServices = [
    "Supplier Identification & Verification",
    "Market Research & Price Comparison",
    "Product Customization & Specifications",
    "Volume-Based Pricing Negotiations",
    "Multi-Country Sourcing Strategies",
    "Quality Control & Factory Audits"
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-[#0F6EB3] text-center">
          Our Core Trade Services
        </h3>
        <p className="text-center mt-3 text-gray-700 max-w-3xl mx-auto text-lg">
          Comprehensive export solutions for sourcing, compliance, and global shipping.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">

          {/* LEFT CARD - Export Services with Zoom Animation */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] cursor-pointer"
            onMouseEnter={() => setHoveredCard('export')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                hoveredCard === 'export' ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              <img
               src="/images/OurCoreImg.png"
                alt="Export Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EB3] via-[#0F6EB3]/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="font-bold text-white text-2xl drop-shadow-lg">
                  Export Services – End-to-End Execution
                </h4>
                <p className="text-white/90 text-sm mt-2 drop-shadow">
                 Complete end-to-end export execution from sourcing to delivery with full compliance and documentation support.
                </p>
              </div>
            </div>

            {/* Text Content - Slides up on hover */}
            <div
              className={`absolute inset-0 bg-[#0F6EB3] p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                hoveredCard === 'export' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              <h4 className="font-bold text-white text-2xl mb-6">
                Export Services – End-to-End Execution
              </h4>
              <ul className="space-y-3">
                {exportServices.map((service, index) => (
                  <li
                    key={index}
                    className={`text-white text-base flex items-start transition-all duration-500 ${
                      hoveredCard === 'export' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: hoveredCard === 'export' ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <span className="mr-3">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT CARD - Global Sourcing with Zoom Animation */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] cursor-pointer"
            onMouseEnter={() => setHoveredCard('sourcing')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                hoveredCard === 'sourcing' ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              <img
                src="/images/trade.png"  
                alt="Global Sourcing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EB3] via-[#0F6EB3]/40 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="font-bold text-white text-2xl drop-shadow-lg">
                  Global Sourcing
                </h4>
                <p className="text-white/90 text-sm mt-2 drop-shadow">
                  Tailor-made global sourcing solutions based on buyer specifications, volume, and destination markets.
                </p>
              </div>
            </div>

            {/* Text Content - Slides up on hover */}
            <div
              className={`absolute inset-0 bg-[#0F6EB3] p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${
                hoveredCard === 'sourcing' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              <h4 className="font-bold text-white text-2xl mb-6">
                Global Sourcing
              </h4>
              <ul className="space-y-3">
                {globalSourcingServices.map((service, index) => (
                  <li
                    key={index}
                    className={`text-white text-base flex items-start transition-all duration-500 ${
                      hoveredCard === 'sourcing' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{
                      transitionDelay: hoveredCard === 'sourcing' ? `${index * 100}ms` : '0ms'
                    }}
                  >
                    <span className="mr-3">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* View All Services Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#0F6EB3] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#0d5a93] transition-all duration-300 flex items-center gap-2">
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreTradeServices;




// option-3


// import React, { useState } from "react";

// const CoreTradeServices = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const exportServices = [
//     "Verified Product Sourcing",
//     "Quality Inspection & Compliance",
//     "Export-Grade Packaging",
//     "Freight & Logistics Coordination",
//     "Complete Documentation & Customs Handling",
//     "Real-Time Shipment Updates"
//   ];
  
//   const globalSourcingServices = [
//     "Supplier Identification & Verification",
//     "Market Research & Price Comparison",
//     "Product Customization & Specifications",
//     "Volume-Based Pricing Negotiations",
//     "Multi-Country Sourcing Strategies",
//     "Quality Control & Factory Audits"
//   ];

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <h3 className="text-3xl md:text-4xl font-bold text-[#0F6EB3] text-center">
//           Our Core Trade Services
//         </h3>
//         <p className="text-center mt-3 text-gray-700 max-w-3xl mx-auto text-lg">
//           Comprehensive export solutions for sourcing, compliance, and global shipping.
//         </p>

//         <div className="mt-12 grid md:grid-cols-2 gap-8">

//           {/* LEFT CARD - Export Services */}
//           <div
//             className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] cursor-pointer"
//             onMouseEnter={() => setHoveredCard('export')}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* Background Image */}
//             <div
//               className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                 hoveredCard === 'export' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
//               }`}
//             >
//               <img
//                src="/images/OurCoreImg.png"
//                 alt="Export Services"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EB3] via-[#0F6EB3]/40 to-transparent" />
              
//               <div className="absolute bottom-8 left-8 right-8">
//                 <h4 className="font-bold text-white text-2xl drop-shadow-lg">
//                   Export Services – End-to-End Execution
//                 </h4>
//                 <p className="text-white/90 text-sm mt-2 drop-shadow">
//                   Tailor-made export solutions based on buyer specifications, volume, and destination markets.
//                 </p>
//               </div>
//             </div>

//             {/* Text Content */}
//             <div
//               className={`absolute inset-0 bg-[#0F6EB3] p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${
//                 hoveredCard === 'export' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//               }`}
//             >
//               <h4 className="font-bold text-white text-2xl mb-6">
//                 Export Services – End-to-End Execution
//               </h4>
//               <ul className="space-y-3">
//                 {exportServices.map((service, index) => (
//                   <li
//                     key={index}
//                     className={`text-white text-base flex items-start transition-all duration-500 ${
//                       hoveredCard === 'export' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//                     }`}
//                     style={{
//                       transitionDelay: hoveredCard === 'export' ? `${index * 100}ms` : '0ms'
//                     }}
//                   >
//                     <span className="mr-3">•</span>
//                     <span>{service}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* RIGHT CARD - Global Sourcing */}
//           <div
//             className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] cursor-pointer"
//             onMouseEnter={() => setHoveredCard('sourcing')}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* Background Image */}
//             <div
//               className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//                 hoveredCard === 'sourcing' ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
//               }`}
//             >
//               <img
//                 src="/images/trade.png"  
//                 alt="Global Sourcing"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EB3] via-[#0F6EB3]/40 to-transparent" />
              
//               <div className="absolute bottom-8 left-8 right-8">
//                 <h4 className="font-bold text-white text-2xl drop-shadow-lg">
//                   Global Sourcing
//                 </h4>
//                 <p className="text-white/90 text-sm mt-2 drop-shadow">
//                   Tailor-made global sourcing solutions based on buyer specifications, volume, and destination markets.
//                 </p>
//               </div>
//             </div>

//             {/* Text Content */}
//             <div
//               className={`absolute inset-0 bg-[#0F6EB3] p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${
//                 hoveredCard === 'sourcing' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//               }`}
//             >
//               <h4 className="font-bold text-white text-2xl mb-6">
//                 Global Sourcing
//               </h4>
//               <ul className="space-y-3">
//                 {globalSourcingServices.map((service, index) => (
//                   <li
//                     key={index}
//                     className={`text-white text-base flex items-start transition-all duration-500 ${
//                       hoveredCard === 'sourcing' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//                     }`}
//                     style={{
//                       transitionDelay: hoveredCard === 'sourcing' ? `${index * 100}ms` : '0ms'
//                     }}
//                   >
//                     <span className="mr-3">•</span>
//                     <span>{service}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//         </div>

//         {/* View All Services Button */}
//         <div className="flex justify-center mt-10">
//           <button className="bg-[#0F6EB3] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#0d5a93] transition-all duration-300 flex items-center gap-2">
//             View All Services
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreTradeServices;







// //last option
// import React, { useState } from "react";

// const CoreTradeServices = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const exportServices = [
//     "Verified Product Sourcing",
//     "Quality Inspection & Compliance",
//     "Export-Grade Packaging",
//     "Freight & Logistics Coordination",
//     "Complete Documentation & Customs Handling",
//     "Real-Time Shipment Updates"
//   ];
//   const globalSourcingServices = [
//   "Supplier Identification & Verification",
//   "Market Research & Price Comparison",
//   "Product Customization & Specifications",
//   "Volume-Based Pricing Negotiations",
//   "Multi-Country Sourcing Strategies",
//   "Quality Control & Factory Audits"
// ];

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <h3 className="text-3xl md:text-4xl font-bold text-[#0F6EB3] text-center">
//           Our Core Trade Services
//         </h3>
//         <p className="text-center mt-3 text-gray-700 max-w-3xl mx-auto text-lg">
//           Comprehensive export solutions for sourcing, compliance, and global shipping.
//         </p>

//         <div className="mt-12 grid md:grid-cols-2 gap-8">

//           {/* LEFT CARD - Export Services with Image & Hover Animation */}
//          <div
//   className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] cursor-pointer"
//   style={{ perspective: '1500px' }}
//   onMouseEnter={() => setHoveredCard('export')}
//   onMouseLeave={() => setHoveredCard(null)}
// >
//             {/* Background Image */}
//             <div
//              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//   hoveredCard === 'export' ? 'opacity-0' : 'opacity-100'
// }`}
// style={{
//   transform: hoveredCard === 'export' ? 'rotateY(180deg)' : 'rotateY(0deg)',
//   transformStyle: 'preserve-3d',
//   backfaceVisibility: 'hidden'
// }}
//             >
//               <img
//                src="/images/OurCoreImg.png"
//                 alt="Export Services"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EB3] via-[#0F6EB3]/40 to-transparent" />
              
//               {/* Title on Image */}
//               <div className="absolute bottom-8 left-8 right-8">
//                 <h4 className="font-bold text-white text-2xl drop-shadow-lg">
//                   Export Services – End-to-End Execution
//                 </h4>
//                 <p className="text-white/90 text-sm mt-2 drop-shadow">
//                   Tailor-made global sourcing solutions based on buyer specifications, volume, and destination markets.
//                 </p>
//               </div>
//             </div>

//             {/* Text Content - Slides up on hover */}
//             <div
//              className={`absolute inset-0 bg-[#0F6EB3] p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${
//   hoveredCard === 'export' ? 'opacity-100' : 'opacity-0'
// }`}
// style={{
//   transform: hoveredCard === 'export' ? 'rotateY(0deg)' : 'rotateY(-180deg)',
//   transformStyle: 'preserve-3d',
//   backfaceVisibility: 'hidden'
// }}
//             >
//               <h4 className="font-bold text-white text-2xl mb-6">
//                 Export Services – End-to-End Execution
//               </h4>
//               <ul className="space-y-3">
//                 {exportServices.map((service, index) => (
//                   <li
//                     key={index}
//                     className={`text-white text-base flex items-start transition-all duration-500 ${
//                       hoveredCard === 'export'
//                         ? 'translate-y-0 opacity-100'
//                         : 'translate-y-8 opacity-0'
//                     }`}
//                     style={{
//                       transitionDelay: hoveredCard === 'export' ? `${index * 100}ms` : '0ms'
//                     }}
//                   >
//                     <span className="mr-3">•</span>
//                     <span>{service}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* RIGHT CARD - Global Sourcing with Image & Hover Animation */}
//          <div
//   className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] cursor-pointer"
//   style={{ perspective: '1500px' }}
//   onMouseEnter={() => setHoveredCard('sourcing')}
//   onMouseLeave={() => setHoveredCard(null)}
// >
//             {/* Background Image */}
//             <div
//              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
//   hoveredCard === 'sourcing' ? 'opacity-0' : 'opacity-100'
// }`}
// style={{
//   transform: hoveredCard === 'sourcing' ? 'rotateY(180deg)' : 'rotateY(0deg)',
//   transformStyle: 'preserve-3d',
//   backfaceVisibility: 'hidden'
// }}
//             >
//               <img
//                 src="/images/trade.png"  
//                 alt="Global Sourcing"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#2e6e9c] via-[#2e6e9c]/40 to-transparent" />
              
//               {/* Title on Image */}
//               <div className="absolute bottom-8 left-8 right-8">
//                 <h4 className="font-bold text-white text-2xl drop-shadow-lg">
//                   Global Sourcing
//                 </h4>
//                 <p className="text-white/90 text-sm mt-2 drop-shadow">
//                   Tailor-made global sourcing solutions based on buyer specifications, volume, and destination markets.
//                 </p>
//               </div>
//             </div>

//             {/* Text Content - Slides up on hover */}
//             <div
//              className={`absolute inset-0 bg-[#0F6EB3] p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${
//   hoveredCard === 'sourcing' ? 'opacity-100' : 'opacity-0'
// }`}
// style={{
//   transform: hoveredCard === 'sourcing' ? 'rotateY(0deg)' : 'rotateY(-180deg)',
//   transformStyle: 'preserve-3d',
//   backfaceVisibility: 'hidden'
// }}
//             >
//               <h4 className="font-bold text-white text-2xl mb-6">
//                 Global Sourcing
//               </h4>
//   <ul className="space-y-3">
//   {globalSourcingServices.map((service, index) => (
//     <li
//       key={index}
//       className={`text-white text-base flex items-start transition-all duration-500 ${
//         hoveredCard === 'sourcing'
//           ? 'translate-y-0 opacity-100'
//           : 'translate-y-8 opacity-0'
//       }`}
//       style={{
//         transitionDelay: hoveredCard === 'sourcing' ? `${index * 100}ms` : '0ms'
//       }}
//     >
//       <span className="mr-3">•</span>
//       <span>{service}</span>
//     </li>
//   ))}
// </ul>
//             </div>
//           </div>

//         </div>

//         {/* View All Services Button */}
//         <div className="flex justify-center mt-10">
//           <button className="bg-[#0F6EB3] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#0d5a93] transition-all duration-300 flex items-center gap-2">
//             View All Services
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreTradeServices;