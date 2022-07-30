// import "./App.css";
import React from "react";
import "./css/ProductCard.css";
import ProductItemCard from "./ProductItemCard";
const itemArray = [
  {
    image: "./assets/dress1.jpeg",
    dressName: "Roadster Middy Dress",
    dressType: "Western",
    time: "After 4 Days",
    offOnItem: "₹200 FOR TWO",
    couponCode: "60% off | Use LNBINGE",
    id: "4535"
  },
  {
    image: "./assets/dress2.jpeg",
    dressName: "Dress Berry",
    dressType: "Western Dress",
    time: "After 2 Days",
    offOnItem: "₹200 FOR TWO",
    couponCode: "60% off | Use LNBINGE",
    id: "4536"
  },
  {
    image: "./assets/dress3.jpeg",
    dressName: "Roadster Jogger",
    dressType: "Indian",
    time: "After 5 Days",
    offOnItem: "₹200 FOR TWO",
    couponCode: "60% off | Use LNBINGE",
    id: "4537"
  },
  {
    image: "./assets/dress4.jpeg",
    dressName: "ONLY FORMAL DRESS",
    dressType: "western Dress",
    time: "After 3 Days",
    offOnItem: "₹200 FOR TWO",
    couponCode: "50% off | Use LNBINGE",
    id: "4538"
  }
];

function ProductCard(props) {
  return (
    <div className="mainWrapper">
      <div className="appBase">
        {itemArray.map((item, id) => {
          return (
            <ProductItemCard
              image={item.image}
              name={item.dressName}
              typeOfFood={item.dressType}
              deliveryTime={item.time}
              offer={item.offOnItem}
              discountOffer={item.couponCode}
              key={id}
            />
          );
        })}
      </div>
      <div className="loadMoreButton">
        <div className="loadMore">Load More</div>
      </div>
    </div>
  );
}

export default ProductCard;
