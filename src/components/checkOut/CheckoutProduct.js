import React from "react";
import "./CheckoutProduct.css";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import { useStateValue } from "./StateProvider";
// function CheckoutProduct({ id, title, image, price, rating }) {
function CheckoutProduct() {
  // const [{ basket }, dispatch] = useStateValue();
  // const [dispatch] = useStateValue();
  // const removeFromBasket = () => {
  //   dispatch({
  //     type: "REMOVE_FROM_BASKET",
  //     id: id,
  //   });
  // };

  return (
    <div className="checkoutProduct">
      <img
        src="https://asset.msi.com/resize/image/global/product/product_1652084089f186edc14f9d018b77a37b5aee4f5a5a.png62405b38c58fe0f07fcef2367d8a9ba1/400.png"
        className="checkoutProduct_image"
        alt="checkout-product-img"
      />
      <div className="checkoutProduct_info">
        {/* <p className="checkoutProduct_title">{title}</p> */}
        <p className="checkoutProduct_title">cdcdce</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          {/* <strong>{price}</strong> */}
          <strong>78</strong>
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
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
