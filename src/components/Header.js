import { LocationOn, Search, ShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [order, serOrder] = useState("0");
  const [{user}, dispatch] = useStateValue()

  


  return (
    <div className="header" id="header">
      <div className="header__left">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt="logo"
          />
        </Link>
        <div className="nav__leftLocation">
          <p className="text">Delivery to</p>
          <h4>
            <LocationOn /> Uzbekistan
          </h4>
        </div>
      </div>
      <form action="" className="header__mid">
        <input type="text" placeholder="" />
        <Search />
        <button type="submit"></button>
      </form>
      <div className="header__right">
        <Link to={!user ? "/log" : "/"}>
          <div className="header__rightUser">
            <p className="text">Hello, {user?.email ? user?.email : "Sign in"}</p>
            <h4>{`Accounts & Lists`}</h4>
          </div>
        </Link>
        <Link to="/">
          <div className="header__rightReturn">
            <p className="text">Returns</p>
            <h4>{`& Orders`}</h4>
          </div>
        </Link>
        <Link to="/">
          <div className="header__rightCart">
            <ShoppingCart />
            <h4>Cart</h4>
            <p className="numberOfOrder">{order}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
