import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../checkOut/CheckoutProduct";
import Subtotal from "../checkOut/Subtotal";
import { useStateValue } from "../dataLayer/StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();
  var key = Math.random();
  const checkOut = basket.map((item) => {
    return (
      <>
        <CheckoutProduct
          key={key}
          image={item.image}
          title={item.title}
          price={item.price}
          rating={item.rating}
          id={item.id}
        />
        
      </>
    );
  });
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="..//images/img8.jpg"
          alt="checkOut banner"
        />
        <div>
          <h2 className="checkout_title">your Shooping Busket</h2>
          {/* busket item render here */}
          {checkOut}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
