// File: frontend/src/pages/TermsAndConditions.jsx

"use client";

import React, { useState } from "react";

const Section = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-5 border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 bg-green-600 text-white font-semibold text-lg flex justify-between items-center hover:brightness-110 transition-all"
      >
        <span>{title}</span>
        <span>{isOpen ? "<" : ">"}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-5 bg-[#f9fafb] text-gray-800 text-sm sm:text-base leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-[#0A0F1C]">
          📜 Terms and Conditions – TechStore Gadgets
        </h1>

        <Section title="1. Introduction">
          <p>Welcome to TechStore! By accessing our website or making a purchase, you agree to our terms and conditions. Please read them carefully.</p>
        </Section>

        <Section title="2. Products">
          <ul className="list-disc pl-5 space-y-1">
            <li>All gadgets listed are 100% genuine and tested before shipment.</li>
            <li>Product images are for reference only; actual items may vary slightly in appearance.</li>
          </ul>
        </Section>

        <Section title="3. Payments">
          <ul className="list-disc pl-5 space-y-1">
            <li>We accept UP</li>
            <li>All payments are processed securely. We do not store your payment information.</li>
          </ul>
        </Section>

        <Section title="4. Shipping">
          <ul className="list-disc pl-5 space-y-1">
            <li>Orders are shipped within 1–3 business days.</li>
            <li>Delivery usually takes 5–7 business days depending on your location.</li>
          </ul>
        </Section>

        <Section title="5. Return & Refund Policy">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>7-Day Return Window</strong>: Return your product within 7 days if it's damaged, defective, or different from what was ordered.</li>
            <li>Products must be <strong>unused</strong> and in <strong>original packaging</strong>.</li>
            <li>Refunds processed within 5–7 business days after we receive the returned item.</li>
            <li>No returns for items damaged due to misuse or unauthorized repairs.</li>
          </ul>
        </Section>

        <Section title="6. Warranty">
          <p>Most gadgets come with a <strong>manufacturer's warranty</strong> (6 to 12 months depending on the brand). Claims must be processed through the brand's service centers.</p>
        </Section>

        <Section title="7. User Responsibilities">
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide accurate information during checkout.</li>
            <li>Do not misuse the website or attempt to breach its security.</li>
          </ul>
        </Section>

        <Section title="8. Contact Us">
          <p>For any queries or issues:</p>
          <ul className="list-disc pl-5 space-y-1">
            {/* <li>Email: support@techstore.com</li> */}
            <li>WhatsApp: +91-94963 91811</li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
