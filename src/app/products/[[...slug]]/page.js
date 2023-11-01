"use client";

import React, { useEffect } from "react";
import classes from "./Products.module.scss";
import HeroContainer from "@/components/home/hero/hero";
import Button from "@/components/common/Buttons/Button/Button";
import ProductCard from "@/components/Cards/ProductCard/ProductCard";
import { getMoreData } from "@/services/morePageService";
import { getAllFilterPills } from "@/services/filterService";
import { getAllProducts } from "@/services/productsServices";
import PillContainer from "@/components/common/PillContainer/PillContainer";
import { useRouter } from "next/navigation";
import ProductContainer from "@/components/ProductContainer/ProductContainer";

async function Products(props) {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  const { categories, materials, products, data } = await getData();

  return (
    <div className={classes.container}>
      <HeroContainer
        bannerImageData={data?.productpage_banner?.data?.attributes?.url}
      />
      <div className={classes.pill_container}>
        <div className={classes.upper_container}>
          <div className={classes.tag}>
            <div className={classes.title}>
              <h1>Material used</h1>
            </div>
            <Button name="Clear Filters" customClass={classes.btn} />
          </div>
          <div className={classes.pills}>
            <PillContainer
              pillDetails={materials}
              pillClass={classes.pill_container_filter}
            />
          </div>
        </div>
        <div className={classes.lower_container}>
          <div className={classes.title}>
            <h1>Products categories</h1>
          </div>
          <div className={classes.pills}>
            <PillContainer
              pillDetails={categories}
              pillClass={classes.pill_container_filter}
            />
          </div>
        </div>
      </div>
      <div className={classes.cardContainer}>
        {/* <ProductContainer data={data} /> */}
      </div>
    </div>
  );
}

export default Products;

async function getData() {
  const categories = await getAllFilterPills("categories").then(
    (res) => res.data.data
  );
  const materials = await getAllFilterPills("materials").then(
    (res) => res.data.data
  );
  const products = await getAllProducts().then((res) => res.data.data);
  const data = await getMoreData().then((res) => res.data.data.attributes);
  return { categories, materials, products, data };
}
