import { Menu } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./css/HeaderMenu.css";
export default function HeaderMenu() {
  return (
    <div className="headerMenu">
      <div className="headerMenu__burger">
        <Menu />
        <p>All</p>
      </div>
      <div className="headerMenu__list">
        <Link to="/">
          <p>Today's Deals</p>
        </Link>
        <Link to="/">
          <p>Customer Services</p>
        </Link>
        <Link to="/">
          <p>Registry</p>
        </Link>
        <Link to="/">
          <p>Gift Cards</p>
        </Link>
      </div>
    </div>
  );
}
