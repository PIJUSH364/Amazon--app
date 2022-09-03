import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      {" "}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <i className="fa-solid fa-magnifying-glass header_searchIcon"></i>
        {/* logo */}
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionLineOne">hello Pijush</span>
            <span className="header_optionLineTwo">sign in</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        {/* <div className="header_option">
              <span className="header_optionLineOne"></span><span className="header_optionLineTwo">Cart</span>
            </div> */}
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <i className="fa-solid fa-basket-shopping"></i>

            <span className="header_optionLineTwo header_BasketCount">
              {/* {basket?.length} */}0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
