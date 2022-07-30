import React from "react";
import "./AboutPage.css";
import img1 from "./banner-and-eCommerce.jpg";

function AboutPage(props) {
  return (
    <div className="aboutPageWrapper">
      <img src={img1} width={"100%"} alt="shopping_banner" height={"500px"} />
    </div>
  );
}
export default AboutPage;
