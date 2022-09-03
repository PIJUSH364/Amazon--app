import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../checkOut/CheckoutProduct";

// import { useStateValue } from "./StateProvider";
import Subtotal from "../checkOut/Subtotal";

function Checkout() {
  // const [{ basket }, dispatch] = useStateValue();
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
          <CheckoutProduct /> <CheckoutProduct /> <CheckoutProduct />{" "}
          <CheckoutProduct />
          {/* {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))} */}
        </div>
      </div>

      <div className="checkout_right">
        {/* <h2>your subtotal will go here</h2> */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
