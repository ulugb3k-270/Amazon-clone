import { Star } from "@material-ui/icons";
import { Button, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/Collection.css";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";

export default function Electronics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = (async) => {
      const unsubscribe = fetch(
        `https://fakestoreapi.com/products/category/electronics`
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));

      return unsubscribe;
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="Collection">
      <Header />
      <HeaderMenu />
      <div className="collection__resultsInfo">
        <div className="collection__resultContainer">
          <p>
            1-{data.length} results for <span>"Electronics"</span>
          </p>
        </div>
      </div>
      {data.length ? (
        <div className="collection__result collection__resultContainer">
          {data.map((data) => (
            <div key={data.id} className="collection__resultBox">
              <div className="collection__resultBoxRightr">
                <img src={data?.image} alt={data?.title} />
                <div className="collection__resultBoxDescription">
                  <h4>{data?.title}</h4>
                  <p>
                    {data?.rating?.rate} <Star />
                  </p>
                  <p className="main__productPrice">{data?.price} $</p>
                </div>
              </div>
              <Button>Add to Basket</Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="collection__resultContainer collection__result">
          <div className="collection__resultBox collection__skeletion">
            <Skeleton variant="rectangular" width={273} height={217} />
            <Skeleton variant="rectangular" width={273} height={217} />
            <Skeleton variant="rectangular" width={273} height={217} />
            <Skeleton variant="rectangular" width={273} height={217} />
            <Skeleton variant="rectangular" width={273} height={217} />
            <Skeleton variant="rectangular" width={273} height={217} />
            <Skeleton variant="rectangular" width={273} height={217} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
