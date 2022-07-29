import React from "react";
import img1 from "./banner-and-eCommerce.jpg";
import "./CartItemCard.css";
function CartItemCard(props) {
  const onRemoveItem = () => {
    if (props.onRemoveItem) {
      props.onRemoveItem();
    }
  };
  const onAddItem = () => {
    if (props.onAddItem) {
      props.onAddItem();
    }
  };
  return (
    <div className="cartItemBase">
      <div className="image">
        <img
          src={props.image ? props.image : img1}
          alt={props.title}
          width={"100%"}
          height={165}
        />
      </div>
      <div className="foodName">{props.name}</div>
      <div className="foodType">{props.typeOfFood}</div>
      <div className="deliveryOfferAndTime">
        <div className="deliveryTime">{props.deliveryTime}</div>
        <div className="deliveryOffer">{props.offer}</div>
      </div>
      <div className="discountOffer">{props.discountOffer}</div>
      <div className="buttonWrapper">
        <div className="addToCartWrapper" onClick={() => onAddItem()}>
          <div className="addToCart">Add To Cart</div>
        </div>
        <div className="RemoveWrapper" onClick={() => onRemoveItem()}>
          <div className="deleteItem">Delete From Cart</div>
        </div>
      </div>
    </div>
  );
}
export default CartItemCard;
