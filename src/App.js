import "./App.css";
import React from "react";
import Footer from "./LandingPageDemo/Components/Footer";
import ImageSlider from "./LandingPageDemo/Components/ImageSlider";
import ProductCard from "./LandingPageDemo/Components/ProductCard";
import LandingHeader from "./LandingPageDemo/Components/LandingHeader";

function App() {
  return (
    <React.Fragment>
      <div className="rootWrapper">
        <LandingHeader />
        <ImageSlider />
        <ProductCard />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
