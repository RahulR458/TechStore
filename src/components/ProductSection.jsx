import React, { useState, useRef } from "react";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import products from "/src/data/AccessoriesProductsData.json";

const ProductSection = ({ searchTerm }) => {
  const whatsappNumber = "919633081811";
  const scrollRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const filtered = products.filter((item) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.category?.toLowerCase().includes(term) ||
      item.description?.toLowerCase().includes(term) ||
      item.productNo?.toLowerCase().includes(term)
    );
  });
  
  

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth / 3;
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const closeModal = () => setSelectedProduct(null);

  const toTitleCase = (str) =>
    str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="py-12 bg-gradient-to-br from-gray-100 to-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Mobile Accessories
      </h2>
      <p className="text-center text-gray-600 mb-8 sm:text-md text-sm">
        All mobile covers and screen protectors are available ✅
      </p>

      <div className="relative px-4">
        {/* Arrows */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          onClick={() => scroll("right")}
        >
          <FaChevronRight />
        </button>

        {/* Product Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar gap-6 py-4"
        >
          {filtered.map((p, idx) => {
            const whatsappMsg = encodeURIComponent(
              `Hello! I'm interested in "${p.category}" priced at ₹${p.price}.\n\nProduct Image: ${window.location.origin}${p.img}\nProduct Link: ${window.location.href}\n\nPlease share more details.\n\nEnter Mobile Model: `
            );
            
            

            return (
              <div
                key={idx}
                className="min-w-[300px] max-w-[300px] flex-shrink-0"
                onClick={() => setSelectedProduct(p)}
              >
                <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
                  <img
                    src={p.img}
                    alt={p.category}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {p.category}
                    </h3>
                    <p className="text-gray-600 text-xs font-semibold sm:text-sm line-clamp-1 sm:line-clamp-1">
                      {toTitleCase(p.description)}
                    </p>
                    <h3 className="text-xs text-gray-600 sm:text-base">#{p.productNo}</h3>
                    <p className="text-gray-600 font-medium mb-3">
                      ₹{p.price}
                    </p>

                    <p className="inline-block bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full mb-2">
          All Models Are Available
        </p>

                    {/* <div
                      className="inline-block text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 px-4 py-1 mt-3 rounded-full cursor-pointer transition-all duration-200 shadow-sm"
                      onClick={() => setSelectedProduct(p)}
                    >
                      View Details
                    </div> */}

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 mt-3">
                        <FaWhatsapp className="text-lg" />
                        Tap to Enquire on WhatsApp
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProduct && (
   <div
   className="fixed inset-0 backdrop-blur-md bg-black/20 flex items-center justify-center z-50"
   onClick={closeModal}
 >
    <div
      className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
      onClick={(e) => e.stopPropagation()} // prevents modal itself from triggering close
    >
      <div className="relative">
        <img
          src={selectedProduct.img}
          alt={selectedProduct.category}
          className="w-full h-64 object-contain bg-gray-100"
        />
        <button
          className="absolute top-3 right-3 bg-white text-gray-800 hover:text-red-500 p-2 rounded-full shadow-lg"
          onClick={closeModal}
        >
          ✕
        </button>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800">
          {selectedProduct.description}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Category: {selectedProduct.category}
        </p>
        <p className="text-sm text-gray-500">Product No: #{selectedProduct.productNo}</p>
        <p className="text-gray-700 font-semibold mt-3">
          Price: ₹{selectedProduct.price}
        </p>
        <p className="text-sm text-gray-500 mt-1 italic">
  {selectedProduct.price >= 500 ? "*Free Delivery" : "*Delivery charges may apply"}
</p>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default ProductSection;
