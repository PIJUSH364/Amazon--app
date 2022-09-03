import React from "react";
import { useState } from "react";
import "./Product.css";
// import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  // const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the busket", basket);

  // const addToBusket = () => {
  //   // dispatch the item from data layer
  //   dispatch(
  //     {
  //       type: "ADD_TO_BASKET",
  //       item: {
  //         id: id,
  //         title: title,
  //         image: image,
  //         price: price,
  //         rating: rating,
  //       },
  //     },
  //     []
  //   );
  // };

  const [count, setCount] = useState(0);
  function totalItems() {
    setCount((count) => count + 1);
    console.log(count);
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {/* how much rating pass on props that much rating reder on page */}

          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <i className="fa-regular fa-star-sharp"></i>
              </p>
            ))}
        </div>
        <div className="product_img">
          <img src={image} alt="product-img" />
          {/* <button onClick={addToBusket}>Add to Cart </button> */}
          <button onClick={totalItems}>Add to Cart </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
