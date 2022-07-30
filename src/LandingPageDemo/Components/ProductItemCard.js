import React from "react";
import "./css/ProductItemCard.css";
function ProductItemCard(props) {
  return (
    <div className="cartItemBase">
      <div className="image">
        <img
          src={props.image}
          alt={props.title}
          width={"100%"}
          height={"245px"}
        />
      </div>
      <div className="foodName">{props.name}</div>
      <div className="foodType">{props.typeOfFood}</div>
      <div className="deliveryOfferAndTime">
        <div className="deliveryTime">{props.deliveryTime}</div>
        <div className="deliveryOffer">{props.offer}</div>
      </div>
      <div className="discountOffer">{props.discountOffer}</div>
    </div>
  );
}
export default ProductItemCard;
