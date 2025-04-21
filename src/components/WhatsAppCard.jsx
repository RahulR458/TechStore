import React from "react";

const WhatsAppCard = () => {
  return (
    <div className="bg-green-600 text-white p-6 rounded-xl text-center mx-4 my-6 shadow-md">
      <h3 className="text-2xl font-bold">Need Help?</h3>
      <p className="mt-2">Chat with us on WhatsApp!</p>
      <a
        href="https://wa.me/919633081811?text=Hi%2C%20I%20need%20help%20regarding%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-white text-green-600 px-4 py-2 rounded-md font-semibold"
      >
        Chat Now
      </a>
    </div>
  );
};

export default WhatsAppCard;
