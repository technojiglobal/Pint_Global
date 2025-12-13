// //GlobalSourcing.tsx
// import React from "react";

// interface CardData {
//   id: number;
//   title: string;
//   image: string;
//   points: string[];
// }

// const cards: CardData[] = [
//   {
//     id: 1,
//     title: "Export Services",
//     image: "/images/source-trade.png",
//     points: [
//       "Verified Product Sourcing",
//       "Quality Inspection & Compliance",
//       "Export-Grade Packaging",
//       "Freight & Logistics Coordination",
//       "Complete Documentation & Customs Handling",
//       "Real-Time Shipment Updates",
//     ],
//   },
//   {
//     id: 2,
//     title: "Global Logistics",
//     image: "/images/start-trade.png",
//     points: [
//       "Verified suppliers across India",
//       "Custom product sourcing",
//       "Competitive pricing",
//       "Sample support",
//       "Flexible MOQs",
//       "End-to-end coordination"
//     ],
//   },
// ];

// const GlobalSourcing: React.FC = () => {
//   return (
//     <section className="w-full bg-white py-14">
//       <h2 className="text-center text-4xl font-bold text-[#0F6EB3] mb-10">
//         Global Sourcing
//       </h2>

//       {/* Horizontal scroll container */}
//       <div
//         className="
//           w-full
//           overflow-x-auto
//           overscroll-x-contain
//           [-ms-overflow-style:none]
//           [scrollbar-width:none]
//           [&::-webkit-scrollbar]:hidden
//         "
//       >
//         {/* Cards row */}
//         <div className="flex gap-6 px-4 min-w-max">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className="
//                 flex-shrink-0
//                 flex
//                 gap-4
//                 bg-[#F3F7FB]
//                 border border-black/10
//                 rounded-xl
//                 shadow-md
//                 p-4

//                 w-[90vw]
//                 sm:w-[75vw]
//                 md:w-[65vw]
//                 lg:w-[55vw]

//                 max-sm:flex-col
//               "
//             >
//               {/* Image */}
//               <div className="relative w-[45%] max-sm:w-full">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="
//                     w-full
//                     h-[320px]
//                     max-sm:h-[250px]
//                     object-cover
//                     rounded-lg
//                   "
//                 />

//                 <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-[#0F6EB3]/40 to-[#2e6e9c]" />
//               </div>

//               {/* Text */}
//               <div className="w-[55%] max-sm:w-full">
//                 <h3 className="text-2xl font-bold text-[#0F6EB3] mb-4 max-sm:text-center">
//                   {card.title}
//                 </h3>

//                 <ul className="space-y-2 max-sm:px-3">
//                   {card.points.map((point, i) => (
//                     <li key={i} className="flex items-start  font-semibold text-lg">
//                       <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3" />
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobalSourcing;







//option - 1

// //GlobalSourcing.tsx
// import React, { useState } from "react";

// interface CardData {
//   id: number;
//   title: string;
//   image: string;
//   points: string[];
// }

// const cards: CardData[] = [
//   {
//     id: 1,
//     title: "Export Services",
//     image: "/images/source-trade.png",
//     points: [
//       "Verified Product Sourcing",
//       "Quality Inspection & Compliance",
//       "Export-Grade Packaging",
//       "Freight & Logistics Coordination",
//       "Complete Documentation & Customs Handling",
//       "Real-Time Shipment Updates",
//     ],
//   },
//   {
//     id: 2,
//     title: "Global Logistics",
//     image: "/images/start-trade.png",
//     points: [
//       "Verified suppliers across India",
//       "Custom product sourcing",
//       "Competitive pricing",
//       "Sample support",
//       "Flexible MOQs",
//       "End-to-end coordination"
//     ],
//   },
// ];

// const GlobalSourcing: React.FC = () => {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   return (
//     <section className="w-full bg-white py-14">
//       <h2 className="text-center text-4xl font-bold text-[#0F6EB3] mb-10">
//         Global Sourcing
//       </h2>

//       {/* Horizontal scroll container */}
//       <div
//         className="
//           w-full
//           overflow-x-auto
//           overscroll-x-contain
//           [-ms-overflow-style:none]
//           [scrollbar-width:none]
//           [&::-webkit-scrollbar]:hidden
//         "
//       >
//         {/* Cards row */}
//         <div className="flex gap-6 px-4 min-w-max">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className="
//                 flex-shrink-0
//                 flex
//                 gap-4
//                 bg-[#F3F7FB]
//                 border border-black/10
//                 rounded-xl
//                 shadow-md
//                 p-4
//                 transition-all
//                 duration-500
//                 ease-in-out
//                 hover:shadow-2xl
//                 hover:scale-105
//                 cursor-pointer

//                 w-[90vw]
//                 sm:w-[75vw]
//                 md:w-[65vw]
//                 lg:w-[55vw]

//                 max-sm:flex-col
//               "
//               onMouseEnter={() => setHoveredCard(card.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Image */}
//               <div className="relative w-[45%] max-sm:w-full overflow-hidden rounded-lg">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className={`
//                     w-full
//                     h-[320px]
//                     max-sm:h-[250px]
//                     object-cover
//                     rounded-lg
//                     transition-transform
//                     duration-700
//                     ease-in-out
//                     ${hoveredCard === card.id ? 'scale-110' : 'scale-100'}
//                   `}
//                 />

//                 <div 
//                   className={`
//                     absolute 
//                     inset-0 
//                     rounded-lg 
//                     bg-gradient-to-b 
//                     from-transparent 
//                     via-[#0F6EB3]/40 
//                     to-[#2e6e9c]
//                     transition-opacity
//                     duration-500
//                     ${hoveredCard === card.id ? 'opacity-60' : 'opacity-100'}
//                   `}
//                 />
//               </div>

//               {/* Text */}
//               <div className="w-[55%] max-sm:w-full">
//                 <h3 
//                   className={`
//                     text-2xl 
//                     font-bold 
//                     text-[#0F6EB3] 
//                     mb-4 
//                     max-sm:text-center
//                     transition-all
//                     duration-500
//                     ${hoveredCard === card.id ? 'scale-110 text-[#0d5a93]' : 'scale-100'}
//                   `}
//                 >
//                   {card.title}
//                 </h3>

//                 <ul className="space-y-2 max-sm:px-3">
//                   {card.points.map((point, i) => (
//                     <li 
//                       key={i} 
//                       className={`
//                         flex 
//                         items-start  
//                         font-semibold 
//                         text-lg
//                         transition-all
//                         duration-500
//                         ${hoveredCard === card.id 
//                           ? 'translate-x-2 opacity-100' 
//                           : 'translate-x-0 opacity-90'
//                         }
//                       `}
//                       style={{
//                         transitionDelay: hoveredCard === card.id ? `${i * 80}ms` : '0ms'
//                       }}
//                     >
//                       <span 
//                         className={`
//                           w-2 
//                           h-2 
//                           rounded-full 
//                           mt-2 
//                           mr-3
//                           transition-all
//                           duration-500
//                           ${hoveredCard === card.id 
//                             ? 'bg-[#0F6EB3] scale-150' 
//                             : 'bg-black scale-100'
//                           }
//                         `}
//                       />
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobalSourcing;





//ooption-3

// //GlobalSourcing.tsx
// import React, { useState, useEffect, useRef } from "react";

// interface CardData {
//   id: number;
//   title: string;
//   image: string;
//   points: string[];
// }

// const cards: CardData[] = [
//   {
//     id: 1,
//     title: "Export Services",
//     image: "/images/source-trade.png",
//     points: [
//       "Verified Product Sourcing",
//       "Quality Inspection & Compliance",
//       "Export-Grade Packaging",
//       "Freight & Logistics Coordination",
//       "Complete Documentation & Customs Handling",
//       "Real-Time Shipment Updates",
//     ],
//   },
//   {
//     id: 2,
//     title: "Global Logistics",
//     image: "/images/start-trade.png",
//     points: [
//       "Verified suppliers across India",
//       "Custom product sourcing",
//       "Competitive pricing",
//       "Sample support",
//       "Flexible MOQs",
//       "End-to-end coordination"
//     ],
//   },
// ];

// const GlobalSourcing: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isHovered, setIsHovered] = useState<boolean>(false);
//   const [direction, setDirection] = useState<'left' | 'right'>('right');
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     if (!isHovered) {
//       intervalRef.current = setInterval(() => {
//         setDirection('right');
//         setCurrentIndex((prev) => (prev + 1) % cards.length);
//       }, 4000);
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [isHovered]);

//   const goToCard = (index: number) => {
//     setDirection(index > currentIndex ? 'right' : 'left');
//     setCurrentIndex(index);
//   };

//   const nextCard = () => {
//     setDirection('right');
//     setCurrentIndex((prev) => (prev + 1) % cards.length);
//   };

//   const prevCard = () => {
//     setDirection('left');
//     setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
//   };

//   return (
//     <section className="w-full bg-white py-14 overflow-hidden">
//       <h2 className="text-center text-4xl font-bold text-[#0F6EB3] mb-10">
//         Global Sourcing
//       </h2>

//       <div 
//         className="relative max-w-7xl mx-auto px-4"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Cards Container */}
//         <div className="relative h-[450px] max-sm:h-[600px]">
//           {cards.map((card, index) => {
//             const isActive = index === currentIndex;
//             const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;
//             const isNext = index === (currentIndex + 1) % cards.length;

//             let translateX = '100%';
//             let opacity = 0;
//             let scale = 0.8;
//             let zIndex = 0;

//             if (isActive) {
//               translateX = '0%';
//               opacity = 1;
//               scale = 1;
//               zIndex = 10;
//             } else if (isPrev) {
//               translateX = '-100%';
//               opacity = 0;
//               scale = 0.8;
//               zIndex = 5;
//             } else if (isNext) {
//               translateX = '100%';
//               opacity = 0;
//               scale = 0.8;
//               zIndex = 5;
//             }

//             return (
//               <div
//                 key={card.id}
//                 className="absolute inset-0 transition-all duration-700 ease-in-out"
//                 style={{
//                   transform: `translateX(${translateX}) scale(${scale})`,
//                   opacity: opacity,
//                   zIndex: zIndex,
//                 }}
//               >
//                 <div className="flex gap-6 bg-[#F3F7FB] border border-black/10 rounded-xl shadow-xl p-6 h-full max-sm:flex-col">
//                   {/* Image Section */}
//                   <div className="relative w-[45%] max-sm:w-full overflow-hidden rounded-lg group">
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-[#0F6EB3]/40 to-[#2e6e9c] transition-opacity duration-500 group-hover:opacity-70" />
//                   </div>

//                   {/* Text Section */}
//                   <div className="w-[55%] max-sm:w-full flex flex-col justify-center">
//                     <h3 className="text-3xl font-bold text-[#0F6EB3] mb-6 max-sm:text-center">
//                       {card.title}
//                     </h3>

//                     <ul className="space-y-3">
//                       {card.points.map((point, i) => (
//                         <li 
//                           key={i} 
//                           className="flex items-start font-semibold text-lg transition-all duration-500"
//                           style={{
//                             opacity: isActive ? 1 : 0,
//                             transform: isActive ? 'translateY(0)' : 'translateY(20px)',
//                             transitionDelay: isActive ? `${i * 100}ms` : '0ms'
//                           }}
//                         >
//                           <span className="w-2 h-2 bg-[#0F6EB3] rounded-full mt-2 mr-3 flex-shrink-0" />
//                           <span>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevCard}
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-[#0F6EB3] text-[#0F6EB3] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 group"
//           aria-label="Previous card"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={nextCard}
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-[#0F6EB3] text-[#0F6EB3] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 group"
//           aria-label="Next card"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Dots Navigation */}
//         <div className="flex justify-center gap-3 mt-8">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToCard(index)}
//               className={`
//                 transition-all duration-300 rounded-full
//                 ${index === currentIndex 
//                   ? 'w-8 h-3 bg-[#0F6EB3]' 
//                   : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
//                 }
//               `}
//               aria-label={`Go to card ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobalSourcing;







// //option - 4
// //GlobalSourcing.tsx
// import React, { useState, useEffect, useRef } from "react";

// interface CardData {
//   id: number;
//   title: string;
//   image: string;
//   points: string[];
// }

// const cards: CardData[] = [
//   {
//     id: 1,
//     title: "Export Services",
//     image: "/images/source-trade.png",
//     points: [
//       "Verified Product Sourcing",
//       "Quality Inspection & Compliance",
//       "Export-Grade Packaging",
//       "Freight & Logistics Coordination",
//       "Complete Documentation & Customs Handling",
//       "Real-Time Shipment Updates",
//     ],
//   },
//   {
//     id: 2,
//     title: "Global Logistics",
//     image: "/images/start-trade.png",
//     points: [
//       "Verified suppliers across India",
//       "Custom product sourcing",
//       "Competitive pricing",
//       "Sample support",
//       "Flexible MOQs",
//       "End-to-end coordination"
//     ],
//   },
// ];

// const GlobalSourcing: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isHovered, setIsHovered] = useState<boolean>(false);
//   const [direction, setDirection] = useState<'left' | 'right'>('right');
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     if (!isHovered) {
//       intervalRef.current = setInterval(() => {
//         setDirection('right');
//         setCurrentIndex((prev) => (prev + 1) % cards.length);
//       }, 3000);
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [isHovered]);

//   const goToCard = (index: number) => {
//     setDirection(index > currentIndex ? 'right' : 'left');
//     setCurrentIndex(index);
//   };

//   const nextCard = () => {
//     setDirection('right');
//     setCurrentIndex((prev) => (prev + 1) % cards.length);
//   };

//   const prevCard = () => {
//     setDirection('left');
//     setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
//   };

//   return (
//     <section className="w-full bg-white py-14 overflow-hidden">
//       <h2 className="text-center text-4xl font-bold text-[#0F6EB3] mb-10">
//         Global Sourcing
//       </h2>

//       <div 
//         className="relative max-w-7xl mx-auto px-4"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Cards Container */}
//         <div className="relative h-[450px] max-sm:h-[600px]">
//           {cards.map((card, index) => {
//             const isActive = index === currentIndex;
//             const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;
//             const isNext = index === (currentIndex + 1) % cards.length;

//             let translateX = '100%';
//             let opacity = 0;
//             let scale = 0.8;
//             let zIndex = 0;

//             if (isActive) {
//               translateX = '0%';
//               opacity = 1;
//               scale = 1;
//               zIndex = 10;
//             } else if (isPrev) {
//               translateX = '-100%';
//               opacity = 0;
//               scale = 0.8;
//               zIndex = 5;
//             } else if (isNext) {
//               translateX = '100%';
//               opacity = 0;
//               scale = 0.8;
//               zIndex = 5;
//             }

//             return (
//               <div
//                 key={card.id}
//                 className="absolute inset-0 transition-all duration-1000 ease-in-out"
//                 style={{
//                   transform: `translateX(${translateX}) scale(${scale})`,
//                   opacity: opacity,
//                   zIndex: zIndex,
//                   pointerEvents: isActive ? 'auto' : 'none',
//                 }}
//               >
//                 <div className="flex gap-6 bg-[#F3F7FB] border border-black/10 rounded-xl shadow-xl p-6 h-full max-sm:flex-col">
//                   {/* Image Section */}
//                   <div className="relative w-[45%] max-sm:w-full overflow-hidden rounded-lg group">
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className={`
//                         w-full h-full object-cover rounded-lg 
//                         transition-all duration-1000 ease-out
//                         ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
//                         group-hover:scale-110
//                       `}
//                       style={{
//                         transitionDelay: isActive ? '200ms' : '0ms'
//                       }}
//                     />
//                     <div className={`
//                       absolute inset-0 rounded-lg bg-gradient-to-b 
//                       from-transparent via-[#0F6EB3]/40 to-[#2e6e9c] 
//                       transition-opacity duration-700
//                       ${isActive ? 'opacity-100' : 'opacity-0'}
//                       group-hover:opacity-70
//                     `} 
//                     style={{
//                       transitionDelay: isActive ? '400ms' : '0ms'
//                     }}
//                     />
//                   </div>

//                   {/* Text Section */}
//                   <div className="w-[55%] max-sm:w-full flex flex-col justify-center">
//                     <h3 
//                       className={`
//                         text-3xl font-bold text-[#0F6EB3] mb-6 max-sm:text-center
//                         transition-all duration-700 ease-out
//                         ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//                       `}
//                       style={{
//                         transitionDelay: isActive ? '400ms' : '0ms'
//                       }}
//                     >
//                       {card.title}
//                     </h3>

//                     <ul className="space-y-3">
//                       {card.points.map((point, i) => (
//                         <li 
//                           key={i} 
//                           className={`
//                             flex items-start font-semibold text-lg 
//                             transition-all duration-700 ease-out
//                             ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
//                           `}
//                           style={{
//                             transitionDelay: isActive ? `${600 + i * 150}ms` : '0ms'
//                           }}
//                         >
//                           <span className="w-2 h-2 bg-[#0F6EB3] rounded-full mt-2 mr-3 flex-shrink-0" />
//                           <span>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevCard}
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-[#0F6EB3] text-[#0F6EB3] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 group"
//           aria-label="Previous card"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         <button
//           onClick={nextCard}
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-[#0F6EB3] text-[#0F6EB3] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 group"
//           aria-label="Next card"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Dots Navigation */}
//         <div className="flex justify-center gap-3 mt-8">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToCard(index)}
//               className={`
//                 transition-all duration-300 rounded-full
//                 ${index === currentIndex 
//                   ? 'w-8 h-3 bg-[#0F6EB3]' 
//                   : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
//                 }
//               `}
//               aria-label={`Go to card ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobalSourcing;





//option-5

//GlobalSourcing.tsx
import React, { useState, useEffect, useRef } from "react";

interface CardData {
  id: number;
  title: string;
  image: string;
  points: string[];
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Export Services",
    image: "/images/source-trade.png",
    points: [
      "Verified Product Sourcing",
      "Quality Inspection & Compliance",
      "Export-Grade Packaging",
      "Freight & Logistics Coordination",
      "Complete Documentation & Customs Handling",
      "Real-Time Shipment Updates",
    ],
  },
  {
    id: 2,
    title: "Global Logistics",
    image: "/images/start-trade.png",
    points: [
      "Verified suppliers across India",
      "Custom product sourcing",
      "Competitive pricing",
      "Sample support",
      "Flexible MOQs",
      "End-to-end coordination"
    ],
  },
];

const GlobalSourcing: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setDirection('right');
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  const goToCard = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const nextCard = () => {
    setDirection('right');
    setCurrentIndex((prev) => {
      const next = prev + 1;
      // Loop back to start if at end
      return next >= cards.length ? 0 : next;
    });
  };

  const prevCard = () => {
    setDirection('left');
    setCurrentIndex((prev) => {
      const previous = prev - 1;
      // Loop to end if at start
      return previous < 0 ? cards.length - 1 : previous;
    });
  };

  return (
    <section className="w-full bg-white py-14 overflow-hidden">
      <h2 className="text-center text-4xl font-bold text-[#0F6EB3] mb-10">
        Global Sourcing
      </h2>

      <div 
        className="relative max-w-7xl mx-auto px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Cards Container */}
        <div className="relative h-[450px] max-sm:h-[600px] overflow-hidden">
          {cards.map((card, index) => {
            const isActive = index === currentIndex;
            
            let translateX = '0%';
            let opacity = 1;
            let zIndex = 10;

            if (index < currentIndex) {
              // Cards that have been shown - move to left
              translateX = '-100%';
              opacity = 0;
              zIndex = 5;
            } else if (index > currentIndex) {
              // Cards waiting to be shown - stay on right
              translateX = '100%';
              opacity = 0;
              zIndex = 5;
            }

            return (
              <div
                key={card.id}
                className="absolute inset-0 transition-all duration-1000 ease-in-out"
                style={{
                  transform: `translateX(${translateX})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <div className="flex gap-6 bg-[#F3F7FB] border border-black/10 rounded-xl shadow-xl p-6 h-full max-sm:flex-col">
                  {/* Image Section */}
                  <div className="relative w-[45%] max-sm:w-full overflow-hidden rounded-lg group">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`
                        w-full h-full object-cover rounded-lg 
                        transition-all duration-1000 ease-out
                        ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
                        group-hover:scale-110
                      `}
                      style={{
                        transitionDelay: isActive ? '200ms' : '0ms'
                      }}
                    />
                    <div className={`
                      absolute inset-0 rounded-lg bg-gradient-to-b 
                      from-transparent via-[#0F6EB3]/40 to-[#2e6e9c] 
                      transition-opacity duration-700
                      ${isActive ? 'opacity-100' : 'opacity-0'}
                      group-hover:opacity-70
                    `} 
                    style={{
                      transitionDelay: isActive ? '400ms' : '0ms'
                    }}
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-[55%] max-sm:w-full flex flex-col justify-center">
                    <h3 
                      className={`
                        text-3xl font-bold text-[#0F6EB3] mb-6 max-sm:text-center
                        transition-all duration-700 ease-out
                        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                      `}
                      style={{
                        transitionDelay: isActive ? '400ms' : '0ms'
                      }}
                    >
                      {card.title}
                    </h3>

                    <ul className="space-y-3">
                      {card.points.map((point, i) => (
                        <li 
                          key={i} 
                          className={`
                            flex items-start font-semibold text-lg 
                            transition-all duration-700 ease-out
                            ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                          `}
                          style={{
                            transitionDelay: isActive ? `${600 + i * 150}ms` : '0ms'
                          }}
                        >
                          <span className="w-2 h-2 bg-[#0F6EB3] rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevCard}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-[#0F6EB3] text-[#0F6EB3] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 group"
          aria-label="Previous card"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextCard}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-[#0F6EB3] text-[#0F6EB3] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 z-20 group"
          aria-label="Next card"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`
                transition-all duration-300 rounded-full
                ${index === currentIndex 
                  ? 'w-8 h-3 bg-[#0F6EB3]' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSourcing;