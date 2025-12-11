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

const Productsreview: React.FC<ProductsPreviewProps> = ({ heading, subheading, products }) => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h3 className="text-3xl font-bold text-center text-[#0F6EB3]">
          {heading}
        </h3>

        <p className="text-center mt-2 text-[#0B3B63]">
          {subheading}
        </p>

        {/* Cards */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
          {products.map((p, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-white w-full md:w-1/3"
            >
              {/* Image */}
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Footer */}
              <div className="bg-[#E7F3FF] px-4 py-4">
                <h4 className="font-semibold text-[#0F6EB3] text-lg">
                  {p.title}
                </h4>
                <p className="text-sm text-[#0B3B63] mt-1">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Productsreview;
