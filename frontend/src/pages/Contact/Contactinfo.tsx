const infoCards = [
  {
    img: "/icons/call.png",
    title: "Phone Number",
    content: "+91 9550228191",
  },
  {
    img: "/icons/email.png",
    title: "Email Address",
    content: (
      <>
        info@pintglobal.com /<br /> mukesh@pintglobal.com
      </>
    ),
  },
  {
    img: "/icons/location.png",
    title: "Address",
    content: (
      <>
        65-6-361, Mulagada, Malkapuram, <br />
        Visakhapatnam – 530011
      </>
    ),
  },
];

export default function Contactinfo() {
  return (
    <div className="py-8 md:py-12 px-4 sm:px-6 md:px-10">
      <h2 className="text-center text-2xl sm:text-3xl md:text-3xl font-bold text-[#0F6EB3] mb-8 md:mb-10">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {infoCards.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border shadow-md p-4 sm:p-6 md:p-8 text-center"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0F6EB3] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <img src={item.img} alt="" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>

            <h3 className="font-semibold text-base sm:text-lg md:text-lg mb-2">{item.title}</h3>

            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
