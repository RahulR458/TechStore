import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import gadgetProducts from "/src/data/gadgetProductsData.json";


// const filters = ["All", "Charger", "Trimmer", "Speaker", "Earbuds"];
const filters = ["All", ...new Set(gadgetProducts.map(product => product.category))];
const sortOptions = ["Default", "Low to High", "High to Low"];

const whatsappNumber = "+919633081811"; // Your number here
const whatsappMessage = "Hello, I'm interested in your product"; // Your message here
const productUrlBase = "https://yourwebsite.com/products"; // Base product URL


const GadgetsSection = ({ searchTerm }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState(null);


  // const filtered = gadgetProducts.filter((item) =>
  //   (item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //    item.number?.toLowerCase().includes(searchTerm.toLowerCase()))
  // );
  


  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  // Filtering + Searching + Sorting
  const filteredGadgets = gadgetProducts
  .filter((product) =>
    selectedFilter === "All" ? true : product.category === selectedFilter
  )
  // .filter((product) => {
  //   const titleMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
  //   const numberMatch = product.productNumber.toString().includes(searchQuery);
  //   return titleMatch || numberMatch;
  // })
  .filter((product) => {
    const combinedQuery = searchQuery || searchTerm || "";
    const titleMatch = product.title?.toLowerCase().includes(combinedQuery.toLowerCase());
    const numberMatch = product.productNumber?.toString().includes(combinedQuery);
    return titleMatch || numberMatch;
  })
  
  .sort((a, b) => {
    if (sortBy === "Low to High") return a.price - b.price;
    if (sortBy === "High to Low") return b.price - a.price;
    return 0;
  });


  


  const visibleProducts = filteredGadgets.slice(0, visibleCount);

  const closeModal = () => setSelectedProduct(null);  


  const toTitleCase = (str) =>
    str
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl text-center font-semibold mb-6">Gadgets</h2>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-11/12 sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

    {/* Filters and Sorting */}
<div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 px-4">
  <div className="flex flex-col w-full md:w-auto">
    <label className="text-sm text-gray-600 mb-1 font-medium uppercase tracking-wider text-center md:text-left">
      Filter by Item
    </label>
    <select
      onChange={(e) => setSelectedFilter(e.target.value)}
      value={selectedFilter}
      className="w-full md:w-52 px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200"
    >
      {filters.map((filter, idx) => (
        <option key={idx} value={filter}>
          {filter}
        </option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full md:w-auto">
    <label className="text-sm text-gray-600 mb-1 font-medium uppercase tracking-wider text-center md:text-left">
      Sort by Price
    </label>
    <select
      onChange={(e) => setSortBy(e.target.value)}
      value={sortBy}
      className="w-full md:w-52 px-4 py-2 bg-white text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200"
    >
      {sortOptions.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
</div>


      {/* Product Cards */}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4" >
  {visibleProducts.length > 0 ? (
    visibleProducts.map((p, idx) => {
      const productSlug = p.title.toLowerCase().replace(/\s+/g, "-");
      const pageUrl = `${productUrlBase}/${productSlug}`;
      const imageUrl = p.img.startsWith("http") ? p.img : `https://yourwebsite.com${p.img}`;

      const message = `Hello, I'm interested in this product:\n\n*Title:* ${p.title}\n*Category:* ${p.category}\n*Product Number :* ${p.productNumber}\n*Price:* ₹${p.price}\n*Image:* ${imageUrl}\n*Link:* ${pageUrl}`;
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
     

      return (
        <div
  
  className="block"
  onClick={() => setSelectedProduct(p)}
  key={idx}
>
  <div className="bg-white shadow-md rounded-sm overflow-hidden text-center relative cursor-pointer transition-shadow duration-300 hover:shadow-lg
    h-72 sm:h-80"
  >
    {/* Product Image */}
    <img
      src={p.img}
      alt={p.title}
      className="w-full h-36 object-cover sm:h-48"
    />

<div className="p-3 text-black sm:p-4">
  <h3 className="text-xs font-semibold sm:text-sm line-clamp-2 sm:line-clamp-1">
    {toTitleCase(p.title)}
  </h3>
  <h3 className="text-xs text-gray-600 sm:text-base">#{p.productNumber}</h3>
  <p className="mt-1 text-sm font-medium text-gray-700 sm:text-base">₹{p.price}</p>
</div>



    {/* WhatsApp Full Width CTA on Mobile */}
    <a
  className="absolute bottom-0 left-0 w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-1 sm:bottom-3 sm:right-3 sm:left-auto sm:rounded-md sm:px-3 sm:w-auto flex items-center justify-center gap-2 rounded-none"
  title="Chat on WhatsApp"
  key={idx}
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()} // <- This line prevents modal trigger
>
  <FaWhatsapp size={16} className="sm:text-lg" />
  <span className="text-sm font-medium sm:text-sm">Tap to order</span>
</a>

  </div>
</div>


      );
    })
  ) : (
    <p className="text-center col-span-full text-gray-500 text-lg">
      No products found.
    </p>
  )}
</div>

      {/* View More Button */}
      {visibleCount < filteredGadgets.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all"
          > 
            View More
          </button>
        </div>
      )}



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
          {selectedProduct.title}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Category: {selectedProduct.category}
        </p>
        <p className="text-sm text-gray-500">Product No: #{selectedProduct.productNumber}</p>
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

export default GadgetsSection;
