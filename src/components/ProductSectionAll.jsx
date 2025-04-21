import React from "react";

const mobileAccessories = [
  { title: "Mobile Cover", img: "/cover.jpg" },
  { title: "Display Combo", img: "/combo.jpg" },
  { title: "Screen Protector", img: "/protector.jpg" },
];

const gadgets = [
  { title: "Charger", img: "/charger.jpg" },
  { title: "Trimmer", img: "/trimmer.jpg" },
  { title: "Speaker", img: "/speaker.jpg" },
  { title: "Earbuds", img: "/earbuds.jpg" },
];

const ProductSectionAll = () => {
  return (
    <div className="py-10 bg-gray-100">
      {/* Mobile Accessories */}
      <h2 className="text-3xl text-center font-semibold mb-6">Mobile Accessories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-10">
        {mobileAccessories.map((p, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl overflow-hidden text-center"
          >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-black">
              <h3 className="text-xl font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Gadgets */}
      <h2 className="text-3xl text-center font-semibold mb-6">Gadgets</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {gadgets.map((p, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl overflow-hidden text-center"
          >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-black">
              <h3 className="text-xl font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSectionAll;
