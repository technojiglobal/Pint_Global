import React from "react";

interface ProductItem {
  title: string;
  img: string;
  desc: string;
}

interface ProductsPreviewProps {
  heading: string;
  subheading: string;
  products: ProductItem[];
}

const Productsreview: React.FC<ProductsPreviewProps> = ({
  heading,
  subheading,
  products,
}) => {
  return (
    <section className="bg-[#0F6EB30D] py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-3xl font-bold text-center text-[#0F6EB3]">
          {heading}
        </h3>

        <p className="text-center mt-2 text-lg">
          {subheading}
        </p>

        {/* Cards */}
        <div
          className="
            mt-12 
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8
          "
        >
          {products.map((p, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-white"
            >
              {/* Image Wrapper (Fixed height + responsive fit) */}
              <div className="p-1">
              <div className="w-full  rounded-t-xl h-52 sm:h-64 lg:h-72 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Footer */}
              <div className="bg-[#E7F3FF] px-4 py-4 rounded-b-xl h-full border-t-4 border-white">
                <h4 className="font-bold text-[#0F6EB3] text-xl">
                  {p.title}
                </h4>
                <p className="text-sm text-[#0F6EB3] font-semibold mt-1 leading-relaxed">
                  {p.desc}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Productsreview;
