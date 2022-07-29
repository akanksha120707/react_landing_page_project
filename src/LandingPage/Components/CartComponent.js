// import "./App.css";
import React, { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import logoImage from "./logo.png";
import "./CartComponent.css";
const itemArray = [
  {
    dishImage: "food1.jpeg",
    restaurantName: "Shri Balaji Dhaba",
    foodType: "Indian, Chinese",
    time: "42 MINS",
    offOnItem: "₹200 FOR TWO",
    couponCode: "60% off | Use LNBINGE",
    id: "4535"
  },
  {
    dishImage: "food2.jpeg",
    restaurantName: "Kwality Walls  Dessert Shop",
    foodType: "Indian, Chinese",
    time: "42 MINS",
    offOnItem: "₹200 FOR TWO",
    couponCode: "60% off | Use LNBINGE",
    id: "4536"
  },
  {
    dishImage: "food3.jpeg",
    restaurantName: "Radhey Lal Premium Sweets",
    foodType: "Chinese, South Indian, Snacks, Desserts",
    time: "33 MINS",
    offOnItem: "₹200 FOR TWO",
    couponCode: "60% off | Use LNBINGE",
    id: "4537"
  },
  {
    dishImage: "food4.jpeg",
    restaurantName: "Baba Ka Dhaba Alambagh",
    foodType: "Indian, Chinese, Thalis",
    time: "35 MINS",
    offOnItem: "₹200 FOR TWO",
    couponCode: "50% off | Use LNBINGE",
    id: "4538"
  },
  {
    dishImage: "food4.jpeg",
    restaurantName: "Dominos",
    foodType: "Indian, Chinese, Thalis",
    time: "35 MINS",
    offOnItem: "₹200 FOR TWO",
    couponCode: "50% off | Use LNBINGE",
    id: "4539"
  },
  {
    dishImage: "food4.jpeg",
    restaurantName: "McDonald",
    foodType: "Indian, Chinese, Thalis",
    time: "35 MINS",
    offOnItem: "₹200 FOR TWO",
    couponCode: "50% off | Use LNBINGE",
    id: "4539"
  },
  {
    dishImage: "food4.jpeg",
    restaurantName: "Tundey Kabab",
    foodType: "Indian, Chinese, Thalis",
    time: "35 MINS",
    offOnItem: "₹200 FOR TWO",
    couponCode: "50% off | Use LNBINGE",
    id: "4540"
  },
  {
    dishImage: "food4.jpeg",
    restaurantName: "Ganpati Restaurent",
    foodType: "Indian, Chinese, Thalis",
    time: "35 MINS",
    offOnItem: "₹200 FOR TWO",
    couponCode: "50% off | Use LNBINGE",
    id: "4541"
  }
];

function CartComponent(props) {
  const [restaurant, setRestaurant] = useState(itemArray);
  const onRemoveItem = productId => {
    console.log(productId);
    const newData = restaurant.filter((i, id) => {
      // console.log(i);
      return i.id !== productId;
    });
    console.log(newData);
    setRestaurant(newData);
  };
  const onAddItem = () => {};
  const onClickCheckout = () => {
    alert("Hello Checkout Page is there");
  };
  // useEffect(() => {
  //   setRestaurant(restaurant);
  // }, []);
  console.log(restaurant.length);
  return (
    <div>
      <div className="logoWrapper">
        <img src={logoImage} alt="logo_png" height={"125px"} />
      </div>
      <div className="appBase">
        {restaurant.map((item, id) => {
          return (
            <CartItemCard
              //   image={`${"./"}${item.dishImage}`}
              name={item.restaurantName}
              typeOfFood={item.foodType}
              deliveryTime={item.time}
              offer={item.offOnItem}
              discountOffer={item.couponCode}
              onRemoveItem={() => onRemoveItem(item.id)}
              key={id}
              onAddItem={() => onAddItem(item.id)}
            />
          );
        })}
      </div>
      <div className="checkoutButton" onClick={() => onClickCheckout()}>
        <div className="checkout">Continue to Checkout</div>
      </div>
    </div>
  );
}

export default CartComponent;
