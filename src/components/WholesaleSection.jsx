import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WholesaleSection = () => {
  const whatsappNumber = "919633081811"; // Replace with your WhatsApp number
  const message = "Hello, I'm interested in wholesale pricing. Please share details.";

  return (
    <section className="bg-gradient-to-r from-green-100 to-green-50 py-10 px-6 sm:px-10 rounded-2xl shadow-lg mx-4 md:mx-auto max-w-5xl my-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800">
            📦 Wholesale Available
          </h2>
          <p className="text-sm sm:text-base text-green-700 mt-2">
            Looking to buy in bulk? We offer special prices for wholesale orders.
            Reach out to us directly for more details.
          </p>
        </div>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow-md transition-all text-sm sm:text-base whitespace-nowrap"
        >
          <FaWhatsapp className="text-lg" />
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default WholesaleSection;
