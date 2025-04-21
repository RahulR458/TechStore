import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import SearchBar from "./components/SearchBar";
import ProductSection from "./components/ProductSection";
import WhatsAppCard from "./components/WhatsAppCard";
import Footer from "./components/Footer";
import ProductSectionAll from "./components/ProductSectionAll";
import GadgetsSection from "./components/GadgetsSection";
import PromoBanner from "./components/PromoBanner";
import WholesaleSection from "./components/WholesaleSection";

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroBanner />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      {/* <PromoBanner /> */}
      <WholesaleSection />
      {/* <SearchBar /> */}
      <ProductSection searchTerm={searchTerm} />
      {/* <ProductSectionAll /> */}
      <GadgetsSection searchTerm={searchTerm} />
      <WhatsAppCard />
      <Footer />
    </div>
  );
};

export default App;
