"use client";
import React, { useEffect, useState } from "react";
import classes from "./ProductFilter.module.scss";
import ProductCard from "../Cards/ProductCard/ProductCard";
import ArrowButton from "../common/Buttons/ArrowButton/ArrowButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductFilter = ({ data }) => {
  const [productList, setProductList] = useState(data);
  const [hasData, setHasData] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setProductList(data);
  }, [data.length]);

  const filterHandler = (name) => {
    const filterData = data.filter((i) =>
      i.attributes.materials.data.some((itm) => itm.attributes.name == name)
    );

    if (name === "Top Products") {
      setProductList(data);
      setHasData(true);
      return;
    }
    if (filterData.length === 0) {
      setHasData(false);
    } else {
      setProductList(filterData);
      setHasData(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.desk_categories}>
        <ul>
          {filterBtn.map((item, index) => (
            <li key={index}>
              <button
                className={classes.btn}
                onClick={() => filterHandler(item.btn)}
              >
                {item.btn}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.mob_container}>
        <h2>Categories</h2>
        <select
          className={classes.mob_categories}
          onChange={(e) => filterHandler(e.target.value)}
        >
          {filterBtn.map((item, index) => (
            <option key={index}>{item.btn}</option>
          ))}
        </select>
      </div>
      <hr />
      <div className={classes.product_card}>
        {hasData ? (
          productList?.map((i, idx) => (
            <ProductCard
              key={idx}
              onClick={() => router.push(`/product_details/${i?.id}`)}
              title={i?.attributes?.name}
              materials={i?.attributes?.materials?.data}
            />
          ))
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "440px",
            }}
          >
            <p>No Product Found !</p>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "40px",
        }}
      >
        {hasData && (
          <Link href={"/products"} className={classes.explore_btn_container}>
            <ArrowButton name="Explore more" customClass={classes.more_btn} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
const filterBtn = [
  { btn: "Top Products" },
  { btn: "Ceramic" },
  { btn: "Glass" },
  { btn: "Steel" },
];
