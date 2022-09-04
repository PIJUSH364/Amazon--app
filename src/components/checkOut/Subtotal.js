import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../dataLayer/StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const priceAll = basket.map((e) => {
    return Number(e.price);
  });
  const amount = (preValue, currentValue) => {
    return (currentValue += preValue);
  };
  const subTotal = priceAll.reduce(amount, 0);
  console.log(subTotal);
  return (
    <div className="subtotal">
      <CurrencyFormat
        // decimalScale={4}
        value={subTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal {basket?.length} items : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This is your order contain a gift
            </small>
          </>
        )}
      />

      <button type="submit">Proced to checkout</button>
    </div>
  );
}

export default Subtotal;
