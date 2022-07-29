import React from "react";
import "./css/LandingHeader.css";
const category = [
  {
    label: "Men"
  },
  {
    label: "Women"
  },
  {
    label: "Kids"
  },
  {
    label: "Beauty"
  }
];
function LandingHeader(props) {
  return (
    <div className="headerBase">
      <div className="headerWrapper">
        <div className="topCategory">
          <div className="logo">NFTBOOK.IO</div>
          <div className="category">
            {category.map((categories, id) => {
              return (
                <div key={id} className="categoryName">
                  {categories.label}
                </div>
              );
            })}
          </div>
        </div>
        <div className="rightSideWrapper">
          <div className="searchWrapper">
            <input
              type="text"
              placeholder="Search.."
              className="inputWrapper"
            ></input>
          </div>
          <div className="login">Login</div>
          <div className="wishlist">Wishlist</div>
          <div className="bag">Bag</div>
          <div className="myAccountWrapper">
            <div className="myAccount">My Account</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingHeader;
