// import React from "react";
// import "./Subtotal.css";
// // import CurrencyFormat from "react-currency-format";
// // import { useStateValue } from "./StateProvider";
// // import { getBasketTotal } from "./reducer";

// function Subtotal() {
//   // const [{ basket }] = useStateValue();
//   // const [{ basket }, dispatch] = useStateValue();
//   // const subtotalPrice=()=>{
//   //   for (let i = 0; i < basket.length; i++) {

//   //     return

//   //   }
//   // }
//   return (
//     <div className="subtotal">
//       <>
//         <p>
//           Subtotal 0 items : <strong></strong>{" "}
//         </p>
//         <small className="subtotal_gift">
//           {" "}
//           <input type="checkbox" /> This is your order contain a gift
//         </small>
//       </>
//       {/* <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               Subtotal ({basket.length} items) : <strong>{value}</strong>{" "}
//             </p>
//             <small className="subtotal_gift">
//
//               <input type="checkbox" /> This is your order contain a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       /> */}

//       <button>Proced to checkout</button>
//     </div>
//   );
// }

// export default Subtotal;
// ========================================
// ========================================
// ========================================

import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        // decimalScale={4}
        value={2456981}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal 0 items : <strong>{value}</strong>
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
