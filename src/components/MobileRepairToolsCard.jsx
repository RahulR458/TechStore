import React, { useState } from "react";
import toolsData from "/src/data/MobileRepairToolsData.json";

const MobileRepairToolsCard = ({ searchTerm }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const closeModal = () => setSelectedProduct(null);              
  

  const filtered = toolsData.filter((item) => {
      if (!searchTerm) return true;
      const term = searchTerm.toLowerCase();
      return (
        item.name?.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term) ||
        item.productNo?.toLowerCase().includes(term)
      );
    });

  return (
    <section className="px-4 py-8 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#0A0F1C]">
        Mobile Repairing Tools & Equipment
      </h2>

      {/* Horizontal Scroll Section for all devices */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max pb-4">
          {filtered.map((tool, pid) => (
            <div
              key={pid}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 min-w-[250px] max-w-[250px] cursor-pointer"
              onClick={() => setSelectedProduct(tool)}
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2 truncate">
                  {tool.description}
                </p>
                <p className="text-green-600 font-bold text-md mb-2">
                  ₹{tool.price}
                </p>
                <a
                  href={`https://wa.me/919496391811?text=${encodeURIComponent(
                    `I'm interested in "${tool.name}" priced at ₹${tool.price}. Please share more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 hover:bg-green-600 text-white px-3 py-2 text-sm text-center rounded-md transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
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
                Category: {selectedProduct.name}
              </p>
              <p className="text-sm text-gray-500">
                Product No: #{selectedProduct.productNo}
              </p>
              <p className="text-gray-700 font-semibold mt-3">
                Price: ₹{selectedProduct.price}
              </p>
              <p className="text-sm text-gray-500 mt-1 italic">
                {selectedProduct.price >= 500
                  ? "*Free Delivery"
                  : "*Delivery charges may apply"}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MobileRepairToolsCard;
