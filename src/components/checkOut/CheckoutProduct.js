import React from "react";
import { useStateValue } from "../dataLayer/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    console.log("removeFromBasket");
    dispatch({
      type:"REMOVE_FROM_BASKET"
    })
  };
  return (
    <div className="checkoutProduct">
      <img
        src={image}
        alt="checkout-product-img"
        className="checkoutProduct_image "
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_info">
          {/* how much rating pass on props that much rating reder on page */}
          {/* {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarBorderIcon />
              </p>
            ))} */}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
