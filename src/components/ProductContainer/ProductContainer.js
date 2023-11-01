import React from "react";
import classes from "./ProductContainer.module.scss";
import ProductCard from "../Cards/ProductCard/ProductCard";
import Button from "../common/Buttons/Button/Button";
import TopBtn from "../common/Buttons/TopBtn/TopBtn";

function ProductContainer({ data }) {
  return (
    <div className={classes.container}>
      {data?.map((item, index) => (
        <ProductCard
          key={index}
          cardData={item}
          title={item.attributes.name}
          materials={item.attributes.materials.data}
          onClick={() => router.push(`/product_details/${item?.id}`)}
        />
      ))}
      <div className={classes.buttons}>
        <Button name="Load More" />
        <TopBtn />
      </div>
    </div>
  );
}

export default ProductContainer;
