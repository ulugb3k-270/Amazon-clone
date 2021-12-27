import { Skeleton } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/MainItem.css";

export default function MainItem({
  randomNumber,
  link,
  title,
  category,
  isSquad,
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/${category}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div className="MainItem">
      <div className="card">
        <p>{title}</p>
        {isSquad ? (
          items.length ? (
            <div className="squadCollection">
              <img src={items[0]?.image} alt="" />
              <img src={items[1]?.image} alt="" />
              <img src={items[2]?.image} alt="" />
              <img src={items[3]?.image} alt="" />
            </div>
          ) : (
            <Skeleton variant="rectangular" width={312} height={312} />
          )
        ) : (
          items.length ? (

            <img src={items[randomNumber]?.image} alt="" />
          ) : (
            <Skeleton variant="rectangular" width={312} height={312} />
          )
        )}
        <Link to={link}>
          <p>Shop now</p>
        </Link>
      </div>
    </div>
  );
}
