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
    <div className="py-12">
      <h2 className="text-center text-3xl font-bold text-[#0B63CE] mb-10">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {infoCards.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border shadow-md p-8 text-center"
          >
            {/* Icon Circle */}
            <div className="w-20 h-20 bg-[#0B63CE] rounded-full flex items-center justify-center mx-auto mb-4">
              <img src={item.img} alt="" className="w-10 h-10" />
            </div>

            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
