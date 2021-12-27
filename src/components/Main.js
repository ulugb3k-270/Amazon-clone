import React, { useState, useEffect } from "react";
import "./css/Main.css";
import MainItem from "./MainItem";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { Star } from "@material-ui/icons";
import { Box } from "@mui/material";
import { Skeleton } from "@mui/material";

export default function Main() {
  const randomNumber = Math.floor(Math.random() * 4);

  const [{ user }] = useStateValue();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div className="Main container" id="main">
      <div className="main_bgshadow">
        <img
          src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg"
          alt=""
          className=""
        />
        <div className="asdss"></div>
      </div>

      <div className="main__content">
        <MainItem
          randomNumber={randomNumber}
          link="electronics"
          title="Electronics"
          category="products/category/electronics"
        />
        <MainItem
          randomNumber={randomNumber}
          link="jewelery"
          title="Jewelery"
          category="products/category/jewelery"
          isSquad
        />
        <MainItem
          randomNumber={randomNumber}
          link="m-clothing"
          title="Men's Clothing"
          category="products/category/men's clothing"
        />
        <MainItem
          randomNumber={randomNumber}
          link="w-clothing"
          title="Women's Clothing"
          category="products/category/women's clothing"
        />
      </div>
      {!user && (
        <div className="mainItem__userLogIn">
          <p>Sign in for best experience</p>
          <Button>
            <Link to="/">Sign in</Link>
          </Button>
        </div>
      )}

      <div className="main__productCards">
        {items.length ? (
          items.map((item) => (
            <div key={item?.id} className="main__productCard">
              <img src={item?.image} alt="" />
              <p className="main__productPrice">
                {item?.price} USD{" "}
                <span className="main__productRating">
                  {item?.rating.rate} <Star />
                </span>
              </p>
              <p className="main__productDes">
                {truncate(item?.description, 100)}
              </p>
              <Button>Add to basket</Button>
            </div>
          ))
        ) : (
          <>
            <Skeleton variant="rectangular" width={311} height={447} />
            <Skeleton variant="rectangular" width={311} height={447} />
            <Skeleton variant="rectangular" width={311} height={447} />
            <Skeleton variant="rectangular" width={311} height={447} />
          </>
        )}
      </div>
    </div>
  );
}
